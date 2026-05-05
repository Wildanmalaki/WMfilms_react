import Image from "next/image";
import { ArrowDownRight, CalendarCheck } from "lucide-react";
import { AnchorButton } from "@/components/ui/Button";
import heroImage from "@/assets/HERO WEB.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80svh] items-center overflow-hidden md:min-h-[85vh]"
    >
      <Image
        src={heroImage}
        alt="WMfilms sport action photography hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(225,29,46,0.14),transparent_26rem),radial-gradient(circle_at_58%_76%,rgba(199,165,90,0.1),transparent_22rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,10,0.96)_0%,rgba(7,8,10,0.82)_36%,rgba(7,8,10,0.48)_66%,rgba(7,8,10,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,10,0.28)_0%,rgba(7,8,10,0.24)_42%,rgba(7,8,10,0.84)_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.68)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="hero-speed-line absolute left-[-20%] top-[22%] h-px w-1/2 bg-gradient-to-r from-transparent via-wm-red to-transparent opacity-0" />
        <span className="hero-speed-line absolute left-[-20%] top-[48%] h-px w-2/5 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0" />
        <span className="hero-speed-line absolute left-[-20%] top-[68%] h-px w-1/3 bg-gradient-to-r from-transparent via-wm-gold to-transparent opacity-0" />
      </div>

      <div className="wm-container relative z-10 py-24">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-[8px] border border-wm-red/40 bg-wm-red/15 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
            Sport, wedding, and event photographer
          </p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-wm-gold">
            Capture Your Moment
          </p>
          <h1 className="mt-4 text-6xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
            WMfilms
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 sm:text-xl">
            Layanan dokumentasi sport, wedding, dan event dengan hasil visual
            yang terarah, rapi, dan siap digunakan untuk publikasi, kebutuhan
            brand, maupun arsip personal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnchorButton href="#booking" className="cta-pulse">
              <CalendarCheck size={18} />
              Booking Jadwal
            </AnchorButton>
            <AnchorButton href="#portfolio" variant="secondary">
              Lihat Portfolio
              <ArrowDownRight size={18} />
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  );
}
