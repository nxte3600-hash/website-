import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="nxte-shell grid min-h-[70vh] place-items-center py-16 text-center">
        <div className="max-w-2xl">
          <p className="nxte-kicker">404</p>
          <h1 className="nxte-display mt-4 text-5xl font-extrabold leading-tight text-[var(--nxte-navy)] md:text-7xl">This route is not on the map.</h1>
          <p className="mt-5 font-semibold leading-8 text-[var(--nxte-muted)]">Return to the NXTE vehicle range, book a test ride, or contact the team for help.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/vehicles" className="nxte-button nxte-button-primary">Explore Vehicles</Link>
            <Link href="/contact" className="nxte-button nxte-button-secondary">Contact NXTE</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
