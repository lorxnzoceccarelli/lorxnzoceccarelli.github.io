import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Github } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden bg-deep pt-32 text-white sm:pt-40">
      <div className="hero-grid" aria-hidden="true" />
      <span className="hero-scan" aria-hidden="true" />
      <span className="hero-marker hero-marker-one" aria-hidden="true" />
      <span className="hero-marker hero-marker-two" aria-hidden="true" />
      <div className="absolute right-0 top-0 hidden h-full w-1/3 border-l border-white/10 lg:block" aria-hidden="true" />
      <div className="absolute right-10 top-24 hidden size-3 rounded-full bg-accent lg:block" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28">
        <div className="relative z-10">
          <p className="eyebrow eyebrow-on-dark">Portfolio · Full-stack · AI</p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-bold leading-[0.98] sm:text-7xl lg:text-8xl">
            Lorenzo M.<br />
            <span className="text-[#d4c3b2]">Ceccarelli</span>
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <p className="text-xl font-medium text-white sm:text-2xl">{siteConfig.role}</p>
          </div>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">
            Progetto software, WebApp e strumenti intelligenti per trasformare idee e processi in soluzioni concrete, con AI Agent e sviluppo multipiattaforma.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-slate-300">
            <span className="hero-label">WEB</span>
            <span className="hero-label">DESKTOP</span>
            <span className="hero-label">MOBILE</span>
            <span className="hero-label">DATA</span>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#profilo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition-colors duration-150 hover:bg-[#f3e2d3]"
            >
              Scopri il mio percorso
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
            >
              <Github className="size-4" aria-hidden="true" />
              Visualizza GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
            >
              <Download className="size-4" aria-hidden="true" />
              Scarica CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] border border-white/10" aria-hidden="true" />
          <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-accent" aria-hidden="true" />
          <div className="relative aspect-[0.88] overflow-hidden rounded-[1.6rem] border border-white/25 bg-slate-300">
            <Image
              src="/images/lorenzo-portrait.png"
              alt="Ritratto di Lorenzo M. Ceccarelli"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 36vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-9 -right-5 rounded-xl bg-white px-4 py-3 text-ink shadow-soft sm:-right-8">
            <p className="text-[0.65rem] font-bold uppercase text-[#66717c]">Focus</p>
            <p className="mt-1 text-sm font-bold">Build · Automate · Learn</p>
          </div>
        </div>
      </div>
      <div className="h-5 bg-surface" aria-hidden="true" />
    </section>
  );
}
