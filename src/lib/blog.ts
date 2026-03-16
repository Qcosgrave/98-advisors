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
import { posts as post01 } from "@/content/blog/capital-structure-decisions-for-founders";
import { posts as post02 } from "@/content/blog/evaluating-inbound-acquisition-interest";
import { posts as post03 } from "@/content/blog/five-signs-business-ready-for-acquisition";
import { posts as post04 } from "@/content/blog/preparing-your-management-team-for-due-diligence";
import { posts as post05 } from "@/content/blog/role-of-sell-side-advisor";
import { posts as post06 } from "@/content/blog/the-difference-between-strategic-and-financial-buyers";
import { posts as post07 } from "@/content/blog/understanding-ebitda-adjustments";
import { posts as post08 } from "@/content/blog/what-buyers-actually-look-for-in-lower-middle-market-deals";
import { posts as post09 } from "@/content/blog/what-founders-should-know-before-selling";
import { posts as post10 } from "@/content/blog/why-confidentiality-matters-in-ma";
import { posts as post11 } from "@/content/blog/why-timing-matters-in-a-sale-process";
const allPosts: BlogPost[] = [
  post01,
  post02,
  post03,
  post04,
  post05,
  post06,
  post07,
  post08,
  post09,
  post10,
  post11,
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
