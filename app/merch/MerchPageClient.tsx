"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n"

type Product = {
  id: number
  name: string
  category: string
  price: string
  description: string
  image: string
  gallery?: string[]
}

const products: Product[] = [
  {
    id: 3,
    name: "Cleansing Foam",
    category: "Aftercare",
    price: "CZK 400",
    description: "Gentle cleansing foam to keep new tattoos clean.",
    image: "/assets/merch/products/tattoo-wash-1.jpg",
    gallery: ["/assets/merch/products/tattoo-wash-1.jpg", "/assets/merch/products/tattoo-wash-2.JPG"],
  },
  {
    id: 4,
    name: "Artist Designed T-Shirts",
    category: "SOUL T-Shirts",
    price: "CZK 1,000",
    description: "Limited artist-designed tees with the SOUL aesthetic.",
    image: "/assets/merch/products/artist-desing-tshirt-1.JPG",
    gallery: [
      "/assets/merch/products/artist-desing-tshirt-1.JPG",
      "/assets/merch/products/artist-desing-tshirt-2.JPG",
      "/assets/merch/products/artist-desing-tshirt-3.JPG",
    ],
  },
  {
    id: 7,
    name: "Female T-Shirts",
    category: "SOUL T-Shirts",
    price: "CZK 1,000",
    description: "SOUL tees tailored for a female fit.",
    image: "/assets/merch/products/shirt-female-1.JPG",
    gallery: [
      "/assets/merch/products/shirt-female-1.JPG",
      "/assets/merch/products/shirt-female-2.JPG",
    ],
  },
  {
    id: 8,
    name: "Male T-Shirts",
    category: "SOUL T-Shirts",
    price: "CZK 1,000",
    description: "SOUL tees in a classic male cut.",
    image: "/assets/merch/products/shirt-male-1.JPG",
    gallery: [
      "/assets/merch/products/shirt-male-1.JPG",
      "/assets/merch/products/shirt-male-2.JPG",
      "/assets/merch/products/shirt-male-3.JPG",
      "/assets/merch/products/shirt-male-4.JPG",
    ],
  },
  {
    id: 5,
    name: "SOUL Cap",
    category: "SOUL Cap",
    price: "CZK 700",
    description: "Classic black cap with embroidered SOUL branding.",
    image: "/assets/merch/products/soul-cap-1.JPG",
  },
  {
    id: 6,
    name: "Piercing Jewelry",
    category: "Accessories",
    price: "CZK 350-400",
    description: "Studio-grade piercing jewelry options.",
    image: "/assets/merch/products/piercing-1.JPG",
    gallery: [
      "/assets/merch/products/piercing-1.JPG",
      "/assets/merch/products/piercing-2.JPG",
      "/assets/merch/products/piercing-3.jpeg",
    ],
  },
  {
    id: 0,
    name: "Gift Voucher",
    category: "Gift Certificates",
    price: "Any amount",
    description: "Gift vouchers valid for tattoos, piercings, or training sessions.",
    image: "/assets/gallery/custom/9C613B89-D3CA-4CDB-8952-9BD8A3C2365D.JPG",
    gallery: [
      "/assets/gallery/custom/9C613B89-D3CA-4CDB-8952-9BD8A3C2365D.JPG",
      "/assets/merch/gift-certificates/voucher-en-1.JPG",
      "/assets/merch/gift-certificates/voucher-en-2.JPG",
      "/assets/merch/gift-certificates/voucher-cz-1.JPG",
      "/assets/merch/gift-certificates/voucher-cz-2.JPG",
    ],
  },
  {
    id: 1,
    name: "Small Aftercare Cream",
    category: "Aftercare",
    price: "CZK 50",
    description: "Pocket-size cream for fresh tattoos.",
    image: "/assets/merch/products/cream-9ml.JPG",
  },
  {
    id: 2,
    name: "Large Aftercare Cream",
    category: "Aftercare",
    price: "CZK 350",
    description: "Full-size cream for ongoing healing and hydration.",
    image: "/assets/merch/products/cream-50ml.JPG",
  },
]

type MerchCopy = {
  heroTitle: string
  heroBody: string
  heroSub: string
  allProducts: string
  aboutTitle: string
  about: { title: string; body: string }[]
  close: string
  prev: string
  next: string
  categoryLabels: Record<string, string>
}

