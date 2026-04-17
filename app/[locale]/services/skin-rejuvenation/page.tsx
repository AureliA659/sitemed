'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Zap, Shield, Clock } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/before-after-gallery';

export default function SkinRejuvenationPage() {
  const t = useTranslations('servicePage');

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="flex items-center space-x-2 mb-6 w-fit hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('backToServices')}</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('skin.title')}</h1>
          <p className="text-xl opacity-90">{t('skin.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('skin.overviewTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6">{t('skin.overviewP1')}</p>
              <p className="text-lg text-gray-700">{t('skin.overviewP2')}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 bg-pink-50 p-6 rounded-lg mb-12">
              <div className="text-center">
                <Zap className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">{t('duration')}</p>
                <p className="text-xl font-bold text-pink-600">{t('skin.durationValue')}</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">{t('recovery')}</p>
                <p className="text-xl font-bold text-pink-600">{t('skin.recoveryValue')}</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">{t('resultsLast')}</p>
                <p className="text-xl font-bold text-pink-600">{t('skin.resultsLastValue')}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{t('skin.treatmentModalities')}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-600 pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('skin.rfTitle')}</h3>
                  <p className="text-gray-700">{t('skin.rfDesc')}</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('skin.peelTitle')}</h3>
                  <p className="text-gray-700">{t('skin.peelDesc')}</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('skin.iplTitle')}</h3>
                  <p className="text-gray-700">{t('skin.iplDesc')}</p>
                </div>
                <div className="border-l-4 border-rose-400 pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('skin.laserTitle')}</h3>
                  <p className="text-gray-700">{t('skin.laserDesc')}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{t('keyBenefits')}</h2>
              <ul className="space-y-4">
                {(t.raw('skin.benefits') as string[]).map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">{t('skin.yourJourney')}</h2>
              <div className="space-y-6">
                {(t.raw('skin.steps') as { title: string; description: string }[]).map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <BeforeAfterGallery serviceType="skin-rejuvenation" />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">{t('pricing')}</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">{t('skin.rfMicroneedling')}</p>
                  <p className="text-2xl font-bold text-pink-600">{t('skin.rfPrice')}</p>
                  <p className="text-sm text-gray-500">{t('perSession')}</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">{t('skin.chemicalPeel')}</p>
                  <p className="text-2xl font-bold text-pink-600">{t('skin.chemicalPeelPrice')}</p>
                  <p className="text-sm text-gray-500">{t('dependingOnType')}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">{t('skin.iplLaser')}</p>
                  <p className="text-2xl font-bold text-pink-600">{t('skin.iplLaserPrice')}</p>
                  <p className="text-sm text-gray-500">{t('perTreatment')}</p>
                </div>
              </div>

              <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white mb-4 h-12">
                <a href={process.env.NEXT_PUBLIC_DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
                  {t('bookAppointment')}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full h-12">
                <Link href="/contact">{t('consultation')}</Link>
              </Button>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">{t('skin.packageDeals')}</p>
                  <p className="font-semibold">{t('skin.packageDealsValue')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">{t('skin.resultsInfo')}</p>
                  <p className="font-semibold">{t('skin.resultsInfoValue')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">{t('skin.bestFor')}</p>
                  <p className="font-semibold">{t('skin.bestForValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
