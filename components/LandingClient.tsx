"use client";

import { useState, useEffect } from "react";

export default function LandingClient() {
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const services = [
    { num: "01", title: "Web Development", desc: "Full-stack web apps built with Next.js, React, and Node.js — fast, scalable, and maintainable." },
    { num: "02", title: "UI & Frontend", desc: "Pixel-perfect interfaces that feel great to use. Clean code, responsive layouts, smooth interactions." },
    { num: "03", title: "API & Backend", desc: "REST APIs, database design, authentication, and server logic — whatever your app needs under the hood." },
    { num: "04", title: "Performance & SEO", desc: "Speed audits, Core Web Vitals optimization, and technical SEO to make sure your site ranks and loads fast." },
  ];

  const stats = [
    { num: "50+", label: "Projects delivered" },
    { num: "5yr", label: "Experience" },
    { num: "100%", label: "Remote friendly" },
    { num: "48h", label: "Response time" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #ff7c5c, #ff5f7e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-bg {
          background: radial-gradient(ellipse 60% 60% at 80% 50%, rgba(255,95,126,0.1) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,124,92,0.07) 0%, transparent 60%);
        }
      `}</style>

      <div className="bg-[#0f0e0e] text-white min-h-screen overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* NAV */}
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300 ${scrolled ? "bg-[#0f0e0e]/90 backdrop-blur-md border-b border-white/5" : ""}`}>
          <span className="font-syne gradient-text font-extrabold text-xl tracking-tight">AP Freelance</span>
          <ul className="hidden md:flex gap-10 list-none">
            {["home", "projects"].map((s) => (
              <li key={s}>
                <a href={s === 'projects' ? '/projects' : '/'} className="text-white/50 hover:text-white transition-colors text-sm font-medium capitalize tracking-wide">
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <a href="/login" className="bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-sm font-medium px-5 py-2.5 hover:opacity-85 transition-opacity">
            Sign in
          </a>
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center px-10 pt-32 pb-16 overflow-hidden">
          <div className="hero-bg absolute inset-0 pointer-events-none" />

          <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-6">
            <span className="block w-8 h-px bg-[#ff7c5c]" />
            Available for projects
          </div>

          <h1 className="font-syne font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] max-w-3xl mb-8">
            Building the web{" "}
            <span className="gradient-text">you deserve.</span>
          </h1>

          <p className="text-white/45 text-lg max-w-md leading-relaxed font-light mb-12">
            Freelance web developer crafting fast, clean, and modern digital experiences — from concept to deployment.
          </p>

          <div className="flex gap-5 items-center flex-wrap">
            <a href="#contact" className="bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e] text-white font-medium px-8 py-3.5 hover:opacity-85 hover:-translate-y-0.5 transition-all">
              Start a Project
            </a>
            <a href="/projects" className="text-white/45 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
              See my work →
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-[#1a1818] px-10 py-28">
          <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
            <span className="block w-6 h-px bg-[#ff7c5c]" />
            What I've Built
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.03em] leading-tight max-w-md mb-16">
            Recent Projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/5 divide-x divide-y divide-white/5">
            {services.map((s) => (
              <div key={s.num} className="relative bg-[#1a1818] p-10 hover:bg-white/2 transition-colors">
                <div className="font-syne text-xs font-bold text-[#ff7c5c] tracking-widest mb-6">{s.num}</div>
                <h3 className="font-syne font-bold text-lg tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-10 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-3/4 max-h-120">
              <div className="w-full h-full bg-[#1a1818] relative overflow-hidden flex items-end justify-end">
                <span className="font-syne font-extrabold text-[10rem] leading-none gradient-text opacity-10 select-none">AP</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e]" />
            </div>
            <div>
              <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                <span className="block w-6 h-px bg-[#ff7c5c]" />
                About
              </div>
              <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-tight mb-6">
                Code with purpose.
              </h2>
              <p className="text-white/45 leading-relaxed font-light mb-4">
                I'm a freelance web developer with a focus on building clean, purposeful digital products. Whether you need a landing page, a full web app, or help untangling an existing codebase — I've got you covered.
              </p>
              <p className="text-white/45 leading-relaxed font-light">
                I work closely with clients to understand their goals and deliver solutions that actually move the needle — not just code that looks good in a demo.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-white/8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-syne font-extrabold text-4xl gradient-text tracking-tight leading-none">{s.num}</div>
                    <div className="text-white/35 text-sm mt-1 font-light">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#1a1818] px-10 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                <span className="block w-6 h-px bg-[#ff7c5c]" />
                Contact
              </div>
              <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-tight mb-6">
                Got a project in mind?
              </h2>
              <p className="text-white/45 leading-relaxed font-light mb-8 max-w-sm">
                I'm always open to interesting work. Drop me a message and I'll get back to you within 48 hours.
              </p>
              <div className="flex flex-col gap-5">
                {[{ label: "Email", val: "hello@apfreelance.com" }, { label: "Based in", val: "Available worldwide" }].map((d) => (
                  <div key={d.label}>
                    <div className="text-[#ff7c5c] text-xs tracking-[0.15em] uppercase mb-1">{d.label}</div>
                    <div className="text-white/60 text-sm">{d.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="text-[#ff7c5c] text-sm p-4 border border-[#ff7c5c]/20 bg-[#ff7c5c]/5">
                  Message sent — I'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { label: "Name", type: "text", key: "name", placeholder: "Your name" },
                    { label: "Email", type: "email", key: "email", placeholder: "your@email.com" },
                  ].map((f) => (
                    <div key={f.key} className="flex flex-col gap-1.5">
                      <label className="text-white/30 text-xs tracking-widest uppercase">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="bg-white/4 border border-white/8 text-white placeholder-white/20 px-4 py-3 text-sm font-light outline-none focus:border-[#ff7c5c]/40 transition-colors"
                        onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/30 text-xs tracking-widest uppercase">Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="bg-white/4 border border-white/[8 text-white placeholder-white/20 px-4 py-3 text-sm font-light outline-none focus:border-[#ff7c5c]/40 transition-colors resize-y"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="self-start bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e] text-white font-medium px-8 py-3.5 hover:opacity-85 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
          <span>© {new Date().getFullYear()} AP Freelance</span>
        </footer>

      </div>
    </>
  );
}
