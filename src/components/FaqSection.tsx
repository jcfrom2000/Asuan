import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { faqData } from '../data/faqData';
import { translations } from '../data/translations';
import { FaqAnswerView } from './FaqAnswerView';

interface FaqSectionProps {
  language: Language;
  onNavigateToFaq?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language, onNavigateToFaq }) => {
  // All collapsed by default as requested
  const [openId, setOpenId] = useState<string | null>(null);
  const t = translations[language];
  const isZh = language === 'zh';

  // Preview first 4 FAQs on the homepage, with a CTA to the full FAQ page
  const previewFaqs = faqData.slice(0, 4);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="w-full py-16 md:py-24 bg-surface-container-low border-b border-[#2e382b]/5"
    >
      <div className="max-w-[880px] mx-auto px-5 md:px-16">
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-2xl mx-auto space-y-2 mb-10 md:mb-14">
          <span
            className="font-label-md uppercase tracking-widest text-xs font-medium"
            style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
          >
            {t.faqs.eyebrow}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
            {t.faqs.heading}
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {t.faqs.subheading}
          </p>
        </div>

        {/* Accordion Preview List */}
        <div className="reveal-on-scroll reveal-delay-100 space-y-3.5">
          {previewFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const question = isZh ? faq.questionZh : faq.questionEn;
            const answer = isZh ? faq.answerZh : faq.answerEn;
            const categoryTag = isZh ? faq.categoryZh : faq.categoryEn;

            return (
              <div
                key={faq.id}
                className={`rounded-xl overflow-hidden transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#fafaf4] border-[#2e382b]/15 shadow-xs'
                    : 'bg-white border-[#2e382b]/8 hover:border-[#2e382b]/15 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-start sm:items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <div className="space-y-1 flex-1 pr-2">
                    {categoryTag && (
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#a35e3e] font-semibold shrink-0">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-[10.5px] uppercase tracking-wider text-secondary/75 font-label-md bg-[#2e382b]/5 px-2 py-0.5 rounded">
                          {categoryTag}
                        </span>
                      </div>
                    )}
                    <span className="font-headline-md text-base sm:text-lg text-primary font-medium leading-snug block">
                      {question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#f4ebe1] text-[#a35e3e] rotate-180' : 'bg-[#fafaf4] text-secondary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#eeeee6]">
                    <FaqAnswerView content={answer} isZh={isZh} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA to Dedicated FAQ Page */}
        {onNavigateToFaq && (
          <div className="reveal-on-scroll reveal-delay-200 pt-8 text-center">
            <button
              type="button"
              onClick={onNavigateToFaq}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#2e382b]/10 text-primary hover:bg-[#f7f1eb] transition-all font-label-md text-sm font-medium shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <span>{isZh ? `查看全部 ${faqData.length} 个常见问题解答` : `View All ${faqData.length} Frequently Asked Questions`}</span>
              <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
