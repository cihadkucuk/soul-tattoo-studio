"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { localeLabels, type Locale } from "@/lib/i18n"

type LabelSet = {
  home: string
  tattoos: string
  piercing: string
  training: string
  merch: string
  artists: string
  gallery: string
  blog: string
  book: string
  bookNow: string
}

const labels: Record<Locale, LabelSet> = {
  en: {
    home: "Home",
    tattoos: "Tattoos",
    piercing: "Piercing",
    training: "Training",
    merch: "Merch",
    artists: "Artists",
    gallery: "Gallery",
    blog: "Blog",
    book: "Book",
    bookNow: "Book Now",
  },
  es: {
    home: "Inicio",
    tattoos: "Tatuajes",
    piercing: "Piercing",
    training: "Formacion",
    merch: "Merch",
    artists: "Artistas",
    gallery: "Galeria",
    blog: "Blog",
    book: "Reservar",
    bookNow: "Reservar Ahora",
  },
  cs: {
    home: "Domu",
    tattoos: "Tetovani",
    piercing: "Piercing",
    training: "Kurzy",
    merch: "Merch",
    artists: "Umelci",
    gallery: "Galerie",
    blog: "Blog",
    book: "Rezervace",
    bookNow: "Rezervovat",
  },
  de: {
    home: "Start",
    tattoos: "Tattoos",
    piercing: "Piercing",
    training: "Schulung",
    merch: "Merch",
    artists: "Artists",
    gallery: "Galerie",
    blog: "Blog",
    book: "Buchen",
    bookNow: "Jetzt Buchen",
  },
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale } = useLanguage()
  const t = labels[locale]

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/")

  const navItems = [
    { href: "/", label: t.home },
    { href: "/tattoo-prague", label: t.tattoos },
    { href: "/piercing-prague", label: t.piercing },
    { href: "/tattoo-courses-prague", label: t.training },
    { href: "/merch", label: t.merch },
    { href: "/artists", label: t.artists },
    { href: "/gallery", label: t.gallery },
    { href: "/blog", label: t.blog },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-light tracking-[0.2em] text-foreground hover:text-muted-foreground transition"
        >
          SOUL
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex items-center gap-1 rounded-full border border-border px-1 py-1">
            {(Object.keys(localeLabels) as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                className={`rounded-full px-2 py-1 text-[10px] font-light uppercase tracking-wider transition ${
                  locale === code ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setLocale(code)}
              >
                {localeLabels[code]}
              </button>
            ))}
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-light uppercase tracking-wider transition ${
                isActive(item.href)
                  ? "text-foreground border-b border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2 rounded-full bg-foreground text-background text-xs font-light uppercase tracking-wider shadow-md shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            {t.book}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-3">
            <div className="mb-2 flex items-center gap-1 rounded-full border border-border px-1 py-1 w-fit">
              {(Object.keys(localeLabels) as Locale[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`rounded-full px-2 py-1 text-[10px] font-light uppercase tracking-wider transition ${
                    locale === code ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setLocale(code)}
                >
                  {localeLabels[code]}
                </button>
              ))}
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-xs font-light uppercase tracking-wider transition ${
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-6 py-2 rounded-full bg-foreground text-background text-xs font-light uppercase tracking-wider text-center shadow-md shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
              onClick={() => setIsOpen(false)}
            >
              {t.bookNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
