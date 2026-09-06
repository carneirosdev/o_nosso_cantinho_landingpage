"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, eventTypes, type EventValues } from "@/lib/schema";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { TextField, TextAreaField, SelectField } from "./Field";
import { FormFeedback, type FormState } from "./FormFeedback";
import { SpinnerIcon } from "./icons";

const todayISO = () => new Date().toISOString().split("T")[0];

function buildMessage(v: EventValues) {
  return whatsappMessages.event({
    name: v.name,
    phone: v.phone,
    email: v.email || undefined,
    eventType: v.eventType,
    date: v.date,
    time: v.time || undefined,
    guests: v.guests,
    budget: v.budget || undefined,
    message: v.message || undefined,
  });
}

export function EventForm() {
  const [state, setState] = useState<FormState>("idle");
  const [lastMessage, setLastMessage] = useState(whatsappMessages.eventGeneric);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventValues>({
    resolver: zodResolver(eventSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: EventValues) => {
    setState("submitting");
    const message = buildMessage(values);
    setLastMessage(message);
    track("submit_event_request", { event_type: values.eventType });

    await new Promise((r) => setTimeout(r, 500));

    try {
      const win = window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      if (!win) throw new Error("popup bloqueado");
      setState("success");
    } catch {
      setState("error");
    }
  };

  const backToForm = () => setState("idle");

  if (state === "success" || state === "error") {
    return (
      <FormFeedback
        state={state}
        whatsappMessage={lastMessage}
        onReset={() => {
          reset();
          backToForm();
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
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

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="E-mail"
          type="email"
          inputMode="email"
          autoComplete="email"
          hint="Opcional"
          error={errors.email?.message}
          {...register("email")}
        />
        <SelectField
          as="select"
          label="Tipo de evento"
          required
          options={eventTypes}
          placeholder="Selecione o tipo…"
          error={errors.eventType?.message}
          {...register("eventType")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <TextField
          label="Data pretendida"
          required
          type="date"
          min={todayISO()}
          error={errors.date?.message}
          {...register("date")}
        />
        <TextField
          label="Horário"
          type="time"
          hint="Opcional"
          error={errors.time?.message}
          {...register("time")}
        />
        <TextField
          label="Nº de convidados"
          required
          type="number"
          inputMode="numeric"
          min={1}
          error={errors.guests?.message}
          {...register("guests")}
        />
      </div>

      <TextField
        label="Orçamento estimado"
        hint="Opcional"
        placeholder="Ex.: até 500 000 AOA"
        error={errors.budget?.message}
        {...register("budget")}
      />

      <TextAreaField
        as="textarea"
        label="Mensagem"
        hint="Conte-nos mais sobre o evento: estilo, serviços que procura, etc."
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button type="submit" className="btn-primary" disabled={state === "submitting"}>
          {state === "submitting" ? (
            <>
              <SpinnerIcon width={18} height={18} /> A enviar…
            </>
          ) : (
            "Solicitar orçamento"
          )}
        </button>
        <p className="text-xs text-ink-muted">
          O pedido é enviado por WhatsApp com os seus dados já preenchidos.
        </p>
      </div>
    </form>
  );
}
