"use client";

import Image from "next/image";
import { useState } from "react";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleStage } from "@/components/VehicleStage";

export function VehicleGallery({ vehicle }: { vehicle: Vehicle }) {
  const [active, setActive] = useState(vehicle.posterImage);

  return (
    <div>
      <VehicleStage image={active} name={vehicle.name} className="min-h-[390px] md:min-h-[560px]" />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {vehicle.gallery.map((image, index) => (
          <button
            key={`${vehicle.id}-gallery-${image}-${index}`}
            type="button"
            onClick={() => setActive(image)}
            className={`relative h-24 rounded-2xl border bg-white/5 p-2 transition ${
              active === image ? "border-electric-cyan shadow-glow" : "border-white/10 hover:border-white/25"
            }`}
          >
            <Image src={image} alt={`${vehicle.name} view ${index + 1}`} fill className="object-contain p-2" sizes="180px" />
          </button>
        ))}
      </div>
    </div>
  );
}
