import { getRepos, getLanguages } from "@/lib/projects";
import ProjectCard from "../ProjectCard";

export default async function ProjectsPage() {
	const repos = await getRepos();

	const reposWithLanguages = await Promise.all(
		repos
			.filter((repo: any) => repo.name !== "aaricputt.com")
			.map(async (repo: any) => ({
				...repo,
				languages: await getLanguages(repo.name)
			}))
	);

	return (
		<>
			<style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                .font-syne { font-family: 'Syne', sans-serif; }
                .gradient-text {
                    background: linear-gradient(135deg, #ff7c5c, #ff5f7e);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .project-card {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .project-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
            `}</style>

			{/* HEADER */}
			<div className="px-10 pt-36 pb-12 border-b border-white/5">
				<div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-4">
					<span className="block w-6 h-px bg-[#ff7c5c]" />
					Portfolio
				</div>
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
					<h1 className="font-syne font-extrabold text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.03em] leading-[0.95]">
						My <span className="gradient-text">Projects.</span>
					</h1>
					<p className="text-white/40 text-sm max-w-xs leading-relaxed font-light">
						A collection of personal and academic projects built across different stacks.
					</p>
				</div>
			</div>

			{/* GRID */}
			<div className="px-10 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<ProjectCard
						repo={{
							id: "LaserCutter3D",
							name: "LaserCutter3D",
							description:
								"In progress: A 3D laser cutter design web app for creating wooden cutout designs with auto-generated blueprints and laser-ready SVG exports.",
							created_at: "2026-02-01T00:00:00Z",
							updated_at: new Date().toISOString(),
							homepage: "https://laser-cutter-3d.vercel.app/",
							video_tutorial: "https://youtu.be/98mJee2l02E",
							language: "TypeScript",
							languages: {
								'Next.js': 1,
								TypeScript: 1,
								React: 1,
								ThreeJS: 1,
								TailwindCSS: 1,
							},
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