import type { Metadata } from "next";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { FinalCTA, PageHero } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Dealer and Fleet",
  description: "Apply for an NXTE dealership or start a fleet conversation for scooters, passenger three-wheelers and cargo EVs."
};

export default function DealerPage() {
  return (
    <main>
      <PageHero eyebrow="Business" title="Build the next NXTE territory." copy="A dealer and fleet pathway for entrepreneurs, existing dealers and operators who need practical EV categories and clear support." image="/vehicles/buland-rsd-loader.jpg" />
      <section className="nxte-section">
        <div className="nxte-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="nxte-kicker">Dealer model</p>
            <h2 className="nxte-display mt-2 text-4xl font-extrabold text-[var(--nxte-navy)] md:text-5xl">Multi-category opportunity, with real economics to be confirmed.</h2>
            <div className="mt-8 grid gap-4">
              {[
                ["2-Wheelers", "Grace, Prince, Energy, Energy Pro, Ola and E4 only in the approved two-wheeler UI."],
                ["Passenger 3-Wheelers", "Retained Buland passenger platforms for shared commercial routes."],
                ["Cargo EVs", "Loader platforms for last-mile and local business movement."],
                ["Proof required", "Dealer margins, ROI, territory, inventory and service economics should be confirmed by management before investor use."]
              ].map(([title, copy]) => (
                <article key={title} className="nxte-card p-6">
                  <h3 className="nxte-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-[var(--nxte-muted)]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <LeadCaptureForm kind="dealer" tone="dark" />
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
