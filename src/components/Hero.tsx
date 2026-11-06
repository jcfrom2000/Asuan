import React, { useState, useRef, useEffect } from 'react';
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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Local MP4 video file stored directly in public/assets/videos/hero-nature-dawn.mp4
  const videoSourceUrl = getAssetUrl('assets/videos/hero-nature-dawn.mp4');

  const isZh = language === 'zh';
  const headlineText = t.hero.headline;
  // Letter-by-letter split for both English and Chinese
  const characters = headlineText.split('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback handled gracefully via poster image
        });
      }
    }
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f2ece3] via-[#e8ece3] to-[#fafaf4] pt-28 pb-16 md:pb-28 min-h-[420px] sm:min-h-[480px] flex items-center justify-center"
    >
      {/* 1. Poster Image Placeholder (Rendered instantly for zero LCP delay & fast paint) */}
      <img
        src={getAssetUrl('assets/videos/hero-nature-dawn-poster.jpg')}
        alt={t.imageAlts.heroLandscape}
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. High Definition Ambient Loop Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={getAssetUrl('assets/videos/hero-nature-dawn-poster.jpg')}
        onCanPlay={() => setIsVideoLoaded(true)}
        onLoadedData={() => setIsVideoLoaded(true)}
        style={{ filter: 'brightness(1.12) contrast(1.08) saturate(1.1)' }}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSourceUrl} type="video/mp4" />
      </video>

      {/* Gentle Subtle Veil for Headline Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafaf4]/10 to-[#fafaf4]/45 pointer-events-none z-2" />

      {/* 4. Hero Content Container */}
      <div className="relative max-w-[1240px] mx-auto px-5 md:px-16 z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-12 md:py-16 px-4">
          <div className="w-full space-y-6 z-10 flex flex-col items-center text-center">
            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-normal tracking-tight max-w-xl mx-auto leading-tight md:leading-[1.2] drop-shadow-xs flex flex-wrap justify-center">
              {characters.map((char, index) => {
                const isSpace = char === ' ';
                return (
                  <span
                    key={`${char}-${index}`}
                    className="animate-letter-pop inline-block whitespace-pre"
                    style={{
                      animationDelay: `${index * (isZh ? 110 : 40)}ms`,
                    }}
                  >
                    {isSpace ? '\u00A0' : char}
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
