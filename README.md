# Aaric Putt — Personal Portfolio

A personal portfolio and resume site built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Fonts** — Syne, DM Sans
- **Deployment** — Vercel

## Features

- **Live GitHub integration** — Projects page pulls directly from the GitHub API, sorted by most recently pushed
- **Resume page** — Styled HTML resume with a PDF download
- **Responsive design** — Mobile hamburger menu, adaptive layouts throughout
- **Server components** — Data fetching done server-side with `revalidate` caching


## GitHub API

Projects are fetched live from the GitHub API with a 6-hour revalidation window:
```
https://api.github.com/users/aaricp/repos?sort=pushed
```