import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Zap, Shield, Clock } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/before-after-gallery';

export const metadata: Metadata = {
  title: 'Injectable Treatments - Medical Excellence Center',
  description: 'Botox and dermal fillers for natural-looking facial rejuvenation. Expert administration for optimal results.',
};

export default function InjectableTreatmentsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="flex items-center space-x-2 mb-6 w-fit hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Injectable Treatments</h1>
          <p className="text-xl opacity-90">Botox and dermal fillers for natural-looking rejuvenation</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Facial Rejuvenation</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our board-certified physicians specialize in administering premium injectable treatments that enhance your natural beauty. Whether you're looking to smooth wrinkles with neuromodulators or restore volume with dermal fillers, we customize every treatment to your unique goals.
              </p>
              <p className="text-lg text-gray-700">
                You'll see immediate results that continue to improve over 2-4 weeks. The best part? No surgery, no downtime, and results that look entirely natural.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 bg-blue-50 p-6 rounded-lg mb-12">
              <div className="text-center">
                <Zap className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Duration</p>
                <p className="text-xl font-bold text-medical-blue">15-30 min</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Full Results</p>
                <p className="text-xl font-bold text-medical-blue">2-4 weeks</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Lasts</p>
                <p className="text-xl font-bold text-medical-blue">3-12 months</p>
              </div>
            </div>

            {/* Treatment Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Treatment Options</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-medical-blue pl-6">
                  <h3 className="text-xl font-bold mb-2">Neuromodulators (Botox)</h3>
                  <p className="text-gray-700">Smooths dynamic wrinkles caused by facial expressions. Perfect for forehead lines, crow's feet, and between the brows.</p>
                </div>
                <div className="border-l-4 border-health-green pl-6">
                  <h3 className="text-xl font-bold mb-2">Dermal Fillers</h3>
                  <p className="text-gray-700">Restores volume to cheeks, lips, and under-eye areas. Addresses static wrinkles and enhances facial contours naturally.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold mb-2">Combination Treatments</h3>
                  <p className="text-gray-700">Our physicians often recommend strategic combinations for comprehensive facial rejuvenation and optimal symmetry.</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  'Natural-looking results that enhance your features',
                  'No surgery or general anesthesia required',
                  'Immediate results (improved over 2-4 weeks)',
                  'Minimal downtime - return to activity same day',
                  'Customized treatment plans by board-certified physicians',
                  'Reversible and adjustable',
                  'Long-lasting results (3-12 months)',
                  'Preventative anti-aging benefits'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-medical-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to expect */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Consultation',
                    description: 'We discuss your goals and analyze your facial features to create a customized treatment plan.'
                  },
                  {
                    step: 2,
                    title: 'Preparation',
                    description: 'The area is cleansed. Optional numbing cream can be applied for enhanced comfort.'
                  },
                  {
                    step: 3,
                    title: 'Injection',
                    description: 'Our physician carefully injects the product using precise techniques for balanced, natural results.'
                  },
                  {
                    step: 4,
                    title: 'Aftercare',
                    description: 'We provide detailed instructions. Most clients see full results within 2-4 weeks.'
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
              <BeforeAfterGallery serviceType="injectable-treatments" />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Pricing</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">Neuromodulator</p>
                  <p className="text-2xl font-bold text-medical-blue">$200</p>
                  <p className="text-sm text-gray-500">per area</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">Dermal Fillers</p>
                  <p className="text-2xl font-bold text-medical-blue">$400+</p>
                  <p className="text-sm text-gray-500">per syringe</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Combination</p>
                  <p className="text-2xl font-bold text-medical-blue">$600+</p>
                  <p className="text-sm text-gray-500">customized</p>
                </div>
              </div>

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
                <Link href="/contact">Consultation</Link>
              </Button>

              {/* Info box */}
              <div className="mt-8 pt-8 border-t space-y-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Premium Products</p>
                  <p className="font-semibold">FDA-approved brands only</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Expertise</p>
                  <p className="font-semibold">Board-certified physicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}