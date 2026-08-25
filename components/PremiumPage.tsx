import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

type HeroAction = {
  href: string;
  label: string;
  tone?: "primary" | "secondary";
};

export function PremiumHero({
  eyebrow,
  title,
  copy,
  image,
  actions = [
    { href: "/test-ride", label: "Book a Test Ride", tone: "primary" },
    { href: "/vehicles", label: "Explore Vehicles", tone: "secondary" }
  ]
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  actions?: HeroAction[];
}) {
  return (
    <section className="premium-reveal bg-white pt-5">
      <div className="nxte-shell">
        <div className="relative isolate min-h-[470px] overflow-hidden rounded-[10px] bg-[var(--nxte-navy)] text-white md:min-h-[560px]">
          <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,47,.94),rgba(7,26,47,.72)_42%,rgba(7,26,47,.12))]" />
          <div className="relative z-10 flex min-h-[470px] max-w-[760px] flex-col justify-center px-6 py-16 md:min-h-[560px] md:px-12 lg:px-16">
            <p className="nxte-kicker">{eyebrow}</p>
            <h1 className="nxte-display mt-5 text-balance text-[2.75rem] font-extrabold leading-[1.05] md:text-[4.65rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-[610px] text-base font-semibold leading-8 text-white/78 md:text-lg">{copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link key={action.href} href={action.href} className={`nxte-button ${action.tone === "secondary" ? "nxte-button-on-dark" : "nxte-button-primary"}`}>
                  {action.label} <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SplitStory({
  eyebrow,
  title,
  copy,
  image,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className="premium-reveal nxte-section bg-white">
      <div className={`nxte-shell grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <p className="nxte-kicker">{eyebrow}</p>
          <h2 className="nxte-display mt-3 text-balance text-4xl font-extrabold leading-tight text-[var(--nxte-navy)] md:text-6xl">{title}</h2>
          <p className="mt-5 text-base font-semibold leading-8 text-[var(--nxte-muted)]">{copy}</p>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[var(--nxte-light)] md:min-h-[480px]">
          <Image src={image} alt="" fill className="object-cover premium-parallax" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}

export function PremiumGrid({
  eyebrow,
  title,
  items
}: {
  eyebrow: string;
  title: string;
  items: Array<{ title: string; copy: string; icon?: LucideIcon }>;
}) {
  return (
    <section className="premium-reveal nxte-section bg-[var(--nxte-light)]">
      <div className="nxte-shell">
        <p className="nxte-kicker">{eyebrow}</p>
        <h2 className="nxte-display mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-tight text-[var(--nxte-navy)] md:text-6xl">{title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon ?? CheckCircle2;
            return (
              <article key={item.title} className="premium-card p-6">
                <Icon className="text-[var(--nxte-orange)]" size={26} />
                <h3 className="nxte-display mt-5 text-2xl font-bold text-[var(--nxte-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[var(--nxte-muted)]">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PremiumTimeline({
  eyebrow,
  title,
  steps
}: {
  eyebrow: string;
  title: string;
  steps: Array<{ title: string; copy: string }>;
}) {
  return (
    <section className="premium-reveal nxte-section bg-white">
      <div className="nxte-shell">
        <p className="nxte-kicker">{eyebrow}</p>
        <h2 className="nxte-display mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-tight text-[var(--nxte-navy)] md:text-6xl">{title}</h2>
        <ol className="premium-timeline mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-[8px] border border-[var(--nxte-line)] bg-white p-6">
              <span className="nxte-display text-4xl font-extrabold text-[var(--nxte-orange)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="nxte-display mt-4 text-xl font-bold text-[var(--nxte-navy)]">{step.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[var(--nxte-muted)]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PremiumCTA({ title, copy, href = "/test-ride", label = "Book a Test Ride" }: { title: string; copy: string; href?: string; label?: string }) {
  return (
    <section className="premium-reveal bg-white py-10">
      <div className="nxte-shell rounded-[10px] bg-[var(--nxte-navy)] p-6 text-white md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="nxte-display text-3xl font-extrabold md:text-5xl">{title}</h2>
            <p className="mt-3 max-w-2xl font-semibold leading-7 text-white/72">{copy}</p>
          </div>
          <Link href={href} className="nxte-button nxte-button-primary shrink-0">
            {label} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
