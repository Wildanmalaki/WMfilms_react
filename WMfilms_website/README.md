# WMfilms Website

Website landing page untuk **WMfilms**, layanan freelance fotografi yang berfokus pada dokumentasi **sport photography**, serta menerima kebutuhan dokumentasi **wedding** dan **event**.

Project ini dirancang sebagai website publik untuk membantu calon client melihat layanan, memahami paket dokumentasi, mengisi detail booking, lalu melanjutkan konfirmasi melalui WhatsApp admin.

## Overview

WMfilms sudah berkarya sejak 2019 dengan positioning visual yang clean, cepat, profesional, dan siap digunakan untuk kebutuhan publikasi maupun arsip personal.

Website ini berfokus pada beberapa kebutuhan utama:

- Menampilkan identitas brand WMfilms secara modern dan premium.
- Menyediakan informasi layanan sport, wedding, dan event.
- Menampilkan pricelist sport berdasarkan jenis kebutuhan dokumentasi.
- Memberikan preview arah visual portfolio.
- Menjelaskan alur booking secara ringkas.
- Mengumpulkan data booking client melalui form yang terstruktur.
- Menghubungkan request booking ke Google Sheets dan WhatsApp admin.

## Features

- Sticky responsive navbar
- Hero section dengan visual sport/action photography
- Services dan pricelist berdasarkan kategori
- Tab layanan untuk Sport, Wedding, dan Event
- Pilih paket lalu otomatis mengisi layanan di form booking
- Portfolio preview
- Workflow booking section
- Booking form dengan data client dan event
- Minimal durasi booking 2 jam
- Input link lokasi lapangan
- Modal konfirmasi booking
- Template pesan WhatsApp otomatis
- Integrasi Google Sheets via Google Apps Script
- Responsive untuk desktop dan mobile
- Animasi ringan saat scroll dan hover

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Google Apps Script

## Booking Data

Data booking yang dikumpulkan dari form:

- Nama client
- Nomor WhatsApp
- Layanan yang dipilih
- Lokasi lapangan
- Link lokasi lapangan
- Tanggal event
- Durasi booking
- Detail tim dan catatan tambahan

Data tersebut dapat dikirim ke Google Sheets sebagai database ringan untuk mencatat request booking.

## Google Sheets Integration

Integrasi Google Sheets menggunakan Apps Script yang tersedia di:

```text
google-apps-script/booking.gs
```

Kolom data yang digunakan:

```text
Waktu Booking Masuk
Nama
WhatsApp
Layanan
Lokasi Lapangan
Link Lokasi
Tanggal
Durasi
Catatan
```

Endpoint Apps Script disimpan melalui environment variable:

```env
NEXT_PUBLIC_BOOKING_ENDPOINT=""
```

## WhatsApp Integration

Setelah user mengirim form, website menampilkan modal konfirmasi. Dari modal tersebut user dapat melanjutkan ke WhatsApp admin dengan template pesan otomatis.

Nomor WhatsApp admin disimpan melalui environment variable:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=""
```

Format pesan WhatsApp dibuat ringkas agar tetap terbaca walaupun WhatsApp preview meratakan line break:

```text
REQUEST BOOKING WMFILMS
Halo WMfilms, saya ingin melakukan booking dokumentasi.
1. Client | Nama: ... | WhatsApp: ...
2. Booking | Layanan: ... | Tanggal: ... | Durasi: ...
3. Lokasi | Lapangan: ... | Maps: ...
4. Detail Tim / Catatan | ...
Mohon cek ketersediaan jadwal dan estimasi biaya final. Terima kasih.
```

## Folder Structure

```text
WMfilms_website
├── google-apps-script
│   └── booking.gs
├── public
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   ├── components
│   │   ├── home
│   │   ├── layout
│   │   ├── sections
│   │   ├── services
│   │   └── ui
│   └── lib
│       ├── images.ts
│       ├── pricelist.ts
│       └── utils.ts
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Main Components

- `Navbar`
- `Hero`
- `Services`
- `Portfolio`
- `Workflow`
- `BookingForm`
- `Footer`

## Brand Direction

```text
Brand: WMfilms
Tagline: Capture Your Moment
Category: Sport, Wedding, Event Photographer
Main focus: Sport photography
Active since: 2019
Visual direction: Dark sporty, clean, premium, professional
Accent colors: Red, white, charcoal, gold
```

## Notes

Project ini masih dapat dikembangkan lebih lanjut dengan:

- Dashboard admin booking
- Status tracking booking
- Payment atau DP flow
- Gallery portfolio dinamis
- CMS untuk update pricelist dan portfolio
- Notifikasi otomatis ke admin
