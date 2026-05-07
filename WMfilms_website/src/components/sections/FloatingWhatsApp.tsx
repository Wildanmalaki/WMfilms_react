"use client";

import { ChevronDown, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const adminWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

const faqs = [
  {
    question: "Berapa lama proses editing file?",
    answer:
      "Estimasi editing maksimal 2 hari kerja. Kalau antrian sedang aman, file bisa selesai lebih cepat, sekitar 1 hari kerja setelah pembayaran dilunasi.",
  },
  {
    question: "Minimal booking berapa jam?",
    answer:
      "Minimal booking untuk sport adalah 2 jam. Kalau butuh tambahan waktu, tinggal tulis durasinya di form agar bisa dihitung sekalian.",
  },
  {
    question: "Apakah bisa booking untuk sparing?",
    answer:
      "Bisa. Kalau booking sparing, tulis nama tim kamu dan nama tim lawan di bagian detail. Jadi saat konfirmasi, kebutuhan dokumentasinya sudah jelas.",
  },
  {
    question: "Apakah WMfilms hanya menerima sport?",
    answer:
      "Fokus utama WMfilms memang sport, tapi tetap menerima wedding dan event. Detail paketnya akan menyesuaikan konsep, lokasi, durasi, dan kebutuhan hasil akhir.",
  },
  {
    question: "Bagaimana cara mengunci jadwal?",
    answer:
      "Jadwal bisa dikunci setelah detail acara sudah cocok dan DP masuk. Setelah itu slot tanggalnya kami simpan untuk booking kamu.",
  },
  {
    question: "Bagaimana jika waktu booking melewati jadwal?",
    answer:
      "Jika penggunaan waktu melewati jadwal booking lebih dari 15 menit, maka akan dihitung sebagai tambahan 1 jam booking.",
  },
  {
    question: "Apakah bisa request konsep atau angle tertentu?",
    answer:
      "Bisa. Tulis saja request-nya di form, misalnya fokus ke pemain tertentu, foto tim, selebrasi, detail venue, atau kebutuhan konten untuk upload cepat.",
  },
  {
    question: "Hasil file dikirim lewat apa?",
    answer:
      "Hasil file akan dikirim lewat Google Drive. Nanti link foldernya dikirim setelah proses editing selesai.",
  },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const whatsAppUrl = adminWhatsAppNumber
    ? `https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${encodeURIComponent(
        "Halo WMfilms, saya ingin konsultasi kebutuhan dokumentasi.",
      )}`
    : null;

  function openPanel() {
    setIsClosing(false);
    setIsOpen(true);
  }

  function closePanel() {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  }

  function togglePanel() {
    if (isOpen) {
      closePanel();
      return;
    }

    openPanel();
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      {isOpen ? (
        <div
          className={cn(
            "mb-3 w-[min(calc(100vw-40px),390px)] origin-bottom-right overflow-hidden rounded-[8px] border border-white/10 bg-[#111319] shadow-2xl shadow-black/50",
            isClosing ? "faq-panel-exit" : "faq-panel-enter",
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-[#171a20] px-4 py-3">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.1em] text-white">
                FAQ WMfilms
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Jawaban singkat sebelum booking
              </p>
            </div>
            <button
              type="button"
              aria-label="Tutup FAQ"
              className="flex size-9 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-zinc-200 transition hover:border-wm-red/60 hover:text-white"
              onClick={closePanel}
            >
              <X size={17} />
            </button>
          </div>

          <div className="max-h-[420px] overflow-y-auto p-4">
            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                    >
                      <span className="text-sm font-bold leading-5 text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={17}
                        className={cn(
                          "shrink-0 text-wm-red transition-transform",
                          isActive && "rotate-180",
                        )}
                      />
                    </button>
                    {isActive ? (
                      <p className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-zinc-300">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-zinc-300">
              Untuk pertanyaan lebih lanjut, langsung hubungi{" "}
              {whatsAppUrl ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-wm-green underline-offset-4 hover:underline"
                >
                  WhatsApp admin
                </a>
              ) : (
                <span className="font-bold text-white">WhatsApp admin</span>
              )}
              .
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Buka FAQ WMfilms"
        className={cn(
          "faq-floating-button relative inline-flex min-h-12 items-center gap-3 rounded-[8px] border border-wm-green/30 bg-wm-green px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#06110b] shadow-2xl shadow-wm-green/20 transition duration-300 hover:-translate-y-1 hover:bg-[#45e59a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wm-green",
          isOpen && "rotate-2 scale-95 bg-[#45e59a]",
        )}
        onClick={togglePanel}
      >
        <span className="faq-button-ring" />
        <MessageCircle
          size={20}
          className={cn("transition-transform duration-300", isOpen && "scale-0")}
        />
        <X
          size={20}
          className={cn(
            "absolute left-4 transition-transform duration-300",
            isOpen ? "scale-100 rotate-0" : "scale-0 -rotate-90",
          )}
        />
        <span className="hidden sm:inline">{isOpen ? "Tutup" : "FAQ"}</span>
      </button>
    </div>
  );
}
