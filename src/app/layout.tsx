import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Build YOA — Landing & Blog",
  description:
    "A modern landing page and blog built with Next.js. Ideas that ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen antialiased font-sans bg-[var(--background)] text-[var(--foreground)]"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <Header />
        <main className="min-h-[50vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
