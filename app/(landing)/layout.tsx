"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          <Link href="/" className="font-syne gradient-text font-extrabold text-xl tracking-tight">AP</Link>
          <ul className="hidden md:flex gap-10 list-none">
            {[
              { label: "home", href: "/" },
              { label: "projects", href: "/projects" },
            ].map((s) => {
              const isActive = s.href === "/" ? pathname === "/" : pathname.startsWith(s.href);
              return (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className={`transition-colors text-sm font-medium capitalize tracking-wide ${isActive ? "text-white" : "text-white/50 hover:text-white"
                      }`}
                  >
                    {s.label}
                    {isActive && <span className="block h-px bg-gradient-to-r from-[#ff7c5c] to-[#ff5f7e] mt-0.5" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/login" className="bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-sm font-medium px-5 py-2.5 hover:opacity-85 transition-opacity">
            Sign in
          </Link>
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