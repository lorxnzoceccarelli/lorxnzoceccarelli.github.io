"use client";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
          <p className="max-w-xs text-sm leading-6 text-slate lg:text-right">Java · C# · C++ · Python · SQL<br />React · Next.js · Flutter · Electron · Tauri</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <article key={group.title} className="group rounded-2xl border border-line bg-page p-6 transition-colors duration-150 hover:border-accent">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-accent">{group.eyebrow}</span>
                <span className="h-px w-12 bg-line transition-colors duration-150 group-hover:bg-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-bold text-ink">{group.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-navy">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
