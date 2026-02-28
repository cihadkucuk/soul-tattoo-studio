"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

const piercingGallery = [
  { src: "/assets/gallery/piercing/piercing-01.jpg", alt: "Piercing setup ready" },
  { src: "/assets/gallery/piercing/piercing-03.jpg", alt: "Studio interior for piercing" },
  { src: "/assets/gallery/piercing/piercing-05.jpg", alt: "Piercing detail" },
  { src: "/assets/gallery/piercing/piercing-08.jpg", alt: "Artist working close up" },
  { src: "/assets/gallery/piercing/piercing-10.jpg", alt: "Piercing jewellery placement" },
]

type PiercingCopy = {
  heroTitle: string
  heroBody: string
  heroBook: string
  heroGallery: string
  introTitle: string
  introBody: string
  typesTitle: string
  typesBody: string
  types: string[]
  previewTitle: string
  previewBody: string
  faqTitle: string
  faqItems: { q: string; a: string }[]
  ctaTitle: string
  ctaButton: string
}

const copy: Record<Locale, PiercingCopy> = {
  en: {
    heroTitle: "Professional Piercing Prague",
    heroBody: "Expert piercers, sterile environment, implant-grade jewelry, and full aftercare guidance.",
    heroBook: "Book Your Piercing",
    heroGallery: "View Piercing Gallery",
    introTitle: "Professional Piercing Services",
    introBody:
      "SOUL Tattoo Atelier offers professional piercing with experienced piercers and a sterile, welcoming environment. We use high-quality implant-grade titanium and follow strict safety protocols.",
    typesTitle: "All Piercing Types",
    typesBody: "Comprehensive ear, facial, oral, body, and intimate options.",
    types: [
      "Earlobe (single, double)",
      "Both ears",
      "Tragus / Anti-tragus",
      "Helix / Forward helix",
      "Daith / Conch / Snug / Rook",
      "Industrial",
      "Nostril",
      "Septum",
      "Bridge",
      "Eyebrow",
      "Tongue",
      "Lips (madonna/monroe, medusa, classic, vertical)",
      "Smiley",
      "Navel (upper / lower)",
      "Nipple (single / both)",
    ],
    previewTitle: "Gallery Preview",
    previewBody: "Recent piercing work and studio environment.",
    faqTitle: "FAQ",
    faqItems: [
      {
        q: "Is piercing safe at SOUL?",
        a: "Yes. We use sterile, single-use needles, medical-grade disinfectants, and autoclave-processed tools.",
      },
      {
        q: "What jewelry do you use?",
        a: "We pierce with implant-grade titanium by default. Gold or alternative materials are available on request.",
      },
      {
        q: "How long does healing take?",
        a: "Lobes can heal in 6-8 weeks; cartilage 3-6 months; septum 6-8 weeks; navel and nipples may take longer.",
      },
      {
        q: "Do you offer consultations before piercing?",
        a: "Yes, consultations are free. We review anatomy, placement, jewelry, and healing expectations.",
      },
      {
        q: "Can you help with difficult placements or combos?",
        a: "Yes. We handle complex projects and multiple piercings in one visit.",
      },
      {
        q: "Do you replace or upgrade jewelry?",
        a: "Yes. We replace, upsize, or downsize jewelry and advise on timing during healing.",
      },
      {
        q: "How do I care for my piercing?",
        a: "Clean twice daily with sterile saline, avoid touching with unwashed hands, and avoid pools or saunas until healed.",
      },
    ],
    ctaTitle: "Ready to Get Pierced?",
    ctaButton: "Book Your Piercing",
  },
  es: {
    heroTitle: "Piercing Profesional en Praga",
    heroBody: "Perforadores expertos, entorno esteril, joyeria implant-grade y guia completa de aftercare.",
    heroBook: "Reservar Piercing",
    heroGallery: "Ver Galeria de Piercing",
    introTitle: "Servicios Profesionales de Piercing",
    introBody:
      "SOUL Tattoo Atelier ofrece piercing profesional con especialistas experimentados y un entorno esteril y seguro. Usamos titanio implant-grade y protocolos estrictos.",
    typesTitle: "Todos los Tipos de Piercing",
    typesBody: "Opciones completas para oreja, rostro, oral, cuerpo e intimo.",
    types: [
      "Lobulo (simple, doble)",
      "Ambas orejas",
      "Tragus / Anti-tragus",
      "Helix / Forward helix",
      "Daith / Conch / Snug / Rook",
      "Industrial",
      "Nostril",
      "Septum",
      "Bridge",
      "Ceja",
      "Lengua",
      "Labios (madonna/monroe, medusa, clasico, vertical)",
      "Smiley",
      "Ombligo (superior / inferior)",
      "Pezon (uno / ambos)",
    ],
    previewTitle: "Vista Previa de Galeria",
    previewBody: "Trabajos recientes de piercing y ambiente del estudio.",
    faqTitle: "FAQ",
    faqItems: [
      { q: "Es seguro hacerse piercing en SOUL?", a: "Si. Usamos agujas esteriles de un solo uso y material desinfectado profesionalmente." },
      { q: "Que joyeria usan?", a: "Usamos titanio implant-grade por defecto. Tambien ofrecemos oro y otros materiales." },
      { q: "Cuanto tarda en curar?", a: "Depende de la zona. Lobulo 6-8 semanas; cartilago 3-6 meses; otras zonas pueden tardar mas." },
      { q: "Ofrecen consulta previa?", a: "Si, las consultas son gratuitas para revisar anatomia, ubicacion y joyeria." },
      { q: "Manejan colocaciones complejas?", a: "Si. Tambien realizamos proyectos complejos y multiples perforaciones en una visita." },
      { q: "Cambian o actualizan joyeria?", a: "Si, hacemos reemplazo y ajuste de joyeria segun el proceso de curacion." },
      { q: "Como cuido mi piercing?", a: "Limpia 2 veces al dia con solucion salina esteril y evita piscina/sauna hasta curar." },
    ],
    ctaTitle: "Listo para Hacerte Piercing?",
    ctaButton: "Reservar Piercing",
  },
  cs: {
    heroTitle: "Profesionalni Piercing Praha",
    heroBody: "Zkuseni pierceri, sterilni prostredi, implant-grade sperky a kompletni pokyny k peci.",
    heroBook: "Rezervovat Piercing",
    heroGallery: "Zobrazit Piercing Galerii",
    introTitle: "Profesionalni Piercing Sluzby",
    introBody:
      "SOUL Tattoo Atelier nabizi profesionalni piercing se zkusenymi piercery ve sterilnim a prijemnem prostredi. Pouzivame kvalitni implant-grade titan.",
    typesTitle: "Vsechny Typy Piercingu",
    typesBody: "Kompletni moznosti pro ucho, oblicej, oralni i telesne piercy.",
    types: [
      "Lalok (jednoduchy, dvojity)",
      "Obe usi",
      "Tragus / Anti-tragus",
      "Helix / Forward helix",
      "Daith / Conch / Snug / Rook",
      "Industrial",
      "Nostril",
      "Septum",
      "Bridge",
      "Oboci",
      "Jazyk",
      "Rty (madonna/monroe, medusa, klasicky, vertikalni)",
      "Smiley",
      "Pupik (horni / dolni)",
      "Bradavka (jedna / obe)",
    ],
    previewTitle: "Ukazka Galerie",
    previewBody: "Nedavne piercing prace a prostredi studia.",
    faqTitle: "FAQ",
    faqItems: [
      { q: "Je piercing v SOUL bezpecny?", a: "Ano. Pouzivame sterilni jednorazove jehly a pristroje zpracovane dle hygienickych standardu." },
      { q: "Jake sperky pouzivate?", a: "Standardne implant-grade titan. Na prani i zlato a dalsi materialy." },
      { q: "Jak dlouho trva hojeni?", a: "Zalezi na umisteni. Lalok 6-8 tydnu, chrupavka 3-6 mesicu, nektere oblasti dele." },
      { q: "Mate konzultace pred piercingem?", a: "Ano, konzultace jsou zdarma. Posoudime anatomii, umisteni i sperk." },
      { q: "Resite slozite kombinace?", a: "Ano. Zvladame slozite projekty i vice piercingu behem jedne navstevy." },
      { q: "Menite nebo upravujete sperky?", a: "Ano, menime velikost i typ sperku a doporucime vhodny termin." },
      { q: "Jak se starat o piercing?", a: "Cistete 2x denne sterilnim fyziologickym roztokem a vyhněte se bazenu i saune do zahojeni." },
    ],
    ctaTitle: "Pripraveni na Piercing?",
    ctaButton: "Rezervovat Piercing",
  },
  de: {
    heroTitle: "Professionelles Piercing Prag",
    heroBody: "Erfahrene Piercer, steriles Umfeld, Implantat-Schmuck und volle Aftercare-Anleitung.",
    heroBook: "Piercing Buchen",
    heroGallery: "Piercing Galerie",
    introTitle: "Professionelle Piercing Services",
    introBody:
      "SOUL Tattoo Atelier bietet professionelles Piercing mit erfahrenen Piercern in sterilem, sicheren Umfeld. Wir nutzen hochwertiges Implantat-Titan.",
    typesTitle: "Alle Piercing Arten",
    typesBody: "Umfassende Optionen fuer Ohr, Gesicht, oral, Koerper und intim.",
    types: [
      "Ohrlaeppchen (einzeln, doppelt)",
      "Beide Ohren",
      "Tragus / Anti-tragus",
      "Helix / Forward helix",
      "Daith / Conch / Snug / Rook",
      "Industrial",
      "Nostril",
      "Septum",
      "Bridge",
      "Augenbraue",
      "Zunge",
      "Lippen (madonna/monroe, medusa, klassisch, vertikal)",
      "Smiley",
      "Bauchnabel (oben / unten)",
      "Nippel (einzeln / beide)",
    ],
    previewTitle: "Galerie Vorschau",
    previewBody: "Aktuelle Piercing-Arbeiten und Studio-Einblicke.",
    faqTitle: "FAQ",
    faqItems: [
      { q: "Ist Piercing bei SOUL sicher?", a: "Ja. Wir verwenden sterile Einweg-Nadeln und medizinische Desinfektion." },
      { q: "Welchen Schmuck verwendet ihr?", a: "Standardmaessig Implantat-Titan. Gold und weitere Materialien auf Anfrage." },
      { q: "Wie lange dauert die Heilung?", a: "Je nach Stelle unterschiedlich: Ohrlaeppchen 6-8 Wochen, Knorpel 3-6 Monate, manche Stellen laenger." },
      { q: "Bietet ihr Beratung vor dem Piercing?", a: "Ja, kostenlose Beratung zu Anatomie, Platzierung und Schmuck." },
      { q: "Koennt ihr komplexe Kombinationen machen?", a: "Ja. Wir planen auch komplexe Projekte und mehrere Piercings in einer Session." },
      { q: "Tauscht ihr Schmuck aus?", a: "Ja, wir ersetzen und justieren Schmuck je nach Heilungsverlauf." },
      { q: "Wie pflege ich mein Piercing?", a: "2x taeglich mit steriler Kochsalzloesung reinigen und Pools/Sauna bis zur Heilung meiden." },
    ],
    ctaTitle: "Bereit Fuer Dein Piercing?",
    ctaButton: "Piercing Buchen",
  },
}

export default function PiercingPrague() {
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
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
            >
              {t.heroBook}
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 rounded-full border border-background/70 text-background text-sm font-light uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:bg-background hover:text-foreground"
            >
              {t.heroGallery}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">{t.introTitle}</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">{t.introBody}</p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.typesTitle}</h2>
            <p className="text-muted-foreground mb-6">{t.typesBody}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {t.types.map((item) => (
                <div key={item} className="p-4 border border-border rounded-md bg-secondary">
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.previewTitle}</h2>
            <p className="text-muted-foreground mb-6">{t.previewBody}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {piercingGallery.map((item) => (
                <Link
                  key={item.src}
                  href="/gallery"
                  className="block overflow-hidden rounded-md border border-border bg-secondary hover:bg-muted transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} className="w-full h-48 object-cover transition duration-500 hover:scale-105" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.faqTitle}</h2>
            <div className="space-y-6">
              {t.faqItems.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-4">{t.ctaTitle}</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}

