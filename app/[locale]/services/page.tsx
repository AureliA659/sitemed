'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    titleKey: 'laserHairRemoval',
    descKey: 'laserHairRemovalDesc',
    image: 'https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/laser-hair-removal',
  },
  {
    titleKey: 'injectableTreatments',
    descKey: 'injectableTreatmentsDesc',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/injectable-treatments',
  },
  {
    titleKey: 'skinRejuvenation',
    descKey: 'skinRejuvenationDesc',
    image: 'https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/skin-rejuvenation',
  },
  {
    titleKey: 'consultations',
    descKey: 'consultationsDesc',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/contact',
  },
];

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link key={service.titleKey} href={service.href}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-semibold text-[#212121] mb-3">
                      {t(service.titleKey)}
                    </h2>
                    <p className="text-[#424242] mb-4 leading-relaxed">
                      {t(service.descKey)}
                    </p>
                    <span className="inline-flex items-center text-medical-blue hover:text-medical-blue-dark font-medium transition-colors group/link">
                      {t('learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
