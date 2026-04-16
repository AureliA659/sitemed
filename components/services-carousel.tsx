'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    id: '1',
    titleKey: 'laserHairRemoval',
    descKey: 'laserHairRemovalDesc',
    image:
      'https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/laser-hair-removal',
  },
  {
    id: '2',
    titleKey: 'injectableTreatments',
    descKey: 'injectableTreatmentsDesc',
    image:
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/injectable-treatments',
  },
  {
    id: '3',
    titleKey: 'skinRejuvenation',
    descKey: 'skinRejuvenationDesc',
    image:
      'https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/skin-rejuvenation',
  },
  {
    id: '4',
    titleKey: 'consultations',
    descKey: 'consultationsDesc',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/consultations',
  },
];

export function ServicesCarousel() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-medical-blue mb-4">{t('title')}</h2>
          <p className="text-lg text-[#424242] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-[#212121] mb-3">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-[#424242] mb-4 leading-relaxed">
                        {t(service.descKey)}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-medical-blue hover:text-medical-blue-dark font-medium transition-colors group/link"
                      >
                        {t('discoverMore')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-medical-blue hover:text-medical-blue-dark font-semibold text-lg transition-colors group"
          >
            {t('viewAll')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
