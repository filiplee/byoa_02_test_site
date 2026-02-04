import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <h1 className="font-display text-2xl font-semibold text-[var(--foreground)]">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500 dark:bg-teal-500 dark:text-stone-900 dark:hover:bg-teal-400"
      >
        Go home
      </Link>
    </div>
  );
}
