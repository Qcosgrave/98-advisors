import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sell-side advisory, buy-side advisory, capital advisory, and strategic advisory services for founders and business owners.",
  alternates: {
    canonical: "https://98advisors.com/services",
  },
  openGraph: {
    title: "Services — 98 Advisors",
    description:
      "Sell-side advisory, buy-side advisory, capital advisory, and strategic advisory services for founders and business owners.",
    url: "https://98advisors.com/services",
  },
};

const services = [
  {
    id: "sell-side",
    number: "01",
    title: "Sell-Side Advisory",
    subtitle: "Guiding founders through the sale of a business.",
    description:
      "Selling a business is often the most significant financial event in a founder\u2019s life. We help business owners prepare for, navigate, and execute a sale process with the rigor and discretion the moment demands.",
    when: "You\u2019re considering selling your business, have received inbound interest, or want to understand what a sale process would look like before committing to one.",
    includes: [
      "Strategic positioning and preparation",
      "Buyer landscape analysis and outreach strategy",
      "Management of the sale process and timeline",
      "Deal structure evaluation and negotiation guidance",
      "Coordination with legal, accounting, and other advisors",
      "Confidentiality management throughout the process",
    ],
  },
  {
    id: "buy-side",
    number: "02",
    title: "Buy-Side Advisory",
    subtitle: "Supporting companies pursuing strategic acquisitions.",
    description:
      "Acquisitions can accelerate growth, expand capabilities, or create strategic optionality — but they also carry meaningful risk. We help companies identify, evaluate, and execute acquisitions with discipline and clarity.",
    when: "You\u2019re actively pursuing an acquisition, evaluating a specific opportunity, or developing a broader acquisition strategy.",
    includes: [
      "Acquisition strategy development",
      "Target identification and evaluation",
      "Financial and strategic analysis",
      "Deal structuring and term guidance",
      "Transaction process management",
      "Post-close transition planning support",
    ],
  },
  {
    id: "capital",
    number: "03",
    title: "Capital Advisory",
    subtitle: "Advising on capital structure and financing decisions.",
    description:
      "Capital decisions shape a company\u2019s future — how much to raise, from whom, and on what terms. We help founders evaluate financing options and prepare for capital-related discussions at a strategic level.",
    when: "You\u2019re evaluating financing options, preparing for capital discussions, or thinking through capital structure decisions with significant strategic implications.",
    includes: [
      "Capital structure analysis and evaluation",
      "Preparation for financing discussions",
      "Evaluation of strategic financing alternatives",
      "Materials development for capital conversations",
      "Guidance on terms, structure, and positioning",
      "Coordination with legal and financial advisors",
    ],
  },
  {
    id: "strategic",
    number: "04",
    title: "Strategic & Transaction Advisory",
    subtitle: "Counsel on complex decisions that shape a company\u2019s path.",
    description:
      "Not every critical decision involves a transaction — but many of the most important ones do. We provide strategic guidance on the decisions that define a company\u2019s trajectory, whether or not they result in a deal.",
    when: "You\u2019re facing a significant strategic decision, evaluating a complex partnership or transaction structure, or want a trusted outside perspective on a high-stakes situation.",
    includes: [
      "Strategic options evaluation",
      "Transaction structuring guidance",
      "Partnership and joint venture analysis",
      "Founder transition and succession planning",
      "Board and stakeholder communication support",
      "Decision framework development",
    ],
  },
  {
    id: "readiness",
    number: "05",
    title: "Acquisition Readiness Audit",
    subtitle: "Preparing your business strategically, financially, and structurally.",
    description:
      "The best time to discover gaps in your business\u2019s readiness is before you go to market \u2014 not during a process. Our Acquisition Readiness Audit provides a comprehensive, candid assessment of where your business stands across three critical dimensions, along with a prioritized action plan to maximize readiness and value.",
    when: "You\u2019re considering a sale in the next 12\u201324 months and want to understand what needs to be addressed. Or you want to build long-term value with an eventual transaction in mind.",
    includes: [
      "Strategic positioning and competitive differentiation review",
      "Financial reporting quality and EBITDA normalization analysis",
      "Corporate and legal structure assessment",
      "Customer concentration and revenue quality evaluation",
      "Management team depth and transition readiness",
      "Data room preparation guidance and organization",
      "Prioritized action plan with timeline recommendations",
      "Contract, IP, and regulatory compliance review",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel label="Services" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ink mt-6 max-w-4xl leading-[1.1]">
              Advisory Built Around Consequential Moments
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg font-light text-charcoal leading-relaxed mt-8 max-w-2xl">
              We provide strategic and transaction advisory to founders and
              business owners at the moments that matter most — when the
              decisions are significant, the process is complex, and the right
              guidance changes outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* Services Detail */}
      {services.map((service, idx) => (
        <div key={service.id}>
          <section
            id={service.id}
            className="py-20 lg:py-28"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left column */}
                <div className="lg:col-span-4">
                  <FadeIn>
                    <span className="text-xs text-bronze/50 tracking-widest font-light">
                      {service.number}
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-4">
                      {service.title}
                    </h2>
                    <p className="font-serif text-xl font-light text-charcoal mt-4 italic">
                      {service.subtitle}
                    </p>
                  </FadeIn>
                </div>

                {/* Right column */}
                <div className="lg:col-span-8">
                  <FadeIn delay={0.1}>
                    <p className="text-base font-light text-charcoal leading-relaxed">
                      {service.description}
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="mt-10">
                      <h3 className="text-xs tracking-widest uppercase text-bronze mb-4">
                        When to Engage
                      </h3>
                      <p className="text-sm font-light text-charcoal leading-relaxed">
                        {service.when}
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="mt-10">
                      <h3 className="text-xs tracking-widest uppercase text-bronze mb-6">
                        Scope of Work May Include
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-1 h-1 rounded-full bg-bronze/40 mt-2 shrink-0" />
                            <span className="text-sm font-light text-charcoal">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
          {idx < services.length - 1 && (
            <hr className="editorial-rule max-w-7xl mx-auto" />
          )}
        </div>
      ))}

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl mx-auto leading-tight">
              Ready to Discuss Your Situation?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base font-light text-ivory/60 mt-6 max-w-lg mx-auto">
              Every engagement begins with a confidential conversation about
              your business and objectives.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-block text-sm tracking-widest uppercase border border-ivory/30 text-ivory px-10 py-5 mt-10 hover:bg-ivory/10 transition-colors duration-300"
            >
              Schedule a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
