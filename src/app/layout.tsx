import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santhosh Kumar | Full Stack & Python Developer",
  description: "Full Stack Developer specializing in Python, Django, and AI integration. Building modern web applications with cutting-edge technologies.",
  keywords: ["Full Stack Developer", "Python Developer", "Django", "React", "Next.js", "AI"],
  authors: [{ name: "Santhosh Kumar" }],
  openGraph: {
    title: "Santhosh Kumar | Full Stack Developer",
    description: "Full Stack Developer | Python | Django | AI Enthusiast",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Santhosh Kumar | Developer" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
