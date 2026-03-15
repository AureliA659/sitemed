'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  education: string;
  yearsExperience: number;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Dermatology & Aesthetic Medicine',
    bio: 'Board-certified dermatologist with over 15 years of experience in medical and cosmetic dermatology. Specialized in advanced laser treatments and injectable procedures.',
    image:
      'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    education: 'MD, Harvard Medical School',
    yearsExperience: 15,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Plastic Surgery & Reconstruction',
    bio: 'Renowned plastic surgeon specializing in facial rejuvenation and non-surgical aesthetic procedures. Known for natural-looking results and patient-centered care.',
    image:
      'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    education: 'MD, Johns Hopkins University',
    yearsExperience: 18,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Medical Aesthetics & Laser Therapy',
    bio: 'Expert in cutting-edge laser technologies and minimally invasive aesthetic procedures. Committed to evidence-based treatments and optimal patient outcomes.',
    image:
      'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
    education: 'MD, Stanford University',
    yearsExperience: 12,
  },
  {
    id: '4',
    name: 'Dr. James Anderson',
    specialty: 'Cosmetic Medicine & Injectables',
    bio: 'Highly skilled in advanced injection techniques and facial anatomy. Focuses on personalized treatment plans that enhance natural beauty while maintaining facial harmony.',
    image:
      'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    education: 'MD, Yale School of Medicine',
    yearsExperience: 14,
  },
];

export function MedicalTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-medical-blue mb-4">Our Medical Team</h2>
          <p className="text-lg text-[#424242] max-w-2xl mx-auto">
            Meet our team of four specialized physicians dedicated to providing
            exceptional care with scientific precision and compassionate service.
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
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-heading font-semibold mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-white/90">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-[#424242] text-sm leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-[#424242]">
                      <GraduationCap className="w-4 h-4 mr-2 text-medical-blue" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-sm text-[#424242]">
                      <Award className="w-4 h-4 mr-2 text-health-green" />
                      <span>{doctor.yearsExperience}+ Years Experience</span>
                    </div>
                  </div>

                  <Badge className="bg-medical-blue/10 text-medical-blue hover:bg-medical-blue/20 border-0">
                    Board Certified
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
