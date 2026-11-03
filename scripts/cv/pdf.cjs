// Gera o PDF de um currículo: node scripts/cv/pdf.cjs <curriculo.html> <saida.pdf> <site no rodapé>
// A4 pelo @page do curriculo.css, tagged (acessível e legível por ATS), rodapé "Nome · site · página / total".
// Playwright não é dependência do site: usa o do cache do npx (npx playwright install chromium) ou um instalado no PATH do Node.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { chromium } = require(process.env.PLAYWRIGHT_DIR || "playwright");

const [src, out, site] = process.argv.slice(2);
if (!src || !out || !site) {
  console.error("uso: node scripts/cv/pdf.cjs <curriculo.html> <saida.pdf> <site>");
  process.exit(1);
}
// Sem a fonte no sistema o rodapé sairia em DejaVu sem aviso (ver abaixo): parar aqui.
if (!/JetBrains Mono/i.test(execSync("fc-list", { encoding: "utf8" }))) {
  console.error("JetBrains Mono não está instalada para o usuário; veja a instalação no comentário deste script.");
  process.exit(1);
}

// O rodapé é um documento à parte, sem o CSS da página: estilo inline, alinhado à margem lateral do @page (16mm), na cor --muted
// e no tamanho das outras linhas em mono. Fica na margem inferior. A fonte só vem do sistema: @font-face (file:// ou data URI) no
// template não carrega a tempo e o Chromium cai no DejaVu Sans Mono (medido em 2026-11-03). Instalar uma vez, sem sudo:
//   python3 -c "from fontTools.ttLib import TTFont; f=TTFont('scripts/fonts/cv/jetbrains-mono-latin-400-normal.woff2'); f.flavor=None; f.save('/tmp/jb.ttf')"
//   mkdir -p ~/.local/share/fonts && mv /tmp/jb.ttf ~/.local/share/fonts/JetBrainsMono-latin-400.ttf && fc-cache -f
// Conferir: `pdffonts <pdf>` não pode listar DejaVu.
const footer = `<div style="width:100%;margin:0 16mm;display:flex;justify-content:space-between;font:9.6px 'JetBrains Mono',monospace;color:#5e5e5e">
  <span>Everton Resende · ${site}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.resolve(src), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: out,
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
    outline: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: footer,
  });
  await browser.close();
  // O currículo é de 2 páginas: uma linha a mais de texto vira página 3 em silêncio. scripts/cv/measure.cjs mostra a folga.
  const pages = (fs.readFileSync(out, "latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  if (pages !== 2) {
    console.error(`${out}: ${pages} páginas, esperava 2. Encurte o texto ou o espaçamento (node scripts/cv/measure.cjs ${src}).`);
    process.exit(1);
  }
  console.log(`${out}: 2 páginas`);
})();
