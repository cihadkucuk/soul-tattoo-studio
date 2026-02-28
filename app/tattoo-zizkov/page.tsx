import Link from "next/link"

export const metadata = {
  title: "Tattoo Studio in Žižkov, Prague | SOUL Tattoo Atelier",
  description:
    "Professional tattoo studio in Žižkov, Prague. Custom tattoos, piercing, and laser removal. Located near Jiřího z Poděbrad metro. Free consultations available.",
}

export default function TattooZizkov() {
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
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-background">Professional Tattoo Studio in Žižkov, Prague</h1>
          <p className="text-xl text-background">
            Soul Tattoo Atelier is Žižkov's premier tattoo studio, located at Husitská 677/15
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">Why Choose Soul Tattoo Atelier in Žižkov?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>5.0-star rating with 147 Google reviews</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Walking distance from Jiřího z Poděbrad metro station</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Experienced artists specializing in multiple styles</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Sterile, professional environment with premium equipment</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Free consultations for all tattoo services</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Getting to Our Žižkov Studio</h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>
                <strong>Metro:</strong> Jiřího z Poděbrad (Green Line A) - 8 min walk
              </li>
              <li>
                <strong>Tram:</strong> Lipanská (tram 5, 9, 26) - 3 min walk
              </li>
              <li>
                <strong>Bus:</strong> Viktoria Žižkov (bus 133, 135, 175) - 5 min walk
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Tattoo Services in Žižkov</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Custom Tattoos</h3>
                <p className="text-sm text-muted-foreground">Unique designs tailored to your vision</p>
              </Link>
              <Link href="/tattoo-prague/cover-up-tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Cover-Up Tattoos</h3>
                <p className="text-sm text-muted-foreground">Transform old tattoos into beautiful new designs</p>
              </Link>
              <Link
                href="/tattoo-prague/fine-line-tattoo-prague"
                className="p-6 bg-secondary hover:bg-muted transition"
              >
                <h3 className="text-lg font-light mb-2">Fine-Line Tattoos</h3>
                <p className="text-sm text-muted-foreground">Delicate, elegant minimalist designs</p>
              </Link>
              <Link href="/piercing-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Professional Piercing</h3>
                <p className="text-sm text-muted-foreground">Safe body and ear piercing services</p>
              </Link>
              <Link href="/tattoo-courses-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Tattoo Training</h3>
                <p className="text-sm text-muted-foreground">Professional artist training programs</p>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">About the Žižkov Neighborhood</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Žižkov is one of Prague's most vibrant and artistic neighborhoods, known for its bohemian atmosphere,
              street art, independent galleries, and cultural venues. The district attracts creative professionals and
              art enthusiasts, making it the perfect location for Soul Tattoo Atelier.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our Žižkov studio serves the local creative community while welcoming visitors from across Prague and
              beyond. We're proud to be part of this dynamic neighborhood's artistic landscape.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Žižkov Studio FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What are your Žižkov studio hours?</h3>
                <p className="text-muted-foreground">
                  Monday-Friday: 10:00 AM - 8:00 PM | Saturday: 11:00 AM - 7:00 PM | Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I need to book in advance?</h3>
                <p className="text-muted-foreground">
                  While walk-ins are welcome, booking in advance ensures your preferred artist and time slot are
                  available. Call +420 605 792 545 or book online.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Is parking available near the Žižkov studio?</h3>
                <p className="text-muted-foreground">
                  Street parking is available in the neighborhood. Public transport is recommended—the studio is easily
                  accessible by metro, tram, and bus.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I book a free consultation?</h3>
                <p className="text-muted-foreground">
                  Yes, free consultations are available. Call us or use our online booking system to schedule your
                  consultation at the Žižkov location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Visit Our Žižkov Studio</h2>
          <p className="text-muted-foreground mb-6">Book your tattoo consultation today</p>
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
