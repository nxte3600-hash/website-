import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Clock3, Gauge } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleStage } from "@/components/VehicleStage";

export function VehicleCard({ vehicle, index = 0 }: { vehicle: Vehicle; index?: number }) {
  return (
    <article
      className="metal-panel group overflow-hidden rounded-[1.7rem] transition duration-300 hover:-translate-y-1 hover:border-electric-cyan/45 hover:shadow-glow"
      style={{ transitionDelay: `${Math.min(index * 40, 240)}ms` }}
    >
      <VehicleStage image={vehicle.posterImage} name={vehicle.name} className="h-72 rounded-none border-0" />
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-[0.68rem] font-black uppercase tracking-[0.14em] text-electric-cyan">
          <span>{vehicle.category}</span>
          <span>{vehicle.brandLine}</span>
        </div>
        <h3 className="text-2xl font-black text-white">{vehicle.name}</h3>
        <p className="mt-3 min-h-[5rem] text-sm leading-7 text-steel-300">{vehicle.shortDescription}</p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { label: "Range", value: vehicle.specs.range, icon: BatteryCharging },
            { label: "Speed", value: vehicle.specs.speed, icon: Gauge },
            { label: "Charge", value: vehicle.specs.chargingTime, icon: Clock3 }
          ].map((spec) => (
            <div key={spec.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
              <spec.icon className="mb-2 text-electric-green" size={17} />
              <span className="block text-[0.68rem] font-bold text-steel-400">{spec.label}</span>
              <strong className="text-xs text-white">{spec.value}</strong>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2">
          {vehicle.gallery.map((image, galleryIndex) => (
            <div key={`${vehicle.id}-${image}-${galleryIndex}`} className="relative h-16 rounded-2xl border border-white/10 bg-midnight/70 p-2">
              <Image src={image} alt={`${vehicle.name} gallery ${galleryIndex + 1}`} fill className="object-contain p-1" sizes="120px" />
            </div>
          ))}
        </div>

        <Link
          href={`/vehicles/${vehicle.id}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric-cyan to-electric-green px-5 py-4 font-black text-midnight transition hover:scale-[1.01]"
        >
          Explore Model <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
