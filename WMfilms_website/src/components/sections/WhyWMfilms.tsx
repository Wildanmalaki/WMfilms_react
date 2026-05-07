import { Camera, CheckCircle2, Clock3, Images } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const reasons = [
  {
    title: "Sport-first perspective",
    body: "Pengambilan gambar diarahkan untuk menangkap intensitas pertandingan, ekspresi pemain, dan momen penting yang cepat terjadi.",
    icon: Camera,
  },
  {
    title: "Visual siap publikasi",
    body: "Hasil dokumentasi disiapkan dengan tone clean dan format yang cocok untuk feed, media kit, arsip tim, maupun kebutuhan brand.",
    icon: Images,
  },
  {
    title: "Alur kerja jelas",
    body: "Detail layanan, lokasi, durasi, dan kebutuhan client dikumpulkan sejak awal agar proses konfirmasi berjalan lebih rapi.",
    icon: CheckCircle2,
  },
  {
    title: "Efisien dari shoot ke delivery",
    body: "Workflow dibuat ringkas agar client mendapat dokumentasi yang tertata tanpa komunikasi berulang yang membuang waktu.",
    icon: Clock3,
  },
];

export function WhyWMfilms() {
  return (
    <section className="section-surface wm-section border-t border-white/10">
      <div className="wm-container">
        <Reveal>
          <SectionHeader
            eyebrow="Why WMfilms"
            title="Dokumentasi yang bukan hanya terlihat bagus, tapi juga siap dipakai."
            body="WMfilms mengutamakan visual yang rapi, cepat dipahami, dan relevan dengan kebutuhan publikasi client, terutama untuk sport team dan event yang membutuhkan dokumentasi tepat waktu."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal key={reason.title} delay={index * 70}>
                <SpotlightCard className="premium-panel h-full rounded-[8px] border border-white/10 p-5 transition duration-200 hover:-translate-y-1 hover:border-wm-red/50">
                  <div className="flex size-11 items-center justify-center rounded-[8px] border border-wm-red/25 bg-wm-red/10 text-wm-red">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 text-xl font-black leading-tight text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {reason.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
