import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        O endereço que procura não existe ou foi movido.
      </p>
      <Link href="/" className="btn-primary mt-6">
        Voltar ao início
      </Link>
    </main>
  );
}
