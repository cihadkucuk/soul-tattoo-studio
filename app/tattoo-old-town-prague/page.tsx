import Link from "next/link"

export const metadata = {
  title: "Tattoo Studio Near Old Town Prague | SOUL Tattoo Atelier",
  description:
    "Professional tattoo studio serving Old Town Prague and central Prague neighborhoods. Custom tattoos, piercing, and training.",
}

export default function TattooOldTownPrague() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
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
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-background">Tattoo Studio Near Old Town Prague</h1>
          <p className="text-xl text-background">
            Soul Tattoo Atelier serves tourists and residents of central Prague
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">Easily Accessible from Old Town</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Soul Tattoo Atelier is conveniently located for visitors and residents of Old Town Prague and the city
              center. Our Žižkov studio is just a short metro or tram ride away, making it the perfect destination for
              tattoo enthusiasts exploring Prague's neighborhoods.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you're a tourist looking for a memorable Prague souvenir or a local seeking professional tattoo
              services, our experienced artists are ready to create your ideal design.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">How to Reach Us from Old Town</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>Red metro line (A) to Jiřího z Poděbrad - 15 minutes from Old Town Square</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Multiple tram connections directly to our location</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Short taxi ride through Prague's historic streets</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Easy walking route through Prague's artistic neighborhoods</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Custom Tattoos</h3>
                <p className="text-sm text-muted-foreground">Unique designs created just for you</p>
              </Link>
              <Link href="/tattoo-prague/cover-up-tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Cover-Ups</h3>
                <p className="text-sm text-muted-foreground">Transform old tattoos into new art</p>
              </Link>
              <Link
                href="/tattoo-prague/fine-line-tattoo-prague"
                className="p-6 bg-secondary hover:bg-muted transition"
              >
                <h3 className="text-lg font-light mb-2">Fine-Line Tattoos</h3>
                <p className="text-sm text-muted-foreground">Delicate, elegant designs</p>
              </Link>
              <Link href="/piercing-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Professional Piercing</h3>
                <p className="text-sm text-muted-foreground">Safe and hygienic services</p>
              </Link>
              <Link href="/tattoo-courses-prague" className="p-6 bg-secondary hover:bg-muted transition">
              <h3 className="text-lg font-light mb-2">Tattoo Training</h3>
                <p className="text-sm text-muted-foreground">Professional training programs</p>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Perfect Souvenir from Prague</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              A tattoo from Soul Tattoo Atelier makes a meaningful and lasting souvenir of your time in Prague. Many
              tourists choose to get inked during their visit—a permanent memory of this beautiful city and our
              exceptional artists' work.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Walk-ins are welcome, but we recommend booking in advance to ensure your preferred artist is available.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Old Town Visitor FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you accept walk-ins for tourists?</h3>
                <p className="text-muted-foreground">
                  Yes, walk-ins are welcome! For the best experience, we recommend booking ahead to secure your
                  preferred artist.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How long is the process from booking to completion?</h3>
                <p className="text-muted-foreground">
                  From consultation to completed tattoo typically takes 1-4 hours depending on size and complexity.
                  Healing takes 2-3 weeks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept cash (CZK) and major credit cards. Contact us for details on payment options.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I get a tattoo as a souvenir?</h3>
                <p className="text-muted-foreground">
                  Many visitors choose meaningful Prague-inspired designs. Our artists can help you create the perfect
                  souvenir tattoo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Get Your Prague Tattoo</h2>
          <p className="text-muted-foreground mb-6">Book your consultation today or visit for a walk-in</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            Book or Visit
          </Link>
        </div>
      </section>
    </div>
  )
}
