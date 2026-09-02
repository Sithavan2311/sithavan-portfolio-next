const EXPERIENCES = [
  {
    date: "Nov 2025 – Jun 2026 | Remote",
    role: "Java Developer (8 Months)",
    company: "Qiaben Technologies (Qiaben Health Care Solutions)",
    points: [
      "Engineered backend services in Java (Spring Boot) and interactive frontend features in Next.js / TypeScript / React for a full-stack Electronic Health Record (EHR) platform over 8 months.",
      "Implemented core clinical workflows including encounters, assessments, medical history, physical exams, and provider sign-off, plus billing modules (invoices, claims, payments).",
      "Designed secure authentication using JWT and integrated FHIR-based external storage adapters for third-party healthcare system interoperability.",
      "Improved system reliability by implementing safe API response parsing, e-signature workflows, PDF export, and AI voice assistant support for documentation.",
      "Built reusable client-side components to speed up feature development and maintain UI consistency.",
    ],
  },
  {
    date: "Jun 2023 | Remote",
    role: "IoT Technologies Intern",
    company: "Barola Technologies",
    points: [
      "Completed hands-on training in IoT fundamentals, sensors, microcontrollers, and embedded systems.",
      "Built and tested basic IoT modules to collect and monitor real-time sensor data.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Professional <span className="text-red-500">Experience</span>
        </h2>
        <p className="mt-3 text-zinc-500">My hands-on industry background building production software</p>
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl border-l-2 border-red-900/60 pl-8">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center">
              <span className="h-4 w-4 rounded-full bg-red-600 shadow-[0_0_12px_rgba(239,68,68,0.7)] ring-4 ring-red-950/60" />
            </span>
            <span className="text-sm font-medium text-red-400">{exp.date}</span>
            <h3 className="mt-2 text-xl font-bold text-white">{exp.role}</h3>
            <p className="mt-1 font-medium text-zinc-400">{exp.company}</p>
            <ul className="mt-4 space-y-3">
              {exp.points.map((point, j) => (
                <li key={j} className="flex gap-3 text-zinc-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/70" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
