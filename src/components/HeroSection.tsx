"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  name,
  tagline,
}: {
  name: string;
  tagline: string;
}) {
  const words = name.split(" ");

  return (
    <section className="flex flex-col justify-start px-12 pt-20 pb-18 relative">
      {/* Status bar */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="flex justify-between items-center mb-12"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-fg-muted">
          Portfolio · {new Date().getFullYear()}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-fg-muted">
          Available for work
        </span>
      </motion.div>

      {/* Name — word-by-word reveal */}
      <div className="leading-[0.9] mb-10">
        {words.map((word) => (
          <div key={word} className="overflow-hidden block">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + words.indexOf(word) * 0.12,
              }}
              className="block font-display font-light text-display leading-[0.92] tracking-[-0.02em] text-fg"
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      >
        <span className="font-display italic font-light text-tagline text-fg-muted">
          {tagline}
        </span>
      </motion.div>
    </section>
  );
}
