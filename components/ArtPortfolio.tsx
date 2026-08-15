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
    <section id="portfolio" className="px-5 md:px-[54px] py-14 md:py-16 bg-wall">
      {/* section header — gallery label + italic sub */}
      <div className="flex items-baseline justify-between mb-8 md:mb-10">
        <span
          className="font-sans font-semibold text-faint uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          Selected Work
        </span>
        <span className="font-serif italic text-rose-soft" style={{ fontSize: "15px" }}>
          Primary 1 – 4
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {folderPreviews.map((folder, i) => (
          <Link
            key={folder.slug}
            href={`/portfolio/${folder.slug}`}
            className="group block"
          >
            {/* matted frame — art floats on a mat, never cropped (object-contain) */}
            <div className="aspect-[4/5] bg-mat border border-matline rounded-sm p-3 md:p-4 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.35)]">
              <div className="relative w-full h-full">
                {folder.heroImage ? (
                  <Image
                    src={getDriveThumbnailUrl(folder.heroImage.id)}
                    alt={`${folder.label} artwork preview`}
                    fill
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-sans text-faint" style={{ fontSize: "12px" }}>
                      No images yet
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-3.5 min-h-[36px]">
              <span className="font-serif text-ink" style={{ fontSize: "17px" }}>
                {folder.label}
              </span>
              <span
                className="text-faint group-hover:text-rose group-hover:translate-x-1 transition-all"
                aria-hidden
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <p
        className="font-serif italic text-faint mt-6"
        style={{ fontSize: "13.5px" }}
      >
        Each piece is shown whole — original proportions, matted like a framed
        print, never cropped.
      </p>
    </section>
  );
}
