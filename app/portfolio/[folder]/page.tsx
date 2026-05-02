import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getImages } from "@/lib/google-drive";
import GalleryGrid from "@/components/GalleryGrid";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const FOLDER_LABELS: Record<string, string> = {
  "primary-1-2": "Primary 1–2",
  "primary-3": "Primary 3",
  "primary-4": "Primary 4",
};

interface Props {
  params: { folder: string };
}

export async function generateStaticParams() {
  return Object.keys(FOLDER_LABELS).map((folder) => ({ folder }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const label = FOLDER_LABELS[params.folder];
  if (!label) return {};
  return {
    title: `${label} | Danielle Eunsoo Kim`,
    description: `Artworks from ${label}`,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { folder } = params;
  const label = FOLDER_LABELS[folder];
  if (!label) notFound();

  const images = await getImages(folder);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#edeae3" }}>
      <Nav />
      <main className="flex-1 px-4 py-8 md:px-8 md:py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/#portfolio"
            className="font-dm text-text-sage hover:text-text-forest transition-colors text-sm min-h-[44px] flex items-center"
          >
            ← Back
          </Link>
          <h1
            className="font-dm font-medium text-text-forest"
            style={{ fontSize: "15px" }}
          >
            {label}
          </h1>
        </div>

        {images.length === 0 ? (
          <div className="flex items-center justify-center py-24">
            <p className="font-dm text-text-sage text-sm">
              No images in this folder yet. Add some to Google Drive!
            </p>
          </div>
        ) : (
          <GalleryGrid images={images} />
        )}
      </main>
      <Footer />
    </div>
  );
}
