import type { Metadata } from "next";
import { Banknote, ClipboardCheck, IndianRupee } from "lucide-react";
import { companyDetails } from "@/lib/companyKnowledge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PremiumGrid, PremiumHero, PremiumTimeline } from "@/components/PremiumPage";

export const metadata: Metadata = {
  title: "Finance",
  description: "NXTE Mobility finance enquiry page for EMI and ownership support conversations.",
  alternates: { canonical: "/finance" }
};

export default function FinancePage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Finance support"
        title="Ask about ownership options before you decide."
        copy="NXTE highlights finance partner support as an enquiry pathway. Final eligibility, rates and approvals are determined only by the relevant finance provider."
        image="/home-locked/sections/petrol-vs-electric.png"
      />
      <PremiumGrid
        eyebrow="Finance context"
        title="Clear questions beat vague promises."
        items={[
          { title: "Partner discussion", copy: `Known finance partner names in the site knowledge base include ${companyDetails.financePartners.slice(0, 4).join(", ")} and others.`, icon: Banknote },
          { title: "EMI enquiry", copy: "Share model interest, city and budget comfort so the team can route the conversation.", icon: IndianRupee },
          { title: "Verified terms", copy: "Do not treat any finance detail as final until the lender or official NXTE team confirms it.", icon: ClipboardCheck }
        ]}
      />
      <PremiumTimeline
        eyebrow="Finance flow"
        title="A disciplined path to finance support."
        steps={[
          { title: "Choose model", copy: "Shortlist the vehicle category and intended use." },
          { title: "Share city", copy: "Add location and contact details for follow-up." },
          { title: "Discuss options", copy: "Review applicable partner pathways." },
          { title: "Confirm terms", copy: "Proceed only with verified provider documentation." }
        ]}
      />
      <section className="nxte-section bg-white">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="nxte-kicker">Finance enquiry</p>
            <h2 className="nxte-display mt-3 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-6xl">Share your preferred model and city.</h2>
          </div>
          <LeadCaptureForm kind="contact" />
        </div>
      </section>
    </main>
  );
}
