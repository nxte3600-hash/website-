import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PageHero } from "@/components/Option2Sections";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NXTE Mobility in Noida or Bengaluru Rural for vehicles, test rides, dealer, fleet, finance and service enquiries."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Talk to NXTE." copy="Reach the team for vehicle purchase, test ride, dealership, fleet, finance and service enquiries." image="/option2/hero-india-in-motion.png" />
      <section className="nxte-section">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-5">
            {companyAddresses.map((item) => (
              <a key={item.label} href={item.mapsUrl} target="_blank" rel="noreferrer" className="nxte-card p-6">
                <MapPin className="text-[var(--nxte-orange)]" />
                <h2 className="nxte-display mt-4 text-2xl font-bold">{item.label}</h2>
                <p className="mt-2 leading-7 text-[var(--nxte-muted)]">{item.address}</p>
              </a>
            ))}
            <div className="nxte-card p-6">
              <Phone className="text-[var(--nxte-orange)]" />
              <h2 className="nxte-display mt-4 text-2xl font-bold">Official support</h2>
              <p className="mt-2 leading-7 text-[var(--nxte-muted)]">{companyDetails.phone}</p>
              <p className="text-[var(--nxte-muted)]">{companyDetails.email}</p>
            </div>
          </div>
          <LeadCaptureForm kind="contact" />
        </div>
      </section>
    </main>
  );
}
