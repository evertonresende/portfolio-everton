/** Cases que tinham página e saíram do site (fapam em 2026-10-23, sat-bank em 2026-10-27). */
const REMOVED_CASES = new Set(["fapam", "sat-bank"]);

/** Destino do 301 para um case removido: a seção de cases da home no mesmo idioma. null = segue para o app. */
export function legacyRedirect(pathname: string): string | null {
  const match = /^(\/en)?\/projects\/([^/]+)\/?$/.exec(pathname);
  if (!match || !REMOVED_CASES.has(match[2])) return null;
  return match[1] ? "/en#cases" : "/#cases";
}
