// Analytics básico (secção 14.3 do SRS). Envia eventos para o GA4 se
// NEXT_PUBLIC_GA_ID estiver definido; caso contrário, apenas regista na consola
// em ambiente de desenvolvimento. Nunca falha silenciosamente o resto da app.

export type AnalyticsEvent =
  | "page_view"
  | "click_reservation"
  | "click_whatsapp"
  | "click_event_request"
  | "submit_reservation"
  | "submit_event_request"
  | "view_menu"
  | "view_gallery"
  | "click_social";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function track(event: AnalyticsEvent, params: Params = {}): void {
  try {
    if (typeof window === "undefined") return;
    if (GA_ID && typeof window.gtag === "function") {
      window.gtag("event", event, params);
    } else if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", event, params);
    }
  } catch {
    /* nunca propagar erros de analytics */
  }
}
