import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowIcon } from "./icons";

export function Services() {
  return (
    <section id="servicos" className="section bg-ink text-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="O que oferecemos"
          title="Quatro experiências, um só lugar"
          description="Escolha o motivo da visita — nós tratamos do resto."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              as="div"
              key={s.slug}
              delay={i * 90}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-white">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm text-white/70">{s.description}</p>
                <Link
                  href={s.cta.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sand hover:text-white"
                >
                  {s.cta.label}
                  <ArrowIcon width={16} height={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
