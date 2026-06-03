"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[9999] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
