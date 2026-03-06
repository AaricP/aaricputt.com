"use client";

import { useState, useEffect } from "react";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
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

        {children}

        {/* FOOTER */}
        <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
          <span>© {new Date().getFullYear()} AP Freelance</span>
        </footer>

      </div>
    </>
  );
}
