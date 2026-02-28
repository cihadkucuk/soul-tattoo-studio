import Link from "next/link"

export const metadata = {
  title: "Cover-Up Tattoo Prague | SOUL Tattoo Atelier",
  description:
    "Professional cover-up tattoos in Prague. Transform old tattoos into beautiful new designs. Expert artists, experienced in cover-ups.",
}

export default function CoverUpTattoo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
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
          <h1 className="text-5xl md:text-6xl font-light mb-6">Cover-Up Tattoo Prague</h1>
          <p className="text-xl text-muted-foreground">Transform your old tattoo into a beautiful new design</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">Expert Cover-Up Solutions</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              A cover-up tattoo is a skillful art form that transforms an old or unwanted tattoo into a new, beautiful
              design. Our experienced artists specialize in creative solutions to hide, blend, or redesign existing
              tattoos.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether your old tattoo has faded, changed meaning, or simply isn't who you are anymore, we can help.
              Cover-ups require artistic creativity and technical expertise—both of which our team brings to every
              project.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Why Choose Our Cover-Up Service?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>Experienced cover-up specialists with proven track records</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Creative design solutions tailored to your old tattoo</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Advanced techniques to ensure complete coverage</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Consultation to explore all design possibilities</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Cover-Up Styles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-2">Blackout</h3>
                <p className="text-muted-foreground">Solid black design to completely cover the old tattoo</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Blending</h3>
                <p className="text-muted-foreground">Incorporate the old tattoo into a new, larger design</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Color Overlay</h3>
                <p className="text-muted-foreground">Use vibrant colors to hide the old design</p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Redesign</h3>
                <p className="text-muted-foreground">Complete artistic reimagining of the space</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">The Cover-Up Process</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-light mb-2">Assessment</h3>
                <p className="text-muted-foreground">We evaluate your old tattoo's size, color, and depth</p>
              </div>
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-light mb-2">Design Consultation</h3>
                <p className="text-muted-foreground">Discuss creative options that work with your existing tattoo</p>
              </div>
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-light mb-2">Custom Artwork</h3>
                <p className="text-muted-foreground">Design a cover-up that completely masks the old tattoo</p>
              </div>
              <div className="border-l-2 border-foreground pl-6">
                <h3 className="text-xl font-light mb-2">Professional Execution</h3>
                <p className="text-muted-foreground">Expert tattooing with perfect coverage and detail</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Cover-Up Tattoo FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Can all tattoos be covered?</h3>
                <p className="text-muted-foreground">
                  Most tattoos can be covered successfully. Factors like size, color, and depth affect feasibility.
                  We'll assess yours during a free consultation at Soul Tattoo Atelier.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How much does a cover-up tattoo cost?</h3>
                <p className="text-muted-foreground">
                  Cover-up pricing depends on the old tattoo's size and complexity. Generally, expect to pay 30-50% more
                  than a standard tattoo. Contact us for a free consultation and quote.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Will the old tattoo show through?</h3>
                <p className="text-muted-foreground">
                  No. With proper design and technique, the old tattoo will be completely hidden by the new design. Our
                  experts use advanced covering strategies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How much larger does a cover-up need to be?</h3>
                <p className="text-muted-foreground">
                  Typically 1.5-2 times larger than the original, depending on the design and coverage strategy. Our
                  artists will advise on the best approach.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What's the healing time?</h3>
                <p className="text-muted-foreground">
                  Cover-ups heal like any tattoo—about 2-3 weeks. We provide detailed aftercare instructions to ensure
                  proper healing.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Cover-Up Tattoo Styles & Techniques</h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>
                <strong>Blackout Cover-Ups</strong> - Solid black designs completely covering old tattoos with bold
                impact
              </li>
              <li>
                <strong>Blending Technique</strong> - Incorporate the old tattoo into a new, larger artistic design
              </li>
              <li>
                <strong>Color Overlay</strong> - Use vibrant colors and shading to creatively hide the old design
              </li>
              <li>
                <strong>Complete Redesign</strong> - Full artistic reimagining transforming the space into new artwork
              </li>
              <li>
                <strong>Geometric Integration</strong> - Blend old tattoos with geometric patterns for modern aesthetic
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-light mb-2">Can all tattoos be covered?</h3>
                <p className="text-muted-foreground">
                  Most tattoos can be covered successfully. Factors like size, color, and depth affect feasibility.
                  We'll assess yours during consultation.
                </p>
              </div>
              <div>
                <h3 className="font-light mb-2">Will the old tattoo show through?</h3>
                <p className="text-muted-foreground">
                  No. With proper design and technique, the old tattoo will be completely hidden by the new design.
                </p>
              </div>
              <div>
                <h3 className="font-light mb-2">How much larger does a cover-up need to be?</h3>
                <p className="text-muted-foreground">
                  Typically 1.5-2 times larger than the original, depending on the design and coverage strategy.
                </p>
              </div>
              <div>
                <h3 className="font-light mb-2">What's the healing time?</h3>
                <p className="text-muted-foreground">
                  Cover-ups heal like any tattoo—about 2-3 weeks. We provide detailed aftercare instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Transform Your Tattoo</h2>
          <p className="text-muted-foreground mb-6">Schedule a free consultation to discuss your cover-up options</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
