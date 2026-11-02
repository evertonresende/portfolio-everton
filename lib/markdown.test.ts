import { test } from "node:test";
import assert from "node:assert/strict";
import { isPagePath, markdownResponse, markdownRoute, renderMarkdown, wantsMarkdown } from "./markdown.ts";
import { getContent } from "../app/content/index.ts";
import type { CaseSlug, Locale } from "../app/content/types.ts";
import { CONTACT } from "../app/content/shared.ts";

const BROWSER = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";

test("URLs próprias de Markdown apontam para a página certa no idioma certo", () => {
  assert.deepEqual(markdownRoute("/llms.txt", null), { kind: "llms" });
  assert.deepEqual(markdownRoute("/index.md", null), { kind: "home", locale: "pt" });
  assert.deepEqual(markdownRoute("/md", null), { kind: "home", locale: "pt" });
  assert.deepEqual(markdownRoute("/en/index.md", null), { kind: "home", locale: "en" });
  assert.deepEqual(markdownRoute("/en/md", null), { kind: "home", locale: "en" });
  assert.deepEqual(markdownRoute("/projects/tazz.md", null), { kind: "case", locale: "pt", slug: "tazz" });
  assert.deepEqual(markdownRoute("/en/projects/dental-smart.md", null), { kind: "case", locale: "en", slug: "dental-smart" });
  assert.equal(markdownRoute("/projects/nao-existe.md", null), null);
  assert.equal(markdownRoute("/projects/sat-bank.md", null), null);
});

test("a URL da página só vira Markdown quando o cliente pede text/markdown (sem olhar User-Agent)", () => {
  assert.deepEqual(markdownRoute("/", "text/markdown"), { kind: "home", locale: "pt" });
  assert.deepEqual(markdownRoute("/en/projects/tazz", "text/markdown, text/html, */*"), { kind: "case", locale: "en", slug: "tazz" });
  assert.equal(markdownRoute("/", BROWSER), null);
  assert.equal(markdownRoute("/", "*/*"), null); // curl, robôs de prévia e Googlebot
  assert.equal(markdownRoute("/", null), null);
  assert.equal(markdownRoute("/", "text/markdown;q=0"), null);
  assert.equal(markdownRoute("/", "text/html, text/markdown;q=0.5"), null); // prefere HTML
  assert.equal(markdownRoute("/projects/nao-existe", "text/markdown"), null); // 404 segue com o app
  assert.equal(wantsMarkdown("text/markdown;q=0.9, text/html;q=0.9"), true);
});

test("isPagePath marca só as páginas que também respondem Markdown", () => {
  for (const path of ["/", "/en", "/projects/tazz", "/en/projects/dental-smart"]) assert.equal(isPagePath(path), true, path);
  for (const path of ["/projects/nao-existe", "/images/everton-v2-480.webp", "/index.md", "/llms.txt", "/cv-everton-resende.pdf"]) {
    assert.equal(isPagePath(path), false, path);
  }
});

test("markdownResponse: tipo, Vary e canonical para o HTML; só GET e HEAD", async () => {
  const md = markdownResponse("GET", "/en/projects/tazz", "text/markdown");
  assert.ok(md);
  assert.equal(md.headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.equal(md.headers.get("Vary"), "Accept");
  assert.equal(md.headers.get("Link"), '<https://evertonresende.com/en/projects/tazz>; rel="canonical", </llms.txt>; rel="describedby"');
  assert.match(await md.text(), /^# Tazz/);

  const llms = markdownResponse("GET", "/llms.txt", null);
  assert.equal(llms?.headers.get("Content-Type"), "text/plain; charset=utf-8");

  const head = markdownResponse("HEAD", "/index.md", null);
  assert.equal(head?.body, null);
  assert.equal(markdownResponse("POST", "/index.md", null), null);
  assert.equal(markdownResponse("GET", "/", BROWSER), null);
});

test("o Markdown traz o conteúdo das páginas, sem buraco, nos dois idiomas", () => {
  for (const locale of ["pt", "en"] as Locale[]) {
    const site = getContent(locale);
    const home = renderMarkdown({ kind: "home", locale });
    assert.doesNotMatch(home, /undefined|\[object|NaN/);
    for (const item of site.home.cases.items) assert.ok(home.includes(item.title) && home.includes(item.result), `${locale} home: ${item.title}`);
    assert.ok(home.includes(CONTACT.email));
    assert.ok(home.includes(`https://evertonresende.com${site.home.hero.cv.href}`));

    for (const slug of Object.keys(site.cases) as CaseSlug[]) {
      const page = renderMarkdown({ kind: "case", locale, slug });
      assert.doesNotMatch(page, /undefined|\[object|NaN/);
      for (const section of site.cases[slug].sections) {
        assert.ok(page.includes(section.label) && page.includes(section.title), `${locale}/${slug}: ${section.label}`);
        for (const p of section.paragraphs ?? []) assert.ok(page.includes(p), `${locale}/${slug}: parágrafo`);
      }
    }
  }
});

test("llms.txt segue o formato do llmstxt.org: toda linha de lista é '- [nome](url)', contato fica fora das listas", () => {
  const llms = renderMarkdown({ kind: "llms" });
  assert.match(llms, /^# .+\n\n> .+/);
  const [intro, ...sections] = llms.split(/^## /m);
  assert.ok(intro.includes(CONTACT.email), "contato no texto livre antes do primeiro ##");
  assert.ok(sections.length >= 2);
  // Regex de parse_link do parser de referência (AnswerDotAI/llms-txt, llms_txt/core.py).
  const item = /^-\s*\[[^\]]+\]\([^)]+\)(?::\s*.*)?$/;
  for (const line of sections.join("\n").split("\n").filter((l) => l.startsWith("-"))) assert.match(line, item);
});

test("a ficha de 'Como trabalho' não vira item da lista 'Eu delego' (marcador diferente fecha a lista)", () => {
  for (const locale of ["pt", "en"] as Locale[]) {
    const { delegate, specs } = getContent(locale).home.howIWork;
    const home = renderMarkdown({ kind: "home", locale });
    const lastDelegated = `- ${delegate.items.at(-1)!.text}\n\n`;
    assert.ok(home.includes(lastDelegated + `* **${specs[0].term}:**`), locale);
  }
});

test("todo link .md do llms.txt e das páginas abre um Markdown que existe", () => {
  const docs = [
    renderMarkdown({ kind: "llms" }),
    ...(["pt", "en"] as Locale[]).flatMap((locale) => [
      renderMarkdown({ kind: "home", locale }),
      ...(Object.keys(getContent(locale).cases) as CaseSlug[]).map((slug) => renderMarkdown({ kind: "case", locale, slug })),
    ]),
  ];
  const links = new Set(docs.flatMap((doc) => [...doc.matchAll(/\]\(https:\/\/evertonresende\.com(\/[^)]*\.md)\)/g)].map((m) => m[1])));
  assert.ok(links.size >= 6, `poucos links: ${[...links].join(", ")}`);
  for (const path of links) assert.ok(markdownRoute(path, null), path);
});
