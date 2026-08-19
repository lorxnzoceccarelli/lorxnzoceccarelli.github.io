export type Language = "en" | "it";

type NavigationItem = {
  label: string;
  href: string;
};

type SkillGroup = {
  title: string;
  eyebrow: string;
  description: string;
  skills: string[];
};

type Translation = {
  navigation: NavigationItem[];
  header: {
    mainNavigation: string;
    mobileNavigation: string;
    talk: string;
    openMenu: string;
    closeMenu: string;
    lightMode: string;
    darkMode: string;
    lightLabel: string;
    darkLabel: string;
    languageSelector: string;
    selectEnglish: string;
    selectItalian: string;
  };
  hero: {
    eyebrow: string;
    description: string;
    journeyCta: string;
    githubCta: string;
    cvCta: string;
    portraitAlt: string;
    focusLabel: string;
    focusValue: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    body: string;
    principles: Array<{ label: string; text: string }>;
    cta: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    current: string;
    currentDescription: string;
    company: string;
    role: string;
    status: string;
    highlights: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    projectTitle: string;
    projectCategory: string;
    projectDescription: string;
    exploring: string;
    emptyTitle: string;
    emptyDescription: string;
    exploreProfile: string;
  };
  education: {
    eyebrow: string;
    title: string;
    diploma: string;
    school: string;
    course: string;
    period: string;
    grade: string;
    gradeLabel: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    githubLabel: string;
    availability: string;
    prompt: string;
    cta: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    navigation: [
      { label: "Home", href: "#home" },
      { label: "Profile", href: "#profilo" },
      { label: "Experience", href: "#esperienza" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#progetti" },
      { label: "Education", href: "#formazione" },
      { label: "Contact", href: "#contatti" },
    ],
    header: {
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      talk: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      lightMode: "Switch to light mode",
      darkMode: "Switch to dark mode",
      lightLabel: "Light",
      darkLabel: "Dark",
      languageSelector: "Select language",
      selectEnglish: "View the site in English",
      selectItalian: "View the site in Italian",
    },
    hero: {
      eyebrow: "Portfolio · Full-stack · AI",
      description:
        "I design software, web applications, and intelligent tools that turn ideas and processes into practical solutions through AI agents and cross-platform development.",
      journeyCta: "Explore my journey",
      githubCta: "View GitHub",
      cvCta: "Download CV",
      portraitAlt: "Portrait of Lorenzo M. Ceccarelli",
      focusLabel: "Focus",
      focusValue: "Build · Automate · Learn",
    },
    about: {
      eyebrow: "Profile",
      title: "Solid engineering, practical curiosity.",
      description:
        "An early-career, hands-on profile with a clear focus on Artificial Intelligence.",
      intro:
        "I graduated in Computer Science from ITTS A. Volta in Perugia and have a strong interest in programming and technological innovation. I combine a solid technical foundation with strong problem-solving, leadership, and teamwork skills.",
      body:
        "I am proactive and curious, with a drive to keep learning new technologies and deepen my expertise in Artificial Intelligence while building software that creates real value for processes and people.",
      principles: [
        {
          label: "Curiosity",
          text: "Learning new technologies and turning them into useful solutions.",
        },
        {
          label: "Collaboration",
          text: "Problem-solving, teamwork, and leadership in service of the project.",
        },
        {
          label: "Languages",
          text: "Native Italian · English C1.",
        },
      ],
      cta: "Get in touch",
    },
    experience: {
      eyebrow: "Experience",
      title: "From idea to software that works.",
      description:
        "End-to-end experience across product thinking, architecture, development, and AI experimentation.",
      current: "Current",
      currentDescription: "Ongoing professional experience",
      company: "Gemateg Italia S.r.l.",
      role: "AI Software Engineer",
      status: "Ongoing",
      highlights: [
        "End-to-end design and development of software, web applications, and databases, from architecture and technology stack decisions through coding and testing.",
        "Development of AI agent solutions and advanced integration of coding agents, including Codex and Claude Code, into business and engineering workflows.",
        "Creation of software automations and intelligent workflows to streamline operations, repetitive tasks, and development processes.",
        "Design and implementation of algorithms for processing, analysing, and managing large volumes of data.",
        "Development of modern, scalable web applications with React, Next.js, TypeScript, and JavaScript.",
        "Development of desktop and mobile applications with Electron, Tauri, and Flutter, also using Python, Java, C#, and C++.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "One stack, multiple platforms to build for.",
      description:
        "Languages, frameworks, and capabilities organised by area: no arbitrary percentages, only tools used in practice.",
      groups: [
        {
          title: "Software and Web Development",
          eyebrow: "01",
          description:
            "From architecture to product delivery, with attention to quality, testing, and scalability.",
          skills: ["Java", "C#", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
        },
        {
          title: "Artificial Intelligence",
          eyebrow: "02",
          description:
            "AI agent and coding agent solutions integrated into development processes.",
          skills: ["AI Agent", "Coding Agent", "Codex", "Claude Code"],
        },
        {
          title: "Desktop and Mobile Development",
          eyebrow: "03",
          description:
            "Cross-platform desktop and mobile experiences built with modern, pragmatic stacks.",
          skills: ["Electron", "Tauri", "Flutter"],
        },
        {
          title: "Databases and Data Analysis",
          eyebrow: "04",
          description:
            "Algorithms and tools for processing, analysing, and managing large volumes of data.",
          skills: ["Database design", "Data analysis", "Algorithms", "SQL"],
        },
        {
          title: "Automation",
          eyebrow: "05",
          description:
            "Intelligent workflows that reduce repetitive work and optimise processes.",
          skills: ["Software automation", "Workflow design", "Process optimisation"],
        },
        {
          title: "Soft Skills",
          eyebrow: "06",
          description:
            "A collaborative, curious, and solution-oriented approach to complex problems.",
          skills: ["Problem solving", "Teamwork", "Leadership", "Fast learning", "English C1"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Code is the starting point.",
      description:
        "An initial selection shaped by published projects and day-to-day work across software, web, and AI.",
      viewAll: "View all projects on GitHub",
      projectTitle: "GitHub portfolio",
      projectCategory: "Software · Web · AI",
      projectDescription:
        "A collection of projects spanning software, web, desktop and mobile applications, and Artificial Intelligence.",
      exploring: "Currently exploring",
      emptyTitle: "New projects, one repository at a time.",
      emptyDescription:
        "GitHub is the most up-to-date place to follow my work and discover technologies and ideas as they evolve.",
      exploreProfile: "Explore the profile",
    },
    education: {
      eyebrow: "Education",
      title: "A foundation built on computer science.",
      diploma: "High school diploma",
      school: "ITTS Alessandro Volta, Perugia",
      course: "Technical High School · Computer Science",
      period: "2020–2025",
      grade: "88/100",
      gradeLabel: "Final grade",
      cta: "Let's discuss the next step",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something useful.",
      description:
        "For collaborations, professional opportunities, or a conversation about software and Artificial Intelligence, contact me directly.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      availability: "Available to connect",
      prompt:
        "Do you have a problem to solve, a product to build, or a process that could be made smarter?",
      cta: "Start a conversation",
    },
  },
  it: {
    navigation: [
      { label: "Home", href: "#home" },
      { label: "Profilo", href: "#profilo" },
      { label: "Esperienza", href: "#esperienza" },
      { label: "Skills", href: "#skills" },
      { label: "Progetti", href: "#progetti" },
      { label: "Formazione", href: "#formazione" },
      { label: "Contatti", href: "#contatti" },
    ],
    header: {
      mainNavigation: "Navigazione principale",
      mobileNavigation: "Navigazione mobile",
      talk: "Parliamone",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu",
      lightMode: "Passa alla modalità chiara",
      darkMode: "Passa alla modalità scura",
      lightLabel: "Chiaro",
      darkLabel: "Scuro",
      languageSelector: "Seleziona lingua",
      selectEnglish: "Visualizza il sito in inglese",
      selectItalian: "Visualizza il sito in italiano",
    },
    hero: {
      eyebrow: "Portfolio · Full-stack · AI",
      description:
        "Progetto software, WebApp e strumenti intelligenti per trasformare idee e processi in soluzioni concrete, con AI Agent e sviluppo multipiattaforma.",
      journeyCta: "Scopri il mio percorso",
      githubCta: "Visualizza GitHub",
      cvCta: "Scarica CV",
      portraitAlt: "Ritratto di Lorenzo M. Ceccarelli",
      focusLabel: "Focus",
      focusValue: "Build · Automate · Learn",
    },
    about: {
      eyebrow: "Profilo",
      title: "Tecnica solida, curiosità concreta.",
      description:
        "Un profilo giovane e operativo, con una direzione chiara verso l’Intelligenza Artificiale.",
      intro:
        "Sono diplomato in Informatica all’ITTS A. Volta di Perugia e appassionato di programmazione e innovazione tecnologica. Unisco una solida base tecnica a spiccate capacità di problem solving, leadership e lavoro in team.",
      body:
        "Sono una risorsa proattiva e curiosa: il mio obiettivo è continuare ad apprendere nuove tecnologie e specializzarmi nel campo dell’Intelligenza Artificiale, costruendo software che abbia un impatto reale sui processi e sulle persone.",
      principles: [
        {
          label: "Curiosità",
          text: "Apprendere nuove tecnologie e trasformarle in soluzioni utili.",
        },
        {
          label: "Collaborazione",
          text: "Problem solving, teamwork e leadership al servizio del progetto.",
        },
        {
          label: "Lingue",
          text: "Italiano madrelingua · English C1.",
        },
      ],
      cta: "Scrivimi per conoscerci",
    },
    experience: {
      eyebrow: "Esperienza",
      title: "Dall’idea al software che funziona.",
      description:
        "Un’esperienza end-to-end tra prodotto, architettura, sviluppo e sperimentazione con l’AI.",
      current: "Attuale",
      currentDescription: "Esperienza lavorativa in corso",
      company: "Gemateg Italia S.r.l.",
      role: "AI Software Engineer",
      status: "In corso",
      highlights: [
        "Progettazione e sviluppo end-to-end di software, WebApp e database, dalla definizione dell’architettura e dello stack tecnologico fino al coding e al testing.",
        "Realizzazione di soluzioni basate su AI Agent e integrazione avanzata di Coding Agent, tra cui Codex e Claude Code, nei processi aziendali e di sviluppo.",
        "Creazione di automazioni software e workflow intelligenti per ottimizzare processi operativi, attività ripetitive e flussi di sviluppo.",
        "Progettazione e implementazione di algoritmi per l’elaborazione, l’analisi e la gestione di grandi volumi di dati.",
        "Sviluppo di WebApp moderne e scalabili con React, Next.js, TypeScript e JavaScript.",
        "Sviluppo di applicazioni desktop e mobile con Electron, Tauri e Flutter, impiegando anche Python, Java, C# e C++.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Uno stack, più superfici da costruire.",
      description:
        "Linguaggi, framework e competenze organizzati per area: senza percentuali arbitrarie, solo strumenti reali.",
      groups: [
        {
          title: "Software e Web Development",
          eyebrow: "01",
          description:
            "Dall’architettura al prodotto, con attenzione a qualità, testing e scalabilità.",
          skills: ["Java", "C#", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
        },
        {
          title: "Artificial Intelligence",
          eyebrow: "02",
          description:
            "Soluzioni basate su AI Agent e Coding Agent integrate nei processi di sviluppo.",
          skills: ["AI Agent", "Coding Agent", "Codex", "Claude Code"],
        },
        {
          title: "Desktop e Mobile Development",
          eyebrow: "03",
          description:
            "Esperienze multipiattaforma per desktop e mobile, con stack moderni e pragmatici.",
          skills: ["Electron", "Tauri", "Flutter"],
        },
        {
          title: "Database e Data Analysis",
          eyebrow: "04",
          description:
            "Algoritmi e strumenti per elaborare, analizzare e gestire grandi volumi di dati.",
          skills: ["Database design", "Data analysis", "Algoritmi", "SQL"],
        },
        {
          title: "Automazione",
          eyebrow: "05",
          description:
            "Workflow intelligenti per ridurre attività ripetitive e ottimizzare i processi.",
          skills: ["Software automation", "Workflow design", "Process optimization"],
        },
        {
          title: "Soft Skills",
          eyebrow: "06",
          description:
            "Un approccio collaborativo, curioso e orientato alla risoluzione dei problemi.",
          skills: ["Problem solving", "Teamwork", "Leadership", "Apprendimento rapido", "English C1"],
        },
      ],
    },
    projects: {
      eyebrow: "Progetti",
      title: "Il codice è il punto di partenza.",
      description:
        "Una selezione iniziale, alimentata dai progetti pubblicati e dal lavoro quotidiano tra software, Web e AI.",
      viewAll: "Visualizza tutti i progetti su GitHub",
      projectTitle: "GitHub portfolio",
      projectCategory: "Software · Web · AI",
      projectDescription:
        "Una raccolta dei progetti realizzati in ambito software, Web, applicazioni desktop/mobile e Intelligenza Artificiale.",
      exploring: "In esplorazione",
      emptyTitle: "Nuovi progetti, una repository alla volta.",
      emptyDescription:
        "Il profilo GitHub è il posto più aggiornato per seguire il lavoro e scoprire tecnologie e idee in evoluzione.",
      exploreProfile: "Esplora il profilo",
    },
    education: {
      eyebrow: "Formazione",
      title: "Una base costruita sull’informatica.",
      diploma: "Diploma di scuola superiore",
      school: "ITTS Alessandro Volta di Perugia",
      course: "Scuola Superiore · Indirizzo Informatica",
      period: "2020–2025",
      grade: "88/100",
      gradeLabel: "Voto di diploma",
      cta: "Parliamo del prossimo passo",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Costruiamo qualcosa di utile.",
      description:
        "Per collaborazioni, opportunità professionali o un confronto su software e Intelligenza Artificiale, scrivimi direttamente.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      availability: "Disponibile al confronto",
      prompt:
        "Hai un problema da risolvere, un prodotto da costruire o un processo da rendere più intelligente?",
      cta: "Inizia una conversazione",
    },
  },
};
