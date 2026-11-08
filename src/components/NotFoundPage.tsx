import React from 'react';
import { ArrowLeft, Compass, Mail } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface NotFoundPageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  language,
  onNavigateHome,
  onNavigateContact,
}) => {
  const isZh = language === 'zh';

  return (
    <section className="min-h-[75vh] flex items-center justify-center py-20 px-6 sm:px-12 bg-surface">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        {/* Soft Botanical Accent Image */}
        <div className="flex justify-center">
          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-sm border border-outline-variant/30 p-1 bg-surface-container-low">
            <img
              src={getAssetUrl('assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg')}
              alt="Botanical Still Life"
              className="w-full h-full object-cover rounded-full filter grayscale contrast-90 brightness-105 opacity-90"
            />
          </div>
        </div>

        {/* Quiet 404 Headline */}
        <div className="space-y-3">
          <p className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
            404 — {isZh ? '寻处未至' : 'Path Not Found'}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-tight">
            {isZh ? '行至溪深处，暂歇片刻' : 'A Quiet Pause Along the Stream'}
          </h1>
        </div>

        {/* Simple & Elegant Sentences */}
        <div className="max-w-lg mx-auto text-on-surface-variant text-base sm:text-lg leading-relaxed font-body-md space-y-3 text-balance">
          {isZh ? (
            <>
              <p>您所寻访的路径或许已被更名、移置，或顺水流重新寻径。</p>
              <p className="text-secondary font-serif italic text-base">
                “如溪水遇阻，终会择安然之处流淌。请于此时此刻，随心稍作休整。”
              </p>
            </>
          ) : (
            <>
              <p>The path you are seeking may have been renamed, moved, or is gently rerouting.</p>
              <p className="text-secondary font-serif italic text-base">
                “Like water finding its serene course, take a quiet breath.”
              </p>
            </>
          )}
        </div>

        {/* Elegant Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-sm hover:bg-primary-container transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{isZh ? '返回首页' : 'Return Home'}</span>
          </button>
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-outline text-on-surface font-label-md text-sm hover:bg-surface-container transition-all"
          >
            <Mail className="w-4 h-4 text-secondary" />
            <span>{isZh ? '联系咨询' : 'Contact Support'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
