"use client"

import { Star } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    name: "Carolina M.",
    role: "Emprendedora de moda",
    text: "Antes no sabía ni qué publicar. Ahora tengo un plan claro y mis ventas por Instagram se duplicaron en un mes.",
    stars: 5,
  },
  {
    name: "Laura G.",
    role: "Repostera artesanal",
    text: "Las plantillas de Canva me ahorraron horas de trabajo. El curso es super práctico y fácil de seguir.",
    stars: 5,
  },
  {
    name: "María F.",
    role: "Coach de bienestar",
    text: "Pensé que las redes no eran para mí, pero este curso me demostró que cualquiera puede aprender paso a paso.",
    stars: 5,
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl border border-border/40 bg-card p-6 shadow-sm transition-all duration-700"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex gap-1">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-primary text-primary"
          />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
        {`"${testimonial.text}"`}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-serif text-sm font-bold text-primary">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary">
            TESTIMONIOS
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Lo que dicen{" "}
            <span className="font-script text-primary">nuestras alumnas</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
