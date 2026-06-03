"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
            Contact{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Have a project or opportunity? Let's connect!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>Let's Talk</h3>
            <p className="text-slate-400 leading-relaxed mb-10">
              I'm currently open to new opportunities, freelance projects, and collaborations. Whether you have a Django backend to build, an API to design, or just want to say hi — my inbox is always open!
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, color: "#a855f7" },
                { icon: Phone, label: "Phone", value: `+91 ${PERSONAL_INFO.phone}`, href: `tel:+91${PERSONAL_INFO.phone}`, color: "#22d3ee" },
                { icon: MapPin, label: "Location", value: `${PERSONAL_INFO.location} (Remote)`, href: "#", color: "#3b82f6" },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl group"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                  whileHover={{ borderColor: `${color}40`, background: `${color}08`, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}20` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: PERSONAL_INFO.github, icon: Github, label: "GitHub", color: "#a855f7" },
                { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: "LinkedIn", color: "#22d3ee" },
              ].map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium"
                  style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}
                  whileHover={{ scale: 1.05, background: `${color}25` }}
                >
                  <Icon size={16} /> {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            {status === "success" ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(34,211,238,0.3)" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle size={56} className="text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>Message Sent!</h3>
                <p className="text-slate-400">Thanks! I'll get back to you soon 🚀</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "Django Project Collaboration" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-slate-400 text-sm mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none transition-all duration-200 text-sm"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(168,85,247,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-600 outline-none transition-all duration-200 text-sm resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(168,85,247,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ background: status === "sending" ? "rgba(168,85,247,0.4)" : "linear-gradient(135deg,#9333ea,#a855f7)" }}
                  whileHover={status !== "sending" ? { scale: 1.02, boxShadow: "0 0 30px rgba(168,85,247,0.5)" } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? (
                    <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Sending...</>
                  ) : (
                    <><Send size={16} />Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
