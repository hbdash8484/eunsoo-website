"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
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
    <nav className="sticky top-0 z-50 bg-wall/95 backdrop-blur-sm border-b border-line">
      <div className="flex items-center justify-between px-5 md:px-[54px] h-16">
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
              href={link.href}
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
              href={link.href}
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
