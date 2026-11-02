import handler from "vinext/server/app-router-entry";
import { legacyRedirect } from "../lib/redirects";
import { LLMS_LINK, isPagePath, markdownResponse } from "../lib/markdown";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const target = legacyRedirect(url.pathname);
    if (target) {
      const dest = new URL(target, url);
      dest.search = url.search; // mantém utm de link antigo
      return Response.redirect(dest.href, 301);
    }
    const markdown = markdownResponse(request.method, url.pathname, request.headers.get("Accept"));
    if (markdown) return markdown;
    const response = await handler.fetch(request);
    if (!isPagePath(url.pathname)) return response;
    // A mesma URL responde Markdown com Accept: text/markdown; o cache não pode misturar as duas.
    const page = new Response(response.body, response);
    page.headers.append("Vary", "Accept");
    page.headers.append("Link", LLMS_LINK);
    return page;
  },
};
