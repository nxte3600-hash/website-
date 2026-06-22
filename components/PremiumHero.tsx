"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BadgeCheck, BatteryCharging, Factory, MapPin } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src="/video/hero-electric-scooter.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/vehicles/prince-hs.jpg"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,32,.96)_0%,rgba(10,18,32,.82)_44%,rgba(10,18,32,.52)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.96fr_1.04fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-electric-green" />
              Electric mobility for Indian streets
            </div>
            <h1 className="text-balance max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-white sm:text-7xl lg:text-[6.8rem]">
              Own the road. Build the future.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Electric scooters, e-rickshaws, and utility EVs engineered for real commute, commercial routes, dealer confidence, and lower running cost.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/vehicles"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 font-black text-midnight shadow-[0_24px_70px_rgba(255,255,255,.18)] transition hover:scale-[1.02]"
              >
                Explore Vehicles <ArrowRight size={18} />
              </Link>
              <Link
                href="/test-ride"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 font-black text-white backdrop-blur-xl transition hover:border-white"
              >
                Book Test Ride
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16 }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-panel backdrop-blur-2xl"
          >
            <Image
              src="/vehoicle_image/prince/1.png"
              alt="NXT Prince HS electric scooter"
              fill
              priority
              className="object-contain p-10 pt-20"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute left-5 top-5 grid gap-3 sm:grid-cols-3">
              {[
                ["140 km*", "Range"],
                ["11", "Models"],
                ["EMI", "Support"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/12 bg-midnight/72 px-4 py-3 backdrop-blur-xl">
                  <strong className="block text-2xl font-black text-white">{value}</strong>
                  <span className="text-xs font-bold text-white/58">{label}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 text-white backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <Factory className="text-electric-green" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">Manufacturer promise</p>
                  <h2 className="text-2xl font-black text-white">Products, finance, service, and dealer handoff in one trusted flow.</h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
                <div className="flex gap-3"><BadgeCheck className="shrink-0 text-electric-cyan" size={18} /> Warranty-ready product story</div>
                <div className="flex gap-3"><BatteryCharging className="shrink-0 text-electric-cyan" size={18} /> Battery and savings clarity</div>
                <div className="flex gap-3"><MapPin className="shrink-0 text-electric-cyan" size={18} /> Local dealer routing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
