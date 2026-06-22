import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FuturisticCTA({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "group inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 font-black transition duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-electric-cyan via-white to-electric-green text-midnight shadow-[0_0_42px_rgba(56,215,255,.28)]"
      : "border border-white/18 bg-white/[0.08] text-white backdrop-blur-xl hover:border-electric-cyan hover:bg-electric-cyan/10";

  const content = (
    <>
      {children}
      <ArrowRight className="transition group-hover:translate-x-1" size={18} />
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}
