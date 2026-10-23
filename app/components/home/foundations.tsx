import type { SiteContent } from "../../content/types";
import { casePath } from "../../content";
import { SectionHeader } from "../ui/section-header";

/** Softplan e FAPAM em linhas compactas: empresa no trilho, cargo · texto · período no resto. */
export function Foundations({ site }: { site: SiteContent }) {
  const { label, title, rows } = site.home.foundations;
  return (
    <section
      id="fundamentos"
      aria-labelledby="fundamentos-title"
      className="flex flex-col gap-block border-t border-grid py-section"
    >
      <SectionHeader id="fundamentos-title" label={label} title={title} />

      <dl data-reveal className="m-0 border-t border-foreground">
        {rows.map((row) => (
          <div key={row.company} className="flex flex-wrap items-baseline border-b border-rule">
            <dt className="rail-aside text-heading px-gutter pt-4">
              {row.slug ? (
                <a href={casePath(site.basePath, row.slug)} className="inline-flex min-h-11 items-center underline">
                  {row.company}
                </a>
              ) : (
                row.company
              )}
            </dt>
            <dd className="rail-main m-0 flex flex-wrap items-baseline pt-2 pb-4">
              <span className="text-body min-w-40 grow basis-2/9 px-gutter pt-1 font-medium">{row.role}</span>
              <span className="text-body min-w-60 grow basis-5/9 px-gutter pt-1">{row.text}</span>
              <span className="text-mono-sm min-w-max grow basis-2/9 whitespace-nowrap px-gutter pt-1">{row.period}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
