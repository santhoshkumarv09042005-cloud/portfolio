"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/portfolio";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            My Work
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Things I've built — from REST APIs to full-stack web apps</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={activeFilter === cat
                ? { background: "rgba(168,85,247,0.25)", border: "1px solid rgba(168,85,247,0.6)", color: "#c084fc" }
                : { background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                whileHover={{ y: -6, borderColor: `${project.color}40` }}
              >
                {/* Top color bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}60)` }} />

                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                      {project.category === "Django Projects" ? "⚙️"
                        : project.category === "AI Applications" ? "🤖"
                        : project.category === "Full Stack Projects" ? "🔗" : "🌐"}
                    </div>
                    {project.featured && (
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: `${project.color}15`, border: `1px solid ${project.color}30`, color: project.color }}>
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}
                      onClick={(e) => e.stopPropagation()}>
                      <Github size={14} /> GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                      style={{ background: `${project.color}15`, border: `1px solid ${project.color}40`, color: project.color }}
                      onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 100%, ${project.color}08 0%, transparent 70%)` }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <a href="https://github.com/santhoshkumarv09042005-cloud" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#e2e8f0" }}>
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
