import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

const services = [
  {
    title: "Sell-Side Advisory",
    description:
      "Guiding founders through the strategic and operational complexities of a sale process — from preparation and positioning to managing buyer engagement and closing.",
  },
  {
    title: "Buy-Side Advisory",
    description:
      "Supporting companies pursuing acquisitions with target identification, strategic evaluation, deal structuring guidance, and transaction process management.",
  },
  {
    title: "Capital Advisory",
    description:
      "Advising on capital structure decisions and helping companies prepare for financing discussions — evaluating options and positioning the business effectively.",
  },
  {
    title: "Strategic & Transaction Advisory",
    description:
      "Providing senior-level counsel on complex business decisions, partnership structures, and transactions that shape a company\u2019s trajectory.",
  },
];

const situations = [
  "Exploring a potential sale of the business",
  "Preparing for a formal M&A process",
  "Evaluating inbound acquisition interest",
  "Developing an acquisition strategy",
  "Evaluating financing and capital structure options",
  "Navigating founder transition decisions",
];

const differentiators = [
  {
    title: "Founder-Oriented",
    text: "We understand the difference between advising an institution and advising someone who built a business. Our work starts from the founder\u2019s perspective.",
  },
  {
    title: "Transaction Sophistication",
    text: "Rigorous process. Institutional-quality work product. Without the overhead, hierarchy, or misaligned incentives of a large bank.",
  },
  {
    title: "Senior Involvement",
    text: "No hand-offs to junior teams. The people you hire are the people doing the work.",
  },
  {
    title: "Selective & Discreet",
    text: "We work with a small number of clients at any time, ensuring each engagement receives the depth of attention it deserves.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-ivory-dark/30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <SectionLabel label="98 Advisors" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-ink mt-8">
                Strategic Advisory for Businesses at Critical Inflection Points
              </h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="text-lg md:text-xl font-light text-charcoal leading-relaxed mt-8 max-w-2xl">
                98 Advisors works with founders and business owners through
                acquisitions, sales processes, and strategic transactions —
                with a hands-on, high-conviction approach.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Link
                  href="/contact"
                  className="inline-block text-sm tracking-widest uppercase bg-ink text-ivory px-8 py-4 hover:bg-ink-light transition-colors duration-300 text-center"
                >
                  Schedule a Conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-block text-sm tracking-widest uppercase text-ink border border-ink/20 px-8 py-4 hover:border-ink/50 transition-colors duration-300 text-center"
                >
                  View Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-bronze/20 to-transparent hidden lg:block mr-12" />
      </section>

      {/* ── Intro / Positioning ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <FadeIn>
                <SectionLabel label="The Firm" />
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.1}>
                <p className="font-serif text-3xl md:text-4xl font-light leading-snug text-ink">
                  A boutique advisory firm that works closely with founders
                  and business owners navigating complex strategic decisions.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base font-light text-charcoal leading-relaxed mt-8 max-w-2xl">
                  We advise on sales processes, acquisitions, capital structure
                  decisions, and strategic transactions — providing the rigor
                  and sophistication of institutional advisory with the
                  attentiveness and alignment of a trusted partner.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* ── Services ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel label="Services" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-6 mb-16">
              How We Help
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="bg-ivory p-10 lg:p-14 group">
                  <span className="text-xs text-bronze/60 tracking-widest font-light">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light text-ink mt-4 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light text-charcoal leading-relaxed">
                    {service.description}
                  </p>
                  <div className="h-px w-12 bg-bronze/20 mt-8 group-hover:w-20 transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-12">
              <Link
                href="/services"
                className="text-sm tracking-widest uppercase text-ink border-b border-ink/20 pb-1 hover:border-ink/60 transition-colors duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* ── Situations ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel label="Who We Help" />
                <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-6">
                  Select Situations
                </h2>
                <p className="text-base font-light text-charcoal leading-relaxed mt-6">
                  We engage with business owners at moments that matter — when
                  the decisions are significant, the stakes are real, and the
                  right guidance can change the outcome.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {situations.map((situation, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="border-b border-rule py-6 group flex items-start gap-6">
                      <span className="text-xs text-bronze/50 font-light mt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl lg:text-2xl font-light text-ink group-hover:text-bronze transition-colors duration-300">
                        {situation}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.5}>
                <div className="mt-10">
                  <Link
                    href="/situations"
                    className="text-sm tracking-widest uppercase text-ink border-b border-ink/20 pb-1 hover:border-ink/60 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Acquisition Readiness Audit ── */}
      <section className="py-24 lg:py-32 bg-ivory-dark/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel label="Readiness Advisory" />
                <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-6">
                  Acquisition Readiness Audit
                </h2>
                <p className="text-base font-light text-charcoal leading-relaxed mt-6">
                  Not every business is ready for a transaction — and the best
                  time to find out isn&apos;t during the process. Our Acquisition
                  Readiness Audit helps founders understand where they stand and
                  what to address before going to market.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-block text-sm tracking-widest uppercase bg-ink text-ivory px-8 py-4 mt-8 hover:bg-ink-light transition-colors duration-300"
                >
                  Request an Audit
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
                {[
                  {
                    label: "Strategic",
                    title: "Strategic Readiness",
                    items: [
                      "Market positioning & competitive differentiation",
                      "Growth narrative & trajectory clarity",
                      "Customer concentration & revenue quality",
                      "Management team depth & transition planning",
                    ],
                  },
                  {
                    label: "Financial",
                    title: "Financial Readiness",
                    items: [
                      "Financial reporting quality & auditability",
                      "EBITDA normalization & add-back analysis",
                      "Working capital & cash flow patterns",
                      "Revenue sustainability & forecasting rigor",
                    ],
                  },
                  {
                    label: "Structural",
                    title: "Structural Readiness",
                    items: [
                      "Corporate & legal entity structure",
                      "Contract & IP documentation",
                      "Regulatory compliance posture",
                      "Data room preparation & organization",
                    ],
                  },
                ].map((pillar, i) => (
                  <FadeIn key={pillar.label} delay={i * 0.1}>
                    <div className="border border-rule bg-ivory p-6 lg:p-8 h-full">
                      <span className="text-xs tracking-widest uppercase text-bronze">
                        {pillar.label}
                      </span>
                      <h3 className="font-serif text-xl font-light text-ink mt-3 mb-5">
                        {pillar.title}
                      </h3>
                      <div className="space-y-3">
                        {pillar.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-bronze/40 mt-2 shrink-0" />
                            <span className="text-xs font-light text-charcoal leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.3}>
                <p className="text-sm font-light text-charcoal-light mt-8 leading-relaxed">
                  The Audit delivers a clear, candid assessment across three
                  dimensions — highlighting strengths, identifying gaps, and
                  providing a prioritized action plan to maximize readiness and
                  value.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why 98 Advisors ── */}
      <section className="py-24 lg:py-32 bg-ink text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel label="Approach" />
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-16">
              Why 98 Advisors
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {differentiators.map((diff, i) => (
              <FadeIn key={diff.title} delay={i * 0.1}>
                <div>
                  <h3 className="font-serif text-2xl font-light mb-4">
                    {diff.title}
                  </h3>
                  <p className="text-sm font-light text-ivory/60 leading-relaxed">
                    {diff.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Model ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel label="Engagement" />
                <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-6">
                  How We Work
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <p className="font-serif text-2xl font-light text-ink leading-snug">
                  We work through retained advisory relationships — structured
                  to keep us deeply engaged while aligning incentives around
                  outcomes.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base font-light text-charcoal leading-relaxed mt-8">
                  Our engagements typically involve a monthly advisory retainer
                  combined with transaction-based success economics tied to
                  completed strategic transactions where applicable. This
                  structure reflects the seriousness of the work and ensures
                  sustained, senior-level attention throughout the engagement.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-10 p-8 border border-rule bg-ivory-dark/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <span className="text-xs tracking-widest uppercase text-bronze">
                        Monthly Retainer
                      </span>
                      <p className="font-serif text-2xl font-light text-ink mt-2">
                        $10,000 – $15,000
                      </p>
                      <p className="text-xs font-light text-charcoal-light mt-1">
                        per month
                      </p>
                    </div>
                    <div>
                      <span className="text-xs tracking-widest uppercase text-bronze">
                        Success Economics
                      </span>
                      <p className="font-serif text-2xl font-light text-ink mt-2">
                        3% – 5%
                      </p>
                      <p className="text-xs font-light text-charcoal-light mt-1">
                        tied to completed transactions
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-light text-charcoal-light mt-6 leading-relaxed">
                    Engagement terms are tailored to the scope and nature of
                    each advisory relationship.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* ── Final CTA ── */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <SectionLabel label="Get in Touch" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink mt-8 max-w-3xl mx-auto leading-tight">
              Considering a Sale, Acquisition, or Strategic Transaction?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg font-light text-charcoal mt-6 max-w-xl mx-auto">
              Schedule a confidential conversation to discuss your situation.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="inline-block text-sm tracking-widest uppercase bg-ink text-ivory px-10 py-5 mt-10 hover:bg-ink-light transition-colors duration-300"
            >
              Schedule a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
