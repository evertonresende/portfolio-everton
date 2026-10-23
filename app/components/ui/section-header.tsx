import { NoOrphan } from "./no-orphan";

interface Props {
  readonly id: string;
  /** "NN / Título" em mono, no trilho da esquerda. */
  readonly label: string;
  /** Cada item vira uma linha do h2. */
  readonly title: string | readonly string[];
}

/** Cabeçalho de seção: rótulo mono no trilho de 25% e h2 grande no resto. */
export function SectionHeader({ id, label, title }: Props) {
  const lines = typeof title === "string" ? [title] : title;
  return (
    <div className="flex flex-wrap items-baseline gap-y-3">
      <p className="rail-aside label-mono m-0 px-gutter text-foreground">{label}</p>
      <h2 id={id} className="rail-main text-display-2 m-0 px-gutter">
        {lines.map((line, i) => (
          <span key={line} className="block">
            <NoOrphan text={line} />
            {i < lines.length - 1 ? " " : null}
          </span>
        ))}
      </h2>
    </div>
  );
}
