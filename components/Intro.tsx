"use client";

import { useRouter } from "next/navigation";
import AIAvatar from "./AIAvatar";

export default function Intro() {
  const router = useRouter();

  const enter = () => router.push("/portfolio");

  return (
    <section
      onClick={enter}
      className="relative flex min-h-[100dvh] cursor-pointer flex-col items-center justify-center px-6 py-16 text-center"
    >
      <div
        onPointerDown={(e) => e.stopPropagation()}
        onPointerMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <AIAvatar className="h-[320px] w-[340px] sm:h-[380px] sm:w-[420px]" />
      </div>

      <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-red-900/60 bg-red-950/40 px-4 py-1.5 text-sm font-medium tracking-wide text-red-300 backdrop-blur-sm">
        ✦ Premium Portfolio Entry ✦
      </span>

      <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
        Hi, I&apos;m <span className="text-red-500">Sithavan</span>
      </h1>

      <p className="mt-5 max-w-xl text-lg text-zinc-400">
        Jr Software Engineer crafting premium web experiences — Java, Spring Boot, React, Next.js, and human-centered
        3D design.
      </p>

      <button
        onClick={enter}
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-9 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-xl hover:shadow-red-900/50 animate-pulse"
      >
        Enter My Portfolio
        <span aria-hidden>→</span>
      </button>

      <p className="mt-5 text-sm text-zinc-500">or click anywhere to enter</p>

      <span aria-hidden className="absolute bottom-8 animate-bounce text-2xl text-red-500/70">
        ⤓
      </span>
    </section>
  );
}