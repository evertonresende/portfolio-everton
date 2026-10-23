import type { ReactNode } from "react";
import type { SiteContent } from "../content/types";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Reveal } from "./reveal";

/** Moldura de toda página: grade de 12 colunas em hairlines, menu, conteúdo e rodapé. */
export function PageFrame({
  site,
  alternateHref,
  children,
}: {
  site: SiteContent;
  /** Mesma página no outro idioma. */
  alternateHref: string;
  children: ReactNode;
}) {
  return (
    <div id="topo" className="px-gutter">
      <a
        href="#conteudo"
        className="label-mono sr-only z-20 bg-foreground px-4 py-3 text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {site.ui.skipToContent}
      </a>
      <div className="grid-lines relative mx-auto max-w-page border-x border-grid">
        <Nav site={site} alternateHref={alternateHref} />
        <main id="conteudo" className="relative z-10">
          {children}
        </main>
        <Footer site={site} />
      </div>
      <Reveal />
    </div>
  );
}
