// src/app/(home)/page.tsx
import HeroSection from "@/components/HeroSection";
import EngineeringHero from "@/components/EngineeringHero";
import ServicesSection from "@/components/ServicesSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <EngineeringHero />
      <ServicesSection />
      <ProjectsShowcase />
      <VisionMission />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
