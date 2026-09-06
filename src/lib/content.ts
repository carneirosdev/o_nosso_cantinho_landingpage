/**
 * Conteúdo estruturado de serviços, eventos, galeria e depoimentos.
 * Preparado para futura migração para CMS (secção 8 do SRS).
 */

export type ServiceCard = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

export const services: ServiceCard[] = [
  {
    slug: "pizzaria",
    name: "Pizzaria",
    description:
      "Pizzas de massa fresca feitas no momento, com ingredientes selecionados e o toque da casa.",
    image: "/images/pizza.jpg",
    imageAlt: "Pizza acabada de sair do forno, com queijo derretido e azeitonas",
    cta: { label: "Ver menu", href: "#menu" },
  },
  {
    slug: "snack-bar",
    name: "Snack-Bar",
    description:
      "Petiscos, hambúrgueres, bitoques e sumos naturais para uma refeição rápida ou uma tarde descontraída.",
    image: "/images/bitoque.jpg",
    imageAlt: "Prato de comida servido junto à piscina",
    cta: { label: "Ver menu", href: "#menu" },
  },
  {
    slug: "piscina",
    name: "Piscina",
    description:
      "Um espaço para relaxar ao sol, com esplanada, bar de apoio e ambiente tranquilo para toda a família.",
    image: "/images/piscina.jpg",
    imageAlt: "Piscina exterior com deck de madeira e o letreiro do O Nosso Cantinho",
    cta: { label: "Conhecer piscina", href: "#piscina" },
  },
  {
    slug: "eventos",
    name: "Eventos",
    description:
      "Casamentos, aniversários e festas privadas num espaço versátil, à beira da piscina, com decoração à medida.",
    image: "/images/evento.jpg",
    imageAlt: "Cerimónia de casamento montada junto à piscina, com cadeiras brancas e arco floral",
    cta: { label: "Agendar evento", href: "#eventos" },
  },
];

export type EventTypeCard = { name: string; description: string };

export const eventTypeCards: EventTypeCard[] = [
  { name: "Casamentos", description: "Cerimónia e copo de água num cenário à beira-água." },
  { name: "Aniversários", description: "Do bolo à pista de dança, tratamos de tudo." },
  { name: "Festas privadas", description: "Espaço reservado só para o seu grupo." },
  { name: "Eventos empresariais", description: "Jantares de equipa, lançamentos e confraternizações." },
];

export const eventFeatures: string[] = [
  "Espaço exterior com piscina e deck de madeira",
  "Sala interior climatizada para os dias de chuva",
  "Bar e cozinha próprios — sem catering externo obrigatório",
  "Apoio na decoração e montagem (arcos florais, iluminação, mobiliário)",
  "Estacionamento no local",
  "Capacidade flexível para grupos pequenos a médios", // TODO: número exato de convidados
];

export type GalleryImage = {
  src: string;
  alt: string;
  category:
    | "Restaurante"
    | "Gastronomia"
    | "Piscina"
    | "Espaço exterior"
    | "Eventos"
    | "Casamentos";
  width: number;
  height: number;
};

export const gallery: GalleryImage[] = [
  { src: "/images/banner.jpg", alt: "Piscina ao pôr do sol com esplanada e chapéus de sol", category: "Piscina", width: 1440, height: 1080 },
  { src: "/images/piscina.jpg", alt: "Piscina exterior com deck de madeira e letreiro do restaurante", category: "Piscina", width: 2048, height: 1536 },
  { src: "/images/piscina-noite.jpg", alt: "Piscina iluminada à noite com o letreiro do O Nosso Cantinho", category: "Piscina", width: 960, height: 804 },
  { src: "/images/restaurant-interior-1.jpg", alt: "Sala do restaurante com mesas postas e cadeiras vermelhas", category: "Restaurante", width: 2048, height: 1536 },
  { src: "/images/restaurante-interior-2.jpg", alt: "Interior do restaurante ao final do dia", category: "Restaurante", width: 2048, height: 1536 },
  { src: "/images/restaurante-exterior.jpg", alt: "Entrada e jardim do O Nosso Cantinho", category: "Espaço exterior", width: 960, height: 696 },
  { src: "/images/exterior-2.jpg", alt: "Deck exterior com sofás de vime junto à piscina", category: "Espaço exterior", width: 1080, height: 1080 },
  { src: "/images/pizza.jpg", alt: "Pizza inteira com queijo, atum e azeitonas", category: "Gastronomia", width: 1440, height: 1440 },
  { src: "/images/bitoque.jpg", alt: "Prato de frango grelhado com batata frita e salada", category: "Gastronomia", width: 958, height: 1198 },
  { src: "/images/refeicao-1.jpg", alt: "Marisco em molho servido junto à piscina", category: "Gastronomia", width: 1440, height: 1080 },
  { src: "/images/bebidas.jpg", alt: "Sumos naturais e fruta fresca no balcão do bar", category: "Gastronomia", width: 960, height: 720 },
  { src: "/images/evento.jpg", alt: "Cerimónia de casamento montada junto à piscina", category: "Casamentos", width: 1440, height: 1080 },
  { src: "/images/evento-2.jpg", alt: "Decoração de casamento branca à beira da piscina", category: "Casamentos", width: 960, height: 720 },
  { src: "/images/evento-3.jpg", alt: "Mesa de doces iluminada a azul durante um evento noturno", category: "Eventos", width: 1280, height: 853 },
];

export const galleryCategories = [
  "Todas",
  "Restaurante",
  "Gastronomia",
  "Piscina",
  "Espaço exterior",
  "Eventos",
  "Casamentos",
] as const;

/**
 * RF-016 — Depoimentos.
 * ⚠️ TODO: estes textos são EXEMPLOS de maquetização e NÃO representam
 * avaliações reais. Substituir por testemunhos verificados (com consentimento)
 * ou remover a secção antes de produção — "Nenhuma avaliação deverá ser inventada".
 */
export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  source?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Cliente exemplo A",
    text: "Exemplo de depoimento para maquetização. Ambiente agradável e atendimento simpático.",
    rating: 5,
    source: "Exemplo",
  },
  {
    name: "Cliente exemplo B",
    text: "Exemplo de depoimento para maquetização. A piscina e o espaço para a festa superaram as expectativas.",
    rating: 5,
    source: "Exemplo",
  },
  {
    name: "Cliente exemplo C",
    text: "Exemplo de depoimento para maquetização. As pizzas são o ponto alto para nós.",
    rating: 4,
    source: "Exemplo",
  },
];
