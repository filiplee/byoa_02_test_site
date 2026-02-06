import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Lightning Fast",
    description:
      "Built on Next.js 14 with the App Router. Server components, streaming, and optimizations out of the box.",
    icon: "⚡",
  },
  {
    title: "Developer First",
    description:
      "TypeScript, Tailwind CSS, and a clean project structure. Easy to extend and customize.",
    icon: "🛠",
  },
  {
    title: "Markdown Ready",
    description:
      "Write blog posts in Markdown. Simple, portable, and version-control friendly.",
    icon: "📝",
  },
];

export default function Home() {
  return (
    <div className="gradient-mesh">
      {/* Hero — Nova-style layout */}
      <section className="relative overflow-hidden border-b-2 border-blue-200 bg-stone-50 dark:border-blue-900/50 dark:bg-stone-900/30">
        <div className="mx-auto max-w-4xl px-6 pt-12 pb-8 text-center sm:pt-16 sm:pb-12">
          {/* Announcement bar */}
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Next.js Landing & Blog
          </p>

          {/* Headline */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-cyan-500 dark:text-cyan-400 sm:text-5xl md:text-6xl">
            this is a test
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">
            A modern landing page and blog template. Fast, beautiful, and ready
            for your content.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-500 dark:bg-teal-500 dark:text-stone-900 dark:shadow-teal-400/20 dark:hover:bg-teal-400"
            >
              Call to Action
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800/50"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Visual block: phone mockup + decorative shapes */}
        <div className="relative flex min-h-[420px] items-end justify-center px-4 pb-8 sm:min-h-[480px] md:min-h-[520px]">
          {/* Left placeholder image */}
          <div className="absolute left-0 top-1/2 hidden h-48 w-48 -translate-y-1/2 overflow-hidden rounded-3xl border border-stone-200/50 shadow-lg dark:border-stone-700/50 md:block lg:left-8">
            <Image
              src="https://picsum.photos/seed/hero-left/192/192"
              alt=""
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Right placeholder image */}
          <div className="absolute right-0 top-1/2 hidden h-48 w-48 -translate-y-1/2 overflow-hidden rounded-full border border-stone-200/50 shadow-lg dark:border-stone-700/50 md:block lg:right-8">
            <Image
              src="https://picsum.photos/seed/hero-right/192/192"
              alt=""
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Phone mockup with placeholder image */}
          <div className="relative z-10 mx-auto w-[280px] flex-shrink-0 sm:w-[320px]">
            <div className="aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[14px] border-stone-800 bg-stone-200 shadow-2xl dark:border-stone-700 dark:bg-stone-800">
              <Image
                src="https://picsum.photos/seed/phone-app/280/560"
                alt="App screenshot placeholder"
                width={280}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-stone-200/50 dark:border-stone-800/50 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Built for speed and simplicity
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Everything you need to launch quickly, without the bloat.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-stone-200/50 bg-white/50 p-6 transition hover:border-teal-200 hover:bg-teal-50/30 dark:border-stone-800/50 dark:bg-stone-900/30 dark:hover:border-teal-900/50 dark:hover:bg-teal-950/20"
              >
                <span className="text-2xl" role="img" aria-hidden>
                  {feature.icon}
                </span>
                <h3 className="mt-4 font-display font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value — what we help you do */}
      <section className="border-t border-stone-200/50 dark:border-stone-800/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Build systems for:
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💡", text: "Generating and researching ideas" },
              { icon: "✨", text: "Creating banger titles and thumbnails" },
              { icon: "💰", text: "Outsourcing, and monetising" },
              { icon: "👍", text: "Knowing what videos will perform well" },
              { icon: "🎬", text: "Scripting, filming, and editing content" },
              { icon: "📅", text: "Publishing and repurposing" },
              { icon: "📈", text: "Reviewing your analytics" },
              {
                icon: null,
                text: "And no — this won't suck the creativity out of being a creator!",
                fullWidth: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-stone-200/50 bg-white/60 p-6 transition hover:border-teal-200 hover:bg-teal-50/20 dark:border-stone-800/50 dark:bg-stone-900/30 dark:hover:border-teal-900/50 dark:hover:bg-teal-950/20 ${item.fullWidth ? "lg:col-span-4 flex flex-col justify-center text-center" : ""}`}
              >
                {item.icon ? (
                  <span className="text-3xl" role="img" aria-hidden>
                    {item.icon}
                  </span>
                ) : null}
                <p className={`text-sm font-medium text-[var(--foreground)] ${item.icon ? "mt-3" : "mt-0"}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200/50 dark:border-stone-800/50 px-6 py-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 px-8 py-16 text-center shadow-xl dark:from-teal-600 dark:to-teal-800">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-teal-100">
            Head over to the blog and see how it all comes together.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            Visit the Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
