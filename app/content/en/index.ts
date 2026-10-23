import type { SiteContent } from "../types";
import { pt } from "../pt";

// Rascunho temporário: substituído pela tradução completa.
export const en: SiteContent = {
  ...pt,
  locale: "en",
  htmlLang: "en",
  basePath: "/en",
  nav: { ...pt.nav, currentLabel: "EN", alternate: { label: "PT", lang: "pt-BR", basePath: "" } },
};
