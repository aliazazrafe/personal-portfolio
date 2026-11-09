
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="w-full overflow-hidden border-t border-[#E1E7DB] bg-[#F0F5EC]">
      <div className="container-universal py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1.4fr_0.65fr_0.85fr] lg:gap-12">
          {/* Brand and Description */}
          <div className="min-w-0">
            <a
              href="#home"
              className="inline-block font-serif text-[clamp(2rem,4vw,2.7rem)] font-semibold leading-tight tracking-tight text-[#424441]"
            >
              Ali Azaz<span className="text-[#6C8554]">.</span>
            </a>

            <p className="mt-4 max-w-[480px] font-sans text-[14px] leading-7 text-[#686A63] sm:text-[15px]">
              I&apos;m always interested in meaningful projects,
              creative ideas, and opportunities to collaborate.
              Let&apos;s create something amazing together.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full bg-[#6C8554] px-5 font-sans text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#526A46] sm:text-[14px]"
              >
                Let&apos;s Talk
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aliazazrafe200%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full bg-[#6C8554] px-5 font-sans text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#526A46] sm:text-[14px]"
              >
                <Mail size={17} />
                Email Me
              </a>
            </div>
          </div>

          {/* Explore and Social Links */}
          <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:contents">
            {/* Explore */}
            <div className="min-w-0">
              <h3 className="mb-4 font-sans text-[19px] font-semibold text-[#424441] sm:text-[21px]">
                Explore
              </h3>

              <nav
                aria-label="Footer navigation"
                className="flex flex-col items-start gap-3"
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-[14px] text-[#526A46] transition-colors duration-300 hover:text-[#344A2B] sm:text-[15px]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Follow Me */}
            <div className="min-w-0">
              <h3 className="mb-4 font-sans text-[19px] font-semibold text-[#424441] sm:text-[21px]">
                Follow Me
              </h3>

              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex min-w-0 items-center gap-2.5 font-sans text-[13px] text-[#526A46] transition-colors duration-300 hover:text-[#344A2B] sm:gap-3 sm:text-[15px]"
                    >
                      <motion.span
                        whileHover={
                          reduceMotion
                            ? undefined
                            : { scale: 1.08 }
                        }
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6C8554] text-white transition-colors duration-300 group-hover:bg-[#526A46] sm:h-10 sm:w-10"
                      >
                        <SocialIcon size={17} />
                      </motion.span>

                      <span className="min-w-0">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-9 flex flex-col items-center justify-between gap-2 border-t border-[#DCE5D6] pt-5 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-[12px] text-[#777970] sm:text-[13px]">
            © {new Date().getFullYear()} Ali Azaz. All rights reserved.
          </p>

          <p className="font-sans text-[12px] text-[#777970] sm:text-[13px]">
            Designed &amp; Developed by Ali Azaz
          </p>
        </div>
      </div>
    </footer>
  );
}
