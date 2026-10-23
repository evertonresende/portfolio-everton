import { notFound } from "next/navigation";
import { PageFrame } from "../../../components/page-frame";
import { getContent } from "../../../content";

export function generateStaticParams() {
  const site = getContent("pt");
  return [...Object.keys(site.cases), ...Object.keys(site.briefs)].map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getContent("pt");
  const detail = site.cases[slug] ?? site.briefs[slug];
  if (!detail) notFound();
  return (
    <PageFrame site={site} alternateHref={`/en/projects/${slug}`}>
      <h1 className="text-display-1 px-gutter">{detail.title}</h1>
    </PageFrame>
  );
}
