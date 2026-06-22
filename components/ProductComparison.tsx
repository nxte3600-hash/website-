import Link from "next/link";
import type { Vehicle } from "@/lib/vehicles";

export function ProductComparison({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-electric-cyan/18 bg-white/[0.06] backdrop-blur-2xl">
      <div className="grid min-w-[760px] grid-cols-[1.2fr_repeat(3,1fr)] border-b border-white/10 bg-white/[0.05] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-electric-cyan">
        <span>Model</span>
        <span>Range</span>
        <span>Speed</span>
        <span>Action</span>
      </div>
      {vehicles.slice(0, 6).map((vehicle) => (
        <div key={vehicle.id} className="grid min-w-[760px] grid-cols-[1.2fr_repeat(3,1fr)] items-center border-b border-white/10 px-5 py-5 last:border-b-0">
          <div>
            <strong className="block text-xl font-black text-white">{vehicle.name}</strong>
            <span className="text-sm text-steel-400">{vehicle.category}</span>
          </div>
          <span className="font-black text-white">{vehicle.specs.range}</span>
          <span className="font-black text-white">{vehicle.specs.speed}</span>
          <div className="flex gap-2">
            <Link href={`/vehicles/${vehicle.id}`} className="rounded-full bg-white px-4 py-2 text-xs font-black text-midnight">
              Details
            </Link>
            <Link href="/test-ride" className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black text-white">
              Test ride
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
