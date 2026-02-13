"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Necesito experiencia previa en redes sociales?",
    answer:
      "No, el curso está diseñado para principiantes totales. Te guiamos paso a paso desde lo más básico.",
  },
  {
    question: "¿Cuánto tiempo dura el curso?",
    answer:
      "El curso incluye módulos grabados que puedes ver a tu ritmo. La grabación estará disponible por 7 días después de tu inscripción.",
  },
  {
    question: "¿Qué herramientas necesito?",
    answer:
      "Solo necesitas un celular o computador con conexión a internet. Usaremos herramientas gratuitas como Canva y las propias redes sociales.",
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer:
      "Escríbenos por WhatsApp y te compartimos las opciones de pago disponibles adaptadas a tu presupuesto.",
  },
  {
    question: "¿Recibo algún certificado?",
    answer:
      "Sí, al completar todos los módulos recibirás un certificado digital de participación.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            ¿Tienes dudas? Aquí te respondemos
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="border-border/40 bg-card mb-3 rounded-xl border px-5 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
