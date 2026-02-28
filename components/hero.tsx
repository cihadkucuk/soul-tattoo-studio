export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground text-balance">
                Ink Your <span className="font-normal">Soul</span>
              </h1>
              <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-md">
                Minimalist tattoo artistry that captures your essence. Each design is a conversation between artist and
                canvas.
              </p>
            </div>
            <button className="px-8 py-3 rounded-full bg-foreground text-background text-sm font-light shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30">
              Explore Our Work
            </button>
          </div>

          <div className="aspect-square bg-muted rounded-sm overflow-hidden">
            <img
              src="/minimalist-tattoo-design-black-ink-on-skin.jpg"
              alt="Minimalist tattoo artwork"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
