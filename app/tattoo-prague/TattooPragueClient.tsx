"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

const galleryPreview = [
  { src: "/assets/gallery/custom/IMG_8109.JPG", alt: "Large blackwork tattoo style" },
  { src: "/assets/gallery/custom/IMG_0085.JPG", alt: "Fine-line style detail" },
  { src: "/assets/gallery/custom/IMG_0076.JPG", alt: "Graphic tattoo style" },
  { src: "/assets/gallery/custom/IMG_0075.JPG", alt: "Abstract tattoo style" },
  { src: "/assets/gallery/custom/IMG_7216.JPG", alt: "Realism-inspired tattoo style" },
  { src: "/assets/gallery/custom/IMG_6869.JPG", alt: "Bold contrast tattoo style" },
  { src: "/assets/gallery/custom/IMG_5991.JPG", alt: "Mixed-style tattoo composition" },
]

const processSlides = [
  { src: "/assets/gallery/custom/IMG_8109.JPG", alt: "Artist at work in studio" },
  { src: "/assets/gallery/tattoo/tattoo-9.jpg", alt: "Tattoo equipment ready" },
  { src: "/assets/gallery/tattoo/tattoo-10.jpg", alt: "Close-up precision tattooing" },
]

type TattooCopy = {
  heroTitle: string
  heroBody: string
  heroBook: string
  heroGallery: string
  aboutTitle: string
  aboutP1: string
  aboutP2: string
  processTitle: string
  processSteps: { title: string; body: string }[]
  pricingTitle: string
  pricingBody: string
  pricingCta: string
  pricingLink: string
  previewTitle: string
  previewBody: string
  servicesTitle: string
  servicesBody: string
  servicesList: string[]
  faqTitle: string
  faqItems: { q: string; a: string }[]
  finalCtaTitle: string
  finalCtaButton: string
  prevLabel: string
  nextLabel: string
}

