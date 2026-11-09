
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-76px)] scroll-mt-[76px] items-center overflow-hidden bg-[#FAF8F4] py-12 lg:py-16"
    >
      <div className="container-universal relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 min-w-0 lg:order-1">
            <motion.p
              {...fadeUp(0.1)}
              className="mb-5 inline-flex rounded-full border border-[#D9E4D1] bg-[#EDF3E8] px-5 py-2 font-sans text-[13px] font-semibold tracking-wide text-[#607D4D]"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-serif text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.12] tracking-tight text-[#424441]"
            >
              Hi, I&apos;m{" "}
              <span className="text-[#6C8554]">
                Ali Azaz.
              </span>
            </motion.h1>

            <motion.h2
              {...fadeUp(0.35)}
              className="mt-5 font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium text-[#526A46]"
            >
              Full-Stack Web Developer
            </motion.h2>

            <motion.p
              {...fadeUp(0.5)}
              className="mt-6 max-w-[540px] font-sans text-[15px] leading-8 text-[#686A63] sm:text-[16px]"
            >
              I build modern, responsive, and user-friendly
              web applications with clean design and
              efficient functionality. I enjoy turning
              creative ideas into real digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.65)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#6C8554] px-6 font-sans text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#526A46] hover:shadow-md"
              >
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#C9D8BE] bg-[#EDF3E8] px-6 font-sans text-[14px] font-semibold text-[#526A46] transition-all duration-300 hover:bg-[#E0EBD8]"
              >
                Get In Touch
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          {/* Right Profile Image */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
            className="relative order-1 mx-auto w-full max-w-[440px] lg:order-2"
          >
            {/* Original Image - No Extra Background */}
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[30px] border border-[#DCE6D4] bg-[#E8EDDF]">
              <Image
                src="/ali-azaz.png"
                alt="Ali Azaz - Full-Stack Web Developer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : 1,
                ease: "easeOut",
              }}
              className="absolute -bottom-5 -left-4 rounded-2xl border border-[#DCE6D4] bg-[#FDFCF9] px-5 py-3 shadow-sm sm:-left-8"
            >
              <p className="font-sans text-[13px] font-semibold text-[#526A46]">
                Creative Developer
              </p>
              <p className="mt-1 font-sans text-[12px] text-[#777970]">
                Building Digital Experiences
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
