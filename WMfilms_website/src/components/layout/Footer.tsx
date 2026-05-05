import Image from "next/image";
import wmfilmsLogo from "@/assets/logo_wmfilms_putih.png";

export function Footer() {
  return (
    <footer className="section-surface-deep border-t border-white/10 py-10">
      <div className="wm-container flex flex-col gap-5 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={wmfilmsLogo}
            alt="WMfilms logo"
            width={92}
            height={52}
            className="h-12 w-auto object-contain"
          />
          <div>
            <p className="text-base font-black text-white">
              WMfilms - Sport, Wedding, Event
            </p>
            <p className="mt-2">
              Dokumentasi visual yang rapi dari booking sampai delivery.
            </p>
          </div>
        </div>
        <p className="font-bold uppercase tracking-[0.18em] text-wm-red">
          Capture Your Moment
        </p>
      </div>
    </footer>
  );
}
