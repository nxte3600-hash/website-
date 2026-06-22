import type { LucideIcon } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

export function TechnologyGrid({
  items
}: {
  items: Array<{ icon: LucideIcon; title: string; copy: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <MotionSection key={item.title} delay={index * 0.05} className="group relative overflow-hidden rounded-2xl border border-electric-cyan/18 bg-white/[0.065] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-electric-cyan/45">
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-electric-cyan/12 blur-2xl transition group-hover:bg-electric-blue/20" />
          <item.icon className="relative mb-6 text-electric-cyan" size={38} />
          <h3 className="relative text-2xl font-black text-white">{item.title}</h3>
          <p className="relative mt-4 text-sm leading-7 text-steel-300">{item.copy}</p>
        </MotionSection>
      ))}
    </div>
  );
}
