import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "98 Advisors — Strategic Advisory for Founders & Business Owners",
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
  ],
  openGraph: {
    title: "98 Advisors — Strategic Advisory for Founders & Business Owners",
    description:
      "Boutique advisory firm for founders navigating acquisitions, sales processes, and strategic transactions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
