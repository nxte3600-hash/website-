"use client";

import { motion } from "framer-motion";

export function StatsStrip({
  stats,
  className = ""
}: {
  stats: Array<{ value: string; label: string; detail?: string }>;
  className?: string;
}) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative overflow-hidden rounded-2xl border border-electric-cyan/18 bg-white/[0.065] p-5 backdrop-blur-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.06 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent" />
          <strong className="block text-4xl font-black text-white">{stat.value}</strong>
          <span className="mt-1 block text-sm font-black uppercase tracking-[0.16em] text-electric-cyan">{stat.label}</span>
          {stat.detail ? <p className="mt-3 text-sm leading-6 text-steel-300">{stat.detail}</p> : null}
        </motion.div>
      ))}
    </div>
  );
}
