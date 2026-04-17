'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Zap, Shield, Clock } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/before-after-gallery';

export default function InjectableTreatmentsPage() {
  const t = useTranslations('servicePage');

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
        <div className="container mx-auto">
          <Link href="/services" className="flex items-center space-x-2 mb-6 w-fit hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('backToServices')}</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('injectable.title')}</h1>
          <p className="text-xl opacity-90">{t('injectable.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('injectable.overviewTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6">{t('injectable.overviewP1')}</p>
              <p className="text-lg text-gray-700">{t('injectable.overviewP2')}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 bg-blue-50 p-6 rounded-lg mb-12">
              <div className="text-center">
                <Zap className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">{t('duration')}</p>
                <p className="text-xl font-bold text-medical-blue">{t('injectable.durationValue')}</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">{t('fullResults')}</p>
                <p className="text-xl font-bold text-medical-blue">{t('injectable.fullResultsValue')}</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">{t('lasts')}</p>
                <p className="text-xl font-bold text-medical-blue">{t('injectable.lastsValue')}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{t('injectable.treatmentOptions')}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-medical-blue pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('injectable.botoxTitle')}</h3>
                  <p className="text-gray-700">{t('injectable.botoxDesc')}</p>
                </div>
                <div className="border-l-4 border-health-green pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('injectable.fillersTitle')}</h3>
                  <p className="text-gray-700">{t('injectable.fillersDesc')}</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold mb-2">{t('injectable.comboTitle')}</h3>
                  <p className="text-gray-700">{t('injectable.comboDesc')}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{t('keyBenefits')}</h2>
              <ul className="space-y-4">
                {(t.raw('injectable.benefits') as string[]).map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-medical-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">{t('injectable.whatToExpect')}</h2>
              <div className="space-y-6">
                {(t.raw('injectable.steps') as { title: string; description: string }[]).map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
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
              <BeforeAfterGallery serviceType="injectable-treatments" />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">{t('pricing')}</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">{t('injectable.neuromodulator')}</p>
                  <p className="text-2xl font-bold text-medical-blue">{t('injectable.neuromodulatorPrice')}</p>
                  <p className="text-sm text-gray-500">{t('perArea')}</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-gray-600 mb-1">{t('injectable.dermalFillers')}</p>
                  <p className="text-2xl font-bold text-medical-blue">{t('injectable.dermalFillersPrice')}</p>
                  <p className="text-sm text-gray-500">{t('perSyringe')}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">{t('injectable.combination')}</p>
                  <p className="text-2xl font-bold text-medical-blue">{t('injectable.combinationPrice')}</p>
                  <p className="text-sm text-gray-500">{t('customized')}</p>
                </div>
              </div>

              <Button asChild className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white mb-4 h-12">
                <a href={process.env.NEXT_PUBLIC_DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
                  {t('bookAppointment')}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full h-12">
                <Link href="/contact">{t('consultation')}</Link>
              </Button>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">{t('injectable.premiumProducts')}</p>
                  <p className="font-semibold">{t('injectable.premiumProductsValue')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">{t('injectable.expertise')}</p>
                  <p className="font-semibold">{t('injectable.expertiseValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
