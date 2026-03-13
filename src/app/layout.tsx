import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://98advisors.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "98 Advisors — Strategic Advisory for Founders & Business Owners",
    template: "%s — 98 Advisors",
  },
  description:
    "98 Advisors is a boutique advisory firm that works closely with founders and business owners navigating complex strategic decisions, including sales processes, acquisitions, and capital formation.",
  keywords: [
    "M&A advisory",
    "sell-side advisory",
    "buy-side advisory",
    "founder advisory",
    "strategic advisory",
    "transaction advisory",
    "boutique advisory",
    "lower middle market",
    "acquisition readiness",
    "business sale preparation",
    "capital advisory",
    "founder transition",
  ],
  authors: [{ name: "98 Advisors" }],
  creator: "98 Advisors",
  publisher: "98 Holdings LLC",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "98 Advisors — Strategic Advisory for Founders & Business Owners",
    description:
      "Boutique advisory firm for founders navigating acquisitions, sales processes, and strategic transactions.",
    url: BASE_URL,
    siteName: "98 Advisors",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "98 Advisors — Strategic Advisory for Founders & Business Owners",
    description:
      "Boutique advisory firm for founders navigating acquisitions, sales processes, and strategic transactions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
