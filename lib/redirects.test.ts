import { test } from "node:test";
import assert from "node:assert/strict";
import { legacyRedirect } from "./redirects.ts";

test("legacyRedirect manda os cases que saíram para os cases da home, no mesmo idioma", () => {
  assert.equal(legacyRedirect("/projects/sat-bank"), "/#cases");
  assert.equal(legacyRedirect("/projects/fapam/"), "/#cases");
  assert.equal(legacyRedirect("/en/projects/sat-bank"), "/en#cases");
  assert.equal(legacyRedirect("/en/projects/fapam"), "/en#cases");
  assert.equal(legacyRedirect("/en/projects/sat-bank/"), "/en#cases");
});

test("legacyRedirect não mexe em case que existe nem em outra rota", () => {
  for (const path of ["/", "/en", "/projects/tazz", "/en/projects/dental-smart", "/projects/sat-bank/extra", "/xx/projects/fapam"]) {
    assert.equal(legacyRedirect(path), null, path);
  }
});
