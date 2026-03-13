import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Quinn Cosgrave and learn about 98 Advisors — a boutique advisory firm built for founders navigating complex strategic decisions.",
  alternates: {
    canonical: "https://98advisors.com/about",
  },
  openGraph: {
    title: "About — 98 Advisors",
    description:
      "Meet Quinn Cosgrave and learn about 98 Advisors — a boutique advisory firm built for founders navigating complex strategic decisions.",
    url: "https://98advisors.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel label="About" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ink mt-6 max-w-4xl leading-[1.1]">
              Built for Founders, by a Founder
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg font-light text-charcoal leading-relaxed mt-8 max-w-2xl">
              98 Advisors was created to provide high-quality strategic and
              transaction advisory to companies that want sophisticated
              guidance — without the structure and overhead of a traditional
              institution.
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* The Firm */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel label="The Firm" />
                <h2 className="font-serif text-4xl font-light text-ink mt-6">
                  A Different Kind of Advisory Firm
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <p className="text-base font-light text-charcoal leading-relaxed">
                  Most founders don&apos;t need — or want — a large investment
                  bank. They need someone who understands what it means to
                  build a business, who can think rigorously about transactions
                  and strategy, and who will be personally invested in the
                  outcome.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base font-light text-charcoal leading-relaxed mt-6">
                  98 Advisors exists to serve that need. We work with a select
                  number of clients at any time, providing the depth of
                  attention and quality of counsel that matters most when the
                  decisions are consequential.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-base font-light text-charcoal leading-relaxed mt-6">
                  Our approach is direct, rigorous, and personal. We are
                  advisors first — not salespeople, not intermediaries. We earn
                  trust through the quality of our thinking and the seriousness
                  of our engagement.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* Quinn Cosgrave */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel label="Leadership" />
                {/* Photo placeholder — replace src with actual headshot */}
                <div className="mt-8 aspect-[3/4] max-w-sm bg-ivory-dark border border-rule flex items-end justify-start p-8">
                  <div>
                    <h3 className="font-serif text-3xl font-light text-ink">
                      Quinn Cosgrave
                    </h3>
                    <p className="text-sm font-light text-charcoal-light mt-1">
                      Founder & Managing Principal
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:pt-16">
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-4xl font-light text-ink">
                  Quinn Cosgrave
                </h2>
                <p className="text-sm tracking-widest uppercase text-bronze mt-2">
                  Founder & Managing Principal
                </p>
              </FadeIn>

              {/* Bio — easy to edit */}
              <FadeIn delay={0.2}>
                <div className="mt-10 space-y-6">
                  <p className="text-base font-light text-charcoal leading-relaxed">
                    Quinn Cosgrave is an entrepreneur and advisor with
                    experience across M&amp;A, private investments, strategic
                    growth initiatives, and founder-led businesses.
                  </p>
                  <p className="text-base font-light text-charcoal leading-relaxed">
                    98 Advisors was built to provide high-quality transaction
                    and strategic advisory support to companies that want
                    sophisticated guidance without the structure and overhead of
                    a traditional investment bank.
                  </p>
                  <p className="text-base font-light text-charcoal leading-relaxed">
                    Quinn brings a founder&apos;s perspective to every
                    engagement — understanding the weight of the decisions
                    involved, the importance of trust, and the value of having
                    an advisor who is genuinely invested in the outcome.
                  </p>
                  {/* Add additional bio paragraphs here */}
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-10 pt-8 border-t border-rule">
                  <p className="text-sm font-light text-charcoal-light">
                    Based in Philadelphia, PA
                  </p>
                  {/* Add LinkedIn or other links here if desired */}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl mx-auto leading-tight">
              Let&apos;s Start a Conversation
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base font-light text-ivory/60 mt-6 max-w-lg mx-auto">
              Confidential conversations welcome. Reach out to discuss your
              situation and how we might help.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-block text-sm tracking-widest uppercase border border-ivory/30 text-ivory px-10 py-5 mt-10 hover:bg-ivory/10 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
