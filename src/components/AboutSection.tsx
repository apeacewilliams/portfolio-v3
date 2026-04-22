"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SKILLS } from "@/lib/data";

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

function SkillPill({ label, color }: { label: string; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-[11px] font-normal px-3.5 py-1.5 rounded-full cursor-default transition-colors duration-150"
      style={{
        border: `1px solid ${hovered ? color : "var(--border)"}`,
        color: hovered ? color : "var(--fg-dim)",
      }}
    >
      {label}
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="px-12 pt-20 pb-25 border-t border-border-lo">
      <FadeInSection>
        <SectionLabel>About</SectionLabel>
      </FadeInSection>
      <div className="grid grid-cols-2 gap-16 items-start">
        <FadeInSection delay={0.1}>
          <div>
            <p className="font-display font-light text-about-lead leading-[1.4] tracking-[-0.01em] text-fg mb-6">
              Software engineer focused on unique designs, privacy, local-first
              architecture, and calm interfaces.
            </p>
            <p className="text-sm text-fg-subtle leading-[1.8] mb-4">
              Most of what I build lives on the device. I care about software
              that respects the people who use it — no telemetry, no dark
              patterns, no unnecessary data tracking.
            </p>
            <p className="text-sm text-fg-subtle leading-[1.8]">
              Currently building Constellations (working name). Open to
              thoughtful projects.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-fg-faint mb-5">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <SkillPill key={s.label} label={s.label} color={s.color} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
