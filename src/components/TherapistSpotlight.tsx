import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TherapistSpotlightProps {
  language: Language;
  onOpenBooking: () => void;
  onNavigateToAbout?: () => void;
}

export const TherapistSpotlight: React.FC<TherapistSpotlightProps> = ({
  language,
  onOpenBooking,
  onNavigateToAbout,
}) => {
  const t = translations[language];

  return (
    <>
      <section
        id="about-jessica"
        className="w-full py-16 md:py-24 bg-surface-container-low border-b border-[#2e382b]/5"
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Portrait Column with Off-Center Linen Card Backing */}
            <div className="reveal-on-scroll lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                  style={{ backgroundColor: 'rgb(235, 216, 203)' }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-surface">
                  <img
                    className="w-full h-full object-cover object-[50%_15%]"
                    alt={
                      language === 'zh'
                        ? '曹翱璇 (Jessica Cao), LCSW, LCPC, CST - 芝加哥多语种心理治疗师与认证性治疗师'
                        : 'Jessica Cao, LCSW, LCPC, CST - Licensed Psychotherapist and Certified Sex Therapist in Chicago'
                    }
                    src="/assets/aistudio/imgi_13_Cao_professionl_photo_589c0cba.jpg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Floating Credential Pill */}
                <div className="absolute -bottom-4 right-4 bg-white px-4 py-2.5 rounded-full shadow-md border border-[#2e382b]/5">
                  <p className="font-label-md text-xs sm:text-sm text-primary font-medium">
                    {t.therapistSpotlight.badgeTag}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio & Credentials Column */}
            <div className="reveal-on-scroll reveal-delay-200 lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal">
                  {t.therapistSpotlight.name}
                </h2>
                <p className="font-body-md text-sm md:text-base text-secondary font-medium">
                  {t.therapistSpotlight.roles}
                </p>
              </div>

              <div className="space-y-4 font-body-lg text-sm sm:text-base max-w-2xl leading-relaxed">
                <p className="font-medium text-primary leading-relaxed bg-[#fafaf4] p-5 rounded-2xl border border-[#c28265]/20 shadow-2xs">
                  {t.therapistSpotlight.bio1}
                </p>
                {t.therapistSpotlight.bio2 && (
                  <p className="leading-relaxed text-on-surface-variant px-1">
                    {t.therapistSpotlight.bio2}
                  </p>
                )}
                {t.therapistSpotlight.bio3 && (
                  <p className="leading-relaxed text-on-surface-variant px-1">
                    {t.therapistSpotlight.bio3}
                  </p>
                )}
              </div>

              {/* Call to Action Button: Navigates to About page (clean path) */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onNavigateToAbout}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-sm shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <span>{t.therapistSpotlight.readMoreCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
