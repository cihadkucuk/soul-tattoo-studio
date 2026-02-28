import fs from "fs"
import path from "path"
import type { Metadata } from "next"

import GalleryClient, { type GalleryCategory, type GalleryItem } from "./GalleryClient"

export const metadata: Metadata = {
  title: "Tattoo & Piercing Gallery | SOUL Tattoo Atelier Prague",
  description: "View our work across tattoos, piercings, training, merch, and gift certificates. Explore more on Instagram.",
}

const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]

function formatAlt(fileName: string) {
  const base = fileName.replace(/\.[^.]+$/, "")
  return base.replace(/[_-]+/g, " ").replace(/\(\d+\)/g, "").replace(/\s+/g, " ").trim() || "Gallery image"
}

function loadCategory(subPath: string, title: string): GalleryCategory {
  const dirPath = path.join(process.cwd(), "public", ...subPath.split("/"))
  let files: string[] = []

  try {
    files = fs.readdirSync(dirPath).filter((file) => VALID_EXTENSIONS.some((ext) => file.endsWith(ext)))
  } catch (err) {
    files = []
  }

  const items: GalleryItem[] = files
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      src: `/${subPath}/${file}`,
      alt: formatAlt(file),
    }))

  return { title, items }
}

function prioritizeTattooOrder(category: GalleryCategory): GalleryCategory {
  const preferred = ["tattoo-28", "tattoo-4", "tattoo-72", "tattoo-39", "tattoo-13", "tattoo-5"]
  const used = new Set<string>()
  const prioritized: GalleryItem[] = []

  for (const key of preferred) {
    const match = category.items.find((item) => {
      const file = item.src.split("/").pop()?.toLowerCase() ?? ""
      return file.startsWith(`${key.toLowerCase()}.`)
    })
    if (match) {
      prioritized.push(match)
      used.add(match.src)
    }
  }

  const remaining = category.items.filter((item) => !used.has(item.src))
  return { ...category, items: [...prioritized, ...remaining] }
}

export default function GalleryPage() {
  const tattoo = prioritizeTattooOrder(loadCategory("assets/gallery/tattoo", "Tattoo Photos"))
  const piercingBase = loadCategory("assets/gallery/piercing", "Piercing Photos")
  const piercing = { ...piercingBase, items: piercingBase.items.filter((_, idx) => idx !== 3) }
  const courses = loadCategory("assets/gallery/courses", "Training-Related Photos")
  const merchBase = loadCategory("assets/merch/products", "Merch Photos")
  const merch = { ...merchBase, items: merchBase.items.filter((_, idx) => idx !== 1) }
  const gift = loadCategory("assets/merch/gift-certificates", "Gift Certificate Photos")

  return <GalleryClient categories={[tattoo, piercing, courses, merch, gift]} />
}
