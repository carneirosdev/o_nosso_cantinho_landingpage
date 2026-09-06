import type { Metadata } from "next";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description: `Condições de utilização do site do ${site.name}.`,
};

export default function TermosPage() {
  return (
    <>
      <h1>Termos de Utilização</h1>
      <p className="text-ink-muted">
        <em>Modelo provisório — a validar antes da publicação.</em>
      </p>

      <h2>1. Objeto</h2>
      <p>
        Este site tem caráter informativo e destina-se a divulgar os serviços do{" "}
        {site.legalName} e a permitir o envio de pedidos de reserva e de eventos.
      </p>

      <h2>2. Reservas e pedidos de evento</h2>
      <p>
        Os formulários disponíveis constituem <strong>solicitações</strong>. Nenhuma
        reserva ou evento se considera confirmado até comunicação expressa da nossa
        equipa.
      </p>

      <h2>3. Conteúdos</h2>
      <p>
        As imagens, preços e informações apresentados podem ser atualizados sem aviso
        prévio. Em caso de divergência, prevalece a informação prestada diretamente
        pelo estabelecimento.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Os textos, imagens e marca são propriedade do {site.legalName} ou usados com
        autorização, não podendo ser reproduzidos sem consentimento.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Para qualquer questão sobre estes termos, contacte {site.contact.email}.
      </p>
    </>
  );
}
