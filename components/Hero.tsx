import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28">
      <div className="grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Java & Full-Stack Roles
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Building Scalable, <span className="text-sky-500">Production-Grade</span> Systems
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Java Software Developer with 8+ months of hands-on experience crafting secure Spring Boot microservices,
            REST APIs, and full-stack healthcare applications (EHR) with React &amp; Next.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
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
              <div key={stat.label} className="border-l-2 border-sky-200 pl-4">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-3xl bg-white/60 p-3 shadow-2xl shadow-sky-100 ring-1 ring-slate-200/60 backdrop-blur-sm animate-float">
            <Image
              src="/images/avatar.jpg"
              alt="Sithavan S Developer Avatar"
              width={420}
              height={420}
              className="rounded-2xl object-cover"
              priority
            />
            <div className="absolute -right-4 top-8 rounded-xl bg-white/95 px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200">
              ⚡ Java / Spring
            </div>
            <div className="absolute -left-4 bottom-16 rounded-xl bg-white/95 px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200">
              ⚛️ Next.js / React
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
