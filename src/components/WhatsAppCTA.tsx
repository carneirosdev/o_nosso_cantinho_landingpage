"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

type Props = {
  message: string;
  source: string;
  className?: string;
  label?: string;
  showIcon?: boolean;
};

export function WhatsAppCTA({
  message,
  source,
  className = "btn-secondary",
  label = "WhatsApp",
  showIcon = true,
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("click_whatsapp", { source })}
    >
      {showIcon && <WhatsAppIcon width={18} height={18} />}
      {label}
    </a>
  );
}
