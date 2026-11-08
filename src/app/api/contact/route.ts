import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    // Bot honeypot: accept quietly without sending an email.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return Response.json({ success: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2 || name.length > 80) {
      return Response.json(
        { error: "Name 2 থেকে 80 characters-এর মধ্যে দাও।" },
        { status: 400 },
      );
    }

    if (email.length > 254 || !emailPattern.test(email)) {
      return Response.json(
        { error: "একটি সঠিক email address দাও।" },
        { status: 400 },
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return Response.json(
        { error: "Message 10 থেকে 5000 characters-এর মধ্যে হতে হবে।" },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const senderEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey || !receiverEmail) {
      console.error("Contact form email environment variables are missing.");

      return Response.json(
        { error: "Message service configure করা হয়নি।" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const safeName = name.replace(/[\r\n]+/g, " ");

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [receiverEmail],
      replyTo: email,
      subject: `Portfolio message from ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return Response.json(
        { error: "Email পাঠানো যায়নি। পরে আবার চেষ্টা করো।" },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Server error হয়েছে। পরে আবার চেষ্টা করো।" },
      { status: 500 },
    );
  }
}
