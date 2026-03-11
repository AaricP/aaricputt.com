import Link from "next/link";

export default function HeroSection() {
    // const stats = [
    //     { num: "50+", label: "Projects delivered" },
    //     { num: "5yr", label: "Experience" },
    //     { num: "100%", label: "Remote friendly" },
    //     { num: "48h", label: "Response time" },
    // ];

    return (
        <section id="about" className="relative min-h-screen flex items-center px-15 pt-32 pb-16 overflow-hidden">
            <div className="hero-bg absolute inset-0 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-center w-full max-w-7xl">
                {/* Left — photo block */}
                <div className="relative flex justify-center">
                    <img
                        src="images/profile.jpeg"
                        alt="Profile"
                        className="max-h-[600px] w-auto object-contain block rounded-2xl"
                        style={{
                            boxShadow: "0 0 0 1px rgba(255,124,92,0.2), 0 25px 60px rgba(0,0,0,0.5)"
                        }}
                    />
                </div>


                {/* Right — content */}
                <div className="pl-10">
                    <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                        <span className="block w-6 h-px bg-[#ff7c5c]" />
                        Hi, I'm Aaric
                    </div>
                    <h1 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-tight mb-6">
                        Always Learning
                    </h1>
                    <p className="text-white/45 leading-relaxed font-light mb-4">
                        I'm a web developer with a focus on full-stack development, with a B.A. in Information Systems from Utah State University.
                    </p>
                    <p className="text-white/45 leading-relaxed font-light mb-4">
                        I enjoy working across the whole stack — backend logic, databases, and everything the user actually sees.
                    </p>
                    <p className="text-white/45 leading-relaxed font-light">
                        Currently working as a Software Support Technician at EFORCE, where I look into error logs, reproduce bugs, and write SQL scripts for law enforcement clients. I care about code that makes people's lives easier.
                    </p>
                    {/* <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-white/8">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="font-syne font-extrabold text-4xl gradient-text tracking-tight leading-none">{s.num}</div>
                                <div className="text-white/35 text-sm mt-1 font-light">{s.label}</div>
                            </div>
                        ))}
                    </div> */}
                    <div className="flex gap-5 items-center flex-wrap mt-10">
                        <Link href="/projects" className="bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white font-medium px-8 py-3.5 hover:opacity-85 hover:-translate-y-0.5 transition-all">
                            See my work →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}