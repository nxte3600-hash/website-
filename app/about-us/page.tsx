import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BatteryCharging, BriefcaseBusiness, Factory, Leaf, MapPin, Route, ShieldCheck, SlidersHorizontal, Users, Wrench } from "lucide-react";
import { FinalCTA } from "@/components/Option2Sections";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

const aboutAsset = (name: string) => `/about/${name}`;

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how NXTE Mobility builds practical electric mobility for Indian riders, families, businesses and partners.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About NXTE Mobility",
    description: "Practical electric mobility for riders, families, businesses and partners.",
    url: "https://www.nxtemobility.com/about-us",
    images: [{ url: aboutAsset("about-hero-india.png"), width: 1200, height: 675 }]
  }
};

const metrics = [
  ["2021", "EV-first beginning"],
  ["11", "EV models"],
  ["2", "company hubs"]
];

const confidencePoints = [
  ["Product confidence", "Vehicles that start, run and last every single day.", ShieldCheck],
  ["Ownership confidence", "Lower running pressure with predictable costs and dependable support.", Wrench],
  ["Partner confidence", "A business path that helps dealers and fleet partners grow with clarity.", BriefcaseBusiness]
];

const timeline = [
  ["2021", "EV-first beginning", "We began with a clear belief: practical EVs can transform daily movement in India.", aboutAsset("founder-engineering-studio.png")],
  ["2022", "Personal + commercial EVs", "Expanded into scooters, e-rickshaws and cargo solutions for every Indian need.", aboutAsset("about-hero-india.png")],
  ["2023", "Service readiness", "Built service systems, trained teams and strengthened after-sales reliability.", aboutAsset("manufacturing-master.png")],
  ["2024", "Dealer + finance ecosystem", "Strengthened dealer network and partnered for accessible ownership.", aboutAsset("leadership-team.png")],
  ["2025", "Broader product portfolio", "More models, more choices for riders, families and businesses.", aboutAsset("roadmap-collage.png")],
  ["2026", "Premium digital mobility", "Smarter app, connected ownership and a more seamless customer experience.", aboutAsset("technology-master.png")]
];

const manufacturingStages = [
  ["01", "Research", "Understanding Indian riders, routes and real world usage."],
  ["02", "Engineering", "Purpose-built platforms, tested for heat, load and endurance."],
  ["03", "Assembly", "Precision assembly with quality checks at every critical stage."],
  ["04", "Testing", "Road, durability and safety testing for proven real-world performance."]
];

const techLabels = [
  ["Battery clarity", "Know range, health and charging in real life.", BatteryCharging],
  ["Connected control", "Control, check and secure from the app.", SlidersHorizontal],
  ["Route-fit performance", "Power delivery tuned for Indian roads.", Route],
  ["Service diagnostics", "Early alerts and guided support when needed.", Wrench]
];

const values = [
  ["Trust through clarity", "Honest communication. Clear information. No fine print.", ShieldCheck],
  ["Manufacturing discipline", "Built with care, tested with rigour, improved every day.", Factory],
  ["Useful sustainability", "Sustainability that makes sense for people, business and planet.", Leaf],
  ["Dealer partnership", "Shared growth, better tools and stronger together.", Users]
];

const leadership = [
  "Founder & Managing Director",
  "Product & Engineering",
  "Manufacturing & Quality",
  "Growth & Dealer Network"
];

const sustainability = [
  ["Lower running pressure", "EVs that reduce daily costs and stress."],
  ["Quieter neighbourhoods", "Less noise. More peace of mind."],
  ["Cleaner last-mile mobility", "Better air, better cities, better India."]
];

const roadmap = [
  ["Deeper product proof", "Stronger platforms, more testing and more choices."],
  ["Stronger dealer network", "More partners, better tools and shared success."],
  ["Smarter connected ownership", "Intelligence that makes everyday EV use effortless."],
  ["PAN-India mobility access", "Reliable EV options for every city and town."]
];

