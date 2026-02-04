# Build YOA — Landing Page & Blog

A modern landing page and blog built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Landing page** — Hero section, features grid, and CTA
- **Blog** — Markdown-based posts with listing and individual pages
- **Styling** — Tailwind CSS with teal/amber accents, dark mode support
- **Fonts** — Syne (display) and JetBrains Mono via `next/font`

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── content/blog/       # Markdown blog posts
├── src/
│   ├── app/            # App Router pages
│   │   ├── page.tsx    # Landing page
│   │   └── blog/       # Blog pages
│   ├── components/     # Shared components
│   └── lib/            # Utilities (blog parsing)
```

## Adding Blog Posts

Create a `.md` file in `content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-02-03"
excerpt: "A short summary for the listing page."
---

Your content here in **Markdown**...
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
