"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { erickshawVehicles, scooterVehicles } from "@/lib/vehicles";
import { VehicleCard } from "@/components/VehicleCard";

type Tab = "scooter" | "erickshaw";

export function VehicleShowcase() {
  const [tab, setTab] = useState<Tab>("scooter");
  const vehicles = useMemo(() => (tab === "scooter" ? scooterVehicles : erickshawVehicles), [tab]);

  return (
    <section id="showcase" className="relative overflow-hidden bg-[#020817] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="energy-field absolute inset-0 opacity-35" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-electric-cyan">Vehicle showcase</span>
            <h2 className="mt-3 max-w-4xl text-4xl font-black leading-none text-white sm:text-6xl">
              Choose by commute, route, or load in a blue-lit EV studio.
            </h2>
          </div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 shadow-glow backdrop-blur-xl">
            {[
              { key: "scooter", label: "Electric Scooters" },
              { key: "erickshaw", label: "E-Rickshaw / Utility 3W" }
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setTab(item.key as Tab)}
                className={`rounded-full px-4 py-3 text-sm font-black transition sm:px-5 ${
                  tab === item.key
                    ? "bg-gradient-to-r from-electric-cyan to-electric-green text-midnight"
                    : "text-steel-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
