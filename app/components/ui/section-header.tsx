import type { ReactNode } from "react";

interface Props {
  readonly id: string;
  /** "NN / Título" em mono, no trilho da esquerda. */
  readonly label: string;
  /** Cada item vira uma linha do h2. */
  readonly title: string | readonly string[];
  readonly badge?: ReactNode;
}

/** Cabeçalho de seção: rótulo mono no trilho de 25% e h2 grande no resto. */
export function SectionHeader({ id, label, title, badge }: Props) {
  const lines = typeof title === "string" ? [title] : title;
  return (
    <div className="flex flex-wrap items-baseline gap-y-3">
      <p className="rail-aside label-mono m-0 flex flex-wrap items-center gap-x-3 gap-y-1 px-gutter text-foreground">
        <span>{label}</span>
        {badge}
      </p>
      <h2 id={id} className="rail-main text-display-2 m-0 px-gutter">
        {lines.map((line, i) => (
          <span key={line} className="block">
            {line}
            {i < lines.length - 1 ? " " : null}
          </span>
        ))}
      </h2>
    </div>
  );
}
