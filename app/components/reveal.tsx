"use client";

import { useEffect } from "react";

const EASE_OUT = "cubic-bezier(0.215, 0.61, 0.355, 1)"; // power3.out

// Bloco: só aparece, sem subir. Título (data-reveal="clip"): sobe por trás de uma máscara parada 0,25em
// abaixo da caixa final dele. Subida e recorte andam juntos (a diferença fica sempre em 0,25em), então a
// borda da máscara não se mexe; a folga de 0,25em em volta deixa descendentes e acentos inteiros no fim.
const FADE: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];
const RISE: Keyframe[] = [
  { transform: "translateY(calc(100% + 0.5em))", clipPath: "inset(-0.25em -0.1em calc(100% + 0.25em) -0.1em)" },
  { transform: "none", clipPath: "inset(-0.25em -0.1em -0.25em -0.1em)" },
];

const isClip = (el: HTMLElement) => el.dataset.reveal === "clip";

/**
 * Entrada dos blocos marcados com data-reveal, como melhoria progressiva:
 * - o HTML do servidor já vem visível (sem JS, nada some): o estado escondido só nasce aqui;
 * - só anima o que está abaixo da dobra no carregamento (o que já está na tela não pisca);
 * - o que entra junto na tela entra em sequência, 90 ms entre um e outro;
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
    const reset = (el: HTMLElement) => {
      el.style.opacity = "";
      el.style.clipPath = "";
    };
    below.forEach((el) => {
      if (isClip(el)) el.style.clipPath = "inset(0 0 100% 0)";
      else el.style.opacity = "0";
    });

    // Dispara quando o topo do bloco passa de 90% da altura da tela.
    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          reset(el);
          el.animate(isClip(el) ? RISE : FADE, {
            duration: isClip(el) ? 900 : 600,
            delay: Math.min(order++, 3) * 90,
            easing: EASE_OUT,
            fill: "backwards",
          });
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    below.forEach((el) => observer.observe(el));

    // Tab para dentro de um bloco ainda escondido: mostra na hora, sem esperar a animação.
    const onFocus = (e: FocusEvent) => {
      for (const el of below) {
        if (!el.contains(e.target as Node)) continue;
        observer.unobserve(el);
        reset(el);
      }
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      below.forEach(reset);
    };
  }, []);

  return null;
}
