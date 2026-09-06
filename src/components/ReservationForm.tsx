"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  reservationSchema,
  reservationTypes,
  type ReservationValues,
} from "@/lib/schema";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { TextField, TextAreaField, SelectField } from "./Field";
import { FormFeedback, type FormState } from "./FormFeedback";
import { SpinnerIcon } from "./icons";

const todayISO = () => new Date().toISOString().split("T")[0];

function buildMessage(v: ReservationValues) {
  return whatsappMessages.reservation({
    type: v.type,
    name: v.name,
    date: v.date,
    time: v.time,
    people: v.people,
    notes: v.notes || undefined,
  });
}

export function ReservationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [lastMessage, setLastMessage] = useState(whatsappMessages.reservationGeneric);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    mode: "onBlur",
    defaultValues: { type: "Mesa" },
  });

  const onSubmit = async (values: ReservationValues) => {
    setState("submitting");
    const message = buildMessage(values);
    setLastMessage(message);
    track("submit_reservation", { reservation_type: values.type });

    await new Promise((r) => setTimeout(r, 500));

    try {
      const win = window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      if (!win) throw new Error("popup bloqueado");
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success" || state === "error") {
    return (
      <FormFeedback
        state={state}
        whatsappMessage={lastMessage}
        onReset={() => {
          reset();
          setState("idle");
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <SelectField
        as="select"
        label="Tipo de reserva"
        required
        options={reservationTypes}
        placeholder="Selecione…"
        error={errors.type?.message}
        {...register("type")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Nome"
          required
          autoComplete="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <TextField
          label="Telefone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+244 …"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <TextField
          label="Data"
          required
          type="date"
          min={todayISO()}
          error={errors.date?.message}
          {...register("date")}
        />
        <TextField
          label="Hora"
          required
          type="time"
          error={errors.time?.message}
          {...register("time")}
        />
        <TextField
          label="Nº de pessoas"
          required
          type="number"
          inputMode="numeric"
          min={1}
          error={errors.people?.message}
          {...register("people")}
        />
      </div>

      <TextAreaField
        as="textarea"
        label="Observações"
        hint="Opcional — ocasião especial, mesa preferida, restrições alimentares…"
        error={errors.notes?.message}
        {...register("notes")}
      />

      <div className="rounded-lg bg-cream-100 p-3 text-xs text-ink-muted">
        Esta é uma <strong>solicitação de reserva</strong>. A confirmação é feita
        pela nossa equipa por WhatsApp ou telefone.
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary" disabled={state === "submitting"}>
          {state === "submitting" ? (
            <>
              <SpinnerIcon width={18} height={18} /> A enviar…
            </>
          ) : (
            "Enviar pedido de reserva"
          )}
        </button>
      </div>
    </form>
  );
}
