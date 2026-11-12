import Link from "next/link";

export default function ProjectCard({ repo }: { repo: any }) {

	const languageColors: Record<string, { color: string; label: string }> = {
		JavaScript: { color: "#f1e05a", label: "JS" },
		TypeScript: { color: "#3178c6", label: "TS" },
		Python: { color: "#3572A5", label: "PY" },
		HTML: { color: "#e34c26", label: "HTML" },
		CSS: { color: "#563d7c", label: "CSS" },
		EJS: { color: "#a91e50", label: "EJS" },
		Java: { color: "#b07219", label: "Java" },
		"C++": { color: "#f34b7d", label: "C++" },
		"C#": { color: "#178600", label: "C#" },
		Ruby: { color: "#701516", label: "RB" },
		Go: { color: "#00ADD8", label: "Go" },
		Rust: { color: "#dea584", label: "RS" },
		Swift: { color: "#F05138", label: "SW" },
		Kotlin: { color: "#A97BFF", label: "KT" },
		Shell: { color: "#89e051", label: "SH" },
	};

	// Optional per-project themes that mirror the project's own site
	const themes: Record<string, {
		card: string;
		accentBar?: string;
		divider: string;
		meta: string;
		title: string;
		description: string;
		tag: string;
		liveLink: string;
		tutorial: string;
	}> = {
		default: {
			card: "bg-[#161414] border-white/5",
			divider: "border-white/5",
			meta: "text-white/20",
			title: "group-hover:text-[#ff7c5c]",
			description: "text-white/40",
			tag: "text-[#ff7c5c] border-[#ff7c5c]/20 bg-[#ff7c5c]/5",
			liveLink: "text-white hover:text-[#ff7c5c]",
			tutorial: "bg-[#ff7c5c] hover:bg-[#ff946f] text-black font-semibold shadow-lg hover:scale-105",
		},
		// arbol3d.com: white card with the site's autumn-leaf palette
		arbol3d: {
			card: "bg-white border-zinc-200",
			accentBar: "bg-gradient-to-r from-[#f76912] via-[#e33110] to-[#6b3b26]",
			divider: "border-zinc-100",
			meta: "text-zinc-400",
			title: "text-zinc-900 font-medium group-hover:bg-gradient-to-r group-hover:from-[#f76912] group-hover:via-[#e33110] group-hover:to-[#c4150c] group-hover:bg-clip-text group-hover:text-transparent",
			description: "text-zinc-500",
			tag: "text-[#c4150c] border-[#e33110]/25 bg-[#f76912]/10",
			liveLink: "text-zinc-900 hover:text-[#e33110]",
			tutorial: "bg-gradient-to-r from-[#e33110] to-[#a50f0a] text-white font-medium tracking-wide shadow-[0_8px_30px_-6px_rgba(247,105,18,0.6)] hover:shadow-[0_10px_40px_-4px_rgba(247,105,18,0.8)] hover:brightness-110",
		},
	};
	const t = themes[repo.theme] ?? themes.default;

	return (
		<div
			key={repo.id}
			className={`project-card group relative rounded-2xl flex flex-col overflow-hidden border ${t.card}`}
		>
			{t.accentBar && <div className={`h-1 ${t.accentBar}`} />}

			{/* Card Header */}
			<div className={`px-7 py-5 border-b ${t.divider} flex items-center justify-between`}>
				{repo.logo ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img src={repo.logo} alt={`${repo.name} logo`} className="w-8 h-8 rounded-lg" />
				) : (
				<div
					className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold"
					style={{
						backgroundColor: `${languageColors[repo.language]?.color ?? "#ffffff"}20`,
						borderColor: `${languageColors[repo.language]?.color ?? "#ffffff"}40`,
						color: languageColors[repo.language]?.color ?? "#ffffff40",
					}}
				>
					{languageColors[repo.language]?.label ?? "?"}
				</div>
				)}
				<span className={`${t.meta} text-xs font-light flex gap-3`}>
					<span>Created {new Date(repo.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
					<span>Updated {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
				</span>
			</div>

			{/* Content */}
			<div className="p-7 flex flex-col flex-1">
				<h2 className={`${repo.theme ? "" : "font-syne font-bold"} text-lg tracking-tight mb-3 w-fit transition-colors ${t.title}`}>
					{repo.name}
				</h2>

				<p className={`${t.description} text-sm leading-relaxed font-light mb-5 flex-1`}>
					{repo.description || "No description provided."}
				</p>

				{/* Languages */}
				{Object.keys(repo.languages).length > 0 && (
					<div className="flex flex-wrap gap-2 mb-6">
						{Object.keys(repo.languages).map((l: string) => (
							<span key={l} className={`${t.tag} text-xs border px-2.5 py-1 rounded-full`}>
								{l}
							</span>
						))}
					</div>
				)}

				{/* Links */}
				<div className={`flex gap-5 pt-5 border-t ${t.divider} relative`}>
					{repo.homepage && (
						<Link
							href={repo.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className={`text-xs font-medium ${t.liveLink} transition-colors flex items-center gap-1.5`}
						>
							Live Site
						</Link>
					)}
					{repo.html_url && (
						<Link
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/40 text-xs font-medium hover:text-white transition-colors flex items-center gap-1.5"
						>
							GitHub
						</Link>
					)}
					{/* Tutorial Badge */}
					{repo.video_tutorial && (
						<Link
							href={repo.video_tutorial}
							target="_blank"
							rel="noopener noreferrer"
							className={`absolute top-4 right-0 z-20 text-[11px] px-3 py-1.5 rounded-full transition-all duration-200 ${t.tutorial}`}
						>
							Tutorial
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}