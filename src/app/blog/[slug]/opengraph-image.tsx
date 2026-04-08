import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const alt = "98 Advisors Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1a1a1a",
            color: "#f5f1eb",
            fontFamily: "Georgia, serif",
            fontSize: 48,
          }}
        >
          98 Advisors
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a1a1a",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <span
              style={{
                fontSize: 14,
                letterSpacing: 3,
                textTransform: "uppercase" as const,
                color: "#b08d57",
              }}
            >
              {post.category}
            </span>
            <span style={{ color: "#666", fontSize: 14 }}>|</span>
            <span
              style={{
                fontSize: 14,
                color: "#999",
              }}
            >
              {post.readTime}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 56,
              fontWeight: 400,
              color: "#f5f1eb",
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {post.title}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 28,
                color: "#f5f1eb",
                fontWeight: 400,
              }}
            >
              98 Advisors
            </span>
            <span style={{ fontSize: 14, color: "#999" }}>
              Strategic Advisory for Founders
            </span>
          </div>
          <span style={{ fontSize: 14, color: "#666" }}>98advisors.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
