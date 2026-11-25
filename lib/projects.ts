const GITHUB_USER = "aaricp";
const REVALIDATE = 21600; // 6h

// Repos that shouldn't appear in GitHub-driven lists (this site, and Arbol3D,
// which is showcased separately from lib/arbol3d.ts).
const HIDDEN_REPOS = ["aaricputt.com", "arbol3d", "laser-cutter-3d"];

export function isListedRepo(repo: { name: string }) {
  return !HIDDEN_REPOS.includes(repo.name.toLowerCase());
}

export async function getRepos(perPage: string = "&per_page=100") {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed${perPage}`, {
    next: { revalidate: REVALIDATE }
  });
  const data = await res.json();
  // GitHub returns an error object (not an array) when rate-limited.
  return Array.isArray(data) ? data : [];
}

export async function getLanguages(repoName: string) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}/languages`, {
    next: { revalidate: REVALIDATE  }
  });
  // On errors GitHub returns { message, documentation_url }, which would render as tags.
  return res.ok ? res.json() : {};
}

/**
 * Names of the repos pinned on the GitHub profile, in pinned order.
 * The REST API doesn't expose pins (only GraphQL, which needs a token), so this
 * reads them from the public profile page. Returns [] if that ever fails, and
 * callers fall back to most-recently-pushed.
 */
export async function getPinnedRepoNames(): Promise<string[]> {
  try {
    const res = await fetch(`https://github.com/${GITHUB_USER}`, { next: { revalidate: REVALIDATE } });
    if (!res.ok) return [];
    const html = await res.text();
    const pinnedStart = html.indexOf("pinned-item-list-item");
    if (pinnedStart === -1) return [];
    return [...html.slice(pinnedStart).matchAll(/<span class="repo"[^>]*>\s*([^<]+?)\s*<\/span>/g)]
      .map((m) => m[1].toLowerCase());
  } catch {
    return [];
  }
}

/** All listed repos with pinned ones first (in pinned order), then the rest by last push. */
export async function getReposPinnedFirst() {
  const [repos, pinned] = await Promise.all([getRepos(), getPinnedRepoNames()]);
  const rank = (name: string) => {
    const i = pinned.indexOf(name.toLowerCase());
    return i === -1 ? Infinity : i;
  };
  return repos
    .filter(isListedRepo)
    .map((repo, i) => ({ repo, i }))
    // stable: pinned by pin order, everything else keeps the API's pushed order
    .sort((a, b) => rank(a.repo.name) - rank(b.repo.name) || a.i - b.i)
    .map(({ repo }) => repo);
}
