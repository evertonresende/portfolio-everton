import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "../../../../components/case/case-page";
import { PageFrame } from "../../../../components/page-frame";
import { casePath, getContent } from "../../../../content";
import type { CaseSlug } from "../../../../content/types";
import { notFoundMetadata, pageMetadata } from "../../../../seo";

const site = getContent("en");

interface Props {
  readonly params: Promise<{ slug: string }>;
}

// O slug vem da URL: hasOwn impede que "constructor" ou "__proto__" achem algo no protótipo.
function find(slug: string) {
  return Object.hasOwn(site.cases, slug) ? site.cases[slug as CaseSlug] : undefined;
}

export function generateStaticParams() {
  return Object.keys(site.cases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seo = find(slug)?.seo;
  return seo ? pageMetadata(site, `/projects/${slug}`, seo) : notFoundMetadata(site);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const detail = find(slug);
  if (!detail) notFound();
  return (
    <PageFrame site={site} alternateHref={casePath(site.nav.alternate.basePath, slug)}>
      <CasePage site={site} detail={detail} />
    </PageFrame>
  );
}
