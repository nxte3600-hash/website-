import type { Metadata } from "next";
import { ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumGrid, PremiumHero, PremiumTimeline } from "@/components/PremiumPage";

export const metadata: Metadata = {
  title: "Service",
  description: "NXTE Mobility service support page for ownership and vehicle assistance enquiries.",
  alternates: { canonical: "/service" }
};

export default function ServicePage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Service support"
        title="Ownership support should be easy to reach."
        copy="Use this page for service, diagnostics, parts and ownership follow-up. Final warranty, parts and service terms must be confirmed from approved NXTE documents."
        image="/home-locked/sections/technology-master.png"
      />
      <PremiumGrid
        eyebrow="Support areas"
        title="Designed around clear next steps."
        items={[
          { title: "Vehicle concern", copy: "Share your model, city and service requirement so the team can route the enquiry.", icon: Wrench },
          { title: "Documentation", copy: "Keep service, warranty and parts information verified before relying on it.", icon: ClipboardCheck },
          { title: "Owner confidence", copy: "Use official NXTE channels for support, not unverified third-party claims.", icon: ShieldCheck }
        ]}
      />
      <PremiumTimeline
        eyebrow="Service flow"
        title="From issue to official follow-up."
        steps={[
          { title: "Describe", copy: "Tell us the model, city and concern." },
          { title: "Route", copy: "The request enters the existing contact lead pipeline." },
          { title: "Verify", copy: "The team can check the support context." },
          { title: "Resolve", copy: "Next steps depend on official service availability." }
        ]}
      />
      <section className="nxte-section bg-white">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="nxte-kicker">Service enquiry</p>
            <h2 className="nxte-display mt-3 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-6xl">Tell NXTE what needs attention.</h2>
            <p className="mt-5 font-semibold leading-8 text-[var(--nxte-muted)]">This form reuses the production contact endpoint and keeps WhatsApp/chat support available.</p>
          </div>
          <LeadCaptureForm kind="contact" />
        </div>
      </section>
    </main>
  );
}