const copy: Record<Locale, MerchCopy> = {
  en: {
    heroTitle: "SOUL Merch",
    heroBody: "Premium aftercare products, branded apparel, and jewelry. Everything you need to care for your tattoo and represent SOUL.",
    heroSub: "All products can be purchased in the studio, or you can message us on Instagram if you want us to ship an item.",
    allProducts: "All Products",
    aboutTitle: "About SOUL Merch",
    about: [
      {
        title: "Quality Aftercare",
        body: "All our aftercare products are dermatologist-tested and formulated for tattoo healing and maintenance.",
      },
      {
        title: "Premium Materials",
        body: "We use only the highest-quality materials for our T-shirts, caps, jewelry piercings, and other accessories.",
      },
      {
        title: "Studio-Approved",
        body: "Every product is tested and approved by our artists to ensure it meets our high standards.",
      },
    ],
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    categoryLabels: {
      "Gift Certificates": "Gift Certificates",
      Aftercare: "Aftercare",
      "SOUL T-Shirts": "SOUL T-Shirts",
      "SOUL Cap": "SOUL Cap",
      Accessories: "Accessories",
    },
  },
  es: {
    heroTitle: "SOUL Merch",
    heroBody: "Aftercare premium, ropa de marca y joyeria. Todo lo necesario para cuidar tu tatuaje y representar SOUL.",
    heroSub: "Puedes comprar todo en el estudio o escribirnos por Instagram si quieres envio.",
    allProducts: "Todos los Productos",
    aboutTitle: "Sobre SOUL Merch",
    about: [
      { title: "Aftercare de Calidad", body: "Nuestros productos de aftercare estan formulados para una cicatrizacion segura y eficaz." },
      { title: "Materiales Premium", body: "Usamos materiales de alta calidad en camisetas, gorras, joyeria y accesorios." },
      { title: "Aprobado por el Estudio", body: "Cada producto esta probado y aprobado por nuestros artistas." },
    ],
    close: "Cerrar",
    prev: "Imagen anterior",
    next: "Imagen siguiente",
    categoryLabels: {
      "Gift Certificates": "Vales Regalo",
      Aftercare: "Aftercare",
      "SOUL T-Shirts": "SOUL Camisetas",
      "SOUL Cap": "SOUL Gorra",
      Accessories: "Accesorios",
    },
  },
  cs: {
    heroTitle: "SOUL Merch",
    heroBody: "Premium aftercare, obleceni a sperky. Vse, co potrebujete pro peci o tetovani i styl SOUL.",
    heroSub: "Produkty lze koupit ve studiu nebo nam napsat na Instagram kvuli zaslani.",
    allProducts: "Vsechny Produkty",
    aboutTitle: "O SOUL Merch",
    about: [
      { title: "Kvalitni Aftercare", body: "Aftercare produkty jsou testovane a vhodne pro hojeni i dlouhodobou peci." },
      { title: "Premium Materialy", body: "Pouzivame kvalitni materialy pro tricka, cepice, sperky a doplnky." },
      { title: "Schvaleno Studiem", body: "Kazdy produkt je otestovan a schvalen nasimi umelci." },
    ],
    close: "Zavrit",
    prev: "Predchozi obrazek",
    next: "Dalsi obrazek",
    categoryLabels: {
      "Gift Certificates": "Darkove Vouchery",
      Aftercare: "Aftercare",
      "SOUL T-Shirts": "SOUL Tricka",
      "SOUL Cap": "SOUL Cepice",
      Accessories: "Doplnky",
    },
  },
  de: {
    heroTitle: "SOUL Merch",
    heroBody: "Premium Aftercare-Produkte, Apparel und Schmuck. Alles, was du fuer Pflege und SOUL-Style brauchst.",
    heroSub: "Alle Produkte gibt es im Studio oder per Instagram-Nachricht mit Versandoption.",
    allProducts: "Alle Produkte",
    aboutTitle: "Ueber SOUL Merch",
    about: [
      { title: "Qualitaets-Aftercare", body: "Unsere Aftercare-Produkte sind dermatologisch getestet und fuer Tattoo-Heilung entwickelt." },
      { title: "Premium Materialien", body: "Wir nutzen hochwertige Materialien fuer Shirts, Caps, Schmuck und Accessoires." },
      { title: "Studio-geprueft", body: "Jedes Produkt wird von unseren Artists getestet und freigegeben." },
    ],
    close: "Schliessen",
    prev: "Vorheriges Bild",
    next: "Naechstes Bild",
    categoryLabels: {
      "Gift Certificates": "Gutscheine",
      Aftercare: "Aftercare",
      "SOUL T-Shirts": "SOUL T-Shirts",
      "SOUL Cap": "SOUL Cap",
      Accessories: "Accessoires",
    },
  },
}

