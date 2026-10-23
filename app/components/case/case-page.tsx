import type { CaseDetail, CaseSection, Column, NumberedItem, SiteContent, Stat } from "../../content/types";
import { casePath } from "../../content";
import { cn, glueSeparators } from "../../../lib/utils";
import { FlowFigure } from "../ui/flow-figure";
import { NoOrphan } from "../ui/no-orphan";
import { SectionHeader } from "../ui/section-header";
import { SpecList } from "../ui/spec-list";
import { StatStrip } from "../ui/stat-strip";
import { StatusMark } from "../ui/status-mark";
import { CaseHero, Paragraphs, Rail } from "./case-parts";

/** Página de case: renderiza qualquer CaseDetail, bloco a bloco, na ordem do canvas aprovado. */
export function CasePage({ site, detail }: { site: SiteContent; detail: CaseDetail }) {
  return (
    <>
      <CaseHero
        site={site}
        kicker={detail.kicker}
        title={detail.title}
        lead={detail.lead}
        facts={detail.facts}
        factsTitle={detail.factsTitle}
      >
        <div data-reveal>
          <StatStrip stats={detail.stats} size="md" label={site.ui.numbers} />
        </div>
      </CaseHero>
      {detail.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
      {detail.next ? <NextCase site={site} next={detail.next} /> : null}
    </>
  );
}

function Section({ section }: { section: CaseSection }) {
  const { stat, paragraphs, columns, figures, items, specs, stats } = section;
  const titleId = `${section.id}-title`;
  return (
    <section aria-labelledby={titleId} className="flex flex-col gap-block border-t border-grid py-section">
      <SectionHeader id={titleId} label={section.label} title={section.title} />
      {stat || paragraphs ? (
        <Rail aside={stat ? <StatAside stat={stat} /> : undefined}>
          {paragraphs ? <Paragraphs paragraphs={paragraphs} /> : null}
        </Rail>
      ) : null}
      {columns ? (
        <Rail>
          <Columns columns={columns} />
        </Rail>
      ) : null}
      {figures ? (
        <div data-reveal className="flex flex-col gap-6 px-gutter">
          {figures.map((figure) => (
            <FlowFigure key={figure.number} figure={figure} />
          ))}
        </div>
      ) : null}
      {items || specs ? (
        <Rail>
          {items ? <Items items={items} /> : null}
          {/* Ficha logo abaixo da lista numerada: a linha forte do topo sairia dobrada. */}
          {specs ? <SpecList rows={specs} className={items ? "border-t-0" : undefined} /> : null}
        </Rail>
      ) : null}
      {stats ? <ResultList stats={stats} /> : null}
    </section>
  );
}

/** Número grande no trilho, com a legenda em mono. */
function StatAside({ stat }: { stat: Stat }) {
  return (
    <p className="m-0 flex flex-col gap-3.5">
      <span className="text-index">{stat.value}</span>
      <span className="label-mono text-muted">{glueSeparators(stat.label)}</span>
    </p>
  );
}

/** Colunas de lista (ex.: Design / Engenharia); item pendente mostra o aviso em mono depois do texto. */
function Columns({ columns }: { columns: readonly Column[] }) {
  return (
    <div className="auto-grid-sm items-start gap-y-8">
      {columns.map((column) => (
        <div key={column.index} className="flex flex-col gap-3.5 border-t border-foreground px-gutter pt-5">
          <span className="label-mono text-muted">{column.index}</span>
          <h3 className="text-heading m-0">{column.title}</h3>
          <ul role="list" className="m-0 list-none border-b border-rule p-0">
            {column.items.map((item) => (
              <li key={item.text} className="text-body border-t border-rule py-3">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Lista numerada. Item com selo (ex.: "Não usado") ganha destaque: é a decisão de não usar algo. */
function Items({ items }: { items: readonly NumberedItem[] }) {
  return (
    <ol role="list" className="m-0 list-none border-t border-foreground p-0">
      {items.map((item) => (
        <li key={item.index} className="flex flex-wrap items-baseline border-b border-rule">
          <span className={cn("spec-term label-mono px-gutter text-muted", item.title ? "pt-5" : "pt-4")}>
            {item.index}
          </span>
          <div
            className={cn(
              "spec-value flex flex-col px-gutter",
              item.badge ? "gap-3.5 pt-5 pb-10" : item.title ? "gap-2 pt-4 pb-5" : "pt-3 pb-4",
            )}
          >
            {item.badge ? <StatusMark status="decision" label={item.badge} /> : null}
            {item.title ? <h3 className={item.badge ? "text-heading-lg m-0" : "text-heading m-0"}><NoOrphan text={item.title} /></h3> : null}
            <p className={item.badge ? "text-lead m-0 max-w-xl" : "text-body m-0 max-w-prose"}>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Resultado em linhas largas: número grande à esquerda, frase à direita (empilha no celular). */
function ResultList({ stats }: { stats: readonly Stat[] }) {
  return (
    <ul data-reveal role="list" className="m-0 list-none border-t border-foreground p-0">
      {stats.map((stat) => (
        <li key={stat.value + stat.label} className="auto-grid-lg items-end gap-y-4 border-b border-rule pt-6 pb-8">
          <span className="text-numeral-sm lg:text-numeral px-gutter">{stat.value}</span>
          <span className="flex flex-col gap-2.5 px-gutter">
            {stat.status && stat.statusLabel ? <StatusMark status={stat.status} label={stat.statusLabel} /> : null}
            <span className="text-lead max-w-xl">{stat.label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function NextCase({ site, next }: { site: SiteContent; next: NonNullable<CaseDetail["next"]> }) {
  return (
    <nav aria-label={site.ui.nextCase} className="border-t border-grid">
      <a
        data-reveal
        href={casePath(site.basePath, next.slug)}
        className="flex flex-wrap items-end gap-y-4 pt-cell pb-section no-underline"
      >
        <span className="rail-aside flex flex-col gap-3.5 px-gutter">
          <span className="label-mono text-muted">{site.ui.nextCase}</span>
          <span aria-hidden="true" className="text-index">
            {next.index}
          </span>
        </span>
        <span className="rail-main flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-gutter">
          <span className="text-display-3">{next.title}</span>
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-auto w-8 shrink-0 md:w-14">
            <path d="M4 24h38M28 10l14 14-14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        </span>
      </a>
    </nav>
  );
}
