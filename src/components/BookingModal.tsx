import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Send } from 'lucide-react';
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
  initialNote,
}) => {
  const t = translations[language];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Illinois');
  const [service, setService] = useState(initialService || 'Individual Therapy');
  const [format, setFormat] = useState('Telehealth Video');
  const [sessionLang, setSessionLang] = useState('Bilingual (EN / 中文)');
  const [notes, setNotes] = useState(initialNote || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (initialNote) {
      setNotes(initialNote);
    }
  }, [initialNote]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate gentle network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-[#fafaf4] max-w-lg w-full rounded-2xl shadow-2xl border border-[#2e382b]/10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#eeeee9] pb-4 mb-5">
          <div className="space-y-1">
            <span className="font-label-md uppercase tracking-widest text-xs text-[#a35e3e] font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '15分钟免费初访' : 'Complimentary Intake'}</span>
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal">
              {t.bookingModal.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-[#eeeee9] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#f3dfce] text-[#a35e3e] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-headline-md text-2xl text-primary font-normal">
              {t.bookingModal.successTitle}
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              {t.bookingModal.successMessage}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-7 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm shadow-xs"
              >
                {t.bookingModal.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {t.bookingModal.subtitle}
            </p>

            {/* Full Name */}
            <div>
              <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                {t.bookingModal.fullName} *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={language === 'zh' ? '例如：李明 / Jessica' : 'e.g. Alex Chen'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e] focus:ring-1 focus:ring-[#a35e3e]"
              />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                  {t.bookingModal.email} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e] focus:ring-1 focus:ring-[#a35e3e]"
                />
              </div>
              <div>
                <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                  {t.bookingModal.phone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(312) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e] focus:ring-1 focus:ring-[#a35e3e]"
                />
              </div>
            </div>

            {/* Location / Licensed States & Service Choice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                  {t.bookingModal.stateOrLocation}
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e]"
                >
                  <option value="Illinois">Illinois (IL)</option>
                  <option value="New York">New York (NY)</option>
                  <option value="Michigan">Michigan (MI)</option>
                  <option value="Other">Other US State / International</option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                  {t.bookingModal.serviceType}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e]"
                >
                  <option value="Individual Therapy">
                    {language === 'zh' ? '个人心理咨询' : 'Individual Therapy'}
                  </option>
                  <option value="Couple & Family Therapy">
                    {language === 'zh' ? '伴侣与家庭疗愈' : 'Couple & Family Therapy'}
                  </option>
                  <option value="Sex & Intimacy Therapy">
                    {language === 'zh' ? '性与亲密关系咨询' : 'Sex & Intimacy Therapy'}
                  </option>
                  <option value="Solution-Focused Coaching">
                    {language === 'zh' ? '焦点解决辅导' : 'Solution-Focused Coaching'}
                  </option>
                  <option value="Immigration Evaluation">
                    {language === 'zh' ? '移民心理评估' : 'Immigration Evaluation'}
                  </option>
                  <option value="Groups & Workshops">
                    {language === 'zh' ? '成长团体与工作坊' : 'Groups & Workshops'}
                  </option>
                </select>
              </div>
            </div>

            {/* Language & Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                  {t.bookingModal.format}
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e]"
                >
                  <option value="Telehealth Video">
                    {language === 'zh' ? '远程视频 (HIPAA受保护平台)' : 'Telehealth Video'}
                  </option>
                  <option value="Phone Call">
                    {language === 'zh' ? '电话咨询沟通' : 'Phone Call'}
                  </option>
                  <option value="In-Person Chicago">
                    {language === 'zh' ? '芝加哥线下面对面' : 'In-Person (Chicago)'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                  {t.bookingModal.languagePref}
                </label>
                <select
                  value={sessionLang}
                  onChange={(e) => setSessionLang(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e]"
                >
                  <option value="Bilingual">
                    {language === 'zh' ? '中英双语灵活切换' : 'Bilingual (EN / 中文)'}
                  </option>
                  <option value="Mandarin">
                    {language === 'zh' ? '全普通话 / 国语' : 'Mandarin Chinese'}
                  </option>
                  <option value="English">
                    {language === 'zh' ? '全英文 (English)' : 'English'}
                  </option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-label-md text-xs uppercase tracking-wider text-secondary mb-1">
                {t.bookingModal.notes}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  language === 'zh'
                    ? '简要说说您希望改善的困扰，或您方便接听电话的时间段...'
                    : 'A brief note on what brings you here or your preferred time window...'
                }
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD5C7] text-on-surface text-sm focus:outline-hidden focus:border-[#a35e3e]"
              />
            </div>

            {/* Privacy note */}
            <div className="flex items-center gap-2 text-xs text-on-surface-variant pt-1">
              <Shield className="w-3.5 h-3.5 text-[#a35e3e]" />
              <span>
                {language === 'zh'
                  ? '您的信息严格遵循 HIPAA 医疗隐私安全标准保密。'
                  : 'Your information is strictly protected under HIPAA privacy standards.'}
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-5 py-2.5 rounded-full border border-[#757871]/20 text-on-surface font-label-md text-sm hover:bg-[#eeeee9]"
              >
                {language === 'zh' ? '取消' : 'Cancel'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm shadow-xs disabled:opacity-60 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting ? t.bookingModal.submitting : t.bookingModal.submitBtn}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
