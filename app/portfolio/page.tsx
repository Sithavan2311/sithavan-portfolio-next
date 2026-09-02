import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Premium from "@/components/Premium";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollSection from "@/components/ScrollSection";

export const metadata = {
  title: "Sithavan S | Jr Software Engineer",
  description:
    "Sithavan S is a Jr Software Engineer with 8 months hands-on experience at Qiaben Technologies in Spring Boot microservices, REST APIs, and full-stack healthcare applications (EHR), plus freelance QA automation testing with Postman and Playwright.",
};

export default function Portfolio() {
  return (
    <>
      <ScrollSection>
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <About />
      </ScrollSection>
      <ScrollSection>
        <Skills />
      </ScrollSection>
      <ScrollSection>
        <Premium />
      </ScrollSection>
      <ScrollSection>
        <Experience />
      </ScrollSection>
      <ScrollSection>
        <Projects />
      </ScrollSection>
      <ScrollSection>
        <Education />
      </ScrollSection>
      <ScrollSection>
        <Contact />
      </ScrollSection>
      <footer className="border-t border-red-900/40 bg-black/70 py-8 backdrop-blur-sm">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Sithavan S. Built with Next.js &amp; Three.js.
        </p>
      </footer>
    </>
  );
}