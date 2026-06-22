import { Mail, MapPin, Phone } from "lucide-react";
import { companyAddresses } from "@/lib/companyKnowledge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumPageHero } from "@/components/PremiumPageHero";

export default function ContactPage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="Contact us"
        title="Connect with NXT's EV command desk."
        copy="Open company locations, call the team, or send an inquiry for vehicles, dealership, fleet, finance support, and test ride routing."
        primaryHref={companyAddresses[0].mapsUrl}
        primaryLabel="Open Noida map"
        secondaryHref={companyAddresses[1].mapsUrl}
        secondaryLabel="Open Bengaluru map"
        videoKey="contact"
      />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="grid gap-5">
            <a
              href={companyAddresses[0].mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="white-premium block rounded-[2.5rem] p-8 shadow-panel transition hover:-translate-y-1"
            >
              <MapPin className="mb-4 text-navy-800" />
              <h2 className="text-3xl font-black">Noida Office</h2>
              <p className="mt-3 leading-8 text-slate-600">{companyAddresses[0].address}</p>
              <span className="mt-5 inline-flex rounded-full bg-midnight px-5 py-3 text-sm font-black text-white">
                Open in Google Maps
              </span>
            </a>
            <a
              href={companyAddresses[1].mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-panel block rounded-[2.5rem] p-8 transition hover:-translate-y-1"
            >
              <MapPin className="mb-4 text-electric-cyan" />
              <h2 className="text-3xl font-black text-white">Bengaluru Rural</h2>
              <p className="mt-3 leading-8 text-steel-400">{companyAddresses[1].address}</p>
              <span className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-midnight">
                Open in Google Maps
              </span>
            </a>
            <div className="grid gap-5 sm:grid-cols-2">
              <a className="glass-panel rounded-[2rem] p-6" href="mailto:info@nxtemobility.com">
                <Mail className="mb-4 text-electric-green" />
                <strong className="text-white">info@nxtemobility.com</strong>
              </a>
              <a className="glass-panel rounded-[2rem] p-6" href="tel:+919289484831">
                <Phone className="mb-4 text-electric-green" />
                <strong className="text-white">+91-9289484831</strong>
              </a>
            </div>
          </div>

          <LeadCaptureForm kind="contact" />
        </div>
      </section>
    </main>
  );
}
