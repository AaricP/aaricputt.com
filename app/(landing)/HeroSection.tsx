export default function HeroSection() {
    return (
        <>
            <section className="relative min-h-screen flex flex-col justify-center px-10 pt-32 pb-16 overflow-hidden">
                <div className="hero-bg absolute inset-0 pointer-events-none" />

                <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-6">
                    <span className="block w-8 h-px bg-[#ff7c5c]" />
                    Available for projects
                </div>

                <h1 className="font-syne font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] max-w-3xl mb-8">
                    Building the web{" "}
                    <span className="gradient-text">you deserve.</span>
                </h1>

                <p className="text-white/45 text-lg max-w-md leading-relaxed font-light mb-12">
                    Freelance web developer crafting fast, clean, and modern digital experiences — from concept to deployment.
                </p>

                <div className="flex gap-5 items-center flex-wrap">
                    <a href="#contact" className="bg-linear-to-br from-[#ff7c5c] to-[#ff5f7e] text-white font-medium px-8 py-3.5 hover:opacity-85 hover:-translate-y-0.5 transition-all">
                        Start a Project
                    </a>
                    <a href="/projects" className="text-white/45 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                        See my work →
                    </a>
                </div>
            </section>
        </>
    )
}