import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BriefPage } from "../../../../components/case/brief-page";
import { CasePage } from "../../../../components/case/case-page";
import { PageFrame } from "../../../../components/page-frame";
import { casePath, getContent } from "../../../../content";
import type { BriefSlug, CaseSlug } from "../../../../content/types";
import { notFoundMetadata, pageMetadata } from "../../../../seo";

const site = getContent("en");

interface Props {
  readonly params: Promise<{ slug: string }>;
}

// O slug vem da URL: hasOwn impede que "constructor" ou "__proto__" achem algo no protótipo.
function find(slug: string) {
  return {
    detail: Object.hasOwn(site.cases, slug) ? site.cases[slug as CaseSlug] : undefined,
    brief: Object.hasOwn(site.briefs, slug) ? site.briefs[slug as BriefSlug] : undefined,
  };
}

export function generateStaticParams() {
  return [...Object.keys(site.cases), ...Object.keys(site.briefs)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { detail, brief } = find(slug);
  const seo = (detail ?? brief)?.seo;
  return seo ? pageMetadata(site, `/projects/${slug}`, seo) : notFoundMetadata(site);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { detail, brief } = find(slug);
  const page = detail ? (
    <CasePage site={site} detail={detail} />
  ) : brief ? (
    <BriefPage site={site} brief={brief} />
  ) : (
    notFound()
  );
  return (
    <PageFrame site={site} alternateHref={casePath(site.nav.alternate.basePath, slug)}>
      {page}
    </PageFrame>
  );
}
