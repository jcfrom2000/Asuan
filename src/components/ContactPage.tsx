import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Mail, Phone, Calendar, MapPin, ExternalLink, ShieldAlert, Lock, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  language: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language,
}) => {
  const t = translations[language];
  const cp = t.contactPage;
  const isZh = language === 'zh';

  const newClientUrl = 'https://overstreamtherapy.clientsecure.me/request/service';
  const portalSignInUrl = 'https://overstreamtherapy.clientsecure.me/sign-in';
  const officialPhone = '(312) 967-0117';
  const officialEmail = 'info@overstreamtherapy.com';

  return (
    <div className="w-full flex flex-col bg-surface">
      {/* 1. Hero Header Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-[#1c241b] min-h-[420px] md:min-h-[480px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center transition-opacity duration-700"
            alt={t.imageAlts.contactPoppies}
            src="/assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-16 w-full text-center space-y-3">
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight max-w-2xl mx-auto leading-tight md:leading-[1.2] drop-shadow-sm">
            {cp.heroTitle}
          </h1>

          <div className="max-w-xl mx-auto pt-2">
            <p className="font-body-md text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-sm">
              {isZh
                ? '在安详与被倾听的对话中，开启属于您的心理修护与自我重逢。所有临床预约与数据均通过 SimplePractice 官方加密系统保障。'
                : 'A safe, culturally grounding space to explore questions, share what hurts, and begin with unhurried care.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Section 1: Three Primary Contact Cards */}
      <section className="w-full py-16 md:py-24 bg-surface border-b border-surface-container">
        <div className="max-w-[1240px] mx-auto px-5 md:px-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-[1140px] mx-auto">
            {/* Card 1: New Clients Service Request */}
            <div className="bg-surface-container-low p-7 md:p-8 rounded-2xl border-2 border-[#a35e3e]/30 hover:border-[#a35e3e] shadow-sm flex flex-col justify-between space-y-6 transition-all group relative overflow-hidden">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#f3dfce] rounded-full blur-xl opacity-60 pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#f3dfce] flex items-center justify-center text-[#a35e3e]">
                  <Calendar className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="font-label-md text-xs uppercase tracking-wider text-[#a35e3e] font-semibold">
                    {isZh ? '新客户 / 首次咨询' : 'New Clients'}
                  </span>
                  <h3 className="font-headline-md text-xl font-normal text-primary">
                    {isZh ? '在线预约初访与咨询项目' : 'Request Intake & Service'}
                  </h3>
                </div>

                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '首次来访请在此选择咨询服务方向（个体、伴侣、性心理、辅导或移民评估），直接在 SimplePractice 官方 Portal 选择合适的时间锁定 15 分钟初访。'
                    : 'Select your care path and schedule a 15-minute complimentary consultation via our HIPAA-compliant portal.'}
                </p>

                <div className="pt-2 flex flex-col space-y-2 text-xs text-on-surface-variant/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a35e3e] shrink-0" />
                    <span>{isZh ? '15分钟免费线上/电话初访沟通' : '15-min complimentary consultation'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a35e3e] shrink-0" />
                    <span>{isZh ? '严格遵循 HIPAA 医疗数据隐私加密' : 'Full HIPAA encryption standard'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 relative z-10">
                <a
                  href={newClientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white hover:bg-primary-container font-label-md text-xs sm:text-sm font-semibold transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                >
                  <span>{isZh ? '前往 SimplePractice 提交申请' : 'Request Appointment'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Existing Clients Portal */}
            <div className="bg-surface-container-low p-7 md:p-8 rounded-2xl border border-surface-container/80 hover:border-secondary/40 shadow-sm flex flex-col justify-between space-y-6 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container/60 flex items-center justify-center text-secondary">
                  <Lock className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="font-label-md text-xs uppercase tracking-wider text-secondary font-semibold">
                    {cp.directSection.portalLabel}
                  </span>
                  <h3 className="font-headline-md text-xl font-normal text-primary">
                    {cp.directSection.portalTitle}
                  </h3>
                </div>

                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {cp.directSection.portalDesc}
                </p>

                <div className="pt-2 flex flex-col space-y-2 text-xs text-on-surface-variant/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>{isZh ? '加密私密信息收发' : 'Confidential client messaging'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>{isZh ? '一键下载保险 Superbill 发票' : 'Insurance superbill access'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={portalSignInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>{cp.directSection.portalBtn}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: Direct Phone & Email */}
            <div className="bg-surface-container-low p-7 md:p-8 rounded-2xl border border-surface-container/80 hover:border-secondary/40 shadow-sm flex flex-col justify-between space-y-6 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#e8ece3] flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="font-label-md text-xs uppercase tracking-wider text-primary font-semibold">
                    {isZh ? '直接联系' : 'Direct Line & Email'}
                  </span>
                  <h3 className="font-headline-md text-xl font-normal text-primary">
                    {isZh ? '电话与官方电子邮箱' : 'Direct Phone & Email'}
                  </h3>
                </div>

                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '如需在提交申请前简单咨询业务、了解督导或商业合作，欢迎直接电话或致信。电话支持保密语音留言与加密 SMS。'
                    : 'For general inquiries, supervision questions, or media speaking, feel free to reach out directly via telephone or email.'}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/70 border border-surface-container flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary shrink-0" />
                    <div>
                      <p className="font-label-md text-[11px] text-on-surface-variant uppercase">{isZh ? '诊所电话' : 'Phone'}</p>
                      <a href={`tel:${officialPhone.replace(/[^0-9]/g, '')}`} className="font-body-md text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors">
                        {officialPhone}
                      </a>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/70 border border-surface-container flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary shrink-0" />
                    <div>
                      <p className="font-label-md text-[11px] text-on-surface-variant uppercase">{isZh ? '加密邮箱' : 'Email'}</p>
                      <a href={`mailto:${officialEmail}`} className="font-body-md text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors break-all">
                        {officialEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="font-body-sm text-xs text-on-surface-variant/80">
                  {isZh ? '通常在 1-2 个工作日内给予回复' : 'Replies within 1-2 business days'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: HIPAA Privacy & Intake Explanation */}
      <section className="w-full py-16 md:py-20 bg-surface-container-low border-b border-surface-container">
        <div className="max-w-[920px] mx-auto px-5 md:px-16 space-y-8">
          <div className="bg-white p-7 md:p-10 rounded-2xl shadow-xs border border-surface-container space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f3dfce] flex items-center justify-center text-[#a35e3e] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal">
                  {isZh ? '为何使用 SimplePractice 官方安全门户？' : 'Why We Use SimplePractice Client Portal'}
                </h3>
                <p className="font-body-sm text-xs text-secondary">
                  {isZh ? '符合美国 HIPAA 法规与医疗伦理隐私承诺' : 'HIPAA Compliant Security & Ethical Practice Commitment'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <div className="space-y-2">
                <p className="font-label-md text-sm text-primary font-semibold">
                  {isZh ? '1. 真正的端到端医疗加密' : '1. End-to-End Medical Encryption'}
                </p>
                <p>
                  {isZh
                    ? '心理咨询涉及您最私密的心灵议题。SimplePractice 门户采用高强度端到端加密，确保您的个人信息与咨询记录符合最高医疗隐私标准。'
                    : 'SimplePractice provides bank-grade encryption ensuring your health information remains strictly confidential.'}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-label-md text-sm text-[#a35e3e] font-semibold">
                  {isZh ? '2. 15分钟免费初访沟通' : '2. 15-Minute Complimentary Consultation'}
                </p>
                <p>
                  {isZh
                    ? '通过 Portal 锁定时间后，曹翱璇 Jessica 将与您在线上或电话中交流，共同确认咨询方向与契合度。'
                    : 'We offer a complimentary 15-minute consultation to learn about your goals, answer questions about insurance superbills, and ensure a strong therapeutic fit.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 3: Physical Office & Interactive Map */}
      <section className="w-full py-16 md:py-24 bg-surface border-b border-surface-container">
        <div className="max-w-[1240px] mx-auto px-5 md:px-16 space-y-8">
          <div className="space-y-2 mb-8">
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
            {/* Left: Address & Hours */}
            <div className="h-full flex flex-col">
              <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl space-y-6 h-full flex flex-col justify-between border border-surface-container shadow-xs">
                <div className="space-y-2">
                  <p className="font-headline-md text-xl md:text-2xl text-primary font-semibold">
                    {cp.officeSection.addressLine1}
                  </p>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant">
                    {cp.officeSection.addressLine2}
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant/80 pt-1">
                    {cp.officeSection.buildingInfo}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-surface-container">
                  <h3 className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{cp.officeSection.hoursTitle}</span>
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

            {/* Right: Full Interactive Chicago Google Map */}
            <div className="h-full flex flex-col">
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden shadow-xs border border-surface-container flex flex-col bg-surface">
                <iframe
                  title="OverStream Therapy Monadnock Office Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.627685412497!2d-87.6312480234706!3d41.87834577124234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbc515b1ab7%3A0x2ca0b8a43f8e5f7a!2s53%20W%20Jackson%20Blvd%20%23820%2C%20Chicago%2C%20IL%2060604!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Crisis Notice */}
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
          <div className="pt-2 text-xs text-[#d6c3b3] flex flex-wrap justify-center gap-4 font-medium">
            <span>Emergency: 911</span>
            <span>•</span>
            <span>Suicide & Crisis Lifeline: Call or Text 988</span>
            <span>•</span>
            <span>Crisis Text Line: Text HOME to 741741</span>
          </div>
        </div>
      </section>
    </div>
  );
};
