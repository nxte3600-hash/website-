import Image from "next/image";
import Link from "next/link";
import { BatteryCharging, Cpu, Gauge, Network, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react";
import { PremiumPageHero } from "@/components/PremiumPageHero";
import { ThreeVehicleShowcase } from "@/components/ThreeVehicleShowcase";

const systems = [
  {
    icon: Zap,
    title: "Electric drive",
    copy: "BLDC hub motors for scooters and shaft-drive packages for commercial three-wheelers, tuned around instant torque and serviceability."
  },
  {
    icon: BatteryCharging,
    title: "Battery ecosystem",
    copy: "Battery and charging storytelling covers range, charging discipline, energy use, and future-ready lithium/lead-acid configuration."
  },
  {
    icon: Cpu,
    title: "Controller logic",
    copy: "The motor controller is explained as the power brain: throttle response, protection, thermal behavior, and diagnostics."
  },
  {
    icon: ShieldCheck,
    title: "Safety architecture",
    copy: "Lighting, braking, suspension, chassis, wiring, and service touchpoints are surfaced through interactive product pages."
  }
];

const labRows = [
  ["01", "Range and charging", "Communicate real-world uptime, charging windows, and energy confidence."],
  ["02", "Parts transparency", "Every model includes hotspots so buyers understand what powers the vehicle."],
  ["03", "Commercial durability", "Rickshaw and loader pages focus on chassis, suspension, axle, and load behavior."],
  ["04", "Dealer enablement", "Technology copy is written to help sales teams explain value without overcomplication."]
];

export default function TechnologyPage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="Technology"
        title="A blue-white EV lab for every system inside the vehicle."
        copy="This page turns NXT's technology claims into a premium interactive story: motor, battery, controller, safety, suspension, frame, service, and connected ownership."
        primaryHref="/vehicles"
        primaryLabel="Explore models"
        secondaryHref="/test-ride"
        secondaryLabel="Book test ride"
      >
        <div className="glass-panel overflow-hidden rounded-[2.5rem]">
          <ThreeVehicleShowcase />
        </div>
      </PremiumPageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {systems.map((system) => (
            <article key={system.title} className="blueprint-card rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-electric-cyan/60">
              <system.icon className="mb-6 text-electric-cyan" size={38} />
              <h2 className="text-2xl font-black text-white">{system.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel-400">{system.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white text-midnight shadow-panel lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-8 sm:p-12">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-navy-700">Design system</span>
            <h2 className="mt-4 text-4xl font-black leading-none sm:text-6xl">Technology should look engineered, not decorated.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The layout uses lab-style whitespace, blue-white contrast, large product imagery, and animated data panels so it feels closer to
              a premium EV brand than a catalogue website.
            </p>
            <div className="mt-8 grid gap-4">
              {labRows.map(([num, title, copy]) => (
                <div key={num} className="grid gap-4 rounded-3xl bg-slate-100 p-5 sm:grid-cols-[70px_1fr]">
                  <strong className="text-4xl font-black text-navy-900">{num}</strong>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[560px] bg-gradient-to-br from-navy-950 via-navy-800 to-electric-blue">
            <Image src="/vehicles/grace-hs.jpg" alt="NXT scooter technology" fill className="object-contain p-12" />
            <div className="absolute left-8 top-8 rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-2xl">
              <Gauge className="mb-3 text-electric-green" />
              <p className="text-sm font-bold text-white/70">High-speed scooter architecture</p>
              <strong className="text-2xl font-black">Motor · Battery · Controller</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: Network, title: "Connected future", copy: "Prepared for app, diagnostics, dealer CRM, and service data integrations." },
            { icon: Wrench, title: "Repairable mindset", copy: "The interface explains parts so after-sales feels credible and transparent." },
            { icon: Sparkles, title: "Premium clarity", copy: "Motion is used to explain systems, not to distract from buying decisions." }
          ].map((item) => (
            <article key={item.title} className="glass-panel rounded-[2rem] p-7">
              <item.icon className="mb-5 text-electric-cyan" size={36} />
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-steel-400">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl text-center">
          <Link href="/vehicles/prince-hs" className="inline-flex rounded-full bg-white px-7 py-4 font-black text-midnight">
            Open a model technology page
          </Link>
        </div>
      </section>
    </main>
  );
}
