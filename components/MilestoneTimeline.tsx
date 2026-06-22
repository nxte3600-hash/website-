import { MotionSection } from "@/components/MotionSection";

export function MilestoneTimeline({
  items
}: {
  items: Array<{ year: string; title: string; copy: string }>;
}) {
  return (
    <div className="relative">
      <div className="timeline-line absolute left-5 top-0 hidden h-full w-px md:block" />
      <div className="grid gap-5">
        {items.map((item, index) => (
          <MotionSection key={item.year} delay={index * 0.04} className="grid gap-5 md:grid-cols-[110px_1fr]">
            <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-electric-cyan/35 bg-midnight text-xl font-black text-white shadow-glow">
              {item.year}
            </div>
            <article className="metal-panel rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-electric-green">Milestone {index + 1}</span>
                  <h3 className="mt-2 text-2xl font-black text-white md:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-3xl leading-8 text-steel-300">{item.copy}</p>
                </div>
                <span className="text-6xl font-black text-outline md:text-8xl">{item.year}</span>
              </div>
            </article>
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
