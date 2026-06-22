import Image from "next/image";
import { CalendarClock, MapPin, Phone, Sparkles } from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumPageHero } from "@/components/PremiumPageHero";

export default function TestRidePage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="Test ride"
        title="From blue-lit screen to electric street."
        copy="A premium test ride flow that helps buyers choose a model, city, finance question, and callback preference without friction."
        videoKey="testRide"
      >
        <div className="metal-panel relative min-h-[480px] overflow-hidden rounded-[2.5rem]">
          <Image src="/vehoicle_image/prince/3.png" alt="Book NXT test ride" fill className="object-contain p-10" priority />
          <div className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-2xl">
            <CalendarClock className="mb-3 text-electric-cyan" />
            <strong className="text-2xl font-black">48 hr callback flow</strong>
          </div>
        </div>
      </PremiumPageHero>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="grid gap-5">
            {[
              { icon: Sparkles, title: "Choose model", copy: "Select from scooters, rickshaws, or utility three-wheelers." },
              { icon: MapPin, title: "Choose city", copy: "Route the lead to the nearest dealer or local sales team." },
              { icon: Phone, title: "Get callback", copy: "A clean handoff for test ride scheduling and finance questions." }
            ].map((item) => (
              <article key={item.title} className="glass-panel rounded-[2rem] p-7">
                <item.icon className="mb-4 text-electric-cyan" />
                <h2 className="text-2xl font-black text-white">{item.title}</h2>
                <p className="mt-3 leading-8 text-steel-400">{item.copy}</p>
              </article>
            ))}
          </div>
          <LeadCaptureForm kind="testRide" />
        </div>
      </section>
    </main>
  );
}
