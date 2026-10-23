import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { findMarkers } from "./check-content.mjs";

const script = fileURLToPath(new URL("./check-content.mjs", import.meta.url));

async function fixture(files) {
  const dir = await mkdtemp(join(tmpdir(), "check-content-"));
  for (const [name, body] of Object.entries(files)) {
    await mkdir(join(dir, name, ".."), { recursive: true });
    await writeFile(join(dir, name), body);
  }
  return dir;
}

test("acha placeholder em subpasta, com arquivo e linha", async () => {
  const dir = await fixture({
    "content/pt.ts": 'export const a = "ok";\nexport const b = "{{CONFIRMAR: link de agenda}}";\n',
    "page.tsx": "export default () => null;\n",
  });
  const hits = await findMarkers(dir);
  assert.equal(hits.length, 1);
  assert.equal(hits[0].line, 2);
  assert.match(hits[0].path, /content\/pt\.ts$/);
});

test("pasta limpa não tem placeholder", async () => {
  const dir = await fixture({ "content/pt.ts": 'export const a = "Confirmado.";\n' });
  assert.deepEqual(await findMarkers(dir), []);
});

test("CLI sai com 1 quando há placeholder e 0 quando não há", async () => {
  const dirty = await fixture({ "x.ts": "{{CONFIRMAR: anos}}\n" });
  const clean = await fixture({ "x.ts": "7+\n" });
  assert.throws(() => execFileSync("node", [script, dirty], { stdio: "pipe" }), { status: 1 });
  assert.doesNotThrow(() => execFileSync("node", [script, clean], { stdio: "pipe" }));
});
