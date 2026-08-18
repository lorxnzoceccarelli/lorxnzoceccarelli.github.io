import { BriefcaseBusiness, Check } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="esperienza" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Esperienza"
          title="Dall’idea al software che funziona."
          description="Un’esperienza end-to-end tra prodotto, architettura, sviluppo e sperimentazione con l’AI."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.28fr_1fr]">
          <div className="flex items-start gap-4 lg:flex-col lg:gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-strong text-white">
              <BriefcaseBusiness className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">Attuale</p>
              <p className="mt-2 text-sm leading-6 text-slate">Esperienza lavorativa in corso</p>
            </div>
          </div>
          <article className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-10">
            <div className="flex flex-col gap-4 border-b border-line pb-7 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-ink">{experience.company}</h3>
                <p className="mt-2 text-lg text-slate">{experience.role}</p>
              </div>
              <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase text-accent">
                {experience.status}
              </span>
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate">
                  <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
