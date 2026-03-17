import Link from "next/link";
import { getRepos, getLanguages } from "@/lib/projects";

export default async function RecentProjectsSection() {
    const repos = await getRepos("&per_page=4");

    const reposWithLanguages = await Promise.all(
        repos
        .filter((repo: any) => repo.name !== "aaricputt.com")
        .map(async (repo: any) => ({
            ...repo,
            languages: await getLanguages(repo.name)
        }))
    );

    return (
        <section id="projects" className="bg-[#1a1818] px-10 py-28">
            <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                <span className="block w-6 h-px bg-[#ff7c5c]" />
                What I've Built
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.03em] leading-tight max-w-md">
                    Recent Projects.
                </h2>
                <Link href="/projects" className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 shrink-0">
                    View all projects →
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reposWithLanguages.map((repo: any, index: number) => (
                    <div key={repo.id} className="relative bg-[#0f0e0e] border border-white/5 rounded-2xl p-8 hover:border-[#ff7c5c]/20 hover:bg-white/[0.02] transition-all flex flex-col justify-between gap-8">
                        <div>
                            <div className="font-syne text-xs font-bold text-[#ff7c5c] tracking-widest mb-6">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="font-syne font-bold text-lg tracking-tight mb-3">{repo.name}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">{repo.description}</p>
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2 pt-4 border-t border-white/5">
                            <div className="flex gap-2 flex-wrap">
                                {Object.keys(repo.languages).length > 0 &&
                                    Object.keys(repo.languages).map((l: string) => (
                                        <span key={l} className="text-[#ff7c5c] text-xs border border-[#ff7c5c]/15 px-2 py-0.5 rounded-full bg-[#ff7c5c]/5">{l}</span>
                                    ))
                                }
                            </div>
                            <span className="text-white/20 text-xs font-light shrink-0">{new Date(repo.pushed_at).getFullYear()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}