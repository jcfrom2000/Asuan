import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  HeartHandshake,
  Mail,
  Phone,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface ConsultationSupervisionPageProps {
  language: Language;
  onOpenBooking: (serviceName?: string, prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome?: () => void;
  onNavigateToTab?: (tabId: string) => void;
  onOpenPrivacy?: () => void;
  onOpenNoSurprise?: () => void;
}

export const ConsultationSupervisionPage: React.FC<ConsultationSupervisionPageProps> = ({
  language,
  onOpenBooking,
  onOpenContact,
  onNavigateHome,
  onNavigateToTab,
  onOpenPrivacy,
  onOpenNoSurprise,
}) => {
  const isZh = language === 'zh';
  const t = translations[language];

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1a1c19] selection:bg-[#f3dfce] selection:text-[#231a0f]">
      {/* 1. Hero Header Section */}
      <header className="relative w-full min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#1a2328]">
        {/* Background Image: Mountain gorge with river rapids */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/overstream-therapy-supervision-mountain-canyon-river-hero.jpg')}
            alt={t.imageAlts.supervisionHero}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04]"
          />
          {/* Responsive Editorial Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#11191f]/80 via-[#11191f]/60 to-[#11191f]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#11191f]/40 to-[#11191f]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl text-center mx-auto flex flex-col items-center">
            {/* Headline: Exact text from reference mockup */}
            <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.14] mb-4 sm:mb-6 drop-shadow-sm">
              {isZh ? '临床个案督导与同行咨询' : 'Clinical Supervision & Consultation'}
            </h1>

            {/* Subtitle: Exact text from reference mockup */}
            <p className="font-headline-md italic text-xl sm:text-2xl md:text-3xl text-[#e5edf2] font-normal tracking-wide mb-8 sm:mb-10 leading-relaxed drop-shadow-sm">
              {isZh
                ? '滋养与赋能新一代心理健康专业人士'
                : 'nurturing the next generation of mental health professionals'}
            </p>

            {/* Hero CTA Button */}
            <div>
              <button
                type="button"
                onClick={() =>
                  onOpenBooking(
                    'Clinical Supervision & Consultation',
                    isZh
                      ? '预约/咨询：临床个案督导与同行咨询服务'
                      : 'Inquiry: Clinical Supervision & Consultation Session'
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#fbf7f0] text-[#192317] hover:bg-white hover:text-black transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
              >
                <span>{isZh ? '预约督导 / 初访沟通' : 'Book A Session'}</span>
                <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SECTION 1: Background & Professional Journey (Image 1: Poppy Pod in Hand) */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">
            {/* Left: Circular Cameo with Asymmetric Sand Offset Backdrop Block */}
            <div className="md:col-span-5 flex justify-center reveal-on-scroll">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative Organic Backdrop Offset Block */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-[#eeeee9]/80 -translate-x-2 translate-y-2 pointer-events-none" />
                
                {/* Cameo Circular Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white/80 bg-[#eeeee9]">
                  <img
                    src={getAssetUrl('assets/images/overstream-therapy-supervision-botanical-poppy-pods-hand.jpg')}
                    alt={t.imageAlts.supervisionPoppyHand}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right: Exact Editorial Bio & Supervision Credential Paragraph */}
            <div className="md:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {isZh ? '临床督导背景与专业历程' : 'CLINICAL SUPERVISION BACKGROUND'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh
                  ? '扎根名校督导经验，并肩赋能心理同行的专业成长'
                  : 'Rooted in Top-Tier Clinical Supervision & Community Mentorship'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '作为拥有美中多州执照的资深临床专业人士（伊利诺伊州 LCSW / LCPC，密歇根州 LMSW），自 2022 年起，我为密歇根大学、芝加哥大学社会工作硕士 (MSW) 实习生以及多家非营利机构提供广泛的临床个案督导。此外，自 2023 年起，我通过美丽华心理健康系统 (Meilihua Health Systems) 为中国本土执业咨询师设计并讲授继续教育体系课程。自 2024 年起，我深度参与同行咨询与同行督导，共同带领心理咨询师同行互助小组以及基督徒咨询师团契契约空间。'
                  : 'As a licensed clinical professional (LCSW/LCPC in IL, LMSW in MI), I have provided extensive supervision to MSW interns at the University of Michigan, the University of Chicago, and at various non-profit organizations since 2022. Additionally, I have designed and delivered continuing education courses on supporting therapists in China through Meilihua Health Systems since 2023. I have been involved in peer consultation and peer supervision since 2024, co-leading a peer support group for therapists and a fellowship for Christian therapists.'}
              </p>

              {/* Serene Trust Credential Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/5">
                  <GraduationCap className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                  <span className="font-body-sm text-xs sm:text-sm text-on-surface">
                    {isZh ? '芝大与密大 MSW 实习生督导资历 (Since 2022)' : 'UChicago & UMich MSW Clinical Supervisor'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/5">
                  <HeartHandshake className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                  <span className="font-body-sm text-xs sm:text-sm text-on-surface">
                    {isZh ? '同行咨询与基督徒咨询师团契带领 (Since 2024)' : 'Peer Consultation & Faith Fellowship Co-Lead'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: "My Supervision & Consultation Offerings" (Image 2: Four Friends at Sunset) */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left: Offerings Copy & Bullet Points & "Work with Me" button */}
            <div className="md:col-span-7 flex flex-col space-y-6 order-2 md:order-1 reveal-on-scroll">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {isZh ? '督导方向与专业领域' : 'AREAS OF FOCUS & MODALITIES'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                {isZh
                  ? '我的个案督导与专业咨询服务'
                  : 'My Supervision & Consultation Offerings'}
              </h2>

              {/* Exact Bullets from Reference Screenshot */}
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '临床个案督导 (Clinical Supervision)：' : 'Clinical Supervision: '}
                    </strong>
                    {isZh
                      ? '专为在读社工/心理学实习生、初入职场的社工、心理治疗师与咨询师量身定制。我的督导重点聚焦于多元文化敏锐度的培养、执业伦理实践的明晰导航，以及发挥我的核心专长：为移民群体及持有传统/保守信仰价值观的群体提供性与亲密关系治疗。'
                      : 'Tailored for student interns, early-career social workers, therapists, and counselors. My supervision focuses on cultivating multicultural awareness, navigating ethical practice, and applying my specialty: providing sex therapy for immigrants and faith communities with conservative values.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '疑难个案同行咨询 (Case Consultation)：' : 'Case Consultation: '}
                    </strong>
                    {isZh
                      ? '为正在服务华人来访群体、留学生群体，或在面对复杂的跨文化议题与 LGBTQ+ 性少数议题的咨询师同行提供高度专业、按需预约的定向支持与研讨。'
                      : 'Specialized, as-needed support for therapists working with Chinese populations, international students, or clients navigating complex cross-cultural and LGBTQ+ concerns.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '青少年心理健康项目顾问 (Youth Mental Health Consulting)：' : 'Youth Mental Health Consulting: '}
                    </strong>
                    {isZh
                      ? '协助社区非营利组织、学校与一线项目团队制定科学有效的干预策略，围绕青少年关键心理健康议题提供切实指导与系统性赋能。'
                      : 'Assisting community organizations and program staff in developing strategies to effectively support adolescents around mental health topics.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '核心研讨与赋能重点 (Core Focus Areas)：' : 'Core Focus Areas: '}
                    </strong>
                    {isZh
                      ? '化解临床伦理困境、构建深层跨文化胜任力、预防同理心倦怠 (Compassion Fatigue)，以及在亚裔与性少数 (LGBTQ+) 群体中高效精准运用循证治疗流派。'
                      : 'Navigating clinical ethical dilemmas, building multicultural competence, preventing compassion fatigue, and effectively applying modalities within Asian and LGBTQ+ populations.'}
                  </p>
                </div>
              </div>

              {/* Exact CTA Button: Work with Me */}
              <div>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-[#eeeee9] transition-all font-label-md text-sm font-medium cursor-pointer group"
                >
                  <span>{isZh ? '与我合作' : 'Work with Me'}</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Image 2 (Colleagues Sunset Embrace) */}
            <div className="md:col-span-5 order-1 md:order-2 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#2e382b]/10 aspect-[3/4] sm:aspect-[4/5] bg-[#eeeee9]">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-supervision-colleagues-sunset-fellowship.jpg')}
                  alt={t.imageAlts.supervisionColleagues}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-label-md text-white/90 drop-shadow-sm">
                  {isZh ? '同行互助、跨文化探索与专业共同体' : 'Therapist Fellowship, Peer Supervision & Shared Practice'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: "Process & Investment" (Image 3: UChicago Gothic Ivy Building) */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left: Image 3 (Collegiate Gothic Ivy Building with Lawn Chairs) */}
            <div className="md:col-span-5 reveal-on-scroll">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#2e382b]/10 aspect-[3/4] sm:aspect-[4/5] bg-[#eeeee9]">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-supervision-uchicago-gothic-quad-chairs.jpg')}
                  alt={t.imageAlts.supervisionGothicHall}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-label-md text-white/90 drop-shadow-sm">
                  {isZh ? '芝加哥大学与密歇根大学临床专业传承' : 'Collegiate Clinical Rigor & MSW Supervision'}
                </div>
              </div>
            </div>

            {/* Right: Exact Structured Process & Investment Copy */}
            <div className="md:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {isZh ? '收费投资与形式设置' : 'LOGISTICS & TRANSPARENT PRICING'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                {isZh ? '流程设置与收费投资' : 'Process & Investment'}
              </h2>

              {/* Exact Bullets from Reference Screenshot */}
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '个体与双人督导 (Individual & Dyadic Supervision)：' : 'Individual & Dyadic Supervision: '}
                    </strong>
                    {isZh
                      ? '通常每周举行一次，每次 60 分钟。'
                      : 'Typically held weekly for 60 minutes. '}
                    <strong className="text-primary font-semibold">
                      {isZh ? '收费标准：' : 'Investment: '}
                    </strong>
                    {isZh
                      ? '执照前/见习咨询师 $100 / 小时；已获得独立执照咨询师 $150 / 小时。'
                      : '$100 / hour for pre-licensed therapists and $150/hour for licensed therapists.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '疑难个案同行咨询 (Case Consultation)：' : 'Case Consultation: '}
                    </strong>
                    {isZh
                      ? '按需灵活预约，每次 60 分钟。'
                      : 'Available on an as-needed basis for 60 minutes. '}
                    <strong className="text-primary font-semibold">
                      {isZh ? '收费标准：' : 'Investment: '}
                    </strong>
                    {isZh ? '$150 / 小时。' : '$150 / hour.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '团体督导与同行研讨 (Group Supervision & Consultation)：' : 'Group Supervision & Consultation: '}
                    </strong>
                    {isZh
                      ? '专为最多 4 位临床咨询师同侪设立的共学成长空间，每次 2 小时。'
                      : 'A collaborative learning space for up to 4 clinicians, lasting 2 hours per session. '}
                    <strong className="text-primary font-semibold">
                      {isZh ? '收费标准：' : 'Investment: '}
                    </strong>
                    {isZh ? '每人 $50 / 小时。' : '$50 / hour (per person).'}
                  </p>
                </div>
              </div>

              {/* Exact CTA Button: Learn more */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenBooking(
                      'Supervision & Consultation Inquiry',
                      isZh
                        ? '咨询意向：临床个案督导与同行咨询设置'
                        : 'Clinical Supervision & Case Consultation Logistics Inquiry'
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-[#eeeee9] transition-all font-label-md text-sm font-medium cursor-pointer group"
                >
                  <span>{isZh ? '了解详情 / 发起预约' : 'Learn more'}</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: QUOTE BANNER - Image 4 Background (Dried Botanical Pods) */}
      <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center justify-center overflow-hidden bg-[#c5b8a5] text-white py-16 sm:py-20 md:py-24">
        {/* Background Image: Image 4 (Minimalist Botanical Seed Pods with Clean Linen Space) */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/overstream-therapy-supervision-dried-botanical-seed-pods-quote-bg.jpg')}
            alt={t.imageAlts.supervisionBotanicalQuote}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-left md:object-[25%_center] filter brightness-[0.78] contrast-[1.02]"
          />
          {/* Subtle Warm Overlay for High Editorial Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/35" />
        </div>

        {/* Quote Content */}
        <div className="relative z-10 max-w-[960px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          <blockquote className="font-headline-lg font-normal text-2xl sm:text-3xl md:text-4xl text-[#fafaf4] leading-relaxed mb-4 sm:mb-6 max-w-3xl drop-shadow-sm">
            {isZh
              ? '“你就像一个装满水的豆袋沙发——柔软、舒适、安全，且随时适应我的形状。”'
              : '“You are like a beanbag filled with water—soft, comfortable, safe, and adapts to my shape.”'}
          </blockquote>

          <cite className="font-headline-md italic text-sm sm:text-base md:text-lg text-[#f3dfce] font-normal tracking-wide mb-8 sm:mb-10 block not-italic">
            {isZh ? '—— 摘自一位来访者的真实心声' : 'from one of my former clients'}
          </cite>

          {/* Exact Button: Get In Touch */}
          <div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] border border-white/40 cursor-pointer"
            >
              <span>{isZh ? '取得联络' : 'Get In Touch'}</span>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
