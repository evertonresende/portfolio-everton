import type { CaseSummary, SiteContent } from "../../content/types";
import { casePath } from "../../content";
import { glueSeparators } from "../../../lib/utils";
import { ButtonLink } from "../ui/button-link";
import { FlowFigure } from "../ui/flow-figure";
import { NowrapTail } from "../ui/nowrap-tail";
import { SpecItem, SpecList } from "../ui/spec-list";
import { StatusMark } from "../ui/status-mark";

/** Uma linha de case: número e meta no trilho, título + "Ver case", figura e ficha. */
export function CaseRow({ site, item }: { site: SiteContent; item: CaseSummary }) {
  const labels = site.ui.specLabels;
  const titleId = `case-${item.slug}`;
  return (
    <article
      aria-labelledby={titleId}
      data-reveal
      className="flex flex-col gap-6 border-t border-grid pt-cell pb-section md:gap-8"
    >
      <div className="flex flex-wrap items-end gap-y-4">
        <div className="rail-aside flex flex-col gap-3.5 px-gutter">
          <span aria-hidden="true" className="text-index">
            {item.index}
          </span>
          <span className="label-mono text-muted">
            <NowrapTail text={item.meta} />
          </span>
        </div>
        <div className="rail-main flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-gutter">
          <h3 id={titleId} className="text-display-3 m-0">
            {item.title}
          </h3>
          {item.hasPage ? (
            <ButtonLink href={casePath(site.basePath, item.slug)} ariaLabel={`${site.ui.viewCase} ${item.title}`}>
              {site.ui.viewCase}
            </ButtonLink>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-y-6">
        <div className="rail-aside px-gutter">
          <FlowFigure figure={item.figure} />
        </div>
        {/* rows saem antes dos filhos: Problema, O que fiz, Stack, depois IA e Resultado. */}
        <SpecList
          className="rail-main"
          rows={[
            { term: labels.problem, value: item.problem },
            { term: labels.whatIDid, value: item.whatIDid },
            { term: labels.stack, value: item.stack, mono: true },
          ]}
        >
          {item.ai?.length ? (
            <SpecItem term={labels.ai}>
              <span className="flex flex-col gap-4">
                {item.ai.map((ai) => (
                  <span key={ai.text} className="flex flex-col gap-1.5">
                    <StatusMark status={ai.status} label={ai.label} />
                    <span className="text-body">{ai.text}</span>
                  </span>
                ))}
              </span>
            </SpecItem>
          ) : null}
          <SpecItem term={labels.result}>
            <span className="text-mono-md">{glueSeparators(item.result)}</span>
          </SpecItem>
        </SpecList>
      </div>
    </article>
  );
}
