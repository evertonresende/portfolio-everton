/** Páginas de projeto que saíram do site e a seção da home que as substitui (fapam em 2026-10-23, sat-bank e softplan em 2026-10-27). */
const REMOVED_PAGES: Readonly<Record<string, string>> = {
  fapam: "#trajetoria",
  "sat-bank": "#cases",
  softplan: "#trajetoria",
};

/** Nomes que pessoas e agentes tentam para o llms.txt (singular, .md): 301 para o endereço padrão do llmstxt.org. */
const LLMS_ALIASES: Readonly<Record<string, string>> = {
  "/llm.txt": "/llms.txt",
  "/llm.md": "/llms.txt",
  "/llms.md": "/llms.txt",
  "/llm-full.txt": "/llms-full.txt",
};

/** Destino do 301: apelido do llms.txt, ou página removida → seção da home no mesmo idioma. null = segue para o app. */
export function legacyRedirect(pathname: string): string | null {
  if (Object.hasOwn(LLMS_ALIASES, pathname)) return LLMS_ALIASES[pathname];
  const match = /^(\/en)?\/projects\/([^/]+)\/?$/.exec(pathname);
  if (!match || !Object.hasOwn(REMOVED_PAGES, match[2])) return null;
  return (match[1] ? "/en" : "/") + REMOVED_PAGES[match[2]];
}
