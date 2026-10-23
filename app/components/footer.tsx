import type { SiteContent } from "../content/types";

export function Footer({ site }: { site: SiteContent }) {
  const { footer } = site;
  return (
    <footer className="relative z-10 border-t border-foreground">
      <div className="label-mono flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-gutter py-6 text-muted">
        <span>{footer.copyright}</span>
        <span className="normal-case tracking-normal">{footer.madeWith}</span>
        <a href="#topo" className="inline-flex min-h-11 items-center text-foreground">
          {footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
