import React from "react";
import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, intro, align = "left", testid }) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      data-testid={testid}
    >
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2 className="h-section">{title}</h2>
      {intro && <p className="mt-5 text-neutral-600 text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

export function FadeIn({ children, delay = 0, y = 16, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
