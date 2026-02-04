import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">
        Post not found
      </h1>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        This blog post doesn’t exist or was removed.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500 dark:bg-teal-500 dark:text-stone-900 dark:hover:bg-teal-400"
      >
        Back to Blog
      </Link>
    </div>
  );
}
