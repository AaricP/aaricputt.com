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
	
	return (
		<div key={repo.id} className="project-card group bg-[#161414] rounded-2xl flex flex-col overflow-hidden border border-white/5">

			{/* Card Header */}
			<div className="px-7 py-5 border-b border-white/5 flex items-center justify-between">
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
				<span className="text-white/20 text-xs font-light flex gap-3">
					<span>Created {new Date(repo.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
					<span>Updated {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
				</span>
			</div>

			{/* Content */}
			<div className="p-7 flex flex-col flex-1">
				<h2 className="font-syne font-bold text-lg tracking-tight mb-3 group-hover:text-[#ff7c5c] transition-colors">
					{repo.name}
				</h2>

				<p className="text-white/40 text-sm leading-relaxed font-light mb-5 flex-1">
					{repo.description || "No description provided."}
				</p>

				{/* Languages */}
				{Object.keys(repo.languages).length > 0 && (
					<div className="flex flex-wrap gap-2 mb-6">
						{Object.keys(repo.languages).map((l: string) => (
							<span key={l} className="text-[#ff7c5c] text-xs border border-[#ff7c5c]/20 px-2.5 py-1 bg-[#ff7c5c]/5 rounded-full">
								{l}
							</span>
						))}
					</div>
				)}

				{/* Links */}
				<div className="flex gap-5 pt-5 border-t border-white/5">
					{repo.homepage && (
						<Link
							href={repo.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className="text-white text-xs font-medium hover:text-[#ff7c5c] transition-colors flex items-center gap-1.5"
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
				</div>
			</div>
		</div>
	)
}