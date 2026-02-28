export function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your vision, ideas, and the story behind your tattoo.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our artists create a custom design that reflects your personality.",
    },
    {
      number: "03",
      title: "Refinement",
      description: "We refine every detail until it's perfect for you.",
    },
    {
      number: "04",
      title: "Creation",
      description: "Your tattoo comes to life with precision and care.",
    },
  ]

  return (
    <section id="process" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">Our Process</h2>
          <p className="text-muted-foreground font-light max-w-2xl">
            A thoughtful approach to creating meaningful tattoos.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="text-4xl font-light text-muted-foreground">{step.number}</div>
              <h3 className="text-lg font-light text-foreground">{step.title}</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
