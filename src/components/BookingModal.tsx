import React from 'react';
import { X, ShieldCheck, Calendar, Lock, Phone, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialService?: string;
  initialNote?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language,
  initialService,
}) => {
  const t = translations[language];
  const isZh = language === 'zh';

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#fafaf4] max-w-lg w-full rounded-2xl shadow-2xl border border-[#2e382b]/10 p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#eeeee9] pb-4 mb-5">
          <div className="space-y-1">
            <span className="font-label-md uppercase tracking-widest text-xs text-[#a35e3e] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{isZh ? 'HIPAA 医疗级安全保障' : 'HIPAA Compliant & Secure'}</span>
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal">
              {isZh ? '开启您的咨询与预约' : 'Connect & Begin Therapy'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-[#eeeee9] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Service Badge (If opened from a specific service page) */}
        {initialService && (
          <div className="mb-5 p-3 rounded-xl bg-[#f4f4ef] border border-[#e3e3de] flex items-center justify-between">
            <span className="font-body-sm text-xs text-on-surface-variant">
              {isZh ? '当前所选服务方向：' : 'Selected Care Path:'}
            </span>
            <span className="font-label-md text-xs font-semibold text-primary">
              {initialService}
            </span>
          </div>
        )}

        <div className="space-y-4">
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {isZh
              ? 'OverStream Therapy 严格遵循 HIPAA 医疗隐私安全标准。请选择您所需的通道，系统将带您前往安全的 SimplePractice 加密门户：'
              : 'OverStream Therapy adheres strictly to HIPAA privacy standards. Please select an option below to proceed via our secure SimplePractice portal:'}
          </p>

          {/* Option 1: New Client Service Request */}
          <div className="p-5 rounded-xl bg-white border border-[#a35e3e]/25 hover:border-[#a35e3e] shadow-2xs transition-all space-y-3 group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5 text-primary font-headline-md text-base sm:text-lg font-semibold">
                <div className="w-8 h-8 rounded-full bg-[#f3dfce] flex items-center justify-center text-[#a35e3e] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>{isZh ? '新客户：提交预约与初访申请' : 'New Clients: Request Consultation'}</span>
              </div>
            </div>

            <p className="font-body-sm text-xs text-on-surface-variant/90 leading-relaxed pl-10">
              {isZh
                ? '首次来访请在此在线选择咨询服务类别（个体、伴侣、性心理、辅导或评估），直接锁定方便的初访时间。'
                : 'Select your care path and request your preferred time slot for a complimentary 15-minute consultation.'}
            </p>

            <div className="pt-1 pl-10">
              <a
                href="https://overstreamtherapy.clientsecure.me/request/service"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary-container font-label-md text-xs sm:text-sm font-medium transition-all shadow-xs group-hover:translate-x-0.5"
              >
                <span>{isZh ? '前往 SimplePractice 安全预约表单' : 'Open Secure Request Form'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Option 2: Existing Client Portal Sign In */}
          <div className="p-5 rounded-xl bg-white border border-surface-container hover:border-secondary/50 shadow-2xs transition-all space-y-3 group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5 text-primary font-headline-md text-base sm:text-lg font-semibold">
                <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-secondary shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <span>{isZh ? '现有来访者：登录 Client Portal' : 'Existing Clients: Portal Sign In'}</span>
              </div>
            </div>

            <p className="font-body-sm text-xs text-on-surface-variant/90 leading-relaxed pl-10">
              {isZh
                ? '已建立咨询关系的来访者，请登录 Portal 查看后续约课时间、更新信息或调取医疗发票。'
                : 'Manage ongoing sessions, view billing records, and communicate securely.'}
            </p>

            <div className="pt-1 pl-10">
              <a
                href="https://overstreamtherapy.clientsecure.me/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-sm font-medium transition-colors"
              >
                <span>{isZh ? '登录 Secure Client Portal' : 'Sign In to Client Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Option 3: Direct Phone & Email */}
          <div className="pt-2 border-t border-[#eeeee9] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
              <a href="tel:3129670117" className="hover:text-primary transition-colors font-medium">
                (312) 967-0117
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
              <a href="mailto:info@overstreamtherapy.com" className="hover:text-primary transition-colors font-medium">
                info@overstreamtherapy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
