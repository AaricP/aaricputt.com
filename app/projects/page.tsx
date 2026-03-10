"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "AP Freelance Portfolio",
    description: "My personal freelance portfolio site built with Next.js and TypeScript. The site you're on right now.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=AP+Freelance",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/aaricp/apfreelance",
    liveUrl: "https://apfreelance.vercel.app",
    year: "2025",
  },
  {
    id: 2,
    title: "Canvas LMS Clone",
    description: "A React app built from scratch using Vite, replicating the Canvas LMS UI/UX with admin controls, modules, announcements, and dynamic page updates.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Canvas+Clone",
    tech: ["React", "Vite", "Tailwind", "MUI", "React Router"],
    githubUrl: "https://github.com/aaricp/canvas",
    year: "2024",
  },
  {
    id: 3,
    title: "Mentor Web App",
    description: "Transformed Bootstrap's static HTML website into a dynamic Express.js web app using MVC architecture, Sequelize, and EJS templates.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Mentor+App",
    tech: ["Express.js", "EJS", "Sequelize", "MVC"],
    githubUrl: "https://github.com/aaricp/mentorWebApp",
    year: "2025",
  },
  {
    id: 4,
    title: "Next.js Dashboard",
    description: "Next.js App Router fundamentals project — exploring server components, routing, and data fetching patterns.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Next.js+Dashboard",
    tech: ["Next.js", "TypeScript", "App Router"],
    githubUrl: "https://github.com/aaricp/nextjs-dashboard",
    year: "2025",
  },
  {
    id: 5,
    title: "MultiShop",
    description: "A mock online store for my Client-Side Web Development class. Built the full frontend in React against a provided backend.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=MultiShop",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/aaricp/multiShop",
    year: "2025",
  },
  {
    id: 6,
    title: "Stock Trader",
    description: "A Python project for simulating stock trading logic and portfolio management.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Stock+Trader",
    tech: ["Python"],
    githubUrl: "https://github.com/aaricp/stock_trader",
    year: "2025",
  },
  {
    id: 7,
    title: "Binary Search Tree",
    description: "A Python implementation of a binary search tree with core data structure operations.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=BST",
    tech: ["Python"],
    githubUrl: "https://github.com/aaricp/binary_search_tree",
    year: "2024",
  },
  {
    id: 8,
    title: "Deck Object",
    description: "A Python project modeling a deck of cards with object-oriented design principles.",
    image: "https://placehold.co/800x500/1a1818/ff7c5c?text=Deck+Object",
    tech: ["Python"],
    githubUrl: "https://github.com/aaricp/deck_object",
    year: "2025",
  },
];

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
        .project-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
      `}</style>

      <div className="bg-[#0f0e0e] text-white min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* NAV */}
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300 ${scrolled ? "bg-[#0f0e0e]/90 backdrop-blur-md border-b border-white/5" : ""}`}>
          <span className="font-syne gradient-text font-extrabold text-xl tracking-tight">AP Freelance</span>
          <ul className="hidden md:flex gap-10 list-none">
            {["home", "projects"].map((s) => (
              <li key={s}>
                <Link href={s === "projects" ? "/projects" : "/"} className="text-white/50 hover:text-white transition-colors text-sm font-medium capitalize tracking-wide">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/login" className="bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-sm font-medium px-5 py-2.5 hover:opacity-85 transition-opacity rounded-md">
            Sign in
          </Link>
        </nav>

        {/* HEADER */}
        <div className="px-10 pt-36 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            <span className="block w-6 h-px bg-[#ff7c5c]" />
            Portfolio
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-syne font-extrabold text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.03em] leading-[0.95]">
              Recent <span className="gradient-text">Projects.</span>
            </h1>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light">
              A collection of personal and academic projects built across different stacks and problem spaces.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="project-card group bg-[#161414] rounded-2xl flex flex-col overflow-hidden border border-white/5">

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
                      <span key={t} className="text-[#ff7c5c] text-xs border border-[#ff7c5c]/20 px-2.5 py-1 bg-[#ff7c5c]/5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 pt-5 border-t border-white/5">
                  <Link
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs font-medium hover:text-[#ff7c5c] transition-colors flex items-center gap-1.5"
                    >
                      ↗ Live Site
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 text-xs font-medium hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      ↗ GitHub
                    </Link>
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