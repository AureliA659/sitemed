'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-5">
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[14px] font-semibold tracking-[0.18em] text-white uppercase">
                  Medical
                </span>
                <span className="font-heading text-[14px] font-light tracking-[0.35em] text-gold uppercase">
                  Excellence
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-normal text-sm tracking-[0.15em] uppercase text-white/60 mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('ourTeam')}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-normal text-sm tracking-[0.15em] uppercase text-white/60 mb-4">
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/laser-hair-removal"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('laserHairRemoval')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/injectable-treatments"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('injectableTreatments')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/skin-rejuvenation"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('skinRejuvenation')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultations"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {t('consultations')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-normal text-sm tracking-[0.15em] uppercase text-white/60 mb-4">
              {t('contactUs')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">
                  211 boulevard Bineau
                  <br />
                  92200 Neuilly-sur-Seine
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a
                  href="mailto:info@medicalexcellence.com"
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  info@medicalexcellence.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="text-white/40 text-sm">{t('schedule')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; 2024 {t('copyright')}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/30 hover:text-gold transition-colors text-sm"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-white/30 hover:text-gold transition-colors text-sm"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
