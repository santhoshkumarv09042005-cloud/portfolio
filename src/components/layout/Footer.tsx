"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-purple-500/40 bg-purple-500/10">
                <span className="text-purple-400 font-bold text-sm" style={{ fontFamily: "'Syne',sans-serif" }}>SK</span>
              </div>
              <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Syne',sans-serif" }}>Santhosh Kumar V</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Django Developer Intern · B.Tech IT · Trichy, TN
            </p>
            <div className="flex gap-3">
              {[
                { href: PERSONAL_INFO.github, icon: Github },
                { href: PERSONAL_INFO.linkedin, icon: Linkedin },
                { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 border border-white/8 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Syne',sans-serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <motion.a href={link.href}
                    className="text-slate-500 text-sm hover:text-purple-300 transition-colors duration-200"
                    whileHover={{ x: 4 }}>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Syne',sans-serif" }}>Contact</h4>
            <div className="space-y-2 text-sm text-slate-500">
              <p>{PERSONAL_INFO.email}</p>
              <p>+91 {PERSONAL_INFO.phone}</p>
              <p>{PERSONAL_INFO.location}</p>
              <p className="flex items-center gap-1.5 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Open to Remote Opportunities</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Santhosh Kumar V · Made with <Heart size={12} className="text-purple-400 fill-purple-400" /> & Python
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
            whileHover={{ y: -2 }}
            aria-label="Back to top">
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
