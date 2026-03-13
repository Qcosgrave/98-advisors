import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Strategic perspectives on M&A, capital structure, and business transitions for founders and business owners.",
  alternates: { canonical: "https://98advisors.com/blog" },
  openGraph: {
    title: "Insights — 98 Advisors",
    url: "https://98advisors.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <SectionLabel label="Insights" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-ink mt-6">
              Perspectives
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg font-light text-charcoal leading-relaxed mt-6 max-w-2xl">
              Strategic thinking on M&A processes, capital decisions, and the
              issues that matter most to founders navigating complex
              transactions.
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="editorial-rule max-w-7xl mx-auto" />

      {/* Post Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="border-b border-rule py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                        <time className="text-xs font-light text-charcoal-light tracking-wide">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="text-xs font-light text-bronze/70 tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink group-hover:text-bronze transition-colors duration-300 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm font-light text-charcoal leading-relaxed mt-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="lg:col-span-3 flex items-center justify-end">
                      <span className="text-xs font-light text-charcoal-light">
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl mx-auto leading-tight">
              Have a Question About Your Situation?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base font-light text-ivory/60 mt-6 max-w-lg mx-auto">
              Schedule a confidential conversation to discuss how these
              perspectives apply to your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-block text-sm tracking-widest uppercase border border-ivory/30 text-ivory px-8 py-4 mt-10 hover:bg-ivory/10 transition-colors duration-300"
            >
              Schedule a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
