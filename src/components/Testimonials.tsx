import { testimonials } from "@/lib/content";
import { site } from "@/lib/site-config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { StarIcon } from "./icons";

export function Testimonials() {
  return (
    <section className="section bg-cream-100">
      <div className="container-content">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem quem já nos visitou"
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="div"
              key={t.name}
              delay={i * 90}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
            >
              <div className="flex gap-0.5 text-sand" aria-label={`${t.rating} de 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon
                    key={idx}
                    width={16}
                    height={16}
                    className={idx < t.rating ? "" : "text-ink/15"}
                  />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm text-ink-soft">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
              {t.source && <p className="text-xs text-ink-muted">{t.source}</p>}
            </Reveal>
          ))}
        </div>

        {site.contentFlags.testimonialsAreExamples && (
          <p className="mt-6 text-center text-xs text-ink-muted">
            * Depoimentos apresentados a título de exemplo. Serão substituídos por
            avaliações reais de clientes, com o devido consentimento.
          </p>
        )}
      </div>
    </section>
  );
}
