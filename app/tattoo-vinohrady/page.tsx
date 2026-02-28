import Link from "next/link"

export const metadata = {
  title: "Tattoo Studio Near Vinohrady | SOUL Tattoo Atelier Prague",
  description:
    "Professional tattoo studio serving Vinohrady and surrounding Prague neighborhoods. Custom tattoos, piercing, laser removal.",
}

export default function TattooVinohrady() {
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
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-background">Tattoo Studio Near Vinohrady</h1>
          <p className="text-xl text-background">
            Soul Tattoo Atelier serves Vinohrady and nearby Prague neighborhoods
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4">Convenient Location for Vinohrady Residents</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Located just a short journey from Vinohrady, Soul Tattoo Atelier in Žižkov is easily accessible to
              residents of Vinohrady and surrounding neighborhoods. Our studio provides professional tattoo services to
              Prague's vibrant residential and commercial communities.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you're looking for your first tattoo or adding to an existing collection, our experienced artists
              are ready to create your perfect design.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Getting Here from Vinohrady</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>Easy access via green line metro to Jiřího z Poděbrad station</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Direct tram connections to our Žižkov location</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Short drive or taxi ride to our studio</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Convenient parking in the neighborhood</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Complete Tattoo Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Custom Designs</h3>
                <p className="text-sm text-muted-foreground">Personalized tattoos tailored to your vision</p>
              </Link>
              <Link href="/tattoo-prague/cover-up-tattoo-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Cover-Up Tattoos</h3>
                <p className="text-sm text-muted-foreground">Transform old tattoos into new designs</p>
              </Link>
              <Link
                href="/tattoo-prague/fine-line-tattoo-prague"
                className="p-6 bg-secondary hover:bg-muted transition"
              >
                <h3 className="text-lg font-light mb-2">Fine-Line Work</h3>
                <p className="text-sm text-muted-foreground">Elegant minimalist designs</p>
              </Link>
              <Link href="/piercing-prague" className="p-6 bg-secondary hover:bg-muted transition">
                <h3 className="text-lg font-light mb-2">Professional Piercing</h3>
                <p className="text-sm text-muted-foreground">Safe and sterile services</p>
              </Link>
              <Link href="/tattoo-courses-prague" className="p-6 bg-secondary hover:bg-muted transition">
              <h3 className="text-lg font-light mb-2">Tattoo Training</h3>
                <p className="text-sm text-muted-foreground">Artist training programs</p>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4">Why Vinohrady Residents Choose Us</h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>
                <strong>Professional Artists</strong> - Certified with international experience
              </li>
              <li>
                <strong>Quality Standards</strong> - Premium inks and sterile equipment
              </li>
              <li>
                <strong>Convenience</strong> - Easy public transport access from Vinohrady
              </li>
              <li>
                <strong>Personalized Service</strong> - Free consultations and custom design
              </li>
              <li>
                <strong>Reputation</strong> - 5.0-star rating with 147 positive reviews
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Book Your Tattoo Today</h2>
          <p className="text-muted-foreground mb-6">Free consultations for Vinohrady residents</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-foreground text-background text-sm font-light uppercase tracking-wider shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
