"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground font-light">
            Ready to bring your tattoo vision to life? Contact us today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder-muted-foreground font-light focus:outline-none focus:border-foreground transition"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder-muted-foreground font-light focus:outline-none focus:border-foreground transition"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us about your tattoo idea..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder-muted-foreground font-light focus:outline-none focus:border-foreground transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 rounded-full bg-foreground text-background text-sm font-light shadow-lg shadow-foreground/20 transition-all hover:-translate-y-0.5 hover:bg-muted-foreground hover:shadow-foreground/30"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-border grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm font-light text-muted-foreground mb-2">Phone</p>
            <p className="text-foreground font-light">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm font-light text-muted-foreground mb-2">Email</p>
            <p className="text-foreground font-light">hello@soultattoo.com</p>
          </div>
          <div>
            <p className="text-sm font-light text-muted-foreground mb-2">Location</p>
            <p className="text-foreground font-light">123 Art Street, Creative City</p>
          </div>
        </div>
      </div>
    </section>
  )
}
