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
		company: "EFORCE",
		location: "Providence, UT",
		role: "Software Support Technician",
		period: "Oct 2025 – Present",
		stats: [
			{ value: "400+", label: "law-enforcement agencies on my jail-reporting procedure" },
			{ value: "80+", label: "ad hoc SQL reports delivered" },
			{ value: "100+", label: "software bugs reproduced & documented" },
		],
		stack: ["SQL Server", "C#", "HTML", "Azure DevOps", "Git", "APIs", "SFTP"],
		bullets: [
			"Implemented a full-stack bug fix using C#, HTML, and SQL to improve report accuracy",
			"Built and optimized a SQL Server stored procedure with 16 CTEs and 43 queries for jail reporting across 400+ law-enforcement agencies; merged via Git/Azure DevOps for production deployment",
			"Developed 80+ ad hoc SQL reports ranging from 10–300 lines supporting operational and analytical requests from law enforcement agencies",
			"Investigated, reproduced, and documented 100+ software bugs by analyzing application workflows, SQL databases, and source code, providing developers with detailed replication steps and technical findings",
			"Configured API and SFTP integrations between external agency systems and the application",
		],
	},
	{
		company: "ATAT Inc.",
		location: "Logan, UT",
		role: "Database & Inventory Manager",
		period: "Feb 2022 – Oct 2025",
		stats: [
			{ value: "$7M+", label: "in revenue supported by the data I managed" },
			{ value: "~1,000", label: "products in the database I maintained" },
			{ value: "3.5+", label: "years owning inventory data" },
		],
		stack: ["SQL", "Microsoft Access", "Excel", "Google Sheets"],
		bullets: [
			"Managed and improved a database of ~1,000 products to support decisions driving $7M+ in revenue",
			"Wrote SQL queries to streamline inventory management and support business decision-making",
			"Developed automated inventory dashboards in Access, Excel, and Google Sheets, resulting in significantly fewer inventory errors and faster product location times",
		],
	},
];
