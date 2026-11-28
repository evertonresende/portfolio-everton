import type { SiteContent } from "../../content/types";
import { homePath } from "../../content";
import { PageFrame } from "../page-frame";
import { JsonLd } from "../json-ld";
import { homeJsonLd } from "../../../lib/json-ld";
import { Hero } from "./hero";
import { Delivery } from "./delivery";
import { Cases } from "./cases";
import { HowIWork } from "./how-i-work";
import { Timeline } from "./timeline";
import { Contact } from "./contact";

/** Home completa de um idioma: moldura, dados estruturados e as seções na ordem da spec. */
export function HomePage({ site }: { site: SiteContent }) {
  return (
    <PageFrame site={site} alternateHref={homePath(site.nav.alternate.basePath)}>
      <JsonLd data={homeJsonLd(site)} />
      <Hero site={site} />
      <Delivery site={site} />
      <Cases site={site} />
      <HowIWork site={site} />
      <Timeline site={site} />
      <Contact site={site} />
    </PageFrame>
  );
}
