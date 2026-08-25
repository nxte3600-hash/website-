"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/for-you", label: "For You" },
  { href: "/business", label: "Business" },
  { href: "/technology", label: "Technology" },
  { href: "/about-us", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isActive = (href: string, label: string) => {
    if (label === "About") return pathname === "/about-us" || pathname === "/about";
    if (label === "For You") return pathname === "/for-you" || pathname === "/why-ev";
    if (label === "Business") return pathname === "/business" || pathname === "/dealer";
    if (label === "Contact") return pathname === "/contact" || pathname === "/contact-us";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`${isHome ? "relative bg-white py-4" : "sticky top-3"} left-0 right-0 z-50 pointer-events-none`}>
      <nav className="nxte-shell pointer-events-auto flex h-[76px] items-center justify-between gap-5 rounded-[14px] border border-[rgba(7,26,47,0.1)] bg-white/95 px-5 shadow-[0_12px_32px_rgba(7,26,47,.12)] backdrop-blur-xl" aria-label="Primary navigation">
        <Link href="/" className="relative block h-[46px] w-[128px] shrink-0" aria-label="NXTE Mobility home">
          <Image
            src="/brand/logo.png"
            alt="NXTE Mobility"
            fill
            priority={isHome}
            sizes="128px"
            className="object-contain"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className={`relative py-2 text-xs font-extrabold text-[var(--nxte-navy)] transition hover:text-[var(--nxte-orange)] ${isActive(item.href, item.label) ? "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[var(--nxte-orange)]" : ""}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/test-ride" className="nxte-button nxte-button-primary header-cta min-h-11 px-5 text-sm">
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
          <div className="grid gap-2 p-4">
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
