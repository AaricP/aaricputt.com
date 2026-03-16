"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === "/") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#contact");
        }
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "My Resume", href: "/resume" },
        { label: "Projects", href: "/projects" },
    ];
    return (
        <>
            {/* NAV */}
            <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300 ${scrolled ? "bg-[#0f0e0e]/90 backdrop-blur-md border-b border-white/5" : ""}`}>
                <Link href="/" className="font-syne gradient-text font-extrabold text-xl tracking-tight shrink-0">AP</Link>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-10 list-none">
                    {navLinks.map((s) => {
                        const isActive = s.href === "/" ? pathname === "/" : pathname.startsWith(s.href);
                        return (
                            <li key={s.label}>
                                <Link
                                    href={s.href}
                                    className={`transition-colors text-sm font-medium capitalize tracking-wide ${isActive ? "text-white" : "text-white/50 hover:text-white"}`}
                                >
                                    {s.label}
                                    {isActive && <span className="block h-px bg-gradient-to-r from-[#ff7c5c] to-[#ff5f7e] mt-0.5" />}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop contact button */}
                <button onClick={handleContactClick} className="hidden md:block bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-sm font-medium px-5 py-2.5 hover:opacity-85 transition-opacity">
                    Contact me
                </button>

                {/* Hamburger / X button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <line x1="4" y1="4" x2="16" y2="16" />
                            <line x1="16" y1="4" x2="4" y2="16" />
                        </svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <line x1="3" y1="6" x2="17" y2="6" />
                            <line x1="3" y1="10" x2="17" y2="10" />
                            <line x1="3" y1="14" x2="17" y2="14" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-[#0f0e0e] flex flex-col px-10 pt-28 pb-10 md:hidden">
                    <ul className="flex flex-col gap-2 flex-1 list-none">
                        {navLinks.map((s) => {
                            const isActive = s.href === "/" ? pathname === "/" : pathname.startsWith(s.href);
                            return (
                                <li key={s.label}>
                                    <Link
                                        href={s.href}
                                        className="flex items-center py-6 border-b border-white/5"
                                    >
                                        <span className={`font-syne font-extrabold text-4xl tracking-tight transition-colors ${isActive ? "gradient-text" : "text-white/50 hover:text-white"}`}>
                                            {s.label}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        onClick={(e) => { handleContactClick(e); setMenuOpen(false); }}
                        className="bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-sm font-medium px-8 py-4 text-center hover:opacity-85 transition-opacity"
                    >
                        Contact me
                    </button>
                </div>
            )}
        </>
    )
}