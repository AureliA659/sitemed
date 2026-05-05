'use client';

import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4047074/pexels-photo-4047074.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20"></div>
      </div>

      <div className="container mx-auto px-4 py-40 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-10 h-px bg-gold"></span>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-sans">
              Centre Médical d&apos;Esthétique
            </span>
          </div>

          <h1 className="text-white mb-6 text-balance font-light">
            {t('title')}
            <br />
            <em className="text-gold not-italic">{t('titleHighlight')}</em>
          </h1>

          <p className="text-lg md:text-xl text-white/65 mb-10 leading-relaxed max-w-xl font-light">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white text-sm px-8 py-6 h-auto rounded-none tracking-widest uppercase"
              asChild
            >
              <a
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('cta')}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 text-sm px-8 py-6 h-auto rounded-none tracking-widest uppercase"
              asChild
            >
              <a href="#services">
                {t('exploreServices')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
            {[
              { value: '4', label: t('stats.physicians') },
              { value: '15+', label: t('stats.experience') },
              { value: '10k+', label: t('stats.patients') },
              { value: '98%', label: t('stats.satisfaction') },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="font-heading text-4xl md:text-5xl font-light text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase font-sans mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ivory to-transparent"></div>
    </section>
  );
}
