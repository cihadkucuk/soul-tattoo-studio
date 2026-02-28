export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-muted rounded-sm overflow-hidden">
            <img src="/tattoo-artist-at-work-studio.jpg" alt="SOUL Tattoo Studio" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">About SOUL</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Founded in 2018, SOUL Tattoo Studio is dedicated to creating meaningful, minimalist tattoos that stand the
              test of time. We believe in the power of simplicity and the importance of understanding each client's
              unique story.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Our team of experienced artists specializes in clean lines, geometric designs, and contemporary minimalist
              work. Every tattoo is a collaboration between artist and client, resulting in truly personal art.
            </p>
            <div className="pt-4">
              <button className="px-8 py-3 rounded-full bg-foreground text-background text-sm font-light shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
