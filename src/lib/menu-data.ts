/**
 * Menu (RF-007).
 *
 * ⚠️ TODO: itens, descrições e preços são EXEMPLOS para maquetização.
 * Substituir pela carta real do estabelecimento (secção 15 do SRS).
 * A moeda apresentada é o Kwanza (AOA) — ajustar conforme necessário.
 *
 * Estrutura preparada para futura migração para CMS/API (RF-007, secção 13):
 * o componente consome apenas este array; trocar a fonte por um fetch não
 * exige alterações de UI.
 */

export type MenuItem = {
  name: string;
  description?: string;
  price: number; // em AOA
  tags?: ("vegetariano" | "picante" | "destaque")[];
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menuCurrency = "AOA";

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: menuCurrency,
    maximumFractionDigits: 0,
  }).format(value);
}

export const menu: MenuCategory[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    items: [
      {
        name: "Margherita",
        description: "Molho de tomate, mozzarella e manjericão fresco.",
        price: 3500,
        tags: ["vegetariano"],
      },
      {
        name: "Atum & Cebola",
        description: "Molho de tomate, mozzarella, atum, cebola e azeitona.",
        price: 4200,
        tags: ["destaque"],
      },
      {
        name: "Quatro Queijos",
        description: "Mozzarella, parmesão, gorgonzola e queijo flamengo.",
        price: 4500,
        tags: ["vegetariano"],
      },
      {
        name: "Pepperoni Picante",
        description: "Molho de tomate, mozzarella, pepperoni e malagueta.",
        price: 4300,
        tags: ["picante"],
      },
      {
        name: "O Nosso Cantinho",
        description:
          "Especial da casa: fiambre, frango, cogumelos, pimento e milho.",
        price: 4800,
        tags: ["destaque"],
      },
    ],
  },
  {
    id: "hamburgueres",
    name: "Hambúrgueres",
    items: [
      {
        name: "Hambúrguer Clássico",
        description: "Carne de vaca, alface, tomate, cebola e molho da casa. Com batata frita.",
        price: 3200,
      },
      {
        name: "Cheeseburger Duplo",
        description: "Dois hambúrgueres de vaca, queijo cheddar, picles e bacon. Com batata frita.",
        price: 4000,
        tags: ["destaque"],
      },
      {
        name: "Hambúrguer de Frango",
        description: "Peito de frango panado, alface, tomate e maionese. Com batata frita.",
        price: 3300,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Petiscos",
    items: [
      { name: "Bitoque à Portuguesa", description: "Bife, ovo estrelado, batata frita e arroz.", price: 3800, tags: ["destaque"] },
      { name: "Prego no Pão", description: "Bife grelhado em pão fresco com mostarda.", price: 2200 },
      { name: "Rissóis de Camarão (6 un.)", price: 2500 },
      { name: "Asinhas de Frango (8 un.)", description: "Marinada da casa, molho barbecue ou picante.", price: 3000, tags: ["picante"] },
      { name: "Tábua de Petiscos", description: "Seleção de enchidos, queijos e azeitonas.", price: 4500 },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      { name: "Sumo Natural", description: "Laranja, ananás, manga ou melancia.", price: 1200, tags: ["destaque"] },
      { name: "Refrigerante", price: 800 },
      { name: "Água (50 cl)", price: 500 },
      { name: "Cerveja Nacional", price: 900 },
      { name: "Cocktail da Casa", description: "Sem álcool, com fruta fresca.", price: 2000 },
    ],
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    items: [
      { name: "Mousse de Chocolate", price: 1500 },
      { name: "Salada de Fruta Fresca", price: 1300, tags: ["vegetariano"] },
      { name: "Bolo do Dia", description: "Pergunte ao nosso staff a sugestão de hoje.", price: 1600 },
    ],
  },
];
