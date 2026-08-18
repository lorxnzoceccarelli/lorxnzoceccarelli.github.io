import { ArrowUpRight, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { education } from "@/data/site";

export default function Education() {
  return (
    <section id="formazione" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Formazione" title="Una base costruita sull’informatica." />
        <article className="mt-12 grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <GraduationCap className="size-7" aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">Diploma di scuola superiore</p>
            <h3 className="mt-3 text-2xl font-bold text-ink">{education.school}</h3>
            <p className="mt-2 text-base text-slate">{education.course}</p>
          </div>
          <div className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-sm font-semibold text-slate">{education.period}</p>
            <p className="mt-2 text-2xl font-bold text-navy">{education.grade}</p>
            <p className="mt-1 text-xs uppercase text-slate">Voto di diploma</p>
          </div>
        </article>
        <a href="#contatti" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent">
          Parliamo del prossimo passo
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
