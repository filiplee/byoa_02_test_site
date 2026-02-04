"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen antialiased bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-100">
        <div className="flex min-h-screen flex-col items-center justify-center px-6">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            className="mt-8 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
