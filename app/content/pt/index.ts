import type { SiteContent } from "../types";
import { home } from "./home";
import { tazz } from "./cases/tazz";
import { dentalSmart } from "./cases/dental-smart";
import { satBank } from "./cases/sat-bank";
import { briefs } from "./briefs";

export const pt: SiteContent = {
  locale: "pt",
  htmlLang: "pt-BR",
  basePath: "",
  nav: {
    brand: "Everton Resende",
    links: [
      { label: "Cases", href: "#cases" },
      { label: "Como trabalho", href: "#como-trabalho" },
      { label: "Trajetória", href: "#trajetoria" },
      { label: "Contato", href: "#contato" },
    ],
    cta: home.contact.primary,
    languageLabel: "Idioma",
    currentLabel: "PT",
    alternate: { label: "EN", lang: "en", basePath: "/en" },
  },
  footer: {
    copyright: "© 2026 Everton Resende",
    madeWith: "Feito com React, Vite e Cloudflare Workers, com agentes.",
    backToTop: "Voltar ao topo",
  },
  ui: {
    viewCase: "Ver case",
    figure: "Fig.",
    breadcrumbCases: "Cases",
    nextCase: "Próximo case",
    skipToContent: "Pular para o conteúdo",
    proofLabel: "Prova",
    specLabels: {
      problem: "Problema",
      whatIDid: "O que fiz",
      stack: "Stack",
      ai: "IA",
      result: "Resultado",
    },
  },
  home,
  cases: { tazz, "dental-smart": dentalSmart, "sat-bank": satBank },
  briefs,
};
