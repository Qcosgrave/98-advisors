#!/bin/bash
# publish-next-post.sh
# Picks the next draft blog post, moves it live, regenerates blog.ts, and commits.
# Drafts live in src/content/blog/drafts/ and are named like:
#   001-post-slug.ts, 002-post-slug.ts, etc.
# The numeric prefix controls publishing order.

set -euo pipefail

BLOG_DIR="src/content/blog"
DRAFTS_DIR="$BLOG_DIR/drafts"
BLOG_LIB="src/lib/blog.ts"

# ── Find the next draft ──────────────────────────────────────────────────────
NEXT_DRAFT=$(ls "$DRAFTS_DIR"/*.ts 2>/dev/null | sort | head -n 1 || true)

if [ -z "$NEXT_DRAFT" ]; then
  echo "No drafts to publish. Exiting."
  exit 0
fi

FILENAME=$(basename "$NEXT_DRAFT")
# Strip the numeric prefix: 001-post-slug.ts → post-slug.ts
LIVE_FILENAME=$(echo "$FILENAME" | sed 's/^[0-9]*-//')

echo "Publishing: $FILENAME → $LIVE_FILENAME"

# ── Update the date in the post to today ─────────────────────────────────────
TODAY=$(date +%Y-%m-%d)
sed -i.bak "s/date: \"[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}\"/date: \"$TODAY\"/" "$NEXT_DRAFT"
rm -f "${NEXT_DRAFT}.bak"

# ── Move draft to live directory ─────────────────────────────────────────────
mv "$NEXT_DRAFT" "$BLOG_DIR/$LIVE_FILENAME"

echo "Moved to $BLOG_DIR/$LIVE_FILENAME with date $TODAY"

# ── Regenerate blog.ts ───────────────────────────────────────────────────────
# Collect all .ts files in the blog directory (not drafts/)
POST_FILES=$(ls "$BLOG_DIR"/*.ts 2>/dev/null | sort)

# Build the imports and array entries
IMPORTS=""
ARRAY_ENTRIES=""
INDEX=1

for FILE in $POST_FILES; do
  BASENAME=$(basename "$FILE" .ts)
  VARNAME="post$(printf '%02d' $INDEX)"
  IMPORTS="${IMPORTS}import { posts as ${VARNAME} } from \"@/content/blog/${BASENAME}\";\n"
  if [ -n "$ARRAY_ENTRIES" ]; then
    ARRAY_ENTRIES="${ARRAY_ENTRIES},\n  ${VARNAME}"
  else
    ARRAY_ENTRIES="  ${VARNAME}"
  fi
  INDEX=$((INDEX + 1))
done

# Write the new blog.ts
cat > "$BLOG_LIB" << BLOGEOF
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: string;
  readTime: string;
  content: string[]; // Array of paragraphs — each string is one <p> block
  seoTitle?: string;
  seoDescription?: string;
}

// Auto-generated imports — do not edit manually
$(echo -e "$IMPORTS")
const allPosts: BlogPost[] = [
$(echo -e "$ARRAY_ENTRIES"),
];

export function getAllPosts(): BlogPost[] {
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}
BLOGEOF

echo "Regenerated $BLOG_LIB with $((INDEX - 1)) posts"
