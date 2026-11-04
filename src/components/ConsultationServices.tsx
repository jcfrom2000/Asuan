import React from 'react';
import { ConsultationItem, Language } from '../types';
import { communityData } from '../data/communityData';
import { translations } from '../data/translations';
import { ServiceCard } from './ServiceCard';

interface ConsultationServicesProps {
  language: Language;
  onSelectConsultation: (item: ConsultationItem) => void;
}

export const ConsultationServices: React.FC<ConsultationServicesProps> = ({
  language,
  onSelectConsultation,
}) => {
  const t = translations[language];

  return (
    <section
      id="community-services"
      className="w-full py-16 md:py-24 bg-surface border-b border-[#2e382b]/5"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-16">
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-2xl mx-auto space-y-2 mb-12 md:mb-16">
          <span
            className="font-label-md uppercase tracking-widest text-xs font-medium"
            style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
          >
            {t.consultationServices.eyebrow}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
            {t.consultationServices.heading}
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {t.consultationServices.subheading}
          </p>
        </div>

        {/* 3-Column Grid rendering via .map() */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {communityData.map((item, index) => (
            <div
              key={item.id}
              className={`reveal-on-scroll ${
                index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : ''
              }`}
            >
              <ServiceCard
                category={language === 'zh' ? item.categoryZh : item.categoryEn}
                title={language === 'zh' ? item.titleZh : item.titleEn}
                description={language === 'zh' ? item.descriptionZh : item.descriptionEn}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                ctaText={language === 'zh' ? item.ctaTextZh : item.ctaTextEn}
                onAction={() => onSelectConsultation(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
