// schema.org das páginas (JSON-LD). Uma pessoa só, com o mesmo @id em PT, EN e nos cases, para o Google
// juntar site, LinkedIn e GitHub numa entidade. Os serviços saem de "O que eu entrego": mesmo texto da página.
import type { CaseDetail, CaseSlug, SiteContent } from "../app/content/types.ts";
import { casePath } from "../app/content/index.ts";
import { CONTACT, OG_IMAGE, PERSON, SITE_URL } from "../app/content/shared.ts";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const CONTEXT = "https://schema.org";

/** Referência à pessoa, com nome e URL para quem não segue o @id. */
const personRef = { "@type": "Person", "@id": PERSON_ID, name: PERSON.name, url: SITE_URL };

function person(site: SiteContent) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    jobTitle: PERSON.jobTitle,
    description: site.home.seo.description,
    url: SITE_URL,
    image: SITE_URL + PERSON.image,
    email: `mailto:${CONTACT.email}`,
    sameAs: [CONTACT.linkedin, CONTACT.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.locality,
      addressRegion: PERSON.region,
      addressCountry: PERSON.country,
    },
    knowsAbout: PERSON.knowsAbout,
    makesOffer: site.home.delivery.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.title.replace(/\.$/, ""), description: item.text },
    })),
  };
}

/** Home: o site, a página de perfil e a pessoa. */
export function homeJsonLd(site: SiteContent) {
  const url = SITE_URL + site.basePath; // sem barra final, igual ao canonical
  return {
    "@context": CONTEXT,
    "@graph": [
      { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE_URL, name: PERSON.name, publisher: { "@id": PERSON_ID } },
      {
        "@type": "ProfilePage",
        url,
        name: site.home.seo.title,
        inLanguage: site.htmlLang,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      person(site),
    ],
  };
}

/** Página de case: artigo assinado pela mesma pessoa da home. */
export function caseJsonLd(site: SiteContent, slug: CaseSlug, detail: CaseDetail) {
  return {
    "@context": CONTEXT,
    "@type": "Article",
    headline: detail.seo.title.replace(` · ${PERSON.name}`, ""),
    description: detail.seo.description,
    url: SITE_URL + casePath(site.basePath, slug),
    inLanguage: site.htmlLang,
    image: SITE_URL + OG_IMAGE[site.locale],
    author: personRef,
    publisher: personRef,
    isPartOf: { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE_URL, name: PERSON.name },
  };
}
