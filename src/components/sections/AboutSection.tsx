"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code2 } from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolio";

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-2xl"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.4)" }}
    >
      <div className="text-4xl font-extrabold mb-1" style={{ fontFamily: "'Syne',sans-serif", background: "linear-gradient(135deg,#a855f7,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {inView ? value : 0}{suffix}
      </div>
      <div className="text-slate-500 text-sm">{label}</div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Who I{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Am
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm <span className="text-white font-semibold">Santhosh Kumar V</span>, a passionate Full Stack Developer from <span className="text-purple-300">Trichy, Tamil Nadu</span>. I specialize in building robust, scalable backend systems with Python & Django while crafting clean, responsive frontends.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Currently working as a <span className="text-cyan-300 font-medium">Django Developer Intern at Chadura Tech Pvt</span>, where I build production-grade REST APIs and web applications. Simultaneously pursuing my <span className="text-purple-300">B.Tech in IT at MPNMJ Engineering College</span> (2022–2026).
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Location", value: "Trichy, Tamil Nadu", color: "#a855f7" },
                { icon: Briefcase, label: "Current Role", value: "Django Dev Intern @ Chadura Tech", color: "#22d3ee" },
                { icon: GraduationCap, label: "Education", value: "B.Tech IT — MPNMJ (2022–26)", color: "#3b82f6" },
                { icon: Code2, label: "Focus", value: "Python • Django • FastAPI", color: "#ec4899" },
              ].map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  whileHover={{ borderColor: `${color}40`, background: `${color}08` }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}20` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.15) 0%, transparent 70%)" }} />

              {/* Main card */}
              <div className="relative z-10 w-full h-full rounded-3xl p-8 flex flex-col justify-between"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168,85,247,0.2)", backdropFilter: "blur(20px)" }}>
                {/* Top */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{ background: "linear-gradient(135deg,rgba(168,85,247,0.3),rgba(34,211,238,0.2))", border: "1px solid rgba(168,85,247,0.3)", fontFamily: "'Syne',sans-serif", color: "#a855f7" }}>
                    SK
                  </div>
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: "'Syne',sans-serif" }}>Santhosh Kumar V</div>
                    <div className="text-slate-400 text-sm">Django Developer Intern</div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-xs">Currently Employed</span>
                    </div>
                  </div>
                </div>

                {/* Mid — skill bars */}
                <div className="space-y-3">
                  {[
                    { label: "Python / Django", pct: 88, color: "#a855f7" },
                    { label: "FastAPI", pct: 75, color: "#22d3ee" },
                    { label: "PostgreSQL", pct: 82, color: "#3b82f6" },
                    { label: "HTML / CSS", pct: 90, color: "#ec4899" },
                  ].map(({ label, pct, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">{label}</span>
                        <span style={{ color }}>{pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg,${color},${color}99)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex gap-2">
                  {["B.Tech IT", "2026 Graduate", "Open to Remote"].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", color: "#c084fc" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