const copy: Record<Locale, TattooCopy> = {
  en: {
    heroTitle: "Soul of Our Art",
    heroBody: "Custom tattoo work crafted with precision, storytelling, and sterile technique in the heart of Prague.",
    heroBook: "Book a Session",
    heroGallery: "View All Works",
    aboutTitle: "About Our Custom Tattoos",
    aboutP1:
      "At SOUL Tattoo Atelier, we specialize in creating unique, custom tattoo designs that reflect your personal style and vision. Each tattoo is carefully crafted by our experienced artists using premium inks and the latest techniques.",
    aboutP2:
      "Whether you have a specific idea or need inspiration, our team will work closely with you to create the perfect design. We believe every tattoo should be a meaningful piece of art.",
    processTitle: "Our Process",
    processSteps: [
      { title: "1. Consultation", body: "Discuss your ideas, size, placement, and timeline with our artist" },
      { title: "2. Design", body: "Custom artwork created specifically for your tattoo" },
      { title: "3. Tattooing", body: "Professional application in a sterile, comfortable environment" },
      { title: "4. Aftercare", body: "Complete instructions for proper healing and longevity" },
    ],
    pricingTitle: "Pricing & Duration",
    pricingBody:
      "Tattoo pricing depends on size, complexity, and artist. Typical session range is 1 to 8 hours. Minimum price starts at 2000 CZK.",
    pricingCta: "For a detailed quote, please schedule a free consultation.",
    pricingLink: "Book Consultation",
    previewTitle: "Gallery Preview",
    previewBody: "Selected pieces from our recent sessions.",
    servicesTitle: "Our Services",
    servicesBody: "From restorative cover-ups to ultra-precise linework, we execute technically demanding tattoos with meticulous care.",
    servicesList: [
      "Cover-ups",
      "Complex tattoos",
      "Ultra-fine (thin line) tattoos",
      "Any style status",
      "Large realistic/abstract tattoos",
      "Tattoos on difficult body areas",
    ],
    faqTitle: "FAQ - Custom Tattoo Prague",
    faqItems: [
      {
        q: "How much does a tattoo cost in Prague?",
        a: "Tattoo prices in Prague usually range from 2,000 to 8,000 CZK depending on size and complexity. Soul Tattoo Atelier offers free consultations for exact pricing.",
      },
      {
        q: "Is it safe to get a tattoo in Prague?",
        a: "Yes, when you choose a licensed studio. We use sterile equipment, disposable needles, and follow strict hygiene standards.",
      },
      {
        q: "Do I need to book an appointment?",
        a: "Walk-ins are welcome, but booking in advance is recommended for your preferred artist and time slot.",
      },
      {
        q: "How painful is getting a tattoo?",
        a: "Pain depends on placement and individual tolerance. Most clients describe it as manageable.",
      },
      {
        q: "How do I prepare for my tattoo?",
        a: "Sleep well, eat before your appointment, stay hydrated, and avoid alcohol 24 hours in advance.",
      },
      {
        q: "What is the healing process?",
        a: "Initial healing takes around 2-3 weeks. We provide clear aftercare instructions.",
      },
    ],
    finalCtaTitle: "Ready for Your Custom Tattoo?",
    finalCtaButton: "Book Your Appointment",
    prevLabel: "Previous",
    nextLabel: "Next",
  },
  es: {
    heroTitle: "El Alma de Nuestro Arte",
    heroBody: "Tatuajes personalizados creados con precision, narrativa visual y tecnica esteril en el corazon de Praga.",
    heroBook: "Reservar Sesion",
    heroGallery: "Ver Trabajos",
    aboutTitle: "Sobre Nuestros Tatuajes Personalizados",
    aboutP1:
      "En SOUL Tattoo Atelier creamos disenos unicos que reflejan tu estilo y vision. Cada tatuaje es trabajado por artistas con experiencia usando tintas premium y tecnicas actuales.",
    aboutP2:
      "Si ya tienes una idea o buscas inspiracion, nuestro equipo trabajara contigo para crear el diseno perfecto. Creemos que cada tatuaje debe ser una obra con significado.",
    processTitle: "Nuestro Proceso",
    processSteps: [
      { title: "1. Consulta", body: "Hablamos sobre idea, tamano, ubicacion y tiempos" },
      { title: "2. Diseno", body: "Creamos arte personalizado para tu tatuaje" },
      { title: "3. Sesion", body: "Aplicacion profesional en entorno esteril y comodo" },
      { title: "4. Aftercare", body: "Instrucciones completas para una buena cicatrizacion" },
    ],
    pricingTitle: "Precio y Duracion",
    pricingBody: "El precio depende de tamano, complejidad y artista. Las sesiones suelen durar entre 1 y 8 horas. Precio minimo desde 2000 CZK.",
    pricingCta: "Para un presupuesto exacto, agenda una consulta gratuita.",
    pricingLink: "Reservar Consulta",
    previewTitle: "Vista Previa de Galeria",
    previewBody: "Piezas seleccionadas de sesiones recientes.",
    servicesTitle: "Nuestros Servicios",
    servicesBody: "Desde cover-ups hasta linework de alta precision, realizamos trabajos tecnicos con maxima atencion al detalle.",
    servicesList: ["Cover-ups", "Tatuajes complejos", "Tatuajes ultrafinos", "Cualquier estilo", "Tatuajes grandes realistas/abstractos", "Zonas corporales complejas"],
    faqTitle: "FAQ - Tattoo Personalizado en Praga",
    faqItems: [
      { q: "Cuanto cuesta un tatuaje en Praga?", a: "Normalmente entre 2.000 y 8.000 CZK segun tamano y complejidad. Ofrecemos consulta gratuita para presupuesto preciso." },
      { q: "Es seguro tatuarse en Praga?", a: "Si, en un estudio autorizado. Trabajamos con higiene estricta, material esteril y agujas desechables." },
      { q: "Necesito cita previa?", a: "Aceptamos walk-ins, pero recomendamos reservar para asegurar artista y horario." },
      { q: "Duele mucho tatuarse?", a: "Depende de la zona y de cada persona, pero la mayoria lo describe como tolerable." },
      { q: "Como me preparo para tatuarme?", a: "Descansa bien, come antes de la cita, hidrata tu cuerpo y evita alcohol 24 horas antes." },
      { q: "Como es la curacion?", a: "La curacion inicial tarda 2-3 semanas. Te damos instrucciones completas de aftercare." },
    ],
    finalCtaTitle: "Listo para Tu Tattoo Personalizado?",
    finalCtaButton: "Reservar Cita",
    prevLabel: "Anterior",
    nextLabel: "Siguiente",
  },
  cs: {
    heroTitle: "Duse Naseho Umeni",
    heroBody: "Tetovani na miru vytvarene s presnosti, pribehem a sterilni technikou v srdci Prahy.",
    heroBook: "Rezervovat Sezeni",
    heroGallery: "Zobrazit Prace",
    aboutTitle: "O Nasich Tetovanich na Miru",
    aboutP1:
      "V SOUL Tattoo Atelier vytvarime jedinecne navrhy, ktere odrazeji vas styl a vizi. Kazde tetovani je peclive vytvoreno zkusenymi umelci s pouzitim kvalitnich materialu.",
    aboutP2:
      "At uz mate konkretni predstavu, nebo teprve hledate inspiraci, pomuzeme vam najit idealni navrh. Verime, ze kazde tetovani ma byt smysluplne.",
    processTitle: "Nase Proces",
    processSteps: [
      { title: "1. Konzultace", body: "Probereme navrh, velikost, umisteni a casovy plan" },
      { title: "2. Navrh", body: "Vytvorime originalni artwork na miru" },
      { title: "3. Tetovani", body: "Profesionalni aplikace ve sterilnim a pohodlnem prostredi" },
      { title: "4. Pec o Tetovani", body: "Dostanete jasne pokyny pro hojenI a dlouhou vydrz" },
    ],
    pricingTitle: "Cena a Delka",
    pricingBody: "Cena zavisi na velikosti, slozitosti a tatourovi. Sezeni trva obvykle 1-8 hodin. Minimalni cena od 2000 CZK.",
    pricingCta: "Pro presnou kalkulaci si rezervujte bezplatnou konzultaci.",
    pricingLink: "Rezervovat Konzultaci",
    previewTitle: "Ukazka Galerie",
    previewBody: "Vybrane prace z nasich poslednich sezeni.",
    servicesTitle: "Nase Sluzby",
    servicesBody: "Od cover-up projektu po ultra-presne linky, technicky narocna tetovani delame s maximalni peclivosti.",
    servicesList: ["Cover-up", "Slozita tetovani", "Ultra tenke linky", "Jakykoli styl", "Velke realisticke/abstraktni motivy", "Tetovani na narocnych mistech tela"],
    faqTitle: "FAQ - Tetovani na Miru Praha",
    faqItems: [
      { q: "Kolik stoji tetovani v Praze?", a: "Obvykle 2 000 az 8 000 CZK podle velikosti a slozitosti. Presnou cenu stanovime na bezplatne konzultaci." },
      { q: "Je tetovani v Praze bezpecne?", a: "Ano, pokud zvolite licencovane studio. Dodrzujeme prisnou hygienu a pracujeme se sterilnim vybavenim." },
      { q: "Je nutne objednani?", a: "Walk-in navstevy jsou vitane, ale rezervace je lepsi kvuli dostupnosti umelce." },
      { q: "Jak moc tetovani boli?", a: "Bolest zalezi na miste a individualni citlivosti, vetsina klientu ji hodnoti jako zvladnutelnou." },
      { q: "Jak se pripravit na tetovani?", a: "Dobre se vyspete, najezte se pred terminem, pijte vodu a 24 hodin predem nepijte alkohol." },
      { q: "Jak probiha hojenI?", a: "Zakladni hojeni trva asi 2-3 tydny. Dostanete detailni instrukce k peci." },
    ],
    finalCtaTitle: "Pripraveni na Sve Tetovani?",
    finalCtaButton: "Rezervovat Termin",
    prevLabel: "Predchozi",
    nextLabel: "Dalsi",
  },
  de: {
    heroTitle: "Die Seele Unserer Kunst",
    heroBody: "Individuelle Tattoos mit Praezision, Storytelling und steriler Technik im Herzen von Prag.",
    heroBook: "Session Buchen",
    heroGallery: "Alle Arbeiten",
    aboutTitle: "Ueber Unsere Custom Tattoos",
    aboutP1:
      "Bei SOUL Tattoo Atelier erstellen wir einzigartige Designs, die deinen Stil und deine Vision widerspiegeln. Jedes Tattoo wird von erfahrenen Artists mit Premium-Inks umgesetzt.",
    aboutP2:
      "Ob du eine konkrete Idee hast oder Inspiration brauchst - wir entwickeln gemeinsam dein perfektes Design. Jedes Tattoo soll bedeutungsvoll sein.",
    processTitle: "Unser Prozess",
    processSteps: [
      { title: "1. Beratung", body: "Wir sprechen ueber Idee, Groesse, Platzierung und Zeitplan" },
      { title: "2. Design", body: "Custom Artwork speziell fuer dein Tattoo" },
      { title: "3. Tattoo Session", body: "Professionelle Umsetzung in sterilem, komfortablem Umfeld" },
      { title: "4. Aftercare", body: "Klare Hinweise fuer Heilung und langlebige Ergebnisse" },
    ],
    pricingTitle: "Preise & Dauer",
    pricingBody: "Der Preis haengt von Groesse, Komplexitaet und Artist ab. Sessions dauern meist 1 bis 8 Stunden. Mindestpreis ab 2000 CZK.",
    pricingCta: "Fuer ein genaues Angebot buche bitte eine kostenlose Beratung.",
    pricingLink: "Beratung Buchen",
    previewTitle: "Galerie Vorschau",
    previewBody: "Ausgewaehlte Arbeiten aus unseren aktuellen Sessions.",
    servicesTitle: "Unsere Leistungen",
    servicesBody: "Von Cover-ups bis zu praezisem Linework setzen wir technisch anspruchsvolle Tattoos mit hoher Sorgfalt um.",
    servicesList: ["Cover-ups", "Komplexe Tattoos", "Ultra-feine Linien", "Alle Stilrichtungen", "Grosse realistische/abstrakte Tattoos", "Tattoos an schwierigen Koerperstellen"],
    faqTitle: "FAQ - Custom Tattoo Prag",
    faqItems: [
      { q: "Was kostet ein Tattoo in Prag?", a: "Meist zwischen 2.000 und 8.000 CZK, je nach Groesse und Aufwand. Fuer genaue Preise bieten wir kostenlose Beratung." },
      { q: "Ist ein Tattoo in Prag sicher?", a: "Ja, in einem lizenzierten Studio. Wir arbeiten mit sterilen Materialien und strengen Hygienestandards." },
      { q: "Muss ich einen Termin buchen?", a: "Walk-ins sind moeglich, wir empfehlen aber eine Buchung fuer Artist- und Zeitslot-Sicherheit." },
      { q: "Wie schmerzhaft ist ein Tattoo?", a: "Das haengt von Koerperstelle und Person ab. Die meisten empfinden es als gut aushaltbar." },
      { q: "Wie bereite ich mich vor?", a: "Genug Schlaf, vorher essen, ausreichend trinken und 24 Stunden vorher kein Alkohol." },
      { q: "Wie laeuft die Heilung?", a: "Die erste Heilphase dauert etwa 2-3 Wochen. Du erhaeltst klare Aftercare-Anweisungen." },
    ],
    finalCtaTitle: "Bereit fuer Dein Custom Tattoo?",
    finalCtaButton: "Termin Buchen",
    prevLabel: "Zurueck",
    nextLabel: "Weiter",
  },
}

