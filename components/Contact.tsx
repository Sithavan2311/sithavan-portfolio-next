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
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Get In <span className="text-sky-500">Touch</span>
        </h2>
        <p className="mt-3 text-slate-500">Send a message directly from the portfolio</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-slate-900">Direct Contact Details</h3>
          <p className="mt-1 text-sm text-slate-500">Reach me instantly via email, phone, or WhatsApp!</p>
          <div className="mt-6 space-y-4">
            {CONTACTS.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-xl ring-1 ring-sky-100">
                  {c.icon}
                </span>
                <div>
                  <p className="text-xs text-slate-400">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-700 hover:text-sky-600">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-slate-700">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-slate-900">Send Message</h3>
          {submitted ? (
            <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center ring-1 ring-green-100">
              <p className="text-3xl">✅</p>
              <p className="mt-2 font-semibold text-green-700">Message sent successfully!</p>
              <p className="mt-1 text-sm text-green-600">Thank you, {form.name || "there"}. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Sithavan, I'd like to discuss a Java Developer position..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200"
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
