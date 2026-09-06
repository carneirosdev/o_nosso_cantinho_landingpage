import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-config";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { whatsappMessages } from "@/lib/whatsapp";
import { ArrowIcon } from "./icons";
import { TrackedLink } from "./TrackedLink";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/images/banner.jpg"
        alt={`Piscina e esplanada do ${site.name} ao pôr do sol`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/40" />

      <div className="container-content relative pb-16 pt-28 sm:pt-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sand">
            {site.legalName}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            {site.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TrackedLink
              href="#reservar"
              event="click_reservation"
              eventParams={{ source: "hero" }}
              className="btn-primary"
            >
              Reservar <ArrowIcon width={18} height={18} />
            </TrackedLink>
            <TrackedLink
              href="#eventos"
              event="click_event_request"
              eventParams={{ source: "hero" }}
              className="btn-outline !border-white/40 !bg-white/10 !text-white hover:!bg-white/20"
            >
              Agendar evento
            </TrackedLink>
            <WhatsAppCTA
              message={whatsappMessages.general}
              source="hero"
              className="btn-secondary"
            />
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <li>Restaurante &amp; Pizzaria</li>
            <li aria-hidden="true">·</li>
            <li>Snack-Bar</li>
            <li aria-hidden="true">·</li>
            <li>Piscina</li>
            <li aria-hidden="true">·</li>
            <li>Espaço para eventos</li>
          </ul>
        </div>
      </div>

      <Link
        href="#sobre"
        aria-label="Ver mais"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 hover:text-white sm:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/50 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </span>
      </Link>
    </section>
  );
}
