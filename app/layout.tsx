import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lorxnzoceccarelli.github.io"),
  title: "Lorenzo M. Ceccarelli — AI Software Engineer",
  description:
    "Portfolio personale di Lorenzo M. Ceccarelli, AI Software Engineer per software, WebApp, AI Agent, automazione e sviluppo multipiattaforma.",
  keywords: [
    "Lorenzo Ceccarelli",
    "AI Software Engineer",
    "Software Engineering",
    "AI Agent",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Lorenzo M. Ceccarelli" }],
  openGraph: {
    title: "Lorenzo M. Ceccarelli — AI Software Engineer",
    description:
      "Software, WebApp, AI Agent, automazione e sviluppo multipiattaforma.",
    url: "https://lorxnzoceccarelli.github.io",
    siteName: "Lorenzo M. Ceccarelli",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/lorenzo-portrait.png",
        width: 900,
        height: 900,
        alt: "Ritratto di Lorenzo M. Ceccarelli",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lorenzo M. Ceccarelli — AI Software Engineer",
    description:
      "Software, WebApp, AI Agent, automazione e sviluppo multipiattaforma.",
    images: ["/images/lorenzo-portrait.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
