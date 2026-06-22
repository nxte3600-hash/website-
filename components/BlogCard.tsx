import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function BlogCard({
  icon: Icon,
  title,
  tag,
  copy,
  href = "/blog",
  featured = false
}: {
  icon: LucideIcon;
  title: string;
  tag: string;
  copy: string;
  href?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-electric-cyan/30 bg-[linear-gradient(135deg,rgba(56,215,255,.18),rgba(255,255,255,.08))] shadow-glow md:col-span-2"
          : "border-white/10 bg-white/[0.055]"
      }`}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-electric-blue/16 blur-3xl" />
      <Icon className="relative mb-6 text-electric-cyan" size={42} />
      <span className="relative text-xs font-black uppercase tracking-[0.2em] text-electric-green">{tag}</span>
      <h2 className={`relative mt-4 font-black leading-tight text-white ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{title}</h2>
      <p className="relative mt-4 leading-8 text-steel-300">{copy}</p>
      <Link href={href} className="relative mt-7 inline-flex items-center gap-2 font-black text-electric-cyan">
        Read insight <ArrowRight className="transition group-hover:translate-x-1" size={18} />
      </Link>
    </article>
  );
}
