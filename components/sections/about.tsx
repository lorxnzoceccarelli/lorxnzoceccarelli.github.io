"use client";

import { ArrowUpRight, Languages, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const principleIcons = [Lightbulb, Users, Languages];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="profilo" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />
        <div>
          <p className="max-w-3xl text-pretty text-xl leading-9 text-ink sm:text-2xl">
            {t.about.intro}
          </p>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-slate">
            {t.about.body}
          </p>
          <div className="mt-10 grid gap-4 border-t border-line pt-7 sm:grid-cols-3">
            {t.about.principles.map(({ label, text }, index) => {
              const Icon = principleIcons[index];

              return (
              <div key={label} className="group">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold text-ink">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
              </div>
              );
            })}
          </div>
          <a href={`mailto:${siteConfig.email}`} className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent">
            {t.about.cta}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
