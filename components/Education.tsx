const EDUCATION = [
  {
    title: "B.Tech in Information Technology",
    institution: "Adhiyamman College of Engineering",
    period: "2021 – 2025",
    icon: "🎓",
    bg: "from-red-950 to-black",
  },
  {
    title: "Full-Stack Development",
    institution: "Qspiders Training Institute",
    period: "Full-Stack Python Development",
    icon: "📘",
    bg: "from-red-900/50 to-black",
  },
  {
    title: "Higher Secondary & High School",
    institution: "St. Vincent Pallotti & DJM School",
    period: "12th (2020-21) & 10th (2018-19) State Board",
    icon: "🏫",
    bg: "from-red-800/40 to-black",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Education &amp; <span className="text-red-500">Training</span>
        </h2>
        <p className="mt-3 text-zinc-500">My academic qualifications and specialized courses</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {EDUCATION.map((edu) => (
          <div
            key={edu.title}
            className={`rounded-3xl bg-gradient-to-br ${edu.bg} p-7 ring-1 ring-red-900/40 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/40`}
          >
            <span className="text-4xl">{edu.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-white">{edu.title}</h3>
            <p className="mt-2 text-zinc-300">{edu.institution}</p>
            <p className="mt-1 text-sm font-medium text-zinc-500">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
