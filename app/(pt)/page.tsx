import { PageFrame } from "../components/page-frame";
import { getContent } from "../content";

export default function Page() {
  const site = getContent("pt");
  return (
    <PageFrame site={site} alternateHref="/en">
      <h1 className="text-display-1 px-gutter">{site.home.hero.title}</h1>
    </PageFrame>
  );
}
