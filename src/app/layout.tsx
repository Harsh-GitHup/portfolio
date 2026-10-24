import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageSuspense from "@/components/PageSuspense";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harsh-backend-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Harsh Kesharwani | Backend Software Engineer & Systems Architect",
    template: "%s | Harsh Kesharwani",
  },
  description:
    "Backend Software Engineer & Systems Architect specializing in Python, FastAPI, Django, PostgreSQL, Redis, Docker, and distributed microservices architectures.",
  keywords: [
    "Backend Developer",
    "Systems Architect",
    "Python Backend",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Microservices",
    "Distributed Systems",
    "RESTful API",
    "WebSockets",
  ],
  authors: [{ name: "Harsh Kesharwani", url: "https://github.com/Harsh-GitHup" }],
  creator: "Harsh Kesharwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Harsh Kesharwani | Backend Software Engineer & Systems Architect",
    description:
      "Production-grade backend engineering portfolio featuring live API explorer, distributed system architecture diagrams, and high-concurrency projects.",
    siteName: "Harsh Kesharwani Backend Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Kesharwani | Backend Software Engineer & Systems Architect",
    description:
      "Production-grade backend engineering portfolio featuring live API explorer, distributed system architecture diagrams, and high-concurrency projects.",
    creator: "@HarshKesha91325",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Harsh Kesharwani",
      jobTitle: "Backend Software Engineer & Systems Architect",
      url: baseUrl,
      sameAs: [
        "https://github.com/Harsh-GitHup",
        "https://www.linkedin.com/in/harshkesharwani",
      ],
      email: "mailto:harshkesharwani037@gmail.com",
      knowsAbout: [
        "Python",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Microservices",
        "Distributed Systems",
        "REST APIs",
        "WebSockets",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Harsh Kesharwani Backend Portfolio",
      description:
        "Production-grade backend engineering portfolio featuring live API explorer, system architecture diagrams, and high-concurrency microservices.",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0e14] text-gray-100 antialiased`}>
        <PageSuspense label="Initializing backend cluster...">{children}</PageSuspense>
      </body>
    </html>
  );
}
