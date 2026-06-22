import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Factory, Handshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PremiumPageHero } from "@/components/PremiumPageHero";
import { FinancePartners } from "@/components/FinancePartners";

const timeline = [
  {
    year: "2021",
    title: "NXT Mobility begins with an EV-first belief",
    copy: "The brand story starts with the practical Indian mobility problem: cleaner daily transport that dealers, riders, and businesses can actually operate."
  },
  {
    year: "2022",
    title: "From concept to vehicle categories",
    copy: "Scooters, e-rickshaws, and utility three-wheelers become the core direction, connecting personal mobility with last-mile business use."
  },
  {
    year: "2023",
    title: "Manufacturing and service credibility",
    copy: "NXT's official story emphasizes reliable service, genuine parts, roadside support, and a Noida manufacturing/service presence."
  },
  {
    year: "2024",
    title: "Dealer and B2B momentum",
    copy: "The company positions itself around partners, fleet utility, and a growing dealer-led network for EV adoption."
  },
  {
    year: "2025",
    title: "A broader product ecosystem",
    copy: "The catalog expands into multiple scooters, Buland e-rickshaws, and commercial loader formats built for Indian duty cycles."
  },
  {
    year: "2026",
    title: "Premium digital transformation",
    copy: "The website now needs to match the ambition: cinematic product media, finance messaging, 3D exploration, and leadership storytelling."
  }
];

const values = [
  { icon: BatteryCharging, title: "Long range", copy: "Range and charging confidence are treated as product storytelling, not just numbers." },
  { icon: ShieldCheck, title: "Safety first", copy: "Lighting, braking, chassis, and serviceable parts are explained clearly for trust." },
  { icon: Factory, title: "Manufacturing detail", copy: "The story centers vehicle categories, parts, systems, and practical build quality." },
  { icon: Handshake, title: "Dealer-ready", copy: "The site gives partners the language and visuals to sell NXT confidently." }
];

export default function AboutPage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="About NXT Mobility"
        title="A founder-led EV story from 2021 to now."
        copy="Led by CEO & Founder Nikhil Kumar, NXT Mobility is presented as an Indian EV manufacturer moving from practical electric mobility into a premium digital product experience."
        primaryHref="/vehicles"
        primaryLabel="Explore the range"
        secondaryHref="/technology"
        secondaryLabel="See technology"
      >
        <div className="blueprint-card relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
          <Image src="/assets/ceo.jpeg" alt="Nikhil Kumar, CEO and Founder of NXT Mobility" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/15 bg-midnight/60 p-5 text-white backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Leadership</p>
            <h2 className="mt-2 text-3xl font-black">Nikhil Kumar</h2>
            <p className="mt-1 text-sm text-white/70">CEO & Founder</p>
          </div>
        </div>
      </PremiumPageHero>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="white-premium overflow-hidden rounded-[2.5rem] p-8 shadow-panel sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-navy-700">Founder note</span>
                <h2 className="mt-4 text-4xl font-black leading-none sm:text-6xl">Building EVs for the routes India actually drives.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  The founder section is designed like a premium editorial feature: calm, direct, and credible. It frames NXT as a company
                  that balances clean energy ambition with service, parts, dealer support, and everyday affordability.
                </p>
                <Link href="/dealer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-midnight px-7 py-4 font-black text-white">
                  Partner with NXT <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <article key={value.title} className="rounded-[2rem] bg-white/72 p-5 shadow-sm">
                    <value.icon className="mb-4 text-navy-700" />
                    <h3 className="text-xl font-black">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{value.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.26em] text-electric-cyan">Story timeline</span>
            <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">From early EV ambition to a complete mobility catalog.</h2>
          </div>
          <div className="relative">
            <div className="timeline-line absolute left-5 top-0 hidden h-full w-px md:block" />
            <div className="grid gap-5">
              {timeline.map((item, index) => (
                <article key={item.year} className="grid gap-5 md:grid-cols-[110px_1fr]">
                  <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-electric-cyan/35 bg-midnight text-xl font-black text-white shadow-glow">
                    {item.year}
                  </div>
                  <div className="blueprint-card rounded-[2rem] p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-electric-green">Chapter {index + 1}</span>
                        <h3 className="mt-2 text-2xl font-black text-white md:text-4xl">{item.title}</h3>
                        <p className="mt-4 max-w-3xl leading-8 text-steel-300">{item.copy}</p>
                      </div>
                      <span className="text-6xl font-black text-outline md:text-8xl">{item.year}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FinancePartners />
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Brand future", copy: "Premium digital design that makes NXT look like a serious EV manufacturer." },
            { icon: Users, title: "Customer confidence", copy: "Every page explains product, finance, service, and contact without clutter." },
            { icon: Factory, title: "Industrial clarity", copy: "Vehicles are presented through parts, systems, and use cases, not generic banners." }
          ].map((item) => (
            <article key={item.title} className="glass-panel rounded-[2rem] p-7">
              <item.icon className="mb-5 text-electric-cyan" size={36} />
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-steel-400">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
