"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { getDriveThumbnailUrl, getDriveImageUrl } from "@/lib/google-drive";

interface DriveFile {
  id: string;
  name: string;
}

export default function GalleryGrid({ images }: { images: DriveFile[] }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((img) => (
          <button
            key={img.id}
            className="relative overflow-hidden rounded-lg aspect-square group focus:outline-none min-h-[44px]"
            style={{ border: "1px solid #9aaa96" }}
            onClick={() => {
              setLightboxSrc(getDriveImageUrl(img.id));
              setLightboxAlt(img.name);
            }}
          >
            <Image
              src={getDriveThumbnailUrl(img.id)}
              alt={img.name}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </button>
        ))}
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
