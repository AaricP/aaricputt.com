import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
            <span>© {new Date().getFullYear()} Aaric Putt</span>

            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/aaricp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href="https://linkedin.com/in/aaricputt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/60 hover:text-[#0072B1] transition-colors duration-200"
                >
                    <FaLinkedin size={20} />
                </a>
            </div>
        </footer>
    );
}