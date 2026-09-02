import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="border-t border-slate-200/70 bg-white/60 py-8 backdrop-blur-sm">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sithavan S. Built with Next.js &amp; Three.js.
        </p>
      </footer>
    </>
  );
}
