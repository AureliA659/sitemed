'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section
      id="book-appointment"
      className="py-20 bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-health-green hover:bg-health-green-dark text-white text-lg px-8 py-6 h-auto"
              asChild
            >
              <a
                href="https://www.doctolib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('bookDoctolib')}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white text-medical-blue hover:bg-gray-100 text-lg px-8 py-6 h-auto border-0"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                {t('call')} (123) 456-7890
              </a>
            </Button>
          </div>

          <p className="text-sm text-white/70 mt-6">
            {t('availability')}
          </p>
        </div>
      </div>
    </section>
  );
}
