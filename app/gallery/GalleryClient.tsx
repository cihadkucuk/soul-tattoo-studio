"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

export type GalleryItem = {
  src: string
  alt: string
}

export type GalleryCategory = {
  title: string
  items: GalleryItem[]
}

type GridProps = {
  category: GalleryCategory
  expanded: boolean
  showAllLabel: string
  showLessLabel: string
  localizedTitle: string
  onToggleExpand: (title: string) => void
  onOpen: (items: GalleryItem[], title: string, index: number) => void
}

function Grid({ category, expanded, showAllLabel, showLessLabel, localizedTitle, onToggleExpand, onOpen }: GridProps) {
  const displayItems = expanded ? category.items : category.items.slice(0, 6)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-light">{localizedTitle}</h2>
        <button
          className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
          onClick={() => onToggleExpand(category.title)}
        >
          {expanded ? showLessLabel : showAllLabel}
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayItems.map((item, idx) => (
          <button
            key={`${category.title}-${item.src}`}
            className="relative overflow-hidden rounded-sm border border-border bg-secondary group"
            onClick={() => onOpen(category.items, category.title, idx)}
            aria-label={`${localizedTitle} ${idx + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

type GalleryCopy = {
  heroTitle: string
  heroBody: string
  heroSub: string
  showAll: string
  showLess: string
  faqTitle: string
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  lightboxClose: string
  lightboxPrev: string
  lightboxNext: string
  categories: Record<string, string>
}

const copy: Record<Locale, GalleryCopy> = {
  en: {
    heroTitle: "Gallery",
    heroBody: "Explore our work across tattoos, piercings, training, merch, and more.",
    heroSub: "See more photos and details on Instagram - message us for specific requests.",
    showAll: "Show All",
    showLess: "Show Less",
    faqTitle: "Gallery FAQ",
    faq: [
      {
        q: "How do I view more tattoo designs?",
        a: "Our gallery displays selected work. For more designs and custom concepts, book a free consultation.",
      },
      {
        q: "Can I request a tattoo similar to one in the gallery?",
        a: "Yes. We adapt designs to suit your preferences, size, and placement.",
      },
      {
        q: "Are these works from one artist or multiple?",
        a: "This gallery showcases multiple artists; we will match you with the best fit for your style.",
      },
      {
        q: "Can I use these designs as inspiration?",
        a: "Absolutely. Bring references to your consultation; we will tailor a design to you.",
      },
    ],
    ctaTitle: "Inspired by Our Work?",
    ctaBody: "Schedule a free consultation to create your custom tattoo",
    ctaButton: "Get Your Tattoo",
    lightboxClose: "Close",
    lightboxPrev: "Previous",
    lightboxNext: "Next",
    categories: {
      "Tattoo Photos": "Tattoo Photos",
      "Piercing Photos": "Piercing Photos",
      "Training-Related Photos": "Training Photos",
      "Merch Photos": "Merch Photos",
      "Gift Certificate Photos": "Gift Certificate Photos",
    },
  },
  es: {
    heroTitle: "Galeria",
    heroBody: "Explora nuestros trabajos en tatuaje, piercing, formacion, merch y mas.",
    heroSub: "Mira mas fotos y detalles en Instagram; escribenos para solicitudes especificas.",
    showAll: "Mostrar Todo",
    showLess: "Mostrar Menos",
    faqTitle: "FAQ de la Galeria",
    faq: [
      {
        q: "Como puedo ver mas disenos de tatuaje?",
        a: "La galeria muestra trabajos seleccionados. Para mas disenos y conceptos personalizados, reserva una consulta gratuita.",
      },
      {
        q: "Puedo pedir un tatuaje similar a uno de la galeria?",
        a: "Si. Adaptamos el diseno a tus preferencias, tamano y ubicacion.",
      },
      {
        q: "Los trabajos son de un solo artista o varios?",
        a: "Esta galeria muestra varios artistas; te conectamos con el que mejor se adapte a tu estilo.",
      },
      {
        q: "Puedo usar estos disenos como inspiracion?",
        a: "Por supuesto. Trae referencias a tu consulta y adaptaremos un diseno para ti.",
      },
    ],
    ctaTitle: "Te Inspira Nuestro Trabajo?",
    ctaBody: "Agenda una consulta gratuita para crear tu tatuaje personalizado",
    ctaButton: "Hazte Tu Tattoo",
    lightboxClose: "Cerrar",
    lightboxPrev: "Anterior",
    lightboxNext: "Siguiente",
    categories: {
      "Tattoo Photos": "Fotos de Tattoo",
      "Piercing Photos": "Fotos de Piercing",
      "Training-Related Photos": "Fotos de Formacion",
      "Merch Photos": "Fotos de Merch",
      "Gift Certificate Photos": "Fotos de Vales Regalo",
    },
  },
  cs: {
    heroTitle: "Galerie",
    heroBody: "Prohlednete si nasi praci v oblasti tetovani, piercingu, kurzu a merche.",
    heroSub: "Vice fotek a detailu najdete na Instagramu - napiste nam pro konkretni poptavky.",
    showAll: "Zobrazit Vse",
    showLess: "Zobrazit Mene",
    faqTitle: "FAQ Galerie",
    faq: [
      {
        q: "Jak zobrazim vice navrhu tetovani?",
        a: "Galerie obsahuje vybrane prace. Pro vice navrhu a individualni koncepty si rezervujte konzultaci zdarma.",
      },
      {
        q: "Mohu chtit tetovani podobne tomu v galerii?",
        a: "Ano. Navrh upravime podle vasich preferenci, velikosti a umisteni.",
      },
      {
        q: "Jsou to prace jednoho umelce, nebo vice?",
        a: "Galerie ukazuje prace vice umelcu; pomuzeme vam vybrat nejvhodnejsiho pro vas styl.",
      },
      {
        q: "Mohu tyto navrhy pouzit jako inspiraci?",
        a: "Rozhodne. Prineste reference na konzultaci a vytvorime navrh na miru.",
      },
    ],
    ctaTitle: "Inspirovala Vas Nase Prace?",
    ctaBody: "Rezervujte si bezplatnou konzultaci pro vase tetovani na miru",
    ctaButton: "Chci Sve Tetovani",
    lightboxClose: "Zavrit",
    lightboxPrev: "Predchozi",
    lightboxNext: "Dalsi",
    categories: {
      "Tattoo Photos": "Fotky Tetovani",
      "Piercing Photos": "Fotky Piercingu",
      "Training-Related Photos": "Fotky z Kurzu",
      "Merch Photos": "Fotky Merche",
      "Gift Certificate Photos": "Fotky Darkovych Voucheru",
    },
  },
  de: {
    heroTitle: "Galerie",
    heroBody: "Entdecke unsere Arbeiten in Tattoo, Piercing, Schulung, Merch und mehr.",
    heroSub: "Mehr Fotos und Details findest du auf Instagram - schreib uns fuer konkrete Anfragen.",
    showAll: "Alles Anzeigen",
    showLess: "Weniger Anzeigen",
    faqTitle: "Galerie FAQ",
    faq: [
      {
        q: "Wie sehe ich mehr Tattoo-Designs?",
        a: "Unsere Galerie zeigt ausgewaehlte Arbeiten. Fuer mehr Designs und individuelle Konzepte buche eine kostenlose Beratung.",
      },
      {
        q: "Kann ich ein Tattoo aehnlich wie in der Galerie anfragen?",
        a: "Ja. Wir passen Designs an deine Vorstellungen, Groesse und Platzierung an.",
      },
      {
        q: "Sind die Arbeiten von einem Artist oder mehreren?",
        a: "Die Galerie zeigt Arbeiten mehrerer Artists; wir matchen dich mit dem passenden Stil.",
      },
      {
        q: "Kann ich diese Designs als Inspiration nutzen?",
        a: "Absolut. Bring Referenzen zur Beratung mit und wir gestalten dein individuelles Design.",
      },
    ],
    ctaTitle: "Von Unserer Arbeit Inspiriert?",
    ctaBody: "Buche eine kostenlose Beratung fuer dein individuelles Tattoo",
    ctaButton: "Dein Tattoo Starten",
    lightboxClose: "Schliessen",
    lightboxPrev: "Zurueck",
    lightboxNext: "Weiter",
    categories: {
      "Tattoo Photos": "Tattoo Fotos",
      "Piercing Photos": "Piercing Fotos",
      "Training-Related Photos": "Schulungsfotos",
      "Merch Photos": "Merch Fotos",
      "Gift Certificate Photos": "Gutscheinfotos",
    },
  },
}

export default function GalleryClient({ categories }: { categories: GalleryCategory[] }) {
  const { locale } = useLanguage()
  const t = copy[locale]

  const [lightbox, setLightbox] = useState<{
    title: string
    items: GalleryItem[]
    index: number
  } | null>(null)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const openLightbox = (items: GalleryItem[], title: string, index: number) => {
    setLightbox({ items, title, index })
  }

  const closeLightbox = () => setLightbox(null)

  const navigate = (direction: "next" | "prev") => {
    if (!lightbox) return
    const { items, index } = lightbox
    const nextIndex = direction === "next" ? (index + 1) % items.length : (index - 1 + items.length) % items.length
    setLightbox({ ...lightbox, index: nextIndex })
  }

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const translateCategoryTitle = (title: string) => t.categories[title] ?? title

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
          <p className="mt-4 text-sm text-background">{t.heroSub}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((category) => (
            <Grid
              key={category.title}
              category={category}
              expanded={!!expanded[category.title]}
              showAllLabel={t.showAll}
              showLessLabel={t.showLess}
              localizedTitle={translateCategoryTitle(category.title)}
              onToggleExpand={toggleExpand}
              onOpen={openLightbox}
            />
          ))}

          <div>
            <h2 className="text-3xl font-light mb-8">{t.faqTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full bg-background/95 border border-border rounded-sm shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                {translateCategoryTitle(lightbox.title)} - {lightbox.index + 1} / {lightbox.items.length}
              </div>
              <button
                className="h-9 w-9 rounded-full border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md hover:shadow-foreground/10"
                onClick={closeLightbox}
                aria-label={t.lightboxClose}
              >
                x
              </button>
            </div>
            <div className="relative bg-secondary aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.items[lightbox.index].src}
                alt={lightbox.items[lightbox.index].alt}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10"
                onClick={() => navigate("prev")}
                aria-label={t.lightboxPrev}
              >
                {"<"}
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10"
                onClick={() => navigate("next")}
                aria-label={t.lightboxNext}
              >
                {">"}
              </button>
            </div>
            <div className="px-4 py-3 text-sm text-muted-foreground border-t border-border">
              {lightbox.items[lightbox.index].alt}
            </div>
          </div>
        </div>
      )}

      <section className="py-16 px-6 bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-4">{t.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6">{t.ctaBody}</p>
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

