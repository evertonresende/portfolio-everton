import type { Figure, FlowNode } from "../../content/types";
import { cn } from "../../../lib/utils";

/** Caixa de um nó: título + nota opcional; nó "muted" é caminho rejeitado ou legado. */
function NodeBox({ node, spread }: { node: FlowNode; spread: boolean }) {
  return (
    <span
      className={cn(
        "flex flex-wrap gap-x-3 gap-y-1 border px-3 py-2",
        spread ? "justify-between" : "flex-col",
        node.muted ? "border-dashed border-muted text-muted" : "border-foreground",
      )}
    >
      <span className={cn(node.muted && "line-through decoration-1")}>{node.title}</span>
      {node.note ? <span className="text-muted">{node.note}</span> : null}
    </span>
  );
}

function Branch({ nodes }: { nodes: readonly FlowNode[] }) {
  return (
    <span className="flex flex-col gap-1">
      {nodes.map((node) => (
        <span key={node.title} className="flex flex-col gap-1">
          <span aria-hidden="true" className="pl-3 text-muted">
            ↓
          </span>
          <NodeBox node={node} spread={false} />
        </span>
      ))}
    </span>
  );
}

/**
 * Figura numerada feita de caixas e setas em HTML (texto real, legível por leitor de tela).
 * vertical: pilha estreita (cards da home). horizontal: linha que quebra no celular (página de case).
 */
export function FlowFigure({ figure }: { figure: Figure }) {
  const vertical = figure.direction === "vertical";
  return (
    <figure className="m-0 flex flex-col border border-foreground bg-background">
      <figcaption className="label-mono flex justify-between gap-3 border-b border-foreground px-3.5 py-2.5 text-muted">
        <span>{figure.number}</span>
        <span>{figure.caption}</span>
      </figcaption>
      <ol
        role="list"
        className={cn(
          "text-mono-sm m-0 flex list-none gap-1 p-3.5",
          vertical ? "flex-col py-4" : "flex-wrap items-start gap-x-2 gap-y-3 py-5",
        )}
      >
        {figure.nodes.map((node, i) => {
          const last = i === figure.nodes.length - 1;
          return (
            <li key={node.title} className={cn("flex gap-1", vertical ? "flex-col" : "items-start gap-2")}>
              <span className="flex flex-col gap-1">
                <NodeBox node={node} spread={vertical} />
                {node.branch ? <Branch nodes={node.branch} /> : null}
              </span>
              {last ? null : (
                <span aria-hidden="true" className={cn("text-muted", vertical ? "pl-3" : "pt-2")}>
                  {vertical ? "↓" : "→"}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {figure.footnote ? (
        <p className="text-mono-xs m-0 border-t border-rule px-3.5 py-3 text-muted">{figure.footnote}</p>
      ) : null}
    </figure>
  );
}
