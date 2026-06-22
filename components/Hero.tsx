"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Gauge, ShieldCheck } from "lucide-react";
import { vehicles } from "@/lib/vehicles";
import { VehicleStage } from "@/components/VehicleStage";

const featured = vehicles.find((vehicle) => vehicle.id === "prince-hs") ?? vehicles[0];

export function Hero() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-20 h-[34rem] w-[34rem] rounded-full bg-electric-blue/20 blur-3xl" />
      <div className="absolute -right-28 top-1/3 h-[34rem] w-[34rem] rounded-full bg-electric-green/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-electric-cyan">
            <span className="h-px w-10 bg-electric-green" />
            Navy premium EV showroom
          </div>
          <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-[6.6rem]">
            India&apos;s EV range, rebuilt for a{" "}
            <span className="bg-gradient-to-r from-white via-electric-cyan to-electric-green bg-clip-text text-transparent">
              world-class showcase.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-steel-300 sm:text-lg">
            Explore NXT electric scooters and utility three-wheelers through cinematic media, live spec HUDs, 3-photo galleries,
            and interactive parts engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/vehicles"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric-cyan to-electric-green px-6 font-black text-midnight shadow-glow transition hover:scale-[1.02]"
            >
              Explore Vehicles <ArrowRight size={18} />
            </Link>
            <Link
              href="/test-ride"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-6 font-black text-white transition hover:border-electric-cyan/60"
            >
              Book Test Ride
            </Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Gauge, value: "11", label: "Showcase models" },
              { icon: BatteryCharging, value: "130 km", label: "Rickshaw range*" },
              { icon: ShieldCheck, value: "50+", label: "Dealer network*" }
            ].map((item) => (
              <div key={item.label} className="glass-panel rounded-2xl p-4">
                <item.icon className="mb-3 text-electric-cyan" size={22} />
                <strong className="block text-2xl font-black text-white">{item.value}</strong>
                <span className="text-xs font-bold text-steel-400">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <VehicleStage image={featured.posterImage} name={featured.name} className="min-h-[440px] lg:min-h-[620px]" priority />
          <div className="absolute bottom-8 left-6 z-10 hidden rounded-3xl border border-white/10 bg-midnight/72 p-5 shadow-panel backdrop-blur-2xl sm:block">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric-green">Featured</span>
            <h2 className="mt-2 text-2xl font-black text-white">{featured.name}</h2>
            <p className="mt-1 text-sm text-steel-400">{featured.category}</p>
          </div>
          <div className="absolute right-6 top-24 z-10 hidden rounded-3xl border border-white/10 bg-midnight/72 p-5 shadow-panel backdrop-blur-2xl md:block">
            <span className="text-xs font-bold text-steel-400">Motor</span>
            <strong className="mt-1 block text-lg text-white">{featured.specs.motor}</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
