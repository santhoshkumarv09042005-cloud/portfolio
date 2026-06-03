"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const TYPING_ROLES = ["Full Stack Developer", "Python Developer", "Django Developer", "FastAPI Engineer"];

function TypingText() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && displayed === current) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && displayed === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % TYPING_ROLES.length);
        return;
      }
      setDisplayed(deleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-gradient-purple" style={{ fontFamily: "'Syne',sans-serif" }}>
      {displayed}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}

function FloatingOrb({ x, y, size, color, delay }: { x: string; y: string; size: number; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: "blur(60px)" }}
      animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      const glows = containerRef.current.querySelectorAll<HTMLElement>(".parallax-glow");
      glows.forEach((el, i) => {
        const factor = (i + 1) * 0.3;
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background orbs */}
      <FloatingOrb x="10%" y="20%" size={400} color="rgba(168,85,247,0.12)" delay={0} />
      <FloatingOrb x="60%" y="10%" size={350} color="rgba(34,211,238,0.08)" delay={2} />
      <FloatingOrb x="80%" y="60%" size={300} color="rgba(59,130,246,0.10)" delay={1} />
      <FloatingOrb x="20%" y="70%" size={250} color="rgba(236,72,153,0.07)" delay={3} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — Text */}
        <div>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <MapPin size={12} />
            <span>Trichy, Tamil Nadu — Open to Remote</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "'Syne',sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-6 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <TypingText />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {PERSONAL_INFO.bio} Currently building production systems at{" "}
            <span className="text-purple-300 font-medium">Chadura Tech Pvt</span> while pursuing B.Tech IT from{" "}
            <span className="text-cyan-300 font-medium">MPNMJ Engineering College</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              style={{ background: "linear-gradient(135deg,#9333ea,#a855f7)" }}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/15 text-white hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300 hover:scale-105"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href={PERSONAL_INFO.resumeLink}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            {[
              { href: PERSONAL_INFO.github, icon: Github, label: "GitHub" },
              { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual card */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-purple-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full border border-cyan-500/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbit dots */}
          {[0, 90, 180, 270].map((deg) => (
            <motion.div
              key={deg}
              className="absolute w-3 h-3 rounded-full bg-purple-500"
              style={{
                top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 160}px - 6px)`,
                left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 160}px - 6px)`,
                boxShadow: "0 0 10px #a855f7",
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: deg / 360 * 2 }}
            />
          ))}

          {/* Center card */}
          <motion.div
            className="relative z-10 w-64 h-72 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.2)", backdropFilter: "blur(20px)" }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl mb-4 flex items-center justify-center text-3xl font-bold"
              style={{ background: "linear-gradient(135deg,rgba(168,85,247,0.3),rgba(34,211,238,0.2))", border: "1px solid rgba(168,85,247,0.3)", fontFamily: "'Syne',sans-serif", color: "#a855f7" }}>
              SK
            </div>
            <h3 className="font-bold text-white mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>Santhosh Kumar V</h3>
            <p className="text-xs text-slate-400 mb-4">Django Developer Intern</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {["Python", "Django", "FastAPI", "Linux"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)", color: "#c084fc" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Floating skill badges */}
          {[
            { label: "Python 🐍", x: "-120px", y: "-60px", color: "#a855f7" },
            { label: "Django ⚙️", x: "110px", y: "-80px", color: "#22d3ee" },
            { label: "FastAPI ⚡", x: "-110px", y: "80px", color: "#3b82f6" },
            { label: "PostgreSQL 🗄️", x: "100px", y: "90px", color: "#ec4899" },
          ].map(({ label, x, y, color }) => (
            <motion.div
              key={label}
              className="absolute text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ left: `calc(50% + ${x})`, top: `calc(50% + ${y})`, background: `${color}20`, border: `1px solid ${color}40`, color, backdropFilter: "blur(10px)" }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
