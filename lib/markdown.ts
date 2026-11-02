// Versão em Markdown do site para agentes de IA, gerada do mesmo conteúdo das páginas (app/content).
// Chega por URL própria (/index.md, /md, /projects/tazz.md, /llms.txt) ou por Accept: text/markdown na URL da página.
// Sem detecção de robô por User-Agent: o preview do LinkedIn/WhatsApp e o Googlebot continuam recebendo o HTML.
import type { CaseDetail, CaseSlug, Figure, FlowNode, Locale, SiteContent, SpecRow, Stat } from "../app/content/types.ts";
import { casePath, getContent, homePath, markdownPath } from "../app/content/index.ts";
import { CONTACT, CV_URL, CV_URL_EN, PERSON, SITE_URL } from "../app/content/shared.ts";

export type MarkdownRoute =
  | { readonly kind: "llms" }
  | { readonly kind: "home"; readonly locale: Locale }
  | { readonly kind: "case"; readonly locale: Locale; readonly slug: CaseSlug };

const LLMS = "/llms.txt";
// "/", "/en", "/projects/tazz", "/en/projects/tazz/"
const PAGE = /^(\/en)?(?:\/projects\/([a-z0-9-]+))?\/?$/;
// "/index.md", "/md", "/en/index.md", "/projects/tazz.md", "/en/projects/tazz.md"
const FILE = /^(\/en)?(?:\/projects\/([a-z0-9-]+)\.md|\/(?:index\.)?md)$/;

/** Peso (q) de um tipo no Accept; 0 quando ausente. Só casa o tipo exato, sem curinga. */
function acceptWeight(accept: string, type: string): number {
  for (const part of accept.split(",")) {
    const [name, ...params] = part.split(";").map((s) => s.trim().toLowerCase());
    if (name !== type) continue;
    const q = params.find((p) => p.startsWith("q="));
    const weight = q ? Number(q.slice(2)) : 1;
    return Number.isFinite(weight) ? weight : 0;
  }
  return 0;
}

/** O cliente pediu Markdown e não prefere HTML (navegador nunca manda text/markdown). */
export function wantsMarkdown(accept: string | null): boolean {
  const md = acceptWeight(accept ?? "", "text/markdown");
  return md > 0 && md >= acceptWeight(accept ?? "", "text/html");
}

function pageRoute(locale: Locale, slug: string | undefined): MarkdownRoute | null {
  if (!slug) return { kind: "home", locale };
  return Object.hasOwn(getContent(locale).cases, slug) ? { kind: "case", locale, slug: slug as CaseSlug } : null;
}

/** URL de página HTML que também responde Markdown por Accept (o HTML dela leva Vary: Accept). */
export function isPagePath(pathname: string): boolean {
  const match = PAGE.exec(pathname);
  return match !== null && pageRoute(match[1] ? "en" : "pt", match[2]) !== null;
}

/** Qual Markdown servir para esta URL e este Accept. null = segue para o app. */
export function markdownRoute(pathname: string, accept: string | null): MarkdownRoute | null {
  if (pathname === LLMS) return { kind: "llms" };
  const file = FILE.exec(pathname);
  if (file) return pageRoute(file[1] ? "en" : "pt", file[2]);
  const page = PAGE.exec(pathname);
  if (page && wantsMarkdown(accept)) return pageRoute(page[1] ? "en" : "pt", page[2]);
  return null;
}

const abs = (path: string) => (/^https?:|^mailto:/.test(path) ? path : SITE_URL + path);
const link = (label: string, href: string) => `[${label}](${abs(href)})`;
/** Junta blocos com linha em branco, pulando os vazios. */
const blocks = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join("\n\n");

function htmlUrl(site: SiteContent, slug?: string): string {
  return abs(slug ? casePath(site.basePath, slug) : homePath(site.basePath));
}

/** Linha de topo: a página HTML (canônica) e o mesmo Markdown no outro idioma. */
function header(site: SiteContent, slug?: string): string {
  const other = site.nav.alternate;
  return `${link("HTML", htmlUrl(site, slug))} · ${link(other.label, markdownPath(other.basePath, slug))}`;
}

/** Ficha com "*": no CommonMark, marcador diferente fecha a lista de "-" anterior (senão a ficha de "Como trabalho" vira item de "Eu delego"). */
function specList(rows: readonly SpecRow[]): string {
  return rows
    .map((row) => {
      const status = row.statusLabel ? ` (${row.statusLabel})` : "";
      const extra = row.link ? ` · ${link(row.link.label, row.link.href)}` : "";
      return `* **${row.term}:** ${row.value}${status}${extra}`;
    })
    .join("\n");
}

