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
      style={{ backgroundColor: "rgba(42,61,46,0.85)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-6 text-white text-2xl font-light leading-none hover:opacity-70 transition-opacity"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="relative max-w-4xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="object-contain w-full h-full max-h-[90vh]"
          unoptimized
        />
      </div>
    </div>
  );
}
