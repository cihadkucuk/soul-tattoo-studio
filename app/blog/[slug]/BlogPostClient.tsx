"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"
import type { BlogPost } from "../posts"

type BlogPostCopy = {
  back: string
  planningTitle: string
  planningBody: string
  bookConsultation: string
  viewGallery: string
}

const copy: Record<Locale, BlogPostCopy> = {
  en: {
    back: "Back to Blog",
    planningTitle: "Planning Your Next Tattoo?",
    planningBody: "Book a consultation with our team and we will help you shape the concept, placement, and style.",
    bookConsultation: "Book Consultation",
    viewGallery: "View Gallery",
  },
  es: {
    back: "Volver al Blog",
    planningTitle: "Planeando Tu Proximo Tatuaje?",
    planningBody: "Reserva una consulta con nuestro equipo y te ayudaremos con concepto, ubicacion y estilo.",
    bookConsultation: "Reservar Consulta",
    viewGallery: "Ver Galeria",
  },
  cs: {
    back: "Zpet na Blog",
    planningTitle: "Planujete Dalsi Tetovani?",
    planningBody: "Rezervujte konzultaci s nasim tymem a pomuzeme vam s konceptem, umistenim i stylem.",
    bookConsultation: "Rezervovat Konzultaci",
    viewGallery: "Zobrazit Galerii",
  },
  de: {
    back: "Zurueck zum Blog",
    planningTitle: "Planst Du Dein Naechstes Tattoo?",
    planningBody: "Buche eine Beratung mit unserem Team und wir helfen dir bei Konzept, Platzierung und Stil.",
    bookConsultation: "Beratung Buchen",
    viewGallery: "Galerie Ansehen",
  },
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const { locale } = useLanguage()
  const t = copy[locale]

  return (
    <article className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden bg-secondary px-6 py-20"
        style={{
          backgroundImage: "url('/assets/gallery/custom/IMG_0166.JPG')",
          backgroundPosition: "center 72%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/80" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm font-light uppercase tracking-wider text-background/90 transition hover:text-background"
          >
            {t.back}
          </Link>
          <div className="mb-4 flex gap-2 text-xs text-background/85">
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-light text-background md:text-6xl">{post.title[locale]}</h1>
          <p className="mt-5 max-w-2xl text-lg text-background/90">{post.excerpt[locale]}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/90 md:text-lg">
          {post.content[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-secondary/50 p-8">
          <h2 className="mb-3 text-2xl font-light">{t.planningTitle}</h2>
          <p className="mb-6 text-muted-foreground">{t.planningBody}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-light uppercase tracking-wider text-background transition-all hover:-translate-y-0.5 hover:bg-muted-foreground"
            >
              {t.bookConsultation}
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-foreground/70 px-6 py-3 text-sm font-light uppercase tracking-wider text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary/70"
            >
              {t.viewGallery}
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

