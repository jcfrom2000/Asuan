import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ClosingCtaProps {
  language: Language;
  onOpenBooking?: () => void;
  onOpenContact?: () => void;
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
      <div className="max-w-[960px] mx-auto px-5 md:px-16 text-center space-y-4">
        {/* Poetic Rilke Quote */}
        <blockquote className="reveal-text-soft font-quote-lead text-xl sm:text-2xl md:text-[26px] font-normal text-white/95 italic leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
          {t.closingCta.quote}
        </blockquote>
        <p
          className="reveal-on-scroll reveal-delay-100 font-label-md text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
          style={{ color: 'rgb(214, 163, 139)' }}
        >
          {t.closingCta.author}
        </p>

        <div className="pt-6 reveal-on-scroll reveal-delay-200">
          <button
            type="button"
            onClick={onOpenContact || onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#fbf7f0] text-[#1e251d] hover:bg-white transition-all font-label-md text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
          >
            <span>{language === 'zh' ? '联系在溪心理 • 开启咨询' : 'Contact Practice & Begin Care'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
