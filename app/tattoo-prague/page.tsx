import type { Metadata } from "next"

import { TattooPragueClient } from "./TattooPragueClient"

export const metadata: Metadata = {
  title: "Custom Tattoo Prague | SOUL Tattoo Atelier",
  description:
    "Professional custom tattoos in Prague. Get your unique design from experienced artists. Sterile environment, walk-ins welcome.",
}

export default function TattooPraguePage() {
  return <TattooPragueClient />
}