/** withTerm: a faixa de números mostra o termo ("Tazz"); a lista de resultado do case não mostra. */
function statList(stats: readonly Stat[], withTerm = true): string {
  return stats
    .map((stat) => {
      const term = withTerm && stat.term ? `${stat.term}: ` : "";
      const status = stat.statusLabel ? ` (${stat.statusLabel})` : "";
      return `- **${term}${stat.value}** · ${stat.label}${status}`;
    })
    .join("\n");
}

/** Nó do diagrama: riscado quando descartado, itálico quando caminho secundário, como no desenho. */
function node(n: FlowNode): string {
  const title = n.rejected ? `~~${n.title}~~` : n.muted ? `_${n.title}_` : n.title;
  const note = n.note ? ` (${n.note})` : "";
  const branch = n.branch ? ` [→ ${n.branch.map(node).join(" → ")}]` : "";
  return title + note + branch;
}

function figure(fig: Figure): string {
  const footnote = fig.footnote ? ` _${fig.footnote}_` : "";
  return `**${fig.number} · ${fig.caption}:** ${fig.nodes.map(node).join(" → ")}.${footnote}`;
}

/** Contato no fim de cada página: na home é a seção "05 / Contato"; no case, só a lista. */
function contactBlock(site: SiteContent, inCase = false): string {
  const { contact, hero } = site.home;
  return blocks(
    `## ${inCase ? contact.listTitle : contact.label}`,
    !inCase && contact.title,
    contact.status,
    contact.items.map((item) => `- **${item.term}:** ${link(item.label, item.href)}`).join("\n"),
    `- ${link(hero.cv.label, hero.cv.href)}`,
  );
}

export function homeMarkdown(site: SiteContent): string {
  const { seo, hero, delivery, cases, howIWork, timeline } = site.home;
  const labels = site.ui.specLabels;
  const title = (t: string | readonly string[]) => (typeof t === "string" ? t : t.join(" "));

  const caseBlocks = cases.items.map((item) =>
    blocks(
      `### ${item.index} · ${item.title} ${item.meta}`,
      `**${labels.problem}:** ${item.problem}`,
      `**${labels.whatIDid}:** ${item.whatIDid}`,
      `**${labels.stack}:** ${item.stack}`,
      item.ai && `**${labels.ai}:**\n${item.ai.map((ai) => `- ${ai.label}: ${ai.text}`).join("\n")}`,
      `**${labels.result}:** ${item.result}`,
      figure(item.figure),
      item.hasPage &&
        `${link(site.ui.viewCase, casePath(site.basePath, item.slug))} · ${link("Markdown", markdownPath(site.basePath, item.slug))}`,
    ),
  );

  return (
    blocks(
      `# ${seo.title}`,
      header(site),
      `> ${seo.description}`,
      hero.status,
      `**${hero.title}** ${hero.lead}`,
      hero.sub,
      `${link(hero.primary.label, hero.primary.href)} · ${link(hero.cv.label, hero.cv.href)}`,
      `## ${hero.factsTitle}`,
      specList(hero.facts),
      `## ${site.ui.proofs}`,
      statList(hero.proofs),
      `## ${delivery.label}`,
      delivery.title,
      ...delivery.items.map((d) => blocks(`### ${d.index} · ${d.title}`, d.text, `_${delivery.proofLabel}: ${d.proof}_`)),
      `## ${cases.label}`,
      title(cases.title),
      ...caseBlocks,
      `## ${howIWork.label}`,
      title(howIWork.title),
      howIWork.intro,
      `### ${howIWork.pipelineLabel}`,
      howIWork.steps.map((s) => `- **${s.index} · ${s.title}:** ${s.text}`).join("\n"),
      ...[howIWork.decide, howIWork.delegate].map((col) =>
        blocks(`### ${col.index} · ${col.title}`, col.items.map((i) => `- ${i.text}`).join("\n")),
      ),
      specList(howIWork.specs),
      `## ${timeline.label}`,
      timeline.title,
      timeline.rows.map((r) => `- **${r.period}:** ${r.role} · ${r.company} · ${r.mode}`).join("\n"),
      `### ${timeline.education.index} · ${timeline.education.title}`,
      timeline.education.items.map((e) => `- **${e.title}:** ${e.detail}`).join("\n"),
      contactBlock(site),
    ) + "\n"
  );
}

