import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/90 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_.8fr]">
        <div>
          <div className="relative mb-5 h-12 w-36">
            <Image src="/vehicles/nxt-logo.png" alt="NXT Mobility" fill className="object-contain" />
          </div>
          <p className="max-w-md text-sm leading-7 text-steel-400">
            NXT Mobility designs electric scooters, e-rickshaws, and utility EVs for cleaner urban and commercial mobility.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black text-white">Contact</h3>
          <div className="space-y-2 text-sm leading-7 text-steel-400">
            <p>SK 64, Sector 112, Noida, Uttar Pradesh 201304</p>
            <p>No 93, Somapura Industrial Area, Bengaluru Rural, Karnataka</p>
            <a className="block text-electric-cyan" href="mailto:info@nxtemobility.com">
              info@nxtemobility.com
            </a>
            <a className="block text-electric-cyan" href="tel:+919289484831">
              +91-9289484831
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black text-white">Explore</h3>
          <div className="grid gap-2 text-sm font-bold text-steel-400">
            <Link href="/vehicles" className="transition hover:text-white">
              Electric Scooters
            </Link>
            <Link href="/vehicles" className="transition hover:text-white">
              E-Rickshaw / Utility 3W
            </Link>
            <Link href="/dealer" className="transition hover:text-white">
              Become a Dealer
            </Link>
            <Link href="/why-ev" className="transition hover:text-white">
              Why EV
            </Link>
            <Link href="/about-us" className="transition hover:text-white">
              About NXT
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/technology" className="transition hover:text-white">
              Technology
            </Link>
            <Link href="/contact-us" className="transition hover:text-white">
              Contact Us
            </Link>
            <a
              href="https://nxtemobility.com/catalogue.php"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Catalogue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
