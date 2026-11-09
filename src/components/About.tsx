
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Lightbulb,
  BookOpen,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CSE Undergraduate",
    description: "Dhaka International University",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Frontend & Backend",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Building Practical Solutions",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-universal overflow-hidden bg-[#FAF8F4]"
    >
      <div className="container-universal">
        <div className="grid items-start gap-12 border-t border-[#E7E5DD] pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: -35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">
              Get To Know Me
            </p>

            <h2 className="section-title max-w-[500px]">
              Passionate About
              <span className="block italic text-[#71885A]">
                Building Meaningful
              </span>
              Digital Experiences.
            </h2>

            <p className="section-description mt-6 max-w-md">
              A Computer Science and Engineering student
              passionate about full-stack web development,
              problem-solving, and building useful digital
              experiences.
            </p>

            <div className="mt-9 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EDDF] text-[#657E50]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="font-sans text-[14px] font-semibold text-[#424441]">
                        {item.title}
                      </h3>

                      <p className="font-sans text-[12px] text-[#777970]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education Card */}
            <div className="mt-10 rounded-2xl border border-[#DCE4D5] bg-[#E8EDDF] p-6">
              <div className="mb-4 flex items-center gap-3 text-[#657E50]">
                <BookOpen size={20} />
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em]">
                  Education
                </span>
              </div>

              <h3 className="font-serif text-[22px] leading-snug text-[#424441]">
                BSc in Computer Science
                and Engineering
              </h3>

              <p className="mt-3 font-sans text-[14px] font-medium text-[#526A46]">
                Dhaka International University
              </p>

              <span className="mt-4 inline-flex rounded-full border border-[#BFCDB3] bg-[#FAF8F4] px-4 py-1.5 font-sans text-[12px] font-medium text-[#657E50]">
                Currently Pursuing
              </span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="lg:border-l lg:border-[#E7E5DD] lg:pl-12"
          >
            <p className="mb-5 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#71885A]">
              A Little About Myself
            </p>

            <h3 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[1.3] text-[#424441]">
              Hi, I&apos;m{" "}
              <span className="text-[#71885A]">
                Ali Azaz.
              </span>
            </h3>

            <div className="mt-6 space-y-5">
              <p className="body-text">
                I&apos;m currently pursuing a Bachelor
                of Science in Computer Science and
                Engineering (CSE) at Dhaka International
                University. Alongside my academic studies,
                I&apos;m actively developing my skills
                in full-stack web development.
              </p>

              <p className="body-text">
                I enjoy building modern, responsive,
                and user-friendly web applications.
                My technical experience includes
                JavaScript, TypeScript, React, Next.js,
                Tailwind CSS, Node.js, Express.js,
                and MongoDB.
              </p>

              <p className="body-text">
                Through hands-on projects like{" "}
                <span className="font-semibold text-[#526A46]">
                  StudioSpace
                </span>
                , a creative studio booking platform,
                I&apos;ve gained practical experience
                working with authentication, REST APIs,
                database operations, and application
                deployment.
              </p>

              <p className="body-text">
                As a CSE student and aspiring software
                developer, I&apos;m committed to continuous
                learning, strengthening my problem-solving
                skills, and building meaningful digital
                products. I look forward to opportunities
                where I can learn, collaborate, and
                contribute to real-world projects.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-primary"
              >
                View My Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="btn-outline"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
