import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Gauge } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";

export function ProductShowcaseRail({
  vehicles,
  eyebrow = "Signature product rail",
  title = "A cinematic scroll through NXT's electric range."
}: {
  vehicles: Vehicle[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(56,215,255,.16),transparent_25rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">{eyebrow}</span>
            <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">{title}</h2>
          </div>
          <Link href="/vehicles" className="inline-flex items-center gap-2 font-black text-electric-cyan">
            Open full catalog <ArrowRight size={18} />
          </Link>
        </div>
        <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:thin] [scrollbar-color:#38d7ff_transparent]">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehicles/${vehicle.id}`}
              className="group metal-panel relative h-[520px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2 hover:border-electric-cyan/50 sm:w-[520px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,215,255,.24),transparent_18rem)]" />
              <Image
                src={vehicle.posterImage}
                alt={vehicle.name}
                fill
                className="object-contain p-10 transition duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 82vw, 520px"
              />
              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-midnight/70 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-electric-cyan backdrop-blur-xl">
                {vehicle.category}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight via-midnight/86 to-transparent p-6">
                <h3 className="text-4xl font-black text-white">{vehicle.name}</h3>
                <p className="mt-3 line-clamp-2 leading-7 text-steel-300">{vehicle.shortDescription}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3">
                    <BatteryCharging className="mb-2 text-electric-green" size={18} />
                    <span className="text-xs font-bold text-steel-400">Range</span>
                    <strong className="block text-sm text-white">{vehicle.specs.range}</strong>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3">
                    <Gauge className="mb-2 text-electric-green" size={18} />
                    <span className="text-xs font-bold text-steel-400">Speed</span>
                    <strong className="block text-sm text-white">{vehicle.specs.speed}</strong>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
