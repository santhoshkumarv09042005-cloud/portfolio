"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "purple" | "cyan" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

export function GlowButton({ variant = "purple", size = "md", children, className, href, ...props }: GlowButtonProps) {
  const base = "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 group overflow-hidden";
  const sizes = { sm: "px-5 py-2 text-sm", md: "px-7 py-3 text-sm", lg: "px-9 py-4 text-base" };
  const variants = {
    purple: "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105",
    cyan: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105",
    outline: "border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 hover:scale-105",
  };
  const cls = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-full" />
      <span className="relative">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={cls} whileTap={{ scale: 0.97 }}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={cls} whileTap={{ scale: 0.97 }} {...(props as React.ComponentProps<typeof motion.button>)}>
      {content}
    </motion.button>
  );
}
