"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NavBar({ name }: { name: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-100 px-12 py-4.5 flex justify-between items-center border-b border-border-lo bg-bg"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <span className="font-display font-light text-[17px] tracking-[-0.01em]">
        {name}
      </span>
      <div className="flex gap-8">
        {(["Projects", "About", "Contact"] as const).map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-[11px] font-medium uppercase tracking-[0.08em] text-fg-muted hover:text-fg transition-colors duration-150"
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
