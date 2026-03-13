export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "98 Advisors",
    description:
      "Boutique strategic advisory firm for founders and business owners navigating complex decisions and transactions.",
    url: "https://98advisors.com",
    logo: "https://98advisors.com/logo.png",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Quinn Cosgrave",
      jobTitle: "Founder & Managing Principal",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      addressCountry: "US",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "98 Holdings LLC",
    },
    areaServed: "US",
    serviceType: [
      "Sell-Side Advisory",
      "Buy-Side Advisory",
      "Capital Advisory",
      "Strategic Advisory",
      "Transaction Advisory",
    ],
    knowsAbout: [
      "Mergers and Acquisitions",
      "Business Valuation",
      "Capital Structure",
      "Founder Transitions",
      "Strategic Planning",
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "98 Advisors",
    description:
      "Boutique strategic and transaction advisory firm for founders and business owners.",
    url: "https://98advisors.com",
    telephone: "",
    email: "advisory@98advisors.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      addressCountry: "US",
    },
    priceRange: "$$$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: "98 Advisors",
      url: "https://98advisors.com",
    },
    areaServed: "US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
