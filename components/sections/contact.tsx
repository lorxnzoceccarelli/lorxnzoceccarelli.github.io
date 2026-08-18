import { ArrowUpRight, Github, Mail } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contatti" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow="Contatti"
          title="Costruiamo qualcosa di utile."
          description="Per collaborazioni, opportunità professionali o un confronto su software e Intelligenza Artificiale, scrivimi direttamente."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${siteConfig.email}`} className="group rounded-2xl border border-line bg-mist p-6 transition-colors duration-150 hover:border-accent">
            <Mail className="size-5 text-accent" aria-hidden="true" />
            <p className="mt-8 text-xs font-bold uppercase text-slate">Email</p>
            <p className="mt-2 break-all text-base font-bold text-ink">{siteConfig.email}</p>
            <ArrowUpRight className="mt-8 size-5 text-slate transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="group rounded-2xl border border-line bg-mist p-6 transition-colors duration-150 hover:border-accent">
            <Github className="size-5 text-accent" aria-hidden="true" />
            <p className="mt-8 text-xs font-bold uppercase text-slate">GitHub</p>
            <p className="mt-2 text-base font-bold text-ink">{siteConfig.githubLabel}</p>
            <ArrowUpRight className="mt-8 size-5 text-slate transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
          </a>
          <div className="rounded-2xl bg-accent-strong p-6 text-white sm:col-span-2">
            <p className="eyebrow eyebrow-on-strong">Disponibile al confronto</p>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8">Hai un problema da risolvere, un prodotto da costruire o un processo da rendere più intelligente?</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink hover:bg-[#f3e2d3]">
              Inizia una conversazione
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
