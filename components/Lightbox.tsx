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
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(42,61,46,0.92)" }}
      onClick={onClose}
    >
      {/* Close button — always top-right, 44px touch target */}
      <button
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white text-2xl font-light hover:opacity-70 transition-opacity z-10"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Mobile: full screen image. Desktop: centered modal with padding */}
      <div
        className="relative w-full h-full md:w-auto md:h-auto md:max-w-4xl md:max-h-[90vh] md:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain md:relative md:inset-auto"
          unoptimized
        />
      </div>
    </div>
  );
}
