import Link from "next/link";

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

async function getRepos() {
  const res = await fetch("https://api.github.com/users/aaricp/repos?sort=updated", {
    next: { revalidate: 604800 }
  });
  return res.json();
}

async function getLanguages(repoName: string) {
  const res = await fetch(`https://api.github.com/repos/aaricp/${repoName}/languages`, {
    next: { revalidate: 604800 }
  });
  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  const reposWithLanguages = await Promise.all(
    repos.map(async (repo: any) => ({
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

      <div className="bg-[#0f0e0e] text-white min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-[#0f0e0e]/90 backdrop-blur-md border-b border-white/5">
          <span className="font-syne gradient-text font-extrabold text-xl tracking-tight">AP</span>
          <ul className="hidden md:flex gap-10 list-none">
            {["home", "projects"].map((s) => (
              <li key={s}>
                <Link
                  href={s === "projects" ? "/projects" : "/"}
                  className="text-white/50 hover:text-white transition-colors text-sm font-medium capitalize tracking-wide"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-sm font-medium px-5 py-2.5 hover:opacity-85 transition-opacity"
          >
            Contact Me
          </Link>
        </nav>

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
              A collection of personal and academic projects built across different stacks and problem spaces.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reposWithLanguages.map((repo: any) => (
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
                  <span className="text-white/20 text-xs font-light">
                    {new Date(repo.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    {" — "}
                    {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
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
                        ↗ Live Site
                      </Link>
                    )}
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 text-xs font-medium hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      ↗ GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
          <span>© {new Date().getFullYear()} AP Freelance</span>
        </footer>

      </div>
    </>
  );
}