import type { Metadata } from "next";
import { Building2, MapPinned, Truck, Wrench } from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumCTA, PremiumGrid, PremiumHero, PremiumTimeline } from "@/components/PremiumPage";

export const metadata: Metadata = {
  title: "Business",
  description: "NXTE Mobility business pathways for dealers, fleet operators and commercial EV buyers.",
  alternates: { canonical: "/business" }
};

export default function BusinessPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Business mobility"
        title="Electric platforms for dealers, operators and local commerce."
        copy="NXTE supports business conversations across dealerships, fleet needs, passenger three-wheelers and cargo EV categories without publishing unverified commercial claims."
        image="/vehicles/buland-rsd-loader.jpg"
        actions={[
          { href: "/dealer", label: "Dealer Enquiry", tone: "primary" },
          { href: "/contact", label: "Talk to NXTE", tone: "secondary" }
        ]}
      />
      <PremiumGrid
        eyebrow="Partner routes"
        title="Built for practical commercial decisions."
        items={[
          { title: "Dealer territories", copy: "Structured inquiries for entrepreneurs and existing automotive retail partners.", icon: Building2 },
          { title: "Fleet conversations", copy: "Category-led discovery for passenger mobility, local logistics and business use cases.", icon: Truck },
          { title: "Service handoff", copy: "Buying journeys stay connected to support, parts and follow-up workflows.", icon: Wrench }
        ]}
      />
      <PremiumTimeline
        eyebrow="Business flow"
        title="A clear path from interest to qualified conversation."
        steps={[
          { title: "Share territory", copy: "Submit the city, district or operating zone." },
          { title: "Define category", copy: "Choose scooter, passenger three-wheeler or cargo EV use case." },
          { title: "Review fit", copy: "Discuss investment, service coverage and operational needs." },
          { title: "Next step", copy: "Move forward only with verified commercial documentation." }
        ]}
      />
      <section className="nxte-section bg-white">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="nxte-kicker">Start a business enquiry</p>
            <h2 className="nxte-display mt-3 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-6xl">Tell us where you want to grow.</h2>
            <p className="mt-5 font-semibold leading-8 text-[var(--nxte-muted)]">This uses the existing production dealer lead pipeline, keeping the current backend behavior intact.</p>
          </div>
          <LeadCaptureForm kind="dealer" />
        </div>
      </section>
      <PremiumCTA title="Need fleet or dealer support?" copy="NXTE can route your enquiry to the right business follow-up." href="/dealer" label="Open Dealer Form" />
    </main>
  );
}
