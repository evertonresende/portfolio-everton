"use client";

import { useEffect, useRef } from "react";

/** [rotação em graus, escala x, escala y, deslocamento x, deslocamento y], em unidades do viewBox 1000×1000. */
type Pose = readonly [number, number, number, number, number];

interface Orbit {
  readonly cx: number;
  readonly cy: number;
  readonly rx: number;
  readonly ry: number;
  readonly from: Pose;
  readonly to: Pose;
}

interface Scene {
  /** exit: anda enquanto a seção sai pelo topo. entry: anda enquanto ela sobe do pé da tela até o topo. */
  readonly mode: "exit" | "entry";
  /** Pose sem JS e com prefers-reduced-motion: 0 = from, 1 = to. */
  readonly rest: 0 | 1;
  /** Deslocamento do par por breakpoint (classe de translate num <g>). */
  readonly offset?: string;
  readonly orbits: readonly [Orbit, Orbit];
}

// Hero: no descanso, a órbita larga fica centrada no retrato e encosta nas linhas das colunas 3 e 11
// do grid (raio = 4 colunas); a alta cruza inclinada. Ao sair, giram e se fecham. No fechamento escuro,
// chegam abertas e assentam num par cruzado: centrado no celular, à direita do título a partir de sm.
const COLUMN = 1000 / 12;
const SCENES: Record<"hero" | "close", Scene> = {
  hero: {
    mode: "exit",
    rest: 0,
    orbits: [
      { cx: 7 * COLUMN, cy: 424, rx: 4 * COLUMN, ry: 230, from: [0, 1, 1, 0, 0], to: [24, 0.6, 1.1, -40, -140] },
      { cx: 7 * COLUMN, cy: 424, rx: 2 * COLUMN, ry: 420, from: [30, 1, 1, 0, 0], to: [-20, 1.2, 0.7, 60, -80] },
    ],
  },
  close: {
    mode: "entry",
    rest: 1,
    offset: "sm:translate-x-[200px]",
    orbits: [
      { cx: 500, cy: 400, rx: 360, ry: 140, from: [-48, 1.7, 1.7, -60, 220], to: [-14, 1, 1, 0, 0] },
      { cx: 500, cy: 400, rx: 300, ry: 170, from: [64, 1.5, 1.5, 80, 260], to: [18, 1, 1, 0, 0] },
    ],
  },
};

const smooth = (t: number) => t * t * (3 - 2 * t);

function transform(orbit: Orbit, t: number) {
  const [r, sx, sy, x, y] = orbit.from.map((a, i) => a + (orbit.to[i]! - a) * t);
  return `translate(${x}px, ${y}px) rotate(${r}deg) scale(${sx}, ${sy})`;
}

const clamp = (p: number) => Math.min(1, Math.max(0, p));

/**
 * exit: 0 com a seção no topo, 1 quando as linhas saem da tela (altura do SVG: no celular, só o
 * quadrado do topo da seção). entry: 0 com o topo da seção no pé da tela, 1 quando ele chega ao topo,
 * ou ao ponto mais alto que a rolagem alcança (em tela alta, a página acaba antes).
 */
function progress(section: Element, svg: SVGSVGElement, mode: Scene["mode"]) {
  const box = section.getBoundingClientRect();
  if (mode === "exit") return clamp(-box.top / Math.max(1, svg.clientHeight));
  const remaining = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
  const end = Math.max(0, box.top - remaining);
  return clamp((window.innerHeight - box.top) / Math.max(1, window.innerHeight - end));
}

/**
 * Linhas finas de fundo (elipses em SVG) que mudam de forma com a rolagem, como melhoria progressiva:
 * - sem JS ou com prefers-reduced-motion, fica parada na pose de descanso;
 * - só escuta rolagem e mouse enquanto as linhas estão na tela;
 * - no mouse (hover + ponteiro fino), as linhas seguem o cursor com atraso, por transição de CSS;
 * - a entrada do hero é CSS (globals.css), então roda no primeiro paint, antes do JS.
 * Vai dentro de uma seção com `relative isolate`.
 */
export function Orbits({ scene: name }: { scene: keyof typeof SCENES }) {
  const scene = SCENES[name];
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.parentElement; // o div do tamanho da seção
    if (!svg || !section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ellipses = Array.from(svg.querySelectorAll("ellipse"));
    const group = svg.querySelector<SVGGElement>("[data-parallax]")!;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let frame = 0;

    const draw = () => {
      frame = 0;
      const t = smooth(progress(section, svg, scene.mode));
      scene.orbits.forEach((orbit, i) => (ellipses[i]!.style.transform = transform(orbit, t)));
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(draw);
    };
    const onPointer = (e: PointerEvent) => {
      group.style.transform = `translate(${(e.clientX / window.innerWidth - 0.5) * 72}px, ${(e.clientY / window.innerHeight - 0.5) * 72}px)`;
    };

    // Observa o SVG, não a seção: no celular ele é só o topo dela, e os listeners saem junto com as linhas.
    // A última entrada do lote é o estado atual; desenhar na saída também acerta a pose depois de um pulo.
    const observer = new IntersectionObserver((entries) => {
      if (entries[entries.length - 1]?.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        if (pointer) window.addEventListener("pointermove", onPointer, { passive: true });
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointer);
      }
      draw();
    });
    observer.observe(svg);
    draw(); // pose certa já no carregamento (recarregar no meio da página), antes de a seção entrar

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(frame);
    };
  }, [scene]);

  // O div corta as linhas na borda da seção; o SVG pode passar do próprio quadro (overflow visível),
  // então no celular, onde ele é um quadrado no topo da seção, as elipses não terminam num corte reto.
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden forced-colors:hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        data-orbits={name}
        className="absolute inset-x-0 top-0 h-full max-h-[100vw] w-full overflow-visible"
      >
        <g className={scene.offset}>
          <g data-parallax className="transition-transform duration-1000 ease-out">
            {scene.orbits.map((orbit) => (
              <ellipse
                key={`${orbit.cx}-${orbit.rx}`}
                cx={orbit.cx}
                cy={orbit.cy}
                rx={orbit.rx}
                ry={orbit.ry}
                fill="none"
                vectorEffect="non-scaling-stroke"
                className="stroke-orbit [transform-box:fill-box] [transform-origin:center]"
                style={{ transform: transform(orbit, scene.rest) }}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
