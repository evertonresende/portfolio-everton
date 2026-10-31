"use client";

import { useEffect, useRef } from "react";
import type { NumberedItem } from "../../content/types";

/**
 * Pipeline em linhas grandes. Uma barra escura desliza até a etapa que cruza o meio da tela, e essa
 * linha troca para o tema escuro (data-theme="ink"): rolar a página leva o trabalho da spec à produção.
 * Depois da última etapa a barra fica em "Produção". Sem JS ou com prefers-reduced-motion: lista
 * numerada parada, sem barra.
 */
export function Pipeline({ steps, labelledBy }: { steps: readonly NumberedItem[]; labelledBy: string }) {
  const listRef = useRef<HTMLOListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const bar = barRef.current;
    if (!list || !bar || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rows = Array.from(list.children) as HTMLElement[];
    let active: HTMLElement | undefined;

    const place = () => {
      if (!active) return;
      bar.style.transform = `translateY(${active.offsetTop}px)`;
      bar.style.height = `${active.offsetHeight}px`;
    };
    const activate = (row: HTMLElement) => {
      active?.removeAttribute("data-theme");
      active = row;
      row.dataset.theme = "ink";
      place();
      bar.dataset.on = "";
    };

    // Linha de 1% no meio da tela: a etapa que a cruza é a ativa.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) activate(entry.target as HTMLElement);
      },
      { rootMargin: "-49.5% 0px -49.5% 0px" },
    );
    rows.forEach((row) => observer.observe(row));
    window.addEventListener("resize", place);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
      active?.removeAttribute("data-theme");
      delete bar.dataset.on;
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bg-foreground opacity-0 transition-[transform,height,opacity] duration-500 ease-out data-on:opacity-100"
      />
      <ol ref={listRef} role="list" aria-labelledby={labelledBy} className="relative m-0 list-none border-t border-foreground p-0">
        {steps.map((step) => (
          <li key={step.index} className="flex flex-wrap items-baseline gap-y-1 border-b border-rule py-4 transition-colors duration-500">
            <span className="rail-aside label-mono px-gutter text-muted transition-colors duration-500">{step.index}</span>
            {/* A partir de md, as descrições começam todas na mesma coluna, no meio do trilho principal. */}
            <span className="rail-main grid items-baseline gap-y-1 px-gutter md:grid-cols-2 md:gap-x-8">
              <span className="text-heading-lg text-foreground transition-colors duration-500">{step.title}</span>
              <span className="text-body text-muted transition-colors duration-500">{step.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
