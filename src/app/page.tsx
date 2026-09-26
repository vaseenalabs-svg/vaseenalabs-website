import Navigation from '@/components/navigation/Navigation'
import HeroSection from '@/components/hero/HeroSection'
import ServicesSection from '@/components/services/ServicesSection'
import AIAutomationSection from '@/components/sections/AIAutomationSection'
import TechnologySection from '@/components/sections/TechnologySection'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import AutomationExamplesSection from '@/components/sections/AutomationExamplesSection'
import WorkSection from '@/components/sections/WorkSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/navigation/Footer'
import FloatingContact from '@/components/ui/FloatingContact'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] btn-primary"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AIAutomationSection />
        <AutomationExamplesSection />
        <WorkSection />
        <TestimonialsSection />
        <ProcessSection />
        <WhyUsSection />
        <TechnologySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
