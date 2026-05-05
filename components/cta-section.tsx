'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section
      id="book-appointment"
      className="py-24 bg-charcoal text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="block w-8 h-px bg-gold/50"></span>
            <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-sans">
              Réservation
            </span>
            <span className="block w-8 h-px bg-gold/50"></span>
          </div>

          <h2 className="text-white mb-6 font-light">
            {t('title')}
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed text-lg font-light max-w-xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white text-sm px-10 py-6 h-auto rounded-none tracking-widest uppercase"
              asChild
            >
              <a
                href="https://www.doctolib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('bookDoctolib')}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-white/20 text-white hover:bg-white/10 text-sm px-10 py-6 h-auto rounded-none tracking-widest uppercase"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="w-4 h-4 mr-2" />
                {t('call')} (123) 456-7890
              </a>
            </Button>
          </div>

          <p className="text-xs text-white/25 mt-8 tracking-widest uppercase">
            {t('availability')}
          </p>
        </div>
      </div>
    </section>
  );
}
