"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/why-ev", label: "For You" },
  { href: "/dealer", label: "Business" },
  { href: "/technology", label: "NXTE App" },
  { href: "/about-us", label: "About" },
  { href: "/dealer", label: "Find a Dealer" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "fixed top-4" : "sticky top-3"} left-0 right-0 z-50 pointer-events-none`}>
      <nav className="nxte-shell pointer-events-auto flex h-16 items-center justify-between gap-5 rounded-[14px] border border-[rgba(7,26,47,0.1)] bg-white/95 px-5 shadow-[0_12px_32px_rgba(7,26,47,.12)] backdrop-blur-xl" aria-label="Primary navigation">
        <Link href="/" className="nxte-display text-[1.55rem] font-extrabold leading-none tracking-[0.09em] text-[var(--nxte-navy)]" aria-label="NXTE Mobility home">
          NXT<span className="text-[var(--nxte-orange)]">E</span>
          <span className="block text-[0.42rem] font-bold tracking-[0.54em] text-[var(--nxte-muted)]">MOBILITY</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="text-xs font-extrabold text-[var(--nxte-navy)] transition hover:text-[var(--nxte-orange)]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/test-ride" className="nxte-button nxte-button-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            Book a Test Ride <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--nxte-line)] text-[var(--nxte-navy)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="nxte-shell pointer-events-auto mt-2 rounded-[14px] border border-[var(--nxte-line)] bg-white shadow-[0_12px_32px_rgba(7,26,47,.12)] lg:hidden">
          <div className="nxte-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link key={`${item.href}-${item.label}-mobile`} href={item.href} className="rounded-lg px-3 py-3 font-bold text-[var(--nxte-navy)]" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/test-ride" className="nxte-button nxte-button-primary mt-2" onClick={() => setOpen(false)}>
              Book a Test Ride <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
