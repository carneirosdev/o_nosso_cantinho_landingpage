/**
 * Configuração central do site.
 *
 * ⚠️ TODO (conteúdo real — RF-013/RF-014/RF-015 e secção 15 do SRS):
 * Todos os valores marcados com `TODO` são placeholders e DEVEM ser
 * substituídos por informação real fornecida/validada pelo cliente antes
 * de ir para produção. Nenhum destes dados deve ser inventado publicamente.
 */

export type NavItem = { label: string; href: string };

export const site = {
  name: "O Nosso Cantinho",
  legalName: "O Nosso Cantinho — Café, Snack Bar & Pizzaria",
  tagline: "Um espaço para comer, relaxar e celebrar.",
  shortDescription:
    "Restaurante, pizzaria e snack-bar com piscina e espaço para eventos. Gastronomia, lazer e celebrações no mesmo lugar.",

  // TODO: confirmar cidade/localidade para SEO local (secção 17 do SRS)
  city: "Luanda",
  country: "Angola",

  // TODO: substituir por contactos reais
  contact: {
    phone: "+244 900 000 000", // TODO
    phoneHref: "tel:+244900000000", // TODO
    whatsapp: "244900000000", // TODO — apenas dígitos, com indicativo do país
    email: "geral@onossocantinho.ao", // TODO
    addressLine: "Cabassango", // TODO
    addressCity: "Cabinda", // TODO
    // TODO: coordenadas reais do estabelecimento
    latitude: -8.8383,
    longitude: 13.2344,
    // TODO: colar o link de partilha do Google Maps do estabelecimento
    mapsPlaceQuery: "O Nosso Cantinho Café Snack Bar Pizzaria Luanda",
  },

  // TODO: confirmar horários reais (secção 15 do SRS)
  openingHours: [
    { days: "Segunda a Quinta", hours: "12:00 – 23:00" },
    { days: "Sexta e Sábado", hours: "12:00 – 02:00" },
    { days: "Domingo", hours: "12:00 – 22:00" },
  ],

  // TODO: confirmar informação real da piscina (RF-006)
  pool: {
    schedule: "Todos os dias, 10:00 – 19:00",
    price: "Sob consulta", // TODO: preço real
    rules: [
      "Crianças até 12 anos acompanhadas por um adulto.",
      "Uso obrigatório de fato de banho.",
      "Não é permitido vidro na zona da piscina.",
      "Toalhas e espreguiçadeiras sujeitas a disponibilidade.",
    ],
    reservationNote:
      "Recomendamos reserva para fins de semana e feriados, sobretudo para grupos.",
  },

  // TODO: substituir por perfis oficiais (RF-015 — links configuráveis)
  social: {
    instagram: "https://www.instagram.com/o_nosso_cantinho.cabinda/", // TODO
    facebook: "https://facebook.com/o_nosso_cantinho.cabinda/", // TODO
    tiktok: "", // TODO (opcional)
  },

  // Sinalizadores de conteúdo por validar (evita passar dados fictícios como reais em produção)
  contentFlags: {
    pricesArePlaceholder: true, // menu e piscina — secção 15 do SRS
    testimonialsAreExamples: true, // RF-016 — "Nenhuma avaliação deverá ser inventada"
    contactsArePlaceholder: true,
  },
} as const;

export const nav: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Menu", href: "#menu" },
  { label: "Piscina", href: "#piscina" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://onossocantinho.example";
