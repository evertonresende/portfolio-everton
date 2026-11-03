// Mede os blocos de um currículo em px na mídia de impressão, para caber em 2 páginas sem chutar:
//   node scripts/cv/measure.cjs curriculo-en.html
// Página útil = 297mm − margens do @page (12 + 14mm) = 271mm = 1024px; largura = 210 − 32mm = 178mm = 673px.
// Um .item tem break-inside: avoid, então o último bloco de cada página precisa terminar antes de 1024 / 2048.
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_DIR || "playwright");

const PAGE = 1024;
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.emulateMedia({ media: "print" });
  await page.setViewportSize({ width: 673, height: 1200 });
  await page.goto("file://" + path.resolve(process.argv[2]), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const { rows, total } = await page.evaluate(() => {
    const rows = [];
    for (const el of document.querySelectorAll(".header, .summary, h2, .item, .skills, .plain")) {
      const r = el.getBoundingClientRect();
      const name = el.tagName === "H2" ? "h2 " + el.textContent : (el.querySelector("h3")?.textContent || el.className);
      rows.push([Math.round(r.top), Math.round(r.height), Math.round(r.bottom), name.replace(/\s+/g, " ").trim().slice(0, 40)]);
    }
    return { rows, total: Math.round(document.querySelector(".page").getBoundingClientRect().height) };
  });
  // Simula a quebra: o bloco que cruza a página desce inteiro para a próxima e empurra os seguintes (h2 vai junto com o item).
  let shift = 0;
  let breaker = "";
  const placed = rows.map(([top, height, bottom, name]) => {
    const t = top + shift;
    if (!breaker && t < PAGE && t + height > PAGE && !name.startsWith("h2 ")) {
      shift += PAGE - t;
      breaker = name;
    }
    return [top + shift, height, bottom + shift, name];
  });
  const end = Math.max(...placed.map((r) => r[2]));
  console.log(`${process.argv[2]}: ${total}px de conteúdo; página = ${PAGE}px; abre a 2ª página: ${breaker || "nada"}; sobra na 2ª página = ${2 * PAGE - end}px`);
  console.log("  top  alt  fim  bloco (já com a quebra)");
  for (const [top, height, bottom, name] of placed) {
    console.log(`${String(top).padStart(5)} ${String(height).padStart(4)} ${String(bottom).padStart(5)}  ${name}${name === breaker ? "  <- 2ª página" : ""}`);
  }
  await browser.close();
})();
