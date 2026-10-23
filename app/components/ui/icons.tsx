// Ícones de traço, sempre decorativos (o texto do link já diz o que é).

const base = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true } as const;
const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "square" } as const;

export function ArrowRight() {
  return (
    <svg {...base}>
      <path d="M2 8h11M9 4l4 4-4 4" {...stroke} />
    </svg>
  );
}

export function ArrowUp() {
  return (
    <svg {...base}>
      <path d="M8 14V3M4 7l4-4 4 4" {...stroke} />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg {...base}>
      <path d="M8 2v11M4 9l4 4 4-4" {...stroke} />
    </svg>
  );
}

export function Download() {
  return (
    <svg {...base}>
      <path d="M8 2v8M4.5 6.5L8 10l3.5-3.5M2.5 13.5h11" {...stroke} />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg {...base}>
      <path d="M4 12L12 4M5.5 4H12v6.5" {...stroke} />
    </svg>
  );
}
