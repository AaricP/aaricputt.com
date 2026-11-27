import { experience } from "@/lib/experience";
import { arbol3d } from "@/lib/arbol3d";

export default function AboutPage() {
	// Mirrors public/resume.pdf
	const skills = {
		Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL", "Java", "C#"],
		Databases: ["SQL Server", "PostgreSQL", "MongoDB", "Microsoft Access"],
		Frameworks: ["React", "Next.js", "Express.js", "Node.js", "Three.js", "Tailwind CSS", "Prisma"],
		Tools: ["Git", "GitHub", "Azure DevOps", "Vercel", "Supabase", "AWS (EC2)", "Visual Studio", "SSMS"],
	};

	const projects: { name: string; url?: string; period: string; stack: string; bullets: string[] }[] = [
		{
			name: arbol3d.name,
			url: arbol3d.url,
			period: arbol3d.period,
			stack: arbol3d.stack.join(", "),
			bullets: [
				"Designed, developed, and launched a full-stack SaaS platform that converts 3D laser-cut designs into assembly instructions and numbered, laser-ready cut sheets",
				"Developed a real-time 3D workspace for creating, assembling, and manipulating parts",
				"Designed a relational PostgreSQL database architecture using Prisma, including soft deletion and data recovery",
				"Implemented Supabase authentication and global state management using Zustand",
			],
		},
		{
			name: "Full-Stack Recipe Storing Web App",
			period: "Apr 2025",
			stack: "MERN Stack (MongoDB, Express.js, React, Node.js)",
			bullets: [
				"Developed and deployed full-stack app with React, Express.js, and MongoDB, hosted on AWS EC2",
				"Built RESTful APIs with Express and Mongoose and a responsive UI with React and MUI",
			],
		},
	];


	const h2 = "text-xs font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-4 pb-2 border-b-2 border-accent-100";
	const entryTitle = "font-semibold text-zinc-900";
	const bullet = "text-zinc-600 text-sm leading-relaxed flex gap-2.5";
	const dash = <span aria-hidden className="mt-[0.55rem] block w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />;

	return (
		<div className="bg-zinc-50 min-h-screen">
			<div className="flex justify-center px-4 sm:px-6 pt-24 md:pt-28 pb-20">
				{/* RESUME DOCUMENT */}
				<div className="bg-white flex flex-col gap-10 w-full max-w-[1000px] md:min-h-[1056px] border border-zinc-200 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_60px_-30px_rgba(0,0,0,0.15)] p-7 sm:p-12 md:px-20 md:py-16">
					{/* RESUME HEADER */}
					<div className="sm:flex sm:justify-between sm:items-end gap-6">
						<div>
							<h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.035em] text-zinc-900">Aaric Putt</h1>
							<p className="text-zinc-500 mt-1">Full-Stack Developer</p>
							<div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-sm text-zinc-500">
								<a href="https://linkedin.com/in/aaricputt" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
									linkedin.com/in/aaricputt
								</a>
								<span className="text-zinc-300">·</span>
								<a href="https://github.com/AaricP" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
									github.com/AaricP
								</a>
							</div>
						</div>
						<a
							href="/resume.pdf"
							download
							className="inline-flex items-center gap-2 mt-5 sm:mt-0 rounded-full bg-accent-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-accent-700 transition-colors shrink-0"
						>
							Download PDF <span aria-hidden>↓</span>
						</a>
					</div>

					{/* EDUCATION */}
					<section>
						<h2 className={h2}>Education</h2>
						<div className="flex justify-between gap-4">
							<div>
								<p className={entryTitle}>Utah State University</p>
								<p className="text-zinc-600 text-sm">B.A. Information Systems, Web Development emphasis · Minor: Data Analytics</p>
								<p className="text-zinc-400 text-sm">Jon M. Huntsman School of Business — Logan, UT</p>
								<p className="text-zinc-600 text-sm">GPA: 3.99</p>
							</div>
							<p className="text-zinc-400 text-sm shrink-0">May 2025</p>
						</div>
					</section>

					{/* SKILLS */}
					<section>
						<h2 className={h2}>Skills</h2>
						<div className="flex flex-col gap-2">
							{Object.entries(skills).map(([category, items]) => (
								<div key={category} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
									<span className="text-zinc-400 shrink-0 sm:w-24">{category}</span>
									<span className="text-zinc-700">{items.join(", ")}</span>
								</div>
							))}
						</div>
					</section>

					{/* EXPERIENCE */}
					<section>
						<h2 className={h2}>Experience</h2>
						<div className="flex flex-col gap-7">
							{experience.map((job) => (
								<div key={job.company}>
									<div className="flex justify-between gap-4 mb-2">
										<div>
											<p className={entryTitle}>{job.company}</p>
											<p className="text-zinc-600 text-sm">{job.role}{job.location && ` · ${job.location}`}</p>
										</div>
										<span className="text-zinc-400 text-sm shrink-0">{job.period}</span>
									</div>
									<ul className="flex flex-col gap-1">
										{job.bullets.map((b, i) => (
											<li key={i} className={bullet}>{dash}{b}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>

					{/* PROJECTS */}
					<section>
						<h2 className={h2}>Projects</h2>
						<div className="flex flex-col gap-7">
							{projects.map((p) => (
								<div key={p.name}>
									<div className="flex justify-between gap-4 mb-2">
										<div>
											<p className={entryTitle}>
												{p.url ? (
													<a href={p.url} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-wrap items-baseline gap-x-2 hover:text-zinc-600 transition-colors">
														{p.name}
														<span className="text-zinc-400 font-normal text-sm group-hover:text-zinc-900 transition-colors">{p.url.replace("https://", "")} ↗</span>
													</a>
												) : p.name}
											</p>
											<p className="text-zinc-500 text-sm italic">{p.stack}</p>
										</div>
										<span className="text-zinc-400 text-sm shrink-0">{p.period}</span>
									</div>
									<ul className="flex flex-col gap-1">
										{p.bullets.map((b, i) => (
											<li key={i} className={bullet}>{dash}{b}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>

					{/* VOLUNTEER */}
					<section>
						<h2 className={h2}>Volunteer & Leadership</h2>
						<div className="flex justify-between gap-4 mb-2">
							<div>
								<p className={entryTitle}>The Church of Jesus Christ of Latter-day Saints</p>
								<p className="text-zinc-600 text-sm">Full-Time Volunteer</p>
								<p className="text-zinc-400 text-sm">Buenos Aires, Argentina & Roseville, California</p>
							</div>
							<span className="text-zinc-400 text-sm shrink-0">Dec 2018 – Nov 2020</span>
						</div>
						<ul className="flex flex-col gap-1">
							{[
								"Served a two-year full-time mission in Argentina and California, teaching and mentoring others while developing leadership, teamwork, and communication skills in English and Spanish",
							].map((b, i) => (
								<li key={i} className={bullet}>{dash}{b}</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}
