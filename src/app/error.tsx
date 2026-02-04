"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <h1 className="font-display text-2xl font-semibold text-[var(--foreground)]">
        Something went wrong
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        We couldn’t load this page. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500 dark:bg-teal-500 dark:text-stone-900 dark:hover:bg-teal-400"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800/50"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
