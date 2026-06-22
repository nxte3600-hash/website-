import Image from "next/image";
import { EVCommandCenter } from "@/components/EVCommandCenter";
import { PremiumPageHero } from "@/components/PremiumPageHero";
import { FinancePartners } from "@/components/FinancePartners";
import { ProductCategorySwitcher } from "@/components/ProductCategorySwitcher";
import { ProductComparison } from "@/components/ProductComparison";
import { erickshawVehicles, scooterVehicles, vehicles } from "@/lib/vehicles";

export default function VehiclesPage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="Vehicle range"
        title="A blue-lit EV studio for every NXT model."
        copy="Explore scooters, e-rickshaws, and utility EVs with cinematic media, clear specs, finance readiness, model galleries, and practical ownership context."
        primaryHref="/test-ride"
        primaryLabel="Book test ride"
        secondaryHref="/technology"
        secondaryLabel="Understand technology"
      >
        <div className="metal-panel relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
          <Image src="/vehoicle_image/prince/1.png" alt="NXT vehicle catalog" fill className="object-contain p-10" priority />
          <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-electric-cyan">Scooters</span>
              <strong className="mt-1 block text-4xl font-black text-white">{scooterVehicles.length}</strong>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-electric-green">3 Wheelers</span>
              <strong className="mt-1 block text-4xl font-black text-white">{erickshawVehicles.length}</strong>
            </div>
          </div>
        </div>
      </PremiumPageHero>

      <section className="bg-midnight px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FinancePartners tone="light" />
        </div>
      </section>

      <ProductCategorySwitcher vehicles={vehicles} />

      <EVCommandCenter compact />

      <section className="bg-midnight px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <ProductComparison vehicles={scooterVehicles} />
        </div>
      </section>
    </main>
  );
}
