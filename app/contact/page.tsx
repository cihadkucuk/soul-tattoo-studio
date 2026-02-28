"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  instagram: "",
  service: "tattoo",
  message: "",
  agreeTerms: false,
}

const MAP_EMBED_URL = "https://www.google.com/maps?q=Husitska%20677%2F15%2C%20Praha%203&z=17&output=embed"
const MAP_OPEN_URL = "https://www.google.com/maps/search/?api=1&query=Husitska%20677%2F15%2C%20Praha%203"
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]{1,119}$/u
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_E164_PATTERN = /^\+[1-9]\d{6,14}$/
const INSTAGRAM_PATTERN = /^(?:@?[A-Za-z0-9._]{1,30}|https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9._]+(?:\/)?(?:\?.*)?)$/i
const MESSAGE_BLOCKLIST_PATTERN = /<\s*\/?\s*script\b|javascript:/i
const NAME_LIVE_ALLOWED = /[^\p{L}\p{M}\s'.-]/gu
const PHONE_LIVE_ALLOWED = /[^+\d\s()-]/g
const INSTAGRAM_LIVE_ALLOWED = /[^A-Za-z0-9._@:/?=&-]/g

type ContactPayload = {
  name: string
  email: string
  phone: string
  instagram: string
  service: string
  message: string
}

type ErrorKey = "acceptTerms" | "invalidName" | "invalidEmail" | "invalidPhone" | "invalidInstagram" | "shortMessage" | "blockedMessage"

type ValidationResult = { ok: true; payload: ContactPayload } | { ok: false; errorKey: ErrorKey; field?: "message" }

type ContactCopy = {
  heroTitle: string
  heroBody: string
  bookTitle: string
  successTitle: string
  successBody: string
  labels: {
    name: string
    email: string
    phone: string
    instagram: string
    service: string
    message: string
    agree: string
    submit: string
    sending: string
    phoneHint: string
    instagramPlaceholder: string
    messagePlaceholder: string
  }
  serviceOptions: {
    tattoo: string
    piercing: string
    training: string
  }
  contactInfo: {
    title: string
    location: string
    openMaps: string
    hours: string
    hoursBody: string
    hoursSub: string
    contact: string
    followUs: string
  }
  faqTitle: string
  faqItems: { q: string; a: string }[]
  errors: Record<ErrorKey, string>
  fallbackError: string
}

const copy: Record<Locale, ContactCopy> = {
  en: {
    heroTitle: "Get in Touch",
    heroBody: "Schedule your appointment or ask us anything.",
    bookTitle: "Book an Appointment",
    successTitle: "Thank you!",
    successBody: "Your request has been sent. We will get back to you soon.",
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      instagram: "Instagram (optional)",
      service: "Service",
      message: "Message",
      agree: "I agree to the Terms of Service and Privacy Policy.",
      submit: "Submit",
      sending: "Sending...",
      phoneHint: "Use country code format, for example: +420605792545",
      instagramPlaceholder: "@username or instagram.com/username",
      messagePlaceholder: "Describe your idea for us - we can help you bring it to life",
    },
    serviceOptions: {
      tattoo: "Tattoo",
      piercing: "Piercing",
      training: "Training",
    },
    contactInfo: {
      title: "Contact Information",
      location: "Location",
      openMaps: "Open in Google Maps",
      hours: "Hours",
      hoursBody: "Monday - Sunday: 12 PM - 8 PM",
      hoursSub: "Other times are also possible - contact us to arrange a suitable time.",
      contact: "Contact",
      followUs: "Follow Us",
    },
    faqTitle: "Frequently Asked Questions - Booking & Consultation",
    faqItems: [
      { q: "Do you accept walk-ins?", a: "Yes, walk-ins are welcome. Booking ahead is recommended to secure your preferred artist." },
      { q: "What payment methods do you accept?", a: "We accept cash (CZK) and major credit cards (Visa, Mastercard). Deposits are required for bookings." },
      { q: "Can I book with a specific artist?", a: "Yes. Mention your preferred artist and we will do our best based on availability." },
      { q: "How far in advance should I book?", a: "We recommend booking 1-2 weeks in advance. Larger pieces may require earlier booking." },
      { q: "Do you offer free consultations?", a: "Yes, free consultations are available in person or by phone to discuss design, budget, and timing." },
      { q: "What is your cancellation policy?", a: "Cancellations must be made 48 hours in advance. Late cancellations may forfeit the deposit." },
      { q: "How long is a typical appointment?", a: "Sessions usually range from 1-4 hours depending on tattoo size and complexity." },
      { q: "Can I bring a friend?", a: "Yes, one support person is welcome to accompany you during your appointment." },
    ],
    errors: {
      acceptTerms: "Please accept the terms before submitting.",
      invalidName: "Name must be 2-120 characters and contain valid letters only.",
      invalidEmail: "Please provide a valid email address.",
      invalidPhone: "Please use phone with country code, e.g. +420605792545.",
      invalidInstagram: "Instagram must be @username or a valid instagram.com link.",
      shortMessage: "Message is too short. Please add at least 5 characters.",
      blockedMessage: "Message contains blocked content.",
    },
    fallbackError: "Unable to send your request right now.",
  },
  es: {
    heroTitle: "Contacto",
    heroBody: "Agenda tu cita o consultanos lo que necesites.",
    bookTitle: "Reservar una Cita",
    successTitle: "Gracias!",
    successBody: "Tu solicitud fue enviada. Te responderemos pronto.",
    labels: {
      name: "Nombre",
      email: "Email",
      phone: "Telefono",
      instagram: "Instagram (opcional)",
      service: "Servicio",
      message: "Mensaje",
      agree: "Acepto los Terminos de Servicio y la Politica de Privacidad.",
      submit: "Enviar",
      sending: "Enviando...",
      phoneHint: "Usa formato con prefijo de pais, por ejemplo: +420605792545",
      instagramPlaceholder: "@usuario o instagram.com/usuario",
      messagePlaceholder: "Describe tu idea y te ayudamos a convertirla en un proyecto real",
    },
    serviceOptions: {
      tattoo: "Tattoo",
      piercing: "Piercing",
      training: "Formacion",
    },
    contactInfo: {
      title: "Informacion de Contacto",
      location: "Ubicacion",
      openMaps: "Abrir en Google Maps",
      hours: "Horario",
      hoursBody: "Lunes - Domingo: 12:00 - 20:00",
      hoursSub: "Tambien podemos atender en otros horarios - contactanos para coordinar.",
      contact: "Contacto",
      followUs: "Siguenos",
    },
    faqTitle: "Preguntas Frecuentes - Reserva y Consulta",
    faqItems: [
      { q: "Aceptan clientes sin cita?", a: "Si, atendemos sin cita, pero recomendamos reservar para asegurar tu artista preferido." },
      { q: "Que metodos de pago aceptan?", a: "Aceptamos efectivo (CZK) y tarjetas principales (Visa, Mastercard). Para reservar se requiere deposito." },
      { q: "Puedo reservar con un artista especifico?", a: "Si. Dinos tu artista preferido y haremos lo posible segun disponibilidad." },
      { q: "Con cuanta antelacion debo reservar?", a: "Recomendamos reservar con 1-2 semanas de antelacion. Las piezas grandes pueden requerir mas tiempo." },
      { q: "Ofrecen consultas gratuitas?", a: "Si, ofrecemos consultas gratuitas en persona o por telefono para definir diseno, presupuesto y tiempos." },
      { q: "Cual es la politica de cancelacion?", a: "Las cancelaciones deben hacerse con 48 horas de antelacion. Las cancelaciones tardias pueden perder el deposito." },
      { q: "Cuanto dura una cita habitual?", a: "Las sesiones suelen durar entre 1 y 4 horas segun tamano y complejidad." },
      { q: "Puedo traer a un acompanante?", a: "Si, puedes venir con una persona de apoyo durante tu cita." },
    ],
    errors: {
      acceptTerms: "Debes aceptar los terminos antes de enviar.",
      invalidName: "El nombre debe tener entre 2 y 120 caracteres y contener letras validas.",
      invalidEmail: "Introduce un correo electronico valido.",
      invalidPhone: "Usa telefono con prefijo de pais, por ejemplo +420605792545.",
      invalidInstagram: "Instagram debe ser @usuario o un enlace valido de instagram.com.",
      shortMessage: "El mensaje es demasiado corto. Agrega al menos 5 caracteres.",
      blockedMessage: "El mensaje contiene contenido bloqueado.",
    },
    fallbackError: "No pudimos enviar tu solicitud en este momento.",
  },
  cs: {
    heroTitle: "Kontaktujte Nas",
    heroBody: "Rezervujte si termin nebo se nas zeptejte na cokoli.",
    bookTitle: "Rezervace Terminu",
    successTitle: "Dekujeme!",
    successBody: "Vase zadost byla odeslana. Brzy se vam ozveme.",
    labels: {
      name: "Jmeno",
      email: "Email",
      phone: "Telefon",
      instagram: "Instagram (volitelne)",
      service: "Sluzba",
      message: "Zprava",
      agree: "Souhlasim s Podminkami sluzby a Zasadami ochrany osobnich udaju.",
      submit: "Odeslat",
      sending: "Odesilani...",
      phoneHint: "Pouzijte format s predvolbou zeme, napriklad +420605792545",
      instagramPlaceholder: "@uzivatel nebo instagram.com/uzivatel",
      messagePlaceholder: "Popiste nam svoji predstavu a pomuzeme vam ji zrealizovat",
    },
    serviceOptions: {
      tattoo: "Tattoo",
      piercing: "Piercing",
      training: "Kurzy",
    },
    contactInfo: {
      title: "Kontaktni Informace",
      location: "Adresa",
      openMaps: "Otevrit v Google Maps",
      hours: "Oteviraci Doba",
      hoursBody: "Pondeli - Nedele: 12:00 - 20:00",
      hoursSub: "Jsou mozne i jine casy - napiste nam a domluvime vhodny termin.",
      contact: "Kontakt",
      followUs: "Sledujte Nas",
    },
    faqTitle: "Caste Dotazy - Rezervace a Konzultace",
    faqItems: [
      { q: "Prijimate i bez objednani?", a: "Ano, prijimame i walk-in navstevy. Pro jistotu preferovaneho umelce ale doporucujeme rezervaci." },
      { q: "Jake platebni metody prijimate?", a: "Prijimame hotovost (CZK) a hlavni platebni karty (Visa, Mastercard). Pro rezervaci je vyzadovana zaloha." },
      { q: "Mohu si vybrat konkretniho umelce?", a: "Ano. Uvedte preferovaneho umelce a podle dostupnosti vas k nemu priradime." },
      { q: "Jak dlouho dopredu mam rezervovat?", a: "Doporucujeme rezervaci 1-2 tydny predem. Vetsi projekty mohou vyzadovat vice casu." },
      { q: "Nabizite bezplatnou konzultaci?", a: "Ano, bezplatne konzultace jsou mozne osobne i telefonicky." },
      { q: "Jaka je storno politika?", a: "Zruseni terminu je potreba nejpozdeji 48 hodin predem. Pozdni zruseni muze znamenat ztratu zalohy." },
      { q: "Jak dlouho trva bezna navsteva?", a: "Sezeni obvykle trva 1-4 hodiny podle velikosti a slozitosti." },
      { q: "Mohu prijit s doprovodem?", a: "Ano, jedna doprovazejici osoba je vitana." },
    ],
    errors: {
      acceptTerms: "Pred odeslanim je potreba souhlasit s podminkami.",
      invalidName: "Jmeno musi mit 2-120 znaku a obsahovat platne znaky.",
      invalidEmail: "Zadejte platnou emailovou adresu.",
      invalidPhone: "Pouzijte telefon s predvolbou zeme, napr. +420605792545.",
      invalidInstagram: "Instagram musi byt @uzivatel nebo platny odkaz instagram.com.",
      shortMessage: "Zprava je prilis kratka. Pridejte alespon 5 znaku.",
      blockedMessage: "Zprava obsahuje blokovany obsah.",
    },
    fallbackError: "Vasi zadost se nyni nepodarilo odeslat.",
  },
  de: {
    heroTitle: "Kontakt",
    heroBody: "Vereinbare deinen Termin oder stell uns jede Frage.",
    bookTitle: "Termin Buchen",
    successTitle: "Danke!",
    successBody: "Deine Anfrage wurde gesendet. Wir melden uns bald bei dir.",
    labels: {
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      instagram: "Instagram (optional)",
      service: "Leistung",
      message: "Nachricht",
      agree: "Ich stimme den Nutzungsbedingungen und der Datenschutzerklaerung zu.",
      submit: "Senden",
      sending: "Wird gesendet...",
      phoneHint: "Bitte mit Laendervorwahl eingeben, z.B. +420605792545",
      instagramPlaceholder: "@username oder instagram.com/username",
      messagePlaceholder: "Beschreibe uns deine Idee - wir helfen bei der Umsetzung",
    },
    serviceOptions: {
      tattoo: "Tattoo",
      piercing: "Piercing",
      training: "Schulung",
    },
    contactInfo: {
      title: "Kontaktinformationen",
      location: "Standort",
      openMaps: "In Google Maps Oeffnen",
      hours: "Oeffnungszeiten",
      hoursBody: "Montag - Sonntag: 12:00 - 20:00",
      hoursSub: "Andere Zeiten sind ebenfalls moeglich - kontaktiere uns zur Abstimmung.",
      contact: "Kontakt",
      followUs: "Folge Uns",
    },
    faqTitle: "Hauefige Fragen - Buchung & Beratung",
    faqItems: [
      { q: "Nehmt ihr Walk-ins an?", a: "Ja, Walk-ins sind willkommen. Fuer deinen Wunsch-Artist empfehlen wir trotzdem eine Buchung." },
      { q: "Welche Zahlungsmethoden akzeptiert ihr?", a: "Wir akzeptieren Barzahlung (CZK) und gaengige Karten (Visa, Mastercard). Fuer Buchungen ist eine Anzahlung erforderlich." },
      { q: "Kann ich einen bestimmten Artist buchen?", a: "Ja. Nenne deinen bevorzugten Artist und wir pruefen die Verfuegbarkeit." },
      { q: "Wie weit im Voraus sollte ich buchen?", a: "Wir empfehlen 1-2 Wochen Vorlauf. Groessere Projekte koennen fruehere Planung erfordern." },
      { q: "Bietet ihr kostenlose Beratungen an?", a: "Ja, kostenlose Beratungen sind persoenlich oder telefonisch moeglich." },
      { q: "Wie ist eure Stornierungsregelung?", a: "Stornierungen muessen mindestens 48 Stunden vorher erfolgen. Spaete Absagen koennen zum Verlust der Anzahlung fuehren." },
      { q: "Wie lange dauert ein typischer Termin?", a: "Die meisten Sessions dauern je nach Groesse und Komplexitaet etwa 1-4 Stunden." },
      { q: "Kann ich eine Begleitperson mitbringen?", a: "Ja, eine Begleitperson ist willkommen." },
    ],
    errors: {
      acceptTerms: "Bitte akzeptiere die Bedingungen vor dem Senden.",
      invalidName: "Der Name muss 2-120 Zeichen haben und gueltige Buchstaben enthalten.",
      invalidEmail: "Bitte gib eine gueltige E-Mail-Adresse ein.",
      invalidPhone: "Bitte mit Laendervorwahl eingeben, z.B. +420605792545.",
      invalidInstagram: "Instagram muss @username oder ein gueltiger instagram.com-Link sein.",
      shortMessage: "Die Nachricht ist zu kurz. Bitte mindestens 5 Zeichen eingeben.",
      blockedMessage: "Die Nachricht enthaelt blockierte Inhalte.",
    },
    fallbackError: "Deine Anfrage konnte gerade nicht gesendet werden.",
  },
}

