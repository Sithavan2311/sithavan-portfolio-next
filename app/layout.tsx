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
  title: "Sithavan S | Java Software Developer",
  description:
    "Sithavan S is a Java Software Developer with 8+ months hands-on experience in Spring Boot microservices, REST APIs, and full-stack healthcare applications (EHR).",
  keywords: [
    "Sithavan Portfolio",
    "Java Developer Chennai",
    "Spring Boot",
    "React Developer",
    "Next.js",
    "Full-Stack Developer",
  ],
  openGraph: {
    title: "Sithavan S | Java Software Developer",
    description: "Java Software Developer specializing in Spring Boot microservices, React, Next.js, and EHR systems.",
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
