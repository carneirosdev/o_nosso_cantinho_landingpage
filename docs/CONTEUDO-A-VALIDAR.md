# Conteúdo a validar antes de produção

O SRS (secção 15 e RF-016) exige que **não exista conteúdo fictício na versão de
produção**. A implementação atual usa placeholders claramente assinalados. Esta
lista indica o que precisa de ser fornecido/validado pelo cliente e onde alterar.

## 1. Contactos e localização — `src/lib/site-config.ts` → `site.contact`

| Campo | Placeholder atual | A fornecer |
|---|---|---|
| `phone` / `phoneHref` | `+244 900 000 000` | Telefone real |
| `whatsapp` | `244900000000` | Nº WhatsApp (só dígitos, com indicativo) |
| `email` | `geral@onossocantinho.ao` | E-mail real |
| `addressLine` / `addressCity` | `Rua Exemplo, 000, Bairro` | Morada completa |
| `latitude` / `longitude` | Luanda (aprox.) | Coordenadas exatas |
| `mapsPlaceQuery` | Nome do estabelecimento | Nome exato no Google Maps ou link de partilha |

## 2. Horário de funcionamento — `site.openingHours`

Valores atuais são um exemplo. Confirmar dias e horas reais.

## 3. Piscina — `site.pool`

- `schedule` — horário real
- `price` — preço de acesso (atualmente "Sob consulta")
- `rules` — regras oficiais
- `reservationNote` — política de reserva

## 4. Redes sociais — `site.social`

Colar os URLs dos perfis oficiais (Instagram, Facebook, TikTok). Deixar `""`
esconde o ícone respetivo.

## 5. Menu — `src/lib/menu-data.ts`

Todos os itens, descrições e preços são **exemplos**. Substituir pela carta real.
Enquanto `site.contentFlags.pricesArePlaceholder = true`, é mostrado um aviso no
site. Colocar a `false` quando os preços forem reais.

## 6. Depoimentos — `src/lib/content.ts` → `testimonials`

Textos são exemplos de maquetização. Substituir por avaliações reais (com
consentimento) ou remover a secção `<Testimonials />` de `src/app/page.tsx`.
Colocar `site.contentFlags.testimonialsAreExamples = false` quando forem reais.

## 7. Eventos — `src/lib/content.ts` → `eventFeatures`

Confirmar a capacidade máxima de convidados (atualmente genérico).

## 8. Textos legais — `src/app/(legal)/privacidade` e `/termos`

Modelos provisórios. Rever com aconselhamento jurídico.

## 9. Imagens

Originais em `assets/images/` (cópias em `public/images/`). Algumas têm mais de
300 KB — recomenda-se redimensionar/recomprimir para produção (RNF-002). O
`next/image` já serve AVIF/WebP redimensionado, mas o ficheiro-fonte menor ajuda.

## 10. Ambiente

- `NEXT_PUBLIC_SITE_URL` — domínio final
- `NEXT_PUBLIC_GA_ID` — se for usada analítica

## Rastreio de requisitos (SRS → implementação)

| Requisito | Onde |
|---|---|
| RF-001 Hero | `components/Hero.tsx` |
| RF-002 Institucional | `components/About.tsx` |
| RF-003 Serviços | `components/Services.tsx` |
| RF-004/005 Pizzaria & Snack-Bar | `components/Menu.tsx` (destaques) |
| RF-006 Piscina | `components/Pool.tsx` |
| RF-007 Menu | `components/Menu.tsx` + `lib/menu-data.ts` |
| RF-008 Galeria | `components/Gallery.tsx` (grid + lightbox + filtro) |
| RF-009 Eventos | `components/Events.tsx` |
| RF-010 Solicitação de evento | `components/EventForm.tsx` + `lib/schema.ts` |
| RF-011 Reservas | `components/ReservationForm.tsx` + `lib/schema.ts` |
| RF-012 WhatsApp | `lib/whatsapp.ts`, `WhatsAppCTA`, `WhatsAppFloat` |
| RF-013 Contactos | `components/Contact.tsx` |
| RF-014 Localização | `components/Contact.tsx` (iframe Google Maps + direções) |
| RF-015 Redes sociais | `components/SocialLinks.tsx` |
| RF-016 Depoimentos | `components/Testimonials.tsx` |
| RF-017 Footer | `components/Footer.tsx` |
| RNF-002 Performance | `next/image`, fontes `next/font`, lazy loading |
| RNF-003 SEO | `app/layout.tsx`, `sitemap.ts`, `robots.ts`, `JsonLd.tsx` |
| RNF-004 Acessibilidade | HTML semântico, foco visível, skip link, labels, `aria-*` |
| Secção 14.3 Analytics | `lib/analytics.ts` + `components/Analytics.tsx` |
| Secção 19 Estados de interface | `FormFeedback.tsx` (loading/sucesso/erro) |
