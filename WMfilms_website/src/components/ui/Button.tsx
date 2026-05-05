import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border-wm-red bg-wm-red text-white hover:border-red-500 hover:bg-red-500 focus-visible:outline-wm-red",
  secondary:
    "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15 focus-visible:outline-white",
  ghost:
    "border-white/10 bg-transparent text-white/80 hover:border-wm-red/60 hover:text-white focus-visible:outline-wm-red",
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClass, variants[variant], className)}
      {...props}
    />
  );
}

export function AnchorButton({
  className,
  variant = "primary",
  ...props
}: AnchorButtonProps) {
  return (
    <a className={cn(baseClass, variants[variant], className)} {...props} />
  );
}
