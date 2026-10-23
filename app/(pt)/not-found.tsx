import { NotFoundPage } from "../components/not-found-page";
import { getContent } from "../content";
import { notFoundMetadata } from "../seo";

const site = getContent("pt");

export const metadata = notFoundMetadata(site);

export default function NotFound() {
  return <NotFoundPage site={site} />;
}
