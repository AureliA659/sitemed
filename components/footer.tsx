'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#212121] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-medical-blue rounded-lg">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <span className="font-heading text-xl font-semibold">
                Medical Excellence
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('ourTeam')}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/laser-hair-removal"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('laserHairRemoval')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/injectable-treatments"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('injectableTreatments')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/skin-rejuvenation"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('skinRejuvenation')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultations"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  {t('consultations')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              {t('contactUs')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-health-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  211 boulevard Bineau
                  <br />
                  92200 Neuilly-sur-Seine
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-health-green flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-health-green transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-health-green flex-shrink-0" />
                <a
                  href="mailto:info@medicalexcellence.com"
                  className="text-gray-400 hover:text-health-green transition-colors text-sm"
                >
                  info@medicalexcellence.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-health-green flex-shrink-0" />
                <span className="text-gray-400 text-sm">{t('schedule')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 {t('copyright')}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-health-green transition-colors text-sm"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-health-green transition-colors text-sm"
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
