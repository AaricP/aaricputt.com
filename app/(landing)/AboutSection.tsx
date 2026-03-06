export default function AboutSection() {
    const stats = [
        { num: "50+", label: "Projects delivered" },
        { num: "5yr", label: "Experience" },
        { num: "100%", label: "Remote friendly" },
        { num: "48h", label: "Response time" },
    ];

    return (
        <>
            <section id="about" className="px-10 py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-3/4 max-h-120">
                        <div className="w-full h-full bg-[#1a1818] relative overflow-hidden flex items-end justify-end">
                            <span className="font-syne font-extrabold text-[10rem] leading-none gradient-text opacity-10 select-none">AP</span>
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e]" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                            <span className="block w-6 h-px bg-[#ff7c5c]" />
                            About
                        </div>
                        <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-tight mb-6">
                            Code with purpose.
                        </h2>
                        <p className="text-white/45 leading-relaxed font-light mb-4">
                            I'm a freelance web developer with a focus on building clean, purposeful digital products. Whether you need a landing page, a full web app, or help untangling an existing codebase — I've got you covered.
                        </p>
                        <p className="text-white/45 leading-relaxed font-light">
                            I work closely with clients to understand their goals and deliver solutions that actually move the needle — not just code that looks good in a demo.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-white/8">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="font-syne font-extrabold text-4xl gradient-text tracking-tight leading-none">{s.num}</div>
                                    <div className="text-white/35 text-sm mt-1 font-light">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}