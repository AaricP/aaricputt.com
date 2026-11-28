import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aaricputt.com"),
  title: "Aaric Putt",
  description: "Full-stack developer working where software meets data. Software Support Technician at EFORCE, building Arbol3D, and a Utah State University Information Systems graduate.",
  openGraph: {
    title: "Aaric Putt — Full-stack developer",
    description: "Full-stack developer working where software meets data.",
    url: "https://aaricputt.com",
    siteName: "Aaric Putt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
