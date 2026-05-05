"use client";

import { useMemo, useState } from "react";
import type { ServiceCategory } from "@/lib/pricelist";
import { serviceCategories, services, sportNote } from "@/lib/pricelist";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";

type ServicesProps = {
  onSelectService: (serviceId: string) => void;
};

export function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("Sport");

  const filteredServices = useMemo(
    () => services.filter((service) => service.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="services" className="section-surface wm-section border-t border-white/10">
      <div className="wm-container">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="Services / Pricelist"
            title="Pilih paket dokumentasi sesuai kebutuhan event kamu."
            body="Untuk sport, kamu bisa langsung pilih paket sesuai cabang olahraga. Untuk wedding dan event, paket akan disesuaikan dengan konsep, durasi, lokasi, dan kebutuhan hasil akhir."
          />

          <div className="flex rounded-[8px] border border-white/10 bg-white/[0.06] p-1">
            {serviceCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={cn(
                  "min-h-10 rounded-[7px] px-4 text-sm font-black uppercase tracking-[0.08em] transition",
                  activeCategory === category
                    ? "bg-wm-red text-white"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) * 55}>
              <ServiceCard service={service} onSelect={onSelectService} />
            </Reveal>
          ))}
        </div>

        {activeCategory === "Sport" ? (
          <p className="mt-6 rounded-[8px] border border-wm-gold/25 bg-wm-gold/10 p-4 text-sm leading-6 text-zinc-200">
            {sportNote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
