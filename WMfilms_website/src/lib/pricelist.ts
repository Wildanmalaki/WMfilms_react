export type ServiceCategory = "Sport" | "Wedding" | "Event";

export type ServiceIcon =
  | "football"
  | "trophy"
  | "court"
  | "basket"
  | "racket"
  | "video"
  | "race"
  | "wedding"
  | "event";

export type ServicePackage = {
  id: string;
  category: ServiceCategory;
  name: string;
  price: string;
  bookingLabel: string;
  description: string;
  details: string[];
  icon: ServiceIcon;
};

export const serviceCategories: ServiceCategory[] = ["Sport", "Wedding", "Event"];

export const sportNote =
  "Pricelist sport berdurasi 2 jam. Penambahan waktu dan kebutuhan lain bisa dikonfirmasi lewat admin.";

export const services: ServicePackage[] = [
  {
    id: "football-1-team",
    category: "Sport",
    name: "Football 1 Team",
    price: "Rp400K",
    bookingLabel: "Football 1 Team - Rp400K",
    description: "Dokumentasi satu tim untuk match day, latihan, atau konten klub.",
    details: ["Durasi 2 jam", "Highlight pemain dan tim", "Output siap feed"],
    icon: "football",
  },
  {
    id: "football-sparing",
    category: "Sport",
    name: "Football Sparing",
    price: "Rp500K",
    bookingLabel: "Football Sparing - Rp500K",
    description: "Coverage pertandingan sparing dengan fokus aksi dua tim.",
    details: ["Aksi pertandingan", "Momen intens", "Angle publikasi"],
    icon: "football",
  },
  {
    id: "trofeo-fourfeo",
    category: "Sport",
    name: "Trofeo/Fourfeo",
    price: "Rp250K/team",
    bookingLabel: "Trofeo/Fourfeo - Rp250K/team",
    description: "Pilihan efisien untuk mini tournament dengan beberapa tim.",
    details: ["Per tim", "Dokumentasi match", "Seleksi foto rapi"],
    icon: "trophy",
  },
  {
    id: "minisoccer-futsal-1-team",
    category: "Sport",
    name: "Minisoccer/Futsal 1 Team",
    price: "Rp400K",
    bookingLabel: "Minisoccer/Futsal 1 Team - Rp400K",
    description: "Visual cepat untuk tim minisoccer atau futsal.",
    details: ["Portrait tim", "Aksi lapangan", "Clean color edit"],
    icon: "football",
  },
  {
    id: "sparing",
    category: "Sport",
    name: "Sparing",
    price: "Rp500K",
    bookingLabel: "Sparing - Rp500K",
    description: "Dokumentasi sparing untuk kebutuhan arsip dan publikasi.",
    details: ["Dua sisi permainan", "Ekspresi pemain", "File siap upload"],
    icon: "trophy",
  },
  {
    id: "tenis-court",
    category: "Sport",
    name: "Tenis Court",
    price: "Rp500K",
    bookingLabel: "Tenis Court - Rp500K",
    description: "Coverage tenis dengan detail gerak, rally, dan ekspresi.",
    details: ["Court action", "Detail equipment", "Editing natural"],
    icon: "court",
  },
  {
    id: "padel",
    category: "Sport",
    name: "Padel",
    price: "Rp500K",
    bookingLabel: "Padel - Rp500K",
    description: "Dokumentasi padel untuk match casual, komunitas, atau brand.",
    details: ["Action frame", "Momen tim", "Warna clean"],
    icon: "racket",
  },
  {
    id: "basket-1-team",
    category: "Sport",
    name: "Basket 1 Team",
    price: "Rp400K",
    bookingLabel: "Basket 1 Team - Rp400K",
    description: "Visual satu tim basket dengan nuansa cepat dan dinamis.",
    details: ["Aksi game", "Team moment", "Siap media sosial"],
    icon: "basket",
  },
  {
    id: "basket-sparing",
    category: "Sport",
    name: "Basket Sparing",
    price: "Rp500K",
    bookingLabel: "Basket Sparing - Rp500K",
    description: "Dokumentasi sparing basket dengan highlight permainan.",
    details: ["Dua tim", "Momen scoring", "Coverage 2 jam"],
    icon: "basket",
  },
  {
    id: "badminton",
    category: "Sport",
    name: "Badminton",
    price: "Rp400K",
    bookingLabel: "Badminton - Rp400K",
    description: "Foto badminton untuk komunitas, turnamen kecil, dan latihan.",
    details: ["Rally moment", "Detail atlet", "Hasil clean"],
    icon: "racket",
  },
  {
    id: "video-cinematic",
    category: "Sport",
    name: "Video Cinematic",
    price: "Start from Rp1.000K",
    bookingLabel: "Video Cinematic - Start from Rp1.000K",
    description: "Video pendek dengan rasa cinematic untuk publikasi event.",
    details: ["Konsep visual", "Short highlight", "Estimasi by brief"],
    icon: "video",
  },
  {
    id: "race",
    category: "Sport",
    name: "Race",
    price: "Start from Rp1.000K",
    bookingLabel: "Race - Start from Rp1.000K",
    description: "Coverage race dengan fokus speed, detail, dan atmosfer.",
    details: ["Fast action", "Venue detail", "Brief khusus"],
    icon: "race",
  },
  {
    id: "akad-resepsi",
    category: "Wedding",
    name: "Akad & Resepsi",
    price: "Mulai Rp2JT",
    bookingLabel: "Akad & Resepsi",
    description: "Dokumentasi hari utama dengan tone natural dan personal.",
    details: ["Akad dan resepsi", "Momen keluarga", "Estimasi by konsep"],
    icon: "wedding",
  },
  {
    id: "prewedding",
    category: "Wedding",
    name: "Prewedding",
    price: "Mulai Rp1.5JT",
    bookingLabel: "Prewedding",
    description: "Sesi prewedding clean untuk kebutuhan undangan dan arsip.",
    details: ["Konsep lokasi", "Mood personal", "Arahan pose ringan"],
    icon: "wedding",
  },
  {
    id: "corporate-event",
    category: "Event",
    name: "Corporate Event",
    price: "Mulai Rp1JT",
    bookingLabel: "Corporate Event",
    description: "Dokumentasi acara perusahaan untuk publikasi dan report.",
    details: ["Stage dan crowd", "Speaker moment", "Delivery rapi"],
    icon: "event",
  },
  {
    id: "community-event",
    category: "Event",
    name: "Community Event",
    price: "Mulai Rp850K",
    bookingLabel: "Community Event",
    description: "Coverage event komunitas dengan kebutuhan publikasi cepat.",
    details: ["Suasana acara", "Aktivitas peserta", "Highlight pilihan"],
    icon: "event",
  },
];

export const bookingOptions = services.map((service) => ({
  id: service.id,
  label: service.bookingLabel,
}));
