import Link from "next/link";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

const explore = [
  ["Vehicles", "/vehicles"],
  ["About", "/about-us"],
  ["Manufacturing", "/manufacturing"],
  ["Why EV", "/why-ev"],
  ["Technology", "/technology"],
  ["Sustainability", "/sustainability"],
  ["Blog", "/blog"]
];

export function Footer() {
  return (
    <footer className="nxte-navy">
      <div className="nxte-shell grid gap-12 py-14 md:grid-cols-[1.2fr_.9fr_1.1fr]">
        <div>
          <Link href="/" className="nxte-display text-3xl font-extrabold tracking-[0.08em]">
            NXT<span className="text-[var(--nxte-orange)]">E</span> MOBILITY
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
            India&apos;s next electric movement. Built with practical manufacturing confidence for personal, passenger and cargo journeys.
          </p>
        </div>

        <div>
          <h2 className="nxte-kicker">Explore</h2>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold text-white/76">
            {explore.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="nxte-kicker">Connect</h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-white/76">
            {companyAddresses.map((item) => (
              <p key={item.label}>{item.label}: {item.address}</p>
            ))}
            <p>{companyDetails.email}</p>
            <p>{companyDetails.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="nxte-shell flex flex-col gap-3 py-5 text-xs text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NXTE Mobility. All rights reserved.</p>
          <p>WhatsApp • Text Chat • Voice Assistant</p>
        </div>
      </div>
    </footer>
  );
}
