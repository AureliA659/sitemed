import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { MedicalTeam } from '@/components/medical-team';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Medical Team - Medical Excellence Center',
  description:
    'Meet our team of four specialized physicians dedicated to providing exceptional medical care with scientific precision.',
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">Our Medical Team</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Meet our team of four board-certified physicians who combine
                extensive experience, scientific expertise, and a patient-centered
                approach to deliver exceptional healthcare.
              </p>
            </div>
          </div>
        </section>

        <MedicalTeam />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-semibold text-center text-[#212121] mb-8">
                Why Choose Our Team?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-bold">15+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#212121] mb-2">
                    Years of Experience
                  </h3>
                  <p className="text-[#424242]">
                    Our physicians average over 15 years of specialized medical
                    practice.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-health-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#212121] mb-2">
                    Specialized Physicians
                  </h3>
                  <p className="text-[#424242]">
                    Each doctor brings unique expertise in their specialized
                    field.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-bold">100%</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#212121] mb-2">
                    Board Certified
                  </h3>
                  <p className="text-[#424242]">
                    All our physicians are board-certified in their respective
                    specialties.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-health-green hover:bg-health-green-dark text-white"
                  asChild
                >
                  <a
                    href="https://www.doctolib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
