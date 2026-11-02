import { test } from "node:test";
import assert from "node:assert/strict";
import { legacyRedirect } from "./redirects.ts";

test("legacyRedirect manda as páginas que saíram para a seção da home que as substitui, no mesmo idioma", () => {
  assert.equal(legacyRedirect("/projects/sat-bank"), "/#cases");
  assert.equal(legacyRedirect("/en/projects/sat-bank/"), "/en#cases");
  assert.equal(legacyRedirect("/projects/fapam/"), "/#trajetoria");
  assert.equal(legacyRedirect("/en/projects/fapam"), "/en#trajetoria");
  assert.equal(legacyRedirect("/projects/softplan"), "/#trajetoria");
  assert.equal(legacyRedirect("/en/projects/softplan"), "/en#trajetoria");
});

test("apelidos do llms.txt (singular, .md) vão para o endereço padrão", () => {
  assert.equal(legacyRedirect("/llm.txt"), "/llms.txt");
  assert.equal(legacyRedirect("/llm.md"), "/llms.txt");
  assert.equal(legacyRedirect("/llms.md"), "/llms.txt");
  assert.equal(legacyRedirect("/llm-full.txt"), "/llms-full.txt");
  assert.equal(legacyRedirect("/llms.txt"), null);
  assert.equal(legacyRedirect("/llms-full.txt"), null);
});

test("legacyRedirect não mexe em case que existe nem em outra rota", () => {
  for (const path of ["/", "/en", "/projects/tazz", "/en/projects/dental-smart", "/projects/sat-bank/extra", "/xx/projects/fapam", "/projects/constructor"]) {
    assert.equal(legacyRedirect(path), null, path);
  }
});
