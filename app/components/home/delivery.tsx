import type { SiteContent } from "../../content/types";
import { SectionHeader } from "../ui/section-header";

/** 01 / O que eu entrego: três colunas, cada uma com a sua prova alinhada embaixo (subgrid). */
export function Delivery({ site }: { site: SiteContent }) {
  const { delivery } = site.home;
  return (
    <section aria-labelledby="entrego-title" className="flex flex-col gap-block border-t border-grid py-section">
      <SectionHeader id="entrego-title" label={delivery.label} title={delivery.title} />
      <div className="flex flex-wrap">
        <div className="rail-aside" />
        <div data-reveal className="rail-main auto-grid-sm">
          {delivery.items.map((item) => (
            <div
              key={item.index}
              className="row-span-4 grid grid-rows-subgrid gap-3.5 border-t border-foreground px-gutter pt-5 pb-8"
            >
              <span className="label-mono text-muted">{item.index}</span>
              <h3 className="text-heading m-0">{item.title}</h3>
              <p className="text-body m-0 max-w-xs">{item.text}</p>
              <p className="text-mono-xs m-0 flex flex-col gap-1 border-t border-rule pt-3">
                <span className="label-mono text-muted">{delivery.proofLabel}</span>
                <span>{item.proof}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
