import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  language: Language;
  onOpenBooking?: () => void;
  onExploreCarePaths?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
}) => {
  const t = translations[language];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-surface-container-low pt-28 pb-16 md:pb-28"
    >
      {/* Full-bleed Ambient Background Image (Optimized for LCP and Image SEO) */}
      <img
        src={getAssetUrl('assets/images/overstream-therapy-chicago-dawn-river-landscape-hero.jpg')}
        alt={t.imageAlts.heroLandscape}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative max-w-[1240px] mx-auto px-5 md:px-16 z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-12 md:py-16 px-4">
          <div className="w-full space-y-6 z-10 flex flex-col items-center text-center">
            <h1 className="reveal-on-scroll font-display-hero text-3xl sm:text-4xl md:text-5xl text-primary font-normal tracking-tight max-w-xl mx-auto leading-tight md:leading-[1.2] drop-shadow-xs">
              {t.hero.headline}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
