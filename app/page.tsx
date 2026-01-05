import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  )
}
