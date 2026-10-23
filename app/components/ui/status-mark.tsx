import type { Status } from "../../content/types";
import { cn } from "../../../lib/utils";

/**
 * Marcador de status: a forma muda junto com a cor, para não depender só do matiz.
 * Cheio = em produção · vazado = protótipo, fora do ar ou dark launch · quadrado = decisão.
 */
export function Marker({ status }: { status: Status }) {
  if (status === "production") {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="shrink-0 fill-accent">
        <circle cx="5" cy="5" r="4.5" />
      </svg>
    );
  }
  if (status === "decision") {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="shrink-0 stroke-foreground" fill="none">
        <rect x="1" y="1" width="8" height="8" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="shrink-0 stroke-muted" fill="none">
      <circle cx="5" cy="5" r="4" strokeWidth="1.5" />
    </svg>
  );
}

export function StatusMark({ status, label, className }: { status: Status; label: string; className?: string }) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-2",
        status === "production" || status === "decision" ? "text-foreground" : "text-muted",
        className,
      )}
    >
      <Marker status={status} />
      {label}
    </span>
  );
}

/** Ponto sólido sem rótulo (status "disponível" na ficha). */
export function Dot() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="shrink-0 fill-foreground">
      <circle cx="5" cy="5" r="4" />
    </svg>
  );
}
