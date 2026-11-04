import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ClosingCtaProps {
  language: Language;
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({
  language,
  onOpenBooking,
  onOpenContact,
}) => {
  const t = translations[language];

  return (
    <section
      id="closing-cta"
      className="w-full bg-[#2e382b] text-white py-20 md:py-28"
    >
      <div className="max-w-[960px] mx-auto px-5 md:px-16 text-center space-y-8">
        {/* Poetic Rilke Quote */}
        <div className="space-y-4">
          <blockquote className="reveal-text-soft font-quote-lead text-xl sm:text-2xl md:text-[26px] font-normal text-white/95 italic leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {t.closingCta.quote}
          </blockquote>
          <p
            className="reveal-on-scroll reveal-delay-100 font-label-md text-xs sm:text-sm uppercase tracking-[0.2em]"
            style={{ color: 'rgb(214, 163, 139)' }}
          >
            {t.closingCta.author}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="reveal-on-scroll reveal-delay-200 pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#fafaf4] text-[#192317] hover:bg-[#eeeee9] font-label-md text-sm font-medium transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            {t.closingCta.contactBtn}
          </button>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#172314] text-white hover:bg-[#192317] border border-[#94a38d]/30 transition-all font-label-md text-sm font-medium active:scale-[0.98] cursor-pointer"
          >
            {t.closingCta.scheduleBtn}
          </button>
        </div>
      </div>
    </section>
  );
};
