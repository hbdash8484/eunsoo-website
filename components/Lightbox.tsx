"use client";

import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(28,25,22,0.94)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white text-2xl font-light hover:opacity-70 transition-opacity z-10"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        ×
      </button>

      {/* Mobile: full screen */}
      <div
        className="md:hidden relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          unoptimized
          priority
        />
      </div>

      {/* Desktop: centered modal */}
      <div
        className="hidden md:block relative mx-8"
        style={{ width: "80vw", maxWidth: "896px", height: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
