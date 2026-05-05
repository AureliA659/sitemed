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
    <section id="services" className="py-24 bg-taupe">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-gold"></span>
            <span className="label-luxury">Nos soins</span>
            <span className="block w-8 h-px bg-gold"></span>
          </div>
          <h2 className="text-charcoal mb-4">{t('title')}</h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
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
                <Card className="h-full group hover:shadow-xl transition-all duration-500 border border-gold/15 overflow-hidden rounded-none bg-white">
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
                      <h3 className="text-lg font-heading font-normal text-charcoal mb-2">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-warm-gray text-sm mb-5 leading-relaxed">
                        {t(service.descKey)}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-gold hover:text-gold-dark text-sm tracking-wide transition-colors group/link"
                      >
                        {t('discoverMore')}
                        <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/link:translate-x-1 transition-transform" />
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
            className="inline-flex items-center text-charcoal hover:text-gold font-sans text-sm tracking-widest uppercase transition-colors duration-300 group"
          >
            {t('viewAll')}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
