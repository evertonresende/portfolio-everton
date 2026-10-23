import type { ReactNode } from "react";
import type { Link, SiteContent, SpecRow } from "../../content/types";
import { homeAnchor } from "../../content";
import { cn } from "../../../lib/utils";
import { NowrapTail } from "../ui/nowrap-tail";
import { SpecList } from "../ui/spec-list";

interface HeroProps {
  readonly site: SiteContent;
  readonly kicker: string;
  readonly title: string;
  readonly lead: string;
  readonly facts: readonly SpecRow[];
  readonly factsTitle: string;
  /** Primeiro nível da trilha: Cases (padrão) ou Fundamentos. */
  readonly crumb?: Link;
  /** Blocos que ainda pertencem ao topo (faixa de números, parágrafos do resumo). */
  readonly children?: ReactNode;
}

/** Topo comum de case e resumo: trilha, kicker, H1, lead e ficha técnica. */
export function CaseHero({ site, kicker, title, lead, facts, factsTitle, crumb, children }: HeroProps) {
  const parent = crumb ?? { label: site.ui.breadcrumbCases, href: homeAnchor(site.basePath, "#cases") };
  return (
    <>
      <nav aria-label={site.ui.breadcrumb} className="border-b border-grid px-gutter">
        <ol role="list" className="label-mono m-0 flex list-none flex-wrap items-center gap-x-2.5 p-0">
          <li>
            <a href={parent.href} className="inline-flex min-h-11 items-center">
              {parent.label}
            </a>
          </li>
          <li className="inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="text-muted">
              /
            </span>
            <span aria-current="page">{title.replace(/\.$/, "")}</span>
          </li>
        </ol>
      </nav>
      <section aria-labelledby="case-title">
        <div className="flex flex-col gap-6 px-gutter pt-section pb-8">
          <p className="label-mono m-0">
            <NowrapTail text={kicker} />
          </p>
          <h1 id="case-title" className="text-display-1 m-0">
            {title}
          </h1>
        </div>
        <div data-reveal className="auto-grid-lg border-t border-grid">
          <div className="px-gutter pt-8 pb-cell">
            <p className="text-lead m-0 max-w-xl">{lead}</p>
          </div>
          <div className="pt-8 pb-cell">
            <p id="ficha-title" className="label-mono m-0 px-gutter pb-3">
              {factsTitle}
            </p>
            <SpecList rows={facts} layout="compact" labelledBy="ficha-title" />
          </div>
        </div>
        {children}
      </section>
    </>
  );
}

/** Linha com trilho de 25% (vazio ou com um destaque) e conteúdo no resto; empilha no celular. */
export function Rail({ aside, children }: { aside?: ReactNode; children: ReactNode }) {
  return (
    <div data-reveal className={cn("flex flex-wrap", aside ? "gap-y-6" : undefined)}>
      <div className="rail-aside px-gutter">{aside}</div>
      <div className="rail-main">{children}</div>
    </div>
  );
}

export function Paragraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="flex flex-col gap-4 px-gutter">
      {paragraphs.map((text) => (
        <p key={text} className="text-sub m-0 max-w-prose">
          {text}
        </p>
      ))}
    </div>
  );
}
