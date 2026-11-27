// Single source of truth for work history (home page + resume page).
// Keep in sync with public/resume.pdf.
export type Job = {
	company: string;
	location: string;
	role: string;
	period: string;
	stats: { value: string; label: string }[];
	stack: string[];
	bullets: string[];
};

export const experience: Job[] = [
	{
		company: "EFORCE Software",
		location: "Providence, UT",
		role: "Software Support Technician",
		period: "Oct 2025 – Present",
		stats: [
			{ value: "400+", label: "law-enforcement agencies covered by my Census of Jails automation" },
			{ value: "90+", label: "custom SQL views & stored procedures built" },
			{ value: "100+", label: "software bugs reproduced & documented" },
		],
		stack: ["SQL Server", "C#", "Azure DevOps", "Git", "APIs", "SFTP"],
		bullets: [
			"Automated the federal Census of Jails report by developing a SQL Server stored procedure with 16 CTEs that generates responses to 40+ survey questions across 400+ law enforcement agencies",
			"Implemented 3 bug fixes and 2 features in the production C#/SQL Server application; independently developed additional code-level fixes that developers incorporated into production",
			"Developed 90+ custom SQL views and stored procedures to fulfill agency reporting requests",
			"Investigated, reproduced, and documented 100+ software bugs by analyzing application workflows, SQL databases, and source code, giving developers replication steps and technical findings",
			"Configured 10+ API and SFTP integrations between external agency systems and EFORCE Software",
		],
	},
	{
		company: "ATAT Inc.",
		location: "Logan, UT",
		role: "Database & Inventory Manager",
		period: "Feb 2022 – Oct 2025",
		stats: [
			{ value: "$7M+", label: "in annual revenue supported by the data I managed" },
			{ value: "1,000+", label: "SKUs in the inventory database I managed" },
			{ value: "3.5+", label: "years owning inventory data" },
		],
		stack: ["SQL", "Microsoft Access", "Excel", "Google Sheets"],
		bullets: [
			"Managed a 1,000+ SKU Microsoft Access inventory database for an Amazon business generating $7M+ in annual revenue",
			"Built Excel and Google Sheets forecasting models using historical sales, inventory levels, and supplier lead times to calculate purchasing recommendations and prevent stockouts",
			"Developed SQL queries and database tools to improve inventory tracking, data accuracy, and purchasing decisions",
		],
	},
];
