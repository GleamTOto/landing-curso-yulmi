import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section id="inscripcion" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
          Tu emprendimiento merece{" "}
          <span className="font-script text-primary">brillar</span>{" "}
          en redes
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          No dejes que la tecnología te detenga. Inscríbete hoy y empieza a
          crear contenido que conecta y vende.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full rounded-full px-10 text-base font-semibold shadow-lg shadow-primary/25 sm:w-auto"
          >
            <a href="#inscripcion">
              Inscribirme ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-full border-primary/30 px-10 text-base font-semibold text-primary hover:bg-primary/5 sm:w-auto"
          >
            <a
              href="https://wa.me/573502783337"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Pedir información por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
