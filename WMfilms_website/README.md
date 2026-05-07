# WMfilms Website

WMfilms Website adalah landing page publik untuk bisnis freelance fotografi **WMfilms**. Website ini dibuat sebagai media presentasi layanan fotografi yang profesional, modern, dan mudah dipahami oleh calon client sebelum melakukan booking.

WMfilms berfokus pada **sport photography**, tetapi juga menerima dokumentasi **wedding** dan **event**. Secara visual, website ini mengusung gaya dark sporty, clean, premium, dan profesional agar sesuai dengan karakter brand fotografi sport yang cepat, tegas, dan dinamis.

## Tujuan Project

Project ini dibuat untuk membantu WMfilms memiliki halaman digital yang dapat:

- Menjelaskan identitas brand dan positioning WMfilms.
- Menampilkan layanan fotografi sport, wedding, dan event.
- Menampilkan daftar paket dan harga dasar dokumentasi.
- Membantu calon client memilih paket layanan dengan lebih mudah.
- Menyediakan form booking yang rapi dan terstruktur.
- Menampilkan alur kerja booking dari pemilihan layanan sampai delivery.
- Memberikan kesan brand yang lebih profesional di mata calon client.

Website ini tidak hanya berfungsi sebagai tampilan promosi, tetapi juga sebagai pondasi awal untuk sistem booking yang lebih lengkap di masa depan.

## Teknologi yang Digunakan

Project ini dibangun menggunakan teknologi frontend modern:

- **Next.js** sebagai framework utama.
- **App Router** untuk struktur routing Next.js modern.
- **React** sebagai library UI.
- **TypeScript** untuk menjaga struktur kode lebih aman dan mudah dikembangkan.
- **Tailwind CSS** untuk styling yang responsive dan konsisten.
- **Lucide React** untuk icon.
- **Google Apps Script** sebagai integrasi sederhana untuk pencatatan data booking.

Pemilihan stack ini bertujuan agar project mudah dikembangkan, cepat dijalankan, responsive di berbagai device, dan siap untuk deployment modern seperti Vercel.

## Framework

Framework utama yang digunakan adalah **Next.js**.

Next.js dipilih karena mendukung:

- Struktur project yang rapi.
- Routing berbasis folder melalui App Router.
- Optimasi image melalui `next/image`.
- Pengembangan React yang lebih terstruktur.
- Performa yang baik untuk landing page publik.
- Kemudahan deployment ke platform seperti Vercel.

## Fitur Utama

Website WMfilms memiliki beberapa bagian utama:

- Sticky navbar
- Hero section dengan visual sport/action
- Services dan pricelist
- Portfolio preview
- Workflow atau alur booking
- Booking form
- Modal konfirmasi booking
- Footer brand

Setiap bagian dibuat sebagai komponen terpisah agar struktur kode lebih bersih dan mudah dirawat.

## Hero Section

Hero section berfungsi sebagai first impression website. Bagian ini menampilkan identitas utama WMfilms, tagline, deskripsi layanan, dan tombol aksi untuk booking atau melihat portfolio.

Hero menggunakan gambar bertema sport/action photography agar langsung menunjukkan fokus utama WMfilms pada dokumentasi olahraga.

## Services dan Pricelist

Bagian services menampilkan layanan berdasarkan kategori:

- Sport
- Wedding
- Event

Untuk kategori sport, paket dibuat lebih detail berdasarkan kebutuhan dokumentasi seperti football, futsal, basket, badminton, race, video cinematic, dan lainnya.

Setiap card layanan memiliki:

- Nama layanan
- Harga dasar
- Deskripsi singkat
- Detail layanan
- Tombol pilih paket

Ketika client memilih paket, form booking akan otomatis menyesuaikan layanan yang dipilih.

## Portfolio Preview

Portfolio preview digunakan untuk memberikan gambaran arah visual yang biasa dicari client WMfilms.

Kategori preview meliputi:

- Match Day
- Team Story
- Wedding Moment
- Event Highlight

Bagian ini membantu calon client memahami gaya dokumentasi yang ditawarkan tanpa harus membuka gallery penuh.

## Workflow Booking

Workflow section menjelaskan proses pemesanan secara ringkas dan profesional.

