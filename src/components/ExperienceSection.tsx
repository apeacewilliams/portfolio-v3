"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE, type Experience } from "@/lib/data";

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

function ExperienceRow({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="py-8 border-b border-border-lo grid grid-cols-[1fr_2fr] gap-12 items-start"
    >
      <div>
        <div className="font-display font-light text-exp-role tracking-[-0.01em] text-fg mb-1.5">
          {experience.org}
        </div>
        <div className="text-xs font-light uppercase tracking-[0.08em] text-fg mb-1">
          {experience.role}
        </div>
        <div className="text-[11px] text-fg-dim font-light">
          {experience.period}
        </div>
      </div>
      <p className="text-sm text-fg-subtle leading-[1.8] mt-1">
        {experience.desc}
      </p>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-12 pt-20 pb-25 border-t border-border-lo"
    >
      <FadeInSection>
        <SectionLabel>Experience</SectionLabel>
      </FadeInSection>
      <div className="flex flex-col">
        {EXPERIENCE.map((experience) => (
          <ExperienceRow
            key={`${experience.org}-${experience.role}`}
            experience={experience}
            index={experience.index - 1} // Assuming index starts at 1 in the data
          />
        ))}
      </div>
    </section>
  );
}
