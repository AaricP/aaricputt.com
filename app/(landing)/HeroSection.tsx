import Link from "next/link";
import { arbol3d } from "@/lib/arbol3d";

export default function HeroSection() {
	return (
		<section id="about" className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
			{/* soft accent glow */}
			<div aria-hidden className="pointer-events-none absolute -top-48 -right-40 h-[640px] w-[640px] rounded-full bg-accent-100/70 blur-3xl" />
			<div aria-hidden className="pointer-events-none absolute top-1/2 -left-56 h-[420px] w-[420px] rounded-full bg-accent-100/60 blur-3xl" />

			<div className="relative mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-center">
				{/* Content */}
				<div className="order-2 md:order-1">
					<a
						href={arbol3d.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-2 mb-8 pl-1 pr-3.5 py-1 rounded-full border border-zinc-200 bg-white/80 backdrop-blur text-xs text-zinc-600 hover:border-[#f76912]/50 hover:text-zinc-900 transition-colors"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={arbol3d.logo} alt="" className="w-5 h-5 rounded-full" />
						Now building <span className="font-medium text-zinc-900">Arbol3D</span>
						<span aria-hidden className="text-zinc-400 transition-transform group-hover:translate-x-0.5">→</span>
					</a>

					<p className="flex items-center gap-3 text-sm font-medium text-zinc-500 mb-4">
						<span aria-hidden className="block h-0.5 w-6 rounded-full bg-accent-500" />
						Hi, I&apos;m Aaric.
					</p>
					<h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.05] text-zinc-900 mb-8">
						Full-stack developer{" "}
						<span className="text-zinc-500">working where software meets data.</span>
					</h1>

					<div className="flex flex-col gap-4 text-zinc-600 leading-relaxed max-w-xl">
						<p>
							I&apos;m a Software Support Technician at <span className="text-zinc-900 font-medium">EFORCE</span>, where I automate SQL Server reporting for 400+ law-enforcement agencies, ship fixes to the production C# app, and track bugs down through the database and source code. Before that, I spent 3.5+ years at <span className="text-zinc-900 font-medium">ATAT Inc.</span> managing a 1,000+ SKU inventory database for an Amazon business doing $7M+ a year.
						</p>
						<p>
							Outside of work, I&apos;m building{" "}
							<a href={arbol3d.url} target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-medium underline decoration-[#f76912]/50 underline-offset-4 hover:decoration-[#f76912] transition-colors">Arbol3D</a>
							, a full-stack 3D design tool for laser-cut crafts.
						</p>
						<p>
							I graduated from <span className="text-zinc-900 font-medium">Utah State University</span> in 2025 with a B.A. in Information Systems, with an emphasis in Web Development and a minor in Data Analytics.
						</p>
					</div>

					<div className="flex gap-3 items-center flex-wrap mt-10">
						<Link href="/projects" className="inline-flex items-center rounded-full bg-accent-600 text-white text-sm font-medium px-5 py-2.5 shadow-[0_8px_24px_-10px_rgba(30,58,95,0.7)] hover:bg-accent-700 transition-colors">
							See my work
						</Link>
						<Link href="/resume" className="inline-flex items-center rounded-full border border-zinc-300 bg-white text-zinc-900 text-sm font-medium px-5 py-2.5 hover:border-accent-500 transition-colors">
							View resume
						</Link>
						<Link href="/#experience" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-2">
							Experience ↓
						</Link>
					</div>
				</div>

				{/* Photo — 2:3 portrait, cropped from the top so the tie stays in frame */}
				<div className="order-1 md:order-2 flex justify-center">
					<div className="relative w-56 sm:w-64 md:w-full md:max-w-[440px]">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/images/profile.jpeg"
							alt="Aaric Putt"
							className="relative w-full aspect-[2/3] object-cover object-top rounded-2xl ring-1 ring-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.06),0_30px_60px_-20px_rgba(0,0,0,0.4)]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
