// Formato do conteúdo do site. Componentes recebem estes tipos e não carregam texto próprio.
// Fato ainda não confirmado entra como placeholder CONFIRMAR entre chaves duplas e trava o build (scripts/check-content.mjs).

export type Locale = "pt" | "en";

/** Status de uma feature: a forma do marcador muda junto com o rótulo, não só a cor. */
export type Status = "production" | "prototype" | "offline" | "decision" | "dark-launch";

export interface Link {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface SpecRow {
  readonly term: string;
  readonly value: string;
  readonly mono?: boolean;
  readonly status?: Status;
  /** Rótulo do marcador de status (ex.: "Em produção"); o value vem embaixo. */
  readonly statusLabel?: string;
  /** Link logo abaixo do valor (ex.: a spec deste site). */
  readonly link?: Link;
}

export interface FlowNode {
  readonly title: string;
  readonly note?: string;
  /** Caminho legado ou secundário: desenhado tracejado e esmaecido. */
  readonly muted?: boolean;
  /** Caminho descartado (ex.: o chatbot que os usuários rejeitaram): também riscado. */
  readonly rejected?: boolean;
  /** Ramo que sai deste nó (ex.: rotas não migradas → functions legadas). */
  readonly branch?: readonly FlowNode[];
}

export interface Figure {
  readonly number: string;
  readonly caption: string;
  readonly nodes: readonly FlowNode[];
  readonly footnote?: string;
  readonly direction: "vertical" | "horizontal";
}

export interface AiItem {
  readonly status: Status;
  readonly label: string;
  readonly text: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
  readonly term?: string;
  readonly status?: Status;
  readonly statusLabel?: string;
}

/** Só cases com página própria mostram "Ver case"; esses precisam de um slug que existe. */
export type CaseSummary = CaseSummaryBase & ({ readonly hasPage: true; readonly slug: CaseSlug } | { readonly hasPage: false; readonly slug: string });

interface CaseSummaryBase {
  readonly index: string;
  readonly meta: string;
  readonly title: string;
  readonly figure: Figure;
  readonly problem: string;
  readonly whatIDid: string;
  readonly stack: string;
  readonly ai?: readonly AiItem[];
  readonly result: string;
}

export interface ListItem {
  readonly text: string;
}

export interface Column {
  readonly index: string;
  readonly title: string;
  readonly items: readonly ListItem[];
}

export interface NumberedItem {
  readonly index: string;
  readonly title?: string;
  readonly text: string;
  readonly badge?: string;
}

export interface CaseSection {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly stat?: Stat;
  readonly paragraphs?: readonly string[];
  readonly columns?: readonly Column[];
  readonly figures?: readonly Figure[];
  readonly specs?: readonly SpecRow[];
  readonly items?: readonly NumberedItem[];
  readonly stats?: readonly Stat[];
}

/** Slugs com página própria: o tsc pega link para case que não existe e idioma sem o mesmo case. */
export type CaseSlug = "tazz" | "dental-smart";

export interface CaseDetail {
  readonly kicker: string;
  readonly title: string;
  readonly lead: string;
  readonly factsTitle: string;
  readonly facts: readonly SpecRow[];
  readonly stats: readonly Stat[];
  readonly sections: readonly CaseSection[];
  readonly next?: { readonly slug: CaseSlug; readonly index: string; readonly title: string };
  readonly seo: { readonly title: string; readonly description: string };
}

export interface HomeContent {
  readonly seo: { readonly title: string; readonly description: string };
  readonly hero: {
    readonly status: string;
    readonly title: string;
    readonly lead: string;
    readonly sub: string;
    readonly primary: Link;
    readonly secondary: Link;
    readonly cv: Link;
    readonly photoAlt: string;
    readonly factsTitle: string;
    readonly facts: readonly SpecRow[];
    readonly proofs: readonly Stat[];
  };
  readonly delivery: {
    readonly label: string;
    readonly title: string;
    readonly proofLabel: string;
    readonly items: readonly { readonly index: string; readonly title: string; readonly text: string; readonly proof: string }[];
  };
  readonly cases: {
    readonly label: string;
    readonly title: readonly string[];
    readonly items: readonly CaseSummary[];
  };
  readonly howIWork: {
    readonly label: string;
    readonly title: string | readonly string[];
    readonly intro: string;
    readonly pipelineLabel: string;
    readonly steps: readonly NumberedItem[];
    readonly decide: Column;
    readonly delegate: Column;
    readonly specs: readonly SpecRow[];
  };
  readonly timeline: {
    readonly label: string;
    readonly title: string;
    readonly rows: readonly { readonly period: string; readonly role: string; readonly company: string; readonly mode: string }[];
    readonly education: { readonly index: string; readonly title: string; readonly items: readonly { readonly title: string; readonly detail: string }[] };
    readonly openSource: { readonly index: string; readonly title: string; readonly text: string; readonly date: string; readonly links: readonly Link[] };
  };
  readonly contact: {
    readonly label: string;
    readonly title: string;
    readonly status: string;
    readonly primary: Link;
    readonly secondary: Link;
    readonly listTitle: string;
    readonly items: readonly { readonly term: string; readonly label: string; readonly href: string }[];
  };
}

export interface SiteContent {
  readonly locale: Locale;
  readonly htmlLang: string;
  /** Prefixo das rotas deste idioma: "" (pt) ou "/en". */
  readonly basePath: string;
  readonly nav: {
    readonly brand: string;
    readonly links: readonly Link[];
    readonly cta: Link;
    readonly languageLabel: string;
    readonly alternate: { readonly label: string; readonly lang: string; readonly basePath: string };
    readonly currentLabel: string;
  };
  readonly footer: { readonly copyright: string; readonly madeWith: string; readonly backToTop: string };
  readonly ui: {
    readonly viewCase: string;
    readonly breadcrumbCases: string;
    readonly nextCase: string;
    readonly skipToContent: string;
    readonly mainNav: string;
    readonly notFound: { readonly title: string; readonly text: string; readonly back: string };
    /** Rótulos acessíveis: faixa de provas, faixa de números do case, trilha. */
    readonly proofs: string;
    readonly numbers: string;
    readonly breadcrumb: string;
    readonly specLabels: {
      readonly problem: string;
      readonly whatIDid: string;
      readonly stack: string;
      readonly ai: string;
      readonly result: string;
    };
  };
  readonly home: HomeContent;
  readonly cases: Readonly<Record<CaseSlug, CaseDetail>>;
}
