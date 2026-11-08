"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const GITHUB_URL = "https://github.com/aliazazrafe";
const LINKEDIN_URL = "https://www.linkedin.com/in/aliazazrafe/";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E5DD] bg-[#FAF8F4]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 md:px-10"
      >
        <div className="flex shrink-0 items-center gap-[33px] sm:gap-[37px]">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[21px] font-semibold tracking-tight text-[#424441] sm:text-[25px]"
          >
            Ali Azaz<span className="text-[#6C8554]">.</span>
          </a>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#D7DDCE] px-2 text-[#526A46] transition-colors hover:bg-[#E8EDDF] sm:h-9 sm:gap-2 sm:px-3"
            >
              <FaGithub size={15} />
              <span className="text-[10px] font-medium sm:text-xs">
                GitHub
              </span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#D7DDCE] px-2 text-[#526A46] transition-colors hover:bg-[#E8EDDF] sm:h-9 sm:gap-2 sm:px-3"
            >
              <FaLinkedinIn size={14} />
              <span className="text-[10px] font-medium sm:text-xs">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full bg-[#748B65] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#536C40]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#526A46] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#405635] lg:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D7DDCE] text-[#526A46] sm:h-9 sm:w-9 lg:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#E7E5DD] bg-[#FAF8F4] px-5 py-5 sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#424441] transition-colors hover:bg-[#E8EDDF] hover:text-[#526A46]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#526A46] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#405635]"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}