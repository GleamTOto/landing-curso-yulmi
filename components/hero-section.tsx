import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-secondary pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 md:flex-row md:gap-16">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Curso 100% online
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Domina tus redes{" "}
            <span className="font-script text-primary">desde cero</span> y con
            propósito
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Ideal para emprendedores que se sienten perdidos en el mundo
            digital. Aprende a crear contenido, configurar tus cuentas y empezar
            a vender.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25"
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
              className="rounded-full border-primary/30 px-8 text-base font-semibold text-primary hover:bg-primary/5"
            >
              <a
                href="https://wa.me/573502783337"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Pedir información
              </a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <Image
              src="/images/hero-course.jpg"
              alt="Emprendedora aprendiendo marketing digital en su computadora"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
