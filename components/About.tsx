export default function About() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          About <span className="text-sky-500">Me</span>
        </h2>
        <p className="mt-3 text-slate-500">Passionate Java Software Developer based in Chennai, Tamil Nadu</p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm">
        <p className="leading-relaxed text-slate-700">
          I am a <strong>Java Software Developer</strong> with <strong>8 months of hands-on industry experience at
          Qiaben Technologies (Qiaben Health Care Solutions)</strong>, building and maintaining production full-stack
          healthcare applications (EHR). My core technical foundation spans <strong>Java, Spring Boot, RESTful API
          design, JWT authentication, and FHIR interoperability adapters</strong>, paired with dynamic frontend
          engineering using <strong>React, Next.js, and TypeScript</strong>.
        </p>
        <p className="mt-6 leading-relaxed text-slate-600">
          During my 8-month tenure at Qiaben Technologies, I specialized in architecting secure backend microservices,
          optimizing database queries in PostgreSQL &amp; MySQL, and integrating third-party APIs like AI voice
          assistants and PDF export generators. Driven by clean architecture and object-oriented design, I aim to
          contribute to high-scale, production-grade applications in agile engineering teams.
        </p>
      </div>
    </section>
  );
}
