"use client";

import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("lorenzo-theme");
    const theme = savedTheme === "light" ? "light" : "dark";
    setIsDark(theme === "dark");
    document.documentElement.dataset.theme = theme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("lorenzo-theme", nextTheme);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deep/95 text-white shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-white text-sm font-black text-deep transition-transform duration-200 group-hover:-rotate-6">
            LC
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Lorenzo M. Ceccarelli
          </span>
        </a>

        <nav aria-label={t.header.mainNavigation} className="hidden items-center gap-1 lg:flex">
          {t.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors duration-150 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t.header.languageSelector}
            className="inline-flex items-center rounded-full border border-white/20 p-0.5"
          >
            <Languages className="ml-2 size-3.5 text-slate-200" aria-hidden="true" />
            <button
              type="button"
              className="language-option"
              data-active={language === "en"}
              aria-pressed={language === "en"}
              aria-label={t.header.selectEnglish}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className="language-option"
              data-active={language === "it"}
              aria-pressed={language === "it"}
              aria-label={t.header.selectItalian}
              onClick={() => setLanguage("it")}
            >
              IT
            </button>
          </div>

          <button
            type="button"
            aria-label={isDark ? t.header.lightMode : t.header.darkMode}
            aria-pressed={isDark}
            title={isDark ? t.header.lightMode : t.header.darkMode}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
            <span className="hidden text-xs font-bold sm:inline">
              {isDark ? t.header.lightLabel : t.header.darkLabel}
            </span>
          </button>

          <a
            href="#contatti"
            className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white hover:text-deep sm:block"
          >
            {t.header.talk}
          </a>

          <button
            type="button"
            aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav aria-label={t.header.mobileNavigation} className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {t.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-3 text-sm text-slate-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
