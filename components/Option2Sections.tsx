"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BatteryCharging,
  Bell,
  BriefcaseBusiness,
  CalendarCheck,
  CarFront,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  History,
  LocateFixed,
  Lock,
  MapPin,
  Navigation,
  Power,
  Route,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Users,
  Wrench,
  type LucideIcon
} from "lucide-react";
import { cargoVehicles, passengerThreeWheelers, scooterVehicles, Vehicle, vehicles } from "@/lib/vehicles";

const homeAsset = (path: string) => `/home-locked/${path}`;

type HeroSlide = {
  name: string;
  copy: string;
  image: string;
  href: string;
};

export const heroSlides: HeroSlide[] = [
  {
    name: "India in Motion",
    copy: "Personal scooters, passenger e-rickshaws and cargo EVs for every Indian journey.",
    image: homeAsset("sections/hero-india-in-motion.png"),
    href: "/test-ride"
  },
  {
    name: "Grace",
    copy: "A confident red scooter story for daily Indian routes.",
    image: homeAsset("products/grace2.png"),
    href: "/vehicles/grace"
  },
  {
    name: "Energy Pro",
    copy: "A practical blue scooter for errands, commutes and smart ownership.",
    image: homeAsset("products/energypro1.png"),
    href: "/vehicles/energy-pro"
  },
  {
    name: "Ola",
    copy: "Connected city mobility with a clean urban stance.",
    image: homeAsset("products/ola1.png"),
    href: "/vehicles/ola"
  },
  {
    name: "E4",
    copy: "Compact electric movement for everyday city use.",
    image: homeAsset("products/e42.png"),
    href: "/vehicles/e4"
  }
];

export function HeroCarousel({ slides = heroSlides }: { slides?: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const active = slides[index] ?? slides[0];
  const goTo = (nextIndex: number) => setIndex((nextIndex + slides.length) % slides.length);

  return (
    <section
      className="relative bg-white pt-10 md:pt-14"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(index - 1);
        if (event.key === "ArrowRight") goTo(index + 1);
      }}
    >
      <div className="relative min-h-[530px] overflow-hidden bg-[var(--nxte-navy)] text-white md:min-h-[620px]">
        <Image key={active.image} src={active.image} alt="" fill priority={index === 0} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.94)_0%,rgba(255,255,255,.8)_34%,rgba(255,255,255,.08)_67%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,rgba(7,26,47,.34),transparent)]" />

        <div className="nxte-shell relative z-10 flex min-h-[530px] flex-col justify-center pt-14 md:min-h-[620px] md:pt-16">
          <div className="max-w-[590px]">
            <h1 className="nxte-display text-[2.85rem] font-extrabold leading-[1.03] text-[var(--nxte-navy)] sm:text-[4.25rem] lg:text-[5.35rem]">
              Move through India. Your way.
            </h1>
            <p className="mt-5 max-w-[470px] text-[1.1rem] font-bold leading-7 text-[rgba(7,26,47,.78)]">{active.copy}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/test-ride" className="nxte-button nxte-button-primary">Book a Test Ride <span aria-hidden>→</span></Link>
              <Link href={active.href} className="nxte-button nxte-button-secondary">View {active.name}</Link>
            </div>
          </div>
        </div>

        <div className="nxte-shell absolute inset-x-0 bottom-8 z-20 flex items-center justify-between">
          <button type="button" className="home-round-control" onClick={() => goTo(index - 1)} aria-label="Previous hero slide">←</button>
          <div className="flex gap-3">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.name}
                type="button"
                className={`h-2.5 rounded-full transition-all ${slideIndex === index ? "w-8 bg-[var(--nxte-orange)]" : "w-2.5 bg-white/80"}`}
                aria-label={`Show ${slide.name}`}
                onClick={() => goTo(slideIndex)}
              />
            ))}
          </div>
          <button type="button" className="home-round-control" onClick={() => goTo(index + 1)} aria-label="Next hero slide">→</button>
        </div>
      </div>
    </section>
  );
}

