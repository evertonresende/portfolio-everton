"use client";

import { useEffect } from "react";

const EASE_OUT = "cubic-bezier(0.215, 0.61, 0.355, 1)"; // power3.out

/**
 * Entrada suave dos blocos marcados com data-reveal, como melhoria progressiva:
 * - o HTML do servidor já vem visível (sem JS, nada some);
 * - só anima o que está abaixo da dobra no carregamento (o que já está na tela não pisca);
 * - não roda com prefers-reduced-motion.
 * IntersectionObserver + Web Animations, sem biblioteca: o GSAP custava ~46 KB e ~400 ms de CPU
 * no celular, bem na janela do LCP.
 */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const below = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    below.forEach((el) => (el.style.opacity = "0"));

    // Dispara quando o topo do bloco passa de 90% da altura da tela.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.style.opacity = "";
          el.animate([{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "none" }], {
            duration: 700,
            easing: EASE_OUT,
          });
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    below.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      below.forEach((el) => (el.style.opacity = ""));
    };
  }, []);

  return null;
}
