"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Send, X } from "lucide-react";
import { bookingOptions } from "@/lib/pricelist";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

type BookingFormProps = {
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
};

type BookingConfirmation = {
  name: string;
  whatsapp: string;
  service: string;
  location: string;
  shareLocation: string;
  date: string;
  duration: string;
  notes: string;
};

type SubmitStatus = "idle" | "saving" | "saved" | "local" | "error";

const inputClass =
  "min-h-12 w-full rounded-[8px] border border-white/10 bg-[#0f1116]/70 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-wm-red focus:ring-2 focus:ring-wm-red/25";

const bookingEndpoint = process.env.NEXT_PUBLIC_BOOKING_ENDPOINT;
const adminWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

function createWhatsAppMessage(booking: BookingConfirmation) {
  return [
    "REQUEST BOOKING WMFILMS",
    "Halo WMfilms, saya ingin melakukan booking dokumentasi.",
    `1. Client | Nama: ${booking.name} | WhatsApp: ${booking.whatsapp}`,
    `2. Booking | Layanan: ${booking.service} | Tanggal: ${booking.date} | Durasi: ${booking.duration}`,
    `3. Lokasi | Lapangan: ${booking.location} | Maps: ${booking.shareLocation}`,
    `4. Detail Tim / Catatan | ${booking.notes}`,
    "Mohon cek ketersediaan jadwal dan estimasi biaya final. Terima kasih.",
  ].join("\r\n");
}

