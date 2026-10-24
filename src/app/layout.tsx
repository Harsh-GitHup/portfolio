import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageSuspense from "@/components/PageSuspense";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Harsh Kesharwani | Backend Software Engineer & Systems Architect",
  description:
    "Backend Software Engineer & Systems Architect specializing in Python, FastAPI, Django, PostgreSQL, Redis, Docker, and distributed microservices architectures.",
  keywords: [
    "Backend Developer",
    "Systems Architect",
    "Python Backend",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Microservices",
    "Distributed Systems",
    "RESTful API",
    "WebSockets",
  ],
  authors: [{ name: "Harsh Kesharwani" }],
  creator: "Harsh Kesharwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harsh-backend-portfolio.vercel.app",
    title: "Harsh Kesharwani | Backend Software Engineer & Systems Architect",
    description:
      "Production-grade backend engineering portfolio featuring live API explorer, distributed system architecture diagrams, and high-concurrency projects.",
    siteName: "Harsh Kesharwani Backend Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0e14] text-gray-100 antialiased`}>
        <PageSuspense label="Initializing backend cluster...">{children}</PageSuspense>
      </body>
    </html>
  );
}
