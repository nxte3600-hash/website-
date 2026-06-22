import Image from "next/image";

export function VehicleStage({
  image,
  name,
  label = "Model preview",
  className = "",
  priority = false
}: {
  image: string;
  name: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`hero-stage scan-surface relative overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-navy-900 ${className}`}>
      <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-midnight/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl">
        <span className="h-2.5 w-2.5 rounded-full bg-electric-green shadow-[0_0_0_8px_rgba(81,240,172,.14)]" />
        {label}
      </div>
      <div className="absolute inset-x-12 bottom-10 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent" />
      <div className="absolute inset-x-20 bottom-8 h-16 rounded-[100%] bg-electric-cyan/10 blur-2xl" />
      <Image
        src={image}
        alt={name}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 55vw"
        className="z-[1] object-contain p-10 drop-shadow-[0_34px_44px_rgba(56,215,255,.18)] transition duration-500 hover:scale-[1.03]"
      />
      <div className="absolute right-5 top-5 z-10 rounded-2xl border border-white/10 bg-midnight/70 px-4 py-3 text-white backdrop-blur-xl">
        <span className="block text-xs font-bold text-steel-400">NXT model</span>
        <strong className="text-sm">{name}</strong>
      </div>
    </div>
  );
}
