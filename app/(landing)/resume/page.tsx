export default function AboutPage() {
    const skills = {
        Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL", "Java"],
        Technologies: ["Visual Studio Code", "React", "Express", "Next.js", "Git", "GitHub", "AWS", "Web JSON API", "Microsoft SSMS", "Microsoft Access", "Microsoft Excel", "MongoDB", "Sequelize", "IntelliJ"],
    };

    const experience = [
        {
            company: "EFORCE",
            location: "Providence, UT",
            role: "Software Support Technician",
            period: "Oct 2025 – Present",
            bullets: [
                "Support software developers by finding, reproducing, documenting, and reporting bugs",
                "Build and manage SQL scripts weekly to deliver custom reports for sheriffs and chiefs of police",
                "Diagnose and troubleshoot software issues by analyzing error logs, software code, and database records",
            ],
        },
        {
            company: "ATAT Inc.",
            location: "",
            role: "Database & Inventory Manager",
            period: "Feb 2022 – Oct 2025",
            bullets: [
                "Maintained database of ~1,000 products to support decisions driving $7M+ in revenue",
                "Wrote SQL queries to streamline inventory management and support business decision-making",
                "Developed automated inventory dashboards in Access, Excel, and Google Sheets",
            ],
        },
    ];

    return (
        <div className="bg-[#0f0e0e] text-white min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                .font-syne { font-family: 'Syne', sans-serif; }
                .gradient-text {
                    background: linear-gradient(135deg, #ff7c5c, #ff5f7e);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            {/* RESUME DOCUMENT */}
            <div className="flex justify-center px-6 pt-28 pb-16">
                <div
                    className="bg-white text-[#0f0e0e] flex flex-col gap-10 w-full shadow-2xl rounded-2xl"
                    style={{ maxWidth: "1000px", minHeight: "1056px", padding: "64px 80px" }}
                >
                    {/* RESUME HEADER */}
                    <div className="pb-4 sm:flex sm:justify-between sm:items-center">
                        <div>
                            <h1 className="font-syne font-extrabold text-5xl tracking-tight text-[#0f0e0e]">Aaric Putt</h1>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <a
                                    href="https://linkedin.com/in/aaricputt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0f0e0e]/50 text-sm hover:text-[#ff7c5c] transition-colors"
                                >
                                    linkedin.com/in/aaricputt
                                </a>
                                <span className="text-[#0f0e0e]/20 text-sm">·</span>
                                <a
                                    href="https://github.com/aaricp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0f0e0e]/50 text-sm hover:text-[#ff7c5c] transition-colors"
                                >
                                    github.com/aaricp
                                </a>
                            </div>
                        </div>
                        <a
                            href="/resume.pdf"
                            download
                            className="bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white text-xs font-medium px-5 py-2.5 hover:opacity-85 transition-opacity inline-block mt-4"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* EDUCATION */}
                    <section>
                        <h2 className="font-syne font-bold text-xs tracking-[0.2em] uppercase text-[#ff7c5c] mb-4 pb-2 border-b border-black/10">Education</h2>
                        <div className="flex justify-between gap-4">
                            <div>
                                <p className="font-syne font-bold text-base text-[#0f0e0e]">Utah State University</p>
                                <p className="text-[#0f0e0e]/60 text-sm">B.A. Information Systems, Web Development emphasis · Minor: Data Analytics</p>
                                <p className="text-[#0f0e0e]/40 text-sm">Jon M. Huntsman School of Business — Logan, UT</p>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="text-[#0f0e0e]/40 text-sm">May 2025</p>
                            </div>
                        </div>
                    </section>

                    {/* SKILLS */}
                    <section>
                        <h2 className="font-syne font-bold text-xs tracking-[0.2em] uppercase text-[#ff7c5c] mb-4 pb-2 border-b border-black/10">Skills</h2>
                        <div className="flex flex-col gap-2">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="flex gap-4 text-sm">
                                    <span className="text-[#0f0e0e]/40 shrink-0 w-24">{category}</span>
                                    <span className="text-[#0f0e0e]/70 font-medium">{items.join(", ")}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section>
                        <h2 className="font-syne font-bold text-xs tracking-[0.2em] uppercase text-[#ff7c5c] mb-4 pb-2 border-b border-black/10">Experience</h2>
                        <div className="flex flex-col gap-6">
                            {experience.map((job) => (
                                <div key={job.company}>
                                    <div className="flex justify-between gap-4 mb-2">
                                        <div>
                                            <p className="font-syne font-bold text-base text-[#0f0e0e]">{job.company}</p>
                                            <p className="text-[#ff7c5c] text-sm font-medium">{job.role}{job.location && ` · ${job.location}`}</p>
                                        </div>
                                        <span className="text-[#0f0e0e]/40 text-sm shrink-0">{job.period}</span>
                                    </div>
                                    <ul className="flex flex-col gap-1">
                                        {job.bullets.map((b, i) => (
                                            <li key={i} className="text-[#0f0e0e]/70 text-sm leading-relaxed flex gap-2">
                                                <span className="text-[#ff7c5c] shrink-0">–</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* VOLUNTEER */}
                    <section>
                        <h2 className="font-syne font-bold text-xs tracking-[0.2em] uppercase text-[#ff7c5c] mb-4 pb-2 border-b border-black/10">Volunteer & Leadership</h2>
                        <div className="flex justify-between gap-4 mb-2">
                            <div>
                                <p className="font-syne font-bold text-base text-[#0f0e0e]">The Church of Jesus Christ of Latter-day Saints</p>
                                <p className="text-[#ff7c5c] text-sm font-medium">Full-Time Volunteer</p>
                                <p className="text-[#0f0e0e]/40 text-sm">Buenos Aires, Argentina & Roseville, California</p>
                            </div>
                            <span className="text-[#0f0e0e]/40 text-sm shrink-0">Dec 2018 – Nov 2020</span>
                        </div>
                        <ul className="flex flex-col gap-1">
                            {[
                                "Gained leadership skills by teaching 7 days a week and leading by example daily for 2 years",
                                "Met weekly goals by working as a team with my companion in weekly planning and setting daily goals",
                                "Used Spanish to communicate with thousands of individuals per month",
                            ].map((b, i) => (
                                <li key={i} className="text-[#0f0e0e]/70 text-sm leading-relaxed flex gap-2">
                                    <span className="text-[#ff7c5c] shrink-0">–</span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}