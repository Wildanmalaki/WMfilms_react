# WMfilms Website

Landing page booking untuk WMfilms menggunakan Next.js App Router, TypeScript, dan Tailwind CSS.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Integrasi Google Sheets

Form booking bisa mengirim data ke Google Sheets lewat Google Apps Script.

1. Buat Google Sheet baru.
2. Buat header kolom:

```text
Waktu Booking Masuk | Nama | WhatsApp | Layanan | Lokasi Lapangan | Link Lokasi | Tanggal | Durasi | Catatan
```

3. Buka `Extensions > Apps Script`.
4. Paste isi file berikut ke Apps Script:

```text
google-apps-script/booking.gs
```

5. Klik `Deploy > New deployment`.
6. Pilih type `Web app`.
7. Set:

```text
Execute as: Me
Who has access: Anyone
```

8. Copy Web app URL.
9. Isi file `.env.local`:

```env
NEXT_PUBLIC_BOOKING_ENDPOINT="URL_WEB_APP_GOOGLE_APPS_SCRIPT"
NEXT_PUBLIC_WHATSAPP_NUMBER="628xxxxxxxxxx"
```

10. Restart dev server:

```bash
npm run dev
```

## WhatsApp

Setelah user submit form, modal konfirmasi akan menampilkan tombol `Lanjut Konfirmasi WhatsApp`. Pesannya otomatis berisi detail booking yang sudah diinput.