const journeys: Array<[string, string, string, LucideIcon]> = [
  ["Office-going Men", "Daily commute", homeAsset("journeys/01-office-going-man.png"), BriefcaseBusiness],
  ["Office-going Women", "Grace confidence", homeAsset("journeys/02-office-going-woman-grace.png"), Route],
  ["College Students", "Campus routes", homeAsset("journeys/03-college-students.png"), GraduationCap],
  ["Everyday Markets", "Errands made easy", homeAsset("journeys/04-everyday-market-woman.png"), ShoppingCart],
  ["Fleet Operators", "Business uptime", homeAsset("journeys/05-fleet-operator.png"), CarFront]
];

export function AudienceJourneys() {
  return (
    <section className="home-section pt-9">
      <div className="nxte-shell">
        <SectionHeader kicker="Built for real India" title="Different journeys. One smart choice." action="Explore All Journeys" href="/why-ev" />
        <div className="home-scroll-row mt-5 grid gap-4 lg:grid-cols-5">
          {journeys.map(([title, label, image, Icon]) => (
            <article key={title} className="group relative min-h-[260px] overflow-hidden rounded-[15px] bg-[var(--nxte-navy)] text-white shadow-[0_14px_32px_rgba(7,26,47,.12)]">
              <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 220px, 20vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,0)_34%,rgba(7,26,47,.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--nxte-orange)]"><Icon size={19} /></span>
                <h3 className="mt-3 text-lg font-extrabold leading-tight">{title}</h3>
                <p className="text-sm font-semibold text-white/78">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const productImages: Record<string, string> = {
  grace: homeAsset("products/grace1.png"),
  "energy-pro": homeAsset("products/energypro1.png"),
  ola: homeAsset("products/ola1.png"),
  e4: homeAsset("products/e42.png")
};

export function VehicleImage({ vehicle, className = "" }: { vehicle: Vehicle; className?: string }) {
  if (vehicle.imagePending) {
    return (
      <div className={`grid h-full place-items-center bg-[var(--nxte-navy)] p-6 ${className}`}>
        <svg viewBox="0 0 320 190" role="img" aria-label={`${vehicle.name} scooter line art`} className="h-[72%] w-[88%] text-white/72">
          <path d="M75 132c11-30 31-50 66-60l35-10 32-32M122 131h70c24 0 42-10 54-31l14-25M69 132h182M78 132a35 35 0 1 0 70 0 35 35 0 0 0-70 0Zm138 0a35 35 0 1 0 70 0 35 35 0 0 0-70 0ZM150 72l28 57M206 31l24 18 34 2M116 82c-18 1-33 7-44 18M186 62h46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        </svg>
      </div>
    );
  }
  return <Image src={productImages[vehicle.id] ?? vehicle.posterImage} alt={`${vehicle.name} electric scooter`} fill className={`object-contain p-4 ${className}`} sizes="(max-width: 768px) 50vw, 33vw" />;
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/vehicles/${vehicle.id}`} className="group overflow-hidden rounded-[15px] border border-[rgba(7,26,47,.28)] bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(7,26,47,.12)]">
      <div className="relative aspect-[1.64/1] bg-white"><VehicleImage vehicle={vehicle} /></div>
      <div className="flex items-center justify-between gap-3 px-4 pb-3">
        <h3 className="text-lg font-extrabold text-[var(--nxte-navy)]">{vehicle.name}</h3>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--nxte-orange)] text-white transition group-hover:translate-x-1" aria-hidden>→</span>
      </div>
    </Link>
  );
}

export function VehicleSelector() {
  return (
    <section className="home-section">
      <div className="nxte-shell">
        <SectionHeader kicker="Six ways to move" title="Choose the ride that's right for you." action="Compare Vehicles" href="/vehicles" />
        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-3">{scooterVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}</div>
        <CommercialBanner />
      </div>
    </section>
  );
}

function CommercialBanner() {
  return (
    <div className="mt-5 grid overflow-hidden rounded-[14px] bg-[var(--nxte-navy)] text-white shadow-[0_16px_34px_rgba(7,26,47,.14)] md:grid-cols-2">
      <Link href="/vehicles?type=passenger" className="grid min-h-[205px] grid-cols-[.95fr_1fr] items-center gap-4 border-white/22 p-5 md:border-r">
        <div className="relative h-40"><Image src="/vehicles/buland-rsd-standard.jpg" alt="Passenger three-wheeler" fill className="object-contain" sizes="45vw" /></div>
        <div>
          <h3 className="nxte-display text-[2rem] font-extrabold leading-[1.05]">Passenger<br />3-Wheelers</h3>
          <p className="mt-2 max-w-[190px] text-sm font-semibold leading-5 text-white/74">Spacious, safe and made for shared journeys.</p>
          <span className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-[var(--nxte-orange)]" aria-hidden>→</span>
        </div>
      </Link>
      <Link href="/vehicles?type=cargo" className="grid min-h-[205px] grid-cols-[.8fr_1.1fr] items-center gap-4 p-5">
        <div>
          <h3 className="nxte-display text-[2rem] font-extrabold leading-[1.05]">Cargo<br />EVs</h3>
          <p className="mt-2 max-w-[170px] text-sm font-semibold leading-5 text-white/74">Built to carry more. Built to last.</p>
          <span className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-[var(--nxte-orange)]" aria-hidden>→</span>
        </div>
        <div className="relative h-40"><Image src="/vehicles/buland-rsd-loader.jpg" alt="Cargo electric vehicle" fill className="object-contain" sizes="45vw" /></div>
      </Link>
    </div>
  );
}

export function SavingsCalculator() {
  const [vehicleMode, setVehicleMode] = useState<"petrol" | "electric">("petrol");
  const [distance, setDistance] = useState("");
  const [petrol, setPetrol] = useState("");
  const [mileage, setMileage] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);

  const result = useMemo(() => {
    const km = Number(distance) || 0;
    const fuel = Number(petrol) || 0;
    const kmpl = Number(mileage) || 1;
    const monthlyPetrol = Math.round((km * 30 * fuel) / Math.max(kmpl, 1));
    const monthlyElectric = Math.round(km * 30 * 0.45);
    return Math.max(monthlyPetrol - monthlyElectric, 0);
  }, [distance, mileage, petrol]);

  return (
    <section className="home-section bg-white">
      <div className="nxte-shell grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div>
          <p className="nxte-kicker">Smart today. Smarter tomorrow.</p>
          <h2 className="nxte-display mt-2 max-w-[470px] text-[2.35rem] font-extrabold leading-[1.06] text-[var(--nxte-navy)] md:text-[3.5rem]">When petrol rises, smart mobility matters.</h2>
          <p className="mt-4 max-w-[390px] text-sm font-semibold leading-6 text-[var(--nxte-muted)]">See how switching to electric can work for you.</p>
          <div className="mt-6 inline-grid grid-cols-2 overflow-hidden rounded-md bg-[rgba(7,26,47,.06)] text-sm font-extrabold text-[var(--nxte-navy)]">
            {(["petrol", "electric"] as const).map((mode) => (
              <button key={mode} type="button" className={`min-h-11 px-8 ${vehicleMode === mode ? "bg-[var(--nxte-orange)] text-white" : "text-[rgba(7,26,47,.62)]"}`} onClick={() => setVehicleMode(mode)}>
                {mode === "petrol" ? "Petrol Scooter" : "Electric Scooter"}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <UnitInput label="Daily Distance" placeholder="e.g. 20" unit="km" value={distance} onChange={setDistance} />
            <UnitInput label="Petrol Price" placeholder="e.g. 100" unit="Rs / L" value={petrol} onChange={setPetrol} />
            <UnitInput label="Mileage" placeholder="e.g. 50" unit="km / L" value={mileage} onChange={setMileage} />
          </div>
          <button type="button" className="nxte-button nxte-button-primary mt-6 w-full max-w-[430px]" onClick={() => setHasCalculated(true)}>Calculate Your Savings <span aria-hidden>▣</span></button>
          <div className="mt-4 max-w-[430px] rounded-lg bg-[rgba(7,26,47,.045)] p-4 text-sm font-semibold text-[var(--nxte-muted)]">
            {hasCalculated ? <span>Estimated monthly savings: <strong className="text-[var(--nxte-orange)]">Rs {result.toLocaleString("en-IN")}</strong></span> : <span>Enter distance, fuel price and mileage to preview your estimated monthly saving.</span>}
            <p className="mt-2 text-xs">Assumes 30 riding days/month and about Rs 0.45/km electric running cost. Actual savings vary by route, tariff and usage.</p>
          </div>
        </div>
        <div className="relative min-h-[315px] overflow-hidden rounded-[2px] md:min-h-[435px]">
          <Image src={homeAsset("sections/petrol-vs-electric.png")} alt="Petrol nozzle beside scooter" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 56vw" />
        </div>
      </div>
    </section>
  );
}

function UnitInput({ label, placeholder, unit, value, onChange }: { label: string; placeholder: string; unit: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-xs font-extrabold text-[var(--nxte-navy)]">
      {label}
      <span className="relative block">
        <input className="nxte-input pr-16" inputMode="decimal" value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-extrabold text-[rgba(7,26,47,.56)]">{unit}</span>
      </span>
    </label>
  );
}

const appLeftFeatures: Array<[string, string, LucideIcon]> = [
  ["Live Location", "Track in real time", LocateFixed],
  ["Battery & Range", "Know before you go", BatteryCharging],
  ["Remote On / Off", "Power in your control", Power],
  ["Geofence Alerts", "Stay informed", Bell],
  ["Lock / Unlock", "Secure remotely", Lock]
];

const appRightFeatures: Array<[string, string, LucideIcon]> = [
  ["Trip History", "Ride insights", History],
  ["Battery Health", "Monitor performance", HeartPulse],
  ["Anti-theft Alert", "Instant notifications", ShieldCheck],
  ["Diagnostics", "Vehicle health", SlidersHorizontal],
  ["Service Support", "We're here for you", Wrench]
];

export function AppSection() {
  return (
    <section className="bg-[var(--nxte-navy)] py-14 text-white" id="nxte-app">
      <div className="nxte-shell grid items-center gap-7 lg:grid-cols-[.82fr_.72fr_.9fr_.72fr]">
        <div>
          <p className="nxte-kicker">Connected. Convenient. In control.</p>
          <h2 className="nxte-display mt-2 text-[2.15rem] font-extrabold leading-[1.08] md:text-[3.25rem]">The NXTE App makes every ride smarter.</h2>
          <p className="mt-4 max-w-[320px] text-sm font-semibold leading-6 text-white/76">Everything you need. Right at your fingertips.</p>
          <Link href="/technology" className="nxte-button nxte-button-on-dark mt-7">Learn More <span aria-hidden>→</span></Link>
        </div>
        <FeatureColumn features={appLeftFeatures} />
        <PhonePreview />
        <FeatureColumn features={appRightFeatures} />
      </div>
    </section>
  );
}

function FeatureColumn({ features }: { features: Array<[string, string, LucideIcon]> }) {
  return (
    <div className="grid gap-3">
      {features.map(([title, copy, Icon]) => (
        <div key={title} className="grid grid-cols-[42px_1fr] items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--nxte-orange)] text-[var(--nxte-orange)]"><Icon size={18} /></span>
          <span><strong className="block text-sm">{title}</strong><span className="block text-xs font-semibold text-white/65">{copy}</span></span>
        </div>
      ))}
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="mx-auto w-full max-w-[275px] rounded-[34px] bg-white p-3 text-[var(--nxte-navy)] shadow-[0_22px_60px_rgba(0,0,0,.34)]">
      <div className="overflow-hidden rounded-[26px] bg-[#f6f8fb]">
        <div className="flex items-center justify-between border-b border-[rgba(7,26,47,.1)] bg-white px-4 py-3 text-xs font-extrabold">
          <span>←</span><span>NXTE Grace</span><span title="Preview interface">Preview</span>
        </div>
        <div className="relative h-52 bg-[#eef2f4]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 260 208" aria-hidden>
            <path d="M0 45 C45 15 70 70 118 38 S194 15 260 42" fill="none" stroke="#d8dde2" strokeWidth="12" />
            <path d="M0 156 C50 118 82 178 140 139 S205 98 260 116" fill="none" stroke="#d8dde2" strokeWidth="12" />
            <path d="M38 0 L70 208M178 0 L145 208" stroke="#e5e9ed" strokeWidth="10" />
            <path d="M95 97 L132 74 L164 101 L130 134 Z" fill="#ffffff" stroke="#ccd4dc" />
          </svg>
          <span className="absolute left-1/2 top-[46%] grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--nxte-navy)] text-white shadow-lg"><MapPin size={22} fill="currentColor" /></span>
        </div>
        <div className="grid grid-cols-2 gap-3 bg-white p-4">
          <Metric label="Battery" value="85%" icon={BatteryCharging} />
          <Metric label="Range" value="72 km" icon={Navigation} />
        </div>
        <div className="px-4 pb-4">
          <p className="mb-2 text-xs font-extrabold">Vehicle Control</p>
          <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-[rgba(7,26,47,.62)]">
            {["Lock", "Unlock", "On", "Off"].map((item, itemIndex) => (
              <span key={item} className="grid gap-1">
                <span className={`mx-auto grid h-8 w-8 place-items-center rounded-full ${itemIndex === 2 ? "bg-[var(--nxte-orange)] text-white" : "bg-[rgba(7,26,47,.06)] text-[var(--nxte-navy)]"}`}><Power size={13} /></span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5 border-t border-[rgba(7,26,47,.08)] bg-white py-2 text-center text-[10px] font-extrabold text-[rgba(7,26,47,.55)]">
          {["Home", "Trip", "App", "Alerts", "More"].map((item, itemIndex) => <span key={item} className={itemIndex === 2 ? "text-[var(--nxte-orange)]" : ""}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return <div className="rounded-xl bg-[#f6f8fb] p-3"><div className="flex items-center gap-2 text-xs font-bold text-[rgba(7,26,47,.6)]"><Icon size={14} /> {label}</div><p className="mt-1 text-xl font-extrabold text-[var(--nxte-navy)]">{value}</p></div>;
}

export function OwnershipJourney() {
  const steps: Array<[string, string, LucideIcon]> = [
    ["Test Ride", "Experience it first. Feel the difference.", Route],
    ["Choose Vehicle", "Pick what fits your journey best.", ClipboardCheck],
    ["Finance Support", "Flexible options that make sense.", Users],
    ["Dealer & Service", "Wide network. Always by your side.", ShieldCheck]
  ];
  return (
    <section className="home-section bg-white">
      <div className="nxte-shell grid gap-7 lg:grid-cols-[.58fr_1.42fr] lg:items-center">
        <div>
          <p className="nxte-kicker">Your journey. Made simple.</p>
          <h2 className="nxte-display mt-2 text-[2.2rem] font-extrabold leading-[1.08] text-[var(--nxte-navy)] md:text-[3.15rem]">From test ride to trusting every ride.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-4">
          {steps.map(([title, copy, Icon], stepIndex) => (
            <div key={title} className="relative text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center text-[var(--nxte-orange)]"><Icon size={38} strokeWidth={1.8} /></span>
              <p className="mt-2 text-sm font-extrabold text-[var(--nxte-navy)]">{stepIndex + 1}. {title}</p>
              <p className="mx-auto mt-1 max-w-[150px] text-xs font-semibold leading-5 text-[var(--nxte-muted)]">{copy}</p>
              {stepIndex < steps.length - 1 ? <span className="absolute right-[-10px] top-7 hidden text-3xl text-[rgba(7,26,47,.5)] sm:block">›</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ManufacturingProof() {
  const cards = [
    ["Research", "Understanding Indian roads and riders.", "15% 45%"],
    ["Engineering", "Designing for safety, performance and reliability.", "43% 43%"],
    ["Assembly", "Precision manufacturing with world-class standards.", "65% 45%"],
    ["Testing", "Rigorous testing for every journey.", "86% 45%"]
  ];
  return (
    <section className="bg-white pb-9">
      <div className="nxte-shell">
        <div className="grid gap-6 lg:grid-cols-[.5fr_1.5fr] lg:items-end">
          <div>
            <p className="nxte-kicker">Built in India, for India</p>
            <h2 className="nxte-display mt-2 text-[2.15rem] font-extrabold leading-[1.08] text-[var(--nxte-navy)] md:text-[3.15rem]">Engineering trust. Delivering quality.</h2>
            <p className="mt-3 max-w-[360px] text-sm font-semibold leading-6 text-[var(--nxte-muted)]">From research to road, every NXTE vehicle is designed, engineered and built in India for Indian conditions.</p>
            <Link href="/manufacturing" className="nxte-button nxte-button-secondary mt-5">Our Story <span aria-hidden>→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([title, copy, position]) => (
              <article key={title} className="relative min-h-[190px] overflow-hidden rounded-[10px] bg-[var(--nxte-navy)] text-white">
                <Image src={homeAsset("sections/manufacturing-master.png")} alt={title} fill className="object-cover" style={{ objectPosition: position }} sizes="25vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,.08),rgba(7,26,47,.9))]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-extrabold">{title}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white/74">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-3 rounded-xl bg-[rgba(7,26,47,.035)] p-4 text-sm font-bold text-[var(--nxte-navy)] md:grid-cols-3">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--nxte-orange)]">▦</span>Proudly made in India</div>
          <div className="flex items-center gap-3"><MapPin className="text-[var(--nxte-orange)]" /> Noida, Uttar Pradesh <span className="text-[var(--nxte-muted)]">Research & Development Hub</span></div>
          <div className="flex items-center gap-3"><MapPin className="text-[var(--nxte-orange)]" /> Bengaluru Rural, Karnataka <span className="text-[var(--nxte-muted)]">Manufacturing Hub</span></div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-white pb-0">
      <div className="nxte-shell rounded-[16px] border border-[rgba(7,26,47,.12)] bg-white p-5 shadow-[0_12px_28px_rgba(7,26,47,.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-[var(--nxte-orange)] text-white"><Route size={34} /></span>
            <div>
              <h2 className="nxte-display text-2xl font-extrabold leading-tight text-[var(--nxte-navy)] md:text-3xl">Ready to experience the future of smart mobility?</h2>
              <p className="mt-1 text-sm font-semibold text-[var(--nxte-muted)]">Book your test ride today and feel the NXTE difference.</p>
            </div>
          </div>
          <Link href="/test-ride" className="nxte-button nxte-button-primary shrink-0">Book a Test Ride <span aria-hidden>→</span></Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, action, href }: { kicker: string; title: string; action?: string; href?: string }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="nxte-kicker">{kicker}</p>
        <h2 className="nxte-display mt-2 max-w-[520px] text-[2.25rem] font-extrabold leading-[1.05] text-[var(--nxte-navy)] md:text-[3.35rem]">{title}</h2>
      </div>
      {action && href ? <Link href={href} className="nxte-button nxte-button-secondary self-start md:self-auto">{action} <span aria-hidden>→</span></Link> : null}
    </div>
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
          {items.map(([heading, body], itemIndex) => (
            <article key={heading} className={`rounded-2xl p-7 ${itemIndex === items.length - 1 ? "bg-[var(--nxte-navy)] text-white" : "nxte-card"}`}>
              <h3 className="nxte-display text-2xl font-bold">{heading}</h3>
              <p className={`mt-3 leading-7 ${itemIndex === items.length - 1 ? "text-white/72" : "text-[var(--nxte-muted)]"}`}>{body}</p>
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
