"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

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

        <nav aria-label="Navigazione principale" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
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
          <button
            type="button"
            aria-label={isDark ? "Passa alla modalità chiara" : "Passa alla modalità scura"}
            aria-pressed={isDark}
            title={isDark ? "Modalità chiara" : "Modalità scura"}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
            <span className="hidden text-xs font-bold sm:inline">{isDark ? "Light" : "Dark"}</span>
          </button>

          <a
            href="#contatti"
            className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white hover:text-deep sm:block"
          >
            Parliamone
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav aria-label="Navigazione mobile" className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
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
