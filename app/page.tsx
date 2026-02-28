"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

const heroVideoMp4Src = "/assets/gallery/custom/IMG_3007.mp4"

type ServiceCard = {
  href: string
  title: string
  description: string
  image: string
}

type GalleryCard = {
  src: string
  alt: string
  label: string
}

type HomeCopy = {
  heroTitle: string
  heroLine1: string
  heroLine2: string
  heroBook: string
  heroGallery: string
  processEyebrow: string
  processTitle: string
  processBody: string
  cards: { title: string; desc: string }[]
  servicesTitle: string
  services: ServiceCard[]
  galleryTitle: string
  viewAll: string
  galleryItems: GalleryCard[]
  ctaTitle: string
  ctaBody: string
  ctaButton: string
}

const copy: Record<Locale, HomeCopy> = {
  en: {
    heroTitle: "SOUL TATTOO STUDIO",
    heroLine1: "Tattoo and piercing studio in Prague.",
    heroLine2: "Artists who value art, your comfort and time.",
    heroBook: "Book Now",
    heroGallery: "View Gallery",
    processEyebrow: "Tattoos - Our Creative Process",
    processTitle: "Who We Are",
    processBody:
      "We craft tailored experiences in a private atmosphere-personal consultations, bespoke designs, and artists selected to fit your style.",
    cards: [
      {
        title: "Experience",
        desc: "Private atmosphere, one-on-one guidance, and designs that reflect your story.",
      },
      {
        title: "Selected Artists",
        desc: "Multi-style team-from ultra-fine lines to bold statement work-matched to your vision.",
      },
      {
        title: "High Standards",
        desc: "Sterile setup, precise execution, and meticulous aftercare direction for every piece.",
      },
    ],
    servicesTitle: "Our Services",
    services: [
      {
        href: "/tattoo-prague",
        title: "Custom Tattoos",
        description: "Fine-line, realism, and geometric work tailored to your story.",
        image: "/assets/gallery/custom/IMG_4983.JPG",
      },
      {
        href: "/piercing-prague",
        title: "Piercing",
        description: "Precision piercing with sterile equipment and aftercare guidance.",
        image: "/assets/gallery/custom/IMG_6398.JPG",
      },
      {
        href: "/tattoo-courses-prague",
        title: "Tattoo/Piercing Training",
        description: "Hands-on mentoring for aspiring artists in a working studio.",
        image: "/assets/gallery/custom/IMG_7883.JPG",
      },
      {
        href: "/merch",
        title: "Aftercare & Merch",
        description: "Studio-approved aftercare, apparel, and jewelry.",
        image: "/assets/gallery/custom/IMG_1846.JPG",
      },
    ],
    galleryTitle: "Gallery",
    viewAll: "View All",
    galleryItems: [
      { src: "/assets/gallery/custom/IMG_8109.JPG", alt: "Tattoo style preview", label: "Tattoo" },
      { src: "/assets/gallery/custom/IMG_4430.JPG", alt: "Training session preview", label: "Training" },
      { src: "/assets/gallery/custom/IMG_0322.JPG", alt: "Studio merch preview", label: "Merch" },
    ],
    ctaTitle: "Ready to Get Started?",
    ctaBody: "Book your consultation today.",
    ctaButton: "Contact Us",
  },
  es: {
    heroTitle: "SOUL TATTOO STUDIO",
    heroLine1: "Estudio de tatuajes y piercing en Praga.",
    heroLine2: "Artistas que valoran el arte, tu comodidad y tu tiempo.",
    heroBook: "Reservar Ahora",
    heroGallery: "Ver Galeria",
    processEyebrow: "Tatuajes - Nuestro Proceso Creativo",
    processTitle: "Quienes Somos",
    processBody:
      "Creamos experiencias personalizadas en un ambiente privado-consultas individuales, disenos a medida y artistas seleccionados segun tu estilo.",
    cards: [
      {
        title: "Experiencia",
        desc: "Ambiente privado, orientacion personalizada y disenos que reflejan tu historia.",
      },
      {
        title: "Artistas Seleccionados",
        desc: "Equipo de estilos multiples-desde lineas finas hasta piezas impactantes-ajustado a tu vision.",
      },
      {
        title: "Altos Estandares",
        desc: "Entorno esteril, ejecucion precisa e instrucciones de cuidado detalladas.",
      },
    ],
    servicesTitle: "Nuestros Servicios",
    services: [
      {
        href: "/tattoo-prague",
        title: "Tatuajes Personalizados",
        description: "Linea fina, realismo y geometria adaptados a tu historia.",
        image: "/assets/gallery/custom/IMG_4983.JPG",
      },
      {
        href: "/piercing-prague",
        title: "Piercing",
        description: "Piercing preciso con equipo esteril y guia de cuidados.",
        image: "/assets/gallery/custom/IMG_6398.JPG",
      },
      {
        href: "/tattoo-courses-prague",
        title: "Formacion Tattoo/Piercing",
        description: "Mentoria practica para artistas en un estudio real.",
        image: "/assets/gallery/custom/IMG_7883.JPG",
      },
      {
        href: "/merch",
        title: "Aftercare y Merch",
        description: "Aftercare, ropa y joyeria aprobados por el estudio.",
        image: "/assets/gallery/custom/IMG_1846.JPG",
      },
    ],
    galleryTitle: "Galeria",
    viewAll: "Ver Todo",
    galleryItems: [
      { src: "/assets/gallery/custom/IMG_8109.JPG", alt: "Vista previa de tatuajes", label: "Tattoo" },
      { src: "/assets/gallery/custom/IMG_4430.JPG", alt: "Vista previa de formacion", label: "Formacion" },
      { src: "/assets/gallery/custom/IMG_0322.JPG", alt: "Vista previa de merch", label: "Merch" },
    ],
    ctaTitle: "Listo para Empezar?",
    ctaBody: "Reserva tu consulta hoy.",
    ctaButton: "Contactanos",
  },
  cs: {
    heroTitle: "SOUL TATTOO STUDIO",
    heroLine1: "Tetovaci a piercing studio v Praze.",
    heroLine2: "Umelci, kteri si vazi umeni, vaseho pohodli a casu.",
    heroBook: "Rezervovat",
    heroGallery: "Zobrazit Galerii",
    processEyebrow: "Tetovani - Nas Kreativni Proces",
    processTitle: "Kdo Jsme",
    processBody:
      "Tvorime individualni zazitky v soukrome atmosfere-osobni konzultace, navrhy na miru a vyber umelce podle vaseho stylu.",
    cards: [
      {
        title: "Zkusenost",
        desc: "Soukrome prostredi, individualni pristup a navrhy, ktere odrazeji vas pribeh.",
      },
      {
        title: "Vybrani Umelci",
        desc: "Tym ruznych stylu-od jemnych linek po vyrazne motivy-presne podle vase predstavy.",
      },
      {
        title: "Vysoke Standardy",
        desc: "Sterilni prostredi, presna prace a detailni pokyny k peci.",
      },
    ],
    servicesTitle: "Nase Sluzby",
    services: [
      {
        href: "/tattoo-prague",
        title: "Tetovani na Miru",
        description: "Fine-line, realismus a geometrie podle vaseho pribehu.",
        image: "/assets/gallery/custom/IMG_4983.JPG",
      },
      {
        href: "/piercing-prague",
        title: "Piercing",
        description: "Presny piercing se sterilnim vybavenim a instrukcemi k peci.",
        image: "/assets/gallery/custom/IMG_6398.JPG",
      },
      {
        href: "/tattoo-courses-prague",
        title: "Kurzy Tattoo/Piercing",
        description: "Prakticke vedeni pro zacatecniky i pokrocile umelce.",
        image: "/assets/gallery/custom/IMG_7883.JPG",
      },
      {
        href: "/merch",
        title: "Aftercare a Merch",
        description: "Studiem overena pece, obleceni a sperky.",
        image: "/assets/gallery/custom/IMG_1846.JPG",
      },
    ],
    galleryTitle: "Galerie",
    viewAll: "Zobrazit Vse",
    galleryItems: [
      { src: "/assets/gallery/custom/IMG_8109.JPG", alt: "Ukazka stylu tetovani", label: "Tattoo" },
      { src: "/assets/gallery/custom/IMG_4430.JPG", alt: "Ukazka kurzu", label: "Kurzy" },
      { src: "/assets/gallery/custom/IMG_0322.JPG", alt: "Ukazka merche", label: "Merch" },
    ],
    ctaTitle: "Pripraveni Zacit?",
    ctaBody: "Rezervujte si konzultaci jeste dnes.",
    ctaButton: "Kontaktujte Nas",
  },
  de: {
    heroTitle: "SOUL TATTOO STUDIO",
    heroLine1: "Tattoo- und Piercing-Studio in Prag.",
    heroLine2: "Artists, die Kunst, Komfort und Zeit schatzen.",
    heroBook: "Jetzt Buchen",
    heroGallery: "Galerie Ansehen",
    processEyebrow: "Tattoos - Unser Kreativer Prozess",
    processTitle: "Wer Wir Sind",
    processBody:
      "Wir gestalten individuelle Erlebnisse in privater Atmosphare-personliche Beratung, massgeschneiderte Designs und Artists passend zu deinem Stil.",
    cards: [
      {
        title: "Erfahrung",
        desc: "Private Atmosphare, 1:1 Betreuung und Designs, die deine Geschichte tragen.",
      },
      {
        title: "Ausgewaehlte Artists",
        desc: "Multistil-Team-von feinen Linien bis zu markanten Motiven-passend zu deiner Vision.",
      },
      {
        title: "Hohe Standards",
        desc: "Steriles Setup, prazise Umsetzung und detaillierte Aftercare-Anleitung.",
      },
    ],
    servicesTitle: "Unsere Leistungen",
    services: [
      {
        href: "/tattoo-prague",
        title: "Custom Tattoos",
        description: "Fine-Line, Realismus und Geometrie passend zu deiner Story.",
        image: "/assets/gallery/custom/IMG_4983.JPG",
      },
      {
        href: "/piercing-prague",
        title: "Piercing",
        description: "Praezises Piercing mit sterilem Equipment und Aftercare-Hinweisen.",
        image: "/assets/gallery/custom/IMG_6398.JPG",
      },
      {
        href: "/tattoo-courses-prague",
        title: "Tattoo/Piercing Schulung",
        description: "Praxisorientiertes Mentoring fuer angehende Artists.",
        image: "/assets/gallery/custom/IMG_7883.JPG",
      },
      {
        href: "/merch",
        title: "Aftercare & Merch",
        description: "Vom Studio empfohlene Pflege, Apparel und Schmuck.",
        image: "/assets/gallery/custom/IMG_1846.JPG",
      },
    ],
    galleryTitle: "Galerie",
    viewAll: "Alle Anzeigen",
    galleryItems: [
      { src: "/assets/gallery/custom/IMG_8109.JPG", alt: "Tattoo Stil Vorschau", label: "Tattoo" },
      { src: "/assets/gallery/custom/IMG_4430.JPG", alt: "Training Vorschau", label: "Schulung" },
      { src: "/assets/gallery/custom/IMG_0322.JPG", alt: "Merch Vorschau", label: "Merch" },
    ],
    ctaTitle: "Bereit Loszulegen?",
    ctaBody: "Buche heute deine Beratung.",
    ctaButton: "Kontakt",
  },
}

