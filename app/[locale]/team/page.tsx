'use client';

import { useTranslations } from 'next-intl';
import { MedicalTeam } from '@/components/medical-team';
import { GraduationCap, Users, Heart, Handshake } from 'lucide-react';

export default function TeamPage() {
  const t = useTranslations('teamPage');

  const reasons = [
    { icon: GraduationCap, titleKey: 'reason1Title', descKey: 'reason1Desc' },
    { icon: Users, titleKey: 'reason2Title', descKey: 'reason2Desc' },
    { icon: Heart, titleKey: 'reason3Title', descKey: 'reason3Desc' },
    { icon: Handshake, titleKey: 'reason4Title', descKey: 'reason4Desc' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>

      <MedicalTeam />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('whyChooseUs')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason) => (
              <div key={reason.titleKey} className="text-center p-6">
                <reason.icon className="w-12 h-12 text-medical-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{t(reason.titleKey)}</h3>
                <p className="text-gray-600">{t(reason.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
