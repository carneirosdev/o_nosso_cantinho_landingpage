# O Nosso Cantinho — Landing Page

Landing page e ponto central de conversão digital para **O Nosso Cantinho — Café,
Snack Bar & Pizzaria**: restaurante, pizzaria, snack-bar, piscina e espaço para
eventos.

Implementação da versão MVP descrita em
[`docs/SRS_Landing_Page_Restaurante_Eventos.md`](docs/SRS_Landing_Page_Restaurante_Eventos.md).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3**
- **React Hook Form** + **Zod** (validação de formulários)
- Imagens otimizadas com `next/image` (AVIF/WebP, lazy loading)
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (`Restaurant`)
- Analytics opcional via Google Analytics 4

## Arrancar o projeto

```bash
npm install
cp .env.example .env.local   # e preencher as variáveis
npm run dev                  # http://localhost:3000
```

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # ESLint
```

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (SEO, sitemap, Open Graph). |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4 (opcional). Sem valor → analítica desativada. |

## Estrutura

```
src/
  app/
    layout.tsx            # metadata, fontes, JSON-LD, analytics
    page.tsx              # composição da landing page
    sitemap.ts / robots.ts
    (legal)/              # /privacidade e /termos
  components/             # secções e UI
  lib/
    site-config.ts        # ⚠️ CONTACTOS, HORÁRIOS, REDES — placeholders a substituir
    menu-data.ts          # ⚠️ menu e preços de exemplo
    content.ts            # serviços, galeria, eventos, depoimentos
    schema.ts             # esquemas Zod (reservas e eventos)
    whatsapp.ts           # deep links wa.me com mensagem pré-preenchida
    analytics.ts          # eventos GA4
assets/images/            # originais fornecidos pelo cliente
public/images/            # cópias servidas pelo site
```

## Formulários (MVP)

Conforme o SRS, os formulários funcionam como **solicitação** (sem confirmação
automática). Ao submeter, os dados são validados e é aberto o **WhatsApp** com uma
mensagem pré-preenchida. Não existe backend nesta versão.

Para evoluir para submissão via API/e-mail (V2), substituir o `window.open(...)`
em `EventForm.tsx` / `ReservationForm.tsx` por um `POST` ao endpoint (ver
secção 13 do SRS).

## ⚠️ Antes de ir para produção

Ver [`docs/CONTEUDO-A-VALIDAR.md`](docs/CONTEUDO-A-VALIDAR.md). Em resumo:

- [ ] Substituir todos os contactos, morada, coordenadas e horários em `src/lib/site-config.ts`
- [ ] Ligar os perfis de redes sociais reais
- [ ] Substituir o menu e os preços de exemplo (`src/lib/menu-data.ts`)
- [ ] Confirmar horário, preço e regras da piscina
- [ ] Substituir ou remover os depoimentos de exemplo (`src/lib/content.ts`)
- [ ] Rever textos legais em `/privacidade` e `/termos`
- [ ] Definir `NEXT_PUBLIC_SITE_URL` e (opcional) `NEXT_PUBLIC_GA_ID`
- [ ] Otimizar/redimensionar as imagens originais se necessário

## Deploy

Preparado para **Vercel** (deteta Next.js automaticamente). Definir as variáveis
de ambiente no painel do projeto.