function normalizeInput(value: string, maxLength: number) {
  return value.trim().slice(0, maxLength)
}

function sanitizeFieldInput(name: string, value: string) {
  if (name === "name") {
    return value.replace(NAME_LIVE_ALLOWED, "").slice(0, 120)
  }

  if (name === "phone") {
    const cleaned = value.replace(PHONE_LIVE_ALLOWED, "")
    if (!cleaned) return ""
    if (cleaned.startsWith("+")) {
      return `+${cleaned.slice(1).replace(/\+/g, "")}`.slice(0, 20)
    }
    return cleaned.replace(/\+/g, "").slice(0, 20)
  }

  if (name === "instagram") {
    return value.replace(INSTAGRAM_LIVE_ALLOWED, "").slice(0, 120)
  }

  if (name === "message") {
    return value.slice(0, 3000)
  }

  return value
}

function validatePayload(formData: typeof INITIAL_FORM): ValidationResult {
  if (!formData.agreeTerms) return { ok: false, errorKey: "acceptTerms" }

  const payload: ContactPayload = {
    name: normalizeInput(formData.name, 120),
    email: normalizeInput(formData.email, 200),
    phone: normalizeInput(formData.phone, 60).replace(/[\s()-]/g, ""),
    instagram: normalizeInput(formData.instagram, 120),
    service: normalizeInput(formData.service, 80) || "tattoo",
    message: normalizeInput(formData.message, 3000),
  }

  if (!NAME_PATTERN.test(payload.name)) return { ok: false, errorKey: "invalidName" }
  if (!EMAIL_PATTERN.test(payload.email)) return { ok: false, errorKey: "invalidEmail" }
  if (!PHONE_E164_PATTERN.test(payload.phone)) return { ok: false, errorKey: "invalidPhone" }
  if (payload.instagram && !INSTAGRAM_PATTERN.test(payload.instagram)) return { ok: false, errorKey: "invalidInstagram" }
  if (payload.message && payload.message.length < 5) return { ok: false, field: "message", errorKey: "shortMessage" }
  if (payload.message && MESSAGE_BLOCKLIST_PATTERN.test(payload.message)) return { ok: false, field: "message", errorKey: "blockedMessage" }

  return { ok: true, payload }
}

