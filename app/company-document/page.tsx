import Link from "next/link";
import { companyAddresses, companyDetails, companyDocument } from "@/lib/companyKnowledge";
import { vehicles } from "@/lib/vehicles";
import { PremiumPageHero } from "@/components/PremiumPageHero";

export default function CompanyDocumentPage() {
  return (
    <main>
      <PremiumPageHero
        eyebrow="Company document"
        title="NXT Mobility knowledge base for the website assistant."
        copy="This page stores the company story, contact details, addresses, finance partners, website structure, vehicle models, and chatbot/voicebot reference data in one readable document."
        primaryHref="/contact-us"
        primaryLabel="Open contact page"
        secondaryHref="/about"
        secondaryLabel="Read story"
      />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="glass-panel h-fit rounded-[2rem] p-7 lg:sticky lg:top-28">
            <h2 className="text-3xl font-black text-white">{companyDetails.brand}</h2>
            <p className="mt-4 leading-8 text-steel-400">{companyDetails.mission}</p>
            <div className="mt-6 grid gap-3">
              {companyAddresses.map((item) => (
                <a
                  key={item.label}
                  href={item.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white"
                >
                  {item.label}
                  <span className="mt-1 block font-normal text-steel-400">{item.address}</span>
                </a>
              ))}
            </div>
            <Link href="/vehicles" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-black text-midnight">
              View {vehicles.length} models
            </Link>
          </aside>

          <article className="white-premium rounded-[2rem] p-6 shadow-panel sm:p-10">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-8 text-slate-700">{companyDocument}</pre>
          </article>
        </div>
      </section>
    </main>
  );
}
