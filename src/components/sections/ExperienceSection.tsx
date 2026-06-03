"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Star } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";

const TYPE_CONFIG = {
  internship: { icon: Briefcase, color: "#a855f7", label: "Internship" },
  education: { icon: GraduationCap, color: "#22d3ee", label: "Education" },
  freelance: { icon: Star, color: "#f59e0b", label: "Freelance" },
  project: { icon: Code2, color: "#3b82f6", label: "Projects" },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            My{" "}
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-lg">From classrooms to production systems</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-0.5"
            style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(34,211,238,0.5), rgba(59,130,246,0.3))" }} />

          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => {
              const config = TYPE_CONFIG[item.type as keyof typeof TYPE_CONFIG];
              const Icon = config.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: `${config.color}20`, border: `2px solid ${config.color}60`, boxShadow: `0 0 20px ${config.color}30` }}
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    >
                      <Icon size={16} style={{ color: config.color }} />
                    </motion.div>
                  </div>

                  {/* Spacer for center alignment on desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <motion.div
                    className="flex-1 ml-16 md:ml-0 p-6 rounded-2xl group"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                    whileHover={{ borderColor: `${config.color}40`, background: `${config.color}05` }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Type badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${config.color}15`, border: `1px solid ${config.color}30`, color: config.color }}>
                        {config.label}
                      </span>
                      <span className="text-xs text-slate-500">{item.period}</span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="font-medium mb-3" style={{ color: config.color }}>{item.organization}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
