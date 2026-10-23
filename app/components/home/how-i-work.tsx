import type { Column, SiteContent } from "../../content/types";
import { SectionHeader } from "../ui/section-header";
import { SpecList } from "../ui/spec-list";

/** Bloco "Eu decido" / "Eu delego": índice, h3 e lista com linhas finas. */
function ColumnBlock({ column }: { column: Column }) {
  return (
    <div className="flex flex-col gap-3.5 border-t border-foreground px-gutter pt-5">
      <span className="label-mono text-muted">{column.index}</span>
      <h3 className="text-heading m-0">{column.title}</h3>
      <ul role="list" className="m-0 list-none border-t border-rule p-0">
        {column.items.map((item) => (
          <li key={item.text} className="text-body border-b border-rule py-2.5">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HowIWork({ site }: { site: SiteContent }) {
  const { label, title, intro, pipelineLabel, steps, decide, delegate, specs } = site.home.howIWork;
  return (
    <section
      id="como-trabalho"
      aria-labelledby="como-trabalho-title"
      className="flex flex-col gap-block border-t border-grid py-section"
    >
      <SectionHeader id="como-trabalho-title" label={label} title={title} />

      <div data-reveal className="flex flex-wrap">
        <div className="rail-aside" />
        <div className="rail-main px-gutter">
          <p className="text-lead m-0 max-w-3xl">{intro}</p>
        </div>
      </div>

      <div data-reveal className="flex flex-col gap-3 px-gutter">
        <p id="pipeline-title" className="label-mono m-0">
          {pipelineLabel}
        </p>
        <ol role="list" aria-labelledby="pipeline-title" className="m-0 flex list-none flex-col p-0 xl:flex-row">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={step.index} className={`flex min-w-0 flex-col xl:shrink xl:grow xl:flex-row ${last ? "xl:basis-34" : "xl:basis-40"}`}>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 border border-foreground bg-background p-3">
                  <span className="label-mono text-muted">{step.index}</span>
                  <span className="text-sub font-extrabold leading-tight">{step.title}</span>
                  <span className="text-sm">{step.text}</span>
                </div>
                {last ? null : (
                  <span aria-hidden="true" className="py-1.5 pl-3 text-base leading-5 text-muted xl:flex xl:w-6 xl:shrink-0 xl:items-center xl:justify-center xl:p-0">
                    <span className="xl:hidden">↓</span>
                    <span className="hidden xl:inline">→</span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div data-reveal className="flex flex-wrap">
        <div className="rail-aside" />
        <div className="rail-main auto-grid-md gap-y-8">
          <ColumnBlock column={decide} />
          <ColumnBlock column={delegate} />
        </div>
      </div>

      <div data-reveal className="flex flex-wrap">
        <div className="rail-aside" />
        <SpecList rows={specs} className="rail-main" />
      </div>
    </section>
  );
}
