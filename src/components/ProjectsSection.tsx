"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PROJECTS, type Project } from "@/lib/data";

function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-fg-faint mb-10 flex items-center gap-4">
      <span>{children}</span>
      <div className="flex-1 h-px bg-border-lo" />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block py-7 border-b border-border-lo cursor-pointer relative"
      >
        {/* Hover background */}
        <div
          className="absolute inset-0 rounded-xl -mx-6 z-0 bg-bg-hover transition-opacity duration-200"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        <div className="relative z-1 px-6">
          {/* Top row */}
          <div className="flex items-baseline gap-6 mb-3">
            <span
              className="font-code text-[11px] font-medium uppercase tracking-widest transition-colors duration-200 min-w-8"
              style={{ color: hovered ? project.accent : "var(--fg-ghost)" }}
            >
              {project.index}
            </span>
            <span className="font-display font-light text-project-name tracking-[-0.01em] text-fg leading-none flex-1">
              {project.name}
            </span>
            <span className="text-[11px] text-fg-faint font-light">
              {project.year}
            </span>
            <motion.span
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
              transition={{ duration: 0.2 }}
              className="text-base"
              style={{ color: project.accent }}
            >
              →
            </motion.span>
          </div>

          {/* Description — reveals on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.25 },
                }}
                className="overflow-hidden pl-14"
              >
                <p className="text-sm text-fg-subtle leading-[1.7] mb-3.5 max-w-150">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium uppercase tracking-[0.08em] px-2.5 py-1 rounded-full bg-bg-tag border border-border text-fg-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </a>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-12 pt-20 pb-25 border-t border-border-lo"
    >
      <FadeInSection>
        <SectionLabel>Selected work</SectionLabel>
      </FadeInSection>
      {PROJECTS.map((p, i) => (
        <ProjectRow key={p.id} project={p} index={i} />
      ))}
    </section>
  );
}
