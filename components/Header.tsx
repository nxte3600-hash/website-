"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/about-us", label: "About" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/why-ev", label: "Why EV" },
  { href: "/#technology", label: "Technology" },
  { href: "/#sustainability", label: "Sustainability" },
  { href: "/dealer", label: "Dealer" },
  { href: "/contact-us", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cinematicRoute =
    pathname === "/" ||
    pathname === "/about-us" ||
    pathname === "/manufacturing" ||
    pathname === "/why-ev" ||
    pathname === "/blog" ||
    pathname === "/vehicles" ||
    pathname === "/dealer" ||
    pathname === "/test-ride" ||
    pathname === "/contact-us" ||
    pathname.startsWith("/vehicles/");
  const solid = scrolled || !cinematicRoute;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-slate-200 bg-white/90 py-3 shadow-sm backdrop-blur-2xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-12 w-36 shrink-0" aria-label="NXT Mobility home">
          <Image src="/vehicles/nxt-logo.png" alt="NXT Mobility" fill className="object-contain" priority />
        </Link>

        <nav className={`hidden items-center gap-5 text-xs font-bold xl:gap-7 xl:text-sm lg:flex ${solid ? "text-midnight/70" : "text-white/78"}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`transition ${solid ? "hover:text-midnight" : "hover:text-white"}`}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/test-ride"
            className={`rounded-full px-5 py-3 font-black shadow-sm transition hover:scale-[1.02] ${
              solid ? "bg-midnight text-white" : "bg-white text-midnight"
            }`}
          >
            Book Test Ride
          </Link>
        </nav>

        <button
          type="button"
          className={`grid h-12 w-12 place-items-center rounded-2xl border shadow-sm lg:hidden ${
            solid ? "border-slate-200 bg-white text-midnight" : "border-white/15 bg-white/10 text-white"
          }`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="mx-4 mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-panel lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 font-bold text-midnight transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/test-ride"
              className="mt-2 rounded-2xl bg-midnight px-4 py-3 text-center font-black text-white"
              onClick={() => setOpen(false)}
            >
              Book Test Ride
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
