import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThreeDBackground from "@/components/ThreeDBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sithavan S | Jr Software Engineer",
  description:
    "Sithavan S is a Jr Software Engineer with 8 months hands-on experience at Qiaben Technologies in Spring Boot microservices, REST APIs, and full-stack healthcare applications (EHR), plus freelance QA automation testing with Postman and Playwright.",
  keywords: [
    "Sithavan Portfolio",
    "Jr Software Engineer Chennai",
    "Spring Boot",
    "React Developer",
    "Next.js",
    "QA Automation",
  ],
  openGraph: {
    title: "Sithavan S | Jr Software Engineer",
    description: "Jr Software Engineer specializing in Spring Boot microservices, React, Next.js, EHR systems, and Playwright QA automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-zinc-100">
        <ThreeDBackground />
        <div className="background-glow pointer-events-none fixed inset-0 z-0" />
        <div className="relative z-10 flex min-h-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