export default function AboutUsPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About NXTE Mobility",
    url: "https://www.nxtemobility.com/about-us",
    about: {
      "@type": "Organization",
      name: companyDetails.name,
      alternateName: companyDetails.brand,
      url: "https://www.nxtemobility.com",
      email: companyDetails.email,
      telephone: companyDetails.phone,
      foundingDate: companyDetails.founded,
      address: companyAddresses.map((item) => ({
        "@type": "PostalAddress",
        name: item.label,
        streetAddress: item.address
      }))
    }
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <Hero />
      <MissionSignal />
      <WhyStarted />
      <MissionVision />
      <JourneyTimeline />
      <ManufacturingProof />
      <TechnologyProof />
      <Values />
      <Leadership />
      <Sustainability />
      <Roadmap />
      <FinalCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden text-white md:min-h-[610px]">
      <Image src={aboutAsset("about-hero-india.png")} alt="NXTE electric scooter, passenger e-rickshaw and cargo EV on an Indian road" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,47,.82)_0%,rgba(7,26,47,.54)_35%,rgba(7,26,47,.06)_70%)]" />
      <div className="about-shell relative z-10 flex min-h-[520px] flex-col justify-center pt-12 md:min-h-[610px] md:pt-20">
        <p className="nxte-kicker">About NXTE Mobility</p>
        <h1 className="nxte-display mt-4 max-w-[720px] text-[2.8rem] font-extrabold leading-[1] sm:text-[4.5rem] lg:text-[5.25rem]">
          Built for the India that moves every day.
        </h1>
        <p className="mt-5 max-w-[520px] text-lg font-semibold leading-8 text-white/88">Practical electric mobility for riders, families, businesses and partners.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="#journey" className="nxte-button nxte-button-primary">Explore Our Journey <span aria-hidden>→</span></Link>
          <Link href="/vehicles" className="nxte-button nxte-button-on-dark bg-white text-[var(--nxte-navy)]">See Our Vehicles</Link>
        </div>
        <Link href="#mission" className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-white/80">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/45">↓</span>
          Scroll to explore
        </Link>
      </div>
    </section>
  );
}

