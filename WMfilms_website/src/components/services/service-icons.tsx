import {
  Bike,
  Building2,
  Camera,
  CircleDot,
  Dumbbell,
  Heart,
  Trophy,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceIcon } from "@/lib/pricelist";

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  football: CircleDot,
  trophy: Trophy,
  court: Dumbbell,
  basket: CircleDot,
  racket: Dumbbell,
  video: Video,
  race: Bike,
  wedding: Heart,
  event: Building2,
};

export const fallbackIcon = Camera;
