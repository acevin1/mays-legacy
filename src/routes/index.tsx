import { createFileRoute } from "@tanstack/react-router";
import mark from "@/assets/mays/source-1.png";
import hero from "@/assets/mays/source-2.jpg";
import collection from "@/assets/mays/source-3.jpg";
import corona from "@/assets/mays/source-4.jpg";
import panatela from "@/assets/mays/source-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "May's Cigars | Handgerollte Zigarren" },
      { name: "description", content: "May's Cigars: handgerollte Longfiller mit kubanischen Wurzeln und ausgewählten Premiumtabaken aus Nicaragua." },
      { property: "og:title", content: "May's Cigars | Handgerollte Zigarren" },
      { property: "og:description", content: "Kubanische Wurzeln, europäische Finesse und Premiumtabake aus Nicaragua." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const formats = [
  ["01", "Churchill", "Das Königsformat", "Luxusrauchzeit für einen langen, ruhigen Abend."],
  ["02", "Belicoso", "Die Elegante", "Für besondere Anlässe und konzentrierte Momente."],
  ["03", "Robusto", "Der Klassiker", "Mittelkräftig, ausgewogen und genussvoll."],
  ["04", "Corona", "Die Sanfte", "Leicht, präzise und von feiner Balance."],
  ["05", "Panatela", "Die Schlanke", "Schneller Rauchgenuss für Damen und Herren."],
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-foreground/10">
        <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-12" aria-label="Hauptnavigation">
          <a href="#top" className="flex items-center gap-3" aria-label="May's Cigars Startseite">
            <img src={mark} alt="May's Cigars Signet" className="size-10 rounded-full object-cover" />
            <span className="font-display text-xl uppercase tracking-[0.18em]">May’s</span>
          </a>
          <div className="hidden items-center gap-9 text-xs uppercase tracking-[0.16em] text-foreground/65 md:flex">
            <a className="nav-link" href="#handschrift">Handschrift</a>
            <a className="nav-link" href="#formate">Formate</a>
            <a className="nav-link" href="#kontakt">Kontakt</a>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brass sm:text-xs">Hecho a mano</span>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img src={hero} alt="Auswahl handgerollter May's Cigars auf Tabakblättern" className="hero-image absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shadow absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-14 pt-32 md:px-12 md:pb-20">
          <p className="reveal-up text-[10px] uppercase tracking-[0.28em] text-brass md:text-xs">Kubanische Wurzeln · Europäische Finesse</p>
          <h1 className="reveal-up reveal-delay mt-5 max-w-5xl font-display text-[clamp(4.2rem,12vw,10rem)] leading-[0.78] text-foreground">May’s<br />Cigars</h1>
          <div className="mt-7 flex max-w-2xl flex-col items-start gap-7 md:flex-row md:items-end md:justify-between">
            <p className="reveal-up reveal-delay-2 max-w-[38rem] text-sm leading-relaxed text-foreground/72 md:text-lg">
              Der Rauch ist vergänglich und gehört dem Moment. Es bleibt der Genuss.
            </p>
            <a href="#handschrift" className="luxury-link shrink-0">Die Maison entdecken <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <span className="absolute bottom-0 right-5 z-10 hidden origin-bottom-right -rotate-90 text-[9px] uppercase tracking-[0.3em] text-foreground/35 md:block">Nicaragua · Tradition · Genuss</span>
      </section>

      <section id="handschrift" className="bg-night-raised px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <p className="eyebrow">Die Handschrift</p>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.95]">Aus der Hand der Meisterin <em className="text-brass">Maykelis Ketnath.</em></h2>
            </div>
            <div className="border-l border-brass/35 pl-7 md:pl-10">
              <p className="max-w-xl text-base leading-8 text-foreground/65">Vollständig von Hand nach traditioneller kubanischer Art gefertigt. Ganze Tabakblätter, keine synthetischen Zusatz- oder Aromastoffe — nur ausgewählte Premiumtabake aus verschiedenen Regionen Nicaraguas.</p>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-[1.35fr_0.65fr] md:gap-6">
            <figure className="image-panel group">
              <img src={collection} alt="Verschiedene Formate von May's Cigars" className="h-full w-full object-cover" loading="lazy" />
              <figcaption>Eine Familie. Fünf Formate.</figcaption>
            </figure>
            <figure className="image-panel group">
              <img src={corona} alt="May's Cigar auf einem Tabakblatt" className="h-full w-full object-cover" loading="lazy" />
              <figcaption>Tabak in seiner reinsten Form.</figcaption>
            </figure>
          </div>

          <div className="mt-20 grid gap-px border-y border-foreground/10 bg-foreground/10 md:grid-cols-3">
            {[
              ["I", "Die Blätter", "Premiumtabake von der Hochebene bis zur Vulkaninsel."],
              ["II", "Die Hand", "Traditionelle kubanische Rollkunst, vollständig von Hand."],
              ["III", "Der Charakter", "Mittelkräftig, angenehm aromatisch und ohne Zusätze."],
            ].map(([number, title, copy]) => (
              <article key={number} className="bg-night-raised px-2 py-10 md:px-8 md:py-12">
                <span className="font-display text-4xl text-brass/50">{number}</span>
                <h3 className="mt-6 text-xs uppercase tracking-[0.2em]">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-foreground/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formate" className="bg-background px-5 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between border-b border-foreground/15 pb-8">
            <div><p className="eyebrow">Die Kollektion</p><h2 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] leading-none">Fünf Formate</h2></div>
            <span className="hidden text-xs uppercase tracking-[0.22em] text-brass md:block">Für jeden Moment</span>
          </div>
          <div className="divide-y divide-foreground/10">
            {formats.map(([number, name, label, copy]) => (
              <article key={name} className="format-row group grid items-center gap-3 py-7 sm:grid-cols-[4rem_1fr_1fr] md:grid-cols-[6rem_1.2fr_1fr_1.2fr] md:py-9">
                <span className="font-display text-3xl text-brass/45">{number}</span>
                <h3 className="font-display text-4xl md:text-5xl">{name}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">{label}</p>
                <p className="text-sm leading-6 text-foreground/55 sm:col-start-2 md:col-start-auto">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="kontakt" className="relative min-h-[72svh] overflow-hidden bg-oxblood-dark">
        <img src={panatela} alt="Panatela von May's Cigars" className="absolute inset-0 h-full w-full object-cover opacity-35" loading="lazy" />
        <div className="footer-shadow absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1600px] flex-col justify-between px-5 py-16 md:px-12 md:py-20">
          <div>
            <p className="eyebrow">May’s Cigars</p>
            <h2 className="mt-6 max-w-4xl font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.9]">Zeit ist die<br /><em className="text-brass">wahre Essenz.</em></h2>
          </div>
          <div className="flex flex-col gap-8 border-t border-foreground/15 pt-8 md:flex-row md:items-end md:justify-between">
            <div><p className="text-xs uppercase tracking-[0.2em] text-foreground/40">Kontakt</p><p className="mt-3 max-w-lg text-sm leading-6 text-foreground/65">Für Beratung, Verfügbarkeit und persönliche Anfragen besuchen Sie den originalen May’s Cigars Shop.</p></div>
            <a className="luxury-link" href="https://www.mayscigars.com/shop/" target="_blank" rel="noreferrer">Zum Shop <span aria-hidden="true">↗</span></a>
          </div>
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.16em] text-foreground/30 sm:flex-row sm:justify-between"><span>© May’s Cigars</span><span>Handgefertigt in Nicaragua</span></div>
        </div>
      </footer>
    </main>
  );
}