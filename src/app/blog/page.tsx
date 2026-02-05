import Link from "next/link";
import { Suspense } from "react";
import { getSortedPosts, getAllTags } from "@/lib/blog";
import { TagFilter } from "@/components/TagFilter";
import { PostTags } from "@/components/PostTags";

export const metadata = {
  title: "Blog — Build YOA",
  description: "Articles, tutorials, and ideas. Built with Next.js.",
};

interface BlogPageProps {
  searchParams: { tag?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const tag = typeof searchParams?.tag === "string" ? searchParams.tag : null;
  const posts = getSortedPosts(tag ?? undefined);
  const allTags = getAllTags();

  return (
    <div className="gradient-mesh-red min-h-[60vh]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          Thoughts, tutorials, and updates. Newest first.
        </p>

        <Suspense fallback={null}>
          <div className="mt-6">
            <TagFilter tags={allTags} currentTag={tag} />
          </div>
        </Suspense>

        {tag && (
          <p className="mt-3 text-sm text-[var(--muted)]">
            Showing posts tagged &quot;{tag}&quot;.{" "}
            <Link href="/blog" className="text-red-600 dark:text-red-400 hover:underline">
              Show all
            </Link>
          </p>
        )}

        <ul className="mt-12 space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold text-[var(--foreground)] hover:text-red-600 dark:hover:text-red-400">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <PostTags tags={post.tags} />
                <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-flex items-center text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="mt-12 text-[var(--muted)]">
            No posts yet. Add Markdown files to <code className="rounded bg-stone-200 px-1.5 py-0.5 font-mono text-sm dark:bg-stone-800">content/blog/</code> to get started.
          </p>
        )}
      </div>
    </div>
  );
}
