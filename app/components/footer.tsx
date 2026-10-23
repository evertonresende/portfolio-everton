import type { SiteContent } from "../content/types";
import { ArrowUp } from "./ui/icons";

export function Footer({ site }: { site: SiteContent }) {
  const { footer } = site;
  return (
    <footer className="relative z-10 border-t border-grid">
      <div className="label-mono flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-gutter py-6 text-muted">
        <span>{footer.copyright}</span>
        <span>{footer.madeWith}</span>
        <a href="#topo" className="inline-flex min-h-11 items-center gap-2 text-foreground">
          {footer.backToTop}
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
