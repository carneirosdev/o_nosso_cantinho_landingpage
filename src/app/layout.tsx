import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/lib/site-config";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const title = `${site.name} — Restaurante, Pizzaria, Piscina e Eventos`;
const description = site.shortDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "restaurante",
    "pizzaria",
    "snack-bar",
    "piscina",
    "espaço para eventos",
    "casamentos",
    "aniversários",
    site.city,
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/images/banner.jpg",
        width: 1440,
        height: 1080,
        alt: `Piscina e esplanada do ${site.name} ao pôr do sol`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#B21F24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <noscript>
          {/* Sem JavaScript, o conteúdo animado permanece totalmente visível */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Saltar para o conteúdo
        </a>
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
