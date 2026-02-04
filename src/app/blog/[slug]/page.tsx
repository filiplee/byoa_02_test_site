import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Build YOA`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="gradient-mesh min-h-[60vh]">
      <article className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Back to Blog
        </Link>
        <header className="mt-8">
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
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {post.title}
          </h1>
        </header>
        <div
          className="prose prose-stone mt-8 dark:prose-invert prose-headings:font-display prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-stone-900 prose-pre:text-stone-100 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
