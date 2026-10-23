import type { ReactNode } from "react";
import "../globals.css";
import { RootDocument } from "../components/root-document";
import { getContent } from "../content";
import { SITE_URL } from "../content/shared";

export const metadata = { metadataBase: new URL(SITE_URL) };
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#fafafa" };

export default function Layout({ children }: { children: ReactNode }) {
  return <RootDocument lang={getContent("en").htmlLang}>{children}</RootDocument>;
}
