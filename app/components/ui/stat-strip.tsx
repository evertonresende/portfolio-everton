import type { Stat } from "../../content/types";
import { StatusMark } from "./status-mark";

/** Faixa de números grandes em mono, cada célula com linha forte no topo. */
export function StatStrip({
  stats,
  label,
  size = "lg",
}: {
  stats: readonly Stat[];
  label?: string;
  /** lg: faixa de provas da home. md: números do topo do case (valores mais longos, como "set/2026"). */
  size?: "lg" | "md";
}) {
  return (
    <ul role="list" aria-label={label} className="auto-grid-md m-0 list-none p-0">
      {stats.map((stat) => (
        <li
          key={stat.value + stat.label}
          className="flex flex-col gap-5 border-t border-foreground px-gutter pt-5 pb-cell"
        >
          {stat.term || stat.status ? (
            <span className="label-mono flex flex-wrap justify-between gap-x-4 gap-y-2 text-muted">
              {stat.term ? <span>{stat.term}</span> : null}
              {stat.status && stat.statusLabel ? <StatusMark status={stat.status} label={stat.statusLabel} /> : null}
            </span>
          ) : null}
          <p className="m-0 flex flex-col gap-3">
            <span className={size === "lg" ? "text-numeral" : "text-numeral-sm"}>
              {stat.value}
            </span>
            <span className="text-sub max-w-xs font-medium leading-snug">{stat.label}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
