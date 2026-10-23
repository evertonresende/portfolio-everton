import type { ReactNode } from "react";
import type { SpecRow } from "../../content/types";
import { cn } from "../../../lib/utils";
import { Dot, StatusMark } from "./status-mark";

interface RowProps {
  readonly term: string;
  readonly children: ReactNode;
  /** "case": termo em 22%, como as fichas de case. "compact": termo em 25%, como a ficha técnica. */
  readonly layout?: "case" | "compact";
}

/** Uma linha de ficha: dt mono em caixa alta + dd. Use dentro de <SpecList>. */
export function SpecItem({ term, children, layout = "case" }: RowProps) {
  return (
    <div className="flex flex-wrap items-baseline border-b border-rule">
      <dt
        className={cn(
          "label-mono text-muted",
          layout === "case" ? "spec-term px-gutter pt-4" : "basis-1/4 py-3 pl-gutter",
        )}
      >
        {term}
      </dt>
      <dd className={cn("m-0", layout === "case" ? "spec-value px-gutter pb-4 pt-3" : "min-w-0 flex-1 px-gutter py-3")}>
        {children}
      </dd>
    </div>
  );
}

interface ListProps {
  readonly rows?: readonly SpecRow[];
  readonly layout?: "case" | "compact";
  readonly labelledBy?: string;
  readonly className?: string;
  readonly children?: ReactNode;
}

/** Ficha com linhas finas. Aceita rows prontos ou <SpecItem> como filhos. */
export function SpecList({ rows, layout = "case", labelledBy, className, children }: ListProps) {
  return (
    <dl
      aria-labelledby={labelledBy}
      className={cn("m-0 border-t border-foreground", layout === "compact" && "text-mono-sm", className)}
    >
      {rows?.map((row) => (
        <SpecItem key={row.term} term={row.term} layout={layout}>
          <SpecValue row={row} layout={layout} />
        </SpecItem>
      ))}
      {children}
    </dl>
  );
}

function SpecValue({ row, layout }: { row: SpecRow; layout: "case" | "compact" }) {
  if (row.status && layout === "case") {
    return (
      <span className="flex flex-col gap-1.5">
        <StatusMark status={row.status} label={row.statusLabel ?? row.value} />
        {row.statusLabel ? <span className="text-body">{row.value}</span> : null}
      </span>
    );
  }
  if (row.status) {
    return (
      <span className="inline-flex items-baseline gap-2">
        <Dot />
        <span>{row.value}</span>
      </span>
    );
  }
  return <span className={cn(layout === "case" && (row.mono ? "text-mono-sm" : "text-body block max-w-prose"))}>{row.value}</span>;
}
