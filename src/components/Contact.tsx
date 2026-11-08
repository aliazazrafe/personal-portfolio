"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const CONTACT_EMAIL = "aliazazrafe200@gmail.com";
const CONTACT_PHONE_DISPLAY = "+880 1785-585936";
const CONTACT_PHONE_LINK = "+8801785585936";
const WHATSAPP_URL = "https://wa.me/8801785585936";

const GMAIL_COMPOSE_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: formData.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Message পাঠানো যায়নি। আবার চেষ্টা করো.",
        );
      }

      setStatus("success");
      setFeedback("Your message has been sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      formElement.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-[76px] bg-[#FAF8F4] py-10 sm:py-12 lg:flex lg:min-h-[calc(100svh-76px)] lg:items-center lg:py-6"
    >
      <div className="container-universal w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 lg:mb-5"
        >
          <p className="section-label">Get In Touch</p>

          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight text-[#424441]">
            Let&apos;s Work Together.
          </h2>

          <p className="mt-2 font-sans text-[14px] text-[#777970]">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-[22px] border border-[#E2E7D9] bg-[#E8EDDF] p-6 sm:p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D8E3CE] text-[#607D4D]">
              <Mail size={22} strokeWidth={1.8} />
            </div>

            <h3 className="mt-5 font-serif text-[26px] font-semibold text-[#424441]">
              Have an idea?
            </h3>

            <p className="mt-3 max-w-md font-sans text-[14px] leading-7 text-[#686A63]">
              Whether it&apos;s a new website, a full-stack application, or a
              collaboration, feel free to reach out.
            </p>

            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex max-w-full items-center gap-2 break-all font-sans text-[14px] font-medium text-[#526A46] underline underline-offset-4 hover:text-[#354B2B]"
            >
              {CONTACT_EMAIL}
              <ArrowUpRight size={16} className="shrink-0" />
            </a>

            <a
              href={`tel:${CONTACT_PHONE_LINK}`}
              className="mt-3 inline-flex w-fit items-center gap-2 font-sans text-[14px] font-medium text-[#526A46] underline underline-offset-4 hover:text-[#354B2B]"
            >
              <Phone size={15} />
              {CONTACT_PHONE_DISPLAY}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp at ${CONTACT_PHONE_DISPLAY}`}
              className="mt-3 inline-flex w-fit items-center gap-2 font-sans text-[14px] font-medium text-[#526A46] underline underline-offset-4 hover:text-[#354B2B]"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>

            <div className="mt-auto pt-7">
              <div className="border-t border-[#CED9C4] pt-5">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/aliazazrafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C4D2B8] text-[#526A46] transition-colors hover:bg-[#607D4D] hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aliazazrafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C4D2B8] text-[#526A46] transition-colors hover:bg-[#607D4D] hover:text-white"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[22px] border border-[#E7E5DD] bg-white/70 p-6 sm:p-7"
          >
            <h3 className="font-serif text-[25px] font-semibold text-[#424441]">
              Send Me a Message
            </h3>

            <p className="mt-1 font-sans text-[13px] text-[#777970]">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-sans text-[12px] font-semibold text-[#424441]"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-[#E7E5DD] bg-[#FAF8F4] px-4 py-2.5 font-sans text-[13px] text-[#424441] outline-none transition-colors placeholder:text-[#A0A29B] focus:border-[#71885A]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-sans text-[12px] font-semibold text-[#424441]"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      email: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-[#E7E5DD] bg-[#FAF8F4] px-4 py-2.5 font-sans text-[13px] text-[#424441] outline-none transition-colors placeholder:text-[#A0A29B] focus:border-[#71885A]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-sans text-[12px] font-semibold text-[#424441]"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder="Tell me about your project..."
                  required
                  minLength={10}
                  maxLength={5000}
                  value={form.message}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-[#E7E5DD] bg-[#FAF8F4] px-4 py-2.5 font-sans text-[13px] text-[#424441] outline-none transition-colors placeholder:text-[#A0A29B] focus:border-[#71885A]"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute -left-[10000px] h-px w-px overflow-hidden"
              >
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#6C8554] px-5 font-sans text-[13px] font-semibold text-white transition-colors hover:bg-[#526A46] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`font-sans text-[12px] ${
                    status === "success" ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}