import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lorxnzoceccarelli.github.io"),
  title: "Lorenzo M. Ceccarelli — AI Software Engineer",
  description:
    "Portfolio of Lorenzo M. Ceccarelli, AI Software Engineer working across software, web applications, AI agents, automation, and cross-platform development.",
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
      "Software, web applications, AI agents, automation, and cross-platform development.",
    url: "https://lorxnzoceccarelli.github.io",
    siteName: "Lorenzo M. Ceccarelli",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    type: "website",
    images: [
      {
        url: "/images/lorenzo-portrait.png",
        width: 900,
        height: 900,
        alt: "Portrait of Lorenzo M. Ceccarelli",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lorenzo M. Ceccarelli — AI Software Engineer",
    description:
      "Software, web applications, AI agents, automation, and cross-platform development.",
    images: ["/images/lorenzo-portrait.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