export default function Home() {
  const { locale } = useLanguage()
  const t = copy[locale]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden isolate">
        <div className="absolute inset-0 hidden md:block" aria-hidden="true">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/gallery/custom/IMG_6880.JPG"
          >
            <source src={heroVideoMp4Src} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 md:hidden" aria-hidden="true">
          <Image src="/assets/gallery/custom/IMG_6880.JPG" alt="" fill sizes="100vw" priority className="object-cover" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6 text-balance text-background drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
            {t.heroTitle}
          </h1>
          <p className="mt-10 md:mt-0 text-lg md:text-xl font-light text-background drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
            <span className="block">{t.heroLine1}</span>
            <span className="block">{t.heroLine2}</span>
          </p>
          <div className="mt-2 md:mt-0 flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border border-white bg-transparent text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/10 md:border-transparent md:bg-foreground md:text-background md:shadow-foreground/20 md:hover:bg-muted-foreground md:hover:shadow-foreground/30"
            >
              {t.heroBook}
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 rounded-full border border-white bg-transparent text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/10 md:border-foreground/70 md:bg-transparent md:text-foreground md:shadow-none md:hover:bg-foreground md:hover:text-background"
            >
              {t.heroGallery}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-background via-secondary/60 to-background overflow-hidden">
        <div className="absolute inset-10 rounded-full bg-foreground/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">{t.processEyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.processTitle}</h2>
            <p className="text-muted-foreground text-lg">{t.processBody}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-background/80 shadow-sm">
            <Image
              src="/assets/gallery/custom/IMG_6880.JPG"
              alt="Who we are at Soul Tattoo Studio"
              width={1600}
              height={900}
              className="h-[340px] w-full object-cover md:h-[420px]"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.cards.map((item) => (
              <div
                key={item.title}
                className="relative p-6 rounded-2xl border border-border/80 bg-background/80 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-foreground/10"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-secondary overflow-hidden">
        <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-foreground/8" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-light mb-16 text-center">{t.servicesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:shadow-foreground/15"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-light mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute -left-16 top-20 h-48 w-48 rounded-full bg-foreground/8" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex justify-between items-center mb-12 gap-4">
            <h2 className="text-4xl font-light">{t.galleryTitle}</h2>
            <Link href="/gallery" className="text-sm font-light uppercase tracking-wider hover:text-muted-foreground transition">
              {t.viewAll}
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {t.galleryItems.map((item) => (
              <div
                key={item.src}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-background/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-foreground/10"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute left-3 bottom-3 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t.ctaBody}</p>
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

