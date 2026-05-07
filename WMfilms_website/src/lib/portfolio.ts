import { images } from "@/lib/images";

export type PortfolioCategory = "Sport" | "Wedding" | "Event";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  label: string;
  description: string;
  image: string;
  client: string;
  year: string;
};

export const portfolioCategories: Array<"All" | PortfolioCategory> = [
  "All",
  "Sport",
  "Wedding",
  "Event",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "match-day-football",
    title: "Match Day Football",
    category: "Sport",
    label: "Sport",
    description:
      "Dokumentasi pertandingan dengan fokus ke momen intens, duel pemain, dan ekspresi di lapangan.",
    image: images.matchDay,
    client: "Football Team",
    year: "2026",
  },
  {
    id: "team-story",
    title: "Team Story",
    category: "Sport",
    label: "Sport Team",
    description:
      "Visual tim untuk kebutuhan feed, media kit, dan arsip klub dengan tone clean.",
    image: images.teamStory,
    client: "Sport Club",
    year: "2026",
  },
  {
    id: "basket-sparing",
    title: "Basket Sparing",
    category: "Sport",
    label: "Sport",
    description:
      "Coverage sparing basket, mulai dari action frame, bench moment, sampai team highlight.",
    image: images.matchDay,
    client: "Basket Team",
    year: "2026",
  },
  {
    id: "race-highlight",
    title: "Race Highlight",
    category: "Sport",
    label: "Race",
    description:
      "Dokumentasi race dengan emphasis pada speed, atmosfer venue, dan detail peserta.",
    image: images.teamStory,
    client: "Race Event",
    year: "2026",
  },
  {
    id: "wedding-moment",
    title: "Wedding Moment",
    category: "Wedding",
    label: "Wedding",
    description:
      "Dokumentasi personal dengan warna natural, clean, dan momen keluarga yang hangat.",
    image: images.wedding,
    client: "Wedding Client",
    year: "2026",
  },
  {
    id: "prewedding-session",
    title: "Prewedding Session",
    category: "Wedding",
    label: "Prewedding",
    description:
      "Sesi couple portrait dengan konsep yang rapi untuk kebutuhan undangan dan arsip personal.",
    image: images.wedding,
    client: "Prewedding Client",
    year: "2026",
  },
  {
    id: "event-highlight",
    title: "Event Highlight",
    category: "Event",
    label: "Event",
    description:
      "Dokumentasi acara, panggung, crowd, speaker, dan kebutuhan publikasi cepat.",
    image: images.event,
    client: "Community Event",
    year: "2026",
  },
  {
    id: "corporate-event",
    title: "Corporate Event",
    category: "Event",
    label: "Corporate",
    description:
      "Coverage acara perusahaan dengan visual yang siap digunakan untuk report dan publikasi.",
    image: images.event,
    client: "Corporate Client",
    year: "2026",
  },
];
