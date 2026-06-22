import Image from "next/image";
import { BatteryCharging, IndianRupee, Leaf, ShieldCheck, TreePine, Users, VolumeX, Wind } from "lucide-react";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { MotionSection } from "@/components/MotionSection";
import { StatsStrip } from "@/components/StatsStrip";
import { VideoHero } from "@/components/VideoHero";
import { getVideoAsset } from "@/lib/videoAssets";

const lifeBenefits = [
  {
    icon: Wind,
    title: "Cleaner air outside home",
    copy: "Zero tailpipe smoke helps daily streets feel cleaner for children walking to school, families waiting at crossings, and riders moving through dense lanes."
  },
  {
    icon: VolumeX,
    title: "Quieter neighborhoods",
    copy: "Electric drive reduces the engine noise that fills markets, campuses, residential roads, and early-morning delivery routes."
  },
  {
    icon: IndianRupee,
    title: "Lower daily running pressure",
    copy: "Charging can make daily movement more predictable for families, drivers, shop owners, and route operators managing monthly costs."
  },
  {
    icon: ShieldCheck,
    title: "More confidence to switch",
    copy: "Clear range, charging, service, and dealer guidance turns EV adoption from a risk into a practical ownership decision."
  }
];

const comparison = [
  ["Daily cost", "Electric charging can reduce running cost and improve monthly predictability.", "Petrol prices create repeated operating pressure."],
  ["Street experience", "No tailpipe emissions and less road noise during use.", "Exhaust fumes and engine sound shape dense city movement."],
  ["Maintenance", "Simpler drivetrain care and fewer combustion service items.", "Oil, filters, heat, vibration, and more mechanical wear."],
  ["City future", "Built for clean local transport, last-mile delivery, and short-route mobility.", "Familiar today, but increasingly strained by pollution and cost."],
  ["Buying confidence", "Best when range, charging, finance, and dealer support are explained clearly.", "Known format, but weaker sustainability and running-cost story."]
];

