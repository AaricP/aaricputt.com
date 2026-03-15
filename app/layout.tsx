import type { Metadata } from "next";
import "./globals.css";
  
export const metadata: Metadata = {
  title: "Aaric Putt",
  description: "My name is Aaric, and I'm a web developer specializing in full-stack development. I have a B.A. in Information Systems from Utah State University, and experience working with a variety of technologies across the stack. I care about writing code that makes people's lives easier.",
  openGraph: {
    title: "Aaric Putt - Web Developer",
    description: "Web developer specializing in full-stack development. B.A. in Information Systems from Utah State University.",
    url: "https://aaricputt.com",
    siteName: "Aaric Putt",
    images: [
      {
        url: "https://aaricputt.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
