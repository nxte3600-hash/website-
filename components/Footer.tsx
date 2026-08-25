import Image from "next/image";
import Link from "next/link";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

const explore = [
  ["Vehicles", "/vehicles"],
  ["For You", "/for-you"],
  ["Business", "/business"],
  ["Technology", "/technology"],
  ["About", "/about-us"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
  ["Book Test Ride", "/test-ride"],
  ["Manufacturing", "/manufacturing"],
  ["Sustainability", "/sustainability"],
  ["Blog", "/blog"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"]
];

export function Footer() {
  return (
    <footer className="nxte-navy mt-0">
      <div className="nxte-shell grid gap-8 py-8 md:grid-cols-[1.1fr_.9fr_1.4fr]">
        <div>
          <Link href="/" className="inline-flex rounded-[10px] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,.18)]" aria-label="NXTE Mobility home">
            <span className="relative block h-[48px] w-[142px]">
              <Image src="/brand/logo.png" alt="NXTE Mobility" fill sizes="142px" className="object-contain" />
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-xs leading-6 text-white/72">
            India&apos;s next electric movement. Built with practical manufacturing confidence for personal, passenger and cargo journeys.
          </p>
        </div>

        <div>
          <h2 className="nxte-kicker">Explore</h2>
          <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-xs font-semibold text-white/76">
            {explore.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="nxte-kicker">Connect</h2>
          <div className="mt-3 space-y-1 text-xs leading-5 text-white/76">
            {companyAddresses.map((item) => (
              <p key={item.label}>{item.label}: {item.address}</p>
            ))}
            <p>{companyDetails.email}</p>
            <p>{companyDetails.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="nxte-shell flex flex-col gap-3 py-4 text-xs text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} NXTE Mobility. All rights reserved.</p>
          <p>WhatsApp / Text Chat / Voice Assistant</p>
        </div>
      </div>
    </footer>
  );
}
