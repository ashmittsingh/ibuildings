import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import EngineeringHero from '@/components/EngineeringHero'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EngineeringHero />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsShowcase />
      <Testimonials />
      <CTASection />
    </main>
  )
}


