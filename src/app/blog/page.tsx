import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Build YOA",
  description: "Articles, tutorials, and ideas. Built with Next.js.",
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="gradient-mesh min-h-[60vh]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          Thoughts, tutorials, and updates. Newest first.
        </p>

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
                <h2 className="mt-2 font-display text-xl font-semibold text-[var(--foreground)] hover:text-teal-600 dark:hover:text-teal-400">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
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
