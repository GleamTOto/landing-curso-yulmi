"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Settings, PenTool, Palette, CheckCircle2 } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const modules = [
  {
    icon: Globe,
    title: "Lo esencial",
    items: [
      "Qué redes existen y para qué sirven",
      "Facebook vs Instagram vs WhatsApp Business",
      "Objetivos y tipos de cuentas",
    ],
  },
  {
    icon: Settings,
    title: "Configuración básica",
    items: [
      "Crear tu fanpage paso a paso",
      "Optimizar bio en Instagram y Facebook",
      "Ajustes básicos de WhatsApp Business",
    ],
  },
  {
    icon: PenTool,
    title: "Tu primer contenido",
    items: [
      "Qué publicar si no sé qué publicar",
      "Cómo elegir las mejores fotos",
      "Cómo escribir captions cortos y efectivos",
    ],
  },
  {
    icon: Palette,
    title: "Canva básico",
    items: [
      "Hacer tu primer post profesional",
      "Crear historias que atraigan",
      "Plantillas rápidas listas para usar",
    ],
  },
]

function AnimatedCard({
  mod,
  index,
}: {
  mod: (typeof modules)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <Card className="h-full border-border/50 bg-card shadow-sm transition-shadow hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
            <mod.icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-serif text-xl text-foreground">
            {mod.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {mod.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export function CourseContent() {
  return (
    <section id="contenido" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary">
            CONTENIDO DEL CURSO
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Todo lo que necesitas para empezar a brillar en redes
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            4 módulos diseñados para que vayas de cero a publicar con
            confianza, sin tecnicismos.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod, i) => (
            <AnimatedCard key={mod.title} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
