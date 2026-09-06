import Link from "next/link";
import { nav, site } from "@/lib/site-config";
import { SocialLinks } from "./SocialLinks";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-white/70">{site.shortDescription}</p>
          <SocialLinks className="mt-4" source="footer" variant="light" />
        </div>

        <nav aria-label="Rodapé">
          <p className="text-sm font-semibold text-white">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-white">Contactos</p>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li className="flex items-start gap-2">
              <PhoneIcon width={16} height={16} className="mt-0.5 shrink-0" />
              <a href={site.contact.phoneHref} className="hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MailIcon width={16} height={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${site.contact.email}`} className="break-all hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon width={16} height={16} className="mt-0.5 shrink-0" />
              <span>
                {site.contact.addressLine}, {site.contact.addressCity}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Horário</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {site.openingHours.map((o) => (
              <li key={o.days}>
                <span className="text-white/70">{o.days}:</span> {o.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
