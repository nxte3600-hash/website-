"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FuturisticCTA } from "@/components/FuturisticCTA";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function VideoHero({
  eyebrow,
  title,
  copy,
  videoSrc = "/video/hero-electric-scooter.mp4",
  poster = "/vehicles/prince-hs.jpg",
  actions = [],
  children,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  copy: string;
  videoSrc?: string;
  poster?: string;
  actions?: HeroAction[];
  children?: React.ReactNode;
  align?: "center" | "bottom";
}) {
  return (
    <section className="premium-video-hero relative min-h-screen overflow-hidden bg-midnight">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-58"
        src={videoSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <Image src={poster} alt="" fill priority className="absolute inset-0 -z-10 object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,.96)_0%,rgba(4,20,48,.82)_45%,rgba(2,8,23,.54)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_28%,rgba(56,215,255,.32),transparent_28rem),radial-gradient(circle_at_35%_70%,rgba(61,125,255,.24),transparent_24rem)]" />
      <div className="energy-field absolute inset-0" />

      <div
        className={`relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:gap-10 lg:px-8 lg:pb-16 ${
          children ? "lg:grid-cols-[minmax(0,1fr)_.85fr]" : ""
        } ${
          align === "bottom" ? "items-end" : "items-start lg:items-center"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-electric-cyan/24 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_32px_rgba(56,215,255,.16)] backdrop-blur-2xl">
            <span className="h-2 w-2 rounded-full bg-electric-cyan shadow-[0_0_20px_#38d7ff]" />
            {eyebrow}
          </div>
          <h1 className="text-balance max-w-6xl break-words text-[2.65rem] font-black leading-[0.92] text-white sm:text-7xl lg:text-[clamp(5rem,8.8vw,8.6rem)]">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-steel-100/82 sm:text-xl">{copy}</p>
          {actions.length > 0 ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions.map((action) => (
                <FuturisticCTA key={`${action.href}-${action.label}`} href={action.href} variant={action.variant}>
                  {action.label}
                </FuturisticCTA>
              ))}
            </div>
          ) : null}
        </motion.div>

        {children ? (
          <motion.div
            initial={{ opacity: 0, x: 38, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
