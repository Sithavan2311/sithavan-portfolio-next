"use client";

import { useState } from "react";

const CONTACTS = [
  { label: "Email", value: "sithavan2311@gmail.com", href: "mailto:sithavan2311@gmail.com", icon: "✉️" },
  { label: "GitHub", value: "github.com/Sithavan2311", href: "https://github.com/Sithavan2311", icon: "🐙" },
  { label: "LinkedIn", value: "linkedin.com/in/sithavan16", href: "https://www.linkedin.com/in/sithavan16", icon: "💼" },
  { label: "WhatsApp", value: "+91 8838547460", href: "https://wa.me/918838547460", icon: "💬" },
  { label: "Location", value: "Chennai, Tamil Nadu, India", icon: "📍" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-anchor mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        <p className="mt-3 text-zinc-500">Send a message directly from the portfolio</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-zinc-900/70 p-8 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white">Direct Contact Details</h3>
          <p className="mt-1 text-sm text-zinc-500">Reach me instantly via email, phone, or WhatsApp!</p>
          <div className="mt-6 space-y-4">
            {CONTACTS.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-950/60 text-xl ring-1 ring-red-900/60">
                  {c.icon}
                </span>
                <div>
                  <p className="text-xs text-zinc-500">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-200 hover:text-red-400">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-zinc-200">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-zinc-900/70 p-8 shadow-lg shadow-red-950/20 ring-1 ring-red-900/40 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white">Send Message</h3>
          {submitted ? (
            <div className="mt-6 rounded-2xl bg-red-950/60 p-6 text-center ring-1 ring-red-900/60">
              <p className="text-3xl">✅</p>
              <p className="mt-2 font-semibold text-red-300">Message sent successfully!</p>
              <p className="mt-1 text-sm text-red-400/70">Thank you, {form.name || "there"}. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-300">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-300">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="w-full rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-300">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Sithavan, I'd like to discuss a Java Developer position..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-lg hover:shadow-red-900/50"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
