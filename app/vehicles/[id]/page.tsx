import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BatteryCharging, Clock3, Download, Gauge, Handshake, Mail, ShieldCheck } from "lucide-react";
import { FinancePartners } from "@/components/FinancePartners";
import { PartsExplorer } from "@/components/PartsExplorer";
import { VehicleGallery } from "@/components/VehicleGallery";
import { VideoHero } from "@/components/VideoHero";
import { getVehicleById, vehicles } from "@/lib/vehicles";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ id: vehicle.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  return {
    title: vehicle ? `${vehicle.name} | NXT Mobility` : "Vehicle | NXT Mobility"
  };
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  const specs = [
    { label: "Range", value: vehicle.specs.range, icon: BatteryCharging },
    { label: "Speed", value: vehicle.specs.speed, icon: Gauge },
    { label: "Charging", value: vehicle.specs.chargingTime, icon: Clock3 },
    { label: "Motor", value: vehicle.specs.motor, icon: ShieldCheck },
    { label: "Battery", value: vehicle.specs.battery, icon: BatteryCharging },
    { label: "Load / seating", value: vehicle.specs.seatingOrLoad, icon: Handshake }
  ];

  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow={vehicle.category}
        title={vehicle.name}
        copy={vehicle.shortDescription}
        poster={vehicle.posterImage}
        actions={[
          { href: "/test-ride", label: "Book test ride", variant: "primary" },
          { href: "/dealer", label: "Dealer enquiry", variant: "secondary" }
        ]}
      >
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.08] shadow-glow backdrop-blur-2xl">
          <Image src={vehicle.posterImage} alt={vehicle.name} fill priority className="object-contain p-10" sizes="(max-width: 1024px) 100vw, 44vw" />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-electric-cyan">Model signal</p>
            <h2 className="mt-2 text-3xl font-black">{vehicle.specs.range} range / {vehicle.specs.motor}</h2>
          </div>
        </div>
      </VideoHero>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/vehicles" className="mb-7 inline-flex items-center gap-2 font-black text-electric-cyan">
            <ArrowLeft size={18} /> Back to vehicles
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr]">
            <VehicleGallery vehicle={vehicle} />

            <aside className="metal-panel h-fit rounded-[2rem] p-6 lg:sticky lg:top-28">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-electric-green">{vehicle.category}</span>
              <h1 className="mt-4 text-5xl font-black leading-none text-white sm:text-6xl">{vehicle.name}</h1>
              <p className="mt-5 text-base leading-8 text-steel-300">{vehicle.shortDescription}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={spec.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <spec.icon className="mb-3 text-electric-cyan" size={21} />
                    <span className="block text-xs font-bold text-steel-400">{spec.label}</span>
                    <strong className="mt-1 block text-sm text-white">{spec.value}</strong>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Link href="/test-ride" className="rounded-2xl bg-gradient-to-r from-electric-cyan to-electric-green px-5 py-4 text-center font-black text-midnight">
                  Book Test Ride
                </Link>
                <a
                  href="https://nxtemobility.com/catalogue.php"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 font-black text-white"
                >
                  <Download size={18} /> Brochure
                </a>
                <Link href="/dealer" className="rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-center font-black text-white">
                  Become Dealer
                </Link>
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 font-black text-white">
                  <Mail size={18} /> Contact Sales
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FinancePartners />
        </div>
      </section>

      <PartsExplorer vehicle={vehicle} />
    </main>
  );
}
