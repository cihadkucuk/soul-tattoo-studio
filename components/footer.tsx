"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

type FooterLabels = {
  servicesTitle: string
  customTattoos: string
  piercing: string
  training: string
  merchAftercare: string
  contactTitle: string
  cityCountry: string
  hours: string
  followUs: string
  rights: string
}

const labels: Record<Locale, FooterLabels> = {
  en: {
    servicesTitle: "Services We Offer",
    customTattoos: "Custom Tattoos",
    piercing: "Piercing",
    training: "Tattoo/Piercing Training",
    merchAftercare: "Merch & Aftercare",
    contactTitle: "Contact Information",
    cityCountry: "Prague, Czech Republic",
    hours: "Hours: Monday-Sunday, 12 PM - 8 PM",
    followUs: "Follow Us",
    rights: "All rights reserved.",
  },
  es: {
    servicesTitle: "Servicios",
    customTattoos: "Tatuajes Personalizados",
    piercing: "Piercing",
    training: "Formacion Tattoo/Piercing",
    merchAftercare: "Merch y Aftercare",
    contactTitle: "Informacion de Contacto",
    cityCountry: "Praga, Republica Checa",
    hours: "Horario: Lunes-Domingo, 12:00 - 20:00",
    followUs: "Siguenos",
    rights: "Todos los derechos reservados.",
  },
  cs: {
    servicesTitle: "Nase Sluzby",
    customTattoos: "Tetovani na Miru",
    piercing: "Piercing",
    training: "Kurzy Tetovani/Piercing",
    merchAftercare: "Merch a Aftercare",
    contactTitle: "Kontaktni Informace",
    cityCountry: "Praha, Ceska Republika",
    hours: "Oteviraci Doba: Pondeli-Nedele, 12:00 - 20:00",
    followUs: "Sledujte Nas",
    rights: "Vsechna prava vyhrazena.",
  },
  de: {
    servicesTitle: "Unsere Leistungen",
    customTattoos: "Individuelle Tattoos",
    piercing: "Piercing",
    training: "Tattoo/Piercing Schulung",
    merchAftercare: "Merch & Aftercare",
    contactTitle: "Kontaktinformationen",
    cityCountry: "Prag, Tschechische Republik",
    hours: "Offnungszeiten: Montag-Sonntag, 12:00 - 20:00",
    followUs: "Folge Uns",
    rights: "Alle Rechte vorbehalten.",
  },
}

export function Footer() {
  const { locale } = useLanguage()
  const t = labels[locale]

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-light mb-4 uppercase tracking-wider">{t.servicesTitle}</h4>
            <ul className="space-y-2 text-sm font-light opacity-70">
              <li>
                <Link href="/tattoo-prague" className="hover:opacity-100 transition">
                  {t.customTattoos}
                </Link>
              </li>
              <li>
                <Link href="/piercing-prague" className="hover:opacity-100 transition">
                  {t.piercing}
                </Link>
              </li>
              <li>
                <Link href="/tattoo-courses-prague" className="hover:opacity-100 transition">
                  {t.training}
                </Link>
              </li>
              <li>
                <Link href="/merch" className="hover:opacity-100 transition">
                  {t.merchAftercare}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-light mb-4 uppercase tracking-wider">{t.contactTitle}</h4>
            <ul className="space-y-2 text-sm font-light opacity-70">
              <li>{t.cityCountry}</li>
              <li>
                <a href="mailto:soul.tattoo.atelier@gmail.com" className="hover:opacity-100 transition">
                  soul.tattoo.atelier@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+420608605901" className="hover:opacity-100 transition">
                  +420 608 605 901
                </a>
              </li>
              <li className="pt-2">{t.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-light mb-4 uppercase tracking-wider">{t.followUs}</h4>
            <ul className="space-y-2 text-sm font-light opacity-70">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm font-light opacity-70">
          <p>&copy; 2025 SOUL Tattoo Atelier. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
