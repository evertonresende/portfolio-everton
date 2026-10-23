import type { Locale, SiteContent } from "./types";
import { pt } from "./pt";
import { en } from "./en";

const byLocale: Record<Locale, SiteContent> = { pt, en };

export function getContent(locale: Locale): SiteContent {
  return byLocale[locale];
}

/** Âncora da home no idioma: "/#cases" ou "/en#cases". */
export function homeAnchor(basePath: string, hash: string): string {
  const id = hash.replace(/^#/, "");
  return basePath ? `${basePath}#${id}` : `/#${id}`;
}

export function homePath(basePath: string): string {
  return basePath || "/";
}

export function casePath(basePath: string, slug: string): string {
  return `${basePath}/projects/${slug}`;
}
