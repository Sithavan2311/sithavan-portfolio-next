import TiltCard from "./TiltCard";

const FACTS = [
  { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: "💼", label: "Current Role", value: "Open to Java / Full-Stack roles" },
  { icon: "🎓", label: "Education", value: "B.Tech Information Technology" },
  { icon: "🗣️", label: "Languages", value: "English, Tamil" },
];

const HIGHLIGHTS = [
  "Spring Boot microservices & REST API design",
  "JWT-based secure authentication",
  "FHIR interoperability adapters",
  "React / Next.js / TypeScript frontends",
  "PostgreSQL & MySQL query optimization",
  "Third-party API integrations (AI voice, PDF export)",
];

export default function About() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          About <span className="text-red-500">Me</span>
        </h2>
        <p className="mt-3 text-zinc-500">Passionate Java Software Developer based in Chennai, Tamil Nadu</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-5">
        <TiltCard intensity={6} className="md:col-span-3">
          <div className="h-full rounded-3xl bg-zinc-900/70 p-8 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
            <p className="leading-relaxed text-zinc-200">
              I am a <strong className="text-red-400">Java Software Developer</strong> with{" "}
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
              voice assistants and PDF export generators. Driven by clean architecture and object-oriented design, I aim
              to contribute to high-scale, production-grade applications in agile teams.
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

        <TiltCard intensity={6} className="md:col-span-2">
          <div className="flex h-full flex-col rounded-3xl bg-zinc-900/70 p-8 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white">Quick Facts</h3>
            <div className="mt-6 space-y-5">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-950/60 text-xl ring-1 ring-red-900/60">
                    {f.icon}
                  </span>
                  <div>
                    <p className="text-xs text-zinc-500">{f.label}</p>
                    <p className="font-semibold text-zinc-200">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-auto pt-8 inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Let&apos;s Talk <span aria-hidden>→</span>
            </a>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}