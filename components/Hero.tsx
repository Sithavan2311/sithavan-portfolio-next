import Image from "next/image";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28">
      <div className="grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-900/60 bg-red-950/40 px-4 py-1.5 text-sm font-medium text-red-300 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Available for Java & Full-Stack Roles
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Building Scalable, <span className="text-red-500">Production-Grade</span> Systems
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Java Software Developer with 8+ months of hands-on experience crafting secure Spring Boot microservices,
            REST APIs, and full-stack healthcare applications (EHR) with React &amp; Next.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-lg hover:shadow-red-900/50"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-700 bg-black/40 px-7 py-3 font-semibold text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-red-500 hover:text-red-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { value: "8+", label: "Months Exp" },
              { value: "4+", label: "Projects" },
              { value: "B.Tech", label: "IT Degree" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-red-900/70 pl-4">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <TiltCard intensity={12}>
            <div className="relative rounded-3xl bg-zinc-900/70 p-3 shadow-2xl shadow-red-950/40 ring-1 ring-red-900/40 backdrop-blur-sm animate-float glow-pulse">
              <Image
                src="/images/avatar.jpg"
                alt="Sithavan S Developer Avatar"
                width={420}
                height={420}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute -right-4 top-8 rounded-xl bg-black/90 px-4 py-2 text-sm font-semibold text-red-400 shadow-lg ring-1 ring-red-900/50">
                ⚡ Java / Spring
              </div>
              <div className="absolute -left-4 bottom-16 rounded-xl bg-black/90 px-4 py-2 text-sm font-semibold text-red-400 shadow-lg ring-1 ring-red-900/50">
                ⚛️ Next.js / React
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
