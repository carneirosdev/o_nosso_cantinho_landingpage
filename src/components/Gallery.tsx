"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { gallery, galleryCategories } from "@/lib/content";
import { track } from "@/lib/analytics";
import { SectionHeading } from "./SectionHeading";
import { CloseIcon, ArrowIcon } from "./icons";

export function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("Todas");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items =
    filter === "Todas" ? gallery : gallery.filter((g) => g.category === filter);

  useEffect(() => {
    track("view_gallery");
  }, []);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        return (i + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, show]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section id="galeria" className="section bg-cream">
      <div className="container-content">
        <SectionHeading
          eyebrow="Galeria"
          title="O espaço em imagens"
          description="Restaurante, gastronomia, piscina e eventos que já aconteceram no nosso cantinho."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-ink text-white"
                  : "bg-white text-ink-muted ring-1 ring-ink/10 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-ink/5"
                aria-label={`Abrir imagem: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-left text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {img.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <CloseIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
            aria-label="Imagem anterior"
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
          >
            <ArrowIcon className="rotate-180" width={22} height={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
            aria-label="Imagem seguinte"
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
          >
            <ArrowIcon width={22} height={22} />
          </button>

          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
