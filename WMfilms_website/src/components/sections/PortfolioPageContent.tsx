"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { AnchorButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type ActiveCategory = "All" | PortfolioCategory;

export function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#07080a] text-white">
      <section className="section-surface-deep border-b border-white/10 py-16 sm:py-20">
        <div className="wm-container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-zinc-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Kembali ke Home
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="wm-eyebrow">Portfolio</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Visual dokumentasi yang siap dipakai untuk publikasi.
              </h1>
            </div>
            <p className="text-base leading-8 text-zinc-300">
              Kumpulan dummy portfolio WMfilms untuk sport, wedding, dan event.
              Nanti bagian ini bisa diganti dengan foto asli dari asset portfolio
              sport kamu.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={cn(
                  "min-h-11 rounded-[8px] border px-5 text-sm font-black uppercase tracking-[0.08em] transition",
                  activeCategory === category
                    ? "border-wm-red bg-wm-red text-white"
                    : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-wm-red/60 hover:text-white",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface wm-section">
        <div className="wm-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 70}>
                <SpotlightCard className="group overflow-hidden rounded-[8px] border border-white/10 bg-wm-panelSoft">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} portfolio`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080a]/95 via-[#07080a]/22 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-[6px] bg-wm-red px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                      {item.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-black text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
            <div>
              <p className="text-xl font-black text-white">
                Ingin dokumentasi dengan gaya seperti ini?
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Pilih layanan, kirim detail event, lalu lanjut konfirmasi
                jadwal.
              </p>
            </div>
            <AnchorButton href="/#booking" className="mt-5 sm:mt-0">
              Booking Jadwal
              <ArrowRight size={17} />
            </AnchorButton>
          </div>
        </div>
      </section>
    </main>
  );
}
