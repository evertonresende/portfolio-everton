import type { Metadata } from "next";
import { HomePage } from "../components/home/home-page";
import { getContent } from "../content";
import { pageMetadata } from "../seo";

const site = getContent("pt");

export const metadata: Metadata = pageMetadata(site, "/", site.home.seo);

export default function Page() {
  return <HomePage site={site} />;
}
