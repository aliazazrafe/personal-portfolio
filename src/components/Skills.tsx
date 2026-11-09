
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Braces,
  ArrowLeftRight,
  ShieldCheck,
  DatabaseZap,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiPostman,
} from "react-icons/si";

import type { ComponentType } from "react";

type Technology = {
  name: string;
  color: string;
  icon?: ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  logo?: string;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: typeof Code2;
  technologies: Technology[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and modern user interfaces.",
    icon: Code2,
    technologies: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#D4B200" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#149ECA" },
      { name: "Next.js", icon: SiNextdotjs, color: "#333333" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      {
        name: "shadcn/ui",
        logo: "https://cdn.simpleicons.org/shadcnui/18181B",
        color: "#18181B",
      },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Version control, testing, and deployment.",
    icon: Wrench,
    technologies: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#333333" },
      { name: "Vercel", icon: SiVercel, color: "#333333" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      {
        name: "Render",
        logo: "https://cdn.simpleicons.org/render/46A38A",
        color: "#46A38A",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Building APIs and secure server-side applications.",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#333333" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "REST API", icon: ArrowLeftRight, color: "#6C8554" },
      { name: "JWT Auth", icon: ShieldCheck, color: "#7C58A5" },
      { name: "CRUD", icon: DatabaseZap, color: "#3D8D84" },
    ],
  },
  {
    title: "Database",
    description: "Working with SQL, NoSQL, and cloud databases.",
    icon: Database,
    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#13AA52" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169A1" },
    ],
  },
  {
    title: "Other Skills",
    description:
      "Additional programming languages and problem-solving skills.",
    icon: Braces,
    technologies: [
      {
        name: "C",
        logo: "https://cdn.simpleicons.org/c/A8B9CC",
        color: "#A8B9CC",
      },
      {
        name: "C++",
        logo: "https://cdn.simpleicons.org/cplusplus/00599C",
        color: "#00599C",
      },
      {
        name: "C#",
        logo: "https://cdn.simpleicons.org/sharp/68217A",
        color: "#68217A",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#E76F00",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
    ],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-universal overflow-hidden bg-[#F5F3ED]"
    >
      <div className="container-universal">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 max-w-2xl"
        >
          <p className="section-label">My Expertise</p>

          <h2 className="section-title">
            Skills & Technologies
          </h2>

          <p className="section-description mt-4">
            Technologies, programming languages, and tools
            I use to develop modern web applications and
            solve programming challenges.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className={`rounded-2xl border border-[#E7E5DD] bg-[#FAF8F4] p-5 sm:p-6 ${
                  category.title === "Other Skills"
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                {/* Category Title */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8EDDF] text-[#657E50]">
                    <CategoryIcon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[22px] font-semibold leading-tight text-[#424441] sm:text-[24px]">
                      {category.title}
                    </h3>

                    <p className="mt-1 font-sans text-[12px] leading-5 text-[#777970]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Technology Cards */}
                <div
                  className={`grid grid-cols-3 gap-2 sm:grid-cols-4 ${
                    category.title === "Other Skills"
                      ? "lg:grid-cols-5"
                      : ""
                  }`}
                >
                  {category.technologies.map((tech) => {
                    const TechIcon = tech.icon;

                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : { y: -3 }
                        }
                        transition={{ duration: 0.2 }}
                        className="flex min-h-[78px] flex-col items-center justify-center gap-2 rounded-lg border border-[#E7E5DD] bg-white/70 px-2 py-3 transition-colors hover:border-[#B8C9AC] hover:bg-white"
                      >
                        {TechIcon ? (
                          <TechIcon
                            size={24}
                            color={tech.color}
                            aria-hidden="true"
                          />
                        ) : tech.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            width={24}
                            height={24}
                            loading="lazy"
                            className="h-6 w-6 object-contain"
                          />
                        ) : null}

                        <span className="text-center font-sans text-[11px] font-medium leading-4 text-[#555752] sm:text-[12px]">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
