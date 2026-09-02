"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          Sithavan<span className="text-sky-500">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-slate-900 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-sky-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
