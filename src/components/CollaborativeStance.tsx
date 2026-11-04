import React from 'react';
import { Wind } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CollaborativeStanceProps {
  language: Language;
}

export const CollaborativeStance: React.FC<CollaborativeStanceProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="w-full py-16 md:py-24 bg-surface">
      <div className="max-w-[1240px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Circular Vignette Motif with Offset Ring */}
          <div className="reveal-on-scroll lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Subtle offset sand ring */}
              <div className="absolute inset-0 -translate-x-4 translate-y-3 rounded-full bg-surface-container-high" />

              {/* Main Circular Stream Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="A vigorous crystalline mountain stream leaping over mossy river stones, salmon swimming upstream with sunlight sparkling through clean droplets, capturing dynamic vitality, endurance, and gentle natural flow in earth tones."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJhRMzdvZgVIqZujJjpw5eoaUGC8zbIK0YmudyEsos2VjTN17fH2t-nwk3HEpX8ci5aeZCvnVg29jFCnfJ_c7wEbs0gUXHW_rTW0bZdVLrpmBo1zSogDQ33Hhf-lPWAo1gv5btLwOMdW1hj0Nez_pOe97lVdUga4yuJH8YLzRSLHSqvO8H4lt9sYg2FECULaIxcQFFe7ej61jPdwo3xKBmwsP5TvDla8DCTCOXyi3ctdAL91afolqm"
                />
              </div>

              {/* Small Accent Stone Badge */}
              <div
                className="absolute top-4 right-2 w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
                style={{
                  backgroundColor: 'rgb(242, 227, 213)',
                  color: 'rgb(158, 91, 62)',
                  border: '2px solid rgb(255, 255, 255)',
                }}
              >
                <Wind className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Narrative Copy */}
          <div className="reveal-on-scroll reveal-delay-200 lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div className="space-y-1.5">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {t.collaborativeStance.eyebrow}
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                {t.collaborativeStance.heading}
              </h2>
            </div>

            <div className="space-y-4 font-body-lg text-base text-on-surface-variant max-w-xl leading-relaxed">
              <p className="font-serif text-lg sm:text-xl text-primary font-normal italic leading-relaxed border-l-2 border-[#c28265] pl-4 py-1.5 bg-[#fafaf4]/80 rounded-r-lg shadow-2xs">
                “{t.collaborativeStance.paragraph1}”
              </p>
              <p className="pt-1">{t.collaborativeStance.paragraph2}</p>
              <p className="text-primary font-medium">
                {t.collaborativeStance.paragraph3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
