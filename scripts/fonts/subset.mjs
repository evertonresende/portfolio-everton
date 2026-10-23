// Gera public/fonts/*.woff2 a partir das fontes oficiais. Não é dependência do site: roda fora do repo.
//
//   mkdir /tmp/fontes && cd /tmp/fontes && npm i subset-font@2
//   curl -LO https://raw.githubusercontent.com/rsms/inter/v4.1/docs/font-files/InterVariable.woff2
//   curl -L -o JetBrainsMono.ttf "https://github.com/JetBrains/JetBrainsMono/raw/v2.304/fonts/variable/JetBrainsMono%5Bwght%5D.ttf"
//   cp <repo>/scripts/fonts/subset.mjs . && node subset.mjs && cp *.woff2 <repo>/public/fonts/
//
// Decisões: recorte "latin" do Google Fonts + setas (→ ↓) usadas no site; só os pesos usados
// (Inter 400–800, mono 400–500); Inter com opsz fixo em 14 (o desenho do canvas) e cv08 (I com
// serifa do "AI Engineer."). Os @font-face em app/globals.css declaram os mesmos intervalos de peso.
import subsetFont from "subset-font";
import { readFile, writeFile } from "node:fs/promises";

const RANGES = [[0x20, 0x7e], [0xa0, 0xff], [0x131, 0x131], [0x152, 0x153], [0x2bb, 0x2bc], [0x2c6, 0x2c6], [0x2da, 0x2da], [0x2dc, 0x2dc], [0x304, 0x304], [0x308, 0x308], [0x329, 0x329], [0x2000, 0x206f], [0x20ac, 0x20ac], [0x2122, 0x2122], [0x2190, 0x2193], [0x2197, 0x2197], [0x2212, 0x2212], [0x2215, 0x2215], [0xfeff, 0xfeff], [0xfffd, 0xfffd]];
const TEXT = RANGES.flatMap(([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => String.fromCodePoint(a + i))).join("");
const BASE_FEATURES = ["rvrn", "ccmp", "locl", "mark", "mkmk", "kern", "case", "tnum"];

const FONTS = [
  {
    src: "InterVariable.woff2",
    out: "inter-latin.woff2",
    axes: { opsz: 14, wght: { min: 400, max: 800, default: 400 } },
    features: [...BASE_FEATURES, "liga", "clig", "rlig", "calt", "cv08"],
  },
  {
    src: "JetBrainsMono.ttf",
    out: "jetbrains-mono-latin.woff2",
    axes: { wght: { min: 400, max: 500, default: 400 } },
    features: [...BASE_FEATURES, "zero"],
  },
];

for (const font of FONTS) {
  const out = await subsetFont(await readFile(font.src), TEXT, { targetFormat: "woff2", variationAxes: font.axes, keepFeatures: font.features });
  await writeFile(font.out, out);
  console.log(font.out, out.length, "bytes");
}
