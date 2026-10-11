// Card variants — same Card frame, different visual inside the mat.
// Used by the home sections and the /portfolio, /projects, /reading list pages.

import Image from "next/image";
import { Card } from "@/components/layout";
import { BookCover } from "@/components/ReadingBits";
import { getDriveThumbnailUrl, getImages } from "@/lib/google-drive";
import { PORTFOLIO_FOLDERS } from "@/lib/portfolio";
import type { Project } from "@/lib/projects";
import { formatFinished, type Book } from "@/lib/reading";

type Folder = (typeof PORTFOLIO_FOLDERS)[number];

export async function getFolderPreviews(folders: Folder[]) {
  return Promise.all(
    folders.map(async (f) => {
      const images = await getImages(f.slug);
      return { ...f, heroImage: (images[0] as { id: string } | undefined) ?? null };
    })
  );
}

export function ArtCard({
  folder,
  priority = false,
}: {
  folder: Folder & { heroImage: { id: string } | null };
  priority?: boolean;
}) {
  return (
    <Card
      href={`/portfolio/${folder.slug}`}
      title={folder.label}
      visual={
        <div className="relative w-full h-full">
          {folder.heroImage ? (
            <Image
              src={getDriveThumbnailUrl(folder.heroImage.id)}
              alt={`${folder.label} artwork preview`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 340px"
              className="object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
              unoptimized
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-sans text-faint" style={{ fontSize: "12px" }}>
              No images yet
            </span>
          )}
        </div>
      }
    />
  );
}

// Project images are landscape photos/posters, so they fill a 3:2 frame instead of sitting on a mat.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      href={`/projects/${project.slug}`}
      title={project.title}
      meta={project.label}
      aspect="aspect-[3/2]"
      bleed
      visual={
        <div className="relative w-full h-full">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 340px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      }
    />
  );
}

export function BookCard({ book, small = false }: { book: Book; small?: boolean }) {
  return (
    <Card
      href={`/reading/${book.slug}`}
      title={book.title}
      meta={small ? undefined : `${book.genre} · ${formatFinished(book.finished)}`}
      small={small}
      visual={
        <BookCover
          book={book}
          small={small}
          sizes={small ? "140px" : "(max-width: 640px) 60vw, 240px"}
          className={book.coverImage ? "w-[78%] h-[88%]" : "w-[62%] aspect-[2/3]"}
        />
      }
    />
  );
}
