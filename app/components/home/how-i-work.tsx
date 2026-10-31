import type { Column, SiteContent } from "../../content/types";
import { SectionHeader } from "../ui/section-header";
import { SpecList } from "../ui/spec-list";
import { Pipeline } from "./pipeline";

/** Bloco "Eu decido" / "Eu delego": índice, h3 e lista com linhas finas. */
function ColumnBlock({ column }: { column: Column }) {
  return (
    <div className="flex flex-col gap-3.5 border-t border-foreground px-gutter pt-5">
      <span className="label-mono text-muted">{column.index}</span>
      {/* Do tamanho dos títulos do pipeline logo acima: "Eu decido" não pode ler como secundário. */}
      <h3 className="text-heading-lg m-0">{column.title}</h3>
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

      <div data-reveal className="flex flex-col gap-3">
        <p id="pipeline-title" className="label-mono m-0 px-gutter">
          {pipelineLabel}
        </p>
        <Pipeline steps={steps} labelledBy="pipeline-title" />
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
