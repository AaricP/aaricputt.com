// Single source of truth for the Arbol3D showcase (home, projects, resume).
export const arbol3d = {
	name: "Arbol3D",
	url: "https://arbol3d.com",
	demoUrl: "https://arbol3d.com/tutorial",
	logo: "/images/arbol3d.svg",
	period: "Feb 2026 – Present",
	startedAt: "2026-02-01T00:00:00Z",
	tagline: "A 3D design tool for laser-cut crafts.",
	// Short blurb used on project cards (home + /projects)
	summary: "Model in 3D, generate step-by-step build instructions, and export laser-ready cut sheets.",
	description:
		"Model a project in 3D, break it into step-by-step build instructions, and export numbered, nested cut sheets (SVG, DXF, PDF) ready for the laser.",
	highlights: [
		"Real-time 3D part assembly and manipulation in the browser",
		"SVG importer that parses and normalizes files to millimeters for laser-ready export",
		"Soft-delete and cascade-delete with full recovery for shapes, parts, and projects",
	],
	stack: ["Next.js", "TypeScript", "Three.js", "PostgreSQL", "Prisma", "Supabase"],
};
