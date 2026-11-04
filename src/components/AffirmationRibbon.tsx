import React from 'react';
import { Language } from '../types';
import { affirmationMantras } from '../data/navigationData';

interface AffirmationRibbonProps {
  language: Language;
}

export const AffirmationRibbon: React.FC<AffirmationRibbonProps> = ({ language }) => {
  const mantras = affirmationMantras[language];
  // Repeat array twice to create a seamless infinite marquee effect
  const repeatedList = [...mantras, ...mantras, ...mantras, ...mantras];

  return (
    <section className="w-full bg-surface-container py-3.5 overflow-hidden select-none border-b border-[#2e382b]/5">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex items-center space-x-8 whitespace-nowrap animate-marquee font-ticker-label text-sm md:text-base text-on-surface-variant">
          {repeatedList.map((mantra, index) => (
            <React.Fragment key={`${mantra}-${index}`}>
              <span>{mantra}</span>
              <span className="text-[#c28265] text-base" aria-hidden="true">
                ✿
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
