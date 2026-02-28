import type { Metadata } from "next"

import MerchPageClient from "./MerchPageClient"

export const metadata: Metadata = {
  title: "SOUL Merch | Aftercare & Merchandise | SOUL Tattoo Atelier",
  description:
    "Premium tattoo aftercare products, branded caps, t-shirts, and jewelry. Keep your tattoo vibrant with professional-grade creams and solutions.",
}

export default function MerchPage() {
  return <MerchPageClient />
}
