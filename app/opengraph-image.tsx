import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Aaric Putt — Full-stack developer working where software meets data.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the hero section: white ground, navy accent, portrait on the right.
const ACCENT = "#1e3a5f";
const ACCENT_GLOW = "#e3ebf5";

export default async function OpengraphImage() {
	const photo = await readFile(join(process.cwd(), "public/images/profile.jpeg"));
	const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

	// Card is 2:3; the source photo is 1190x1990, so it overflows the bottom
	// slightly and is clipped — same top-anchored crop the site uses.
	const cardW = 340;
	const cardH = 510;
	const imgH = Math.round((cardW * 1990) / 1190);

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 88px",
					backgroundColor: "#ffffff",
					backgroundImage: `radial-gradient(circle at 92% 0%, ${ACCENT_GLOW} 0%, rgba(255,255,255,0) 45%)`,
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", width: 620 }}>
					<div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#71717a", marginBottom: 24 }}>
						<div style={{ width: 36, height: 4, borderRadius: 4, backgroundColor: "#2f5584", marginRight: 16 }} />
						Hi, I&apos;m Aaric.
					</div>
					<div style={{ display: "flex", flexDirection: "column", fontSize: 64, fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
						<span style={{ color: "#18181b" }}>Full-stack developer</span>
						<span style={{ color: "#71717a" }}>working where software meets data.</span>
					</div>
					<div style={{ display: "flex", alignItems: "center", marginTop: 48 }}>
						<div
							style={{
								display: "flex",
								backgroundColor: ACCENT,
								color: "#ffffff",
								fontSize: 24,
								padding: "12px 28px",
								borderRadius: 999,
							}}
						>
							aaricputt.com
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						width: cardW,
						height: cardH,
						overflow: "hidden",
						borderRadius: 24,
						border: "1px solid rgba(0,0,0,0.08)",
					}}
				>
					<img src={photoSrc} width={cardW} height={imgH} alt="" style={{ width: cardW, height: imgH }} />
				</div>
			</div>
		),
		size,
	);
}
