"use client";

import { useEffect } from "react";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-6"
      style={{ minHeight: "60vh", padding: "1.5rem", textAlign: "center" }}
    >
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100" style={{ color: "#0f172a" }}>
        Something went wrong
      </h1>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        We couldn’t load this post. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500"
        >
          Try again
        </button>
        <a
          href="/blog"
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
        >
          Back to Blog
        </a>
        <a
          href="/"
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
        >
          Go home
        </a>
      </div>
    </div>
  );
}
