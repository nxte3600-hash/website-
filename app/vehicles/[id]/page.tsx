import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BatteryCharging, Clock3, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { VehicleImage, VehicleCard } from "@/components/Option2Sections";
import { getVehicleById, vehicles } from "@/lib/vehicles";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ id: vehicle.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  return {
    title: vehicle ? vehicle.name : "Vehicle",
    description: vehicle?.shortDescription ?? "NXTE Mobility vehicle detail."
  };
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  if (!vehicle) notFound();

  const specs = [
    ["Range", vehicle.specs.range, BatteryCharging],
    ["Top speed", vehicle.specs.speed, Gauge],
    ["Charging", vehicle.specs.chargingTime, Clock3],
    ["Motor", vehicle.specs.motor, ShieldCheck],
    ["Battery", vehicle.specs.battery, BatteryCharging],
    ["Load / seating", vehicle.specs.seatingOrLoad, Wrench]
  ] as const;
  const related = vehicles.filter((item) => item.id !== vehicle.id && item.category === vehicle.category).slice(0, 3);

  return (
    <main>
      <section className="nxte-shell py-8">
        <Link href="/vehicles" className="mb-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--nxte-navy)]">
          <ArrowLeft size={18} /> Back to vehicles
        </Link>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-[18px] bg-white shadow-xl">
            <VehicleImage vehicle={vehicle} />
          </div>
          <aside className="rounded-[18px] bg-[var(--nxte-navy)] p-7 text-white lg:sticky lg:top-28 lg:h-fit">
            <p className="nxte-kicker">{vehicle.category}</p>
            <h1 className="nxte-display mt-3 text-5xl font-extrabold md:text-6xl">{vehicle.name}</h1>
            <p className="mt-5 text-lg leading-8 text-white/76">{vehicle.shortDescription}</p>
            <div className="mt-6 rounded-xl border border-white/14 bg-white/10 p-4 text-sm leading-6 text-white/72">
              Specification, price, warranty, homologation and battery details must be verified from approved NXTE documents before being treated as technical facts.
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {specs.map(([label, value, Icon]) => (
                <div key={label} className="rounded-xl border border-white/14 bg-white/8 p-4">
                  <Icon className="text-[var(--nxte-orange)]" size={20} />
                  <p className="mt-3 text-xs font-bold uppercase text-white/52">{label}</p>
                  <p className="mt-1 text-sm font-extrabold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Link href="/test-ride" className="nxte-button nxte-button-primary">Book Test Ride</Link>
              <Link href="/dealer" className="nxte-button nxte-button-on-dark">Dealer Enquiry</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="nxte-section bg-white">
        <div className="nxte-shell">
          <p className="nxte-kicker">Model experience</p>
          <h2 className="nxte-display mt-2 max-w-3xl text-4xl font-extrabold text-[var(--nxte-navy)]">Built around your route.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Route fit", "Finance conversation", "Dealer and service handoff"].map((title) => (
              <article key={title} className="nxte-card p-6">
                <h3 className="nxte-display text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--nxte-muted)]">NXTE keeps buying actions close to every model while avoiding unverified public claims.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="nxte-section">
          <div className="nxte-shell">
            <p className="nxte-kicker">Related models</p>
            <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)]">Compare within the same category.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => <VehicleCard key={item.id} vehicle={item} />)}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
