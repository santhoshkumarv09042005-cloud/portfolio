"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

const CATEGORY_COLORS: Record<string, string> = {
  Backend: "#a855f7",
  Frontend: "#22d3ee",
  Database: "#3b82f6",
  Tools: "#ec4899",
};

const ALL_SKILLS_FLAT = [
  { name: "Python", icon: "🐍", color: "#a855f7", level: 90 },
  { name: "Django", icon: "🟢", color: "#22d3ee", level: 88 },
  { name: "FastAPI", icon: "⚡", color: "#3b82f6", level: 75 },
  { name: "PostgreSQL", icon: "🗄️", color: "#ec4899", level: 82 },
  { name: "HTML5", icon: "🌐", color: "#f59e0b", level: 92 },
  { name: "CSS3", icon: "🎨", color: "#06b6d4", level: 88 },
  { name: "JavaScript", icon: "📜", color: "#eab308", level: 72 },
  { name: "Git", icon: "🔧", color: "#f97316", level: 85 },
  { name: "Linux", icon: "🐧", color: "#a855f7", level: 80 },
  { name: "REST APIs", icon: "🔗", color: "#22d3ee", level: 85 },
  { name: "SQLite", icon: "📦", color: "#3b82f6", level: 88 },
  { name: "Bootstrap", icon: "🅱️", color: "#7c3aed", level: 80 },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Backend");
  const categories = Object.keys(SKILLS);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
            Tech Stack
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            My{" "}
            <span style={{ background: "linear-gradient(135deg,#22d3ee,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Technologies I use to build production-ready applications</p>
        </motion.div>

        {/* Floating skill pills — top */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {ALL_SKILLS_FLAT.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default"
              style={{ background: `${skill.color}12`, border: `1px solid ${skill.color}30`, color: skill.color }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.1, background: `${skill.color}25` }}
              animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Tab selector */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => {
            const color = CATEGORY_COLORS[cat];
            const isActive = activeTab === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={isActive
                  ? { background: `${color}25`, border: `1px solid ${color}60`, color }
                  : { background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Skill bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {SKILLS[activeTab as keyof typeof SKILLS].map((skill, i) => {
              const color = CATEGORY_COLORS[activeTab];
              return (
                <motion.div
                  key={skill.name}
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ borderColor: `${color}40`, background: `${color}08` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-sm font-bold" style={{ color }}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-slate-600">
                    <span>Beginner</span><span>Expert</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
