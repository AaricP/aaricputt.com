import Link from "next/link";

export default function RecentProjectsSection() {

    const projects = [
        {
            num: "01",
            title: "Canvas LMS Clone",
            desc: "Built a React app from scratch using Vite, replicating the Canvas LMS UI/UX with admin controls, dynamic modules, and client-side navigation.",
            tech: "React · Vite · Tailwind · MUI · React Router",
            year: "2024",
        },
        {
            num: "02",
            title: "Mentor Web App",
            desc: "Transformed a static HTML site into a dynamic Express.js web app using MVC architecture, Sequelize ORM, and EJS templates.",
            tech: "Express.js · EJS · Sequelize · SQL",
            year: "2025",
        },
        {
            num: "03",
            title: "MultiShop",
            desc: "Built the full frontend for a mock online store in React against a provided backend for my Client-Side Web Development class.",
            tech: "React · JavaScript · CSS",
            year: "2025",
        },
        {
            num: "04",
            title: "AP Freelance Portfolio",
            desc: "Designed and built this portfolio site from scratch — the one you're looking at right now.",
            tech: "Next.js · TypeScript · Tailwind",
            year: "2025",
        },
    ];

    return (
        <section id="projects" className="bg-[#1a1818] px-10 py-28">
            <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                <span className="block w-6 h-px bg-[#ff7c5c]" />
                What I've Built
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.03em] leading-tight max-w-md">
                    Recent Projects.
                </h2>
                <Link href="/projects" className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 shrink-0">
                    View all projects →
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/5 divide-x divide-y divide-white/5">
                {projects.map((p) => (
                    <div key={p.num} className="relative bg-[#1a1818] p-10 hover:bg-white/2 transition-colors flex flex-col justify-between gap-8">
                        <div>
                            <div className="font-syne text-xs font-bold text-[#ff7c5c] tracking-widest mb-6">{p.num}</div>
                            <h3 className="font-syne font-bold text-lg tracking-tight mb-3">{p.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">{p.desc}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/20 text-xs font-light">{p.tech}</span>
                            <span className="text-white/20 text-xs font-light shrink-0 ml-4">{p.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}