"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, Folder, Pin } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    number: "01",
    title: "StudioSpace",
    category: "Full-Stack Web Application",
    description:
      "A creative studio booking platform to explore spaces, view studio details, and manage bookings.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Render",
    ],
    image: "/StudioSpace%20nine-tile%20website%20collage.png",
    liveUrl: "https://studiospace-client-rho.vercel.app/",
    githubUrl: "https://github.com/aliazazrafe/studiospace-client",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "FitLog",
    category: "Workout Library",
    description:
      "A workout library to explore exercises, view instructions, create a daily workout plan, and save workouts for later.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "React Hot Toast",
      "REST API",
      "LocalStorage",
    ],
    image: "/FitLog%20workout%20library%20collage.png",
    liveUrl: "https://fitlog-workout-library-alpha.vercel.app/",
    githubUrl: "https://github.com/aliazazrafe/fitlog-workout-library",
    featured: false,
  },
  {
    id: 3,
    number: "03",
    title: "Bazar Dor",
    category: "Market Price Dashboard",
    description:
      "A Bangla market price dashboard for browsing essential product prices, comparing price changes, and viewing market information.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "PostgreSQL",
      "React Hot Toast",
      "REST API",
    ],
    image: "/Bazar%20Dor%20market%20dashboard%20and%20sign-in.png",
    liveUrl: "https://damchitro.vercel.app/",
    githubUrl: "https://github.com/aliazazrafe/damchitro",
    featured: false,
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#FAF8F4] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#647D4D]">
              Selected Work
            </p>

            <h2 className="font-serif text-[clamp(2.4rem,4.5vw,4rem)] leading-tight tracking-tight text-[#424441]">
              Featured Projects
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#686A63]">
              A selection of projects that reflect my approach to building
              practical and user-focused applications.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm text-[#657E50] md:flex">
            <Folder size={19} />
            <span>My Work</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className={`group flex h-full scale-[1.005] flex-col overflow-hidden rounded-2xl border bg-[#F5F3ED] transition-colors duration-300 ${
                project.featured
                  ? "border-[#B9C5AB] shadow-[0_8px_24px_rgba(60,80,50,0.07)]"
                  : "border-[#E7E5DD] hover:border-[#B9C5AB]"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E4E9DC]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute bottom-3 left-4 rounded-full bg-[#FAF8F4]/90 px-2.5 py-1 text-[9px] font-medium tracking-[0.14em] text-[#526A46]">
                  PROJECT {project.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#657E50]">
                  {project.category}
                </span>

                <h3 className="mt-3 font-serif text-2xl leading-tight text-[#424441]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6D7068]">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777970]">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#E1E4D9] bg-white/70 px-3 py-1.5 text-[11px] font-medium text-[#626D5C]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {project.featured && (
                  <div className="mt-5 border-t border-[#E1E4D9] pt-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777970]">
                      Project Highlight
                    </p>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D6DFCC] bg-[#E9EFE3] px-3 py-1.5 text-[11px] font-medium text-[#657E50]">
                      <Pin size={13} />
                      Featured Project
                    </span>
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#6C8554] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#536C40]"
                  >
                    Live Preview
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#B9C5AB] px-4 py-2.5 text-xs font-medium text-[#526A46] transition-colors hover:bg-[#E9EFE3]"
                  >
                    <FaGithub size={15} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-[#777970]"
        >
          <span>More projects coming soon</span>
          <ArrowUpRight size={17} className="text-[#657E50]" />
        </motion.div>
      </div>
    </section>
  );
}