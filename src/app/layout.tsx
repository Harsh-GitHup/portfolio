import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Kesharwani - Full-Stack Python Developer",
  description:
    "Professional portfolio of Harsh Kesharwani, a passionate full-stack Python developer specializing in modern web applications and scalable backend systems.",
  keywords: [
    "Full-Stack Developer",
    "Python Developer",
    "React",
    "Next.js",
    "Django",
    "FastAPI",
  ],
  authors: [{ name: "Harsh Kesharwani" }],
  creator: "Harsh Kesharwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harsh-portfolio.vercel.app",
    title: "Harsh Kesharwani - Full-Stack Python Developer",
    description:
      "Professional portfolio showcasing expertise in Python, React, and modern web development.",
    siteName: "Harsh Kesharwani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Kesharwani - Full-Stack Python Developer",
    description:
      "Professional portfolio showcasing expertise in Python, React, and modern web development.",
    creator: "@harsh_dev",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
