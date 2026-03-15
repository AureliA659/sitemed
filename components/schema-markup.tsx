export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Medical Excellence Center',
    description:
      'Premier medical center with four specialized physicians offering cutting-edge treatments, personalized care, and scientific expertise.',
    url: 'https://medicalexcellence.com',
    telephone: '+1-123-456-7890',
    email: 'info@medicalexcellence.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Medical Plaza, Suite 100',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.7749',
      longitude: '-122.4194',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PhysicianSchema() {
  const physicians = [
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Sarah Mitchell',
      jobTitle: 'Dermatology & Aesthetic Medicine Specialist',
      worksFor: {
        '@type': 'MedicalBusiness',
        name: 'Medical Excellence Center',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Harvard Medical School',
      },
      medicalSpecialty: 'Dermatology',
      yearsOfExperience: '15',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Michael Chen',
      jobTitle: 'Plastic Surgery & Reconstruction Specialist',
      worksFor: {
        '@type': 'MedicalBusiness',
        name: 'Medical Excellence Center',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Johns Hopkins University',
      },
      medicalSpecialty: 'Plastic Surgery',
      yearsOfExperience: '18',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Emily Rodriguez',
      jobTitle: 'Medical Aesthetics & Laser Therapy Specialist',
      worksFor: {
        '@type': 'MedicalBusiness',
        name: 'Medical Excellence Center',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Stanford University',
      },
      medicalSpecialty: 'Medical Aesthetics',
      yearsOfExperience: '12',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. James Anderson',
      jobTitle: 'Cosmetic Medicine & Injectables Specialist',
      worksFor: {
        '@type': 'MedicalBusiness',
        name: 'Medical Excellence Center',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Yale School of Medicine',
      },
      medicalSpecialty: 'Cosmetic Medicine',
      yearsOfExperience: '14',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(physicians) }}
    />
  );
}

export function MedicalServiceSchema() {
  const services = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Laser Hair Removal',
      description:
        'State-of-the-art laser technology for safe, effective, and permanent hair reduction.',
      procedureType: 'Cosmetic',
      availableService: {
        '@type': 'MedicalTherapy',
        name: 'Laser Hair Removal Treatment',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Injectable Treatments',
      description:
        'Expert administration of dermal fillers and neuromodulators for facial rejuvenation.',
      procedureType: 'Cosmetic',
      availableService: {
        '@type': 'MedicalTherapy',
        name: 'Injectable Aesthetic Treatment',
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}
