"use client";

import { ArrowUpRight, ExternalLink, Github, FolderKanban } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="progetti" className="projects-section scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
            tone="dark"
          />
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="projects-button inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors duration-150"
          >
            {t.projects.viewAll}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="projects-card group rounded-3xl border p-6 transition-colors duration-150 hover:border-accent sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <FolderKanban className="size-5" aria-hidden="true" />
                </div>
                <span className="projects-chip rounded-full border px-3 py-1 text-xs font-semibold">{t.projects.projectCategory}</span>
              </div>
              <h3 className="projects-text mt-10 text-2xl font-bold">{t.projects.projectTitle}</h3>
              <p className="projects-muted mt-4 max-w-xl text-pretty text-base leading-7">{t.projects.projectDescription}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="projects-tech rounded-full px-3 py-1.5 text-xs font-semibold">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="projects-divider mt-9 flex flex-wrap gap-5 border-t pt-5 text-sm font-bold">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="projects-text inline-flex items-center gap-2 hover:text-accent">
                  <Github className="size-4" aria-hidden="true" />
                  GitHub
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="projects-text inline-flex items-center gap-2 hover:text-accent">
                    Demo
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
          <div className="projects-empty flex min-h-64 flex-col justify-between rounded-3xl border border-dashed p-6 sm:p-8">
            <p className="eyebrow eyebrow-on-dark">{t.projects.exploring}</p>
            <div>
              <h3 className="projects-text max-w-sm text-2xl font-bold">{t.projects.emptyTitle}</h3>
              <p className="projects-muted mt-4 max-w-sm text-pretty text-sm leading-7">{t.projects.emptyDescription}</p>
            </div>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="projects-accent-link mt-8 inline-flex items-center gap-2 text-sm font-bold">
              {t.projects.exploreProfile}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