export function BookingForm({
  selectedServiceId,
  onServiceChange,
}: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmation, setConfirmation] =
    useState<BookingConfirmation | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedOption = bookingOptions.find(
      (option) => option.id === formData.get("service"),
    );

    const booking: BookingConfirmation = {
      name: String(formData.get("name") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      service: selectedOption?.label ?? "Belum dipilih",
      location: String(formData.get("location") ?? ""),
      shareLocation: String(formData.get("shareLocation") ?? "") || "-",
      date: String(formData.get("date") ?? ""),
      duration: `${String(formData.get("duration") ?? "2")} jam`,
      notes: String(formData.get("notes") ?? "") || "-",
    };

    setConfirmation(booking);
    setIsSubmitted(true);

    if (!bookingEndpoint) {
      setSubmitStatus("local");
      return;
    }

    setSubmitStatus("saving");

    try {
      await fetch(bookingEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          ...booking,
        }),
      });
      setSubmitStatus("saved");
    } catch {
      setSubmitStatus("error");
    }
  }

  const whatsAppUrl =
    confirmation && adminWhatsAppNumber
      ? `https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${encodeURIComponent(
          createWhatsAppMessage(confirmation),
        )}`
      : null;

  return (
    <section id="booking" className="section-surface wm-section">
      <div className="wm-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Mulai Booking"
              title="Kirim detail event, nanti tinggal lanjut konfirmasi."
              body="Isi data utama supaya tanggal, lokasi, layanan, dan kontak client tercatat rapi. Nanti alur ini bisa masuk ke dashboard admin, pembayaran DP, dan tracking status booking."
            />

            <div className="mt-8 rounded-[8px] border border-wm-green/25 bg-wm-green/10 p-5 text-sm leading-6 text-zinc-200">
              <p className="font-black text-wm-green">Ready for next phase</p>
              <p className="mt-2">
                Form ini sudah disiapkan sebagai pondasi untuk integrasi admin,
                DP, dan tracking status booking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="premium-panel rounded-[8px] border border-white/10 p-5 shadow-2xl shadow-black/30 sm:p-6"
            >
              {isSubmitted ? (
                <div
                  aria-live="polite"
                  className="mb-5 flex gap-3 rounded-[8px] border border-wm-green/30 bg-wm-green/10 p-4 text-sm leading-6 text-zinc-100"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-wm-green"
                    size={20}
                  />
                  <div>
                    <p className="font-black text-white">
                      Detail booking terkirim.
                    </p>
                    <p className="text-zinc-300">
                      Untuk saat ini data belum masuk backend, tapi alur UI sudah
                      siap untuk konfirmasi berikutnya.
                    </p>
                  </div>
                </div>
              ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-zinc-200">
                  Nama client
                </span>
                <input
                  required
                  className={inputClass}
                  name="name"
                  placeholder="Nama lengkap"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-zinc-200">
                  Nomor WhatsApp
                </span>
                <input
                  required
                  className={inputClass}
                  name="whatsapp"
                  inputMode="tel"
                  placeholder="08xxxxxxxxxx"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">
                Layanan
              </span>
              <select
                required
                className={inputClass}
                name="service"
                value={selectedServiceId}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setConfirmation(null);
                  setSubmitStatus("idle");
                  onServiceChange(event.target.value);
                }}
              >
                <option value="">Pilih layanan</option>
                {bookingOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-zinc-200">
                  Lokasi lapangan
                </span>
                <input
                  required
                  className={inputClass}
                  name="location"
                  placeholder="Nama lapangan / kota"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-zinc-200">
                  Tanggal event
                </span>
                <input required className={inputClass} name="date" type="date" />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">
                Link lokasi lapangan
              </span>
              <input
                className={inputClass}
                name="shareLocation"
                type="url"
                placeholder="Paste link Google Maps lokasi lapangan"
              />
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Opsional, tapi disarankan agar titik lokasi lebih akurat saat
                konfirmasi jadwal.
              </p>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">
                Durasi booking
              </span>
              <div className="relative">
                <input
                  required
                  className={`${inputClass} pr-16`}
                  name="duration"
                  type="number"
                  min={2}
                  step={1}
                  defaultValue={2}
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-zinc-400">
                  jam
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Minimal pembookingan 2 jam. Tambahkan durasi sesuai kebutuhan,
                misalnya 3 atau 4 jam.
              </p>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">
                Detail tim dan kebutuhan tambahan
              </span>
              <textarea
                className={`${inputClass} min-h-32 resize-y py-3`}
                name="notes"
                placeholder="Tulis nama tim. Jika memilih paket sparing/trofeo, cantumkan juga nama tim lawan. "
              />
            </label>

              <Button
                type="submit"
                className="mt-5 w-full"
                disabled={submitStatus === "saving"}
              >
                {submitStatus === "saving"
                  ? "Mengirim Detail..."
                  : "Kirim Detail Booking"}
                <Send size={17} />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>

      {confirmation ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-confirmation-title"
        >
          <div className="premium-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-white/10 p-5 shadow-2xl shadow-black/50 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="wm-eyebrow">Konfirmasi Pembookingan</p>
                <h3
                  id="booking-confirmation-title"
                  className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl"
                >
                  Detail booking berhasil disiapkan.
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Silakan cek kembali detail berikut. Data ini bisa masuk ke
                  Google Sheets dan dilanjutkan ke WhatsApp untuk konfirmasi
                  jadwal.
                </p>
              </div>
              <button
                type="button"
                aria-label="Tutup konfirmasi"
                className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-zinc-200 transition hover:border-wm-red/60 hover:text-white"
                onClick={() => setConfirmation(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Nama", confirmation.name],
                ["Nomor WhatsApp", confirmation.whatsapp],
                ["Layanan", confirmation.service],
                ["Lokasi lapangan", confirmation.location],
                ["Link lokasi lapangan", confirmation.shareLocation],
                ["Tanggal event", confirmation.date],
                ["Durasi booking", confirmation.duration],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-white/10 bg-[#0f1116]/65 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[8px] border border-white/10 bg-[#0f1116]/65 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                Catatan tambahan
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                {confirmation.notes}
              </p>
            </div>

            <div className="mt-5 rounded-[8px] border border-wm-green/25 bg-wm-green/10 p-4 text-sm leading-6 text-zinc-200">
              <p className="font-black text-wm-green">Status request</p>
              {submitStatus === "saved" ? (
                <p className="mt-1">
                  Detail booking sudah diterima. Tahap berikutnya adalah
                  konfirmasi jadwal, estimasi final, dan DP.
                </p>
              ) : null}
              {submitStatus === "saving" ? (
                <p className="mt-1">
                  Detail booking sedang dikirim ke sistem pencatatan.
                </p>
              ) : null}
              {submitStatus === "local" ? (
                <p className="mt-1">
                  Detail booking sudah disiapkan. Silakan lanjutkan konfirmasi
                  melalui WhatsApp.
                </p>
              ) : null}
              {submitStatus === "error" ? (
                <p className="mt-1">
                  Detail booking berhasil disiapkan. Silakan lanjut konfirmasi
                  melalui WhatsApp.
                </p>
              ) : null}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              {whatsAppUrl ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-wm-red bg-wm-red px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition duration-200 hover:border-red-500 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wm-red"
                >
                  Lanjut Konfirmasi WhatsApp
                  <MessageCircle size={17} />
                </a>
              ) : (
                <Button type="button" className="w-full">
                  Nomor Admin Belum Diatur
                  <CheckCircle2 size={17} />
                </Button>
              )}
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => setConfirmation(null)}
              >
                Edit Data Booking
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
