import type { LucideIcon } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

export function ManufacturingProcess({
  steps
}: {
  steps: Array<{ icon: LucideIcon; title: string; copy: string }>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <MotionSection key={step.title} delay={index * 0.05} className="metal-panel relative overflow-hidden rounded-2xl p-6">
          <span className="absolute right-5 top-4 text-6xl font-black text-white/5">{String(index + 1).padStart(2, "0")}</span>
          <step.icon className="mb-6 text-electric-cyan" size={38} />
          <h3 className="text-2xl font-black text-white">{step.title}</h3>
          <p className="mt-4 text-sm leading-7 text-steel-300">{step.copy}</p>
        </MotionSection>
      ))}
    </div>
  );
}
