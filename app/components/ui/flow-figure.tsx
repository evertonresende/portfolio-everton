import type { Figure, FlowNode } from "../../content/types";
import { cn, glueSeparators } from "../../../lib/utils";

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
      <span className={cn("font-medium", node.rejected && "line-through decoration-1")}>{glueSeparators(node.title)}</span>
      {node.note ? <span className="text-muted">{glueSeparators(node.note)}</span> : null}
    </span>
  );
}

/** Caminho lateral: recuado com régua tracejada, para não ser lido como a sequência principal. Na linha xl, pendurado sob o nó. */
function Branch({ nodes, horizontal }: { nodes: readonly FlowNode[]; horizontal: boolean }) {
  return (
    <span className={cn("ml-3 flex flex-col gap-1 border-l border-dashed border-muted pl-3", horizontal && "xl:ml-0 xl:border-l-0 xl:pl-0")}>
      {nodes.map((node) => (
        <span key={node.title} className="flex flex-col gap-1">
          <Arrow horizontal={false} />
          <NodeBox node={node} spread={false} />
        </span>
      ))}
    </span>
  );
}

/** Seta entre nós: ↓ na pilha; na figura horizontal, ↓ até xl e → a partir dele. */
function Arrow({ horizontal }: { horizontal: boolean }) {
  return (
    <span aria-hidden="true" className={cn("text-base leading-5 text-muted", horizontal ? "pl-3 xl:shrink-0 xl:px-2.5 xl:pt-2.5" : "pl-3")}>
      {horizontal ? (
        <>
          <span className="xl:hidden">↓</span>
          <span className="hidden xl:inline">→</span>
        </>
      ) : (
        "↓"
      )}
    </span>
  );
}

/**
 * Figura numerada feita de caixas e setas em HTML (texto real, legível por leitor de tela).
 * vertical: pilha estreita (cards da home). horizontal: pilha até xl, linha sem quebra a partir dele (página de case).
 */
export function FlowFigure({ figure }: { figure: Figure }) {
  const vertical = figure.direction === "vertical";
  return (
    <figure className="m-0 flex flex-col border border-foreground bg-background">
      <figcaption className="label-mono flex justify-between gap-3 border-b border-foreground px-3.5 py-2.5 text-muted">
        <span className="shrink-0 whitespace-nowrap">{figure.number}</span>
        <span className="text-right">{figure.caption}</span>
      </figcaption>
      <ol
        role="list"
        className={cn("text-mono-sm m-0 flex list-none flex-col gap-1 p-3.5", vertical ? "py-4" : "py-5 xl:flex-row xl:items-start xl:gap-0")}
      >
        {figure.nodes.map((node, i) => (
          <li key={node.title} className={cn("flex flex-col gap-1", !vertical && "xl:min-w-0 xl:flex-1 xl:flex-row xl:items-start xl:gap-0")}>
            {i > 0 ? <Arrow horizontal={!vertical} /> : null}
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <NodeBox node={node} spread={vertical} />
              {node.branch ? <Branch nodes={node.branch} horizontal={!vertical} /> : null}
            </span>
          </li>
        ))}
      </ol>
      {figure.footnote ? (
        <p className="text-mono-xs m-0 border-t border-rule px-3.5 py-3 text-muted">{glueSeparators(figure.footnote)}</p>
      ) : null}
    </figure>
  );
}
