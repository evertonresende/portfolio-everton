import type { ReactNode } from "react";
import "../globals.css";
import { RootDocument } from "../components/root-document";
import { SITE_URL } from "../content/shared";

export const metadata = { metadataBase: new URL(SITE_URL) };
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#fafafa" };

export default function Layout({ children }: { children: ReactNode }) {
  return <RootDocument lang="pt-BR">{children}</RootDocument>;
}
