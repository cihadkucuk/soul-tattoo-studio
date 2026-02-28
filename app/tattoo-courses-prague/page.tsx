"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

type CoursesCopy = {
  heroTitle: string
  heroBody: string
  languages: string[]
  chooseTitle: string
  options: string[]
  includesTitle: string
  includes: string[]
  outcomeTitle: string
  outcomeBody: string
  instagramCta: string
  contactCta: string
}

const copy: Record<Locale, CoursesCopy> = {
  en: {
    heroTitle: "Tattoo & Piercing Academy",
    heroBody: "We offer high-quality tattoo training in 5 languages: English, Czech, Russian, Polish and Ukrainian.",
    languages: ["English", "Czech", "Russian", "Polish", "Ukrainian"],
    chooseTitle: "Choose From",
    options: [
      "Beginner courses - try tattooing from scratch",
      "Full course with license included",
      "Focused masterclasses (shading, color, etc.) for working artists",
      "Group, pair, or 1-on-1 format",
      "Flexible timing (short or extended)",
    ],
    includesTitle: "What Is Included",
    includes: [
      "All materials included - machine, needles, cartridges, fake skin, inks",
      "Real practice on live models",
      "Personal feedback and guidance throughout",
      "Professional photos/videos of your work",
      "Ready-to-use portfolio by the end",
      "Free consultation + help choosing the right course",
      "Studio placement opportunity after graduation",
    ],
    outcomeTitle: "Most students earn back the full course price within 1-2 months.",
    outcomeBody: "For prices and full info, message us on Instagram (DM).",
    instagramCta: "Message on Instagram",
    contactCta: "Contact Us",
  },
  es: {
    heroTitle: "Academia de Tattoo y Piercing",
    heroBody: "Ofrecemos formacion de alta calidad en 5 idiomas: ingles, checo, ruso, polaco y ucraniano.",
    languages: ["Ingles", "Checo", "Ruso", "Polaco", "Ucraniano"],
    chooseTitle: "Opciones de Formacion",
    options: [
      "Cursos para principiantes desde cero",
      "Curso completo con licencia incluida",
      "Masterclasses enfocadas (sombreado, color, etc.)",
      "Formato grupal, en pareja o 1 a 1",
      "Horarios flexibles (corto o extendido)",
    ],
    includesTitle: "Que Incluye",
    includes: [
      "Todos los materiales incluidos: maquina, agujas, cartuchos, piel sintetica y tintas",
      "Practica real con modelos",
      "Feedback y acompanamiento personalizado",
      "Fotos y videos profesionales de tu trabajo",
      "Portfolio listo al finalizar",
      "Consulta gratuita para elegir el curso correcto",
      "Oportunidad de incorporacion al estudio tras graduarte",
    ],
    outcomeTitle: "La mayoria de estudiantes recupera el coste del curso en 1-2 meses.",
    outcomeBody: "Para precios e informacion completa, escribenos por Instagram (DM).",
    instagramCta: "Escribir por Instagram",
    contactCta: "Contactanos",
  },
  cs: {
    heroTitle: "Tattoo & Piercing Akademie",
    heroBody: "Nabizime kvalitni vyuku tetovani v 5 jazycich: anglicky, cesky, rusky, polsky a ukrajinsky.",
    languages: ["Anglictina", "Cestina", "Rustina", "Polstina", "Ukrajinstina"],
    chooseTitle: "Vyberte Si Kurz",
    options: [
      "Kurzy pro zacatecniky od uplneho zakladu",
      "Kompletni kurz vcetne licence",
      "Specializovane masterclass lekce (stinovani, barva apod.)",
      "Skupinovy, parovy nebo 1 na 1 format",
      "Flexibilni casovy plan (kratsi i delsi forma)",
    ],
    includesTitle: "Co Je V Cene",
    includes: [
      "Vsechny materialy v cene - strojek, jehly, cartridge, fake skin, inkousty",
      "Realna praxe na modelech",
      "Osobni vedeni a zpetna vazba",
      "Profesionalni foto/video vase prace",
      "Portfolio pripravene k pouziti po ukonceni",
      "Konzultace zdarma + pomoc s vyberem kurzu",
      "Moznost pusobeni ve studiu po absolvovani",
    ],
    outcomeTitle: "Vetsina studentu si cenu kurzu vydela zpet behem 1-2 mesicu.",
    outcomeBody: "Pro cenu a plne informace nam napiste na Instagram (DM).",
    instagramCta: "Napsat na Instagram",
    contactCta: "Kontaktujte Nas",
  },
  de: {
    heroTitle: "Tattoo & Piercing Akademie",
    heroBody: "Wir bieten hochwertige Tattoo-Ausbildung in 5 Sprachen: Englisch, Tschechisch, Russisch, Polnisch und Ukrainisch.",
    languages: ["Englisch", "Tschechisch", "Russisch", "Polnisch", "Ukrainisch"],
    chooseTitle: "Kursoptionen",
    options: [
      "Einsteigerkurse von Grund auf",
      "Komplettkurs inklusive Lizenz",
      "Fokussierte Masterclasses (Shading, Farbe usw.)",
      "Gruppen-, Paar- oder 1-zu-1-Format",
      "Flexible Zeitmodelle (kurz oder erweitert)",
    ],
    includesTitle: "Was Inklusive Ist",
    includes: [
      "Alle Materialien inklusive: Maschine, Nadeln, Cartridges, Fake Skin, Farben",
      "Praxis mit Live-Modellen",
      "Persoenliches Feedback waehrend des gesamten Kurses",
      "Professionelle Fotos/Videos deiner Arbeiten",
      "Portfolio einsatzbereit zum Kursende",
      "Kostenlose Beratung + Hilfe bei der Kurswahl",
      "Moeglichkeit zur Studio-Platzierung nach Abschluss",
    ],
    outcomeTitle: "Die meisten Teilnehmer verdienen den Kurspreis in 1-2 Monaten wieder ein.",
    outcomeBody: "Fuer Preise und alle Details schreib uns auf Instagram (DM).",
    instagramCta: "Instagram Nachricht",
    contactCta: "Kontakt",
  },
}

export default function TattooTraining() {
  const { locale } = useLanguage()
  const t = copy[locale]

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/gallery/custom/IMG_0166.JPG')",
          backgroundPosition: "center 72%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/80" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-background">{t.heroTitle}</h1>
          <p className="text-xl text-background">{t.heroBody}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm uppercase tracking-wider text-background/90">
            {t.languages.map((lang) => (
              <span key={lang} className="px-3 py-1 rounded-md border border-background/40 bg-black/40">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">{t.chooseTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.options.map((item) => (
                <div key={item} className="p-4 border border-border rounded-md bg-secondary">
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.includesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.includes.map((item) => (
                <div key={item} className="p-4 border border-border rounded-md bg-secondary">
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border border-border rounded-md bg-secondary text-center">
            <p className="text-lg font-light mb-2">{t.outcomeTitle}</p>
            <p className="text-muted-foreground mb-6">{t.outcomeBody}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/soul.tattoo.atelier"
                className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
              >
                {t.instagramCta}
              </a>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full border border-foreground/70 text-foreground text-sm font-light uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:bg-secondary/70"
              >
                {t.contactCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

