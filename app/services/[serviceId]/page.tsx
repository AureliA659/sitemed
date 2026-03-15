'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';

// Exemple de données - remplacer par une requête Supabase si needed
const servicesData: Record<string, any> = {
  'laser-hair-removal': {
    title: 'Laser Hair Removal',
    description: 'Permanent hair removal solution with advanced laser technology',
    price: '$150 - $500',
    duration: '30-60 minutes',
    benefits: [
      'Permanent hair reduction',
      'Fast and painless',
      'Suitable for all skin types',
      'No downtime required',
      'FDA approved technology'
    ],
    details: 'Our state-of-the-art laser technology safely removes unwanted hair from any part of the body. The process is quick, relatively painless, and produces long-lasting results.'
  },
  'injectable-treatments': {
    title: 'Injectable Treatments',
    description: 'Botox and dermal fillers for natural-looking results',
    price: '$200 - $800',
    duration: '15-30 minutes',
    benefits: [
      'Reduces wrinkles and fine lines',
      'Instant results',
      'No surgery required',
      'Customizable treatments',
      'Long-lasting effects'
    ],
    details: 'Professional injectable treatments to smooth wrinkles, restore volume, and enhance your natural beauty.'
  },
  'skin-rejuvenation': {
    title: 'Skin Rejuvenation',
    description: 'Advanced treatments for youthful, glowing skin',
    price: '$300 - $1000',
    duration: '45-90 minutes',
    benefits: [
      'Improved skin texture',
      'Reduced age spots',
      'Enhanced radiance',
      'Collagen production boost',
      'Minimal downtime'
    ],
    details: 'Our comprehensive skin rejuvenation treatments use the latest technology to revitalize and refresh your skin.'
  }
};

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="flex items-center space-x-2 mb-6 w-fit hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl opacity-90">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            {/* Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">About This Service</h2>
              <p className="text-lg text-gray-700 mb-8">{service.details}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6 bg-blue-50 p-6 rounded-lg mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Price Range</p>
                  <p className="text-2xl font-bold text-medical-blue">{service.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Duration</p>
                  <p className="text-2xl font-bold text-medical-blue">{service.duration}</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-medical-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">
                Book your consultation today and discover how this service can transform your appearance.
              </p>
              <Button
                asChild
                className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white mb-4 h-12"
              >
                <a href="#book-appointment">Book Appointment</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full h-12"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              {/* Service highlights */}
              <div className="mt-8 pt-8 border-t space-y-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Expertise</p>
                  <p className="font-semibold">10+ years experience</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Results</p>
                  <p className="font-semibold">98% client satisfaction</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Technology</p>
                  <p className="font-semibold">FDA approved equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}