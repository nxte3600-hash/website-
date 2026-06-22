import type { LucideIcon } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

export function QualityTestingGrid({
  items
}: {
  items: Array<{ icon: LucideIcon; title: string; copy: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <MotionSection key={item.title} delay={index * 0.04} className="glass-panel rounded-2xl p-6">
          <item.icon className="mb-5 text-electric-green" size={34} />
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-steel-300">{item.copy}</p>
        </MotionSection>
      ))}
    </div>
  );
}
