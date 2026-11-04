import React from 'react';

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  onAction: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  category,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  onAction,
}) => {
  return (
    <div className="group flex flex-col bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container transition-all duration-300 shadow-xs hover:shadow-md border border-[#2e382b]/5">
      {/* 4:3 Image Container with Soft Zoom on Hover */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={imageAlt}
          src={imageSrc}
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 md:p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-1.5">
          <span
            className="font-label-md uppercase tracking-widest text-xs font-medium"
            style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
          >
            {category}
          </span>
          <h3 className="font-headline-md text-xl md:text-2xl text-primary font-normal leading-snug">
            {title}
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center justify-center w-full py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-xs sm:text-sm active:scale-[0.98] cursor-pointer"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};