function MissionSignal() {
  return (
    <section id="mission" className="about-section bg-white">
      <div className="about-shell grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-start">
        <div>
          <h2 className="nxte-display max-w-[660px] text-[2.5rem] font-extrabold leading-[1.06] text-[var(--nxte-navy)] md:text-[4rem]">Electric should feel like the obvious next move.</h2>
          <div className="mt-9 grid max-w-[560px] grid-cols-3 divide-x divide-[rgba(7,26,47,.2)]">
            {metrics.map(([value, label]) => (
              <div key={value} className="px-5 first:pl-0">
                <p className="nxte-display text-[2.8rem] font-extrabold leading-none text-[var(--nxte-navy)]">{value}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--nxte-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="max-w-[520px] text-lg font-semibold leading-8 text-[var(--nxte-muted)]">
          We build desirable electric vehicles, backed by useful technology and reliable support—designed for Indian roads, Indian weather and Indian traffic, every single day.
        </p>
      </div>
    </section>
  );
}

function WhyStarted() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[500px]">
          <Image src={aboutAsset("founder-engineering-studio.png")} alt="NXTE engineering team reviewing electric vehicle plans" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-20">
          <div className="max-w-[560px]">
            <p className="nxte-kicker">Why NXTE was started</p>
            <h2 className="nxte-display mt-3 text-[2.15rem] font-extrabold leading-[1.08] text-[var(--nxte-navy)] md:text-[3.4rem]">India needs EV confidence, not excitement alone.</h2>
            <div className="mt-7 grid gap-5">
              {confidencePoints.map(([title, copy, Icon]) => (
                <div key={title as string} className="grid grid-cols-[42px_1fr] gap-4">
                  <Icon className="text-[var(--nxte-orange)]" size={28} />
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--nxte-navy)]">{title as string}</h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[var(--nxte-muted)]">{copy as string}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/why-ev" className="mt-7 inline-flex font-extrabold text-[var(--nxte-orange)]">Read our purpose <span aria-hidden className="ml-2">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-[var(--nxte-navy)] py-12 text-white">
      <div className="about-shell grid gap-8 md:grid-cols-2 md:divide-x md:divide-[var(--nxte-orange)]">
        <div>
          <p className="nxte-kicker">Our mission</p>
          <h2 className="nxte-display mt-3 max-w-[520px] text-[2rem] font-extrabold leading-[1.12] md:text-[2.7rem]">Make practical electric mobility desirable, accessible and serviceable.</h2>
        </div>
        <div className="md:pl-12">
          <p className="nxte-kicker">Our vision</p>
          <h2 className="nxte-display mt-3 max-w-[540px] text-[2rem] font-extrabold leading-[1.12] md:text-[2.7rem]">Become India&apos;s most trusted everyday electric mobility company.</h2>
        </div>
      </div>
    </section>
  );
}

function JourneyTimeline() {
  return (
    <section id="journey" className="about-section bg-white">
      <div className="about-shell">
        <p className="nxte-kicker">From an idea to an ecosystem</p>
        <div className="mt-6 grid gap-5 md:grid-cols-6">
          {timeline.map(([year, title, copy, image]) => (
            <article key={year} className="relative border-l-2 border-[var(--nxte-orange)] pl-5 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6">
              <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-[var(--nxte-orange)] md:-top-[7px] md:left-0" />
              <p className="nxte-display text-2xl font-extrabold text-[var(--nxte-navy)]">{year}</p>
              <h2 className="mt-4 text-base font-extrabold text-[var(--nxte-navy)]">{title}</h2>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--nxte-muted)]">{copy}</p>
              <div className="relative mt-4 aspect-[1.25/1] overflow-hidden rounded-xl bg-[var(--nxte-soft)]">
                <Image src={image} alt={`${year} ${title}`} fill className="object-cover" sizes="(max-width: 768px) 70vw, 16vw" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManufacturingProof() {
  return (
    <section className="bg-[var(--nxte-light)] py-14 md:py-20">
      <div className="about-shell">
        <div className="grid gap-8 lg:grid-cols-[.46fr_1fr] lg:items-center">
          <div>
            <h2 className="nxte-display text-[2.15rem] font-extrabold leading-[1.08] text-[var(--nxte-navy)] md:text-[3.3rem]">Engineered in India. Proven for real duty.</h2>
            <p className="mt-4 text-base font-semibold leading-7 text-[var(--nxte-muted)]">From design to durability, every NXTE vehicle is built with Indian conditions at the centre of every decision.</p>
          </div>
          <div className="relative aspect-[2.55/1] min-h-[260px] overflow-hidden rounded-[18px]">
            <Image src={aboutAsset("manufacturing-master.png")} alt="NXTE manufacturing and testing floor" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
          </div>
        </div>
        <div className="mt-8 grid gap-5 border-y border-[rgba(7,26,47,.12)] py-7 sm:grid-cols-2 lg:grid-cols-4">
          {manufacturingStages.map(([step, title, copy]) => (
            <article key={step} className="border-[rgba(7,26,47,.16)] lg:border-r lg:pr-5 last:border-r-0">
              <p className="nxte-display text-2xl font-extrabold text-[var(--nxte-orange)]">{step}</p>
              <h3 className="mt-2 text-lg font-extrabold text-[var(--nxte-navy)]">{title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--nxte-muted)]">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-3 rounded-xl bg-white p-4 text-sm font-bold text-[var(--nxte-navy)] md:grid-cols-2">
          {companyAddresses.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3">
              <MapPin className="text-[var(--nxte-orange)]" />
              <span>{item.address}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyProof() {
  return (
    <section className="bg-[var(--nxte-navy)] py-14 text-white md:py-18">
      <div className="about-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <div>
          <h2 className="nxte-display text-[2.05rem] font-extrabold leading-[1.1] md:text-[3rem]">Technology you can understand. Intelligence you can use.</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {techLabels.map(([title, copy, Icon]) => (
              <div key={title as string}>
                <Icon className="text-[var(--nxte-orange)]" size={30} />
                <h3 className="mt-3 text-sm font-extrabold">{title as string}</h3>
                <p className="mt-1 text-xs font-semibold leading-5 text-white/65">{copy as string}</p>
              </div>
            ))}
          </div>
          <Link href="/technology" className="nxte-button nxte-button-primary mt-8">Explore Technology <span aria-hidden>→</span></Link>
        </div>
        <div className="relative min-h-[310px]">
          <Image src={aboutAsset("technology-master.png")} alt="NXTE scooter connected technology visualization" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 60vw" />
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="about-section bg-white">
      <div className="about-shell">
        <h2 className="nxte-display text-[2.2rem] font-extrabold text-[var(--nxte-navy)] md:text-[3.2rem]">What we stand for.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4 md:divide-x md:divide-[rgba(7,26,47,.14)]">
          {values.map(([title, copy, Icon]) => (
            <article key={title as string} className="md:px-6 md:first:pl-0">
              <Icon className="text-[var(--nxte-orange)]" size={36} strokeWidth={1.8} />
              <h3 className="mt-5 text-lg font-extrabold text-[var(--nxte-navy)]">{title as string}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--nxte-muted)]">{copy as string}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="bg-white pb-12">
      <div className="about-shell">
        <h2 className="nxte-display text-[2.2rem] font-extrabold text-[var(--nxte-navy)] md:text-[3.2rem]">The people moving NXTE forward.</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.35fr]">
          <div className="grid gap-3 sm:grid-cols-4">
            {leadership.map((role, roleIndex) => (
              <article key={role} className="overflow-hidden rounded-[14px] bg-[var(--nxte-navy)] text-white">
                <div className="relative aspect-[.95/1]">
                  <Image src={aboutAsset("leadership-team.png")} alt={`${role} leadership team visual`} fill className="object-cover" style={{ objectPosition: `${18 + roleIndex * 22}% 42%` }} sizes="(max-width: 768px) 50vw, 18vw" />
                </div>
                <h3 className="p-3 text-sm font-extrabold leading-tight">{role}</h3>
              </article>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[var(--nxte-navy)]">Our leadership manifesto</h3>
            <p className="mt-4 text-sm font-semibold leading-7 text-[var(--nxte-muted)]">We are builders first. We listen closely, move fast and stay accountable. Our commitment is simple: make everyday movement better for India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="relative overflow-hidden py-16 text-white">
      <Image src={aboutAsset("sustainability-everyday-movement.png")} alt="NXTE scooter and passenger mobility on a neighbourhood road" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,47,.88),rgba(7,26,47,.64),rgba(7,26,47,.08))]" />
      <div className="about-shell relative z-10">
        <h2 className="nxte-display max-w-[520px] text-[2.1rem] font-extrabold leading-[1.1] md:text-[3.25rem]">Progress measured in better everyday movement.</h2>
        <div className="mt-7 grid max-w-[460px] gap-4">
          {sustainability.map(([title, copy]) => (
            <div key={title} className="grid grid-cols-[36px_1fr] gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--nxte-orange)] text-[var(--nxte-orange)]">◎</span>
              <div>
                <h3 className="text-base font-extrabold">{title}</h3>
                <p className="text-sm font-semibold text-white/72">{copy}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/sustainability" className="mt-7 inline-flex font-extrabold text-[var(--nxte-orange)]">See Sustainability <span aria-hidden className="ml-2">→</span></Link>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="about-section bg-white">
      <div className="about-shell">
        <h2 className="nxte-display text-[2.2rem] font-extrabold text-[var(--nxte-navy)] md:text-[3.2rem]">The next chapter.</h2>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-start">
          <div className="grid gap-5 md:grid-cols-4">
            {roadmap.map(([title, copy], index) => (
              <article key={title} className="relative border-t-2 border-[var(--nxte-orange)] pt-6">
                <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-white ring-2 ring-[var(--nxte-orange)]" />
                {index === roadmap.length - 1 ? <span className="absolute -right-1 -top-[8px] text-[var(--nxte-orange)]">→</span> : null}
                <h3 className="text-base font-extrabold text-[var(--nxte-navy)]">{title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-[var(--nxte-muted)]">{copy}</p>
              </article>
            ))}
          </div>
          <div className="relative aspect-[1.7/1] overflow-hidden rounded-[18px]">
            <Image src={aboutAsset("roadmap-collage.png")} alt="NXTE vehicle and manufacturing roadmap collage" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
