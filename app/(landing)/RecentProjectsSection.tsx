import Link from "next/link";
import { getReposPinnedFirst, getLanguages } from "@/lib/projects";
import { arbol3d } from "@/lib/arbol3d";
import Eyebrow from "./Eyebrow";

const fmtMonth = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export default async function RecentProjectsSection() {
    // Arbol3D first, then GitHub pinned repos (falls back to most recent if pins can't be read)
    const repos = (await getReposPinnedFirst()).slice(0, 3);

    const reposWithLanguages = await Promise.all(
        repos.map(async (repo: any) => ({
            ...repo,
            languages: await getLanguages(repo.name)
        }))
    );

    const cardBase =
        "group relative bg-white border rounded-2xl flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1";

    return (
        <section id="projects" className="border-t border-zinc-200 py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <Eyebrow>What I&apos;ve built</Eyebrow>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured projects</h2>
                    </div>
                    <Link href="/projects" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">
                        View all projects →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* 1 — Arbol3D, in its own palette. The card is a div so it can hold two links:
                        a full-card overlay link to the live site, plus buttons layered above it
                        (nested <a> is invalid). */}
                    <div className={`${cardBase} border-[#f76912]/30 hover:border-[#f76912]/60 hover:shadow-[0_20px_50px_-24px_rgba(227,49,16,0.45)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-[#f76912]`}>
                        <a
                            href={arbol3d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${arbol3d.name} — open live site`}
                            className="absolute inset-0 z-0 focus:outline-none"
                        />
                        <div className="h-1 bg-gradient-to-r from-[#f76912] via-[#e33110] to-[#6b3b26]" />
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between gap-3 mb-5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={arbol3d.logo} alt="" className="w-10 h-10 rounded-xl border border-zinc-100" />
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-700 bg-[#f76912]/10 px-2 py-0.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#e33110]" />
                                    Featured
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">{arbol3d.name}</h3>
                            <p className="text-xs text-zinc-400 mb-3">{arbol3d.period}</p>
                            <p className="text-sm font-medium text-zinc-800 mb-2">{arbol3d.tagline}</p>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
                                {arbol3d.summary}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {arbol3d.stack.slice(0, 4).map((s) => (
                                    <span key={s} className="text-xs text-zinc-700 bg-[#f76912]/10 px-2 py-0.5 rounded-md">{s}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-100">
                                <a
                                    href={arbol3d.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    tabIndex={-1}
                                    className="relative z-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#e33110] to-[#a50f0a] text-white text-xs font-medium px-3.5 py-1.5 hover:brightness-110 transition-all"
                                >
                                    Visit site ↗
                                </a>
                                <a
                                    href={arbol3d.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 inline-flex items-center gap-1 rounded-full border border-[#e33110]/40 text-zinc-800 bg-white text-xs font-medium px-3.5 py-1.5 hover:bg-[#f76912]/10 hover:border-[#e33110] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f76912]"
                                >
                                    <span aria-hidden className="text-[9px] text-[#e33110]">▶</span> Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {reposWithLanguages.map((repo: any) => (
                        <a
                            key={repo.id}
                            href={repo.homepage || repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${cardBase} border-zinc-200 hover:border-accent-300 hover:shadow-[0_20px_50px_-24px_rgba(30,58,95,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600`}
                        >
                            <div className="h-1 bg-accent-100 transition-colors group-hover:bg-accent-500" />
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900 break-words min-w-0">{repo.name}</h3>
                                    <span className="text-xs text-zinc-400 shrink-0 mt-1 transition-colors group-hover:text-zinc-900">
                                        {repo.homepage ? "Live ↗" : "GitHub ↗"}
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-400 mb-3">{fmtMonth(repo.created_at)}</p>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">{repo.description}</p>
                                <div className="flex gap-1.5 flex-wrap">
                                    {Object.keys(repo.languages).map((l: string) => (
                                        <span key={l} className="text-xs text-zinc-700 bg-accent-50 px-2 py-0.5 rounded-md">{l}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
