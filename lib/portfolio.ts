// Art portfolio — one folder per school year, images live in Google Drive
// (folder IDs are env vars, see lib/google-drive.ts). Newest first.

export const PORTFOLIO_FOLDERS = [
  { slug: "primary-5", label: "Primary 5" },
  { slug: "primary-4", label: "Primary 4" },
  { slug: "primary-3", label: "Primary 3" },
  { slug: "primary-1-2", label: "Primary 1–2" },
];

export function getFolder(slug: string) {
  return PORTFOLIO_FOLDERS.find((f) => f.slug === slug);
}
