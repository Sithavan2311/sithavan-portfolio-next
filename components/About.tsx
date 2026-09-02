export default function About() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          About <span className="text-red-500">Me</span>
        </h2>
        <p className="mt-3 text-zinc-500">Passionate Java Software Developer based in Chennai, Tamil Nadu</p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-zinc-900/70 p-8 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
        <p className="leading-relaxed text-zinc-200">
          I am a <strong className="text-red-400">Java Software Developer</strong> with <strong className="text-red-400">8 months of hands-on industry experience at
          Qiaben Technologies (Qiaben Health Care Solutions)</strong>, building and maintaining production full-stack
          healthcare applications (EHR). My core technical foundation spans <strong className="text-red-400">Java, Spring Boot, RESTful API
          design, JWT authentication, and FHIR interoperability adapters</strong>, paired with dynamic frontend
          engineering using <strong className="text-red-400">React, Next.js, and TypeScript</strong>.
        </p>
        <p className="mt-6 leading-relaxed text-zinc-400">
          During my 8-month tenure at Qiaben Technologies, I specialized in architecting secure backend microservices,
          optimizing database queries in PostgreSQL &amp; MySQL, and integrating third-party APIs like AI voice
          assistants and PDF export generators. Driven by clean architecture and object-oriented design, I aim to
          contribute to high-scale, production-grade applications in agile engineering teams.
        </p>
      </div>
    </section>
  );
}
