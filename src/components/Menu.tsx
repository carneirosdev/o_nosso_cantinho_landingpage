"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { menu, formatPrice } from "@/lib/menu-data";
import { site } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  {
    name: "Pizzaria",
    image: "/images/pizza.jpg",
    alt: "Pizza inteira com queijo, atum e azeitonas",
    text: "Massa fresca e forno quente. Clássicas ou a especial da casa, sempre feitas no momento.",
  },
  {
    name: "Snack-Bar",
    image: "/images/refeicao-1.jpg",
    alt: "Marisco em molho servido junto à piscina",
    text: "Hambúrgueres, bitoques, petiscos e sumos naturais — perfeitos para uma pausa junto à piscina.",
  },
];

const tagLabels: Record<string, string> = {
  vegetariano: "Vegetariano",
  picante: "Picante",
  destaque: "Destaque",
};

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  useEffect(() => {
    track("view_menu");
  }, []);

  return (
    <section id="menu" className="section bg-cream-100">
      <div className="container-content">
        <SectionHeading
          eyebrow="Gastronomia"
          title="O nosso menu"
          description="Uma carta que vai da pizza ao petisco, do bitoque à sobremesa. Aqui ficam alguns destaques."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal
              as="div"
              key={h.name}
              delay={i * 90}
              className="flex gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                <Image src={h.image} alt={h.alt} fill sizes="112px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{h.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Categorias do menu"
            className="flex flex-wrap gap-2 border-b border-ink/10 pb-1"
          >
            {menu.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                id={`tab-${c.id}`}
                aria-selected={active === c.id}
                aria-controls={`panel-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c.id
                    ? "bg-brand text-white"
                    : "text-ink-muted hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${category.id}`}
            aria-labelledby={`tab-${category.id}`}
            className="mt-6 grid gap-x-10 gap-y-1 sm:grid-cols-2"
          >
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/10 py-3"
              >
                <div>
                  <p className="font-medium text-ink">
                    {item.name}
                    {item.tags?.map((t) => (
                      <span
                        key={t}
                        className="ml-2 rounded-full bg-lagoon/10 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-lagoon-dark"
                      >
                        {tagLabels[t]}
                      </span>
                    ))}
                  </p>
                  {item.description && (
                    <p className="mt-0.5 text-sm text-ink-muted">{item.description}</p>
                  )}
                </div>
                <span className="shrink-0 font-semibold text-ink-soft">
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {site.contentFlags.pricesArePlaceholder && (
          <p className="mt-6 text-xs text-ink-muted">
            * Itens e preços apresentados a título ilustrativo. A carta e os valores
            finais serão confirmados pelo estabelecimento.
          </p>
        )}
      </div>
    </section>
  );
}
