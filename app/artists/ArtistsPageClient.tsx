"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

type Artist = {
  id: number
  name: string
  title: string
  specialty: string
  bio: string
  styles: string[]
  image: string
  portfolio: string[]
}

const artistsData: Artist[] = [
  {
    id: 1,
    name: "Kriss",
    title: "Founder",
    specialty: "Graphics / Japanese motifs / Linework",
    bio: "Founder leading the studio with bold graphic compositions and Japanese-inspired linework.",
    styles: ["Graphics", "Japanese Motifs", "Linework"],
    image: "/assets/gallery/custom/IMG_0229.JPG",
    portfolio: [
      "/assets/artists/works/kriss-1.jpg",
      "/assets/artists/works/kriss-2.jpg",
      "/assets/artists/works/kriss-3.jpg",
      "/assets/artists/works/kriss-4.jpg",
    ],
  },
  {
    id: 2,
    name: "Roman",
    title: "Tattoo Artist",
    specialty: "Realism / Ornamental / Neo-traditional",
    bio: "Balances realism with ornamental structure and neo-traditional color blocking.",
    styles: ["Realism", "Ornamental", "Neo-traditional"],
    image: "/assets/artists/portraits/roman.JPG",
    portfolio: [
      "/assets/artists/works/roman-1.jpg",
      "/assets/artists/works/roman-2.jpg",
      "/assets/artists/works/roman-3.jpg",
      "/assets/artists/works/roman-4.jpg",
    ],
  },
  {
    id: 3,
    name: "Annie",
    title: "Tattoo Artist",
    specialty: "Graphics / Abstract / Linework",
    bio: "Draws abstract, high-contrast linework with clean graphic balance.",
    styles: ["Graphics", "Abstract", "Linework"],
    image: "/assets/artists/portraits/anya.JPG",
    portfolio: [
      "/assets/artists/works/annie-1.jpg",
      "/assets/artists/works/annie-2.jpg",
      "/assets/artists/works/annie-3.jpg",
      "/assets/artists/works/annie-4.jpg",
    ],
  },
  {
    id: 4,
    name: "Valeria",
    title: "Tattoo Artist",
    specialty: "Graphics / Microrealism",
    bio: "Blends graphic precision with subtle microrealism for intimate pieces.",
    styles: ["Graphics", "Microrealism", "Fine Detail"],
    image: "/assets/artists/portraits/lera.JPG",
    portfolio: [
      "/assets/artists/works/valeria-1.jpg",
      "/assets/artists/works/valeria-2.jpg",
      "/assets/artists/works/valeria-3.jpg",
      "/assets/artists/works/valeria-4.jpg",
      "/assets/artists/works/valeria-5.jpg",
      "/assets/artists/works/valeria-6.jpg",
    ],
  },
  {
    id: 5,
    name: "Vitaly",
    title: "Tattoo Artist",
    specialty: "Realism black & grey / Graphics",
    bio: "Focuses on black & grey realism reinforced with graphic contrast.",
    styles: ["Realism Black & Grey", "Graphics", "Contrast"],
    image: "/assets/artists/portraits/vitalya.JPG",
    portfolio: [
      "/assets/artists/works/Vitaly-1.jpg",
      "/assets/artists/works/vitaly-2.jpg",
      "/assets/artists/works/vitaly-3.jpg",
      "/assets/artists/works/vitaly-4.jpg",
    ],
  },
  {
    id: 6,
    name: "Elmi",
    title: "Tattoo Artist",
    specialty: "Fineline / Calligraphy / Graphics",
    bio: "Fineline specialist weaving calligraphic strokes into graphic layouts.",
    styles: ["Fineline", "Calligraphy", "Graphics"],
    image: "/assets/artists/portraits/elmi.JPG",
    portfolio: [
      "/assets/artists/works/elmi-1.jpg",
      "/assets/artists/works/elmi-2.jpg",
      "/assets/artists/works/elmi-3.jpg",
      "/assets/artists/works/elmi-4.jpg",
    ],
  },
  {
    id: 7,
    name: "Kama",
    title: "Tattoo Artist",
    specialty: "Graphics / Abstract / Unique style",
    bio: "Experimental graphic and abstract compositions with a distinct signature style.",
    styles: ["Graphics", "Abstract", "Unique Style"],
    image: "/assets/artists/portraits/kama.JPG",
    portfolio: [
      "/assets/artists/works/kama-1.jpg",
      "/assets/artists/works/kama-2.jpg",
      "/assets/artists/works/kama-3.jpg",
      "/assets/artists/works/kama-4.jpg",
      "/assets/artists/works/kama-5.jpg",
    ],
  },
  {
    id: 8,
    name: "Viktoria",
    title: "Tattoo Artist",
    specialty: "Backwork / Polynesian / Dark graphic",
    bio: "Builds dark graphic backwork with Polynesian-inspired rhythm and flow.",
    styles: ["Backwork", "Polynesian", "Dark Graphic"],
    image: "/assets/artists/portraits/vika.JPG",
    portfolio: [
      "/assets/artists/works/vika-1.jpg",
      "/assets/artists/works/vika-2.jpg",
      "/assets/artists/works/vika-3.jpg",
      "/assets/artists/works/vika-4.jpg",
    ],
  },
  {
    id: 9,
    name: "Nastya",
    title: "Tattoo Artist",
    specialty: "Graphics / Minimalism / Fineline",
    bio: "Creates minimalist, fine-line compositions with crisp graphic clarity.",
    styles: ["Graphics", "Minimalism", "Fineline"],
    image: "/assets/artists/portraits/nastya.JPG",
    portfolio: [
      "/assets/artists/works/nastya-1.jpg",
      "/assets/artists/works/nastya-2.jpg",
      "/assets/artists/works/nastya-3.jpg",
      "/assets/artists/works/nastya-4.jpg",
    ],
  },
]

