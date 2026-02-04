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
  content: string;
}

export function getSortedPosts(): Omit<BlogPost, "content">[] {
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
        };
      });
    return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
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
