import type { SiteContent } from "../types";
import { home } from "./home";
import { tazz } from "./cases/tazz";
import { dentalSmart } from "./cases/dental-smart";

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
    breadcrumbCases: "Cases",
    nextCase: "Próximo case",
    skipToContent: "Pular para o conteúdo",
    mainNav: "Principal",
    notFound: {
      title: "Página não encontrada.",
      text: "O endereço não existe ou mudou. Os cases estão na home.",
      back: "Voltar para a home",
    },
    proofs: "Provas",
    numbers: "Números",
    breadcrumb: "Trilha",
    specLabels: {
      problem: "Problema",
      whatIDid: "O que fiz",
      stack: "Stack",
      ai: "IA",
      result: "Resultado",
    },
  },
  home,
  cases: { tazz, "dental-smart": dentalSmart },
};
