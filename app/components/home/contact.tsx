import type { SiteContent } from "../../content/types";
import { ButtonLink } from "../ui/button-link";
import { SpecItem, SpecList } from "../ui/spec-list";
import { Dot } from "../ui/status-mark";

/** Fechamento da home: h2 gigante, status, CTAs e a ficha de contatos (cada valor é um link). */
export function Contact({ site }: { site: SiteContent }) {
  const { label, title, status, primary, secondary, listTitle, items } = site.home.contact;
  return (
    <section id="contato" aria-labelledby="contato-title" className="flex flex-col border-t border-grid pt-section">
      <div className="flex flex-col gap-6 px-gutter pb-8">
        <p className="label-mono m-0">{label}</p>
        <h2 id="contato-title" className="text-display-closing m-0 break-words">
          {title}
        </h2>
      </div>

      <div data-reveal className="auto-grid-lg border-t border-grid">
        <div className="flex flex-col gap-6 px-gutter pt-8 pb-cell">
          <p className="label-mono m-0 flex items-baseline gap-2.5">
            <Dot />
            <span className="min-w-0 flex-1">{status}</span>
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-4">
            <ButtonLink href={primary.href} external={primary.external} variant="primary" className="max-sm:justify-between">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} external={secondary.external} variant="secondary" icon="download" className="max-sm:justify-between">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>

        <div className="pt-8 pb-cell">
          <p id="contatos-title" className="label-mono m-0 px-gutter pb-3">
            {listTitle}
          </p>
          <SpecList labelledBy="contatos-title">
            {items.map((item) => (
              <SpecItem key={item.term} term={item.term}>
                <a
                  href={item.href}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center text-lg font-medium leading-snug underline wrap-anywhere lg:text-xl"
                >
                  {item.label}
                </a>
              </SpecItem>
            ))}
          </SpecList>
        </div>
      </div>
    </section>
  );
}
