import Link from "next/link";
import Image from "next/image";
import { getImages, getDriveThumbnailUrl } from "@/lib/google-drive";

const FOLDERS = [
  { slug: "primary-1-2", label: "Primary 1–2" },
  { slug: "primary-3", label: "Primary 3" },
  { slug: "primary-4", label: "Primary 4" },
];

export default async function ArtPortfolio() {
  const folderPreviews = await Promise.all(
    FOLDERS.map(async (f) => {
      const images = await getImages(f.slug);
      return { ...f, heroImage: images[0] ?? null };
    })
  );

  return (
    <section id="portfolio" className="px-7 py-14">
      <p
        className="font-dm font-medium text-text-forest uppercase tracking-[0.1em] mb-8"
        style={{ fontSize: "11px" }}
      >
        Art Portfolio
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {folderPreviews.map((folder) => (
          <Link
            key={folder.slug}
            href={`/portfolio/${folder.slug}`}
            className="group block rounded-lg overflow-hidden border border-divider hover:shadow-md transition-shadow"
            style={{ backgroundColor: "#f5f3ee" }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "160px" }}
            >
              {folder.heroImage ? (
                <Image
                  src={getDriveThumbnailUrl(folder.heroImage.id)}
                  alt={folder.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: "#e8e5dd" }}
                >
                  <span
                    className="font-dm text-text-sage"
                    style={{ fontSize: "12px" }}
                  >
                    No images yet
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="font-dm font-medium text-text-forest text-sm">
                {folder.label}
              </span>
              <span className="text-text-sage group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
