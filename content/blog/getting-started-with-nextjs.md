---
title: "Getting Started with Next.js"
date: "2025-02-02"
excerpt: "A quick guide to the Next.js App Router and why it's a great choice for modern web applications."
---

Next.js has become the go-to framework for React applications, and the **App Router** introduced in Next.js 13 makes it even more powerful. Here's why this setup works well for landing pages and blogs.

## Server Components by Default

With the App Router, every component is a Server Component unless you add `"use client"`. This means:

- **Better performance** — Less JavaScript sent to the client
- **SEO friendly** — Content is rendered on the server
- **Direct data access** — Fetch data without useEffect

## File-based Routing

The `app` directory defines your routes:

- `app/page.tsx` → `/`
- `app/blog/page.tsx` → `/blog`
- `app/blog/[slug]/page.tsx` → `/blog/welcome`, `/blog/anything`

No configuration needed. Just add files and you get routes.

## Styling with Tailwind

Tailwind CSS is included for utility-first styling. It's fast to work with and produces minimal CSS when you build for production.

That's the foundation. From here, you can extend with authentication, a database, or a headless CMS.
