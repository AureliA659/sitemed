import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Zap, Shield, Clock } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/before-after-gallery';

export const metadata: Metadata = {
  title: 'Skin Rejuvenation - Medical Excellence Center',
  description: 'Advanced skin treatments for youthful, glowing skin. RF, chemical peels, and more.',
};

export default function SkinRejuvenationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="flex items-center space-x-2 mb-6 w-fit hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skin Rejuvenation</h1>
          <p className="text-xl opacity-90">Advanced treatments for youthful, radiant skin</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Skin Transformation</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive skin rejuvenation treatments use cutting-edge technology to address multiple signs of aging and skin damage. From fine lines and wrinkles to age spots and uneven texture, we have solutions that work.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need a single treatment or a complete skincare regimen, our physicians will develop a personalized plan to help you achieve your best skin at any age.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 bg-pink-50 p-6 rounded-lg mb-12">
              <div className="text-center">
                <Zap className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Duration</p>
                <p className="text-xl font-bold text-pink-600">45-90 min</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Recovery</p>
                <p className="text-xl font-bold text-pink-600">3-7 days</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Results Last</p>
                <p className="text-xl font-bold text-pink-600">6-12 months</p>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Treatment Modalities</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-600 pl-6">
                  <h3 className="text-xl font-bold mb-2">Radiofrequency (RF) Microneedling</h3>
                  <p className="text-gray-700">Combines microneedling with radiofrequency energy to stimulate collagen production. Perfect for skin tightening, texture refinement, and scar reduction.</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-xl font-bold mb-2">Chemical Peels</h3>
                  <p className="text-gray-700">Customized chemical formulations remove damaged outer layers to reveal fresh, glowing skin. Multiple strengths available for various skin concerns.</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-6">
                  <h3 className="text-xl font-bold mb-2">IPL Photo Rejuvenation</h3>
                  <p className="text-gray-700">Intense Pulsed Light treats age spots, sun damage, and uneven skin tone for a more youthful, radiant complexion.</p>
                </div>
                <div className="border-l-4 border-rose-400 pl-6">
                  <h3 className="text-xl font-bold mb-2">Laser Resurfacing</h3>
                  <p className="text-gray-700">Ablative and non-ablative laser options target wrinkles, scars, and skin texture for dramatic rejuvenation results.</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {[
                  'Improved skin texture and tone',
                  'Reduced appearance of wrinkles and fine lines',
                  'Diminished age spots and sun damage',
                  'Enhanced skin radiance and glow',
                  'Increased collagen production',
                  'Addresses acne scars and other blemishes',
                  'Customizable treatments for all skin types',
                  'Gradual, natural-looking results',
                  'Minimal downtime with proper aftercare'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment Plan */}
            <div className="bg-pink-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Your Rejuvenation Journey</h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Skin Assessment',
                    description: 'Comprehensive evaluation of your skin condition, concerns, and goals to determine the best treatment approach.'
                  },
                  {
                    step: 2,
                    title: 'Custom Plan',
                    description: 'We develop a personalized treatment regimen tailored to your specific needs and desired outcomes.'
                  },
                  {
                    step: 3,
                    title: 'Treatment',
                    description: 'Professional application of your chosen treatment modality with expert technique and care.'
                  },
                  {
                    step: 4,
                    title: 'Maintenance',
                    description: 'Detailed aftercare instructions and follow-up appointments to ensure optimal results over time.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
              <BeforeAfterGallery serviceType="skin-rejuvenation" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Pricing</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">RF Microneedling</p>
                  <p className="text-2xl font-bold text-pink-600">$300</p>
                  <p className="text-sm text-gray-500">per session</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">Chemical Peel</p>
                  <p className="text-2xl font-bold text-pink-600">$200-400</p>
                  <p className="text-sm text-gray-500">depending on type</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">IPL / Laser</p>
                  <p className="text-2xl font-bold text-pink-600">$250-500</p>
                  <p className="text-sm text-gray-500">per treatment</p>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-pink-600 hover:bg-pink-700 text-white mb-4 h-12"
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
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Package Deals</p>
                  <p className="font-semibold">Multi-treatment packages available</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Results</p>
                  <p className="font-semibold">Visible after first session</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Best For</p>
                  <p className="font-semibold">All skin types and ages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}