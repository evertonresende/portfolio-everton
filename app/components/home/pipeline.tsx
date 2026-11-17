"use client";

import { useEffect, useRef } from "react";
import type { NumberedItem } from "../../content/types";

/**
 * Pipeline em linhas grandes. Uma barra escura desliza até a etapa que passou do meio da tela, e essa
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
    let frame = 0;

    // offsetTop conta a partir da borda de dentro da lista; clientTop soma a borda de cima (1px).
    const place = () => {
      if (!active) return;
      bar.style.transform = `translateY(${active.offsetTop + list.clientTop}px)`;
      bar.style.height = `${active.offsetHeight}px`;
    };
    const activate = (row: HTMLElement) => {
      active?.removeAttribute("data-theme");
      active = row;
      row.dataset.theme = "ink";
      place();
      bar.dataset.on = "";
    };
    // A ativa é a última etapa cujo topo já passou do meio da tela, escolhida pela posição: uma rolagem
    // rápida que pula etapas ainda termina na certa. Lista inteira abaixo do meio: volta para a 1ª.
    const pick = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let row: HTMLElement | undefined;
      for (const r of rows) if (r.getBoundingClientRect().top <= middle) row = r;
      row ??= active && rows[0];
      if (row && row !== active) activate(row);
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(pick);
    };

    // Só escuta a rolagem com a lista na tela; escolher também na saída acerta o fim depois de um pulo.
    const observer = new IntersectionObserver((entries) => {
      if (entries[entries.length - 1]?.isIntersecting) window.addEventListener("scroll", onScroll, { passive: true });
      else window.removeEventListener("scroll", onScroll);
      pick();
    });
    observer.observe(list);
    // Troca de fonte, quebra de linha e mudança de largura mudam a altura da lista: a barra acompanha.
    const resize = new ResizeObserver(place);
    resize.observe(list);

    return () => {
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      active?.removeAttribute("data-theme");
      delete bar.dataset.on;
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bg-foreground opacity-0 transition-[transform,height,opacity] duration-500 data-on:opacity-100"
      />
      <ol ref={listRef} role="list" aria-labelledby={labelledBy} className="relative m-0 list-none border-t border-foreground p-0">
        {steps.map((step) => (
          <li key={step.index} className="flex flex-wrap items-baseline gap-y-1 border-b border-rule py-4 transition-colors duration-500">
            <span className="rail-aside label-mono px-gutter text-muted transition-colors duration-500">{step.index}</span>
            {/* A partir de md, as descrições começam na mesma coluna do "3.2" logo abaixo (mesmo grid, sem gap). */}
            <span className="rail-main grid items-baseline gap-y-1 md:grid-cols-2">
              <span className="text-heading-lg px-gutter text-foreground transition-colors duration-500">{step.title}</span>
              <span className="text-body px-gutter text-muted transition-colors duration-500">{step.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
