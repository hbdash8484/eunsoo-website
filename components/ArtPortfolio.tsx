import { CardGrid, HomeSection } from "@/components/layout";
import { ArtCard, getFolderPreviews } from "@/components/cards";
import { PORTFOLIO_FOLDERS } from "@/lib/portfolio";

export default async function ArtPortfolio() {
  const folders = await getFolderPreviews(PORTFOLIO_FOLDERS.slice(0, 3));

  return (
    <HomeSection
      id="portfolio"
      label="Selected Art Work"
      sub="Primary 1 – 5"
      count={`${PORTFOLIO_FOLDERS.length} school years`}
      href="/portfolio"
    >
      <CardGrid>
        {folders.map((folder, i) => (
          <ArtCard key={folder.slug} folder={folder} priority={i === 0} />
        ))}
      </CardGrid>
    </HomeSection>
  );
}
