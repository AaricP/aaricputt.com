"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart, checkout, and Stripe payments.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Project+1",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a SaaS product with real-time data, charts, and user management.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Project+2",
    tech: ["React", "Node.js", "PostgreSQL", "Recharts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024",
  },
  {
    id: 3,
    title: "Portfolio CMS",
    description: "A headless CMS-powered portfolio site with dynamic content, SEO optimization, and fast load times.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Project+3",
    tech: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023",
  },
  {
    id: 4,
    title: "Booking App",
    description: "Service booking application with calendar integration, notifications, and payment processing.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Project+4",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Property listing and search platform with map integration, filters, and agent contact forms.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Project+5",
    tech: ["React", "Express", "MongoDB", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023",
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "Modern restaurant site with online reservations, menu management, and Google Maps integration.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Project+6",
    tech: ["Next.js", "Tailwind", "Sanity", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2022",
  },
];

const allTech = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        .card-img { transition: transform 0.4s ease; }
        .project-card:hover .card-img { transform: scale(1.03); }
      `}</style>

      <div className="bg-[#0f0e0e] text-white min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

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

        {/* HEADER */}
        <div className="px-10 pt-20 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            <span className="block w-6 h-px bg-[#ff7c5c]" />
            Portfolio
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-syne font-extrabold text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.03em] leading-[0.95]">
              Recent <span className="gradient-text">Projects.</span>
            </h1>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light">
              A selection of client work and personal projects built across a range of industries and tech stacks.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {projects.map((project) => (
              <div key={project.id} className="project-card group bg-[#0f0e0e] flex flex-col overflow-hidden">

                {/* Image */}
                <div className="overflow-hidden aspect-video bg-[#1a1818]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-syne font-bold text-lg tracking-tight">{project.title}</h2>
                    <span className="text-white/25 text-xs font-light shrink-0 ml-4 mt-1">{project.year}</span>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed font-light mb-5 flex-1">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[#ff7c5c] text-xs border border-[#ff7c5c]/20 px-2.5 py-1 bg-[#ff7c5c]/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 pt-5 border-t border-white/5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs font-medium hover:text-[#ff7c5c] transition-colors flex items-center gap-1.5"
                    >
                      ↗ Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 text-xs font-medium hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      ↗ GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
          <span>© {new Date().getFullYear()} AP Freelance</span>
        </footer>

      </div>
    </>
  );
}