"use client";

import { useState } from "react";

type Category = "all" | "backend" | "frontend" | "database" | "languages";

const SKILLS: { name: string; desc: string; icon: string; category: Exclude<Category, "all"> }[] = [
  { name: "Spring Boot", desc: "REST APIs & Microservices", icon: "🟢", category: "backend" },
  { name: "JWT Authentication", desc: "Secure Auth & Tokens", icon: "🔑", category: "backend" },
  { name: "FHIR Integration", desc: "Healthcare Interop", icon: "🏥", category: "backend" },
  { name: "React & Next.js", desc: "TypeScript Client Components", icon: "⚛️", category: "frontend" },
  { name: "HTML5 / CSS3 / JS", desc: "Responsive Web Layouts", icon: "🎨", category: "frontend" },
  { name: "PostgreSQL & MySQL", desc: "Database Design & SQL", icon: "🗄️", category: "database" },
  { name: "Git Version Control", desc: "Agile Workflow & GitHub", icon: "🌿", category: "database" },
  { name: "API Testing & OOP", desc: "Postman & Clean Code", icon: "🧪", category: "database" },
  { name: "Java", desc: "Primary Backend Language", icon: "☕", category: "languages" },
  { name: "Python", desc: "Scripting & Data Processing", icon: "🐍", category: "languages" },
  { name: "Playwright E2E", desc: "UI Test Automation", icon: "🖥️", category: "backend" },
  { name: "Docker & Cloud", desc: "Containerization", icon: "🐳", category: "database" },
];

const FILTERS: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "backend", label: "Backend & APIs" },
  { key: "frontend", label: "Frontend" },
  { key: "database", label: "Databases & Tools" },
  { key: "languages", label: "Languages" },
];

export default function Skills() {
  const [active, setActive] = useState<Category>("all");
  const visible = active === "all" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Core <span className="text-sky-500">Competencies</span>
        </h2>
        <p className="mt-3 text-slate-500">Technologies and tools I use to build robust software solutions</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === f.key
                ? "bg-sky-500 text-white shadow-md shadow-sky-200"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-sky-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-start gap-4 rounded-2xl bg-white/70 p-5 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100"
          >
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h4 className="font-semibold text-slate-900">{skill.name}</h4>
              <p className="mt-1 text-sm text-slate-500">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
