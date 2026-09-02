import TiltCard from "./TiltCard";

const PILLARS = [
  {
    icon: "💻",
    title: "Frontend Development",
    accent: "from-red-600/20 to-transparent",
    items: [
      { name: "React", purpose: "Component-based UI architecture and interactive portfolio sections." },
      { name: "JavaScript / TypeScript", purpose: "Application logic, interactions, and maintainable frontend structure." },
      { name: "HTML5 & CSS3", purpose: "Semantic structure, responsive layouts, and polished visual styling." },
      { name: "Tailwind CSS", purpose: "Fast, consistent, responsive UI development and design-system styling." },
    ],
  },
  {
    icon: "🎬",
    title: "Motion & Interaction",
    accent: "from-red-600/20 to-transparent",
    items: [
      { name: "GSAP", purpose: "Smooth, cinematic scroll animations, transitions, and interactive motion." },
      { name: "Scroll-driven animation", purpose: "Interactive storytelling that responds naturally to user scrolling." },
      { name: "Micro-interactions", purpose: "Subtle motion details that make the interface feel refined and responsive." },
    ],
  },
  {
    icon: "🌌",
    title: "3D & Immersive Design",
    accent: "from-red-600/20 to-transparent",
    items: [
      { name: "3D visual design", purpose: "Large-scale immersive hero visuals designed to create an immediate premium impression." },
      { name: "360° interactive presentation", purpose: "A complete rotational visual experience integrated into the hero section." },
      { name: "Depth & perspective", purpose: "Layered composition and perspective-based motion for a more dimensional interface." },
    ],
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    accent: "from-red-600/20 to-transparent",
    items: [
      { name: "Figma", purpose: "Interface planning, visual systems, layouts, prototypes, and responsive design." },
      { name: "Design systems", purpose: "Consistent typography, spacing, components, and visual hierarchy." },
      { name: "Responsive UX", purpose: "Layouts and interactions optimized across desktop, tablet, and mobile." },
    ],
  },
  {
    icon: "⚡",
    title: "Performance & Delivery",
    accent: "from-red-600/20 to-transparent",
    items: [
      { name: "Modern responsive architecture", purpose: "Built for fast rendering and smooth interaction across screen sizes." },
      { name: "Asset optimization", purpose: "Visual assets prepared with performance and loading experience in mind." },
      { name: "Production-ready workflow", purpose: "Structured development approach for maintainable portfolio projects." },
    ],
  },
];

export default function Premium() {
  return (
    <section id="premium" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-900/60 bg-red-950/40 px-4 py-1.5 text-sm font-medium text-red-300 backdrop-blur-sm">
          Premium Portfolio
        </span>
        <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Tech <span className="text-red-500">&amp;</span> Design
        </h2>
        <p className="mt-3 text-zinc-500">
          A modern, interactive portfolio experience focused on premium visual design, smooth motion, responsive
          development, and high-performance delivery.
        </p>
      </div>

      <TiltCard intensity={3}>
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-red-950/70 via-zinc-900/80 to-red-950/70 p-8 ring-1 ring-red-900/50 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white">
            <span className="text-red-400">Positioning</span> · Premium personal portfolio development
          </h3>
          <p className="mt-3 leading-relaxed text-zinc-300">
            Combining strong visual design, immersive 3D presentation, smooth motion, responsive UX, and modern
            frontend engineering to create a{" "}
            <strong className="text-red-400">memorable digital first impression</strong>.
          </p>
        </div>
      </TiltCard>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <TiltCard key={pillar.title} intensity={5}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-zinc-900/70 p-7 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm transition-all hover:ring-red-700/60">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent}`} />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-950/60 text-2xl ring-1 ring-red-900/60">
                  {pillar.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{pillar.title}</h3>
                <ul className="mt-4 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item.name} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/80" />
                      <div>
                        <p className="text-sm font-semibold text-red-300">{item.name}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">{item.purpose}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}