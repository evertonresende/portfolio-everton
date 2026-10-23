"use client";

import { useEffect } from "react";

/**
 * Entrada suave dos blocos marcados com data-reveal, como melhoria progressiva:
 * - o HTML do servidor já vem visível (sem JS, nada some);
 * - só anima o que está abaixo da dobra no carregamento (o que já está na tela não pisca);
 * - não roda com prefers-reduced-motion.
 */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const below = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
        (el) => el.getBoundingClientRect().top > window.innerHeight,
      );
      const tweens = below.map((el) =>
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        }),
      );
      cleanup = () => tweens.forEach((t) => (t.scrollTrigger?.kill(), t.revert()));
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
