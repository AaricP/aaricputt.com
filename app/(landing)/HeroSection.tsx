import Link from "next/link";

export default function HeroSection() {

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
						Full-Stack Developer
					</h1>

					<p className="text-white/45 leading-relaxed font-light mb-4">
						I'm a full-stack developer with a B.A. in Information Systems from Utah State University and a minor in Data Analytics. I enjoy building applications, working with databases, and creating solutions that connect technology with business needs.
					</p>

					<p className="text-white/45 leading-relaxed font-light mb-4">
						My professional experience includes managing databases, developing SQL reporting solutions, analyzing relational data, troubleshooting software issues, and building tools that support business decisions. I enjoy working at the intersection of software, data, and real-world problems.
					</p>

					<p className="text-white/45 leading-relaxed font-light">
						Outside of work, I build full-stack applications using React, Next.js, TypeScript, REST APIs, and database-driven architectures.
					</p>
					<div className="flex gap-5 items-center flex-wrap mt-10">
						<div className="flex gap-5 items-center flex-wrap mt-10">
							<Link href="/projects" className="bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white font-medium px-8 py-3.5 hover:opacity-85 hover:-translate-y-0.5 transition-all">
								See my work →
							</Link>
							<Link href="/resume" className="text-white/45 hover:text-white transition-colors text-sm font-medium">
								View Resume →
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}