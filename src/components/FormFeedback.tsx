import { whatsappLink } from "@/lib/whatsapp";
import { CheckIcon, WhatsAppIcon } from "./icons";

export type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  state: FormState;
  /** mensagem de WhatsApp associada, para o link de recurso */
  whatsappMessage: string;
  onReset: () => void;
};

export function FormFeedback({ state, whatsappMessage, onReset }: Props) {
  if (state === "success") {
    return (
      <div className="rounded-xl border border-lagoon/30 bg-lagoon/5 p-5 text-center">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-lagoon text-white">
          <CheckIcon />
        </span>
        <p className="mt-3 font-semibold text-ink">Pedido preparado com sucesso.</p>
        <p className="mt-1 text-sm text-ink-muted">
          Abrimos o WhatsApp com os seus dados preenchidos. É só enviar a mensagem
          e a nossa equipa entrará em contacto consigo.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <WhatsAppIcon width={18} height={18} />
            Abrir WhatsApp novamente
          </a>
          <button type="button" onClick={onReset} className="btn-ghost">
            Fazer novo pedido
          </button>
        </div>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="rounded-xl border border-brand/30 bg-brand/5 p-5 text-center">
        <p className="font-semibold text-brand-dark">
          Não foi possível abrir o WhatsApp automaticamente.
        </p>
        <p className="mt-1 text-sm text-ink-muted">
          Tente novamente ou fale connosco diretamente pelo botão abaixo.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <WhatsAppIcon width={18} height={18} />
            Enviar via WhatsApp
          </a>
          <button type="button" onClick={onReset} className="btn-ghost">
            Voltar ao formulário
          </button>
        </div>
      </div>
    );
  }

  return null;
}
