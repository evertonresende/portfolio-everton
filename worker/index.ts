import handler from "vinext/server/app-router-entry";
import { canonicalRedirect, legacyRedirect } from "../lib/redirects";
import { LLMS_LINK, isAiAgent, isPagePath, markdownResponse } from "../lib/markdown";

async function route(request: Request, url: URL): Promise<Response> {
  const target = legacyRedirect(url.pathname);
  if (target) {
    const dest = new URL(target, url);
    dest.search = url.search; // mantém utm de link antigo
    return Response.redirect(dest.href, 301);
  }
  const aiAgent = isAiAgent(request.headers.get("User-Agent"));
  const markdown = markdownResponse(request.method, url.pathname, request.headers.get("Accept"), aiAgent);
  if (markdown) return markdown;
  const response = await handler.fetch(request);
  if (!isPagePath(url.pathname)) return response;
  // A mesma URL responde Markdown para Accept: text/markdown e para agente de IA; o cache não pode misturar.
  const page = new Response(response.body, response);
  page.headers.append("Vary", "Accept, User-Agent");
  page.headers.append("Link", LLMS_LINK);
  return page;
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const canonical = canonicalRedirect(url);
    if (canonical) return Response.redirect(canonical, 301);
    const response = await route(request, url);
    if (!url.hostname.endsWith(".workers.dev")) return response;
    // workers.dev e as URLs de preview são cópias do site: ficam fora do Google, que indexa só evertonresende.com.
    const copy = new Response(response.body, response);
    copy.headers.set("X-Robots-Tag", "noindex");
    return copy;
  },
};
