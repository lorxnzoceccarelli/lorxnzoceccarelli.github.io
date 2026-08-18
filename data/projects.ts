export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

// Il CV non elenca repository nominativi: manteniamo il contenuto accurato
// presentando il profilo GitHub come punto di accesso ai progetti realizzati.
export const projects: Project[] = [
  {
    title: "GitHub portfolio",
    category: "Software · Web · AI",
    description:
      "Una raccolta dei progetti realizzati in ambito software, Web, applicazioni desktop/mobile e Intelligenza Artificiale.",
    technologies: ["React", "Next.js", "TypeScript", "Python", "AI Agent"],
    repositoryUrl: "https://github.com/lorxnzoceccarelli",
    featured: true,
  },
];
