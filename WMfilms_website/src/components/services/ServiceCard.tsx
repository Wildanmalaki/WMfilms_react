import { ArrowRight } from "lucide-react";
import type { ServicePackage } from "@/lib/pricelist";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { fallbackIcon, serviceIcons } from "./service-icons";

type ServiceCardProps = {
  service: ServicePackage;
  onSelect: (serviceId: string) => void;
};

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon] ?? fallbackIcon;

  return (
    <SpotlightCard className="premium-panel group flex h-full flex-col rounded-[8px] border border-white/10 p-5 shadow-black/30 transition duration-200 hover:-translate-y-1 hover:border-wm-red/60 hover:shadow-red-glow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-[8px] border border-wm-red/30 bg-wm-red/10 text-wm-red">
          <Icon size={22} strokeWidth={2.2} />
        </div>
        <p className="rounded-[6px] border border-wm-gold/30 bg-wm-gold/10 px-3 py-1 text-sm font-black text-wm-gold">
          {service.price}
        </p>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-xl font-black leading-tight text-white">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-zinc-300">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-wm-red" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <Button
          type="button"
          className="mt-6 w-full"
          onClick={() => onSelect(service.id)}
        >
          Pilih Paket
          <ArrowRight size={16} />
        </Button>
      </div>
    </SpotlightCard>
  );
}
