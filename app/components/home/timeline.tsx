import type { ReactNode } from "react";
import type { SiteContent } from "../../content/types";
import { SectionHeader } from "../ui/section-header";
import { glueSeparators } from "../../../lib/utils";

/** Cabeçalho do bloco 4.1: índice mono, h3 e lista com linha fina no topo. */
function Block({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5 border-t border-foreground px-gutter pt-5">
      <span className="label-mono text-muted">{index}</span>
      <h3 className="text-heading m-0">{title}</h3>
      <ul role="list" className="m-0 list-none border-t border-rule p-0">
        {children}
      </ul>
    </div>
  );
}

export function Timeline({ site }: { site: SiteContent }) {
  const { label, title, rows, education } = site.home.timeline;
  return (
    <section
      id="trajetoria"
      aria-labelledby="trajetoria-title"
      className="flex flex-col gap-block border-t border-grid py-section"
    >
      <SectionHeader id="trajetoria-title" label={label} title={title} />

      <dl data-reveal className="m-0 border-t border-foreground">
        {rows.map((row, i) => (
          <div key={row.period + row.company} className="flex flex-wrap items-baseline border-b border-rule">
            <dt className="rail-aside text-mono-sm px-gutter pt-4 font-medium">{row.period}</dt>
            <dd className="rail-main m-0 flex flex-wrap items-baseline pt-2 pb-4">
              {/* A linha mais recente (o cargo atual) vem em negrito, como no canvas. */}
              <span
                className={`text-sub min-w-45 grow basis-1/3 px-gutter pt-1 leading-snug ${i === 0 ? "font-extrabold" : "font-medium"}`}
              >
                {row.role}
              </span>
              <span className="text-body min-w-50 grow basis-4/9 px-gutter pt-1">{row.company}</span>
              <span className="text-mono-sm min-w-35 grow basis-2/9 px-gutter pt-1">{glueSeparators(row.mode)}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div data-reveal className="flex flex-wrap">
        <div className="rail-aside" />
        <div className="rail-main auto-grid-md gap-y-8">
          <Block index={education.index} title={education.title}>
            {education.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-0.5 border-b border-rule py-3">
                <span className="text-body font-medium">{item.title}</span>
                <span className="text-mono-sm text-muted">{item.detail}</span>
              </li>
            ))}
          </Block>
        </div>
      </div>
    </section>
  );
}
