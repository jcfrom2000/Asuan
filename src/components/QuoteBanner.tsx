import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface QuoteBannerProps {
  language: Language;
}

export const QuoteBanner: React.FC<QuoteBannerProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="w-full bg-surface-container-low py-16 border-y border-[#2e382b]/5">
      <div className="max-w-[880px] mx-auto px-5 md:px-16 text-center">
        {/* Practice Mission Quote */}
        <blockquote className="reveal-text-soft font-quote-lead text-xl md:text-2xl text-primary font-normal italic leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
          {t.quoteBanner.quote}
        </blockquote>
      </div>
    </section>
  );
};
