import type { Metadata } from "next";
import { CardGrid, Container, PageHeader, PageShell } from "@/components/layout";
import { ArtCard, getFolderPreviews } from "@/components/cards";
import { PORTFOLIO_FOLDERS } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Art Portfolio | Danielle Eunsoo Kim",
  description: "Danielle's artwork, one folder per school year.",
};

export default async function PortfolioIndex() {
  const folders = await getFolderPreviews(PORTFOLIO_FOLDERS);

  return (
    <PageShell>
      <Container>
        <PageHeader
          back="/#portfolio"
          eyebrow="Selected Art Work"
          title="Art Portfolio"
          meta="Each piece is shown whole — original proportions, matted like a framed print, never cropped."
        />
        <CardGrid>
          {folders.map((folder, i) => (
            <ArtCard key={folder.slug} folder={folder} priority={i === 0} />
          ))}
        </CardGrid>
      </Container>
    </PageShell>
  );
}
