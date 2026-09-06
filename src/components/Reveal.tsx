"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** atraso em ms para efeito escalonado */
  delay?: number;
  as?: "div" | "li" | "section";
  id?: string;
};

/**
 * Anima o conteúdo com um fade-up subtil quando entra no ecrã.
 *
 * Estratégia à prova de falhas: o conteúdo é renderizado VISÍVEL no servidor e
 * sem JavaScript. O estado "escondido" só é aplicado depois de o componente
 * montar no cliente e apenas se houver suporte a IntersectionObserver e o
 * utilizador não tiver pedido movimento reduzido.
 */
export function Reveal({ children, className = "", delay = 0, as = "div", id }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = mounted && !revealed;
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      id={id}
      data-reveal=""
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        hidden ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