type ArtistCardProps = {
  artist: Artist
  expanded: boolean
  toggleLabel: string
  hideLabel: string
  onToggle: (id: number) => void
  onOpenLightbox: (artist: Artist, index: number) => void
}

function ArtistCard({ artist, expanded, toggleLabel, hideLabel, onToggle, onOpenLightbox }: ArtistCardProps) {
  return (
    <div className="border border-border rounded-sm overflow-hidden hover:border-foreground transition">
      <div className="p-6 border-b border-border">
        <div className="flex gap-6 items-start">
          <div className="w-24 h-24 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
            <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-light mb-1">{artist.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">{artist.title}</p>
            <div className="flex flex-wrap gap-2">
              {artist.styles.map((style) => (
                <span key={style} className="px-3 py-1 text-xs border border-border rounded-full text-foreground">
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">{artist.bio}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-3 text-xs font-light uppercase tracking-wider text-muted-foreground">
            <span className="px-3 py-1 border border-border rounded-full text-foreground">{artist.specialty}</span>
          </div>
          <button
            onClick={() => onToggle(artist.id)}
            className="text-xs font-light uppercase tracking-wider text-foreground hover:text-muted-foreground transition"
          >
            {expanded ? hideLabel : toggleLabel}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="p-6 bg-secondary">
          <div className="grid grid-cols-2 gap-4">
            {artist.portfolio.map((image, idx) => (
              <button
                key={idx}
                className="aspect-square bg-muted rounded-sm overflow-hidden"
                onClick={() => onOpenLightbox(artist, idx)}
                aria-label={`View ${artist.name} work ${idx + 1}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${artist.name} work ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

type ArtistsCopy = {
  heroTitle: string
  heroBody: string
  showWork: string
  hideWork: string
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  close: string
  prev: string
  next: string
}

const copy: Record<Locale, ArtistsCopy> = {
  en: {
    heroTitle: "Our Artists",
    heroBody:
      "Meet the experienced tattoo professionals behind SOUL. Each artist brings their unique vision and expertise to create meaningful, lasting work.",
    showWork: "Show Work",
    hideWork: "Hide Work",
    ctaTitle: "Ready to Start Your Tattoo Journey?",
    ctaBody: "Book a consultation with one of our artists today.",
    ctaButton: "Book Appointment",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
  },
  es: {
    heroTitle: "Nuestros Artistas",
    heroBody:
      "Conoce al equipo profesional de SOUL. Cada artista aporta una vision unica para crear tatuajes con significado y calidad duradera.",
    showWork: "Ver Trabajos",
    hideWork: "Ocultar Trabajos",
    ctaTitle: "Listo para Empezar Tu Proyecto?",
    ctaBody: "Reserva hoy una consulta con uno de nuestros artistas.",
    ctaButton: "Reservar Cita",
    close: "Cerrar",
    prev: "Imagen anterior",
    next: "Imagen siguiente",
  },
  cs: {
    heroTitle: "Nasi Umelci",
    heroBody:
      "Poznejte zkusene tattoo profesionály ze SOUL. Kazdy umelec prinasi vlastni vizi a remeslnou kvalitu.",
    showWork: "Zobrazit Prace",
    hideWork: "Skryt Prace",
    ctaTitle: "Pripraveni na Sve Tetovani?",
    ctaBody: "Rezervujte konzultaci s jednim z nasich umelcu.",
    ctaButton: "Rezervovat Termin",
    close: "Zavrit",
    prev: "Predchozi obrazek",
    next: "Dalsi obrazek",
  },
  de: {
    heroTitle: "Unsere Artists",
    heroBody:
      "Lerne die erfahrenen Tattoo-Profis von SOUL kennen. Jeder Artist bringt eine eigene Vision und starke technische Umsetzung mit.",
    showWork: "Arbeiten Zeigen",
    hideWork: "Arbeiten Ausblenden",
    ctaTitle: "Bereit Fuer Dein Tattoo-Projekt?",
    ctaBody: "Buche heute eine Beratung mit einem unserer Artists.",
    ctaButton: "Termin Buchen",
    close: "Schliessen",
    prev: "Vorheriges Bild",
    next: "Naechstes Bild",
  },
}

export default function ArtistsPageClient() {
  const { locale } = useLanguage()
  const t = copy[locale]

  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{
    artist: Artist
    index: number
  } | null>(null)

  const handleToggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleOpenLightbox = (artist: Artist, index: number) => {
    setLightbox({ artist, index })
  }

  const handleLightboxNav = (direction: "next" | "prev") => {
    if (!lightbox) return
    const total = lightbox.artist.portfolio.length
    const nextIndex = direction === "next" ? (lightbox.index + 1) % total : (lightbox.index - 1 + total) % total
    setLightbox({ ...lightbox, index: nextIndex })
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <section
        className="relative py-16 px-6 border-b border-border overflow-hidden"
        style={{
          backgroundImage: "url('/assets/gallery/custom/IMG_0166.JPG')",
          backgroundPosition: "center 72%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/80" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-balance text-background">{t.heroTitle}</h1>
          <p className="text-lg text-background max-w-2xl">{t.heroBody}</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {artistsData.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                expanded={expandedId === artist.id}
                toggleLabel={t.showWork}
                hideLabel={t.hideWork}
                onToggle={handleToggle}
                onOpenLightbox={handleOpenLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">{t.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{t.ctaBody}</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full bg-background/90 rounded-sm border border-border shadow-lg">
            <button
              aria-label={t.close}
              className="absolute top-3 right-3 h-10 w-10 rounded-full border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md hover:shadow-foreground/10"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{lightbox.artist.name}</div>
                <div className="text-xs text-muted-foreground">
                  {lightbox.index + 1} / {lightbox.artist.portfolio.length}
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] bg-secondary overflow-hidden rounded-sm">
                <img
                  src={lightbox.artist.portfolio[lightbox.index]}
                  alt={`${lightbox.artist.name} work ${lightbox.index + 1}`}
                  className="w-full h-full object-contain"
                />
                <button
                  aria-label={t.prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10"
                  onClick={() => handleLightboxNav("prev")}
                >
                  ‹
                </button>
                <button
                  aria-label={t.next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10"
                  onClick={() => handleLightboxNav("next")}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
