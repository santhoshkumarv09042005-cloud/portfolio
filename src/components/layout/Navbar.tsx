"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { GlowButton } from "@/components/ui/GlowButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sections);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass border border-white/8 py-3 px-6 mx-4"
              : "py-0"
          }`}
          style={scrolled ? { backdropFilter: "blur(20px)", background: "rgba(3,1,8,0.8)" } : {}}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-purple-500/40 bg-purple-500/10 group-hover:border-purple-500/70 transition-colors">
              <span className="text-purple-400 font-bold text-sm" style={{ fontFamily: "'Syne',sans-serif" }}>SK</span>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block" style={{ fontFamily: "'Syne',sans-serif" }}>
              Santhosh<span className="text-purple-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-purple-500/15 rounded-lg border border-purple-500/30"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <GlowButton variant="outline" size="sm" href="#contact">
              Hire Me
            </GlowButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10"
            style={{ background: "rgba(3,1,8,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-semibold py-4 border-b border-white/5 text-slate-300 hover:text-white hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <GlowButton variant="purple" size="lg" href="#contact">
                Hire Me
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
