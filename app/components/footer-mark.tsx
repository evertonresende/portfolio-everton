"use client";

import { useEffect, useRef } from "react";

// Metal líquido em cinza atrás do "E": as coordenadas são torcidas 4 vezes por senos e o resultado
// é lido como reflexo de uma luz larga, que vira uma faixa de brilho escorrendo pelo quadrado preto.
// uTime é uma fase em [0, 2π) que dá a volta em PERIOD_MS: o loop fecha sem salto e o float não perde
// precisão com o tempo crescendo. Por isso uTime só entra em múltiplos inteiros dentro de sin/cos.
// Brilho máximo ~0,14 de luminância: o "E" branco segura contraste de 5:1 em qualquer quadro.
// O dither 2×2 de ±0,5/255 evita faixas visíveis nos cinzas escuros.
const FRAGMENT = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
void main() {
  vec2 p = (2.0 * gl_FragCoord.xy - uRes) / min(uRes.x, uRes.y);
  vec2 q = p * 0.8;
  for (int i = 0; i < 4; i++) {
    float k = float(i) + 1.0;
    q += (0.42 / k) * vec2(sin((0.9 + 0.3 * k) * q.y + uTime + 1.3 * k),
                           cos((0.8 + 0.25 * k) * q.x - uTime + 0.7 * k + 0.6 * sin(uTime)));
  }
  float c = sin(1.5 * (q.y + 0.45 * q.x) + 0.5);
  float key = exp(-9.0 * (c - 0.55) * (c - 0.55));
  float fill = exp(-6.0 * (c + 0.6) * (c + 0.6));
  float v = 0.055 + 0.025 * (0.5 + 0.5 * c) + 0.34 * key + 0.06 * fill;
  vec2 f = mod(floor(gl_FragCoord.xy), 2.0);
  v += (mod(2.0 * f.x + 3.0 * f.y, 4.0) - 1.5) / 3.0 / 255.0;
  gl_FragColor = vec4(vec3(v), 1.0);
}`;
const VERTEX = "attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }";
const PERIOD_MS = 60_000;
const STILL_PHASE = Math.PI; // quadro de prefers-reduced-motion: quase preto, um reflexo longe do quadrado azul

type Field = { readonly gl: WebGLRenderingContext; readonly uTime: WebGLUniformLocation | null };

/** Programa do shader num quadrado que cobre o canvas; null sem WebGL ou se o shader não compilar. */
function createField(canvas: HTMLCanvasElement): Field | null {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false, depth: false });
  const program = gl?.createProgram();
  if (!gl || !program) return null;
  for (const [type, source] of [
    [gl.VERTEX_SHADER, VERTEX],
    [gl.FRAGMENT_SHADER, FRAGMENT],
  ] as const) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(canvas.clientWidth * scale);
  canvas.height = Math.round(canvas.clientHeight * scale);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform2f(gl.getUniformLocation(program, "uRes"), canvas.width, canvas.height);
  return { gl, uTime: gl.getUniformLocation(program, "uTime") };
}

/**
 * Logo do rodapé (o quadrado do favicon) com o campo animado atrás, como melhoria progressiva:
 * - o HTML do servidor já é o quadrado preto com o "E"; sem JS ou sem WebGL, fica assim;
 * - o contexto WebGL só nasce quando o rodapé entra na tela, e o loop para quando ele sai;
 * - aba escondida: o navegador já não chama requestAnimationFrame;
 * - prefers-reduced-motion: desenha um quadro e não anima;
 * - contexto perdido (GPU reiniciada): o canvas some e volta o quadrado estático, em vez do
 *   ícone de erro que o Chrome pinta por cima;
 * - forced-colors: sem o campo, "E" na cor de texto do tema do sistema.
 */
export function FooterMark({ href, label }: { href: string; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let field: Field | null | undefined; // undefined: ainda não tentou criar
    let visible = false;
    let frame = 0;

    function draw(phase: number) {
      if (!field) return;
      field.gl.uniform1f(field.uTime, phase);
      field.gl.drawArrays(field.gl.TRIANGLE_STRIP, 0, 4);
    }

    function loop(now: number) {
      draw(((now % PERIOD_MS) / PERIOD_MS) * 2 * Math.PI);
      frame = requestAnimationFrame(loop);
    }

    function update() {
      cancelAnimationFrame(frame);
      if (!visible) return;
      if (field === undefined) field = createField(canvas!);
      if (!field) return;
      if (motion.matches) draw(STILL_PHASE);
      else frame = requestAnimationFrame(loop);
    }

    // Canvas escondido sai da tela para o observer, que então para o loop.
    const hide = () => {
      canvas.hidden = true;
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) visible = entry.isIntersecting;
      update();
    });
    observer.observe(canvas);
    motion.addEventListener("change", update);
    canvas.addEventListener("webglcontextlost", hide);

    // Sem loseContext() aqui: o Fast Refresh reaproveita o mesmo canvas, e um contexto perdido não
    // volta. Em produção o rodapé só desmonta quando a página fecha, e aí o navegador libera tudo.
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      canvas.removeEventListener("webglcontextlost", hide);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href={href}
      aria-label={label}
      className="relative block size-11 shrink-0 bg-foreground hover:outline-2 hover:outline-offset-3 hover:outline-accent"
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full forced-colors:hidden" />
      <svg viewBox="0 0 32 32" aria-hidden="true" className="absolute inset-0 size-full">
        <path className="fill-background forced-colors:fill-[CanvasText]" d="M7 7h12v4h-8v3h7v4h-7v3h8v4H7z" />
        <rect x="21" y="21" width="4" height="4" className="fill-accent" />
      </svg>
    </a>
  );
}
