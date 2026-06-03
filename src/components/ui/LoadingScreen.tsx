"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 600); }, 300);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#030108" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Logo mark */}
            <motion.div
              className="w-20 h-20 mx-auto mb-8 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30" />
              <div className="absolute inset-2 rounded-full border-2 border-cyan-500/50 border-t-cyan-400" />
              <div className="absolute inset-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-300 font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>SK</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold mb-2 text-gradient-full"
              style={{ fontFamily: "'Syne', sans-serif", background: "linear-gradient(135deg,#a855f7,#22d3ee,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Santhosh Kumar
            </motion.h1>
            <p className="text-slate-500 text-sm tracking-widest uppercase mb-10">Portfolio</p>

            {/* Progress bar */}
            <div className="w-64 mx-auto">
              <div className="flex justify-between text-xs text-slate-600 mb-2">
                <span>Loading</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg,#a855f7,#22d3ee)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
