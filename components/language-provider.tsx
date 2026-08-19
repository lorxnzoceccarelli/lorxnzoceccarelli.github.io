"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Language } from "@/data/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, updateLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("lorenzo-language");
    const initialLanguage: Language = savedLanguage === "it" ? "it" : "en";
    updateLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    updateLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("lorenzo-language", nextLanguage);
  };

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
