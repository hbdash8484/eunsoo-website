import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getImages } from "@/lib/google-drive";
import { PORTFOLIO_FOLDERS, getFolder } from "@/lib/portfolio";
import GalleryGrid from "@/components/GalleryGrid";
import { Container, PageHeader, PageShell } from "@/components/layout";

interface Props {
  params: { folder: string };
}

export async function generateStaticParams() {
  return PORTFOLIO_FOLDERS.map((f) => ({ folder: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const folder = getFolder(params.folder);
  if (!folder) return {};
  return {
    title: `${folder.label} | Danielle Eunsoo Kim`,
    description: `Artworks from ${folder.label}`,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const folder = getFolder(params.folder);
  if (!folder) notFound();

  const images = await getImages(folder.slug);

  return (
    <PageShell>
      <Container>
        <PageHeader
          back="/portfolio"
          eyebrow="Selected Art Work"
          title={folder.label}
          meta={images.length > 0 ? `${images.length} pieces` : undefined}
        />
        {images.length === 0 ? (
          <div className="flex items-center justify-center py-24">
            <p className="font-serif italic text-faint" style={{ fontSize: "16px" }}>
              No images in this folder yet. Add some to Google Drive!
            </p>
          </div>
        ) : (
          <GalleryGrid images={images} />
        )}
      </Container>
    </PageShell>
  );
}
