"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { getDriveThumbnailUrl, getDriveImageUrl } from "@/lib/google-drive";

interface DriveFile {
  id: string;
  name: string;
  imageMediaMetadata?: { width: number; height: number };
}

export default function GalleryGrid({ images }: { images: DriveFile[] }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
        {images.map((img) => {
          const w = img.imageMediaMetadata?.width ?? 800;
          const h = img.imageMediaMetadata?.height ?? 600;
          return (
            <button
              key={img.id}
              className="block w-full mb-3 overflow-hidden rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent break-inside-avoid"
              style={{ border: "1px solid #9aaa96" }}
              onClick={() => {
                setLightboxSrc(getDriveImageUrl(img.id));
                setLightboxAlt(img.name);
              }}
            >
              <Image
                src={getDriveThumbnailUrl(img.id)}
                alt={img.name || "Artwork"}
                width={w}
                height={h}
                loading="lazy"
                className="w-full h-auto block group-hover:brightness-95 transition-all duration-200"
                unoptimized
              />
            </button>
          );
        })}
      </div>

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={lightboxAlt}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </>
  );
}
