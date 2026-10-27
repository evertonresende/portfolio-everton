/** Páginas de projeto que saíram do site e a seção da home que as substitui (fapam em 2026-10-23, sat-bank e softplan em 2026-10-27). */
const REMOVED_PAGES: Readonly<Record<string, string>> = {
  fapam: "#trajetoria",
  "sat-bank": "#cases",
  softplan: "#trajetoria",
};

/** Destino do 301 para uma página removida: a seção da home no mesmo idioma. null = segue para o app. */
export function legacyRedirect(pathname: string): string | null {
  const match = /^(\/en)?\/projects\/([^/]+)\/?$/.exec(pathname);
  if (!match || !Object.hasOwn(REMOVED_PAGES, match[2])) return null;
  return (match[1] ? "/en" : "/") + REMOVED_PAGES[match[2]];
}