export function caseMarkdown(site: SiteContent, slug: CaseSlug): string {
  const detail: CaseDetail = site.cases[slug];
  const sections = detail.sections.map((s) =>
    blocks(
      `## ${s.label}`,
      s.title,
      s.stat && `**${s.stat.value}** · ${s.stat.label}`,
      ...(s.paragraphs ?? []),
      ...(s.columns ?? []).map((col) => blocks(`### ${col.index} · ${col.title}`, col.items.map((i) => `- ${i.text}`).join("\n"))),
      ...(s.figures ?? []).map(figure),
      // Título do item já termina em pontuação ("Ferramentas com escopo mínimo."); sem título, o índice leva ":".
      s.items && s.items.map((i) => `- **${[i.index, i.badge, i.title].filter(Boolean).join(" · ")}${i.title ? "" : ":"}** ${i.text}`).join("\n"),
      s.specs && specList(s.specs),
      s.stats && statList(s.stats, false),
    ),
  );

  return (
    blocks(
      `# ${detail.seo.title}`,
      header(site, slug),
      `> ${detail.seo.description}`,
      detail.kicker,
      `**${detail.title}** ${detail.lead}`,
      `## ${detail.factsTitle}`,
      specList(detail.facts),
      `## ${site.ui.numbers}`,
      statList(detail.stats),
      ...sections,
      detail.next &&
        `${site.ui.nextCase}: ${link(detail.next.title, casePath(site.basePath, detail.next.slug))} · ${link("Markdown", markdownPath(site.basePath, detail.next.slug))}`,
      contactBlock(site, true),
    ) + "\n"
  );
}

/**
 * /llms.txt (llmstxt.org): resumo e o mapa das versões em Markdown, nos dois idiomas.
 * Contato fica no texto livre antes do primeiro "##": item de lista ali precisa ser "- [nome](url)",
 * e o parser de referência baixa todo link das listas (LinkedIn, PDFs).
 */
export function llmsTxt(): string {
  const [pt, en] = [getContent("pt"), getContent("en")];
  const pages = (site: SiteContent, language: string) => [
    `- ${link(`${site.home.seo.title} (${language})`, markdownPath(site.basePath))}: ${site.home.hero.lead}`,
    ...(Object.keys(site.cases) as CaseSlug[]).map(
      (slug) => `- ${link(`${site.cases[slug].seo.title} (${language})`, markdownPath(site.basePath, slug))}: ${site.cases[slug].seo.description}`,
    ),
  ];
  return (
    blocks(
      `# ${PERSON.name}`,
      `> ${en.home.seo.description}`,
      pt.home.seo.description,
      `Email: ${CONTACT.email} · LinkedIn: ${CONTACT.linkedin} · GitHub: ${CONTACT.github} · CV (PDF): ${abs(CV_URL_EN)} (English), ${abs(CV_URL)} (Português)`,
      "## English",
      pages(en, "English").join("\n"),
      "## Português",
      pages(pt, "Português").join("\n"),
    ) + "\n"
  );
}

export function renderMarkdown(route: MarkdownRoute): string {
  if (route.kind === "llms") return llmsTxt();
  const site = getContent(route.locale);
  return route.kind === "home" ? homeMarkdown(site) : caseMarkdown(site, route.slug);
}

/** Aponta para o /llms.txt, como o llmstxt.org recomenda; vai no HTML das páginas e no Markdown. */
export const LLMS_LINK = `<${LLMS}>; rel="describedby"`;

/** Resposta pronta para o Worker, ou null para seguir ao app. O canonical aponta para o HTML. */
export function markdownResponse(method: string, pathname: string, accept: string | null): Response | null {
  if (method !== "GET" && method !== "HEAD") return null;
  const route = markdownRoute(pathname, accept);
  if (!route) return null;
  const headers = new Headers({
    "Content-Type": route.kind === "llms" ? "text/plain; charset=utf-8" : "text/markdown; charset=utf-8",
    "Cache-Control": "no-store, must-revalidate",
    Vary: "Accept",
  });
  if (route.kind !== "llms") {
    const site = getContent(route.locale);
    headers.set("Link", `<${htmlUrl(site, route.kind === "case" ? route.slug : undefined)}>; rel="canonical", ${LLMS_LINK}`);
  }
  return new Response(method === "HEAD" ? null : renderMarkdown(route), { headers });
}
