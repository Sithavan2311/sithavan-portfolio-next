import TiltCard from "./TiltCard";
import AIAvatar from "./AIAvatar";

const FACTS = [
  { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: "💼", label: "Current Role", value: "Jr Software Engineer · Freelance QA Automation" },
  { icon: "🎓", label: "Education", value: "B.Tech in Information Technology" },
  { icon: "🗣️", label: "Languages", value: "English, Tamil" },
];

const HIGHLIGHTS = [
  "Spring Boot microservices & REST API design",
  "JWT-based secure authentication",
  "FHIR interoperability adapters",
  "React / Next.js / TypeScript frontends",
  "PostgreSQL & MySQL query optimization",
  "Playwright & Postman QA test automation",
];

export default function About() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          About <span className="text-red-500">Me</span>
        </h2>
        <p className="mt-3 text-zinc-500">Junior Software Engineer based in Chennai, Tamil Nadu</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-5">
        <TiltCard intensity={6} className="md:col-span-3">
          <div className="h-full rounded-3xl bg-zinc-900/70 p-8 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
            <p className="leading-relaxed text-zinc-200">
              I am a <strong className="text-red-400">Jr Software Engineer</strong> with{" "}
              <strong className="text-red-400">8 months of hands-on industry experience at Qiaben Technologies (Qiaben Health Care Solutions)</strong>,
              building and maintaining production full-stack healthcare applications (EHR).
            </p>
            <p className="mt-4 leading-relaxed text-zinc-300">
              My core technical foundation spans{" "}
              <strong className="text-red-400">Java, Spring Boot, RESTful API design, JWT authentication, and FHIR interoperability adapters</strong>,
              paired with dynamic frontend engineering using{" "}
              <strong className="text-red-400">React, Next.js, and TypeScript</strong>.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              At Qiaben, I specialized in backend microservices, PostgreSQL/MySQL optimization, and integrations like AI
              voice assistants and PDF export generators. Since mid-2026 I additionally freelance as a QA automation
              tester, building end-to-end and API test suites with Postman and Playwright. Driven by clean architecture
              and object-oriented design, I aim to contribute to high-scale, production-grade applications in agile
              teams.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((hl) => (
                <div key={hl} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  {hl}
                </div>
              ))}
            </div>
          </div>
        </TiltCard>

        <TiltCard intensity={4} className="md:col-span-2">
          <div className="flex h-full flex-col items-center rounded-3xl bg-zinc-900/70 p-6 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white">
              AI of <span className="text-red-500">Me</span>
            </h3>
            <AIAvatar className="h-[300px] w-full" />
            <p className="-mt-2 text-sm text-zinc-500">
              AI portrait · 22 · Jr Software Engineer
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Let&apos;s Talk <span aria-hidden>→</span>
            </a>
          </div>
        </TiltCard>
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
        {FACTS.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-4 rounded-2xl bg-zinc-900/60 px-5 py-4 ring-1 ring-red-900/40 backdrop-blur-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-950/60 text-xl ring-1 ring-red-900/60">
              {f.icon}
            </span>
            <div className="min-w-0">
              <p className="text-xs text-zinc-500">{f.label}</p>
              <p className="text-sm font-semibold text-zinc-200">{f.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}