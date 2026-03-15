import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesCarousel } from '@/components/services-carousel';
import { MedicalTeam } from '@/components/medical-team';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import {
  MedicalBusinessSchema,
  PhysicianSchema,
  MedicalServiceSchema,
} from '@/components/schema-markup';

export default function Home() {
  return (
    <>
      <MedicalBusinessSchema />
      <PhysicianSchema />
      <MedicalServiceSchema />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesCarousel />
        <MedicalTeam />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
