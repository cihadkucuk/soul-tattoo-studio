import Link from "next/link"

export const metadata = {
  title: "Fine-Line Tattoo Prague | SOUL Tattoo Atelier",
  description:
    "Professional fine-line tattoos in Prague. Delicate, minimal designs with intricate detail. Expert artists specializing in fine-line work.",
}

export default function FineLineTattoo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="py-20 px-6 bg-secondary blurred-bg blurred-bg-equipment"
        style={{
          backgroundImage: "url('/assets/gallery/custom/IMG_0166.JPG')",
          backgroundPosition: "center 72%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Fine-Line Tattoo Prague</h1>
          <p className="text-xl text-muted-foreground">
            Delicate, intricate designs with minimal lines and maximum impact
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">The Art of Fine-Line Tattoos</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Fine-line tattooing is a specialized art form that emphasizes minimalism, precision, and elegance. Using
              thin, delicate lines, our artists create sophisticated designs that are timeless and refined.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              This style is perfect for those who appreciate subtlety and elegance. Whether it's a tiny symbol, an
              intricate pattern, or a detailed illustration—fine-line work brings sophistication to your skin.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Fine-Line Design Styles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-2">Minimalist</h3>
                <p className="text-muted-foreground">Simple, clean lines representing essential forms and symbols</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Botanical</h3>
                <p className="text-muted-foreground">Delicate plants, flowers, and leaves with intricate detail</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Geometric</h3>
                <p className="text-muted-foreground">Precise geometric shapes and mathematical patterns</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Abstract</h3>
                <p className="text-muted-foreground">Artistic, flowing lines creating unique abstract forms</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Portrait</h3>
                <p className="text-muted-foreground">Detailed line-work portraits and facial features</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Illustration</h3>
                <p className="text-muted-foreground">Fine-detail illustrations and scenic artwork</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Why Choose Fine-Line?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>Elegant and timeless aesthetic</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Works well for minimalist design preferences</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Ages beautifully with proper care</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Great for smaller, detailed designs</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Versatile placement options</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Placement & Size</h2>
            <p className="text-muted-foreground mb-4">
              Fine-line tattoos can be placed virtually anywhere on the body. Popular placements include:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>• Wrist and forearm</div>
              <div>• Ankle and foot</div>
              <div>• Behind the ear</div>
              <div>• Ribcage</div>
              <div>• Shoulder and back</div>
              <div>• Finger</div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Fine-Line Tattoo FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Do fine-line tattoos hurt more than other styles?</h3>
                <p className="text-muted-foreground">
                  Pain is similar to other tattoo styles. Fine lines may feel slightly different due to precision
                  required, but overall discomfort is comparable to standard tattoos.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How long do fine-line tattoos last?</h3>
                <p className="text-muted-foreground">
                  With proper care and sun protection, fine-line tattoos last a lifetime. Fine lines may require
                  touch-ups after 5-10 years for optimal appearance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Are fine-line tattoos good for first-timers?</h3>
                <p className="text-muted-foreground">
                  Fine-line designs are perfect for a first tattoo—subtle, elegant, timeless, and versatile in placement
                  and design options.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How much does a fine-line tattoo cost?</h3>
                <p className="text-muted-foreground">
                  Fine-line tattoo prices in Prague range from 3,000-8,000 CZK depending on size and complexity. Book a
                  free consultation for accurate pricing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can fine-line tattoos be large?</h3>
                <p className="text-muted-foreground">
                  Yes, fine-line work can cover large areas. The scale determines detail level and visual impact,
                  allowing for creative flexibility.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Best Placements for Fine-Line Tattoos</h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>
                <strong>Wrist and Forearm</strong> - Highly visible placement perfect for minimalist, delicate designs
              </li>
              <li>
                <strong>Ankle and Foot</strong> - Great for small, elegant fine-line work with nice visibility
              </li>
              <li>
                <strong>Behind the Ear</strong> - Intimate, subtle placement ideal for tiny, meaningful designs
              </li>
              <li>
                <strong>Ribcage</strong> - Larger surface for elaborate fine-line illustrations and detail work
              </li>
              <li>
                <strong>Shoulder and Back</strong> - Versatile placement allowing for both small and expansive designs
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Get Your Fine-Line Tattoo</h2>
          <p className="text-muted-foreground mb-6">Consult with our fine-line specialists about your design</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
