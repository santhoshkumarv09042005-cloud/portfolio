"use client";
import { motion } from "framer-motion";
import { Server, Zap, Globe, Database, Code2 } from "lucide-react";
import { SERVICES } from "@/data/portfolio";

const ICONS: Record<string, React.ElementType> = { Server, Zap, Globe, Database, Code2 };

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-pink-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10">
            What I Do
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            My{" "}
            <span style={{ background: "linear-gradient(135deg,#ec4899,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] || Code2;
            return (
              <motion.div
                key={service.title}
                className="group p-7 rounded-2xl cursor-default"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: `${service.color}40`, background: `${service.color}05` }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                  <Icon size={26} style={{ color: service.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg,${service.color},transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
