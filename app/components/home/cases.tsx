import type { SiteContent } from "../../content/types";
import { SectionHeader } from "../ui/section-header";
import { CaseRow } from "./case-row";

/** 02 / Cases: um article por case, separados por linha de grid. */
export function Cases({ site }: { site: SiteContent }) {
  const { cases } = site.home;
  return (
    <section id="cases" aria-labelledby="cases-title" className="flex flex-col gap-block border-t border-grid pt-section">
      <SectionHeader id="cases-title" label={cases.label} title={cases.title} />
      <div className="flex flex-col">
        {cases.items.map((item) => (
          <CaseRow key={item.slug} site={site} item={item} />
        ))}
      </div>
    </section>
  );
}
