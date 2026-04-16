'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  treatment: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer M.',
    rating: 5,
    comment:
      'Exceptional care from start to finish. Dr. Mitchell took the time to explain every step of my treatment and the results exceeded my expectations. The entire team is professional and caring.',
    treatment: 'Laser Hair Removal',
    date: 'January 2024',
  },
  {
    id: '2',
    name: 'Robert K.',
    rating: 5,
    comment:
      "Dr. Chen's expertise is remarkable. He provided a thorough consultation and developed a personalized treatment plan that addressed all my concerns. I'm extremely satisfied with the outcome.",
    treatment: 'Injectable Treatments',
    date: 'December 2023',
  },
  {
    id: '3',
    name: 'Maria S.',
    rating: 5,
    comment:
      'The level of professionalism and attention to detail is outstanding. Dr. Rodriguez explained the science behind the treatment and ensured I was comfortable throughout the process.',
    treatment: 'Skin Rejuvenation',
    date: 'February 2024',
  },
  {
    id: '4',
    name: 'David L.',
    rating: 5,
    comment:
      'Dr. Anderson is truly an artist with injectables. The results look completely natural and I feel more confident than ever. The clinic environment is clean and welcoming.',
    treatment: 'Facial Contouring',
    date: 'January 2024',
  },
];

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-medical-blue mb-4">{t('title')}</h2>
          <p className="text-lg text-[#424242] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-health-green text-health-green"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-medical-blue/20" />
                </div>

                <p className="text-[#424242] leading-relaxed mb-6">
                  {testimonial.comment}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-[#212121]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#424242]">
                      {testimonial.treatment}
                    </p>
                  </div>
                  <p className="text-sm text-medical-gray">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-md">
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">
                4.9/5
              </div>
              <div className="text-sm text-[#424242]">{t('averageRating')}</div>
            </div>
            <div className="h-16 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">
                500+
              </div>
              <div className="text-sm text-[#424242]">{t('patientReviews')}</div>
            </div>
            <div className="h-16 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">
                98%
              </div>
              <div className="text-sm text-[#424242]">
                {t('wouldRecommend')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
