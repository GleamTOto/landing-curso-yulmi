"use client"

import { Gift, FileText, Video, Search, LayoutTemplate, CheckSquare } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const bonuses = [
  {
    icon: LayoutTemplate,
    text: "6 plantillas Canva listas para usar",
  },
  {
    icon: CheckSquare,
    text: "Mini checklist para cada red social",
  },
  {
    icon: Video,
    text: "Grabación disponible por 7 días",
  },
  {
    icon: Search,
    text: "Palabras clave para redes sociales",
  },
]

export function BonusesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section id="bonos" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-lg md:p-14 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Decorative corner */}
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-secondary/60" aria-hidden="true" />

          <div className="relative flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <Gift className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold tracking-wide text-primary">
                  BONOS INCLUIDOS
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Incluye sin esfuerzo extra
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Herramientas y recursos adicionales para que arranques con todo
                desde el primer día.
              </p>
              <div className="mt-8 rounded-2xl bg-secondary/80 p-5">
                <p className="font-script text-2xl text-primary md:text-3xl">
                  {'Deja de perder tiempo y empieza a vender'}
                </p>
              </div>
            </div>

            {/* Right — bonus items */}
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {bonuses.map((bonus, i) => (
                <div
                  key={bonus.text}
                  className="flex items-start gap-3 rounded-2xl border border-border/40 bg-background p-4 transition-all duration-500"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transitionDelay: `${300 + i * 100}ms`,
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <bonus.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed text-foreground">
                    {bonus.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
