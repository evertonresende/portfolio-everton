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
    // O H1 virou cargo + tagline em duas linhas; o Markdown mantém a frase inteira do posicionamento.
    assert.ok(home.includes(`**AI Engineer · ${site.home.hero.tagline}**`), `${locale} home: posicionamento`);
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

test("/llms-full.txt junta todas as páginas num arquivo só e o llms.txt aponta para ele", async () => {
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

test("posicionamento: consultoria encerrada, início imediato, MCP e provas públicas nos dois idiomas", () => {
  for (const locale of ["pt", "en"] as Locale[]) {
    const pt = locale === "pt";
    const site = getContent(locale);
    const home = renderMarkdown({ kind: "home", locale });
    assert.doesNotMatch(home, /contrato internacional|international contract/i);
    assert.match(home, pt ? /início imediato/ : /immediate start/);
    assert.match(home, pt ? /viagens pontuais/ : /occasional travel/);
    assert.match(home, pt ? /servidores MCP/ : /MCP servers/);
    assert.match(home, pt ? /LangChain, LangGraph e LangSmith/ : /LangChain, LangGraph and LangSmith/);
    assert.ok(home.indexOf("agente-concierge") < home.indexOf("agent-evals-demo"), "agente-concierge vem primeiro");
    assert.match(home, pt ? /sintéticos/ : /synthetic/);
    // Nenhum vínculo em aberto: sem "– hoje/present" e sem "sigo como engenheiro".
    for (const text of [home, ...Object.keys(site.cases).map((slug) => renderMarkdown({ kind: "case", locale, slug: slug as CaseSlug }))]) {
      assert.doesNotMatch(text, /[–-]\s*(hoje|present)\b|sigo como engenheiro|still own|still building/i);
    }
    const { rows } = site.home.timeline;
    assert.equal(rows[0].period, pt ? "out 2025 – nov 2026" : "Oct 2025 – Nov 2026"); // com mês, igual ao CV
    assert.match(rows[0].company, /Coppay.*Tazz.*Rota Protegida.*Dental Smart.*Maximus.*Davions/);
    const coppay = rows.find((r) => r.company === "Coppay");
    assert.ok(coppay, `${locale}: linha da Coppay`);
    assert.doesNotMatch(coppay.mode, /CLT/); // Coppay foi PJ
    for (const item of site.home.cases.items) assert.match(item.meta, pt ? /Consultoria e execução/ : /Consulting and execution/);
    const tazz = site.home.cases.items.find((item) => item.slug === "tazz");
    assert.match(tazz?.meta ?? "", pt ? /6 meses em 2026/ : /6 months in 2026/); // igual ao CV
    // Ordem dos cases (escolha dele, 2026-11-27): fintech primeiro; index e next acompanham.
    assert.deepEqual(site.home.cases.items.map((item) => item.slug), ["coppay", "tazz", "maximus", "dental-smart", "rota-protegida", "davions"]);
    site.home.cases.items.forEach((item, i) => assert.equal(item.index, `0${i + 1}`));
    for (const detail of Object.values(site.cases)) {
      if (detail.next) assert.equal(detail.next.index, site.home.cases.items.find((item) => item.slug === detail.next?.slug)?.index);
    }
    // Página de case: o número do kicker é o da home, e o cartão da home leva o botão "Ver case".
    for (const [slug, detail] of Object.entries(site.cases)) {
      const item = site.home.cases.items.find((i) => i.slug === slug);
      assert.equal(item?.hasPage, true, `${locale}/${slug}: hasPage`);
      assert.ok(detail.kicker.startsWith(`Case ${item?.index} · `), `${locale}/${slug}: kicker ${detail.kicker}`);
    }
    assert.deepEqual(Object.keys(site.cases), ["coppay", "tazz", "dental-smart"]);
  }
});
