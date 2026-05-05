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
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-gold"></span>
            <span className="label-luxury">Témoignages</span>
            <span className="block w-8 h-px bg-gold"></span>
          </div>
          <h2 className="text-charcoal mb-4">{t('title')}</h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border border-gold/10 shadow-none hover:shadow-md transition-shadow duration-300 rounded-none bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold/25" />
                </div>

                <p className="text-warm-gray leading-relaxed mb-6 text-sm">
                  {testimonial.comment}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-gold/10">
                  <div>
                    <p className="font-heading font-normal text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-warm-gray">
                      {testimonial.treatment}
                    </p>
                  </div>
                  <p className="text-xs text-warm-gray/60">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 p-8 sm:p-10 bg-charcoal rounded-none max-w-xl sm:max-w-none mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-light text-gold mb-2">
                4.9/5
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase">{t('averageRating')}</div>
            </div>
            <div className="hidden sm:block h-16 w-px bg-gold/20 mx-auto"></div>
            <div className="border-t sm:hidden border-gold/15"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-light text-gold mb-2">
                500+
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase">{t('patientReviews')}</div>
            </div>
            <div className="hidden sm:block h-16 w-px bg-gold/20 mx-auto"></div>
            <div className="border-t sm:hidden border-gold/15"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-light text-gold mb-2">
                98%
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase">
                {t('wouldRecommend')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
