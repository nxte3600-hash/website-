"use client";

import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(7,26,47,0.08)] bg-white/92 backdrop-blur-xl">
      <nav className="nxte-shell flex h-20 items-center justify-between gap-6" aria-label="Primary navigation">
        <Link href="/" className="nxte-display text-2xl font-extrabold tracking-[0.08em] text-[var(--nxte-navy)]" aria-label="NXTE Mobility home">
          NXT<span className="text-[var(--nxte-orange)]">E</span>
          <span className="block text-[0.48rem] font-bold tracking-[0.52em] text-[var(--nxte-muted)]">MOBILITY</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="text-sm font-extrabold text-[var(--nxte-navy)] transition hover:text-[var(--nxte-orange)]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/test-ride" className="nxte-button nxte-button-primary hidden sm:inline-flex">
            Book a Test Ride <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--nxte-line)] text-[var(--nxte-navy)] lg:hidden"
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
        <div id="mobile-nav" className="border-t border-[var(--nxte-line)] bg-white lg:hidden">
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
