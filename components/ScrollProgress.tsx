"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] bg-white/[0.03]">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-electric-cyan via-white to-electric-green shadow-[0_0_24px_rgba(56,215,255,.72)]"
        animate={{ scaleX: progress }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.18, ease: "easeOut" }}
      />
    </div>
  );
}
