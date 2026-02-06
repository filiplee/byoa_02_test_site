"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 dark:border-stone-800/50 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-[#DE3163] hover:text-[#c22d58] dark:text-[#e84d7a] dark:hover:text-[#f0668f] transition-colors"
        >
          test test test test test
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname != null &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
