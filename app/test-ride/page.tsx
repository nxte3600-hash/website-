import type { Metadata } from "next";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PageHero } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Book Test Ride",
  description: "Book an NXTE Mobility test ride for approved two-wheelers, passenger three-wheelers or cargo EVs."
};

export default function TestRidePage() {
  return (
    <main>
      <PageHero eyebrow="Book a test ride" title="Feel the difference on your route." copy="Choose a model, city and contact details. The NXTE team can follow up with test ride and finance support." image="/option2/grace1.png" />
      <section className="nxte-section">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="nxte-kicker">Your next step</p>
            <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)]">From interest to a real ride.</h2>
            <p className="mt-4 leading-8 text-[var(--nxte-muted)]">The form uses the existing test-ride API and keeps submission status visible. Use WhatsApp from the assistant launcher if the backend is unavailable.</p>
          </div>
          <LeadCaptureForm kind="testRide" />
        </div>
      </section>
    </main>
  );
}
