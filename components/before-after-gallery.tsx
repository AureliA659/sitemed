'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface BeforeAfterItem {
  id: string;
  before_image_url: string;
  after_image_url: string;
  description?: string;
}

interface BeforeAfterGalleryProps {
  serviceType: string;
}

export function BeforeAfterGallery({ serviceType }: BeforeAfterGalleryProps) {
  const t = useTranslations('beforeAfter');
  const [items, setItems] = useState<BeforeAfterItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `/api/before-after?serviceType=${serviceType}`
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [serviceType]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-blue"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return null;
  }

  const currentItem = items[currentIndex];
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{t('title')}</h2>

      {/* Gallery */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={currentItem.before_image_url}
              alt={t('before')}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
              {t('before')}
            </div>
          </div>

          {/* After */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={currentItem.after_image_url}
              alt={t('after')}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 bg-medical-blue/90 text-white px-3 py-1 rounded text-sm font-semibold">
              {t('after')}
            </div>
          </div>
        </div>

        {/* Navigation */}
        {items.length > 1 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              className="p-2 bg-medical-blue hover:bg-medical-blue-dark text-white rounded-full transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-medical-blue w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 bg-medical-blue hover:bg-medical-blue-dark text-white rounded-full transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Description */}
        {currentItem.description && (
          <div className="mt-4 text-center text-gray-600 italic">
            {currentItem.description}
          </div>
        )}
      </div>

      {/* Counter */}
      {items.length > 1 && (
        <div className="text-center text-sm text-gray-500">
          {currentIndex + 1} {t('of')} {items.length}
        </div>
      )}
    </div>
  );
}