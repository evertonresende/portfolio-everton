import { test } from "node:test";
import assert from "node:assert/strict";
import { cn, glueSeparators, splitLastPair } from "./utils.ts";

const NBSP = " ";

test("glueSeparators prende o · ao item anterior", () => {
  assert.equal(glueSeparators("TypeScript · React · Workers"), `TypeScript${NBSP}· React${NBSP}· Workers`);
  assert.equal(glueSeparators("sem separador"), "sem separador");
});

test("splitLastPair separa as duas últimas palavras do título", () => {
  assert.deepEqual(splitLastPair("Coloco IA em produção."), ["Coloco IA ", "em produção."]);
  // Com 2 palavras não separa: seria o único ponto de quebra do título no celular.
  assert.equal(splitLastPair("Shipped products."), null);
  // Espaço não separável cola duas palavras: elas contam como uma e o NBSP sobrevive.
  assert.deepEqual(splitLastPair("Agente no ar. App novo a caminho."), ["Agente no ar. App novo ", "a caminho."]);
});

test("cn mantém tamanho de fonte custom junto de cor de texto", () => {
  assert.equal(cn("text-mono-xs", "text-muted"), "text-mono-xs text-muted");
});
