import { getReposPinnedFirst, getLanguages } from "@/lib/projects";
import { arbol3d } from "@/lib/arbol3d";
import ProjectCard from "../ProjectCard";
import Eyebrow from "../Eyebrow";

export default async function ProjectsPage() {
	// pinned GitHub repos first, then the rest by most recent push
	const repos = await getReposPinnedFirst();

	const reposWithLanguages = await Promise.all(
		repos
			.map(async (repo: any) => ({
				...repo,
				languages: await getLanguages(repo.name)
			}))
	);

	return (
		<>
			{/* HEADER */}
			<div className="mx-auto max-w-6xl px-6 md:px-10 pt-32 md:pt-40 pb-12">
				<Eyebrow>Portfolio</Eyebrow>
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
					<h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.035em]">Projects</h1>
					<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
						A collection of personal and academic projects built across different stacks.
					</p>
				</div>
			</div>

			{/* GRID */}
			<div className="mx-auto max-w-6xl px-6 md:px-10 pb-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<ProjectCard
						repo={{
							id: arbol3d.name,
							name: arbol3d.name,
							theme: "arbol3d",
							logo: arbol3d.logo,
							description: `${arbol3d.tagline} ${arbol3d.summary}`,
							created_at: arbol3d.startedAt,
							period: arbol3d.period,
							homepage: arbol3d.url,
							demo: arbol3d.demoUrl,
							language: "TypeScript",
							languages: Object.fromEntries(arbol3d.stack.map((s) => [s, 1])),
						}}
					/>
					{reposWithLanguages.map((repo: any) => (
						<ProjectCard key={repo.id} repo={repo} />
					))}
				</div>
			</div>
		</>
	);
}