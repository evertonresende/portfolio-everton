import type { Metadata } from "next";
import type { Locale, SiteContent } from "./content/types";
import { getContent, homePath } from "./content";
import { PERSON, SITE_URL } from "./content/shared";

const OG_LOCALE: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };
const OG_IMAGE: Record<Locale, string> = { pt: "/og.png", en: "/og-en.png" };

/** URL absoluta de `path` ("/" ou "/projects/tazz") no idioma: "/en" para a home em inglês, sem barra final. */
function absoluteUrl(locale: Locale, path: string): string {
  const base = getContent(locale).basePath;
  return SITE_URL + (path === "/" ? homePath(base) : base + path);
}

export function pageMetadata(site: SiteContent, path: string, seo: { title: string; description: string }): Metadata {
  const url = absoluteUrl(site.locale, path);
  const images = [{ url: OG_IMAGE[site.locale], width: 1200, height: 630, alt: `${PERSON.name}, ${PERSON.jobTitle}` }];
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": absoluteUrl("pt", path),
        en: absoluteUrl("en", path),
        "x-default": absoluteUrl("pt", path),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: PERSON.name,
      locale: OG_LOCALE[site.locale],
      title: seo.title,
      description: seo.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images,
    },
  };
}

/** Título da 404. Sem canonical (a página não existe); o noindex o vinext já põe. */
export function notFoundMetadata(site: SiteContent): Metadata {
  return { title: `${site.ui.notFound.title.replace(/\.$/, "")} · ${PERSON.name}` };
}
