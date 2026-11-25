"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(false);
        if (pathname === "/") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#contact");
        }
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
                    scrolled || menuOpen ? "bg-white/85 backdrop-blur-md border-zinc-200" : "bg-white/0 border-transparent"
                }`}
            >
                <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
                    <Link href="/" className="font-semibold tracking-tight text-zinc-900 text-[15px]">
                        Aaric Putt
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-8 list-none">
                        {navLinks.map((s) => (
                            <li key={s.label}>
                                <Link
                                    href={s.href}
                                    aria-current={isActive(s.href) ? "page" : undefined}
                                    className={`text-sm transition-colors ${
                                        isActive(s.href) ? "text-zinc-900 font-medium" : "text-zinc-500 hover:text-zinc-900"
                                    }`}
                                >
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleContactClick}
                        className="hidden md:inline-flex items-center rounded-full bg-accent-600 text-white text-sm font-medium px-4 py-2 hover:bg-accent-700 transition-colors"
                    >
                        Contact
                    </button>

                    {/* Hamburger / X button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden -mr-2 p-2 text-zinc-700 hover:text-zinc-900 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            {menuOpen ? (
                                <>
                                    <line x1="5" y1="5" x2="15" y2="15" />
                                    <line x1="15" y1="5" x2="5" y2="15" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="7" x2="17" y2="7" />
                                    <line x1="3" y1="13" x2="17" y2="13" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 top-16 z-40 bg-white flex flex-col px-6 pt-4 pb-10 md:hidden">
                    <ul className="flex flex-col flex-1 list-none">
                        {navLinks.map((s) => (
                            <li key={s.label}>
                                <Link
                                    href={s.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block py-4 border-b border-zinc-100 text-2xl font-semibold tracking-tight ${
                                        isActive(s.href) ? "text-zinc-900" : "text-zinc-400"
                                    }`}
                                >
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handleContactClick}
                        className="rounded-full bg-accent-600 text-white text-sm font-medium px-6 py-3.5 hover:bg-accent-700 transition-colors"
                    >
                        Contact
                    </button>
                </div>
            )}
        </>
    );
}
