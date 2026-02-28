"use client"

import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE

  const stored = window.localStorage.getItem("locale")
  if (stored && isLocale(stored)) return stored

  const htmlLocale = document.documentElement.dataset.locale || document.documentElement.lang
  if (htmlLocale && isLocale(htmlLocale)) return htmlLocale

  const browserLocale = (navigator.language || "").slice(0, 2).toLowerCase()
  if (browserLocale && isLocale(browserLocale)) return browserLocale

  return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const initial = getInitialLocale()
    setLocaleState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dataset.locale = locale
    window.localStorage.setItem("locale", locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

