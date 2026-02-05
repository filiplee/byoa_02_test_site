import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { PostTags } from "@/components/PostTags";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const slug = params?.slug;
    if (!slug || typeof slug !== "string") return { title: "Post Not Found" };
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: `${post.title} — Build YOA`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function PostNotFound() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-6"
      style={{ minHeight: "60vh", padding: "1.5rem", textAlign: "center" }}
    >
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100" style={{ color: "#0f172a" }}>
        Post not found
      </h1>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        This blog post doesn’t exist or was removed.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
      >
        Back to Blog
      </Link>
    </div>
  );
}

function PostError() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-6"
      style={{ minHeight: "60vh", padding: "1.5rem", textAlign: "center" }}
    >
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100" style={{ color: "#0f172a" }}>
        Something went wrong
      </h1>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        We couldn’t load this post.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
      >
        Back to Blog
      </Link>
    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  try {
    const slug = params?.slug;
    if (!slug || typeof slug !== "string") return <PostNotFound />;
    const post = await getPostBySlug(slug);

    if (!post) return <PostNotFound />;

    return (
      <div className="gradient-mesh-red min-h-[60vh]">
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
            <PostTags tags={post.tags} />
          </header>
          <div
            className="prose prose-stone mt-8 dark:prose-invert prose-headings:font-display prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-stone-900 prose-pre:text-stone-100 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </article>
      </div>
    );
  } catch {
    return <PostError />;
  }
}
