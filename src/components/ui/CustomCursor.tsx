"use client";
import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useMousePosition();
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      ringPos.current.x += (pos.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.y - ringPos.current.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.x}px`;
        dotRef.current.style.top = `${pos.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const addHover = () => ringRef.current?.classList.add("hovering");
    const removeHover = () => ringRef.current?.classList.remove("hovering");
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [pos]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
