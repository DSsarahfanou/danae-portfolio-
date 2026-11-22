"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { creations, site } from "@/lib/data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons";

export function CreationGrid() {
  const categories = useMemo(
    () => ["Tout", ...Array.from(new Set(creations.map((item) => item.category)))],
    [],
  );
  const [active, setActive] = useState("Tout");

  const filtered =
    active === "Tout"
      ? creations
      : creations.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les créations">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
              active === category
                ? "border-gold-400 bg-gold-400 text-ink-950"
                : "border-white/10 bg-white/[0.03] text-mist-light hover:border-gold-400/40 hover:text-gold-300",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800/50 card-hover"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-700">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
                {item.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mist">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                {item.description}
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Bonjour Danae's Creations ! Je suis intéressé(e) par : ${item.name}. Pouvez-vous me donner les prix et les disponibilités ?`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2.5 text-xs font-semibold text-gold-300 transition-colors hover:bg-gold-400 hover:text-ink-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Commander sur WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
