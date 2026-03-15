import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Medical Excellence Center',
  description:
    'Comprehensive medical services including laser hair removal, injectable treatments, skin rejuvenation, and medical consultations.',
};

const services = [
  {
    id: '1',
    title: 'Laser Hair Removal',
    slug: 'laser-hair-removal',
    description:
      'State-of-the-art laser technology for safe, effective, and permanent hair reduction. Our specialized physicians ensure optimal results with minimal discomfort.',
    image:
      'https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '30-60 min',
    priceFrom: '$200',
    highlights: [
      'FDA-approved laser systems',
      'Suitable for all skin types',
      'Minimal downtime',
      'Long-lasting results',
    ],
  },
  {
    id: '2',
    title: 'Injectable Treatments',
    slug: 'injectable-treatments',
    description:
      'Expert administration of dermal fillers and neuromodulators for natural-looking facial rejuvenation. Customized treatment plans for optimal aesthetic outcomes.',
    image:
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '20-45 min',
    priceFrom: '$400',
    highlights: [
      'Board-certified physicians',
      'Premium-grade products',
      'Natural-looking results',
      'Personalized approach',
    ],
  },
  {
    id: '3',
    title: 'Skin Rejuvenation',
    slug: 'skin-rejuvenation',
    description:
      'Advanced treatments to restore skin vitality, improve texture, and enhance luminosity. Evidence-based protocols for comprehensive skin health.',
    image:
      'https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '45-90 min',
    priceFrom: '$350',
    highlights: [
      'Medical-grade treatments',
      'Customized protocols',
      'Scientifically proven',
      'Visible improvements',
    ],
  },
  {
    id: '4',
    title: 'Medical Consultations',
    slug: 'consultations',
    description:
      'Comprehensive consultations with our specialized physicians. Detailed assessments and personalized treatment planning for your specific needs.',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '30-45 min',
    priceFrom: '$150',
    highlights: [
      'Expert assessment',
      'Personalized plan',
      'Evidence-based advice',
      'Ongoing support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">Our Medical Services</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive healthcare solutions delivered with scientific
                precision and personalized care by our team of specialized
                physicians.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-heading font-semibold text-[#212121] mb-3">
                        {service.title}
                      </h3>

                      <p className="text-[#424242] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-6 mb-6 text-sm text-[#424242]">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-medical-blue" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-health-green" />
                          <span>From {service.priceFrom}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-[#212121] mb-3">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-[#424242] flex items-center"
                            >
                              <span className="w-1.5 h-1.5 bg-health-green rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white"
                        asChild
                      >
                        <Link href={`/services/${service.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-semibold text-[#212121] mb-6">
                Ready to Schedule Your Consultation?
              </h2>
              <p className="text-lg text-[#424242] mb-8">
                Book an appointment with one of our specialized physicians to
                discuss your treatment options and develop a personalized care
                plan.
              </p>
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
                  Book an Appointment
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
