import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="en" className={`${syne.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased font-sans bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
