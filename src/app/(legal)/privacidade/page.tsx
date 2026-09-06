import type { Metadata } from "next";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como o ${site.name} trata os dados pessoais recolhidos através do site.`,
};

export default function PrivacidadePage() {
  return (
    <>
      <h1>Política de Privacidade</h1>
      <p className="text-ink-muted">
        <em>
          Modelo provisório — a rever com aconselhamento jurídico antes da
          publicação (secção 15 do SRS).
        </em>
      </p>

      <h2>1. Responsável pelo tratamento</h2>
      <p>
        {site.legalName}, contactável através de {site.contact.email} e{" "}
        {site.contact.phone}.
      </p>

      <h2>2. Que dados recolhemos</h2>
      <p>
        Através dos formulários de reserva e de pedido de evento, recolhemos apenas
        os dados que nos fornece voluntariamente: nome, telefone, e-mail (opcional),
        datas, número de pessoas e mensagens que decida incluir.
      </p>

      <h2>3. Finalidade e base legal</h2>
      <ul>
        <li>Responder a pedidos de reserva, orçamento e contacto (diligências pré-contratuais);</li>
        <li>Gerir a comunicação consigo sobre o pedido efetuado.</li>
      </ul>
      <p>
        Ao submeter o formulário, os dados são encaminhados para o nosso número de
        WhatsApp para tratamento do pedido. Não são armazenados neste website.
      </p>

      <h2>4. Conservação</h2>
      <p>
        Os dados são conservados apenas durante o tempo necessário para responder ao
        pedido e cumprir eventuais obrigações legais.
      </p>

      <h2>5. Os seus direitos</h2>
      <p>
        Pode solicitar o acesso, retificação ou eliminação dos seus dados, bem como
        opor-se ao respetivo tratamento, contactando-nos pelos meios indicados acima.
      </p>

      <h2>6. Cookies e analítica</h2>
      <p>
        Este site pode utilizar ferramentas de analítica web (por exemplo, Google
        Analytics) com IP anonimizado, apenas para medir a utilização do site.
      </p>
    </>
  );
}
