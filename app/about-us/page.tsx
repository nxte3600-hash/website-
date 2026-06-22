import Image from "next/image";
import { BatteryCharging, Compass, Factory, Globe2, Handshake, Leaf, Lightbulb, Map, ShieldCheck, Users } from "lucide-react";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { MotionSection } from "@/components/MotionSection";
import { StatsStrip } from "@/components/StatsStrip";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { VideoHero } from "@/components/VideoHero";
import { getVideoAsset } from "@/lib/videoAssets";

const stats = [
  { value: "2021", label: "EV-first beginning", detail: "A practical mobility story built for Indian roads" },
  { value: "11", label: "Showcase models", detail: "Scooters, e-rickshaws, and utility EVs" },
  { value: "2", label: "Company hubs", detail: "Noida and Bengaluru Rural touchpoints" },
  { value: "B2B", label: "Dealer ready", detail: "Fleet, finance, and territory enquiries" }
];

const milestones = [
  {
    year: "2021",
    title: "NXT begins with India's mobility question",
    copy: "How can electric mobility serve everyday riders, commercial drivers, local businesses, and dealers without feeling fragile or experimental?"
  },
  {
    year: "2022",
    title: "Personal and commercial EV focus",
    copy: "The brand direction expands around electric scooters, passenger e-rickshaws, and utility loaders, creating both retail and commercial relevance."
  },
  {
    year: "2023",
    title: "Service and parts confidence",
    copy: "NXT sharpens the ownership story around genuine parts, serviceability, practical duty cycles, and the language dealers need on the sales floor."
  },
  {
    year: "2024",
    title: "Dealer and finance readiness",
    copy: "The digital journey starts aligning with test rides, finance partner conversations, territory enquiries, and business-ready EV categories."
  },
  {
    year: "2025",
    title: "Broader product ecosystem",
    copy: "Scooter models, Buland e-rickshaw formats, and Veer loader platforms create a complete catalog for different Indian routes."
  },
  {
    year: "2026",
    title: "Premium manufacturer identity",
    copy: "NXT moves from product listing to cinematic EV manufacturer experience: technology, manufacturing, sustainability, leadership, and conversion in one system."
  }
];

const values = [
  { icon: ShieldCheck, title: "Trust through clarity", copy: "Specs, range, service, finance, and dealer pathways are communicated with confidence, not vague claims." },
  { icon: Factory, title: "Manufacturing discipline", copy: "Every vehicle story connects to chassis, drivetrain, battery, parts, service, and real-duty use cases." },
  { icon: Leaf, title: "Useful sustainability", copy: "Cleaner mobility is framed through lower running costs, quieter roads, and practical business value." },
  { icon: Handshake, title: "Dealer partnership", copy: "NXT's digital journey helps partners explain, sell, and support EVs with stronger local credibility." }
];

const roadmap = [
  ["Product depth", "Strengthen scooter, passenger, and cargo EV stories with clearer route-fit guidance."],
  ["Manufacturing proof", "Build a richer factory narrative around research, engineering, assembly, testing, and QC."],
  ["Dealer growth", "Make territory, finance, and after-sales confidence easier for partners to present."],
  ["Digital trust", "Turn the website into a guided EV showroom, not just a brochure."]
];

