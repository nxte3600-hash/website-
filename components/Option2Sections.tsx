"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BatteryCharging, Bell, Bike, CalendarCheck, Gauge, HeartPulse, History, LocateFixed, Lock, MapPin, Navigation, Power, Route, ShieldCheck, SlidersHorizontal, Wrench, type LucideIcon } from "lucide-react";
import { cargoVehicles, passengerThreeWheelers, scooterVehicles, Vehicle, vehicles } from "@/lib/vehicles";

type HeroSlide = {
  title: string;
  eyebrow: string;
  copy: string;
  image?: string;
  vehicleId?: string;
};

export const heroSlides: HeroSlide[] = scooterVehicles.map((vehicle) => ({
  title: `${vehicle.name}. Your city, your rhythm.`,
  eyebrow: "India in motion",
  copy: vehicle.shortDescription,
  image: vehicle.imagePending ? "/option2/hero-india-in-motion.png" : vehicle.posterImage,
  vehicleId: vehicle.id
}));

export function HeroCarousel({ slides = heroSlides }: { slides?: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const active = slides[index] ?? slides[0];

  return (
    <section className="nxte-shell pt-6">
      <div className="relative min-h-[520px] overflow-hidden rounded-[18px] bg-[var(--nxte-navy)] text-white md:min-h-[620px]">
        {active?.image ? <Image src={active.image} alt="" fill priority className="object-cover" sizes="100vw" /> : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,47,.9)_0%,rgba(7,26,47,.72)_34%,rgba(7,26,47,.1)_72%)]" />
        <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-center p-7 md:min-h-[620px] md:p-16">
          <p className="nxte-kicker">{active?.eyebrow}</p>
          <h1 className="nxte-display mt-5 text-balance text-5xl font-extrabold leading-[1.04] md:text-7xl">Move through India. Your way.</h1>
          <p className="mt-6 max-w-lg text-lg font-semibold leading-8 text-white/82">{active?.copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/test-ride" className="nxte-button nxte-button-primary">Book a Test Ride <span aria-hidden>→</span></Link>
            <Link href="/vehicles" className="nxte-button nxte-button-on-dark">Explore vehicles</Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-7 right-7 z-20 flex items-center justify-between gap-4 md:left-16 md:right-16">
          <div className="flex gap-2">
            {slides.map((slide, slideIndex) => (
              <button key={slide.title} type="button" className={`h-2 rounded-full transition-all ${slideIndex === index ? "w-8 bg-[var(--nxte-orange)]" : "w-2 bg-white/70"}`} aria-label={`Show ${slide.title}`} onClick={() => setIndex(slideIndex)} />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/38 bg-white/10" onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Previous hero slide">‹</button>
            <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/38 bg-white/10" onClick={() => setIndex((index + 1) % slides.length)} aria-label="Next hero slide">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const journeys = [
  ["Office-going Men", "Commute with calm, finance-ready electric ownership.", "/option2/hero-india-in-motion.png"],
  ["Office-going Women", "Safe, confident daily routes with a premium scooter story.", "/option2/grace2.png"],
  ["College Students", "Compact city travel for classes, friends and daily errands.", "/option2/e42.png"],
  ["Everyday Markets", "Household and market trips with less fuel anxiety.", "/option2/energypro2.png"],
  ["Fleet Operators", "Route-first EV choices for teams, service and uptime.", "/vehicles/veer-loader.jpg"]
];

export function AudienceJourneys() {
  return (
    <section className="nxte-section">
      <div className="nxte-shell">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="nxte-kicker">Built for real India</p>
            <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-5xl">Different journeys. One smart choice.</h2>
          </div>
          <Link href="/why-ev" className="nxte-button nxte-button-secondary">Explore all journeys <span aria-hidden>→</span></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {journeys.map(([title, copy, image]) => (
            <article key={title} className="group relative min-h-[250px] overflow-hidden rounded-[14px] bg-[var(--nxte-navy)] text-white">
              <Image src={image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 20vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,.08),rgba(7,26,47,.88))]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--nxte-orange)]"><Route size={18} /></span>
                <h3 className="nxte-display mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/78">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VehicleImage({ vehicle, className = "" }: { vehicle: Vehicle; className?: string }) {
  if (vehicle.imagePending) {
    return (
      <div className={`grid place-items-center bg-[var(--nxte-navy)] p-8 text-center text-white ${className}`}>
        <Bike className="mb-4 text-[var(--nxte-orange)]" size={42} />
        <p className="nxte-display text-xl font-bold">{vehicle.name}</p>
        <p className="mt-2 max-w-xs text-sm text-white/66">Approved product photography pending. No placeholder vehicle geometry shown.</p>
      </div>
    );
  }
  return <Image src={vehicle.posterImage} alt={`${vehicle.name} electric vehicle`} fill className={`object-contain p-6 ${className}`} sizes="(max-width: 768px) 100vw, 33vw" />;
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/vehicles/${vehicle.id}`} className="nxte-card-tight group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] bg-white">
        <VehicleImage vehicle={vehicle} />
      </div>
      <div className="flex items-end justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-extrabold uppercase text-[var(--nxte-orange)]">{vehicle.category}</p>
          <h3 className="nxte-display mt-1 text-2xl font-bold text-[var(--nxte-navy)]">{vehicle.name}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--nxte-orange)] text-white transition group-hover:translate-x-1" aria-hidden>→</span>
      </div>
    </Link>
  );
}

export function VehicleSelector() {
  return (
    <section className="pb-16">
      <div className="nxte-shell">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="nxte-kicker">Six ways to move</p>
            <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-5xl">Choose the ride that&apos;s right for you.</h2>
          </div>
          <Link href="/vehicles" className="nxte-button nxte-button-secondary">Compare vehicles <span aria-hidden>→</span></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {scooterVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
        </div>
        <div className="mt-5 grid overflow-hidden rounded-[14px] bg-[var(--nxte-navy)] text-white md:grid-cols-2">
          <CategoryBand title="Passenger 3-Wheelers" copy="Spacious, safe and made for shared journeys." vehicles={passengerThreeWheelers} image="/vehicles/buland-rsd-standard.jpg" />
          <CategoryBand title="Cargo EVs" copy="Built to carry more. Built to last." vehicles={cargoVehicles} image="/vehicles/buland-rsd-loader.jpg" />
        </div>
      </div>
    </section>
  );
}

function CategoryBand({ title, copy, vehicles, image }: { title: string; copy: string; vehicles: Vehicle[]; image: string }) {
  return (
    <Link href="/vehicles" className="grid min-h-[220px] grid-cols-[.8fr_1fr] items-center gap-4 border-white/18 p-6 first:border-b md:first:border-b-0 md:first:border-r">
      <div className="relative h-36">
        <Image src={image} alt="" fill className="object-contain" sizes="40vw" />
      </div>
      <div>
        <h3 className="nxte-display text-3xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/72">{copy}</p>
        <p className="mt-4 text-sm font-bold text-[var(--nxte-orange)]">{vehicles.length} models <span aria-hidden>→</span></p>
      </div>
    </Link>
  );
}

export function SavingsCalculator() {
  const [distance, setDistance] = useState(20);
  const [petrol, setPetrol] = useState(100);
  const [mileage, setMileage] = useState(50);
  const [electricCost, setElectricCost] = useState(18);
  const monthlyPetrol = Math.round((distance * 30 * petrol) / Math.max(mileage, 1));
  const monthlyElectric = Math.round(distance * 30 * (electricCost / 40));
  const savings = Math.max(monthlyPetrol - monthlyElectric, 0);

  return (
    <section className="bg-white py-16">
      <div className="nxte-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="nxte-kicker">Smart today, smarter tomorrow</p>
          <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-5xl">When petrol rises, smart mobility matters.</h2>
          <p className="mt-4 text-[var(--nxte-muted)]">Editable demonstration calculator. Actual savings depend on route, vehicle, electricity tariff, finance terms and service use.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">Daily distance<input className="nxte-input" type="number" min="1" value={distance} onChange={(event) => setDistance(Number(event.target.value))} /></label>
            <label className="grid gap-2 text-sm font-bold">Petrol price<input className="nxte-input" type="number" min="1" value={petrol} onChange={(event) => setPetrol(Number(event.target.value))} /></label>
            <label className="grid gap-2 text-sm font-bold">Mileage<input className="nxte-input" type="number" min="1" value={mileage} onChange={(event) => setMileage(Number(event.target.value))} /></label>
            <label className="grid gap-2 text-sm font-bold">Electric cost estimate<input className="nxte-input" type="number" min="1" value={electricCost} onChange={(event) => setElectricCost(Number(event.target.value))} /></label>
          </div>
          <div className="mt-6 rounded-xl bg-[var(--nxte-soft)] p-5">
            <p className="text-sm font-bold text-[var(--nxte-muted)]">Estimated monthly savings</p>
            <p className="nxte-display mt-1 text-4xl font-extrabold text-[var(--nxte-orange)]">INR {savings.toLocaleString("en-IN")}</p>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[16px] bg-[var(--nxte-navy)]">
          <Image src="/option2/hero-india-in-motion.png" alt="NXTE scooter on an Indian route" fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    </section>
  );
}

const appFeatures: Array<[string, LucideIcon]> = [
  ["Battery level", BatteryCharging], ["Battery health", HeartPulse], ["Remaining range", Gauge], ["Live location", LocateFixed],
  ["Geofence", MapPin], ["Remote on/off", Power], ["Lock/unlock", Lock], ["Trip history", History],
  ["Anti-theft alerts", Bell], ["Diagnostics", SlidersHorizontal], ["Service booking", Wrench]
];

export function AppSection() {
  return (
    <section className="nxte-navy py-20" id="nxte-app">
      <div className="nxte-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="nxte-kicker">Connected, convenient, in control</p>
          <h2 className="nxte-display mt-2 text-4xl font-extrabold md:text-5xl">The NXTE App makes every ride smarter.</h2>
          <p className="mt-5 max-w-xl text-white/72">Capability UI shown in demonstration mode. Live vehicle data appears only when backend APIs and a connected vehicle are available.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {appFeatures.map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-white/12 p-3">
                <Icon className="text-[var(--nxte-orange)]" size={19} />
                <span className="text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto min-h-[560px] w-full max-w-[390px] rounded-[34px] border border-white/18 bg-white p-4 text-[var(--nxte-navy)] shadow-2xl">
          <div className="rounded-[26px] bg-[#f5f7fa] p-5">
            <div className="flex items-center justify-between">
              <strong className="nxte-display">NXTE Grace</strong>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold">Demo</span>
            </div>
            <div className="my-5 grid h-56 place-items-center rounded-2xl bg-white">
              <Navigation className="text-[var(--nxte-orange)]" size={42} />
              <span className="sr-only">Map demonstration</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Metric label="Battery" value="85%" />
              <Metric label="Range" value="72 km" />
              <Metric label="Mode" value="Park" />
              <Metric label="Status" value="Locked" />
            </div>
            <p className="mt-4 text-xs text-[var(--nxte-muted)]">Disconnected demo. Connect backend telemetry to show live values.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl bg-white p-4"><p className="text-xs font-bold text-[var(--nxte-muted)]">{label}</p><p className="nxte-display mt-1 text-xl font-bold">{value}</p></div>;
}

export function OwnershipJourney() {
  const steps = ["Test Ride", "Choose Vehicle", "Finance Support", "Dealer & Service"];
  return (
    <section className="bg-white py-16">
      <div className="nxte-shell grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div>
          <p className="nxte-kicker">Your journey, made simple</p>
          <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)]">From test ride to trusting every ride.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--nxte-soft)] text-[var(--nxte-orange)]"><CalendarCheck /></span>
              <p className="mt-3 text-sm font-extrabold">{index + 1}. {step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ManufacturingProof() {
  const cards = [
    ["Research", "Understanding Indian roads and riders.", "/option2/manufacturing-master.png"],
    ["Engineering", "Designing for safety, reliability and service.", "/option2/technology-master.png"],
    ["Assembly", "Practical manufacturing with quality gates.", "/vehicles/buland-rsd-loader.jpg"],
    ["Testing", "Road-ready checks for everyday journeys.", "/vehicles/veer-loader.jpg"]
  ];
  return (
    <section className="bg-white pb-16">
      <div className="nxte-shell">
        <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="nxte-kicker">Built in India, for India</p>
            <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)]">Engineering trust. Delivering quality.</h2>
            <p className="mt-4 text-[var(--nxte-muted)]">Manufacturing claims should remain tied to verified company documentation and product approvals.</p>
            <Link href="/manufacturing" className="nxte-button nxte-button-secondary mt-6">Our story <span aria-hidden>→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([title, copy, image]) => (
              <article key={title} className="relative min-h-[250px] overflow-hidden rounded-[14px] bg-[var(--nxte-navy)] text-white">
                <Image src={image} alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,.08),rgba(7,26,47,.9))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="nxte-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/72">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-white pb-14">
      <div className="nxte-shell rounded-2xl border border-[var(--nxte-line)] bg-white p-6 shadow-xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="nxte-kicker">Ready to experience the future</p>
            <h2 className="nxte-display mt-1 text-3xl font-extrabold text-[var(--nxte-navy)]">Book your test ride today.</h2>
          </div>
          <Link href="/test-ride" className="nxte-button nxte-button-primary">Book a Test Ride <span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, copy, image = "/option2/hero-india-in-motion.png" }: { eyebrow: string; title: string; copy: string; image?: string }) {
  return (
    <section className="nxte-shell py-6">
      <div className="relative min-h-[430px] overflow-hidden rounded-[18px] bg-[var(--nxte-navy)] text-white">
        <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,47,.88),rgba(7,26,47,.58),rgba(7,26,47,.08))]" />
        <div className="relative z-10 flex min-h-[430px] max-w-3xl flex-col justify-center p-7 md:p-14">
          <p className="nxte-kicker">{eyebrow}</p>
          <h1 className="nxte-display mt-5 text-balance text-5xl font-extrabold leading-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/vehicles" className="nxte-button nxte-button-primary">Explore <span aria-hidden>→</span></Link>
            <Link href="/test-ride" className="nxte-button nxte-button-on-dark">Book a Test Ride <span aria-hidden>→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InfoGrid({ title, eyebrow, items }: { title: string; eyebrow?: string; items: Array<[string, string]> }) {
  return (
    <section className="nxte-section">
      <div className="nxte-shell">
        {eyebrow ? <p className="nxte-kicker">{eyebrow}</p> : null}
        <h2 className="nxte-display mt-2 max-w-3xl text-4xl font-extrabold text-[var(--nxte-navy)] md:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map(([heading, body], index) => (
            <article key={heading} className={`rounded-2xl p-7 ${index === items.length - 1 ? "bg-[var(--nxte-navy)] text-white" : "nxte-card"}`}>
              <h3 className="nxte-display text-2xl font-bold">{heading}</h3>
              <p className={`mt-3 leading-7 ${index === items.length - 1 ? "text-white/72" : "text-[var(--nxte-muted)]"}`}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatalogueGrid() {
  const groups = useMemo(() => [
    ["2-Wheelers", scooterVehicles],
    ["Passenger 3-Wheelers", passengerThreeWheelers],
    ["Cargo EVs", cargoVehicles]
  ] as const, []);
  const [group, setGroup] = useState("2-Wheelers");
  const active = groups.find(([name]) => name === group)?.[1] ?? vehicles;

  return (
    <section className="nxte-section">
      <div className="nxte-shell">
        <div className="flex flex-wrap gap-2">
          {groups.map(([name, items]) => (
            <button key={name} type="button" className={`rounded-full px-5 py-3 text-sm font-extrabold ${group === name ? "bg-[var(--nxte-orange)] text-white" : "bg-white text-[var(--nxte-navy)]"}`} onClick={() => setGroup(name)}>
              {name} ({items.length})
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {active.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
        </div>
      </div>
    </section>
  );
}
