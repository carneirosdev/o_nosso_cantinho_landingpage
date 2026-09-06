import { site } from "./site-config";

/** Constrói um link wa.me com mensagem pré-preenchida (RF-012). */
export function whatsappLink(message: string): string {
  const number = site.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: `Olá! Vim através do site do ${site.name} e gostaria de mais informações.`,

  reservationGeneric: `Olá! Gostaria de fazer uma reserva no ${site.name}.`,

  poolInfo: `Olá! Gostaria de informações sobre o acesso e as reservas da piscina do ${site.name}.`,

  eventGeneric: `Olá! Gostaria de informações sobre o aluguer do espaço do ${site.name} para um evento.`,

  reservation: (d: {
    type: string;
    name: string;
    date: string;
    time: string;
    people: number | string;
    notes?: string;
  }) =>
    [
      `Olá! Gostaria de solicitar uma reserva no ${site.name}.`,
      ``,
      `• Tipo: ${d.type}`,
      `• Nome: ${d.name}`,
      `• Data: ${d.date}`,
      `• Hora: ${d.time}`,
      `• Nº de pessoas: ${d.people}`,
      d.notes ? `• Observações: ${d.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n"),

  event: (d: {
    name: string;
    phone: string;
    email?: string;
    eventType: string;
    date: string;
    time?: string;
    guests: number | string;
    budget?: string;
    message?: string;
  }) =>
    [
      `Olá! Gostaria de solicitar um orçamento para um evento no ${site.name}.`,
      ``,
      `• Nome: ${d.name}`,
      `• Telefone: ${d.phone}`,
      d.email ? `• E-mail: ${d.email}` : null,
      `• Tipo de evento: ${d.eventType}`,
      `• Data pretendida: ${d.date}`,
      d.time ? `• Horário pretendido: ${d.time}` : null,
      `• Nº estimado de convidados: ${d.guests}`,
      d.budget ? `• Orçamento estimado: ${d.budget}` : null,
      d.message ? `• Mensagem: ${d.message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
};
