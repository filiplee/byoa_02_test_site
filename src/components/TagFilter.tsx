"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface TagFilterProps {
  tags: string[];
  currentTag: string | null;
}

export function TagFilter({ tags, currentTag }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set("tag", value);
    } else {
      next.delete("tag");
    }
    const q = next.toString();
    router.push(q ? `/blog?${q}` : "/blog");
  }

  if (tags.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="tag-filter" className="text-sm font-medium text-[var(--muted)]">
        Filter by tag:
      </label>
      <select
        id="tag-filter"
        value={currentTag ?? ""}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm text-[var(--foreground)] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-stone-600 dark:bg-stone-800"
      >
        <option value="">All posts</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
