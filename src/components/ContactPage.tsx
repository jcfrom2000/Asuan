import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';
import { Mail, Phone, Calendar, Clock, MapPin, Send, CheckCircle2, ArrowRight, ExternalLink, ShieldAlert, Lock } from 'lucide-react';

interface ContactPageProps {
  language: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language,
  onOpenBooking,
}) => {
  const t = translations[language];
  const cp = t.contactPage;

  // Interactive Calendar state
  const [selectedDay, setSelectedDay] = useState<number>(10);
  const [selectedSlot, setSelectedSlot] = useState<string>('2:00 PM');
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(0);

  // Direct Message Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar dates mock setup for October / November 2025
  const months = [
    {
      nameEn: 'October 2025',
      nameZh: '2025年 10月',
      daysCount: 31,
      startOffset: 2, // starts on Wednesday (offset 2 for Mon-based index: Mon=0, Tue=1, Wed=2)
      availableDays: [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31],
    },
    {
      nameEn: 'November 2025',
      nameZh: '2025年 11月',
      daysCount: 30,
      startOffset: 5, // starts on Saturday
      availableDays: [3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25],
    },
  ];

  const currentMonth = months[currentMonthIndex];

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev < months.length - 1 ? prev + 1 : prev));
  };

  const timeSlots = cp.consultationSection.slots || ['10:00 AM', '11:30 AM', '2:00 PM', '3:45 PM'];

  // Handle consultation confirmation click
  const handleConfirmConsultation = () => {
    const monthName = language === 'zh' ? currentMonth.nameZh : currentMonth.nameEn;
    const bookingDetails = `${monthName} Day ${selectedDay} at ${selectedSlot} CST (15-min Initial Consultation)`;
    onOpenBooking(bookingDetails);
  };

  // Handle direct inquiry form submission
  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 900);
  };

  return (
    <div className="w-full flex flex-col bg-surface">
      {/* 1. Hero Header Section with Floral Poppies Vignette */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-surface-container-low min-h-[460px] md:min-h-[520px] flex items-center justify-center">
        {/* Full-bleed studio background photo (CLS=0 with fixed container) */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center"
            alt={t.imageAlts.contactPoppies}
            src={getAssetUrl('assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg')}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Ambient Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface/40 pointer-events-none" />

        {/* Hero Title & Subtext */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-16 w-full text-center space-y-3">
          <div>
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {cp.heroTag}
            </span>
          </div>

          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-primary font-normal tracking-tight max-w-xl mx-auto leading-tight md:leading-[1.2] drop-shadow-xs">
            {cp.heroTitle}
          </h1>

          <div className="max-w-xl mx-auto pt-2">
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-lg mx-auto leading-relaxed">
              {language === 'zh'
                ? '在安详与被倾听的对话中，开启属于您的心理修护与自我重逢。'
                : 'A safe, culturally grounding space to explore questions, share what hurts, and begin with unhurried care.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Section 1: Direct Communication (Simple, Understated & Pure) */}
      <section className="w-full py-16 md:py-24 bg-surface border-b border-surface-container">
        <div className="max-w-[1000px] mx-auto px-5 md:px-16 text-center space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 md:mb-14">
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {cp.directSection.eyebrow}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              {cp.directSection.heading}
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              {cp.directSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1060px] mx-auto pt-2">
            {/* Email Card */}
            <div className="p-6 md:p-8 bg-surface-container-low rounded-xl text-center flex flex-col justify-between items-center space-y-3 border border-surface-container/60 shadow-xs hover:border-secondary/40 transition-colors">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary mb-1">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="font-label-md text-xs uppercase tracking-wider text-secondary font-medium">
                  {cp.directSection.emailLabel}
                </p>
                <a
                  href={`mailto:${cp.directSection.emailAddress}`}
                  className="font-body-lg text-sm sm:text-base font-medium text-primary hover:text-secondary transition-colors break-all select-all"
                >
                  {cp.directSection.emailAddress}
                </a>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant/80">
                {language === 'zh' ? '欢迎随时致信咨询详情' : 'Response within 1-2 business days'}
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 md:p-8 bg-surface-container-low rounded-xl text-center flex flex-col justify-between items-center space-y-3 border border-surface-container/60 shadow-xs hover:border-secondary/40 transition-colors">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary mb-1">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="font-label-md text-xs uppercase tracking-wider text-secondary font-medium">
                  {cp.directSection.phoneLabel}
                </p>
                <a
                  href="tel:3129670117"
                  className="font-body-lg text-sm sm:text-base font-medium text-primary hover:text-secondary transition-colors select-all"
                >
                  {cp.directSection.phoneNumber}
                </a>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant/80">
                {language === 'zh' ? '支持语音留言与加密短信' : 'Confidential voicemail & SMS'}
              </p>
            </div>

            {/* Existing Clients Portal Card (SimplePractice) */}
            <div className="p-6 md:p-8 bg-surface-container-low rounded-xl text-center flex flex-col justify-between items-center space-y-3 border border-surface-container/60 shadow-xs hover:border-[#a35e3e]/40 transition-colors">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#f3e9e2] flex items-center justify-center text-[#a35e3e] mb-1">
                  <Lock className="w-6 h-6" />
                </div>
                <p className="font-label-md text-xs uppercase tracking-wider text-[#a35e3e] font-medium">
                  {cp.directSection.portalLabel}
                </p>
                <p className="font-body-lg text-sm sm:text-base font-medium text-primary">
                  {cp.directSection.portalTitle}
                </p>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {cp.directSection.portalDesc}
                </p>
              </div>
              <a
                href="https://overstreamtherapy.clientsecure.me/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container text-xs font-label-md font-medium transition-colors shadow-2xs"
              >
                <span>{cp.directSection.portalBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Calendly Consultation Scheduling (Placed ABOVE Map) */}
      <section className="w-full py-16 md:py-24 bg-surface-container-low border-b border-surface-container">
        <div className="max-w-[880px] mx-auto px-5 md:px-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 md:mb-14">
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {cp.consultationSection.eyebrow}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              {cp.consultationSection.heading}
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {cp.consultationSection.description}
            </p>
          </div>

          {/* Interactive Calendly Card */}
          <div className="bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-sm border border-surface-container space-y-6">
            {/* Header: Month & Timezone */}
            <div className="flex items-center justify-between pb-4 border-b border-surface-container">
              <div>
                <p className="font-label-md text-base text-primary uppercase tracking-wider font-semibold">
                  {language === 'zh' ? currentMonth.nameZh : currentMonth.nameEn}
                </p>
                <p className="font-body-sm text-xs text-secondary mt-0.5">
                  {cp.consultationSection.timezone}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  disabled={currentMonthIndex === 0}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                    currentMonthIndex === 0
                      ? 'border-surface-container text-outline-variant cursor-not-allowed opacity-50'
                      : 'border-surface-container-high hover:bg-surface-container text-on-surface cursor-pointer'
                  }`}
                  aria-label="Previous month"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  disabled={currentMonthIndex === months.length - 1}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                    currentMonthIndex === months.length - 1
                      ? 'border-surface-container text-outline-variant cursor-not-allowed opacity-50'
                      : 'border-surface-container-high hover:bg-surface-container text-on-surface cursor-pointer'
                  }`}
                  aria-label="Next month"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center font-label-md text-xs uppercase text-on-surface-variant pb-1 font-medium">
              {cp.consultationSection.daysOfWeek.map((day, idx) => (
                <span key={idx} className="py-1">
                  {day}
                </span>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1.5 text-center font-body-sm text-sm">
              {/* Offset empty slots */}
              {Array.from({ length: currentMonth.startOffset }).map((_, idx) => (
                <span key={`empty-${idx}`} className="py-2.5 text-outline-variant/40 select-none">
                  -
                </span>
              ))}

              {/* Render month days */}
              {Array.from({ length: currentMonth.daysCount }).map((_, idx) => {
                const dayNum = idx + 1;
                const isAvailable = currentMonth.availableDays.includes(dayNum);
                const isSelected = selectedDay === dayNum;

                if (!isAvailable) {
                  return (
                    <span
                      key={dayNum}
                      className="py-2.5 text-outline-variant/60 rounded-md cursor-not-allowed select-none"
                    >
                      {dayNum}
                    </span>
                  );
                }

                return (
                  <button
                    key={dayNum}
                    type="button"
                    onClick={() => setSelectedDay(dayNum)}
                    className={`py-2.5 rounded-lg font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary-container text-surface-bright font-semibold shadow-xs scale-105'
                        : 'hover:bg-surface-container-high text-primary hover:text-secondary'
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>

            {/* Time Slot Windows */}
            <div className="pt-4 border-t border-surface-container space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-label-md text-xs sm:text-sm uppercase tracking-wider text-primary font-medium">
                  {cp.consultationSection.windowsForDatePrefix}{' '}
                  <span className="font-semibold text-secondary">
                    {language === 'zh'
                      ? `${selectedDay}日`
                      : `Day ${selectedDay}`}
                  </span>{' '}
                  (CST)
                </p>
                <span className="text-xs text-on-surface-variant/80 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span>15 min</span>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2.5 px-3 rounded-lg font-label-md text-xs sm:text-sm transition-all cursor-pointer text-center ${
                        isSelected
                          ? 'bg-primary text-on-primary font-semibold shadow-xs ring-2 ring-primary/20'
                          : 'border border-secondary/40 text-primary hover:bg-surface-container hover:border-secondary'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Summary and Confirm Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-surface-container">
              <div className="flex items-center gap-2.5 text-on-surface-variant font-body-sm text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary text-lg">event_available</span>
                <span className="font-medium text-primary">
                  {cp.consultationSection.selectedPrefix}{' '}
                  {language === 'zh'
                    ? `${currentMonth.nameZh} ${selectedDay}日 · ${selectedSlot} CST (${cp.consultationSection.durationLabel})`
                    : `${currentMonth.nameEn} Day ${selectedDay} · ${selectedSlot} CST (${cp.consultationSection.durationLabel})`}
                </span>
              </div>

              <button
                type="button"
                onClick={handleConfirmConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-surface-bright px-7 py-3 font-label-md text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all hover:bg-primary shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <span>{cp.consultationSection.confirmBtn}</span>
                <span className="material-symbols-outlined text-sm">check</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 3: Physical Sanctuary & Practice Hours (Map, Address & Hours ONLY) */}
      <section className="w-full py-16 md:py-24 bg-surface border-b border-surface-container">
        <div className="max-w-[1240px] mx-auto px-5 md:px-16 space-y-8">
          <div className="space-y-2 mb-8 md:mb-12">
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {cp.officeSection.eyebrow}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              {cp.officeSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Card: Location & Hours Details */}
            <div className="h-full flex flex-col">
              <div className="bg-surface-container-low p-6 md:p-8 rounded-lg space-y-6 h-full flex flex-col justify-between border border-surface-container/60 shadow-xs">
                {/* Physical Address */}
                <div className="space-y-1.5">
                  <p className="font-headline-md text-xl md:text-2xl text-primary font-semibold">
                    {cp.officeSection.addressLine1}
                  </p>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant">
                    {cp.officeSection.addressLine2}
                  </p>
                </div>

                {/* Operating Hours Table */}
                <div className="space-y-3 pt-4 border-t border-surface-container">
                  <h3 className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold">
                    {cp.officeSection.hoursTitle}
                  </h3>
                  <div className="divide-y divide-surface-container font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    <div className="py-2.5 flex justify-between items-center">
                      <span>{cp.officeSection.weekdayLabel}</span>
                      <span className="text-on-surface font-medium">{cp.officeSection.weekdayHours}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span>{cp.officeSection.saturdayLabel}</span>
                      <span className="text-on-surface font-medium">{cp.officeSection.saturdayHours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: High-resolution Styled Chicago Map */}
            <div className="h-full flex flex-col">
              <div className="relative w-full h-full min-h-[340px] md:min-h-full rounded-2xl overflow-hidden shadow-xs border border-surface-container flex flex-col group">
                <img
                  className="w-full h-full min-h-[340px] md:min-h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                  alt={t.imageAlts.chicagoOfficeMap}
                  src={getAssetUrl('assets/images/overstream-therapy-chicago-monadnock-office-location-map.jpg')}
                  loading="lazy"
                  decoding="async"
                />
                {/* Gentle Tint Overlay */}
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />

                {/* Office Pin Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-[#2e382b]/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-label-md text-xs font-semibold text-primary">OverStream Therapy PLLC</p>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">53 W Jackson Blvd, Suite 820, Chicago</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=53+W+Jackson+Blvd+Suite+820+Chicago+IL+60604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"
                    aria-label="Get directions"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Confidential Direct Message Section (Optional Inquiry / Reassurance) */}
      <section className="w-full py-16 md:py-20 bg-surface-container-low border-b border-surface-container">
        <div className="max-w-[760px] mx-auto px-5 md:px-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {cp.inquirySection.eyebrow}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              {cp.inquirySection.heading}
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              {cp.inquirySection.description}
            </p>
          </div>

          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xs border border-surface-container">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#dbe6d3] text-[#192317] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-xl text-primary font-normal">
                  {cp.inquirySection.successTitle}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-md mx-auto">
                  {cp.inquirySection.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-surface-container text-primary text-xs font-label-md hover:bg-surface-container-high transition-colors"
                >
                  {language === 'zh' ? '发送另一条留言' : 'Send Another Note'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label-md text-xs text-on-surface-variant">
                      {cp.inquirySection.namePlaceholder} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={cp.inquirySection.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-surface-container text-on-surface text-sm focus:outline-none focus:border-[#a35e3e]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-md text-xs text-on-surface-variant">
                      {cp.inquirySection.emailPlaceholder} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={cp.inquirySection.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-surface-container text-on-surface text-sm focus:outline-none focus:border-[#a35e3e]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-label-md text-xs text-on-surface-variant">
                    {cp.inquirySection.phonePlaceholder}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={cp.inquirySection.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-surface-container text-on-surface text-sm focus:outline-none focus:border-[#a35e3e]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-label-md text-xs text-on-surface-variant">
                    {language === 'zh' ? '留言内容' : 'Your Message'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={cp.inquirySection.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-surface-container text-on-surface text-sm focus:outline-none focus:border-[#a35e3e] resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? cp.inquirySection.submitting : cp.inquirySection.submitBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. Crisis Notice & Clinical Ethics Container */}
      <section className="w-full bg-[#2e382b] text-white/90 py-12 md:py-16">
        <div className="max-w-[880px] mx-auto px-5 md:px-16 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-[#d6c3b3] mb-1">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="font-headline-md text-xl sm:text-2xl text-white font-normal">
            {cp.crisisNotice.title}
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
            {cp.crisisNotice.text}
          </p>
          <div className="pt-2 text-xs text-[#d6c3b3] flex flex-wrap justify-center gap-4">
            <span className="font-medium">Emergency: 911</span>
            <span>•</span>
            <span className="font-medium">Suicide & Crisis Lifeline: Call or Text 988</span>
            <span>•</span>
            <span className="font-medium">Crisis Text Line: Text HOME to 741741</span>
          </div>
        </div>
      </section>
    </div>
  );
};
