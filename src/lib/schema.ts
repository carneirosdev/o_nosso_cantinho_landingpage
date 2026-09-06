import { z } from "zod";

// Validação de telefone tolerante a formatos locais (Angola e internacional):
// aceita dígitos, espaços, +, -, () — entre 9 e 15 dígitos.
const phoneRegex = /^[+]?[\d\s().-]{9,20}$/;
const digitsOnly = (v: string) => v.replace(/\D/g, "");

export const reservationTypes = ["Mesa", "Piscina", "Evento"] as const;

export const eventTypes = [
  "Casamento",
  "Aniversário",
  "Festa privada",
  "Evento empresarial",
  "Confraternização",
  "Outro",
] as const;

// RF-011 — Reservas (dados mínimos)
export const reservationSchema = z.object({
  type: z.enum(reservationTypes, {
    errorMap: () => ({ message: "Selecione o tipo de reserva." }),
  }),
  name: z.string().trim().min(2, "Indique o seu nome."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Telefone inválido.")
    .refine((v) => digitsOnly(v).length >= 9, "Telefone inválido."),
  date: z
    .string()
    .min(1, "Selecione uma data.")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Data inválida.")
    .refine((v) => {
      const d = new Date(v);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return d >= today;
    }, "A data não pode ser no passado."),
  time: z.string().min(1, "Selecione uma hora."),
  people: z.coerce
    .number({ invalid_type_error: "Indique o número de pessoas." })
    .int("Número inválido.")
    .min(1, "O número de pessoas deve ser maior que zero.")
    .max(500, "Para grupos muito grandes, contacte-nos diretamente."),
  notes: z.string().trim().max(600, "Mensagem demasiado longa.").optional(),
});

export type ReservationValues = z.infer<typeof reservationSchema>;

// RF-010 — Solicitação de Evento
export const eventSchema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Telefone inválido.")
    .refine((v) => digitsOnly(v).length >= 9, "Telefone inválido."),
  email: z
    .string()
    .trim()
    .email("E-mail inválido.")
    .optional()
    .or(z.literal("")),
  eventType: z.enum(eventTypes, {
    errorMap: () => ({ message: "Selecione o tipo de evento." }),
  }),
  date: z
    .string()
    .min(1, "Selecione uma data.")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Data inválida.")
    .refine((v) => {
      const d = new Date(v);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return d >= today;
    }, "A data não pode ser no passado."),
  time: z.string().optional(),
  guests: z.coerce
    .number({ invalid_type_error: "Indique o número de convidados." })
    .int("Número inválido.")
    .min(1, "O número de convidados deve ser maior que zero.")
    .max(2000, "Para eventos muito grandes, contacte-nos diretamente."),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1000, "Mensagem demasiado longa.").optional(),
});

export type EventValues = z.infer<typeof eventSchema>;
