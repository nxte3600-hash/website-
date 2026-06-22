"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Vehicle } from "@/lib/vehicles";
import { vehicles as allVehicles } from "@/lib/vehicles";
import { VehicleCard } from "@/components/VehicleCard";

type CategoryKey = "ev-vehicles" | "erickshaw" | "scooters" | "two-wheelers";

const categories: Array<{ key: CategoryKey; label: string; description: string }> = [
  {
    key: "ev-vehicles",
    label: "EV Vehicles",
    description: "The full NXT electric mobility range across personal scooters, passenger vehicles, and cargo-ready platforms."
  },
  {
    key: "erickshaw",
    label: "E-Rickshaw",
    description: "Passenger and utility three-wheelers for route operators, fleet owners, and last-mile businesses."
  },
  {
    key: "scooters",
    label: "Scooters",
    description: "City-focused electric scooters for everyday commute, family movement, and low running cost."
  },
  {
    key: "two-wheelers",
    label: "Electric 2-Wheelers",
    description: "NXT's full two-wheeler studio, including low-speed and high-speed scooter platforms."
  }
];

export function ProductCategorySwitcher({ vehicles = allVehicles }: { vehicles?: Vehicle[] }) {
  const [active, setActive] = useState<CategoryKey>("ev-vehicles");
  const filtered = useMemo(() => {
    if (active === "ev-vehicles") return vehicles;
    if (active === "erickshaw") return vehicles.filter((vehicle) => vehicle.type === "erickshaw");
    if (active === "two-wheelers") return vehicles;
    return vehicles.filter((vehicle) => vehicle.type === "scooter");
  }, [active, vehicles]);

  const activeCategory = categories.find((category) => category.key === active) ?? categories[0];

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="energy-field absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Product discovery</span>
            <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">Switch by category. Compare by confidence.</h2>
            <p className="mt-5 text-lg leading-8 text-steel-300">{activeCategory.description}</p>
          </div>
          <div className="inline-flex w-full rounded-full border border-white/10 bg-white/5 p-2 shadow-glow backdrop-blur-xl sm:w-auto">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => setActive(category.key)}
                className={`min-h-12 flex-1 rounded-full px-5 text-sm font-black transition sm:flex-none ${
                  active === category.key ? "bg-gradient-to-r from-electric-cyan to-electric-green text-midnight" : "text-steel-300 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
