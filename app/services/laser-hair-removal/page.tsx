import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Zap, Shield, Clock } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/before-after-gallery';

export const metadata: Metadata = {
  title: 'Laser Hair Removal - Medical Excellence Center',
  description: 'Permanent hair removal with advanced FDA-approved laser technology. Safe, effective, and painless.',
};

export default function LaserHairRemovalPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="flex items-center space-x-2 mb-6 w-fit hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Laser Hair Removal</h1>
          <p className="text-xl opacity-90">Permanent hair reduction with FDA-approved technology</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Advanced Hair Removal Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our state-of-the-art laser technology provides a safe, effective, and permanent solution for unwanted hair. With minimal discomfort and no downtime, you can achieve silky smooth skin quickly and conveniently.
              </p>
              <p className="text-lg text-gray-700">
                The laser works by targeting the hair follicle's pigment, destroying it at the root while leaving the surrounding skin completely unaffected. Most clients see results after just 3-6 sessions.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 bg-blue-50 p-6 rounded-lg mb-12">
              <div className="text-center">
                <Zap className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Duration</p>
                <p className="text-xl font-bold text-medical-blue">30-60 min</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Results</p>
                <p className="text-xl font-bold text-medical-blue">3-6 sessions</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Technology</p>
                <p className="text-xl font-bold text-medical-blue">FDA Approved</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  'Permanent hair reduction (up to 90%)',
                  'Works on all skin types and hair colors',
                  'Minimal discomfort during treatment',
                  'Fast treatment sessions',
                  'No downtime - back to activities immediately',
                  'Long-lasting smooth skin',
                  'Cost-effective compared to waxing/shaving',
                  'Professional and completely safe'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-medical-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it works */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Consultation',
                    description: 'We assess your skin type and hair characteristics to determine the best treatment plan.'
                  },
                  {
                    step: 2,
                    title: 'Preparation',
                    description: 'The area is cleansed and a cooling gel is applied for comfort during the procedure.'
                  },
                  {
                    step: 3,
                    title: 'Treatment',
                    description: 'The laser is applied systematically across the treatment area. Most clients report mild discomfort.'
                  },
                  {
                    step: 4,
                    title: 'Aftercare',
                    description: 'We apply soothing cream and give you simple care instructions for optimal results.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Gallery */}
            <div className="mt-16">
              <BeforeAfterGallery serviceType="laser-hair-removal" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Pricing</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">Small area</p>
                  <p className="text-2xl font-bold text-medical-blue">$150</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">Medium area</p>
                  <p className="text-2xl font-bold text-medical-blue">$300</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Large area</p>
                  <p className="text-2xl font-bold text-medical-blue">$500</p>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white mb-4 h-12"
              >
                <a 
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                >Book Appointment</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full h-12"
              >
                <Link href="/contact">Contact Us for Query</Link>
              </Button>

              {/* Info box */}
              <div className="mt-8 pt-8 border-t space-y-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Package</p>
                  <p className="font-semibold">6-session packages available with 20% discount</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Best For</p>
                  <p className="font-semibold">Legs, underarms, bikini area, face, back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}