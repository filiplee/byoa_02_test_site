import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content?: string;
}

function parseTags(data: Record<string, unknown>): string[] {
  const raw = data.tags;
  if (Array.isArray(raw)) return raw.filter((t): t is string => typeof t === "string");
  if (typeof raw === "string") return raw.split(",").map((t) => t.trim()).filter(Boolean);
  return [];
}

export function getSortedPosts(tagFilter?: string): Omit<BlogPost, "content">[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        return {
          slug,
          title: data.title as string,
          date: data.date as string,
          excerpt: data.excerpt as string,
          tags: parseTags(data as Record<string, unknown>),
        };
      });
    const sorted = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
    if (!tagFilter?.trim()) return sorted;
    const lower = tagFilter.toLowerCase().trim();
    return sorted.filter((p) => p.tags.some((t) => t.toLowerCase() === lower));
  } catch {
    return [];
  }
}

export function getAllTags(): string[] {
  try {
    const posts = getSortedPosts();
    const set = new Set<string>();
    for (const post of posts) {
      for (const tag of post.tags) set.add(tag);
    }
    return Array.from(set).sort();
  } catch {
    return [];
  }
}

function normalizeSlug(s: string): string {
  try {
    return decodeURIComponent(s).replace(/[\u2018\u2019]/g, "'");
  } catch {
    return s.replace(/[\u2018\u2019]/g, "'");
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const normalized = normalizeSlug(slug);
  const tryPath = (s: string) => path.join(postsDirectory, `${s}.md`);

  try {
    let fileContents: string;
    let usedSlug: string;
    try {
      fileContents = fs.readFileSync(tryPath(normalized), "utf8");
      usedSlug = normalized;
    } catch {
      const fileNames = fs.readdirSync(postsDirectory).filter((n) => n.endsWith(".md"));
      const match = fileNames.find((n) => normalizeSlug(n.replace(/\.md$/, "")) === normalized);
      if (!match) return null;
      fileContents = fs.readFileSync(path.join(postsDirectory, match), "utf8");
      usedSlug = match.replace(/\.md$/, "");
    }
    const { data, content } = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug: usedSlug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: parseTags(data as Record<string, unknown>),
      content: contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => name.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}
