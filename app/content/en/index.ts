import type { SiteContent } from "../types";
import { home } from "./home";
import { tazz } from "./cases/tazz";
import { dentalSmart } from "./cases/dental-smart";
import { satBank } from "./cases/sat-bank";
import { briefs } from "./briefs";

export const en: SiteContent = {
  locale: "en",
  htmlLang: "en",
  basePath: "/en",
  nav: {
    brand: "Everton Resende",
    links: [
      { label: "Cases", href: "#cases" },
      { label: "How I work", href: "#como-trabalho" },
      { label: "Experience", href: "#trajetoria" },
      { label: "Contact", href: "#contato" },
    ],
    cta: home.contact.primary,
    languageLabel: "Language",
    currentLabel: "EN",
    alternate: { label: "PT", lang: "pt-BR", basePath: "" },
  },
  footer: {
    copyright: "© 2026 Everton Resende",
    madeWith: "Built with React, Vite and Cloudflare Workers, with agents.",
    backToTop: "Back to top",
  },
  ui: {
    viewCase: "View case",
    breadcrumbCases: "Cases",
    breadcrumbFoundations: "Foundations",
    summaryLabel: "01 / Summary",
    nextCase: "Next case",
    skipToContent: "Skip to content",
    mainNav: "Main",
    notFound: {
      title: "Page not found.",
      text: "This address does not exist or has moved. The cases are on the home page.",
      back: "Back to home",
    },
    proofs: "Proof",
    numbers: "Numbers",
    breadcrumb: "Breadcrumb",
    specLabels: {
      problem: "Problem",
      whatIDid: "What I did",
      stack: "Stack",
      ai: "AI",
      result: "Result",
    },
  },
  home,
  cases: { tazz, "dental-smart": dentalSmart, "sat-bank": satBank },
  briefs,
};
