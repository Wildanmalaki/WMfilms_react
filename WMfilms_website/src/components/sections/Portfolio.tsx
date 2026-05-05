import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { images } from "@/lib/images";

const portfolioItems = [
  {
    title: "Match Day",
    category: "Sport",
    description: "Momen intens, ekspresi pemain, dan detail pertandingan.",
    image: images.matchDay,
  },
  {
    title: "Team Story",
    category: "Sport Team",
    description: "Visual klub yang siap dipakai untuk feed dan media kit.",
    image: images.teamStory,
  },
  {
    title: "Wedding Moment",
    category: "Wedding",
    description: "Dokumentasi personal dengan warna natural dan clean.",
    image: images.wedding,
  },
  {
    title: "Event Highlight",
    category: "Event",
    description: "Acara, panggung, crowd, dan kebutuhan publikasi cepat.",
    image: images.event,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-surface-alt wm-section">
      <div className="wm-container">
        <Reveal>
          <SectionHeader
            eyebrow="Portfolio Preview"
            title="Beberapa arah visual yang biasa dicari client WMfilms."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <SpotlightCard className="group relative min-h-[360px] overflow-hidden rounded-[8px] border border-white/10 bg-wm-panelSoft">
                <Image
                  src={item.image}
                  alt={`${item.title} photography preview`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080a]/95 via-[#07080a]/58 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex rounded-[6px] bg-wm-red px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                    {item.category}
                  </span>
                  <h3 className="mt-4 flex items-center justify-between gap-3 text-2xl font-black text-white">
                    {item.title}
                    <ArrowUpRight
                      size={20}
                      className="text-wm-red transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-200">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