export default function AboutUsPage() {
  const video = getVideoAsset("about");

  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow="About NXT Mobility"
        title="NXT was started to make electric mobility practical for the India that moves every day."
        copy="The brand exists for riders, drivers, families, businesses, and dealers who need EV products that look premium, work hard, and feel supported after purchase."
        actions={[
          { href: "/vehicles", label: "Explore vehicles", variant: "primary" },
          { href: "/dealer", label: "Partner with NXT", variant: "secondary" }
        ]}
        videoSrc={video.videoSrc}
        poster={video.poster}
      >
        <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.08] shadow-glow backdrop-blur-2xl">
          <Image
            src="/assets/ceo.jpeg"
            alt="NXT Mobility leadership"
            fill
            priority
            className="object-cover object-top opacity-90"
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/22 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-electric-cyan">Founder-led direction</p>
            <h2 className="mt-2 text-3xl font-black">A manufacturer story built around product, trust, and dealer readiness.</h2>
          </div>
        </div>
      </VideoHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsStrip stats={stats} />
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="energy-field absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MotionSection>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Why NXT was started</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">India does not need EV excitement alone. It needs EV confidence.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              NXT&apos;s opportunity is to stand for practical electric manufacturing: vehicles matched to Indian routes, ownership education that reduces doubt, and a dealer ecosystem that can support the shift.
            </p>
          </MotionSection>
          <MotionSection className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            {[
              ["The gap", "Buyers see EV promise, but still worry about range, charging, service, finance, and parts."],
              ["The answer", "A manufacturer that makes the product, ownership, and dealer journey feel connected."],
              ["The market", "Families, local drivers, fleet operators, and dealers all need different EV proof."],
              ["The promise", "Cleaner mobility that is desirable, practical, and ready for Indian duty."]
            ].map(([title, copy]) => (
              <article key={title} className="glass-panel rounded-2xl p-6">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">{copy}</p>
              </article>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="bg-[#061126] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <MotionSection className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-midnight/70 shadow-panel">
            <Image
              src="/vehoicle_image/zenith/2.png"
              alt="NXT Mobility EV evolution"
              fill
              className="object-contain p-9 drop-shadow-[0_38px_64px_rgba(56,215,255,.2)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </MotionSection>
          <MotionSection delay={0.08}>
            <Compass className="mb-6 text-electric-cyan" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Founder story</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">The founder narrative should feel less like biography and more like conviction.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              The approved brand direction frames leadership around a clear market belief: India&apos;s EV transition will be won by companies that combine product aspiration with manufacturing proof, service discipline, and local partner strength.
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <MotionSection>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">NXT evolution</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">From vehicle catalog to complete electric mobility ecosystem.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              NXT&apos;s story evolves across three connected layers: personal EVs for daily riders, commercial EVs for passenger and cargo routes, and a dealer network that turns product interest into trust.
            </p>
          </MotionSection>
          <MotionSection className="grid gap-4" delay={0.08}>
            {[
              ["Mission", "Make practical electric mobility desirable, accessible, and serviceable for riders, drivers, fleets, and dealers."],
              ["Vision", "Become a trusted Indian EV manufacturer known for clean design, useful technology, and reliable commercial support."],
              ["Manufacturing philosophy", "Every vehicle must be understood through route, range, load, charging, parts, and service support."],
              ["India's mobility transformation", "EV adoption should improve daily streets while helping buyers control cost and businesses modernize local movement."]
            ].map(([title, copy]) => (
              <article key={title} className="metal-panel rounded-2xl p-6">
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">{copy}</p>
              </article>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-12 max-w-4xl">
            <Map className="mb-6 text-electric-cyan" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Timeline</span>
            <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">A brand timeline built around product, service, and dealer maturity.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              The timeline gives NXT a credible manufacturer narrative: category focus, ownership confidence, dealer readiness, and premium digital transformation.
            </p>
          </MotionSection>
          <MilestoneTimeline items={milestones} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061126] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="energy-field absolute inset-0 opacity-45" />
        <div className="relative mx-auto max-w-7xl">
          <MotionSection className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Technology and innovation</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">A serious EV brand makes technology visible without making the buyer work.</h2>
          </MotionSection>
          <TechnologyGrid
            items={[
              { icon: BatteryCharging, title: "Battery education", copy: "Charging, battery type, and range communication help buyers trust the ownership journey." },
              { icon: Lightbulb, title: "Product intelligence", copy: "Digital pages turn parts, specs, and use cases into a guided sales experience." },
              { icon: Factory, title: "Manufacturing proof", copy: "Process, QC language, and service readiness support dealer credibility." },
              { icon: Globe2, title: "Mobility transformation", copy: "NXT speaks to India's EV shift through personal, passenger, and commercial categories." }
            ]}
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Values</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">The values must help the website sell trust.</h2>
          </MotionSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <MotionSection key={value.title} delay={index * 0.05} className="glass-panel rounded-2xl p-7">
                <value.icon className="mb-5 text-electric-cyan" size={38} />
                <h3 className="text-2xl font-black">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">{value.copy}</p>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <MotionSection className="metal-panel rounded-[2rem] p-8 sm:p-10">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Future roadmap</span>
            <h2 className="mt-4 text-5xl font-black leading-none">The next NXT chapter is deeper product proof and stronger partner conversion.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              The roadmap keeps the brand focused: manufacturing credibility, route-fit product storytelling, practical EV education, and a dealer ecosystem that can grow with demand.
            </p>
          </MotionSection>
          <MotionSection className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            {roadmap.map(([title, copy]) => (
              <article key={title} className="glass-panel rounded-2xl p-6">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">{copy}</p>
              </article>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-electric-cyan/24 bg-white/[0.07] p-8 shadow-glow backdrop-blur-2xl sm:p-12 lg:max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-center">
            <div>
              <Users className="mb-6 text-electric-cyan" size={46} />
              <h2 className="text-5xl font-black leading-none sm:text-7xl">Join the NXT mobility network.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-300">
                Dealers, riders, fleet owners, and partners can move from brand story to a real enquiry without leaving the premium flow.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <FuturisticCTA href="/dealer">Become a dealer</FuturisticCTA>
              <FuturisticCTA href="/test-ride" variant="secondary">Book test ride</FuturisticCTA>
              <FuturisticCTA href="/contact-us" variant="secondary">Send enquiry</FuturisticCTA>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
