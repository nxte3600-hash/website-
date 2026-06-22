"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BatteryCharging, Gauge, PackageCheck, PlugZap, Users, Route } from "lucide-react";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { erickshawVehicles, scooterVehicles } from "@/lib/vehicles";

const commandVehicles = [
  {
    key: "scooter",
    label: "Scooter",
    vehicle: scooterVehicles.find((vehicle) => vehicle.id === "zenith") ?? scooterVehicles[0],
    range: "Up to 140 km*",
    speed: "Up to 50 km/h",
    charging: "From 1.5 hrs*",
    payload: "Rider + pillion",
    seating: "2 people",
    useCase: "Daily commute, family errands, city rides",
    cta: "/vehicles/zenith"
  },
  {
    key: "erickshaw",
    label: "E-Rickshaw",
    vehicle: erickshawVehicles.find((vehicle) => vehicle.id === "buland-rsd-standard") ?? erickshawVehicles[0],
    range: "120-130 km",
    speed: "25 km/h",
    charging: "7-8 hrs",
    payload: "Passenger route duty",
    seating: "Driver + passengers",
    useCase: "Shared mobility, local passenger routes, city transport",
    cta: "/vehicles/buland-rsd-standard"
  },
  {
    key: "cargo",
    label: "Cargo",
    vehicle: erickshawVehicles.find((vehicle) => vehicle.id === "veer-loader") ?? erickshawVehicles[erickshawVehicles.length - 1],
    range: "80-130 km",
    speed: "25 km/h",
    charging: "4-8 hrs",
    payload: "Up to 300-500 kg",
    seating: "Driver + load bay",
    useCase: "Last-mile delivery, local business cargo, fleet utility",
    cta: "/vehicles/veer-loader"
  }
];

export function EVCommandCenter({ compact = false }: { compact?: boolean }) {
  const [activeKey, setActiveKey] = useState(commandVehicles[0].key);
  const active = useMemo(
    () => commandVehicles.find((item) => item.key === activeKey) ?? commandVehicles[0],
    [activeKey]
  );

  return (
    <section className={`relative overflow-hidden bg-[#030b1b] px-4 sm:px-6 lg:px-8 ${compact ? "py-14 lg:py-20" : "py-20 lg:py-28"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,215,255,.16),transparent_26rem),radial-gradient(circle_at_82%_68%,rgba(81,240,172,.1),transparent_22rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[.85fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">NXT Command Center</span>
            <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">
              Choose the EV mission. See the machine built for it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              NXT is not a one-model brand. It is a practical electric mobility ecosystem for personal rides, passenger routes, and cargo duty.
            </p>
          </motion.div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-glow backdrop-blur-xl">
            {commandVehicles.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveKey(item.key)}
                className={`min-h-12 rounded-full px-5 text-sm font-black transition sm:px-7 ${
                  activeKey === item.key
                    ? "bg-gradient-to-r from-electric-cyan to-electric-green text-midnight"
                    : "text-steel-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="metal-panel relative overflow-hidden rounded-[2.4rem] p-5 sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(56,215,255,.12),transparent)]" />
          <div className="relative grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-electric-cyan/18 bg-midnight/62">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, scale: 0.94, x: 28 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -24 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.vehicle.posterImage}
                    alt={active.vehicle.name}
                    fill
                    className="object-contain p-8 drop-shadow-[0_38px_68px_rgba(56,215,255,.2)]"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-midnight/70 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-electric-cyan backdrop-blur-xl">
                {active.vehicle.category}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.key}-specs`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Active platform</span>
                <h3 className="mt-3 text-5xl font-black leading-none text-white sm:text-6xl">{active.vehicle.name}</h3>
                <p className="mt-5 text-lg leading-8 text-steel-300">{active.useCase}</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Range", value: active.range, icon: BatteryCharging },
                    { label: "Top speed", value: active.speed, icon: Gauge },
                    { label: "Charging", value: active.charging, icon: PlugZap },
                    { label: "Payload", value: active.payload, icon: PackageCheck },
                    { label: "Seating", value: active.seating, icon: Users },
                    { label: "Use case", value: active.useCase, icon: Route }
                  ].map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <spec.icon className="mb-3 text-electric-cyan" size={20} />
                      <span className="block text-xs font-bold uppercase tracking-[0.12em] text-steel-400">{spec.label}</span>
                      <strong className="mt-1 block text-sm text-white">{spec.value}</strong>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <FuturisticCTA href={active.cta}>View model</FuturisticCTA>
                  <FuturisticCTA href="/test-ride" variant="secondary">Book test ride</FuturisticCTA>
                  <FuturisticCTA href="/dealer" variant="secondary">Dealer enquiry</FuturisticCTA>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
