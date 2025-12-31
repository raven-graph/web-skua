import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"; // Added Outfit and JetBrains_Mono
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Skua - Crypto Market Structure Map",
  description: "A live map that shows which crypto assets are pulling, following, or breaking away from each other.",
  openGraph: {
    title: "Skua - See market structure, not just price",
    description: "Spot regime changes and influence shifts before they show up in single-asset charts.",
    type: "website",
    locale: "en_US",
    siteName: "Skua",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skua - Crypto Market Structure Map",
    description: "Spot regime changes and influence shifts before they show up in single-asset charts.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050507",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
