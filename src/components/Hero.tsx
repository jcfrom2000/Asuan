import React, { useState, useRef, useEffect, useMemo } from 'react';
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

  // Process text into tokens (words for English, character clusters for Chinese)
  // while preserving sequential character animation delay indices across tokens.
  const tokenData = useMemo(() => {
    let rawTokens: string[] = [];
    if (isZh) {
      // Split Chinese by punctuation or logical character pairs/triplets
      rawTokens = headlineText.split(/(?<=[\uff0c\u3002])|/u).filter(Boolean);
    } else {
      // Split English by spaces to preserve unbreakable word boundaries
      rawTokens = headlineText.split(' ');
    }

    let globalLetterCount = 0;
    return rawTokens.map((token) => {
      const chars = token.split('');
      const charList = chars.map((char) => {
        const delayIndex = globalLetterCount;
        globalLetterCount++;
        return { char, delayIndex };
      });
      return { token, letters: charList };
    });
  }, [headlineText, isZh]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.muted = true;
      videoEl.defaultMuted = true;
      
      const handlePlaying = () => {
        setIsVideoLoaded(true);
      };

      videoEl.addEventListener('playing', handlePlaying);

      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch(() => {
            // Autoplay blocked or delayed, remain on seamless poster image
          });
      }

      return () => {
        videoEl.removeEventListener('playing', handlePlaying);
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f2ece3] via-[#e8ece3] to-[#fafaf4] pt-28 pb-16 md:pb-28 min-h-[420px] sm:min-h-[480px] flex items-center justify-center"
    >
      {/* 1. Poster Image Placeholder */}
      <img
        src={getAssetUrl('assets/videos/hero-nature-dawn-poster.jpg')}
        alt={t.imageAlts.heroLandscape}
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. High Definition Ambient Loop Background Video without default play overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setIsVideoLoaded(true)}
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        onLoadedData={() => setIsVideoLoaded(true)}
        style={{ filter: 'brightness(1.12) contrast(1.08) saturate(1.1)' }}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSourceUrl} type="video/mp4" />
      </video>

      {/* Gentle Dark Contrast Mask Overlay for White Headline Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 pointer-events-none z-2" />

      {/* 4. Hero Content Container */}
      <div className="relative max-w-[1240px] mx-auto px-5 md:px-16 z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-12 md:py-16 px-2 sm:px-4">
          <div className="w-full space-y-6 z-10 flex flex-col items-center text-center">
            
            {/* Headline with Word-Boundary Wrap Protection & Crisp Text Shadow */}
            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight max-w-3xl mx-auto leading-relaxed md:leading-snug">
              <div className="flex flex-wrap justify-center items-center gap-x-[0.35em] gap-y-1 sm:gap-y-2 max-w-xl sm:max-w-2xl mx-auto">
                {tokenData.map(({ token, letters }, tokenIdx) => (
                  <span
                    key={`token-${tokenIdx}`}
                    className="inline-block whitespace-nowrap"
                  >
                    {letters.map(({ char, delayIndex }, charIdx) => (
                      <span
                        key={`char-${tokenIdx}-${charIdx}`}
                        className="animate-letter-pop inline-block whitespace-pre text-white [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.9)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
                        style={{
                          animationDelay: `${delayIndex * (isZh ? 110 : 45)}ms`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </h1>

          </div>
        </div>
      </div>
    </section>
  );
};


