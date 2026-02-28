"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"
import { blogPosts } from "./posts"

type BlogPageCopy = {
  heroTitle: string
  heroBody: string
  readMore: string
  faqTitle: string
  faq: { q: string; a: string }[]
  stayUpdated: string
  stayUpdatedBody: string
}

const copy: Record<Locale, BlogPageCopy> = {
  en: {
    heroTitle: "Blog",
    heroBody: "Tattoo tips, insights, and stories from industry experts",
    readMore: "Read More ->",
    faqTitle: "Blog FAQ",
    faq: [
      {
        q: "How often do you post new content?",
        a: "We publish new blog posts regularly with tattoo tips, aftercare advice, and artist insights to help you make informed decisions.",
      },
      {
        q: "Where can I find tattoo aftercare information?",
        a: "Our blog features comprehensive aftercare guides. Additionally, all clients receive detailed written instructions with their tattoo.",
      },
      {
        q: "Can I ask questions in the comments?",
        a: "Our team actively engages with reader questions. You can also contact us directly for personalized tattoo advice and consultations.",
      },
      {
        q: "Do you have tattoo design tips?",
        a: "Yes! Our blog covers design selection, placement considerations, and how to work with artists to bring your vision to life.",
      },
    ],
    stayUpdated: "Stay Updated with Tattoo Tips",
    stayUpdatedBody: "Follow us on social media and subscribe for the latest tattoo insights and studio updates",
  },
  es: {
    heroTitle: "Blog",
    heroBody: "Consejos, ideas e historias sobre tatuajes de expertos del sector",
    readMore: "Leer Mas ->",
    faqTitle: "FAQ del Blog",
    faq: [
      {
        q: "Con que frecuencia publican contenido nuevo?",
        a: "Publicamos entradas con regularidad sobre tatuajes, aftercare e ideas de artistas para ayudarte a decidir mejor.",
      },
      {
        q: "Donde encuentro informacion de aftercare?",
        a: "En el blog encontraras guias completas de cuidado. Ademas, todos los clientes reciben instrucciones detalladas por escrito.",
      },
      {
        q: "Puedo hacer preguntas en comentarios?",
        a: "Nuestro equipo responde preguntas de lectores. Tambien puedes contactarnos directamente para asesoria personalizada.",
      },
      {
        q: "Tienen consejos para elegir diseno?",
        a: "Si. Cubrimos eleccion de diseno, ubicacion y como trabajar con artistas para llevar tu idea a la piel.",
      },
    ],
    stayUpdated: "Mantente al Dia con Consejos Tattoo",
    stayUpdatedBody: "Siguenos en redes para novedades, tips y actualizaciones del estudio",
  },
  cs: {
    heroTitle: "Blog",
    heroBody: "Tipy, postrehy a pribehy ze sveta tetovani od zkusenych profesionalu",
    readMore: "Cist Dale ->",
    faqTitle: "FAQ Blogu",
    faq: [
      {
        q: "Jak casto pridavate novy obsah?",
        a: "Pravidelne publikujeme clanky s tipy na tetovani, aftercare a postrehy od umelcu.",
      },
      {
        q: "Kde najdu informace o peci po tetovani?",
        a: "Na blogu najdete podrobne navody. Kazdy klient navic dostane pisemne instrukce po tetovani.",
      },
      {
        q: "Mohu se ptat v komentarich?",
        a: "Nase tym aktivne odpovida na dotazy. Muzete nas take kontaktovat naprikmo pro osobni konzultaci.",
      },
      {
        q: "Mate tipy k navrhu tetovani?",
        a: "Ano. Venujeme se vyberu navrhu, umisteni a spolupraci s tatourem od prvniho napadu po realizaci.",
      },
    ],
    stayUpdated: "Sledujte Nove Tattoo Tipy",
    stayUpdatedBody: "Sledujte nase socialni site pro novinky a aktualizace ze studia",
  },
  de: {
    heroTitle: "Blog",
    heroBody: "Tattoo-Tipps, Insights und Stories von erfahrenen Branchenprofis",
    readMore: "Mehr Lesen ->",
    faqTitle: "Blog FAQ",
    faq: [
      {
        q: "Wie oft veroeffentlicht ihr neue Inhalte?",
        a: "Wir veroeffentlichen regelmaessig Beitraege mit Tattoo-Tipps, Aftercare-Hinweisen und Artist-Insights.",
      },
      {
        q: "Wo finde ich Infos zur Tattoo-Aftercare?",
        a: "Unser Blog bietet umfassende Aftercare-Guides. Zusaetzlich erhaelt jeder Kunde schriftliche Pflegehinweise.",
      },
      {
        q: "Kann ich Fragen in den Kommentaren stellen?",
        a: "Unser Team beantwortet Leserfragen aktiv. Fuer persoenliche Beratung kannst du uns auch direkt kontaktieren.",
      },
      {
        q: "Habt ihr Tipps zur Designwahl?",
        a: "Ja. Wir behandeln Designauswahl, Platzierung und die Zusammenarbeit mit Artists vom Konzept bis zur Umsetzung.",
      },
    ],
    stayUpdated: "Bleib Up to Date mit Tattoo-Tipps",
    stayUpdatedBody: "Folge uns auf Social Media fuer neue Insights und Studio-Updates",
  },
}

export default function BlogPageClient() {
  const { locale } = useLanguage()
  const t = copy[locale]

  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="mb-6 text-5xl font-light text-background md:text-6xl">{t.heroTitle}</h1>
          <p className="text-xl text-background">{t.heroBody}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-border pb-8 last:border-b-0">
                <div className="mb-2 flex gap-2 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mb-3 text-2xl font-light transition hover:text-muted-foreground">
                  <Link href={`/blog/${post.slug}`}>{post.title[locale]}</Link>
                </h2>
                <p className="mb-4 text-base text-muted-foreground">{post.excerpt[locale]}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-light uppercase tracking-wider transition hover:text-muted-foreground"
                >
                  {t.readMore}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="mb-8 text-3xl font-light">{t.faqTitle}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {t.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="mb-2 text-lg font-semibold">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-light">{t.stayUpdated}</h2>
          <p className="mb-6 text-muted-foreground">{t.stayUpdatedBody}</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-light uppercase tracking-wider text-background shadow-md shadow-foreground/15 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/25"
            >
              Instagram
            </a>
            <a
              href="#"
              className="rounded-full border border-foreground/70 px-6 py-3 text-sm font-light uppercase tracking-wider text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary/70"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

