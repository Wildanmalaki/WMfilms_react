import { CalendarDays, CheckCircle2, ClipboardList, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Pilih layanan",
    body: "Client memilih paket sport, wedding, atau event yang paling sesuai dengan kebutuhan acara.",
    icon: CheckCircle2,
  },
  {
    title: "Kirim detail event",
    body: "Tanggal, lokasi, jenis acara, kontak, dan catatan penting dikumpulkan dalam satu request.",
    icon: ClipboardList,
  },
  {
    title: "Konfirmasi jadwal",
    body: "Kamu cek ketersediaan, memberi estimasi akhir, lalu mengunci jadwal setelah DP.",
    icon: CalendarDays,
  },
  {
    title: "Produksi dan delivery",
    body: "Project berjalan dari shooting, editing, gallery, sampai hasil akhir diterima client.",
    icon: Send,
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="section-surface-deep wm-section border-y border-white/10"
    >
      <div className="wm-container">
        <Reveal>
          <SectionHeader
            eyebrow="Cara Kerja"
            title="Proses pemesanan yang jelas dari awal hingga delivery."
            body="Setiap permintaan dokumentasi dikumpulkan dalam format terstruktur, mulai dari pilihan layanan, detail jadwal, lokasi, hingga kebutuhan output sebelum masuk ke tahap konfirmasi."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 80}>
                <article className="h-full rounded-[8px] border border-white/10 bg-white/[0.055] p-5 transition duration-200 hover:-translate-y-1 hover:border-wm-gold/40 hover:bg-white/[0.075]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-wm-red">
                      Step {index + 1}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-[8px] border border-white/10 bg-[#171a20]/70 text-wm-gold">
                      <Icon size={20} />
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
