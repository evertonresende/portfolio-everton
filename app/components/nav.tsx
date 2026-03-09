"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "work", label: "Projetos" },
  { href: "about", label: "Sobre" },
  { href: "contact", label: "Contato" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fafafa]/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground hover:opacity-50 transition-opacity duration-200"
        >
          Everton Resende
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative w-6 h-4 flex flex-col justify-between"
          aria-label="Menu"
        >
          <span
            className={`block h-[1px] w-full bg-foreground transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-full bg-foreground transition-opacity duration-150 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-full bg-foreground transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          menuOpen
            ? "max-h-48 bg-[#fafafa]/95 backdrop-blur-xl border-b border-border"
            : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
