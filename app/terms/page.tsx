import type { Metadata } from "next";
import { PremiumCTA, PremiumHero } from "@/components/PremiumPage";
import { companyDetails } from "@/lib/companyKnowledge";

export const metadata: Metadata = {
  title: "Terms",
  description: "NXTE Mobility website terms for product information, enquiries and support pages.",
  alternates: { canonical: "/terms" }
};

const sections = [
  ["Website information", "The website provides product, company and enquiry information for NXTE Mobility. Public specifications, price, warranty, availability and finance details must be verified through approved NXTE documentation."],
  ["Vehicle content", "Images and product narratives are used for official presentation. Some product specifications remain marked as pending until approved documentation is available."],
  ["Enquiries", "Submitting a form does not create a purchase, dealership, finance or service commitment. NXTE may follow up using the submitted contact details."],
  ["Finance and partners", "Finance eligibility, rates and final approval are handled by the relevant finance provider and are not guaranteed by website content."],
  ["Contact", `Questions about these terms can be sent to ${companyDetails.email} or ${companyDetails.phone}.`]
];

export default function TermsPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Terms"
        title="Terms for using the NXTE Mobility website."
        copy="These terms keep the website honest about product information, enquiry workflows and verification requirements."
        image="/about/manufacturing-master.png"
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
      <PremiumCTA title="Need official clarification?" copy="Use the contact page and the NXTE team can follow up." href="/contact" label="Contact NXTE" />
    </main>
  );
}
