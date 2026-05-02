import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

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
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
