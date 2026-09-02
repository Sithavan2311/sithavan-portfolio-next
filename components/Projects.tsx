import Image from "next/image";

const PROJECTS = [
  {
    title: "Full-Stack Electronic Health Record (EHR) System",
    tags: ["Java", "Spring Boot", "Next.js", "FHIR", "PostgreSQL"],
    desc: "Comprehensive healthcare platform featuring clinical encounter workflows, billing modules, JWT secure auth, FHIR data adapters, and AI voice assistant documentation support. (8 Months at Qiaben)",
    image: "/images/ehr_cover.jpg",
  },
  {
    title: "Campus Recruitment System",
    tags: ["Main Project", "Java Desktop", "MySQL", "JDBC"],
    desc: "Main Academic Project: Java desktop application for university placement cells to manage student profiles, job postings, recruiter scheduling, and application tracking.",
    emoji: "🎓",
    bg: "from-red-950 to-black",
  },
  {
    title: "Genetic Disorder Prediction Model",
    tags: ["Mini Project", "Web App", "Java", "ML"],
    desc: "Mini Academic Project: Web application built with Java and Web technologies leveraging machine learning algorithms to predict genetic disorders from patient dataset features.",
    emoji: "🧬",
    bg: "from-red-900/60 to-black",
  },
  {
    title: "Brownie Heaven - E2E Test Automation Suite",
    tags: ["Playwright", "Postman", "TypeScript", "API Testing", "Clerk Auth"],
    desc: "Comprehensive end-to-end test automation suite for Brownie Heaven Kovilambakkam store platform. Playwright UI tests across 10+ modules (Inventory, Attendance, Expenses, Discounts, Wastage, Menu) and Postman API tests with Clerk auth token auto-capture.",
    emoji: "🏪",
    bg: "from-red-800/70 to-black",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Featured <span className="text-red-500">Projects</span>
        </h2>
        <p className="mt-3 text-zinc-500">Key software engineering projects I have designed &amp; developed</p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl bg-zinc-900/70 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/30"
          >
            <div
              className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${
                project.bg ?? "bg-zinc-900"
              }`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="text-7xl transition-transform duration-500 group-hover:scale-110">{project.emoji}</span>
              )}
              {project.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-red-900/50">
                  ★ New
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-red-950/60 px-3 py-1 text-xs font-medium text-red-300 ring-1 ring-red-900/60">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-zinc-400">{project.desc}</p>
              <button className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-red-500 hover:text-red-400 group-hover:shadow-sm">
                Learn More <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
