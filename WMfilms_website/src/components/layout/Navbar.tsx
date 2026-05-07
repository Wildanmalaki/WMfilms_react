"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnchorButton } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import wmfilmsLogo from "@/assets/logo_wmfilms_putih.png";

const navItems = [
  { label: "Layanan", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Alur Kerja", href: "/#workflow" },
  { label: "Booking Jadwal", href: "/#booking" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d11]/85 backdrop-blur-xl">
      <nav className="wm-container flex h-20 items-center justify-between gap-5">
        <Link
          href="/#top"
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wm-red"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-12 w-16 items-center justify-center overflow-hidden">
            <Image
              src={wmfilmsLogo}
              alt="WMfilms logo"
              width={96}
              height={48}
              priority
              className="brand-logo h-9 w-auto object-contain"
            />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-[0.08em] text-white">
              WMfilms
            </span>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400">
              Capture Your Moment
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-[8px] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wm-red"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-2 h-0.5 origin-left scale-x-0 bg-wm-red transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <AnchorButton href="/#booking">Booking Jadwal</AnchorButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="inline-flex size-11 items-center justify-center rounded-[8px] border border-white/20 bg-white/10 text-white transition hover:border-wm-red/60"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid border-t border-white/10 bg-wm-charcoal/95 transition-[grid-template-rows] duration-200 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="wm-container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-zinc-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