export default function MerchPageClient() {
  const { locale } = useLanguage()
  const t = copy[locale]
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [galleryState, setGalleryState] = useState<Record<number, number>>({})
  const [lightbox, setLightbox] = useState<{ product: Product; index: number } | null>(null)

  const setNextImage = (id: number, total: number) => {
    setGalleryState((prev) => {
      const current = prev[id] ?? 0
      const next = Math.min(current + 1, total - 1)
      return { ...prev, [id]: next }
    })
  }

  const setPrevImage = (id: number, total: number) => {
    setGalleryState((prev) => {
      const current = prev[id] ?? 0
      const prevIdx = Math.max(current - 1, 0)
      return { ...prev, [id]: prevIdx }
    })
  }

  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products
  const categories = ["Gift Certificates", "Aftercare", "SOUL T-Shirts", "SOUL Cap", "Accessories"]

  const imageLabel = (src: string) => {
    const parts = src.split("/")
    const filename = parts[parts.length - 1] || ""
    const base = filename.replace(/\.[^.]+$/, "")
    return base.replace(/-\d+$/, "").replace(/-/g, " ")
  }

  const closeLightbox = () => setLightbox(null)

  const nextLightbox = () => {
    if (!lightbox) return
    const images = lightbox.product.gallery && lightbox.product.gallery.length > 0 ? lightbox.product.gallery : [lightbox.product.image]
    const nextIndex = Math.min(lightbox.index + 1, images.length - 1)
    setLightbox({ ...lightbox, index: nextIndex })
  }

  const prevLightbox = () => {
    if (!lightbox) return
    const images = lightbox.product.gallery && lightbox.product.gallery.length > 0 ? lightbox.product.gallery : [lightbox.product.image]
    const prevIndex = Math.max(lightbox.index - 1, 0)
    setLightbox({ ...lightbox, index: prevIndex })
  }

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
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-background">{t.heroTitle}</h1>
          <p className="text-xl text-background max-w-2xl">{t.heroBody}</p>
          <p className="mt-4 text-sm text-background max-w-2xl">{t.heroSub}</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-md px-6 py-2 text-sm font-light uppercase tracking-wider transition ${
                selectedCategory === null
                  ? "bg-foreground text-background"
                  : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {t.allProducts}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-md px-6 py-2 text-sm font-light uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? "bg-foreground text-background"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {t.categoryLabels[cat] ?? cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const hasGallery = product.gallery && product.gallery.length > 0
              const activeIndex = hasGallery ? galleryState[product.id] ?? 0 : 0
              const activeSrc = hasGallery ? product.gallery![activeIndex] : product.image
              const imageFit = product.category === "Gift Certificates" ? "object-contain p-3" : "object-cover"

              return (
                <div key={`${product.id}-${product.name}`} className="group">
                  <div
                    role="button"
                    tabIndex={0}
                    className="aspect-square w-full bg-secondary mb-6 overflow-hidden flex items-center justify-center relative rounded-md"
                    onClick={() => setLightbox({ product, index: activeIndex })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setLightbox({ product, index: activeIndex })
                      }
                    }}
                    aria-label={`${product.name} images`}
                  >
                    <img
                      src={activeSrc || "/placeholder.svg"}
                      alt={product.name}
                      className={`w-full h-full ${imageFit}`}
                    />
                    {hasGallery && product.gallery!.length > 1 && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-between px-3">
                          <button
                            aria-label={t.prev}
                            className="h-8 w-8 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10 disabled:opacity-40 disabled:cursor-not-allowed"
                            onClick={(e) => {
                              e.stopPropagation()
                              setPrevImage(product.id, product.gallery!.length)
                            }}
                            disabled={activeIndex === 0}
                          >
                            {"<"}
                          </button>
                          <button
                            aria-label={t.next}
                            className="h-8 w-8 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10 disabled:opacity-40 disabled:cursor-not-allowed"
                            onClick={(e) => {
                              e.stopPropagation()
                              setNextImage(product.id, product.gallery!.length)
                            }}
                            disabled={activeIndex === product.gallery!.length - 1}
                          >
                            {">"}
                          </button>
                        </div>
                        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-1 bg-background/85 text-foreground border border-border rounded-md">
                          {activeIndex + 1} / {product.gallery!.length}
                        </div>
                        <div className="absolute left-3 bottom-3 text-[10px] px-2 py-1 bg-background/85 text-foreground border border-border rounded-md capitalize">
                          {imageLabel(activeSrc)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-xs font-light uppercase tracking-wider text-muted-foreground mb-2">
                    {t.categoryLabels[product.category] ?? product.category}
                  </div>
                  <h3 className="text-lg font-light mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="text-lg font-light">{product.price}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-12 text-center">{t.aboutTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-light mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full bg-background/90 border border-border rounded-md shadow-lg">
            <button
              aria-label={t.close}
              className="absolute top-3 right-3 h-10 w-10 rounded-full border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md hover:shadow-foreground/10"
              onClick={closeLightbox}
            >
              x
            </button>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                <span>{lightbox.product.name}</span>
                <span>
                  {lightbox.index + 1} / {lightbox.product.gallery && lightbox.product.gallery.length > 0 ? lightbox.product.gallery.length : 1}
                </span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-secondary overflow-hidden rounded-md">
                <img
                  src={
                    lightbox.product.gallery && lightbox.product.gallery.length > 0
                      ? lightbox.product.gallery[lightbox.index]
                      : lightbox.product.image
                  }
                  alt={`${lightbox.product.name} image ${lightbox.index + 1}`}
                  className="w-full h-full object-contain"
                />
                <button
                  aria-label={t.prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10 disabled:opacity-40 disabled:cursor-not-allowed"
                  onClick={prevLightbox}
                  disabled={lightbox.index === 0}
                >
                  {"<"}
                </button>
                <button
                  aria-label={t.next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 text-foreground transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-foreground/10 disabled:opacity-40 disabled:cursor-not-allowed"
                  onClick={nextLightbox}
                  disabled={
                    !(lightbox.product.gallery && lightbox.product.gallery.length > 0)
                      ? true
                      : lightbox.index === lightbox.product.gallery!.length - 1
                  }
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
