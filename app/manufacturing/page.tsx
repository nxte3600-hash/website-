import Image from "next/image";
import { BatteryCharging, Boxes, Cpu, Factory, Gauge, Leaf, Microscope, ShieldCheck, Truck, Wrench } from "lucide-react";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { ManufacturingProcess } from "@/components/ManufacturingProcess";
import { MotionSection } from "@/components/MotionSection";
import { PremiumFeatureBand } from "@/components/PremiumFeatureBand";
import { QualityTestingGrid } from "@/components/QualityTestingGrid";
import { StatsStrip } from "@/components/StatsStrip";
import { VideoHero } from "@/components/VideoHero";

const process = [
  { icon: Boxes, title: "Incoming part review", copy: "Core components are framed around vendor quality, traceability and fitment discipline before assembly begins." },
  { icon: Factory, title: "Platform assembly", copy: "Scooter and three-wheeler platforms are presented as structured systems: frame, drivetrain, battery bay and harness routing." },
  { icon: BatteryCharging, title: "Electrical integration", copy: "Battery, controller, charger and wiring confidence are explained as safety-critical ownership systems." },
  { icon: Wrench, title: "Dealer service handoff", copy: "Service-friendly architecture helps dealer teams explain maintenance, genuine parts and long-term support." }
];

const quality = [
  { icon: ShieldCheck, title: "Brake and road safety checks", copy: "Braking, lighting and suspension are positioned as everyday confidence systems for Indian roads." },
  { icon: Gauge, title: "Range and drive validation", copy: "Specs are communicated by duty cycle so buyers know how each model fits commute, route or load." },
  { icon: Cpu, title: "Controller and harness inspection", copy: "Electrical routing, connector care and diagnostics become part of the trust story." },
  { icon: BatteryCharging, title: "Battery and charger discipline", copy: "Matched charging guidance and battery care reduce anxiety for first-time EV buyers." },
  { icon: Truck, title: "Commercial load readiness", copy: "Three-wheeler and loader pages focus on passenger, route and cargo expectations." },
  { icon: Microscope, title: "Continuous product learning", copy: "Feedback from dealers and owners should inform product pages, service content and model refinement." }
];

export default function ManufacturingPage() {
  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow="Manufacturing excellence"
        title="Built like an EV manufacturer, explained like a trusted partner."
        copy="NXT's manufacturing story is built around assembly discipline, quality testing, battery and electronics safety, vendor confidence, R&D learning and dealer-ready service support."
        actions={[
          { href: "/dealer", label: "Dealer enquiry", variant: "primary" },
          { href: "/contact-us", label: "Contact team", variant: "secondary" }
        ]}
        videoSrc="/video/hero-electric-scooter.mp4"
        poster="/vehicles/buland-rsd-loader.jpg"
      >
        <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.08] shadow-glow backdrop-blur-2xl">
          <Image src="/vehicles/buland-rsd-loader.jpg" alt="NXT EV manufacturing capability" fill priority className="object-contain p-10" sizes="(max-width: 1024px) 100vw, 44vw" />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-electric-cyan">Production signal</p>
            <h2 className="mt-2 text-3xl font-black">Assembly, battery confidence, QC and dealer handoff.</h2>
          </div>
        </div>
      </VideoHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsStrip
            stats={[
              { value: "4", label: "Assembly stages", detail: "Parts, platform, electrical, service handoff" },
              { value: "6", label: "QC lenses", detail: "Safety, range, wiring, battery, load, feedback" },
              { value: "3", label: "Vehicle missions", detail: "Commute, passenger route, cargo delivery" },
              { value: "B2B", label: "Trust layer", detail: "Dealer, fleet and finance conversations" }
            ]}
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Assembly process</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">Manufacturing must feel visible, structured and accountable.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              A world-class EV site explains how a vehicle becomes trustworthy: from incoming components to electrical integration and dealer service handoff.
            </p>
          </MotionSection>
          <ManufacturingProcess steps={process} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061126] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="energy-field absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <MotionSection className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Quality testing</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">Testing language that builds dealer and customer confidence.</h2>
          </MotionSection>
          <QualityTestingGrid items={quality} />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <PremiumFeatureBand
            icon={BatteryCharging}
            eyebrow="Battery and electronics safety"
            title="The electrical system is the trust system."
            copy="Battery bay packaging, controller behavior, wiring protection, charger matching and maintenance discipline should be explained with clarity because they shape buyer confidence."
          />
          <PremiumFeatureBand
            icon={Microscope}
            eyebrow="R&D and product engineering"
            title="Turn field learning into product improvement."
            copy="Dealer feedback, route behavior, service questions and commercial duty cycles should inform future product education, model refinement and support content."
          />
          <PremiumFeatureBand
            icon={Truck}
            eyebrow="Supply chain quality"
            title="Vendor quality is part of the brand promise."
            copy="The page frames incoming parts, fitment discipline and component consistency as core to reliable ownership."
          />
          <PremiumFeatureBand
            icon={Leaf}
            eyebrow="Sustainable production"
            title="Cleaner vehicles need cleaner operating logic."
            copy="Sustainability is presented through durable products, lower operating cost, serviceable parts and long-term electric mobility adoption."
          />
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-electric-cyan/24 bg-white/[0.07] p-8 shadow-glow backdrop-blur-2xl sm:p-12 lg:max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-center">
            <div>
              <Factory className="mb-6 text-electric-cyan" size={46} />
              <h2 className="text-5xl font-black leading-none sm:text-7xl">Trust the build. Then choose the vehicle.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-300">Manufacturing confidence should lead directly to dealer enquiries, test rides and purchase conversations.</p>
            </div>
            <div className="flex flex-col gap-3">
              <FuturisticCTA href="/vehicles">Explore vehicles</FuturisticCTA>
              <FuturisticCTA href="/dealer" variant="secondary">Become a dealer</FuturisticCTA>
              <FuturisticCTA href="/contact-us" variant="secondary">Contact team</FuturisticCTA>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
