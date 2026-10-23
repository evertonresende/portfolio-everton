import type { SiteContent } from "../content/types";
import { homeAnchor, homePath } from "../content";
import { ButtonLink } from "./ui/button-link";

/** Menu fixo no topo do grid. Server Component: não precisa de JS. */
export function Nav({ site, alternateHref }: { site: SiteContent; alternateHref: string }) {
  const { nav, basePath } = site;
  return (
    <header className="relative z-10 border-b border-grid">
      <nav
        aria-label={site.ui.mainNav}
        className="flex min-h-18 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-gutter py-3"
      >
        <a
          href={homePath(basePath)}
          className="inline-flex min-h-11 items-center text-lg font-extrabold leading-none tracking-tight no-underline"
        >
          {nav.brand}
        </a>
        <ul role="list" className="m-0 flex list-none flex-wrap gap-x-2 p-0 max-lg:order-last max-lg:-ml-2 max-lg:w-full">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={homeAnchor(basePath, link.href)}
                className="label-mono inline-flex min-h-11 items-center px-2 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div role="group" aria-label={nav.languageLabel} className="label-mono flex items-center gap-1">
            <span aria-current="true" className="inline-flex min-h-7 items-center bg-foreground px-2 text-background">
              {nav.currentLabel}
            </span>
            <span aria-hidden="true" className="text-muted">
              /
            </span>
            <a
              href={alternateHref}
              lang={nav.alternate.lang}
              hrefLang={nav.alternate.lang}
              className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 no-underline"
            >
              {nav.alternate.label}
            </a>
          </div>
          <ButtonLink href={nav.cta.href} external={nav.cta.external} variant="primary" className="px-5 max-sm:hidden">
            {nav.cta.label}
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
