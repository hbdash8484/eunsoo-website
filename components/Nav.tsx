"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Art Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#f5f3ee",
        borderBottom: "1px solid rgba(42,61,46,0.12)",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-14">
        <Link
          href="/"
          className="font-dm font-medium text-sm text-text-forest tracking-[0.08em] uppercase"
        >
          Danielle Eunsoo Kim
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              {i > 0 && (
                <span className="text-divider text-xs select-none">|</span>
              )}
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-dm font-light text-sm text-text-mid hover:text-text-forest transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "#2a3d2e",
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "#2a3d2e",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "#2a3d2e",
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden flex flex-col px-4 pb-4"
          style={{ borderTop: "1px solid rgba(42,61,46,0.08)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="font-dm font-light text-sm text-text-mid hover:text-text-forest transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
