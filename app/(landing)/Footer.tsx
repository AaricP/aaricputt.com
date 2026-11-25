import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200">
            <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex justify-between items-center text-sm text-zinc-500">
                <span>© {new Date().getFullYear()} Aaric Putt</span>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/aaricp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aaricputt"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-zinc-400 hover:text-[#0A66C2] transition-colors"
                    >
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
