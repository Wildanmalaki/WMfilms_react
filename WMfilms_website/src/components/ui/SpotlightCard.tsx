"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
};

export function SpotlightCard({
  as: Component = "article",
  className,
  onMouseMove,
  ...props
}: SpotlightCardProps) {
  return (
    <Component
      className={cn("spotlight-card", className)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        event.currentTarget.style.setProperty(
          "--mouse-x",
          `${event.clientX - rect.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--mouse-y",
          `${event.clientY - rect.top}px`,
        );
        onMouseMove?.(event);
      }}
      {...props}
    />
  );
}
