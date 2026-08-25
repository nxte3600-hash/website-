import type { Metadata } from "next";
import { PremiumCTA, PremiumHero } from "@/components/PremiumPage";
import { companyDetails } from "@/lib/companyKnowledge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NXTE Mobility privacy policy for website enquiries, lead forms and support interactions.",
  alternates: { canonical: "/privacy" }
};

const sections = [
  ["Information we collect", "The website may collect details visitors choose to submit through contact, dealer and test ride forms, such as name, phone number, email, city, vehicle interest, business details and message content."],
  ["How it is used", "Submitted information is used to respond to enquiries, route dealer or test ride requests, provide support and improve website operations."],
  ["Assistants and channels", "Chat, voice, WhatsApp and form experiences are intended to help visitors reach NXTE support. Voice sessions are initiated by the visitor and should not be used for sensitive personal information."],
  ["Third parties", "Maps, hosting, analytics, communication tools or finance partners may process information when visitors choose those pathways. Finance decisions and eligibility are handled by the relevant provider."],
  ["Contact", `Privacy or data questions can be sent to ${companyDetails.email} or ${companyDetails.phone}.`]
];

export default function PrivacyPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Privacy"
        title="Privacy information for NXTE website visitors."
        copy="This page explains the basic handling of enquiry information submitted through the NXTE Mobility website."
        image="/about/sustainability-everyday-movement.png"
        actions={[{ href: "/contact", label: "Contact NXTE", tone: "primary" }]}
      />
      <section className="nxte-section bg-white">
        <div className="nxte-shell max-w-4xl">
          {sections.map(([title, copy]) => (
            <article key={title} className="border-b border-[var(--nxte-line)] py-7">
              <h2 className="nxte-display text-2xl font-bold text-[var(--nxte-navy)]">{title}</h2>
              <p className="mt-3 font-semibold leading-8 text-[var(--nxte-muted)]">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <PremiumCTA title="Have a privacy question?" copy="Reach the NXTE team through the official contact route." href="/contact" label="Contact NXTE" />
    </main>
  );
}
