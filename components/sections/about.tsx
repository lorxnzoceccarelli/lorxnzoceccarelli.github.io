import { ArrowUpRight, Languages, Lightbulb, Users } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const principles = [
  { icon: Lightbulb, label: "Curiosità", text: "Apprendere nuove tecnologie e trasformarle in soluzioni utili." },
  { icon: Users, label: "Collaborazione", text: "Problem solving, teamwork e leadership al servizio del progetto." },
  { icon: Languages, label: "Lingue", text: "Italiano madrelingua · English C1." },
];

export default function About() {
  return (
    <section id="profilo" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow="Profilo"
          title="Tecnica solida, curiosità concreta."
          description="Un profilo giovane e operativo, con una direzione chiara verso l’Intelligenza Artificiale."
        />
        <div>
          <p className="max-w-3xl text-pretty text-xl leading-9 text-ink sm:text-2xl">
            Sono diplomato in Informatica all’ITTS A. Volta di Perugia e appassionato di programmazione e innovazione tecnologica. Unisco una solida base tecnica a spiccate capacità di problem solving, leadership e lavoro in team.
          </p>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-slate">
            Sono una risorsa proattiva e curiosa: il mio obiettivo è continuare ad apprendere nuove tecnologie e specializzarmi nel campo dell’Intelligenza Artificiale, costruendo software che abbia un impatto reale sui processi e sulle persone.
          </p>
          <div className="mt-10 grid gap-4 border-t border-line pt-7 sm:grid-cols-3">
            {principles.map(({ icon: Icon, label, text }) => (
              <div key={label} className="group">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold text-ink">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
              </div>
            ))}
          </div>
          <a href={`mailto:${siteConfig.email}`} className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent">
            Scrivimi per conoscerci
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
