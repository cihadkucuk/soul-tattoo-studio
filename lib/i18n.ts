export const LOCALES = ["cs", "en", "es", "de"] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "cs"

export const localeLabels: Record<Locale, string> = {
  cs: "CS",
  en: "EN",
  es: "ES",
  de: "DE",
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale)
}
