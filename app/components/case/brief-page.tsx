import type { CaseBrief, SiteContent } from "../../content/types";
import { homeAnchor } from "../../content";
import { ButtonLink } from "../ui/button-link";
import { CaseHero, Paragraphs, Rail } from "./case-parts";

/** Resumo curto (Softplan): o mesmo topo do case, alguns parágrafos e a saída para cases e contato. */
export function BriefPage({ site, brief }: { site: SiteContent; brief: CaseBrief }) {
  const { cta } = site.nav;
  const cases = site.home.hero.secondary;
  return (
    <CaseHero
      site={site}
      kicker={brief.kicker}
      title={brief.title}
      lead={brief.lead}
      facts={brief.facts}
      factsTitle={brief.factsTitle}
      crumb={{ label: site.ui.breadcrumbFoundations, href: homeAnchor(site.basePath, "#fundamentos") }}
    >
      <div className="flex flex-col gap-block border-t border-grid pt-cell pb-section">
        <Rail aside={<span className="label-mono">{site.ui.summaryLabel}</span>}>
          <Paragraphs paragraphs={brief.paragraphs} />
        </Rail>
        <Rail>
          <div className="flex flex-col gap-3 px-gutter sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
            <ButtonLink href={cta.href} external={cta.external} variant="primary" className="max-sm:justify-between">
              {cta.label}
            </ButtonLink>
            <ButtonLink href={homeAnchor(site.basePath, cases.href)} variant="secondary" className="max-sm:justify-between">
              {cases.label}
            </ButtonLink>
          </div>
        </Rail>
      </div>
    </CaseHero>
  );
}
