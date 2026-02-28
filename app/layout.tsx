import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SOUL Tattoo Atelier | Professional Tattoo Studio Prague",
  description:
    "Professional tattoo studio in Prague. Custom tattoos, cover-ups, fine-line designs, piercing, and tattoo training. Meet our experienced artists.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "SOUL Tattoo Atelier",
              image: "https://soultattooatelier.com/logo.jpg",
              "@id": "https://soultattooatelier.com",
              url: "https://soultattooatelier.com",
              telephone: "+420605792545",
              priceRange: "3000-8000 CZK",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Husitská 677/15",
                addressLocality: "Praha 3-Žižkov",
                postalCode: "130 00",
                addressCountry: "CZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.0875,
                longitude: 14.4513,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "11:00",
                  closes: "19:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "147",
              },
              sameAs: ["https://instagram.com/soul.tattoo.atelier", "https://facebook.com/soultattooatelier"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tattoo & Piercing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Tattoo Design",
                      description: "Unique custom tattoo designs created by professional artists",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Piercing Services",
                      description: "Professional body and ear piercing in sterile environment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tattoo Training",
                      description: "Professional tattoo artist training programs",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
