import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Help — 98 Advisors",
  description:
    "We advise founders and business owners at inflection points — sales, acquisitions, capital decisions, and strategic transitions.",
};

const situations = [
  {
    title: "Exploring a Potential Sale",
    description:
      "You\u2019ve built something valuable and want to understand your options. Whether you\u2019re fielding inbound interest or proactively considering a sale, we help you evaluate the landscape, prepare the business, and determine the right path forward — before committing to a process.",
    when: "You\u2019re thinking about selling but haven\u2019t decided. You want clarity on timing, valuation dynamics, and what a process would actually look like.",
  },
  {
    title: "Preparing for a Formal M&A Process",
    description:
      "A sale process is complex, high-stakes, and time-intensive. We help founders prepare thoroughly — positioning the business, developing materials, building the buyer landscape, and structuring a process designed to drive the best outcome.",
    when: "You\u2019ve decided to explore a sale and need an advisor who will manage the process with the seriousness and discretion it requires.",
  },
  {
    title: "Evaluating Inbound Acquisition Interest",
    description:
      "An unsolicited offer or expression of interest can be flattering — and disorienting. We help founders assess whether inbound interest is credible, what it might signal about value, and how to respond strategically rather than reactively.",
    when: "A buyer, investor, or competitor has approached you. You need to understand your position before responding.",
  },
  {
    title: "Developing an Acquisition Strategy",
    description:
      "Growth through acquisition can be powerful when done with discipline. We help companies develop a strategic acquisition framework, identify targets, and execute transactions that make sense — not just deals that are available.",
    when: "You want to grow through acquisition and need a structured approach to identifying, evaluating, and executing on the right opportunities.",
  },
  {
    title: "Evaluating Financing & Capital Structure Options",
    description:
      "Capital decisions shape a company\u2019s future. We advise founders on capital structure at a strategic level — helping evaluate options, prepare for financing discussions, and think through the long-term implications of the choices on the table.",
    when: "You\u2019re considering a recapitalization, evaluating debt vs. equity options, or preparing for conversations with capital providers.",
  },
  {
    title: "Navigating Founder Transition Decisions",
    description:
      "Not every transition involves a sale. Succession planning, partner buyouts, management transitions, and structural reorganizations all require careful, strategic thinking. We help founders navigate these decisions with clarity and confidence.",
    when: "You\u2019re thinking about your role in the business, planning a transition, or working through a partner or ownership change.",
  },
];

export default function SituationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel label="Who We Help" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ink mt-6 max-w-4xl leading-[1.1]">
              We Work With Founders at Defining Moments
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg font-light text-charcoal leading-relaxed mt-8 max-w-2xl">
              Our clients are typically founder-led businesses and
              entrepreneurs in the lower middle market — facing decisions that
              are significant, complex, and often unfamiliar. We help them
              navigate with clarity.
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* Situations */}
      {situations.map((situation, idx) => (
        <div key={idx}>
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="lg:col-span-1">
                  <FadeIn>
                    <span className="text-xs text-bronze/50 tracking-widest font-light">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </FadeIn>
                </div>
                <div className="lg:col-span-4">
                  <FadeIn delay={0.05}>
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
                      {situation.title}
                    </h2>
                  </FadeIn>
                </div>
                <div className="lg:col-span-7">
                  <FadeIn delay={0.1}>
                    <p className="text-base font-light text-charcoal leading-relaxed">
                      {situation.description}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <div className="mt-6 p-6 bg-ivory-dark/50 border-l-2 border-bronze/20">
                      <span className="text-xs tracking-widest uppercase text-bronze">
                        When to Engage
                      </span>
                      <p className="text-sm font-light text-charcoal leading-relaxed mt-2">
                        {situation.when}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
          {idx < situations.length - 1 && (
            <hr className="editorial-rule max-w-7xl mx-auto" />
          )}
        </div>
      ))}

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light max-w-3xl mx-auto leading-tight">
              Does Your Situation Fit?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base font-light text-ivory/60 mt-6 max-w-lg mx-auto">
              If you&apos;re navigating a significant decision, we&apos;d
              welcome the chance to discuss whether our advisory can be helpful.
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
