import type { Metadata } from "next"

import ArtistsPageClient from "./ArtistsPageClient"

export const metadata: Metadata = {
  title: "Our Artists | SOUL Tattoo Studio",
  description: "Meet our experienced tattoo artists at SOUL. Professional portfolio and specialties.",
}

export default function ArtistsPage() {
  return <ArtistsPageClient />
}
