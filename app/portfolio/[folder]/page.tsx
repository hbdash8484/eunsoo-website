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
    <div className="min-h-screen flex flex-col bg-wall">
      <Nav />
      <main className="flex-1 px-5 md:px-[54px] py-12 md:py-16">
        <Link
          href="/#portfolio"
          className="font-sans text-faint hover:text-ink transition-colors uppercase inline-flex items-center min-h-[44px]"
          style={{ fontSize: "11px", letterSpacing: "0.16em" }}
        >
          ← Back
        </Link>

        <h1
          className="font-serif text-ink mt-3 mb-10"
          style={{ fontSize: "clamp(30px, 5vw, 48px)", letterSpacing: "-0.02em" }}
        >
          {label}
        </h1>

        {images.length === 0 ? (
          <div className="flex items-center justify-center py-24">
            <p className="font-serif italic text-faint" style={{ fontSize: "16px" }}>
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
