export async function getRepos(perPage: string = "") {
  const res = await fetch(`https://api.github.com/users/aaricp/repos?sort=updated${perPage}`, {
    next: { revalidate: 21600 }
  });
  return res.json();
}

export async function getLanguages(repoName: string) {
  const res = await fetch(`https://api.github.com/repos/aaricp/${repoName}/languages`, {
    next: { revalidate: 21600 }
  });
  return res.json();
}
