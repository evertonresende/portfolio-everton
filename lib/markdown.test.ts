import { test } from "node:test";
import assert from "node:assert/strict";
import { isAiAgent, isPagePath, markdownResponse, markdownRoute, renderMarkdown, wantsMarkdown } from "./markdown.ts";
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

test("agente de IA pelo nome exato; buscadores, prévia de link e navegador ficam no HTML", () => {
  const ai = [
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.4; +https://openai.com/gptbot)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
    "meta-externalagent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)",
    "Meta-ExternalAgent/1.1",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot",
    "Claude-User (claude-code/2.1; +https://support.anthropic.com/)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)",
  ];
  const html = [
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; Googlebot-Image/1.0)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-SearchBot/1.0; +searchbot@anthropic.com)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)",
    "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)",
    "WhatsApp/2.23.20.0",
    "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
  ];
  for (const ua of ai) assert.equal(isAiAgent(ua), true, ua);
  for (const ua of html) assert.equal(isAiAgent(ua), false, ua);
  assert.equal(isAiAgent(null), false);

  assert.deepEqual(markdownRoute("/en/projects/tazz", "*/*", true), { kind: "case", locale: "en", slug: "tazz" });
  assert.equal(markdownRoute("/projects/nao-existe", "*/*", true), null);
  assert.equal(markdownRoute("/images/everton-v2-480.webp", "*/*", true), null);
  assert.equal(markdownResponse("GET", "/", BROWSER, true)?.headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.equal(markdownResponse("GET", "/", BROWSER, false), null);
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
  assert.equal(md.headers.get("Vary"), "Accept, User-Agent");
  assert.equal(md.headers.get("Link"), '<https://evertonresende.com/en/projects/tazz>; rel="canonical", </llms.txt>; rel="describedby"');
  assert.match(await md.text(), /^# Tazz/);

  const llms = markdownResponse("GET", "/llms.txt", null);
  assert.equal(llms?.headers.get("Content-Type"), "text/plain; charset=utf-8");
  assert.equal(llms?.headers.get("X-Robots-Tag"), "noindex");
  assert.equal(md.headers.get("X-Robots-Tag"), null); // .md tem canonical para o HTML, não noindex

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

test("/llms-full.txt junta as 6 páginas num arquivo só e o llms.txt aponta para ele", async () => {
  assert.deepEqual(markdownRoute("/llms-full.txt", null), { kind: "llms-full" });
  const res = markdownResponse("GET", "/llms-full.txt", null);
  assert.equal(res?.headers.get("Content-Type"), "text/plain; charset=utf-8");
  assert.equal(res?.headers.get("X-Robots-Tag"), "noindex");
  const full = await res!.text();
  for (const locale of ["en", "pt"] as Locale[]) {
    const site = getContent(locale);
    assert.ok(full.includes(renderMarkdown({ kind: "home", locale })), `${locale} home`);
    for (const slug of Object.keys(site.cases) as CaseSlug[]) assert.ok(full.includes(renderMarkdown({ kind: "case", locale, slug })), `${locale}/${slug}`);
  }
  assert.ok(full.startsWith(renderMarkdown({ kind: "home", locale: "en" })));
  assert.ok(renderMarkdown({ kind: "llms" }).split(/^## /m)[0].includes("https://evertonresende.com/llms-full.txt"));
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
