import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Building2,
  Factory,
  Gauge,
  Leaf,
  Newspaper,
  PlugZap,
  ShieldCheck,
  Sparkles,
  TreePine,
  Users,
  Zap
} from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { EVCommandCenter } from "@/components/EVCommandCenter";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { MotionSection } from "@/components/MotionSection";
import { ProductShowcaseRail } from "@/components/ProductShowcaseRail";
import { StatsStrip } from "@/components/StatsStrip";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { VideoHero } from "@/components/VideoHero";
import { blogPosts } from "@/lib/blogPosts";
import { getVideoAsset } from "@/lib/videoAssets";
import { erickshawVehicles, scooterVehicles } from "@/lib/vehicles";

const trustStats = [
  { value: "11", label: "EV models", detail: "Scooters, e-rickshaws, and loaders" },
  { value: "140 km*", label: "Range confidence", detail: "Model-specific riding and charging clarity" },
  { value: "B2B", label: "Dealer ready", detail: "Retail, fleet, territory, and finance enquiries" },
  { value: "2", label: "Company hubs", detail: "Noida and Bengaluru Rural touchpoints" }
];

const technologyItems = [
  {
    icon: BatteryCharging,
    title: "Battery clarity",
    copy: "Range, charging time, battery type, and ownership guidance are explained before the buyer reaches a form."
  },
  {
    icon: Gauge,
    title: "Route-fit performance",
    copy: "Scooter, passenger, and cargo vehicles are framed around real Indian use cases instead of generic specification lists."
  },
  {
    icon: ShieldCheck,
    title: "Service confidence",
    copy: "Parts, dealer support, maintenance logic, and safety cues make the brand feel built for long-term ownership."
  },
  {
    icon: Zap,
    title: "Conversion intelligence",
    copy: "Every product story keeps test ride, dealer, finance, and sales actions close without cluttering the experience."
  }
];

const manufacturingProof = [
  ["Research", "Understand Indian routes, rider behavior, commercial duty, service access, and daily operating cost."],
  ["Engineering", "Match motors, controllers, batteries, chassis, and suspension to the vehicle mission."],
  ["Assembly", "Build around repeatable checks, quality gates, genuine parts, and dealer support readiness."],
  ["Testing", "Validate range expectation, braking, lighting, load behavior, comfort, and after-sales confidence."]
];

const batteryConfidence = [
  { label: "Range", value: "By model and mission" },
  { label: "Charging", value: "Visible before enquiry" },
  { label: "Ownership", value: "Lower running pressure" }
];

