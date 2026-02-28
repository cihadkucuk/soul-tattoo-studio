export function Portfolio() {
  const works = [
    {
      id: 1,
      title: "Geometric Lines",
      category: "Minimalist",
      image: "/geometric-line-tattoo-minimalist.jpg",
    },
    {
      id: 2,
      title: "Nature Forms",
      category: "Organic",
      image: "/nature-inspired-minimalist-tattoo.jpg",
    },
    {
      id: 3,
      title: "Abstract Shapes",
      category: "Contemporary",
      image: "/abstract-minimalist-tattoo-design.jpg",
    },
    {
      id: 4,
      title: "Symbolic Art",
      category: "Meaningful",
      image: "/symbolic-minimalist-tattoo.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground font-light max-w-2xl">
            A collection of minimalist designs that tell stories through simplicity and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-square bg-muted rounded-sm overflow-hidden mb-4">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-light text-foreground">{work.title}</h3>
              <p className="text-sm font-light text-muted-foreground">{work.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
