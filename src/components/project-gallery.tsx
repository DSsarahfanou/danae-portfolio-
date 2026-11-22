"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CloseIcon } from "@/components/icons";

type GalleryProps = {
  images: { src: string; alt: string }[];
  title: string;
};

export function ProjectGallery({ images, title }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (direction: 1 | -1) => {
      setActive((current) => {
        if (current === null) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, go]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image.src + index}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800 text-left transition-colors hover:border-gold-400/40"
            aria-label={`Agrandir : ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-4 right-4 rounded-full bg-ink-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              Agrandir
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie ${title}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
            aria-label="Fermer la galerie"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  go(-1);
                }}
                className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:border-gold-400/50 hover:text-gold-300 sm:left-6"
                aria-label="Image précédente"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  go(1);
                }}
                className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:border-gold-400/50 hover:text-gold-300 sm:right-6"
                aria-label="Image suivante"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          )}

          <figure
            className="relative max-h-[86vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-mist">
              {images[active].alt} — {active + 1} / {images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
