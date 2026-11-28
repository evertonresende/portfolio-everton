// Gera as imagens de prévia de link (Open Graph, 1200x630) a partir de scripts/og/og.html:
//   PLAYWRIGHT_DIR=<.../node_modules/playwright> node scripts/og/render.cjs <saida-pt.png> <saida-en.png>
// O cargo fica no og.html; o subtítulo de cada idioma, aqui. Imagem nova = nome novo (og-v3.png...) e OG_IMAGE em
// app/content/shared.ts, senão WhatsApp e LinkedIn seguem mostrando a prévia velha do cache deles.
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require(process.env.PLAYWRIGHT_DIR || "playwright");

const [outPt, outEn] = process.argv.slice(2);
if (!outPt || !outEn) {
  console.error("uso: node scripts/og/render.cjs <saida-pt.png> <saida-en.png>");
  process.exit(1);
}
const page = pathToFileURL(path.join(__dirname, "og.html")).href;
const jobs = [
  [outPt, "LLMs, agentes e RAG em produção · 7+ anos em software"],
  [outEn, "LLMs, agents and RAG in production · 7+ years in software"],
];

(async () => {
  const browser = await chromium.launch();
  const p = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const [out, sub] of jobs) {
    await p.goto(`${page}?sub=${encodeURIComponent(sub)}`);
    await p.evaluate(() => document.fonts.ready);
    const fonts = await p.evaluate(() => [document.fonts.check("800 186px Inter"), document.fonts.check('400 24px "JetBrains Mono"')]);
    if (fonts.includes(false)) throw new Error(`fonte não carregou em ${out}: ${fonts}`);
    await p.screenshot({ path: out });
    console.log(out);
  }
  await browser.close();
})();