Alurnya mencakup:

- Client memilih layanan
- Client mengirim detail event
- Jadwal dikonfirmasi
- Produksi dan delivery hasil dokumentasi

Bagian ini dibuat agar client memahami proses kerja sejak awal.

## Booking Form

Booking form dibuat untuk mengumpulkan informasi penting dari client secara terstruktur.

Data yang dikumpulkan meliputi:

- Nama client
- Nomor WhatsApp
- Layanan yang dipilih
- Lokasi lapangan
- Link lokasi lapangan
- Tanggal event
- Durasi booking
- Detail tim dan kebutuhan tambahan

Durasi booking memiliki minimal 2 jam, sesuai kebutuhan dasar dokumentasi sport.

## Konfirmasi Booking

Setelah form dikirim, website menampilkan modal konfirmasi booking. Modal ini membantu client mengecek ulang data yang sudah diisi sebelum melanjutkan komunikasi dengan admin.

Konfirmasi ini juga membuat proses booking terasa lebih jelas dan profesional.

## Integrasi Data Booking

Project ini memiliki integrasi pencatatan data booking menggunakan Google Apps Script. Integrasi ini dipakai sebagai solusi ringan agar data request booking bisa tersimpan secara terstruktur.

Pendekatan ini cocok untuk tahap awal karena:

- Tidak membutuhkan backend kompleks.
- Data mudah dilihat dan dikelola.
- Cocok untuk kebutuhan bisnis freelance.
- Bisa dikembangkan lagi menjadi dashboard admin di masa depan.

## Integrasi WhatsApp

Website juga menyediakan alur lanjutan ke WhatsApp admin. Setelah client mengisi form, sistem dapat menyiapkan format pesan otomatis berisi detail booking.

Tujuannya agar admin WMfilms langsung menerima informasi penting tanpa harus bertanya ulang dari awal.

## Struktur Folder

```text
WMfilms_website
├── google-apps-script
│   └── booking.gs
├── public
├── src
│   ├── app
│   ├── assets
│   ├── components
│   │   ├── home
│   │   ├── layout
│   │   ├── sections
│   │   ├── services
│   │   └── ui
│   └── lib
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Komponen Utama

Komponen utama dalam project:

- `Navbar`
- `Hero`
- `Services`
- `Portfolio`
- `Workflow`
- `BookingForm`
- `Footer`

Komponen pendukung:

- `Button`
- `Reveal`
- `SectionHeader`
- `SpotlightCard`
- `ServiceCard`

## Data dan Konfigurasi

Data pricelist disimpan terpisah di:

```text
src/lib/pricelist.ts
```

Pendekatan ini membuat data layanan lebih mudah diubah tanpa harus membongkar struktur komponen utama.

Data gambar dan referensi visual disimpan di:

```text
src/lib/images.ts
src/assets
```

## Design Direction

Arahan desain website:

- Dark sporty
- Clean layout
- Premium feel
- Professional typography
- Red accent sebagai warna utama
- Charcoal dan black sebagai warna dasar
- Gold sebagai aksen pendukung
- Card dengan radius kecil agar tidak terlalu playful
- Animasi ringan agar scroll tetap halus

Desain dibuat agar cocok untuk bisnis fotografi sport yang membutuhkan kesan cepat, tegas, dan percaya diri.

## Brand Information

```text
Brand: WMfilms
Tagline: Capture Your Moment
Industry: Sport, Wedding, Event Photographer
Main focus: Sport photography
Active since: 2019
```

## Future Development

Project ini masih dapat dikembangkan menjadi sistem booking yang lebih lengkap, seperti:

- Dashboard admin
- Status tracking booking
- Upload portfolio dinamis
- Payment atau DP flow
- Notifikasi otomatis
- CMS untuk update layanan dan pricelist
- Gallery client

## Summary

WMfilms Website adalah landing page profesional yang dirancang untuk memperkuat branding WMfilms, memperjelas layanan fotografi yang ditawarkan, dan membantu calon client melakukan request booking dengan alur yang lebih rapi.

Project ini menjadi fondasi awal untuk sistem digital WMfilms yang lebih lengkap di masa depan.
