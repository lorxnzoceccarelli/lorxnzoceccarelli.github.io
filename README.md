# Lorenzo M. Ceccarelli — Portfolio

Portfolio personale di **Lorenzo M. Ceccarelli**, AI Software Engineer. Il sito presenta profilo professionale, esperienza, competenze, progetti, formazione e contatti attraverso un’interfaccia responsive in modalità dark e light.

## Caratteristiche

- Design responsive per smartphone, tablet e desktop
- Dark mode predefinita con switch per la light mode
- Contenuti completi in inglese e italiano con selettore della lingua
- Preferenza del tema salvata nel browser
- Navigazione fissa con menu mobile accessibile
- Sezioni dedicate a profilo, esperienza, skills, progetti e formazione
- Collegamenti diretti a GitHub, email e curriculum PDF
- Contenuti e progetti separati dai componenti per facilitarne l’aggiornamento
- Metadata SEO e Open Graph
- Supporto a `prefers-reduced-motion`
- Stati hover e focus visibili

## Stack

- Next.js 15 con App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React

## Avvio locale

Requisiti: Node.js e npm.

```bash
npm install
npm run dev
```

Il server di sviluppo sarà disponibile su [http://localhost:3000](http://localhost:3000).

## Verifica del progetto

```bash
npm run typecheck
npm run lint
npm run build
```

Per avviare la build di produzione:

```bash
npm run start
```

## Struttura principale

```text
app/                    pagine, layout globale e stili
components/             componenti condivisi
components/sections/    sezioni del portfolio
data/                   contenuti modificabili del sito
public/cv/              curriculum in PDF
public/images/          immagini del portfolio
types/                  definizioni TypeScript condivise
```

## Personalizzazione

I contenuti principali possono essere aggiornati senza modificare la struttura dei componenti:

- `data/site.ts`: profilo, esperienza, formazione, contatti e navigazione
- `data/skills.ts`: gruppi di competenze e tecnologie
- `data/projects.ts`: progetti, descrizioni, stack e collegamenti
- `app/globals.css`: palette e token grafici delle modalità light e dark

Il curriculum è disponibile in `public/cv/`, mentre il ritratto principale si trova in `public/images/`.

## Contatti

- GitHub: [@lorxnzoceccarelli](https://github.com/lorxnzoceccarelli)
- Email: [lorenzomceccarelli@outlook.it](mailto:lorenzomceccarelli@outlook.it)

---

© 2026 Lorenzo M. Ceccarelli