export function TattooPragueClient() {
  const { locale } = useLanguage()
  const t = copy[locale]
  const [slide, setSlide] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative py-24 px-6 overflow-hidden"
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
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">{t.aboutTitle}</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">{t.aboutP1}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t.aboutP2}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-light mb-4">{t.processTitle}</h2>
              <div className="space-y-6">
                {t.processSteps.map((step) => (
                  <div key={step.title} className="border-l-2 border-foreground pl-6">
                    <h3 className="text-xl font-light mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={processSlides[slide].src} alt={processSlides[slide].alt} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <button
                  aria-label={t.prevLabel}
                  className="h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10"
                  onClick={() => setSlide((prev) => (prev - 1 + processSlides.length) % processSlides.length)}
                >
                  {"<"}
                </button>
                <div className="flex gap-2">
                  {processSlides.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 w-8 rounded-full transition ${idx === slide ? "bg-background" : "bg-background/40"}`}
                    />
                  ))}
                </div>
                <button
                  aria-label={t.nextLabel}
                  className="h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10"
                  onClick={() => setSlide((prev) => (prev + 1) % processSlides.length)}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.pricingTitle}</h2>
            <p className="text-muted-foreground mb-4">{t.pricingBody}</p>
            <div className="bg-secondary p-6 rounded-sm">
              <p className="text-muted-foreground mb-4">{t.pricingCta}</p>
              <Link href="/contact" className="text-foreground hover:text-muted-foreground transition">
                {t.pricingLink}
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.previewTitle}</h2>
            <p className="text-muted-foreground mb-6">{t.previewBody}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {galleryPreview.map((item) => (
                <Link
                  key={item.src}
                  href="/gallery"
                  className="block overflow-hidden rounded-sm border border-border bg-secondary hover:bg-muted transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} className="w-full h-48 object-cover transition duration-500 hover:scale-105" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.servicesTitle}</h2>
            <p className="text-muted-foreground mb-6">{t.servicesBody}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {t.servicesList.map((item) => (
                <div key={item} className="p-4 border border-border rounded-sm bg-secondary">
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">{t.faqTitle}</h2>
            <div className="space-y-6">
              {t.faqItems.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">{t.finalCtaTitle}</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            {t.finalCtaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}

