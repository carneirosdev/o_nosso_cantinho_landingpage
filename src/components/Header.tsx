"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-cream/95 shadow-sm backdrop-blur"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between lg:h-20">
        <Link
          href="#inicio"
          className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                scrolled ? "text-ink-soft" : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#reservar"
            className="btn-primary !px-5 !py-2.5"
            onClick={() => track("click_reservation", { source: "header" })}
          >
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          className={`lg:hidden ${scrolled || open ? "text-ink" : "text-white"}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon width={26} height={26} /> : <MenuIcon width={26} height={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <nav className="container-content flex flex-col py-4" aria-label="Navegação principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink-soft hover:bg-ink/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#reservar"
              className="btn-primary mt-3"
              onClick={() => {
                track("click_reservation", { source: "header_mobile" });
                setOpen(false);
              }}
            >
              Reservar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
