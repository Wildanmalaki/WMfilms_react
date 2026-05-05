import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="wm-eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-7 text-zinc-300 sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
