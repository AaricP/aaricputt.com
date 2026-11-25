import Link from "next/link";
import { experience } from "@/lib/experience";
import Eyebrow from "./Eyebrow";

export default function ExperienceSection() {
	return (
		<section id="experience" className="border-t border-accent-100 bg-accent-50/60 py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
					<div>
						<Eyebrow>Where I&apos;ve worked</Eyebrow>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Experience</h2>
					</div>
					<Link href="/resume" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">
						Full resume →
					</Link>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					{experience.map((job, i) => (
						<article
							key={job.company}
							className="bg-white border border-accent-100 rounded-2xl p-7 md:p-9 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex flex-col gap-8"
						>
							{/* Header */}
							<div className="flex flex-wrap items-start justify-between gap-4">
								<div>
									<div className="flex items-center gap-3 mb-1.5">
										<h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
										{i === 0 && (
											<span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
												<span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
												Current
											</span>
										)}
									</div>
									<p className="text-sm text-zinc-600">{job.role}</p>
								</div>
								<div className="text-right text-xs text-zinc-400 leading-relaxed">
									<p>{job.period}</p>
									<p>{job.location}</p>
								</div>
							</div>

							{/* Stats */}
							<dl className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-100">
								{job.stats.map((s) => (
									<div key={s.label}>
										<div aria-hidden className="h-0.5 w-5 rounded-full bg-accent-500 mb-3" />
										<dt className="sr-only">{s.label}</dt>
										<dd className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-zinc-900 leading-none mb-2">
											{s.value}
										</dd>
										<dd className="text-zinc-500 text-xs leading-snug">{s.label}</dd>
									</div>
								))}
							</dl>

							{/* Highlights */}
							<ul className="flex flex-col gap-3 flex-1">
								{job.bullets.slice(0, 3).map((b) => (
									<li key={b} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
										<span aria-hidden className="mt-2 block w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
										{b}
									</li>
								))}
							</ul>

							{/* Stack */}
							<div className="flex flex-wrap gap-1.5">
								{job.stack.map((t) => (
									<span key={t} className="text-xs text-zinc-700 bg-accent-50 px-2 py-0.5 rounded-md">
										{t}
									</span>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
