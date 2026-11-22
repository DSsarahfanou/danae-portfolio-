import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
        {align === "left" && <span className="h-px w-8 bg-gold-400/60" />}
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-mist sm:text-[17px]">
          {description}
        </p>
      )}
    </div>
  );
}
