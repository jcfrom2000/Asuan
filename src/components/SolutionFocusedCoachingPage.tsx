import React from 'react';
import { ArrowRight, ShieldCheck, Compass, CheckCircle2, AlertCircle, Calendar, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface SolutionFocusedCoachingPageProps {
  language: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome?: () => void;
  onNavigateToTab?: (tabId: string) => void;
}

export const SolutionFocusedCoachingPage: React.FC<SolutionFocusedCoachingPageProps> = ({
  language,
  onOpenBooking,
  onOpenContact,
  onNavigateHome,
  onNavigateToTab,
}) => {
  const isZh = language === 'zh';
  const t = translations[language];

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1e251d]">
      {/* 1. Hero Section */}
      <header className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#1c241b]">
        {/* Serene River & Mountain Sunrise Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/overstream-therapy-solution-focused-sunrise-mountains.jpg')}
            alt={t.imageAlts.coachingSunrise}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
          />
          {/* Dual-layered refined gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#182017]/75 via-[#182017]/55 to-[#182017]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#182017]/30 to-[#182017]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
          <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.15] mb-5 max-w-3xl drop-shadow-sm">
            {isZh ? '短期焦点辅导' : 'Solution-Focused Coaching'}
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-2xl leading-relaxed mb-8">
            {isZh
              ? '高度聚焦、以行动为导向的短期赋能干预'
              : 'highly targeted, action-oriented, short-term intervention'}
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking(isZh ? '预约短期焦点辅导' : 'Book Solution-Focused Coaching')}
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-[#fbf7f0] text-primary hover:bg-white transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
          >
            <span>{isZh ? '预约辅导' : 'Book A Session'}</span>
            <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* 2. Section 1: Philosophical Stance */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Circular Photo */}
            <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-full p-2.5 bg-gradient-to-br from-[#e8d5c4] via-[#fafaf4] to-[#c7d3c0] shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                  <img
                    src={getAssetUrl('assets/images/overstream-therapy-solution-focused-mindfulness-sunlight.jpg')}
                    alt={t.imageAlts.coachingMindfulness}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '重塑叙事 • 聚焦当下' : 'Strategic Clarity & Systemic Roadmaps'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh
                  ? '并非每一个挑战都需要深层的心理挖掘。'
                  : 'Not every challenge requires deep psychological excavation.'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '焦点解决咨询是一种高度聚焦、以行动为导向的短期干预，专为面对生活适应、签证身份焦虑（OPT/H1B 阶段）、职业转型以及学业/职场倦怠的国际学生和跨文化专业人士量身定制。有时，你只是需要即时而清晰的策略来应对复杂的系统性挑战。'
                  : 'Solution-focused consultation is a highly targeted, action-oriented, short-term intervention designed for international students and professionals facing life adjustment, visa anxiety (OPT/H1B phases), career transitions, and academic/workplace burnout. Sometimes, you simply need immediate strategic clarity to navigate systemic hurdles.'}
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '作为前密歇根大学心理中心（CAPS）的临床咨询师，我曾深度陪伴面临关键人生转折的留学生，并主持“国际学生午餐对话”；目前，我亦在芝加哥大学为社会工作专业学生带领压力管理与韧性赋能团体。我对国际与双语群体的学业、职场与身份痛点有着切身而深刻的洞察。'
                  : "As a former clinician at the University of Michigan CAPS, I extensively supported students at critical crossroads and facilitated the 'International Student Lunch Conversation'. I also currently lead the Stress Management and Resilience Group for social work students at the University of Chicago. I possess firsthand, deep insight into the academic and professional pain points of the international and bilingual community."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Model & Pricing */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Copy & Rates */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '高密度辅导模型' : 'The High-Impact Model'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh
                  ? '这是一种高密度的 1–6 次咨询模式，每次 60 分钟。'
                  : 'This is a high-impact, 1-6 session model, with each session lasting 60 minutes.'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '结合跨文化职场与心理维度的专业洞察，我们将迅速识别你当前面临的障碍，发掘你未曾注意的内在优势，并将你的跨文化适应压力转化为独特的专业个人叙事。'
                  : 'Drawing from cross-cultural professional insights, we will swiftly identify your current roadblocks, uncover your hidden strengths, and transform your acculturative stress into a unique professional narrative.'}
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '你将突破决策瘫痪，带着清晰且可执行的学业或职业发展路线图离开，更有信心地稳步前行。'
                  : 'You will break through decision paralysis and walk away with a clear, actionable roadmap for your career or academic trajectory, empowering you to move forward with confidence.'}
              </p>

              {/* Styled Pricing Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/90 border border-[#2e382b]/10 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-label-md text-on-surface-variant uppercase tracking-wider">
                      {isZh ? '单次咨询' : 'Single Session'}
                    </span>
                    <div className="mt-2 text-2xl sm:text-3xl font-headline-md text-primary font-medium">
                      $200 <span className="text-xs text-on-surface-variant font-normal">/ 60 mins</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
                    {isZh ? '单次聚焦：即时破解具体决策瓶颈' : 'Single Session: $200 per session (60 minutes).'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#efebe2] border-2 border-[#a35e3e]/30 shadow-xs flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#a35e3e] text-white text-[10px] font-semibold uppercase tracking-wider">
                    {isZh ? '推荐组合' : 'Best Value'}
                  </div>
                  <div>
                    <span className="text-xs font-label-md text-[#a35e3e] uppercase tracking-wider font-semibold">
                      {isZh ? '套餐优惠' : 'Package Rate'}
                    </span>
                    <div className="mt-2 text-2xl sm:text-3xl font-headline-md text-primary font-medium">
                      $1,000 <span className="text-xs text-on-surface-variant font-normal">/ 6 sessions</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
                    {isZh ? '系统性推进：完整落地学业或职业规划' : 'Package Rate: $1,000 for a 6-session bundle.'}
                  </p>
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <p>
                  <strong>{isZh ? '提示：' : 'Note: '}</strong>
                  {isZh
                    ? '焦点辅导属于以目标为导向的咨询服务，不涉及临床心理诊断；因此不可申请医疗保险报销。'
                    : 'Coaching is a goal-oriented service and does not involve clinical diagnosis; therefore, it is not eligible for insurance reimbursement.'}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(isZh ? '预约短期焦点辅导套餐' : 'Work with Me - Solution-Focused Coaching')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-sm font-medium shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <span>{isZh ? '与我开展合作' : 'Work with Me'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Radiant Silhouette Image */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-solution-focused-empowerment-silhouette.jpg')}
                  alt={t.imageAlts.coachingSilhouette}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 3: Boundaries and Limitations of Coaching */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Flag & Skyscraper Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-on-scroll">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-solution-focused-visa-skyscrapers.jpg')}
                  alt={t.imageAlts.coachingSkyscraper}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Boundaries Card */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span className="inline-flex items-center gap-2 text-xs font-label-md uppercase tracking-widest text-[#a35e3e] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#a35e3e]" />
                {isZh ? '专业伦理与执业边界' : 'Clinical Ethics & Practice Boundaries'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh
                  ? '焦点辅导的伦理边界与局限说明'
                  : 'Boundaries and Limitations of Coaching'}
              </h2>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#f5f2e9] border border-[#2e382b]/10 text-on-surface-variant space-y-4 shadow-2xs leading-relaxed text-sm sm:text-base">
                <p>
                  {isZh ? (
                    <>
                      请知悉，短期焦点辅导旨在协助应对具体的人生过渡阶段、职业策略与目标实现，主要关注“当下”与“未来”。{' '}
                      <strong className="text-primary font-semibold">
                        辅导绝非专业心理治疗或精神科医疗的替代方案。
                      </strong>{' '}
                      辅导服务不包含任何精神心理障碍（如临床抑郁症、复杂性创伤/PTSD、重度焦虑等）的临床评估、诊断或治疗。
                    </>
                  ) : (
                    <>
                      Please be advised that Solution-Focused Coaching is designed to address specific life transitions, career strategies, and goal achievement, focusing primarily on the &ldquo;present&rdquo; and &ldquo;future&rdquo;.{' '}
                      <strong className="text-primary font-semibold">
                        Coaching is NOT a substitute for professional mental health treatment or psychotherapy.
                      </strong>{' '}
                      Coaching services do not involve the assessment, diagnosis, or treatment of mental health disorders (such as clinical depression, complex trauma/PTSD, or severe anxiety).
                    </>
                  )}
                </p>
                <p>
                  {isZh
                    ? '如果在辅导过程中，我们发现你的困扰需要临床心理干预，作为执业临床治疗师，我有伦理责任如实告知并协助转介至你所在司法管辖区的专业心理健康资源。'
                    : 'If, during our coaching work, it becomes apparent that your challenges require clinical intervention, it is my ethical responsibility as a licensed clinician to inform you and provide appropriate referrals for mental health treatment in your local jurisdiction.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 4: 2x2 Focus Scenarios Grid */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-18 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              {isZh ? '实际应用场景' : 'Practical Transformation'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
              {isZh
                ? '短期焦点辅导如何在关键时刻为你赋能'
                : 'How Solution-Focused Coaching Can Be Highly Effective'}
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Navigating Mental Health Grad School Choices */}
            <div className="reveal-on-scroll p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#a35e3e] tracking-wider uppercase">01 / Education</span>
                  <div className="w-8 h-8 rounded-full bg-[#f4ece4] flex items-center justify-center text-[#a35e3e]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-medium">
                  {isZh ? '心理咨询/社工研究生选校与项目规划' : 'Navigating Mental Health Grad School Choices'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '“我想成为一名心理治疗师，但我该申请 MSW（社会工作）还是 MHC（心理咨询）？作为国际留学生，哪个路径对考取执照和求职更有优势？” —— 我为你提供心理行业的内部视角，帮你理清执照路径，并根据你的终极职业规划挑选最适合的项目。'
                    : '"I want to become a therapist, but should I pursue an MSW or an MHC program? Which path is better for licensure and finding a job as an international student?" — I provide insider insights into the mental health field, helping you decode licensure paths and select the right programs based on your ultimate career goals.'}
                </p>
              </div>
            </div>

            {/* Card 2: Post-Graduation Job Search & Visa Anxiety */}
            <div className="reveal-on-scroll reveal-delay-100 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#a35e3e] tracking-wider uppercase">02 / Career & Visa</span>
                  <div className="w-8 h-8 rounded-full bg-[#f4ece4] flex items-center justify-center text-[#a35e3e]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-medium">
                  {isZh ? '毕业求职与签证/OPT 身份焦虑应对' : 'Post-Graduation Job Search & Visa Anxiety'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '“我快毕业了，求职让我感到喘不过气。面对 OPT 倒计时的压力，我该如何调整策略，并将我的双语和跨文化背景转化为竞争优势？” —— 我们将拆解你的求职路障，优化面试策略，并建立对抗求职挫折的心理韧性。'
                    : '"I am graduating soon, and the job hunt is overwhelming. With the ticking clock of OPT, how can I adjust my strategy and market my bilingual/multicultural background as a competitive advantage?" — We will untangle your job-search roadblocks, refine your interview strategies, and build resilience against rejection.'}
                </p>
              </div>
            </div>

            {/* Card 3: Practice Building for Early-Career Clinicians */}
            <div className="reveal-on-scroll reveal-delay-200 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#a35e3e] tracking-wider uppercase">03 / Early Clinicians</span>
                  <div className="w-8 h-8 rounded-full bg-[#f4ece4] flex items-center justify-center text-[#a35e3e]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-medium">
                  {isZh ? '新人临床咨询师执业初期成长支持' : 'Practice Building for Early-Career Clinicians'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '“我刚毕业/刚考取执照，不知道该去机构工作还是加入私人诊所。我该如何构建自己的临床专长与细分领域？” —— 结合我从大学 CAPS 咨询中心到创立双语私人诊所的亲身经验，为你提供战略性的督导式启发，助你在心理健康行业稳步立足。'
                    : '"I just graduated/got licensed, and I am torn between working at an agency or joining a private practice. How do I build my clinical niche?" — Drawing from my own trajectory from university CAPS to building a successful bilingual private practice, I offer strategic mentorship to help you thrive in the mental health industry.'}
                </p>
              </div>
            </div>

            {/* Card 4: Business Consultation for Private Practice */}
            <div className="reveal-on-scroll reveal-delay-300 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#a35e3e] tracking-wider uppercase">04 / Business Strategy</span>
                  <div className="w-8 h-8 rounded-full bg-[#f4ece4] flex items-center justify-center text-[#a35e3e]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-medium">
                  {isZh ? '私人诊所商业与运营咨询' : 'Business Consultation for Private Practice'}
                </h3>
                <div className="space-y-3 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '市场定位与生源拓展：' : 'Marketing & Client Acquisition: '}
                    </strong>
                    {isZh
                      ? '确立你的目标来访细分定位，撰写引人共鸣的专业简介，并善用合规伦理的社交媒体营销。'
                      : 'Identifying your niche, crafting compelling profiles, and utilizing ethical social media marketing.'}
                  </p>
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '心态建设与收费设定：' : 'Mindset & Fee Setting: '}
                    </strong>
                    {isZh
                      ? '克服冒牌者综合征，化解对金钱的心理阻滞，学会自信地制定与沟通咨询费用。'
                      : 'Overcoming imposter syndrome, untangling money blocks, and learning how to confidently set and communicate your rates.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 5: Private Practice Building & Business Consultation Deep Dive */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '专为从业者赋能' : 'Founder Mentorship'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh
                  ? '私人诊所创办与商业运营咨询'
                  : 'Private Practice Building & Business Consultation'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '从一名机构咨询师转型为成功的私人诊所主理人，不仅需要扎实的临床功底，更需要敏锐的商业思维。这项商业咨询服务为正在筹备或扩展私人诊所的青年心理咨询师与社工从业者，提供手把手、步骤分明的商业指导、战略规划与同行支持。'
                  : 'Transitioning from an agency clinician to a successful private practice owner requires not only clinical expertise but also sharp business acumen. This consulting service provides step-by-step business guidance, mentorship, and strategic planning for early-career therapists and social workers looking to launch or grow their own private practice.'}
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '作为在溪心理（OverStream Therapy）的创始人，我亲身经历了从零打造一家跨州双语私人诊所的全过程。从法律合规、商业实体成立、保险网络认证（credentialing），到来访细分定位、网站搭建与个人品牌塑造，我积累了大量实战经验。作为全美华人心理治疗师互助社群的共同发起人，我深谙从业初期可能面临的各种盲区、焦虑与运营卡点。你不必从头摸索——我愿与你分享完整的成长地图。'
                  : "As the founder of OverStream Therapy, I navigated the complex, overwhelming journey of building a bilingual, cross-state private practice from the ground up. From legal compliance and insurance credentialing to niche definition, website building, and personal branding, I have accumulated extensive hands-on experience. Having co-founded a peer support group for Chinese therapists in the U.S., I deeply understand the blind spots, anxieties, and operational hurdles that early-career practitioners face. You don't have to reinvent the wheel—I am here to share the roadmap."}
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '这是一项高度定制化的商业咨询。我们可以进行单次 60 分钟的“蓝图头脑风暴”，梳理你的开业构想并破解具体运营卡点；或者选择 4–6 次的“诊所启航套餐”，我将全程手把手指导你完成执业登记、接案文书起草、网站设计与首批个案上线。'
                  : 'This is a highly customized business consulting service. We can meet for a single 60-minute "Brainstorming Session" to map out your practice blueprint and tackle specific operational hurdles. Alternatively, you can engage in a 4-to-6-session "Launch Package," where I will guide you step-by-step through business formation, crafting intake paperwork, website design, and officially launching your caseload.'}
              </p>

              <div className="p-4 rounded-xl bg-[#f0eee6] border border-[#2e382b]/10 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <p>
                  {isZh
                    ? '作为针对专业人士的商业咨询服务，该项目不可通过健康医疗保险报销。但咨询费用通常可作为商业运营支出用于税务抵扣（具体请咨询您的注册会计师 CPA）。'
                    : 'As a business consultation service for professionals, this is not eligible for health insurance reimbursement. However, consulting fees can typically be written off as a tax-deductible business expense (please consult with your CPA).'}
                </p>
              </div>

              {/* Consultation Booking Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(isZh ? '预约私人诊所创办商业咨询' : 'Book Private Practice Consultation')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-sm font-medium shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isZh ? '预约商业运营咨询' : 'Schedule Business Consultation'}</span>
                </button>
              </div>
            </div>

            {/* Right Warm Modern Consulting Room Interior Photo */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-solution-focused-consulting-office.jpg')}
                  alt={t.imageAlts.coachingOffice}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section 6: Rilke Quote Banner & CTA */}
      <section className="relative w-full py-20 md:py-28 bg-[#2e382b] text-[#fbf7f0] overflow-hidden">
        {/* Subtle decorative botanical atmosphere */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="coaching-leaves" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60,10 C45,35 20,45 20,70 C20,95 45,105 60,110 C75,105 100,95 100,70 C100,45 75,35 60,10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coaching-leaves)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[960px] mx-auto px-5 md:px-16 text-center flex flex-col items-center">
          <blockquote className="reveal-text-soft font-quote-lead text-xl sm:text-2xl md:text-[26px] font-normal text-white/95 italic leading-relaxed max-w-3xl mx-auto whitespace-pre-line mb-4">
            {t.closingCta.quote}
          </blockquote>
          <p
            className="reveal-on-scroll reveal-delay-100 font-label-md text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
            style={{ color: 'rgb(214, 163, 139)' }}
          >
            {t.closingCta.author}
          </p>
        </div>
      </section>
    </article>
  );
};
