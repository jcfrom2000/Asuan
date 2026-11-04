import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { Language } from '../types';

export interface InfoModalContent {
  titleEn: string;
  titleZh: string;
  subtitleEn?: string;
  subtitleZh?: string;
  bodyEn: React.ReactNode;
  bodyZh: React.ReactNode;
}

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  content: InfoModalContent | null;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  language,
  content,
}) => {
  if (!isOpen || !content) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#fafaf4] max-w-xl w-full rounded-2xl shadow-xl border border-[#2e382b]/10 p-6 md:p-8 max-h-[85vh] overflow-y-auto space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#eeeee9] pb-4">
          <div className="space-y-1">
            <span className="font-label-md uppercase tracking-widest text-xs text-[#a35e3e] font-semibold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '执业规范与须知' : 'Practice Information'}</span>
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal">
              {language === 'zh' ? content.titleZh : content.titleEn}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-[#eeeee9] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-4">
          {language === 'zh' ? content.bodyZh : content.bodyEn}
        </div>

        <div className="pt-3 border-t border-[#eeeee9] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm shadow-xs"
          >
            {language === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
