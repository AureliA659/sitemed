'use client';

import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4047074/pexels-photo-4047074.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/90 to-medical-blue/70"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white mb-6 text-balance">
            {t('title')}
            <br />
            <span className="text-health-green">{t('titleHighlight')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-health-green hover:bg-health-green-dark text-white text-lg px-8 py-6 h-auto"
              asChild
            >
              <a 
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('cta')}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-medical-blue text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="#services">
                {t('exploreServices')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                4
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {t('stats.physicians')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {t('stats.experience')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                10k+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {t('stats.patients')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {t('stats.satisfaction')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
