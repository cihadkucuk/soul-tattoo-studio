import Link from "next/link"

export const metadata = {
  title: "Tattoo Studio in Praha 3 | SOUL Tattoo Atelier",
  description:
    "Professional tattoo studio in Praha 3, Prague. Custom tattoos, piercing, and laser removal services in the heart of Žižkov. Free consultations.",
}

export default function TattooPraha3() {
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
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-background">Tattoo Studio in Praha 3</h1>
          <p className="text-xl text-background">
            Soul Tattoo Atelier brings professional tattooing to the heart of Prague's third district
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">Tattoo Services in Praha 3</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Located in the vibrant district of Praha 3 (Žižkov), Soul Tattoo Atelier offers comprehensive tattoo
              services including custom designs, cover-ups, fine-line work, piercing, laser removal, and professional
              tattoo training.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our experienced artists are dedicated to creating meaningful, high-quality tattoos in a sterile and
              professional environment.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Why Choose Soul Tattoo Atelier in Praha 3?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>Award-winning artists with international experience</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Multiple tattoo styles and specializations</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>State-of-the-art equipment and premium inks</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Easy accessibility via public transport</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Personalized consultations and aftercare guidance</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Custom Tattoos</h3>
                <p className="text-sm text-muted-foreground">Personalized designs created just for you</p>
              </Link>
              <Link href="/tattoo-prague/cover-up-tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Cover-Ups</h3>
                <p className="text-sm text-muted-foreground">Transform old tattoos into new masterpieces</p>
              </Link>
              <Link
                href="/tattoo-prague/fine-line-tattoo-prague"
                className="p-6 bg-secondary hover:bg-muted transition"
              >
                <h3 className="text-lg font-light mb-2">Fine-Line Tattoos</h3>
                <p className="text-sm text-muted-foreground">Delicate, intricate minimalist work</p>
              </Link>
              <Link href="/piercing-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Professional Piercing</h3>
                <p className="text-sm text-muted-foreground">Safe, sterile body piercing services</p>
              </Link>
              <Link href="/laser-tattoo-removal-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Laser Removal</h3>
                <p className="text-sm text-muted-foreground">Safe and effective tattoo removal</p>
              </Link>
              <Link href="/tattoo-courses-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Artist Training</h3>
                <p className="text-sm text-muted-foreground">Professional tattoo artist training</p>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Contact & Booking</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Ready to get your tattoo in Praha 3? Contact Soul Tattoo Atelier for a free consultation and booking.
            </p>
            <div className="bg-secondary p-6 rounded-sm space-y-3">
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +420 605 792 545
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong> Husitská 677/15, Praha 3
              </p>
              <Link href="/contact" className="text-foreground hover:text-muted-foreground transition">
                Book Online →
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Praha 3 Tattoo FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What tattoo styles do you offer in Praha 3?</h3>
                <p className="text-muted-foreground">
                  We specialize in custom designs, fine-line work, realism, geometric patterns, and all major tattoo
                  styles. Our artists have diverse specializations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I book an appointment?</h3>
                <p className="text-muted-foreground">
                  You can book online through our website, call us at +420 605 792 545, or visit the studio in person
                  for walk-in consultations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What are the tattoo prices in Praha 3?</h3>
                <p className="text-muted-foreground">
                  Prices range from 3,000-15,000+ CZK depending on size and complexity. Book a free consultation for an
                  accurate quote.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer laser tattoo removal?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer professional laser tattoo removal services. Contact us for a free consultation about
                  your removal options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Get Tattooed in Praha 3</h2>
          <p className="text-muted-foreground mb-6">Schedule your free consultation today</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}
