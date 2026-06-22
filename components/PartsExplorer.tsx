"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Vehicle } from "@/lib/vehicles";

export function PartsExplorer({ vehicle }: { vehicle: Vehicle }) {
  const [activeId, setActiveId] = useState(vehicle.parts[0]?.id);
  const active = useMemo(
    () => vehicle.parts.find((part) => part.id === activeId) ?? vehicle.parts[0],
    [activeId, vehicle.parts]
  );

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <span className="text-xs font-black uppercase tracking-[0.26em] text-electric-green">Parts explorer</span>
          <h2 className="mt-3 text-4xl font-black leading-none text-white sm:text-6xl">Tap the engineering layer.</h2>
          <p className="mt-5 text-base leading-8 text-steel-400">
            Interactive hotspots explain the purpose, technology, and service logic behind each vehicle system.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900/80 md:min-h-[560px]">
            <div className="absolute inset-10 rounded-[100%] bg-electric-cyan/10 blur-3xl" />
            <Image
              src={vehicle.posterImage}
              alt={`${vehicle.name} parts diagram`}
              fill
              className="object-contain p-10 drop-shadow-[0_34px_44px_rgba(0,0,0,.5)]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {vehicle.parts.map((part) => (
              <button
                key={part.id}
                type="button"
                title={part.name}
                aria-label={part.name}
                onClick={() => setActiveId(part.id)}
                className={`absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white transition ${
                  active?.id === part.id ? "bg-electric-green" : "bg-electric-cyan"
                } animate-pulseHotspot`}
                style={{ left: `${part.x}%`, top: `${part.y}%` }}
              />
            ))}
          </div>

          <aside className="glass-panel rounded-[2rem] p-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-electric-cyan">Selected component</span>
            <h3 className="mt-3 text-3xl font-black text-white">{active.name}</h3>
            <div className="mt-6 space-y-5 text-sm leading-7 text-steel-400">
              <div>
                <strong className="block text-white">Purpose</strong>
                <p>{active.purpose}</p>
              </div>
              <div>
                <strong className="block text-white">Technology / material</strong>
                <p>{active.technology}</p>
              </div>
              <div>
                <strong className="block text-white">Maintenance note</strong>
                <p>{active.maintenance}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {vehicle.parts.map((part) => (
                <button
                  key={`${part.id}-list`}
                  type="button"
                  onClick={() => setActiveId(part.id)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${
                    active?.id === part.id
                      ? "border-transparent bg-gradient-to-r from-electric-cyan to-electric-green text-midnight"
                      : "border-white/10 bg-white/5 text-steel-100 hover:border-electric-cyan/50"
                  }`}
                >
                  {part.name}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
