import type { SiteContent } from "../../content/types";
import { homePath } from "../../content";
import { PageFrame } from "../page-frame";
import { PersonJsonLd } from "../json-ld";
import { Hero } from "./hero";
import { Delivery } from "./delivery";
import { Cases } from "./cases";
import { HowIWork } from "./how-i-work";
import { Foundations } from "./foundations";
import { Timeline } from "./timeline";
import { Contact } from "./contact";

/** Home completa de um idioma: moldura, dados estruturados e as seções na ordem da spec. */
export function HomePage({ site }: { site: SiteContent }) {
  return (
    <PageFrame site={site} alternateHref={homePath(site.nav.alternate.basePath)}>
      <PersonJsonLd site={site} />
      <Hero site={site} />
      <Delivery site={site} />
      <Cases site={site} />
      <HowIWork site={site} />
      <Foundations site={site} />
      <Timeline site={site} />
      <Contact site={site} />
    </PageFrame>
  );
}
