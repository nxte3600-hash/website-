import Image from "next/image";
import { BadgeIndianRupee, Building2, Megaphone, Store, Users } from "lucide-react";
import { FinancePartners } from "@/components/FinancePartners";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumPageHero } from "@/components/PremiumPageHero";

const benefits = [
  { icon: Store, title: "Premium showroom identity", copy: "A sharper digital brand helps dealerships present NXT as a modern EV manufacturer." },
  { icon: BadgeIndianRupee, title: "Finance-led selling", copy: "Bank partner messaging and EMI conversation points support faster buyer confidence." },
  { icon: Users, title: "Training-ready product pages", copy: "Parts explorers and specs help sales/service teams explain each system clearly." },
  { icon: Megaphone, title: "Campaign-ready content", copy: "Vehicle pages, technology pages, and blog guides create reusable lead-generation material." }
];

export default function DealerPage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="Dealer partnership"
        title="Build the next premium EV dealership in your territory."
        copy="A cinematic dealer journey for product range, finance readiness, training support, commercial use cases, and serious business enquiries."
        primaryHref="/vehicles"
        primaryLabel="View product range"
        secondaryHref="/contact-us"
        secondaryLabel="Contact team"
        videoKey="dealer"
      >
        <div className="metal-panel relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
          <Image src="/vehicles/buland-rsd-loader.jpg" alt="NXT dealer opportunity" fill className="object-contain p-10" priority />
          <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-electric-green">Dealer-ready categories</p>
            <h2 className="mt-2 text-3xl font-black">Scooters / E-Rickshaws / Loaders</h2>
          </div>
        </div>
      </PremiumPageHero>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="metal-panel rounded-[2rem] p-7">
              <benefit.icon className="mb-5 text-electric-cyan" size={36} />
              <h2 className="text-2xl font-black text-white">{benefit.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel-400">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FinancePartners />
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <div className="white-premium rounded-[2.5rem] p-8 shadow-panel sm:p-10">
            <Building2 className="mb-5 text-navy-800" size={42} />
            <h2 className="text-4xl font-black leading-none sm:text-6xl">Apply with a territory-first dealer story.</h2>
            <p className="mt-6 leading-8 text-slate-600">
              This page is structured to become CRM-ready later: territory, investment capacity, business profile, and product interest.
            </p>
          </div>
          <LeadCaptureForm kind="dealer" tone="dark" />
        </div>
      </section>
    </main>
  );
}
