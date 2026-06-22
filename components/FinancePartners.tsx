import { Banknote, CheckCircle2 } from "lucide-react";

const partners = ["HDFC Bank", "ICICI Bank", "Axis Bank", "IDFC FIRST", "Bajaj Finserv", "Local NBFC Support"];

export function FinancePartners({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <section className={light ? "white-premium rounded-[2.4rem] p-7 sm:p-10" : "glass-panel rounded-[2.4rem] p-7 sm:p-10"}>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${light ? "bg-navy-900 text-white" : "bg-white text-midnight"}`}>
            <Banknote />
          </div>
          <div>
            <span className={`text-xs font-black uppercase tracking-[0.22em] ${light ? "text-navy-700" : "text-electric-green"}`}>
              Finance partners
            </span>
            <h2 className={`mt-2 text-3xl font-black leading-none sm:text-5xl ${light ? "text-midnight" : "text-white"}`}>
              EMI support that belongs above the fold.
            </h2>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-3 lg:w-[44%]">
          {partners.map((partner) => (
            <div
              key={partner}
              className={`rounded-2xl px-4 py-3 text-sm font-black ${
                light ? "bg-white/70 text-navy-900 shadow-sm" : "border border-white/10 bg-white/[0.07] text-white"
              }`}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-7 grid gap-3 text-sm sm:grid-cols-3 ${light ? "text-slate-600" : "text-steel-300"}`}>
        {["Retail buyer EMI guidance", "Dealer finance handoff", "Fleet and B2B conversation ready"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle2 className={light ? "text-navy-700" : "text-electric-cyan"} size={19} />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
