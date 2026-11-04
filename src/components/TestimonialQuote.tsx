import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TestimonialQuoteProps {
  language: Language;
}

export const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-surface-container-high border-b border-[#2e382b]/5">
      {/* Organic eucalyptus background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          alt="Blurred macro close-up of lush green eucalyptus and soft water mist droplets, soft organic texture, calming meditation sanctuary tone."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPR1Es6CLI6mRAdRc3jIMjbq6_Oj6dQ_gAOPdIjbT2c_JnekLg6FSdW2Q-HtWwVkx57zP6wOFyfXtQPSkxp-tJKXNkotKj2D5IQ0xFunD6-hpRZhmofgShc6Ak0Pp-ZUNFD73Uct4JUZqFGyFY5TOmF4G_J4WtbCTbAsZP0ucMPHMIFHQdtT4KaUOF6OrLVGYsy8u29sBlY0SQZCsPeBEHThVGtmtALMxFIv6mnJQjzoEsXJslH59"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-[920px] mx-auto px-5 md:px-16 text-center space-y-3 z-10">
        <span
          className="font-headline-lg leading-none select-none inline-block"
          style={{ color: 'rgb(185, 119, 90)', fontSize: '52px' }}
        >
          “
        </span>

        <blockquote
          className="reveal-text-soft font-quote-lead text-xl sm:text-2xl text-primary font-normal italic leading-relaxed"
          style={{
            borderLeft: '2px solid rgb(194, 130, 101)',
            paddingLeft: '1.5rem',
            textAlign: 'left',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {t.testimonial.quote}
        </blockquote>

        <div className="reveal-on-scroll reveal-delay-200 pt-3">
          <p className="font-label-md text-xs sm:text-sm uppercase tracking-widest text-on-surface-variant font-medium">
            {t.testimonial.attribution}
          </p>
        </div>
      </div>
    </section>
  );
};
