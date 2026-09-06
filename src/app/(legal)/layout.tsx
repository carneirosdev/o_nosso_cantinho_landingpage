import Link from "next/link";
import { site } from "@/lib/site-config";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-ink/10">
        <div className="container-content flex h-16 items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold text-ink">
            {site.name}
          </Link>
          <Link href="/" className="text-sm font-medium text-ink-muted hover:text-ink">
            ← Voltar ao site
          </Link>
        </div>
      </header>
      <main className="container-content max-w-3xl py-14">
        <article className="prose-legal space-y-4 text-sm leading-relaxed text-ink-soft [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </article>
      </main>
    </div>
  );
}