export default function Contact() {
  const { locale } = useLanguage()
  const t = copy[locale]

  const [formData, setFormData] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [messageError, setMessageError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: (e.target as HTMLInputElement).checked,
      })
      return
    }

    setFormData({
      ...formData,
      [e.target.name]: sanitizeFieldInput(e.target.name, e.target.value),
    })
    if (e.target.name === "message" && messageError) {
      setMessageError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setMessageError(null)
    setSubmitted(false)
    setIsSubmitting(true)

    try {
      const validation = validatePayload(formData)
      if (!validation.ok) {
        const errorText = t.errors[validation.errorKey]
        if (validation.field === "message") {
          setMessageError(errorText)
        } else {
          setSubmitError(errorText)
        }
        setIsSubmitting(false)
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(validation.payload),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok || data?.success === false) {
        const errorMessage = data?.error ?? data?.message ?? t.fallbackError
        if (data?.field === "message") {
          setMessageError(errorMessage)
          setIsSubmitting(false)
          return
        }
        throw new Error(errorMessage)
      }

      setSubmitted(true)
      setFormData(INITIAL_FORM)
    } catch (error) {
      const message = error instanceof Error ? error.message : t.fallbackError
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section
        className="py-20 px-6 bg-secondary blurred-bg blurred-bg-work"
        style={{
          backgroundImage: "url('/assets/gallery/custom/IMG_0166.JPG')",
          backgroundPosition: "center 72%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6">{t.heroTitle}</h1>
          <p className="text-xl text-background md:text-muted-foreground">{t.heroBody}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light mb-8">{t.bookTitle}</h2>
            {submitted ? (
              <div className="bg-secondary p-8 text-center rounded-md border border-border">
                <p className="text-lg font-light mb-2">{t.successTitle}</p>
                <p className="text-muted-foreground">{t.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError ? (
                  <div className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                    {submitError}
                  </div>
                ) : null}

                <div>
                  <label className="block text-sm font-light mb-2">{t.labels.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light mb-2">{t.labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={200}
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light mb-2">{t.labels.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="^\+[1-9][0-9]{6,14}$"
                    title="+420605792545"
                    placeholder="+420605792545"
                    maxLength={16}
                    inputMode="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">{t.labels.phoneHint}</p>
                </div>

                <div>
                  <label className="block text-sm font-light mb-2">{t.labels.instagram}</label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder={t.labels.instagramPlaceholder}
                    maxLength={120}
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light mb-2">{t.labels.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  >
                    <option value="tattoo">{t.serviceOptions.tattoo}</option>
                    <option value="piercing">{t.serviceOptions.piercing}</option>
                    <option value="training">{t.serviceOptions.training}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light mb-2">{t.labels.message}</label>
                  {messageError ? (
                    <div className="mb-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-foreground">
                      {messageError}
                    </div>
                  ) : null}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.labels.messagePlaceholder}
                    rows={5}
                    maxLength={3000}
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-muted-foreground">
                    {t.labels.agree}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-md shadow-foreground/15 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/25 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? t.labels.sending : t.labels.submit}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-light mb-8">{t.contactInfo.title}</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-muted-foreground">{t.contactInfo.location}</h3>
                <p className="text-base leading-relaxed">
                  Husitska 677/15
                  <br />
                  Praha 3-Zizkov, 130 00
                  <br />
                  Czech Republic
                </p>
                <a
                  href={MAP_OPEN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm underline text-muted-foreground hover:text-foreground transition"
                >
                  {t.contactInfo.openMaps}
                </a>
              </div>

              <div className="overflow-hidden rounded-md border border-border bg-secondary">
                <iframe
                  title="SOUL Tattoo Atelier location"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full"
                />
              </div>

              <div>
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-muted-foreground">{t.contactInfo.hours}</h3>
                <p className="text-base leading-relaxed">
                  {t.contactInfo.hoursBody}
                  <br />
                  <span className="text-sm text-muted-foreground mt-2 block">{t.contactInfo.hoursSub}</span>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-muted-foreground">{t.contactInfo.contact}</h3>
                <p className="text-base leading-relaxed">
                  Phone: +420 605 792 545
                  <br />
                  Phone: +420 608 605 901
                  <br />
                  Email: soul.tattoo.atelier@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-sm font-light uppercase tracking-wider mb-2 text-muted-foreground">{t.contactInfo.followUs}</h3>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://instagram.com/soul.tattoo.atelier" className="text-muted-foreground hover:text-foreground transition">
                    Instagram
                  </a>
                  <a href="https://facebook.com/soultattooatelier" className="text-muted-foreground hover:text-foreground transition">
                    Facebook
                  </a>
                  <a href="https://tiktok.com/@soul.tattoo.atelier" className="text-muted-foreground hover:text-foreground transition">
                    TikTok
                  </a>
                  <a href="https://pinterest.com/soultattoo" className="text-muted-foreground hover:text-foreground transition">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">{t.faqTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.faqItems.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
