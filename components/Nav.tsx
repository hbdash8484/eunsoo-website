"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "Reading", href: "#reading" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // On the home page, scroll smoothly. On inner pages the section isn't here,
    // so let the link go to "/#section" normally.
    const target = document.getElementById(href.replace("#", ""));
    setOpen(false);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-wall/95 backdrop-blur-sm border-b border-line">
      <div className="mx-auto w-full max-w-[1120px] flex items-center justify-between px-5 md:px-10 h-16">
        <Link
          href="/"
          className="font-sans font-semibold text-ink uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.26em" }}
        >
          Danielle Eunsoo Kim
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={(e) => scrollTo(e, link.href)}
              className="font-sans text-faint hover:text-ink transition-colors uppercase min-h-[44px] flex items-center"
              style={{ fontSize: "11px", letterSpacing: "0.14em" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-ink transition-all duration-200"
            style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-200"
            style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col px-5 pb-4 border-t border-line">
          {links.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={(e) => scrollTo(e, link.href)}
              className="font-sans text-muted hover:text-ink transition-colors uppercase min-h-[44px] flex items-center"
              style={{ fontSize: "12px", letterSpacing: "0.14em" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
