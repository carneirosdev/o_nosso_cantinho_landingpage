import { site } from "@/lib/site-config";
import { whatsappMessages } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ReservationForm } from "./ReservationForm";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { SocialLinks } from "./SocialLinks";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, ArrowIcon } from "./icons";

const mapsQuery = encodeURIComponent(site.contact.mapsPlaceQuery);
const mapEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const mapDirections = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export function Contact() {
  return (
    <section id="contacto" className="section bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Reservas & Contacto"
          title="Fale connosco ou reserve já"
          description="Reserve uma mesa, um lugar na piscina ou o espaço para o seu evento. Respondemos por WhatsApp ou telefone."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Coluna de contactos */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={site.contact.phoneHref}
                className="flex items-start gap-3 rounded-xl border border-ink/10 p-4 transition-colors hover:border-ink/25"
              >
                <PhoneIcon className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Telefone
                  </span>
                  <span className="text-sm font-medium text-ink">{site.contact.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-start gap-3 rounded-xl border border-ink/10 p-4 transition-colors hover:border-ink/25"
              >
                <MailIcon className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    E-mail
                  </span>
                  <span className="break-all text-sm font-medium text-ink">
                    {site.contact.email}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-ink/10 p-4 sm:col-span-2">
                <PinIcon className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Morada
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {site.contact.addressLine}, {site.contact.addressCity}
                  </span>
                  <a
                    href={mapDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-lagoon-dark hover:text-lagoon"
                  >
                    Obter direções <ArrowIcon width={15} height={15} />
                  </a>
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-ink/10 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                <ClockIcon width={15} height={15} /> Horário de funcionamento
              </p>
              <dl className="mt-2 space-y-1 text-sm">
                {site.openingHours.map((o) => (
                  <div key={o.days} className="flex justify-between gap-4">
                    <dt className="text-ink-muted">{o.days}</dt>
                    <dd className="font-medium text-ink">{o.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Siga-nos
              </p>
              <SocialLinks className="mt-2" source="contact" />
            </div>

            <div className="flex flex-wrap gap-3">
              <WhatsAppCTA
                message={whatsappMessages.reservationGeneric}
                source="contact_section"
                className="btn-secondary"
                label="Reservar por WhatsApp"
              />
              <a href={site.contact.phoneHref} className="btn-outline">
                <PhoneIcon width={18} height={18} /> Ligar
              </a>
            </div>

            {/* RF-014 — Localização / Mapa */}
            <Reveal className="overflow-hidden rounded-xl border border-ink/10">
              <iframe
                title={`Mapa da localização de ${site.name}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </Reveal>
            {site.contentFlags.contactsArePlaceholder && (
              <p className="text-xs text-ink-muted">
                * Contactos, morada e localização no mapa são provisórios e serão
                atualizados com os dados oficiais do estabelecimento.
              </p>
            )}
          </div>

          {/* Coluna do formulário de reserva */}
          <Reveal
            id="reservar"
            className="h-fit scroll-mt-24 rounded-2xl bg-cream p-6 shadow-md ring-1 ring-ink/5 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Pedido de reserva</h3>
            <p className="mt-1 text-sm text-ink-muted">
              Mesa, piscina ou evento. Campos com <span className="text-brand">*</span> são
              obrigatórios.
            </p>
            <div className="mt-5">
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
