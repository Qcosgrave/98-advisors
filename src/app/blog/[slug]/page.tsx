import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { FadeIn } from "@/components/FadeIn";

function ArticleJsonLd({ title, description, slug, date, author }: {
  title: string; description: string; slug: string; date: string; author: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://98advisors.com/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "98 Advisors",
      url: "https://98advisors.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://98advisors.com/blog/${slug}` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function BreadcrumbJsonLd({ title, slug }: { title: string; slug: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://98advisors.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://98advisors.com/blog" },
      { "@type": "ListItem", position: 3, name: title, item: `https://98advisors.com/blog/${slug}` },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `https://98advisors.com/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://98advisors.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.seoDescription || post.excerpt}
        slug={post.slug}
        date={post.date}
        author={post.author}
      />
      <BreadcrumbJsonLd title={post.title} slug={post.slug} />

      {/* Article Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <Link
              href="/blog"
              className="text-xs tracking-widest uppercase text-charcoal-light hover:text-ink transition-colors duration-300"
            >
              &larr; All Insights
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4 mt-8">
              <span className="text-xs font-light text-bronze/70 tracking-wide">
                {post.category}
              </span>
              <span className="text-xs text-charcoal-light">&middot;</span>
              <time className="text-xs font-light text-charcoal-light tracking-wide">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-xs text-charcoal-light">&middot;</span>
              <span className="text-xs font-light text-charcoal-light">
                {post.readTime}
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-ink mt-6 leading-tight">
              {post.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-sm font-light text-charcoal-light mt-6">
              By {post.author}
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="editorial-rule max-w-3xl mx-auto" />

      {/* Article Body */}
      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {post.content.map((paragraph, i) => (
            <FadeIn key={i} delay={0.05 * Math.min(i, 4)}>
              <p className="text-base font-light text-charcoal leading-[1.85] mb-6 last:mb-0">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </article>

      <hr className="editorial-rule max-w-3xl mx-auto" />

      {/* Post Navigation */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {prevPost && (
              <FadeIn>
                <Link href={`/blog/${prevPost.slug}`} className="group">
                  <span className="text-xs tracking-widest uppercase text-charcoal-light">
                    Previous
                  </span>
                  <p className="font-serif text-lg font-light text-ink mt-2 group-hover:text-bronze transition-colors duration-300 leading-snug">
                    {prevPost.title}
                  </p>
                </Link>
              </FadeIn>
            )}
            {nextPost && (
              <FadeIn delay={0.1}>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group sm:text-right"
                >
                  <span className="text-xs tracking-widest uppercase text-charcoal-light">
                    Next
                  </span>
                  <p className="font-serif text-lg font-light text-ink mt-2 group-hover:text-bronze transition-colors duration-300 leading-snug">
                    {nextPost.title}
                  </p>
                </Link>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

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
              Schedule a confidential conversation with our team.
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
