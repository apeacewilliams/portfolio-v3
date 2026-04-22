"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT_LINKS, type ContactLink } from "@/lib/data";

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

function ContactRow({ link }: { link: ContactLink }) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-baseline gap-6 py-5.5 border-b border-border-lo"
    >
      <span className="text-[10px] font-medium uppercase tracking-widest text-fg-faint min-w-20">
        {link.label}
      </span>
      <span className="font-display font-light text-contact-val tracking-[-0.01em] text-fg">
        {link.value}
      </span>
      <span className="ml-auto text-lg text-fg-ghost">→</span>
    </motion.a>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-12 pt-20 pb-30 border-t border-border-lo"
    >
      <FadeInSection>
        <SectionLabel>Contact</SectionLabel>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <div className="flex flex-col">
          {CONTACT_LINKS.map((link) => (
            <ContactRow key={link.label} link={link} />
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
