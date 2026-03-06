export default function RecentProjectsSection() {

    const services = [
        { num: "01", title: "Web Development", desc: "Full-stack web apps built with Next.js, React, and Node.js — fast, scalable, and maintainable." },
        { num: "02", title: "UI & Frontend", desc: "Pixel-perfect interfaces that feel great to use. Clean code, responsive layouts, smooth interactions." },
        { num: "03", title: "API & Backend", desc: "REST APIs, database design, authentication, and server logic — whatever your app needs under the hood." },
        { num: "04", title: "Performance & SEO", desc: "Speed audits, Core Web Vitals optimization, and technical SEO to make sure your site ranks and loads fast." },
    ];

    return (
        <>
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
        </>
    )
}