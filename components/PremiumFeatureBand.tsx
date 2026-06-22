import type { LucideIcon } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

export function PremiumFeatureBand({
  eyebrow,
  title,
  copy,
  icon: Icon,
  children
}: {
  eyebrow: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  children?: React.ReactNode;
}) {
  return (
    <MotionSection className="metal-panel overflow-hidden rounded-[2rem] p-8 sm:p-10">
      <Icon className="mb-6 text-electric-cyan" size={46} />
      <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-black leading-none text-white sm:text-6xl">{title}</h2>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-steel-300">{copy}</p>
      {children ? <div className="mt-8">{children}</div> : null}
    </MotionSection>
  );
}
