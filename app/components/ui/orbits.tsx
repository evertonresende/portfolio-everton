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
  readonly entrance: boolean;
  readonly orbits: readonly [Orbit, Orbit];
}

// Duas órbitas grandes que cruzam o hero e se fecham ao sair; no fechamento escuro, chegam abertas e
// assentam num par cruzado atrás do título.
const SCENES: Record<"hero" | "close", Scene> = {
  hero: {
    mode: "exit",
    rest: 0,
    entrance: true,
    orbits: [
      { cx: 560, cy: 470, rx: 520, ry: 380, from: [-16, 1, 1, 0, 0], to: [28, 0.62, 1.12, -40, -140] },
      { cx: 470, cy: 540, rx: 430, ry: 540, from: [24, 1, 1, 0, 0], to: [-18, 1.18, 0.72, 60, -80] },
    ],
  },
  close: {
    mode: "entry",
    rest: 1,
    entrance: false,
    orbits: [
      { cx: 700, cy: 400, rx: 360, ry: 140, from: [-48, 1.7, 1.7, -60, 220], to: [-14, 1, 1, 0, 0] },
      { cx: 700, cy: 400, rx: 300, ry: 170, from: [64, 1.5, 1.5, 80, 260], to: [18, 1, 1, 0, 0] },
    ],
  },
};

const smooth = (t: number) => t * t * (3 - 2 * t);

function transform(orbit: Orbit, t: number) {
  const [r, sx, sy, x, y] = orbit.from.map((a, i) => a + (orbit.to[i]! - a) * t);
  return `translate(${x}px, ${y}px) rotate(${r}deg) scale(${sx}, ${sy})`;
}

function progress(section: Element, mode: Scene["mode"]) {
  const box = section.getBoundingClientRect();
  const p = mode === "exit" ? -box.top / box.height : 1 - box.top / window.innerHeight;
  return Math.min(1, Math.max(0, p));
}

/**
 * Linhas finas de fundo (elipses em SVG) que mudam de forma com a rolagem, como melhoria progressiva:
 * - sem JS ou com prefers-reduced-motion, fica parada na pose de descanso;
 * - só escuta rolagem e mouse enquanto a seção está na tela;
 * - no mouse (hover + ponteiro fino), as linhas seguem o cursor com atraso, por transição de CSS.
 * Vai dentro de uma seção com `relative isolate`.
 */
export function Orbits({ scene: name }: { scene: keyof typeof SCENES }) {
  const scene = SCENES[name];
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.parentElement;
    if (!svg || !section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ellipses = Array.from(svg.querySelectorAll("ellipse"));
    const group = svg.querySelector("g")!;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let frame = 0;

    const draw = () => {
      frame = 0;
      const t = smooth(progress(section, scene.mode));
      scene.orbits.forEach((orbit, i) => (ellipses[i]!.style.transform = transform(orbit, t)));
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(draw);
    };
    const onPointer = (e: PointerEvent) => {
      group.style.transform = `translate(${(e.clientX / window.innerWidth - 0.5) * 28}px, ${(e.clientY / window.innerHeight - 0.5) * 28}px)`;
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        if (pointer) window.addEventListener("pointermove", onPointer, { passive: true });
        draw();
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointer);
      }
    });
    observer.observe(section);
    draw(); // pose certa já no carregamento (recarregar no meio da página), antes de a seção entrar

    if (scene.entrance) {
      svg.animate([{ opacity: 0, transform: "scale(0.88)" }, { opacity: 1, transform: "none" }], {
        duration: 1400,
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(frame);
    };
  }, [scene]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      data-orbits={name}
      // No celular a seção é alta e estreita: a área fica quadrada no topo dela, senão o recorte do
      // slice mostra só um pedaço reto das elipses.
      className="pointer-events-none absolute inset-0 -z-10 size-full max-h-[100vw] forced-colors:hidden"
    >
      <g className="transition-transform duration-1000 ease-out">
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
    </svg>
  );
}
