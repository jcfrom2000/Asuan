import React from 'react';
import { Language, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';
import { ServiceCard } from './ServiceCard';

interface CoreOfferingsProps {
  language: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const CoreOfferings: React.FC<CoreOfferingsProps> = ({
  language,
  onSelectService,
}) => {
  const t = translations[language];

  return (
    <section
      id="therapy-services"
      className="w-full py-16 md:py-24 bg-surface border-b border-[#2e382b]/5"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-16">
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-2xl mx-auto space-y-2 mb-12 md:mb-16">
          <span
            className="font-label-md uppercase tracking-widest text-xs font-medium"
            style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
          >
            {t.carePaths.eyebrow}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
            {t.carePaths.heading}
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {t.carePaths.subheading}
          </p>
        </div>

        {/* 3-Column Grid rendering via .map() */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`reveal-on-scroll ${
                index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : ''
              }`}
            >
              <ServiceCard
                category={language === 'zh' ? service.categoryZh : service.categoryEn}
                title={language === 'zh' ? service.titleZh : service.titleEn}
                description={language === 'zh' ? service.descriptionZh : service.descriptionEn}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                ctaText={language === 'zh' ? service.ctaTextZh : service.ctaTextEn}
                onAction={() => onSelectService(service)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
