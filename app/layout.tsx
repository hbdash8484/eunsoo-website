import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://eunsoo-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Danielle Eunsoo Kim — Art Portfolio",
  description:
    "Art portfolio of Danielle Eunsoo Kim, a young artist at Seoul Foreign School. Watercolor, digital art, and more.",
  keywords: [
    "art portfolio",
    "kids art",
    "watercolor",
    "digital art",
    "Seoul Foreign School",
  ],
  openGraph: {
    title: "Danielle Eunsoo Kim — Art Portfolio",
    description:
      "Young artist based in Seoul. Watercolor, digital art, illustration.",
    url: baseUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danielle Eunsoo Kim — Art Portfolio",
    description:
      "Young artist based in Seoul. Watercolor, digital art, illustration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
