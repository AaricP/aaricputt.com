import Link from "next/link";

const languageColors: Record<string, { color: string; label: string }> = {
	JavaScript: { color: "#d4b106", label: "JS" },
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
	Rust: { color: "#b7410e", label: "RS" },
	Swift: { color: "#F05138", label: "SW" },
	Kotlin: { color: "#A97BFF", label: "KT" },
	Shell: { color: "#4d9a1f", label: "SH" },
};

// Optional per-project themes that mirror the project's own site
const themes: Record<string, {
	accentBar?: string;
	tag: string;
	liveLink: string;
	demo: string;
}> = {
	default: {
		accentBar: "bg-accent-100 transition-colors group-hover:bg-accent-500",
		tag: "text-zinc-700 bg-accent-50",
		liveLink: "rounded-full bg-accent-600 text-white px-4 py-1.5 hover:bg-accent-700",
		demo: "rounded-full border border-zinc-300 text-zinc-900 px-4 py-1.5 hover:border-accent-500",
	},
	// arbol3d.com: the site's autumn-leaf palette
	arbol3d: {
		accentBar: "bg-gradient-to-r from-[#f76912] via-[#e33110] to-[#6b3b26]",
		tag: "text-zinc-700 bg-[#f76912]/10",
		liveLink: "rounded-full bg-gradient-to-r from-[#e33110] to-[#a50f0a] text-white px-4 py-1.5 hover:brightness-110",
		demo: "rounded-full border border-[#e33110]/40 text-zinc-800 bg-white px-4 py-1.5 hover:bg-[#f76912]/10 hover:border-[#e33110]",
	},
};

const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export default function ProjectCard({ repo }: { repo: any }) {
	const t = themes[repo.theme] ?? themes.default;
	const lang = languageColors[repo.language];

	return (
		<div className="group relative bg-white rounded-2xl flex flex-col overflow-hidden border border-zinc-200 transition-all duration-200 hover:border-accent-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.18)]">
			{t.accentBar && <div className={`h-1 ${t.accentBar}`} />}

			<div className="p-6 md:p-7 flex flex-col flex-1">
				{/* Header */}
				<div className="flex items-center justify-between gap-4 mb-5">
					{repo.logo ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img src={repo.logo} alt={`${repo.name} logo`} className="w-9 h-9 rounded-lg border border-zinc-100" />
					) : (
						<div
							className="w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-semibold"
							style={{
								backgroundColor: `${lang?.color ?? "#71717a"}14`,
								color: "#3f3f46",
								boxShadow: `inset 0 -2px 0 ${lang?.color ?? "#a1a1aa"}`,
							}}
						>
							{lang?.label ?? "—"}
						</div>
					)}
					<span className="text-zinc-400 text-xs">
						{repo.period ?? fmt(repo.created_at)}
					</span>
				</div>

				{/* Content */}
				<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">{repo.name}</h2>
				<p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
					{repo.description || "No description provided."}
				</p>

				{/* Languages */}
				{Object.keys(repo.languages).length > 0 && (
					<div className="flex flex-wrap gap-1.5 mb-6">
						{Object.keys(repo.languages).map((l: string) => (
							<span key={l} className={`${t.tag} text-xs px-2 py-0.5 rounded-md`}>
								{l}
							</span>
						))}
					</div>
				)}

				{/* Links */}
				<div className="flex flex-wrap items-center gap-2.5 pt-5 border-t border-zinc-100 text-xs font-medium">
					{repo.homepage && (
						<Link href={repo.homepage} target="_blank" rel="noopener noreferrer" className={`${t.liveLink} transition-all`}>
							Live site ↗
						</Link>
					)}
					{repo.demo && (
						<Link href={repo.demo} target="_blank" rel="noopener noreferrer" className={`${t.demo} transition-colors`}>
							<span aria-hidden className="text-[9px] mr-1">▶</span>Demo
						</Link>
					)}
					{repo.html_url && (
						<Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors px-1.5">
							GitHub ↗
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
