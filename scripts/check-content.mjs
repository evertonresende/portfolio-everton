// Falha o build se sobrar {{CONFIRMAR em app/: nenhum fato vai ao ar sem confirmação.
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const MARKER = "{{CONFIRMAR";

export async function findMarkers(dir) {
  const hits = [];
  for (const entry of await readdir(dir, { withFileTypes: true, recursive: true })) {
    if (!entry.isFile()) continue;
    const path = join(entry.parentPath, entry.name);
    const lines = (await readFile(path, "utf8")).split("\n");
    lines.forEach((text, i) => {
      if (text.includes(MARKER)) hits.push({ path, line: i + 1, text: text.trim() });
    });
  }
  return hits;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dir = process.argv[2] ?? "app";
  const hits = await findMarkers(dir);
  if (hits.length > 0) {
    console.error(`check-content: ${hits.length} placeholder(s) {{CONFIRMAR}} em ${dir}/`);
    for (const h of hits) console.error(`  ${h.path}:${h.line}  ${h.text}`);
    process.exit(1);
  }
  console.log(`check-content: nenhum {{CONFIRMAR}} em ${dir}/`);
}
