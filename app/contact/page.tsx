import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumHero } from "@/components/PremiumPage";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NXTE Mobility for vehicles, dealerships, finance, service and support.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Contact"
        title="Talk to NXTE about your next electric move."
        copy="Reach the team for vehicle purchase, test ride, dealership, fleet, finance and service enquiries using the existing production contact workflow."
        image="/home-locked/sections/hero-india-in-motion.png"
        actions={[
          { href: "/test-ride", label: "Book a Test Ride", tone: "primary" },
          { href: "/dealer", label: "Dealer Enquiry", tone: "secondary" }
        ]}
      />
      <section className="nxte-section bg-white">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <p className="nxte-kicker">Official channels</p>
            <h2 className="nxte-display mt-3 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-6xl">Choose the shortest route to the team.</h2>
            <div className="mt-8 grid gap-4">
              <Link href={`tel:${companyDetails.phone}`} className="premium-card flex items-center gap-4 p-5">
                <Phone className="text-[var(--nxte-orange)]" />
                <span className="font-extrabold text-[var(--nxte-navy)]">{companyDetails.phone}</span>
              </Link>
              <Link href={`mailto:${companyDetails.email}`} className="premium-card flex items-center gap-4 p-5">
                <Mail className="text-[var(--nxte-orange)]" />
                <span className="font-extrabold text-[var(--nxte-navy)]">{companyDetails.email}</span>
              </Link>
              {companyAddresses.map((address) => (
                <Link key={address.label} href={address.mapsUrl} className="premium-card flex items-start gap-4 p-5">
                  <MapPin className="mt-1 shrink-0 text-[var(--nxte-orange)]" />
                  <span>
                    <strong className="block text-[var(--nxte-navy)]">{address.label}</strong>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-[var(--nxte-muted)]">{address.address}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <LeadCaptureForm kind="contact" />
        </div>
      </section>
    </main>
  );
}
