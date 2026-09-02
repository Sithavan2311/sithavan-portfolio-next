"use client";

import TiltCard from "./TiltCard";

const SKILLS: { name: string; desc: string; icon: string; detail: string }[] = [
  { name: "Java", desc: "Primary Backend Language", icon: "☕", detail: "OOP, Collections, Streams, Multithreading, Java 8+" },
  { name: "Spring Boot", desc: "REST APIs & Microservices", icon: "🟢", detail: "Spring Data JPA, Security, Boot 3.x" },
  { name: "JWT Authentication", desc: "Secure Auth & Tokens", icon: "🔑", detail: "Stateless auth, role-based access control" },
  { name: "FHIR Integration", desc: "Healthcare Interop", icon: "🏥", detail: "FHIR R4 resources, custom storage adapters" },
  { name: "React & Next.js", desc: "TypeScript Client Components", icon: "⚛️", detail: "Hooks, App Router, SSR/SSG, Tailwind CSS" },
  { name: "HTML5 / CSS3 / JS", desc: "Responsive Web Layouts", icon: "🎨", detail: "Flexbox, Grid, animations, ES6+" },
  { name: "PostgreSQL & MySQL", desc: "Database Design & SQL", icon: "🗄️", detail: "Normalization, indexing, query optimization" },
  { name: "Git Version Control", desc: "Agile Workflow & GitHub", icon: "🌿", detail: "Branching strategies, CI, PR reviews" },
  { name: "API Testing & OOP", desc: "Postman & Clean Code", icon: "🧪", detail: "REST test suites, SOLID principles, refactoring" },
  { name: "Python", desc: "Scripting & Data Processing", icon: "🐍", detail: "Automation, pandas, FastAPI basics" },
  { name: "Playwright E2E", desc: "UI Test Automation", icon: "🖥️", detail: "TypeScript tests, fixtures, CI integration" },
  { name: "Docker & Cloud", desc: "Containerization", icon: "🐳", detail: "Dockerfiles, compose, cloud deployments" },
];

function SkillCard({ skill }: { skill: (typeof SKILLS)[number] }) {
  return (
    <div className="mr-5 w-72 shrink-0">
      <TiltCard intensity={12} className="rounded-2xl bg-zinc-900/70 p-5 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm transition-all hover:ring-red-700/50">
        <div className="flex items-start gap-4">
          <span className="text-3xl">{skill.icon}</span>
          <div>
            <h4 className="font-semibold text-white">{skill.name}</h4>
            <p className="mt-0.5 text-sm text-red-400">{skill.desc}</p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">{skill.detail}</p>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

export default function Skills() {
  const row1 = SKILLS.slice(0, 6);
  const row2 = SKILLS.slice(6);

  return (
    <section id="skills" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Core <span className="text-red-500">Competencies</span>
        </h2>
        <p className="mt-3 text-zinc-500">My tech stack in continuous motion — hover any card to pause &amp; tilt it in 3D</p>
      </div>

      <div className="marquee-track mt-12 space-y-6 overflow-hidden">
        <div className="animate-marquee flex w-max">
          {[...row1, ...row1].map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
        <div className="animate-marquee-reverse flex w-max">
          {[...row2, ...row2].map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}