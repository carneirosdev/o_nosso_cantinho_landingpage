import Image from "next/image";
import { eventTypeCards, eventFeatures } from "@/lib/content";
import { whatsappMessages } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EventForm } from "./EventForm";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { CheckIcon } from "./icons";

export function Events() {
  return (
    <section id="eventos" className="section bg-cream">
      <div className="container-content">
        <SectionHeading
          eyebrow="Eventos"
          title="Celebre à beira da piscina"
          description="O nosso espaço acolhe casamentos, aniversários e festas privadas num ambiente ao ar livre, com o apoio da nossa cozinha e equipa. Conte-nos o que imagina e preparamos uma proposta à medida."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypeCards.map((c, i) => (
            <Reveal
              as="div"
              key={c.name}
              delay={i * 70}
              className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-ink/5"
            >
              <h3 className="font-semibold text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{c.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/evento.jpg"
                  alt="Cerimónia de casamento montada junto à piscina, com cadeiras brancas e arco floral"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/evento-2.jpg"
                  alt="Decoração de casamento branca à beira da piscina"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/evento-3.jpg"
                  alt="Mesa de doces iluminada a azul durante um evento noturno"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <ul className="mt-6 space-y-2.5">
              {eventFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-lagoon" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <Reveal
            className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-ink/5 sm:p-8"
            id="agendar"
          >
            <h3 className="text-xl font-semibold">Solicitar orçamento</h3>
            <p className="mt-1 text-sm text-ink-muted">
              Preencha os dados abaixo. Campos com <span className="text-brand">*</span> são
              obrigatórios.
            </p>
            <div className="mt-5">
              <EventForm />
            </div>
            <div className="mt-5 border-t border-ink/10 pt-4">
              <p className="text-sm text-ink-muted">Prefere falar já connosco?</p>
              <WhatsAppCTA
                message={whatsappMessages.eventGeneric}
                source="events_section"
                className="btn-secondary mt-2"
                label="Falar por WhatsApp"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
