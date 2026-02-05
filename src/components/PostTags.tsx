import Link from "next/link";

interface PostTagsProps {
  tags: string[];
  baseUrl?: string;
}

export function PostTags({ tags, baseUrl = "/blog" }: PostTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={`${baseUrl}?tag=${encodeURIComponent(tag)}`}
            className="inline-flex rounded-full bg-stone-200 px-2.5 py-0.5 text-xs font-medium text-[var(--foreground)] hover:bg-red-100 hover:text-red-700 dark:bg-stone-700 dark:hover:bg-red-900/40 dark:hover:text-red-300"
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
