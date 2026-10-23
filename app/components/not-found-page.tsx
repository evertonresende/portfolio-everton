import type { SiteContent } from "../content/types";
import { homePath } from "../content";
import { PageFrame } from "./page-frame";
import { ButtonLink } from "./ui/button-link";

/** 404 com a moldura do site, no idioma da rota. */
export function NotFoundPage({ site }: { site: SiteContent }) {
  const { notFound } = site.ui;
  return (
    <PageFrame site={site} alternateHref={homePath(site.nav.alternate.basePath)}>
      <section aria-labelledby="not-found-title" className="flex flex-col items-start gap-6 px-gutter py-section">
        <span className="label-mono text-muted">404</span>
        <h1 id="not-found-title" className="text-display-2 m-0">
          {notFound.title}
        </h1>
        <p className="text-lead m-0 max-w-xl">{notFound.text}</p>
        <ButtonLink href={homePath(site.basePath)} variant="primary">
          {notFound.back}
        </ButtonLink>
      </section>
    </PageFrame>
  );
}
