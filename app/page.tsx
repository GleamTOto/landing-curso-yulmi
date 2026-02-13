import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CourseContent } from "@/components/course-content"
import { BonusesSection } from "@/components/bonuses-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CourseContent />
        <BonusesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
