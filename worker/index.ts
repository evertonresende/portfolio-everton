import handler from "vinext/server/app-router-entry";
import { legacyRedirect } from "../lib/redirects";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const target = legacyRedirect(url.pathname);
    if (target) {
      const dest = new URL(target, url);
      dest.search = url.search; // mantém utm de link antigo
      return Response.redirect(dest.href, 301);
    }
    return handler.fetch(request);
  },
};
