'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Doctor {
  id: string;
  key: string;
  image: string;
  yearsExperience: number;
}

const doctors: Doctor[] = [
  {
    id: '1',
    key: 'mitchell',
    image:
      'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    yearsExperience: 15,
  },
  {
    id: '2',
    key: 'chen',
    image:
      'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    yearsExperience: 18,
  },
  {
    id: '3',
    key: 'rodriguez',
    image:
      'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
    yearsExperience: 12,
  },
  {
    id: '4',
    key: 'anderson',
    image:
      'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    yearsExperience: 14,
  },
];

export function MedicalTeam() {
  const t = useTranslations('team');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-medical-blue mb-4">{t('title')}</h2>
          <p className="text-lg text-[#424242] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={t(`doctors.${doctor.key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-heading font-semibold mb-1">
                      {t(`doctors.${doctor.key}.name`)}
                    </h3>
                    <p className="text-sm text-white/90">{t(`doctors.${doctor.key}.specialty`)}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-[#424242] text-sm leading-relaxed">
                    {t(`doctors.${doctor.key}.bio`)}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-[#424242]">
                      <GraduationCap className="w-4 h-4 mr-2 text-medical-blue" />
                      <span>{t(`doctors.${doctor.key}.education`)}</span>
                    </div>
                    <div className="flex items-center text-sm text-[#424242]">
                      <Award className="w-4 h-4 mr-2 text-health-green" />
                      <span>{doctor.yearsExperience}+ {t('yearsExperience')}</span>
                    </div>
                  </div>

                  <Badge className="bg-medical-blue/10 text-medical-blue hover:bg-medical-blue/20 border-0">
                    {t('boardCertified')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
