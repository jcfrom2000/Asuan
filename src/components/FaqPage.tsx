import React, { useState, useMemo } from 'react';
import { ArrowLeft, ChevronDown, HelpCircle, Layers, ChevronsUpDown, Check } from 'lucide-react';
import { Language } from '../types';
import { faqData } from '../data/faqData';
import { FaqAnswerView } from './FaqAnswerView';

interface FaqPageProps {
  language: Language;
  onOpenBooking: () => void;
  onNavigateHome: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  language,
  onOpenBooking,
  onNavigateHome,
}) => {
  // Default all collapsed as requested
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const isZh = language === 'zh';

  // Toggle single FAQ item
  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const cats: { key: string; labelEn: string; labelZh: string; count: number }[] = [];
    cats.push({
      key: 'all',
      labelEn: 'All Questions',
      labelZh: '全部问题',
      count: faqData.length,
    });

    faqData.forEach((item) => {
      const catKey = item.categoryEn || 'General';
      const existing = cats.find((c) => c.key === catKey);
      if (existing) {
        existing.count += 1;
      } else {
        cats.push({
          key: catKey,
          labelEn: item.categoryEn || 'General',
          labelZh: item.categoryZh || '通用须知',
          count: 1,
        });
      }
    });
    return cats;
  }, []);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'all') return faqData;
    return faqData.filter((item) => (item.categoryEn || 'General') === selectedCategory);
  }, [selectedCategory]);

  // Expand all / Collapse all helper
  const allCurrentExpanded = filteredFaqs.length > 0 && filteredFaqs.every((f) => openIds.has(f.id));
  const toggleAll = () => {
    if (allCurrentExpanded) {
      setOpenIds(new Set());
    } else {
      setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
    }
  };

  return (
    <div className="w-full bg-surface">
      {/* 1. Header / Intro */}
      <section className="bg-surface-container-low pt-12 pb-14 border-b border-[#2e382b]/5">
        <div className="max-w-[880px] mx-auto px-5 md:px-16 space-y-6">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-label-md text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isZh ? '返回首页' : 'Back to Home'}</span>
          </button>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ebe1] text-[#a35e3e] text-xs font-semibold tracking-wider uppercase font-label-md">
              <span>{isZh ? '答疑解惑 • 咨询须知' : 'Client Inquiries & Clinical Transparency'}</span>
            </div>
            <h1 className="font-headline-lg text-3xl sm:text-4xl text-primary font-normal leading-tight">
              {isZh ? '常见问题与解答 (FAQs)' : 'Frequently Asked Questions'}
            </h1>
            <p className="font-body-md text-base text-on-surface-variant max-w-2xl leading-relaxed">
              {isZh
                ? '清晰透明地解答执照执业范围、保险与自费政策、性治疗伦理规范（纯谈话无触碰）及移民心理评估要点。'
                : 'Clear, compassionate answers regarding session fees, licensure (IL & MI), insurance & superbills, ethics of sex therapy, and immigration evaluations.'}
            </p>
          </div>

          {/* Category Chips Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              const label = isZh ? cat.labelZh : cat.labelEn;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-label-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-white shadow-2xs font-medium'
                      : 'bg-white border border-[#2e382b]/10 text-secondary hover:text-primary hover:bg-[#fafaf4]'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#2e382b]/5 text-secondary'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Controls & FAQ Accordion List */}
      <section className="py-12 md:py-20 bg-surface border-b border-[#2e382b]/5">
        <div className="max-w-[880px] mx-auto px-5 md:px-16 space-y-6">
          {/* Top Actions: Total Count & Expand/Collapse All */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-secondary font-label-md px-1">
            <span>
              {isZh
                ? `共 ${filteredFaqs.length} 条常见问题`
                : `Showing ${filteredFaqs.length} questions`}
            </span>
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-1.5 text-[#a35e3e] hover:text-[#7e462c] font-medium transition-colors cursor-pointer"
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              <span>
                {allCurrentExpanded
                  ? isZh
                    ? '全部折叠'
                    : 'Collapse All'
                  : isZh
                  ? '全部展开'
                  : 'Expand All'}
              </span>
            </button>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);
              const question = isZh ? faq.questionZh : faq.questionEn;
              const answer = isZh ? faq.answerZh : faq.answerEn;
              const categoryTag = isZh ? faq.categoryZh : faq.categoryEn;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-[#fafaf4] border-[#2e382b]/15 shadow-xs'
                      : 'bg-white border-[#2e382b]/8 hover:border-[#2e382b]/15 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-7 py-5 text-left flex items-start sm:items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      {categoryTag && (
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-[#a35e3e] font-semibold">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-secondary/80 font-label-md bg-[#2e382b]/5 px-2 py-0.5 rounded">
                            {categoryTag}
                          </span>
                        </div>
                      )}
                      <h3 className="font-headline-md text-[16px] sm:text-[17.5px] text-primary font-medium leading-snug">
                        {question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#f4ebe1] text-[#a35e3e] rotate-180' : 'bg-[#fafaf4] text-secondary'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-7 pb-6 pt-1 border-t border-[#eeeee6]">
                      <FaqAnswerView content={answer} isZh={isZh} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom Consultation Box */}
      <section className="py-16 bg-[#fafaf4] border-b border-[#2e382b]/5 text-center">
        <div className="max-w-[640px] mx-auto px-5 space-y-5">
          <HelpCircle className="w-10 h-10 text-[#a35e3e] mx-auto" />
          <h2 className="font-headline-md text-2xl text-primary font-normal">
            {isZh ? '还有其他想了解的具体问题？' : 'Have a Question Not Answered Here?'}
          </h2>
          <p className="text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed">
            {isZh
              ? '欢迎预约 15 分钟免费初始沟通电话，共同感受彼此的节奏；或随时发送保密留言，Jessica 将尽快为您解答。'
              : 'Feel free to schedule a free 15-minute introductory call to explore your specific questions and see if our rhythm aligns.'}
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            {isZh ? '预约 15 分钟免费初访' : 'Schedule Free 15-Min Call'}
          </button>
        </div>
      </section>
    </div>
  );
};
