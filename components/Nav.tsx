"use client";

import Link from "next/link";

const links = [
  { label: "Art Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
];

export default function Nav() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-7 py-4"
      style={{
        backgroundColor: "#f5f3ee",
        borderBottom: "1px solid rgba(42,61,46,0.12)",
      }}
    >
      <Link
        href="/"
        className="font-dm font-medium text-sm text-text-forest tracking-[0.08em] uppercase"
      >
        Danielle Eunsoo Kim
      </Link>
      <div className="flex items-center gap-6">
        {links.map((link, i) => (
          <span key={link.href} className="flex items-center gap-6">
            {i > 0 && (
              <span className="text-divider text-xs select-none">|</span>
            )}
            <a
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="font-dm font-light text-sm text-text-mid hover:text-text-forest transition-colors"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </nav>
  );
}
