import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a confidential conversation with 98 Advisors to discuss your business situation, transaction, or strategic decision.",
  alternates: {
    canonical: "https://98advisors.com/contact",
  },
  openGraph: {
    title: "Contact — 98 Advisors",
    description:
      "Schedule a confidential conversation to discuss your business situation.",
    url: "https://98advisors.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
