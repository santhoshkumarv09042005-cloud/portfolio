"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, highlight, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow && (
        <span className="inline-block text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title font-display mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
        {title}{" "}
        {highlight && <span className="text-gradient-purple">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`section-subtitle text-slate-400 text-lg ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