export default function WhyEvPage() {
  const video = getVideoAsset("whyEv");

  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow="Why electric mobility"
        title="Cleaner air for families. Lower cost for everyday movement."
        copy="EV is not only a technology change. It is a quieter morning, a cleaner school route, a better street for children, and a smarter daily cost decision for India's riders and businesses."
        videoSrc={video.videoSrc}
        poster={video.poster}
        actions={[
          { href: "/vehicles", label: "Explore EV vehicles", variant: "primary" },
          { href: "/test-ride", label: "Book test ride", variant: "secondary" }
        ]}
      >
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.07] shadow-glow backdrop-blur-2xl">
          <Image
            src="/vehoicle_image/glide/3.png"
            alt="NXT electric scooter clean mobility story"
            fill
            priority
            className="object-contain p-9 drop-shadow-[0_38px_64px_rgba(56,215,255,.22)]"
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(81,240,172,.18),transparent_22rem)]" />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 backdrop-blur-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-electric-green">The human reason</p>
            <h2 className="mt-2 text-3xl font-black">A better ride should leave behind a better street.</h2>
          </div>
        </div>
      </VideoHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsStrip
            stats={[
              { value: "0", label: "Tailpipe smoke", detail: "Electric drive removes local exhaust emissions while riding" },
              { value: "Less", label: "Noise", detail: "Quieter roads improve dense city comfort" },
              { value: "Lower", label: "Running cost", detail: "Charging can reduce daily fuel pressure" },
              { value: "NXT", label: "Vision", detail: "Clean mobility that works for Indian routes" }
            ]}
          />
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="energy-field absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
          <MotionSection>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">The petrol problem</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">The old way moves people, but it leaves cost, smoke, and noise behind.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              Petrol mobility is familiar, but every short trip carries a hidden load: rising fuel expense, exhaust in crowded streets, engine noise near homes, and more mechanical maintenance.
            </p>
          </MotionSection>
          <MotionSection className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            {["Fuel price pressure", "Tailpipe smoke", "Engine noise", "More service items"].map((item) => (
              <div key={item} className="metal-panel rounded-2xl p-6">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-electric-cyan">Daily friction</span>
                <h3 className="mt-4 text-3xl font-black">{item}</h3>
              </div>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="bg-[#061126] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-10 max-w-4xl">
            <Users className="mb-6 text-electric-cyan" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Families and future generations</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">EV should first feel like care for the people sharing the road.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              The strongest reason to switch is not only technology. It is the everyday difference people can feel around schools, homes, shops, parks, and neighborhoods.
            </p>
          </MotionSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {lifeBenefits.map((item, index) => (
              <MotionSection key={item.title} delay={index * 0.05} className="glass-panel rounded-[2rem] p-7">
                <item.icon className="mb-5 text-electric-cyan" size={38} />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-steel-300">{item.copy}</p>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <MotionSection className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.06] shadow-panel">
            <Image
              src="/vehoicle_image/energy/4.png"
              alt="Electric mobility and clean city future"
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 backdrop-blur-2xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-electric-green">Nature and cities</p>
              <h3 className="mt-2 text-3xl font-black">Clean mobility must serve the next generation, not only the next commute.</h3>
            </div>
          </MotionSection>
          <MotionSection className="metal-panel rounded-[2rem] p-8 sm:p-10" delay={0.08}>
            <TreePine className="mb-6 text-electric-green" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Sustainability with purpose</span>
            <h2 className="mt-4 text-5xl font-black leading-none">Cleaner mobility becomes powerful when it is practical enough to adopt.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              NXT&apos;s role is to make EV ownership feel serious: route-fit products, visible charging logic, dealer support, and a product range that covers personal, passenger, and cargo movement.
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-9 max-w-4xl">
            <BatteryCharging className="mb-6 text-electric-cyan" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">EV vs petrol</span>
            <h2 className="mt-4 text-5xl font-black leading-none sm:text-7xl">A clear buying decision for first-time EV customers.</h2>
          </MotionSection>
          <div className="overflow-x-auto rounded-[2rem] border border-electric-cyan/20 bg-white/[0.06] shadow-panel backdrop-blur-xl">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[.75fr_1fr_1fr] border-b border-white/10 bg-electric-cyan/10 text-sm font-black uppercase tracking-[0.16em] text-electric-cyan">
                <div className="p-4">Decision</div>
                <div className="p-4">Electric vehicle</div>
                <div className="p-4">Petrol vehicle</div>
              </div>
              {comparison.map(([decision, ev, petrol]) => (
                <div key={decision} className="grid grid-cols-[.75fr_1fr_1fr] border-b border-white/10 last:border-b-0">
                  <div className="p-4 font-black text-white">{decision}</div>
                  <div className="p-4 leading-7 text-steel-300">{ev}</div>
                  <div className="p-4 leading-7 text-steel-400">{petrol}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[.95fr_1.05fr]">
          <MotionSection className="metal-panel rounded-[2rem] p-8 sm:p-10">
            <Leaf className="mb-6 text-electric-green" size={46} />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">NXT vision</span>
            <h2 className="mt-4 text-5xl font-black leading-none">Make clean mobility desirable, dependable, and ready for Indian roads.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              NXT connects the emotional reason to switch with the practical support needed to do it: product selection, range clarity, charging confidence, service readiness, finance routes, and dealer access.
            </p>
          </MotionSection>
          <MotionSection className="glass-panel rounded-[2rem] p-8 sm:p-10" delay={0.08}>
            <h3 className="text-4xl font-black leading-none">Move from belief to test ride.</h3>
            <p className="mt-6 leading-8 text-steel-300">
              The next step is not another promise. It is choosing the EV mission and experiencing the product.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FuturisticCTA href="/vehicles">Explore EV vehicles</FuturisticCTA>
              <FuturisticCTA href="/test-ride" variant="secondary">Book test ride</FuturisticCTA>
              <FuturisticCTA href="/dealer" variant="secondary">Dealer enquiry</FuturisticCTA>
            </div>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