export default function HomePage() {
  const heroVideo = getVideoAsset("home");
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow="NXT Mobility electric manufacturing"
        title="India's next electric movement, built with manufacturing confidence."
        copy="NXT Mobility brings personal scooters, passenger e-rickshaws, and cargo EVs into one premium manufacturer story: desirable products, practical ownership, dealer readiness, and cleaner city movement."
        videoSrc={heroVideo.videoSrc}
        poster={heroVideo.poster}
        actions={[
          { href: "/vehicles", label: "Explore vehicles", variant: "primary" },
          { href: "/test-ride", label: "Book test ride", variant: "secondary" }
        ]}
      >
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.075] shadow-glow backdrop-blur-2xl">
          <Image
            src="/vehoicle_image/zenith/1.png"
            alt="NXT Zenith electric scooter"
            fill
            priority
            className="object-contain p-8 drop-shadow-[0_42px_64px_rgba(56,215,255,.22)]"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,215,255,.24),transparent_22rem)]" />
          <div className="absolute left-5 top-5 grid gap-3 sm:grid-cols-3">
            {["Personal EV", "Passenger EV", "Cargo EV"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-midnight/72 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/82 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-electric-cyan/18 bg-midnight/78 p-5 backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-electric-cyan">Manufacturer signal</p>
            <h2 className="mt-2 text-3xl font-black">Products, technology, service, finance, and dealer growth in one system.</h2>
          </div>
        </div>
      </VideoHero>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsStrip stats={trustStats} />
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="energy-field absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MotionSection>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Why EV now</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">Cleaner streets must also make economic sense.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              India needs electric mobility that improves daily life and still works for the buyer: lower running cost, less noise, practical charging, service clarity, and products matched to real routes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FuturisticCTA href="/why-ev">Understand Why EV</FuturisticCTA>
              <FuturisticCTA href="/vehicles" variant="secondary">Match your route</FuturisticCTA>
            </div>
          </MotionSection>
          <MotionSection className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            {[
              ["For families", "Quieter commutes, cleaner neighborhood air, and daily riding confidence."],
              ["For drivers", "Lower operating pressure and clear route-fit product guidance."],
              ["For businesses", "Passenger and cargo EVs that support local transport economics."],
              ["For cities", "Less smoke, less noise, and more responsible last-mile movement."]
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
          <MotionSection className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-midnight/70 shadow-panel">
            <Image
              src="/vehoicle_image/prince hs/1.png"
              alt="NXT premium EV product"
              fill
              className="object-contain p-8 drop-shadow-[0_40px_68px_rgba(56,215,255,.22)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </MotionSection>
          <MotionSection delay={0.08}>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">NXT vision</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">A serious Indian EV brand should feel desirable and dependable.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              NXT is built around a simple conviction: electric vehicles will scale when product aspiration, manufacturing credibility, service confidence, and dealer opportunity work together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FuturisticCTA href="/about-us">Read the NXT story</FuturisticCTA>
              <FuturisticCTA href="/dealer" variant="secondary">Dealer opportunity</FuturisticCTA>
            </div>
          </MotionSection>
        </div>
      </section>

      <EVCommandCenter />

      <ProductShowcaseRail
        vehicles={[scooterVehicles[0], scooterVehicles[3], scooterVehicles[4], erickshawVehicles[0], erickshawVehicles[2], erickshawVehicles[4]]}
        eyebrow="Product ecosystem"
        title="A connected electric lineup for personal mobility, passenger routes, and cargo duty."
      />

      <section className="relative overflow-hidden bg-[#061126] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,215,255,.08)_1px,transparent_1px),linear-gradient(rgba(56,215,255,.06)_1px,transparent_1px)] bg-[size:76px_76px]" />
        <div className="relative mx-auto max-w-7xl">
          <MotionSection className="mb-10 max-w-4xl">
            <Factory className="mb-6 text-electric-cyan" size={48} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Manufacturing preview</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">Make the buyer feel the vehicles are engineered, assembled, and supported.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              Phase 2 will open the full manufacturing documentary page. Phase 1 establishes the proof: research, engineering, assembly, and testing are part of the NXT purchase story.
            </p>
          </MotionSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {manufacturingProof.map(([title, copy], index) => (
              <MotionSection key={title} delay={index * 0.06} className="metal-panel rounded-2xl p-6">
                <span className="text-sm font-black text-electric-cyan">0{index + 1}</span>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">{copy}</p>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MotionSection className="metal-panel rounded-[2rem] p-8 sm:p-10">
            <PlugZap className="mb-6 text-electric-cyan" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Battery confidence</span>
            <h2 className="mt-4 text-5xl font-black leading-none">Range and charging should remove doubt before enquiry.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              Buyers need to know how a vehicle fits their route, how charging behaves, and how ownership cost improves over time. The redesigned site treats those as conversion moments.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {batteryConfidence.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-electric-cyan">{item.label}</span>
                  <strong className="mt-2 block text-lg">{item.value}</strong>
                </div>
              ))}
            </div>
          </MotionSection>
          <MotionSection delay={0.08}>
            <TechnologyGrid items={technologyItems} />
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(81,240,172,.16),transparent_26rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <MotionSection className="metal-panel rounded-[2rem] p-8 sm:p-10">
            <Leaf className="mb-6 text-electric-green" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Sustainability</span>
            <h2 className="mt-4 text-5xl font-black leading-none">Sustainability that families, drivers, and businesses can feel.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              Cleaner air and quieter streets become stronger when paired with lower running costs, useful range, and products that serve actual Indian mobility needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FuturisticCTA href="/why-ev">See the clean mobility story</FuturisticCTA>
              <FuturisticCTA href="/vehicles" variant="secondary">Explore EV lineup</FuturisticCTA>
            </div>
          </MotionSection>
          <MotionSection className="glass-panel rounded-[2rem] p-8 sm:p-10" delay={0.08}>
            <TreePine className="mb-6 text-electric-cyan" size={46} />
            <h3 className="text-4xl font-black leading-none">A premium brand promise with a practical Indian reason.</h3>
            <p className="mt-6 leading-8 text-steel-300">
              EV adoption is emotional and economic: cleaner roads for children, quieter neighborhoods, and stronger cost control for daily operators.
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="bg-[#061126] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MotionSection>
            <Building2 className="mb-6 text-electric-cyan" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Dealer opportunity</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">A website that helps partners trust the business, not only the vehicle.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              Dealers need clear categories, product confidence, service language, finance paths, and a serious brand identity they can present to local customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FuturisticCTA href="/dealer">Become a dealer</FuturisticCTA>
              <FuturisticCTA href="/contact-us" variant="secondary">Talk to NXT</FuturisticCTA>
            </div>
          </MotionSection>
          <MotionSection className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            {[
              ["Territory story", "Position NXT as a credible local EV growth partner."],
              ["Product range", "Scooter, passenger, and cargo categories support more customer types."],
              ["Finance handoff", "Clearer enquiry paths support retail and commercial buying."],
              ["After-sales trust", "Service and parts language gives the dealer floor more confidence."]
            ].map(([title, copy]) => (
              <article key={title} className="glass-panel rounded-2xl p-6">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-300">{copy}</p>
              </article>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <Newspaper className="mb-6 text-electric-cyan" size={46} />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">EV insight center</span>
              <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">Educate buyers before asking them to enquire.</h2>
            </div>
            <FuturisticCTA href="/blog" variant="secondary">Open blog</FuturisticCTA>
          </MotionSection>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <MotionSection key={post.slug} delay={index * 0.06}>
                <BlogCard
                  icon={post.icon}
                  title={post.title}
                  tag={post.category}
                  copy={post.excerpt}
                  href={`/blog/${post.slug}`}
                />
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-electric-cyan/24 bg-[linear-gradient(135deg,rgba(56,215,255,.18),rgba(255,255,255,.08),rgba(81,240,172,.1))] p-8 shadow-glow backdrop-blur-2xl sm:p-12 lg:max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-center">
            <div>
              <Sparkles className="mb-6 text-electric-cyan" size={46} />
              <h2 className="text-5xl font-black leading-none sm:text-7xl">Ready for India&apos;s next electric movement?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-100">
                Move from product discovery to a real conversation: book a test ride, start a dealership enquiry, or ask NXT about finance and fleet options.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <FuturisticCTA href="/test-ride">Book test ride</FuturisticCTA>
              <FuturisticCTA href="/dealer" variant="secondary">Dealer enquiry</FuturisticCTA>
              <FuturisticCTA href="/contact-us" variant="secondary">Contact sales</FuturisticCTA>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
