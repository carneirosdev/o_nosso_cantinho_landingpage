import Image from "next/image";
import { site } from "@/lib/site-config";
import { whatsappMessages } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { ClockIcon } from "./icons";

export function Pool() {
  return (
    <section id="piscina" className="section bg-lagoon-dark text-white">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Lazer"
            title="Um mergulho no meio da cidade"
            description="A nossa piscina exterior tem deck de madeira, esplanada com sombra e bar de apoio. Um espaço tranquilo para passar a tarde, com a cozinha e o snack-bar sempre por perto."
            className="[&_.eyebrow]:text-sand [&_h2]:text-white [&_p]:text-white/80"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <ClockIcon width={16} height={16} /> Horário
              </p>
              <p className="mt-1 text-sm text-white/80">{site.pool.schedule}</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
              <p className="text-sm font-semibold">Acesso</p>
              <p className="mt-1 text-sm text-white/80">{site.pool.price}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold">Regras da piscina</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/80">
              {site.pool.rules.map((r) => (
                <li key={r} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sand" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/70">{site.pool.reservationNote}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#reservar" className="btn-outline !border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
              Reservar acesso
            </a>
            <WhatsAppCTA
              message={whatsappMessages.poolInfo}
              source="pool"
              className="btn bg-white text-lagoon-dark hover:bg-white/90"
              label="Pedir informações"
            />
          </div>

          {site.contentFlags.pricesArePlaceholder && (
            <p className="mt-4 text-xs text-white/60">
              * Horário, preço e regras a confirmar pelo estabelecimento.
            </p>
          )}
        </div>

        <Reveal className="order-1 grid grid-cols-2 gap-3 lg:order-2">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/piscina.jpg"
              alt="Piscina exterior com deck de madeira e o letreiro do O Nosso Cantinho"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/piscina-noite.jpg"
              alt="Piscina iluminada à noite"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/exterior-2.jpg"
              alt="Deck exterior com sofás de vime junto à piscina"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
