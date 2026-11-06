import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Scale, Globe, FileText, CheckCircle2, ChevronRight, Plus, Minus, HeartHandshake, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface ImmigrationEvaluationPageProps {
  language: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome?: () => void;
  onNavigateToTab?: (tabId: string) => void;
}

export const ImmigrationEvaluationPage: React.FC<ImmigrationEvaluationPageProps> = ({
  language,
  onOpenBooking,
  onOpenContact,
  onNavigateHome,
  onNavigateToTab,
}) => {
  const isZh = language === 'zh';
  const t = translations[language];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      qEn: "Can I work with you for an evaluation if I don't have an immigration attorney?",
      qZh: '如果我没有聘请移民律师，可以找您做移民心理评估吗？',
      aEn: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">No.</strong> I{' '}
            <strong className="text-primary font-semibold">strictly require all clients to be represented by a retained immigration attorney</strong>.
          </p>
          <p>
            Immigration evaluations are complex legal documents, not just standard medical check-ups. To ensure your investment is protected and the report is legally effective, I must{' '}
            <strong className="text-primary font-semibold">collaborate directly with your attorney</strong> to understand your specific legal strategy and deadlines.
          </p>
        </div>
      ),
      aZh: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">不可以。</strong>我
            <strong className="text-primary font-semibold">严格要求所有来访者必须有已正式签约代理的移民律师</strong>。
          </p>
          <p>
            移民心理评估是复杂的法律证据文件，而非普通的身体健康体检。为了保护您的经济投入并确保报告具有充分的法律效力，我必须与您的律师直接合作沟通，深入了解具体的法律策略与递交截止日期。
          </p>
        </div>
      ),
    },
    {
      qEn: 'Will my health insurance cover the cost of the evaluation?',
      qZh: '我的健康医疗保险能报销移民心理评估的费用吗？',
      aEn: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">No.</strong> Health insurance only covers services deemed{' '}
            <strong className="text-primary font-semibold">&ldquo;medically necessary&rdquo;</strong> for treatment purposes.
          </p>
          <p>
            Immigration evaluations are considered forensic/legal assessments, which are{' '}
            <strong className="text-primary font-semibold">strictly out-of-pocket expenses</strong>.
          </p>
        </div>
      ),
      aZh: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">不能。</strong>健康医疗保险仅涵盖以治病就医为目的且被认定为
            <strong className="text-primary font-semibold">“医疗必要”（Medically Necessary）</strong>的服务。
          </p>
          <p>
            移民评估属于司法/法庭证据类评估（Forensic/Legal Assessments），
            <strong className="text-primary font-semibold">严格属于纯自费项目</strong>。
          </p>
        </div>
      ),
    },
    {
      qEn: 'How long does the evaluation process take?',
      qZh: '移民心理评估流程需要多长时间？',
      aEn: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            The standard turnaround time is <strong className="text-primary font-semibold">3 to 4 weeks</strong> after the clinical interview is completed and all requested documents are received.
          </p>
          <p>
            The clinical interview itself takes about <strong className="text-primary font-semibold">2 to 4 hours</strong>, usually split into one or two sessions to prevent emotional fatigue.
          </p>
          <p>
            If you have a tight court deadline, <strong className="text-primary font-semibold">expedited services (14-day, 7-day, or 3-day turnaround)</strong> are available for an additional rush fee.
          </p>
        </div>
      ),
      aZh: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            标准出具周期是在临床访谈全部完成且所有要求的文件收集齐全后的 <strong className="text-primary font-semibold">3 到 4 周</strong>。
          </p>
          <p>
            临床访谈本身大约需要 <strong className="text-primary font-semibold">2 到 4 小时</strong>，通常会分成一到两次进行，以避免产生情绪疲惫。
          </p>
          <p>
            如果您面临紧急的法庭或补件截止日期，可申请<strong className="text-primary font-semibold">加急服务（14 天、7 天或 3 天出具）</strong>，加急服务需另加收加急费用。
          </p>
        </div>
      ),
    },
    {
      qEn: 'Can I continue seeing you for regular therapy after the evaluation?',
      qZh: '移民评估结束后，我可以继续找您进行常规心理咨询吗？',
      aEn: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">Not while your case is ongoing.</strong>
          </p>
          <p>
            To maintain the strict clinical objectivity required by immigration courts, I cannot serve as both your unbiased Expert Evaluator and your supportive Therapist (this is considered a <strong className="text-primary font-semibold">&ldquo;dual relationship&rdquo;</strong>).
          </p>
          <p>
            If you need ongoing emotional support during your legal process, I will provide referrals to other trusted bilingual therapists. We may discuss starting therapy only <strong className="text-primary font-semibold">after your immigration case has been completely finalized</strong>.
          </p>
        </div>
      ),
      aZh: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">在您的案件审理期间不可以。</strong>
          </p>
          <p>
            为了保持移民法庭所要求的严格临床客观性，我不能同时担任您的中立专家评估员和提供支持的心理治疗师（这在专业伦理中被视为<strong className="text-primary font-semibold">“双重关系” Dual Relationship</strong>）。
          </p>
          <p>
            如果您在法律诉讼进程中需要持续的情绪支持，我会为您推荐其他值得信赖的双语治疗师。只有在<strong className="text-primary font-semibold">您的移民案件完全审结之后</strong>，我们才可以探讨开展常规心理治疗。
          </p>
        </div>
      ),
    },
    {
      qEn: 'Does getting a psychological evaluation guarantee my visa/green card will be approved?',
      qZh: '做移民心理评估能保证我的签证或绿卡一定获批吗？',
      aEn: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">No.</strong> While a strong, professionally written psychological evaluation is often a <strong className="text-primary font-semibold">crucial piece of evidence</strong> in cases like Hardship Waivers, Asylum, or VAWA, the <strong className="text-primary font-semibold">final decision rests entirely with the USCIS officer or the Immigration Judge</strong>.
          </p>
          <p>
            My role is to provide an objective, expert clinical assessment to support the legal arguments made by your attorney.
          </p>
        </div>
      ),
      aZh: (
        <div className="space-y-2 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <p>
            <strong className="text-primary font-semibold">不能保证。</strong>尽管一份由专业人士撰写、论证严谨的心理评估报告在极度困难豁免（Hardship Waivers）、庇护（Asylum）或反家庭暴力法案（VAWA）等案件中往往是<strong className="text-primary font-semibold">关键的决定性证据</strong>，但案件的<strong className="text-primary font-semibold">最终裁决权完全属于美国移民局（USCIS）移民官或移民法官</strong>。
          </p>
          <p>
            我的职责是提供客观、严谨的专家级临床评估，以有力支持您律师的法律论辩。
          </p>
        </div>
      ),
    },
  ];

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1e251d]">
      {/* 1. Hero Section */}
      <header className="relative w-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex items-center justify-center overflow-hidden bg-[#1c241b]">
        {/* Hero Content */}
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 py-16 text-center flex flex-col items-center">
          <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.15] mb-5 max-w-3xl drop-shadow-sm">
            {isZh ? '移民心理评估报告' : 'Immigration Psychological Evaluation'}
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-2xl leading-relaxed mb-8">
            {isZh
              ? '全面严谨、扎根文化回应性与法庭证据标准的心理评估'
              : 'comprehensive, culturally sensitive, and legally grounded psychological evaluation'}
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking(isZh ? '预约移民心理评估初访' : 'Book Immigration Psychological Evaluation')}
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-[#fbf7f0] text-primary hover:bg-white transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
          >
            <span>{isZh ? '预约评估咨询' : 'Book A Session'}</span>
            <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* 2. Lead-In Callout Section */}
      <section className="w-full py-18 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6 reveal-on-scroll">
          <p className="font-headline-md text-xl sm:text-2xl md:text-[26px] text-primary font-normal leading-relaxed">
            {isZh
              ? '应对复杂的美国移民法律系统可能是一个人一生中最具压力且令人不知所措的经历之一。一份全面、具有文化敏锐度且符合法庭证据标准的心理评估报告，往往能在您的移民案件中起到决定性的关键作用。'
              : "Navigating the United States immigration system can be one of the most stressful and overwhelming experiences of a person's life. A comprehensive, culturally sensitive, and legally grounded psychological evaluation can often be a decisive factor in your immigration case."}
          </p>

          <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {isZh ? (
              <>
                作为专注于移民群体的执业临床治疗师，我致力于为移民法庭及各类诉讼程序提供专家级心理评估。我提供
                <strong className="text-primary font-semibold">英语、母语级普通话以及母语级粤语</strong>
                的直接面谈服务，跨越语言与文化的鸿沟，确保您真实的生命故事得以精准记录并有力地呈递至法庭。
              </>
            ) : (
              <>
                As a licensed clinical professional specialized in working with immigrants, I aim to provide expert psychological evaluations for immigration proceedings. I offer services in{' '}
                <strong className="text-primary font-semibold">
                  English, native Mandarin Chinese, and native Cantonese
                </strong>
                , bridging the cultural and linguistic gaps to ensure your true story is accurately documented and powerfully presented to the court.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 3. Section: Types of Evaluations I Provide */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Copy & Case Types */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '临床评估类型' : 'Practice Specialization'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh ? '我所提供的移民评估类型' : 'Types of Evaluations I Provide'}
              </h2>

              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                {isZh
                  ? '我与移民律师紧密合作，为以下类型的案件提供深入细致的临床评估与综合报告：'
                  : 'I work closely with immigration attorneys to provide thorough clinical assessments and comprehensive reports for the following cases:'}
              </p>

              {/* Case Types List */}
              <div className="space-y-4 pt-2">
                {/* Extreme Hardship */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#2e382b]/10 shadow-xs space-y-1.5">
                  <h3 className="font-label-md text-sm sm:text-base font-semibold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a35e3e]" />
                    {isZh
                      ? '极度困难豁免 (Extreme Hardship Waivers - I-601 / I-601A)'
                      : 'Extreme Hardship Waivers (I-601 / I-601A)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-4">
                    {isZh
                      ? '评估如果申请人被驱逐出境，或其直系亲属被迫随同搬迁至原籍国，对具有美国公民或永久居民（绿卡）身份的合格亲属所造成的心理、医疗及经济冲击。'
                      : "Evaluating the psychological, medical, and financial impact on the U.S. Citizen or Lawful Permanent Resident qualifying relative if the applicant is deported or if the family is forced to relocate to the applicant's home country."}
                  </p>
                </div>

                {/* Cancellation of Removal */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#2e382b]/10 shadow-xs space-y-1.5">
                  <h3 className="font-label-md text-sm sm:text-base font-semibold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a35e3e]" />
                    {isZh
                      ? '递解出境取消 (Cancellation of Removal)'
                      : 'Cancellation of Removal'}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-4">
                    {isZh
                      ? '提供深度评估，论证并记录对合格亲属构成的“特殊且极其不寻常的困难”（Exceptional and extremely unusual hardship），尤为关注独特的脆弱性或心理依附。'
                      : 'Providing in-depth assessments to document "exceptional and extremely unusual hardship" to qualifying relatives, particularly focusing on unique vulnerabilities or psychological dependencies.'}
                  </p>
                </div>

                {/* Asylum */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#2e382b]/10 shadow-xs space-y-1.5">
                  <h3 className="font-label-md text-sm sm:text-base font-semibold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a35e3e]" />
                    {isZh ? '庇护申请 (Asylum)' : 'Asylum'}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-4">
                    {isZh
                      ? '记录申请人因过去遭受迫害而留下的心理后遗症（如 PTSD、重度抑郁或重度焦虑），并明确建立原籍国遭受的创伤与当前心理健康状态之间的临床因果链条。'
                      : 'Documenting the psychological sequelae of past persecution (such as PTSD, Major Depressive Disorder, or severe anxiety) and clearly establishing the clinical nexus between the trauma experienced in the home country and the applicant\'s current mental health.'}
                  </p>
                </div>

                {/* VAWA */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#2e382b]/10 shadow-xs space-y-1.5">
                  <h3 className="font-label-md text-sm sm:text-base font-semibold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a35e3e]" />
                    {isZh
                      ? '反家庭暴力法案 (VAWA - Violence Against Women Act)'
                      : 'VAWA (Violence Against Women Act)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-4">
                    {isZh
                      ? '开展创伤知情评估，详实记录来自具有美国公民或绿卡身份的配偶/父母的家庭暴力、情感虐待及强迫控制（coercive control）对申请人造成的深远心理创伤。'
                      : 'Conducting trauma-informed assessments to document the psychological impact of domestic violence, emotional abuse, and coercive control by a U.S. Citizen or LPR spouse/parent.'}
                  </p>
                </div>

                {/* U Visa & T Visa */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#2e382b]/10 shadow-xs space-y-1.5">
                  <h3 className="font-label-md text-sm sm:text-base font-semibold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a35e3e]" />
                    {isZh ? 'U 签证与 T 签证 (U Visa & T Visa)' : 'U Visa & T Visa'}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-4">
                    {isZh
                      ? '针对严重犯罪或人口贩运的受害者开展心理评估，详尽记录因该项犯罪直接导致的大量身心创伤与虐待后果。'
                      : 'Evaluating victims of severe crimes or human trafficking, documenting the substantial physical or mental abuse suffered as a direct result of the crime.'}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(isZh ? '预约移民心理评估' : 'Work with Me - Immigration Evaluation')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-sm font-medium shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <span>{isZh ? '与我开展合作' : 'Work with Me'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Illuminated American Flag & Community Silhouette Image */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-immigration-court-community-flag.jpg')}
                  alt={t.imageAlts.evalAmericanFlag}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-[#fafaf4] text-xs leading-relaxed">
                  {isZh
                    ? '扎根多语种与跨文化背景，让您真实的生命故事被法庭倾听。'
                    : 'Grounded in multilingual & cross-cultural competence, ensuring your voice is heard by the court.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Why work with me? */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left "Everyone is Welcome" Art Banner */}
            <div className="lg:col-span-5 reveal-on-scroll">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-[#2a2b28] flex flex-col justify-between p-8 sm:p-10 border border-[#2e382b]/15 text-[#fafaf4]">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#e8b598]" />
                  <span className="font-label-md text-xs uppercase tracking-widest text-[#e8b598]">
                    {isZh ? '包容与庇护' : 'A Culturally Humble Sanctuary'}
                  </span>
                </div>

                {/* Central Stylized "EVERYONE IS WELCOME" Banner */}
                <div className="relative z-10 my-auto py-8">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-headline-lg font-normal uppercase text-center leading-tight">
                    {isZh ? '这里欢迎' : 'EVERYONE'}
                    <span className="block text-2xl sm:text-3xl font-serif italic text-[#e8eae4] font-normal my-1">
                      {isZh ? '每一个人' : 'IS'}
                    </span>
                    <span className="inline-block px-4 py-1 rounded-md bg-[#c98357] text-[#24170d] font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl shadow-md">
                      {isZh ? '真实的你' : 'WELCOME'}
                    </span>
                  </div>
                </div>

                {/* Bottom Footnote */}
                <div className="relative z-10 pt-4 border-t border-white/15 text-xs text-[#d1d5cc] leading-relaxed">
                  {isZh
                    ? '提供英语、母语级普通话及粤语直接面谈，全程无需第三方翻译。'
                    : 'Direct clinical interviews in English, Mandarin, and Cantonese. No outside interpreters required.'}
                </div>
              </div>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '执业优势' : 'Distinct Clinical Strengths'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh ? '为什么选择与我合作？' : 'Why work with me?'}
              </h2>

              <div className="space-y-5 pt-2">
                {/* 1. Direct Bilingual Communication */}
                <div className="space-y-1.5">
                  <h3 className="font-label-md text-base sm:text-lg font-semibold text-primary flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                    <span>
                      {isZh
                        ? '双语直接沟通（无需第三方翻译）：'
                        : 'Direct Bilingual Communication (No Interpreter Needed):'}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed pl-7">
                    {isZh
                      ? '我直接使用普通话或粤语进行临床访谈。这为来访者节省了数百美元的第三方翻译费用，彻底避免了预约翻译的时间摩擦，并确保关键的文化隐喻和临床细节绝不会在翻译中丢失。'
                      : "I conduct clinical interviews directly in Mandarin Chinese or Cantonese. This saves clients hundreds of dollars in third-party interpreter fees, entirely eliminates scheduling hassles, and ensures that critical cultural nuances and clinical details are never 'lost in translation.'"}
                  </p>
                </div>

                {/* 2. Specialized in Trauma & Sex Therapy */}
                <div className="space-y-1.5">
                  <h3 className="font-label-md text-base sm:text-lg font-semibold text-primary flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                    <span>
                      {isZh
                        ? '专精于创伤知情与性治疗：'
                        : 'Specialized in Trauma & Sex & Intimacy Therapy:'}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed pl-7">
                    {isZh
                      ? '许多移民案件（尤其是 VAWA、U/T 签证及庇护）涉及深层且带有强烈文化羞耻感的创伤，包括性强迫与性侵犯。我的性治疗与创伤知情背景，使我能够营造一个高度安全、去敏感化的空间，协助来访者带着尊严与精准度倾诉深埋的创伤痛苦。'
                      : 'Many immigration cases (especially VAWA, U/T Visas, and Asylum) involve profound, culturally stigmatized trauma, including sexual coercion and abuse. My background in sex therapy and trauma-informed care allows me to create a highly safe, desensitized environment, helping clients articulate deeply buried pain with dignity and precision.'}
                  </p>
                </div>

                {/* 3. Objective Psychometric Testing */}
                <div className="space-y-1.5">
                  <h3 className="font-label-md text-base sm:text-lg font-semibold text-primary flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                    <span>
                      {isZh
                        ? '客观量化的心理测验工具：'
                        : 'Objective Psychometric Testing:'}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed pl-7">
                    {isZh
                      ? '我采用移民法庭广泛认可的标准化临床评估量表（如 PHQ-9、GAD-7、PCL-5、哈佛创伤问卷等），为临床诊断提供扎实的实证数据支撑。'
                      : 'I utilize standardized, court-recognized clinical assessment tools (e.g., PHQ-9, GAD-7, PCL-5, Harvard Trauma Questionnaire) to provide empirical support for clinical diagnoses.'}
                  </p>
                </div>

                {/* 4. Straightforward all-in-one charge */}
                <div className="space-y-1.5">
                  <h3 className="font-label-md text-base sm:text-lg font-semibold text-primary flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                    <span>
                      {isZh
                        ? '透明的一口价全包收费：'
                        : 'Straightforward all-in-one charge:'}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed pl-7">
                    {isZh
                      ? '标准评估费用包含 2–4 小时的临床深度访谈、心理测验、背景材料与病历审查、以及一份详尽严谨的 15–25 页正式法庭报告。首次访谈前需全额支付费用，欢迎联络获取最新收费明细。'
                      : 'Standard Evaluation Fee includes a 2-4 hour clinical interview, psychometric testing, record review, and a comprehensive 15-25 page report. Payment in full is required before the first clinical interview. Please reach out to obtain the most recent fee schedule.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Important Clinic Policies & Ethical Boundaries */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Policies Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="inline-flex items-center gap-2 text-xs font-label-md uppercase tracking-widest text-[#a35e3e] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#a35e3e]" />
                {isZh ? '司法伦理与诊所准则' : 'Ethical Guardrails & Clinic Standards'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
                {isZh
                  ? '诊所重要政策与伦理边界'
                  : 'Important Clinic Policies & Ethical Boundaries'}
              </h2>

              {/* Subsection 1 */}
              <div className="p-6 rounded-2xl bg-white/95 border border-[#2e382b]/10 space-y-2.5 shadow-xs">
                <h3 className="font-label-md text-base sm:text-lg font-semibold text-primary">
                  {isZh
                    ? '1. 必须有正式代理的移民律师'
                    : '1. Attorney Representation is Required.'}
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '我不接受未聘请律师的自辩申请人（Pro se）。移民心理评估是一份高度专业化的法律文书。为确保您的投入物有所值且报告完全符合您案件的法律标准，我必须直接与您已聘请的移民律师对接，以完全契合其法律论辩策略。'
                    : 'I do not accept cases from unrepresented individuals (Pro se applicants). An immigration psychological evaluation is a highly specialized legal document. To ensure your investment is worthwhile and the report meets the exact legal standards of your case, I must coordinate directly with your retained immigration attorney to align with their legal strategy.'}
                </p>
              </div>

              {/* Subsection 2 */}
              <div className="p-6 rounded-2xl bg-white/95 border border-[#2e382b]/10 space-y-3 shadow-xs">
                <h3 className="font-label-md text-base sm:text-lg font-semibold text-primary">
                  {isZh
                    ? '2. 评估专家与心理咨询师的双重关系边界'
                    : '2. The Boundary Between Evaluator and Therapist'}
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '根据临床社会工作与心理学的职业伦理准则，同一位专业人员不能就同一个案件同时担任您中立的专家评估员（Evaluator）和常规心理咨询师（Psychotherapist）。'
                    : 'According to the ethical guidelines of clinical social work and psychology, an individual cannot serve as both your unbiased Expert Evaluator and your ongoing Psychotherapist for the same case.'}
                </p>

                <div className="space-y-2 pt-1 border-t border-[#2e382b]/8">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-semibold">
                      {isZh ? '• 为什么？' : '• Why? '}
                    </strong>
                    {isZh
                      ? '法庭要求评估者保持高度中立客观。如果您的心理治疗师为您撰写评估报告，法官可能会认为该报告具有偏向性（属于支持性倡导而非客观法庭证据），从而严重削弱报告的法律效力。'
                      : 'The court requires an evaluator to be highly objective. If your therapist writes your evaluation, the judge may view the report as biased (advocacy rather than evidence), which severely weakens your case.'}
                  </p>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-semibold">
                      {isZh ? '• 解决方案：' : '• The Solution: '}
                    </strong>
                    {isZh
                      ? '在您的法律诉讼程序期间，我将严格仅作为您的评估员。如果您需要长期的心理健康支持，我很乐意为您推荐值得信赖的同行双语咨询师。一旦您的移民案件完全审结并得出最终裁决，若合适，我们可以探讨转为常规心理咨询关系。'
                      : 'During your legal proceedings, I will strictly serve as your evaluator. If you require ongoing mental health therapy, I will gladly provide external referrals to trusted colleagues. Once your immigration case is completely closed and a final verdict is reached, we may discuss transitioning to a therapeutic relationship if appropriate.'}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(isZh ? '预约移民评估' : 'Work with Me - Immigration Evaluation')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-sm font-medium shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <span>{isZh ? '与我开展合作' : 'Work with Me'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right "Love Thy Neighbor" Rally Image */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-immigration-love-thy-neighbor-rally.jpg')}
                  alt={t.imageAlts.evalLoveThyNeighbor}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-[#fafaf4] text-xs leading-relaxed">
                  <span className="font-semibold block mb-0.5">
                    {isZh ? '以爱邻舍之心 • 守护每份尊严' : 'Love Thy Neighbor (All of Them!)'}
                  </span>
                  {isZh
                    ? '严格遵循司法伦理，用严谨证据为每一位移民朋友撑起合法的保护伞。'
                    : 'Upholding judicial integrity with rigorous clinical assessments for all immigrants.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Song of Solomon 4:7 Quote Banner & CTA */}
      <section className="relative w-full py-20 md:py-28 bg-[#2e382b] text-[#fbf7f0] overflow-hidden">
        {/* Subtle decorative botanical atmosphere */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="eval-leaves" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60,10 C45,35 20,45 20,70 C20,95 45,105 60,110 C75,105 100,95 100,70 C100,45 75,35 60,10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eval-leaves)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[960px] mx-auto px-5 md:px-16 text-center flex flex-col items-center">
          <blockquote className="reveal-text-soft font-quote-lead text-xl sm:text-2xl md:text-[26px] font-normal text-white/95 italic leading-relaxed max-w-3xl mx-auto whitespace-pre-line mb-4">
            {isZh ? '“我的佳偶，你全然美丽，毫无瑕疵。”' : '“You are altogether beautiful, my love; there is no flaw in you.”'}
          </blockquote>
          <p
            className="reveal-on-scroll reveal-delay-100 font-label-md text-xs sm:text-sm uppercase tracking-[0.2em] mb-8 font-medium"
            style={{ color: 'rgb(214, 163, 139)' }}
          >
            {isZh ? '— 雅歌 4:7' : '— Song of Solomon 4:7'}
          </p>

          <div className="reveal-on-scroll reveal-delay-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#fafaf4] text-[#192317] hover:bg-[#eeeee9] transition-all font-label-md text-sm font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <span>{isZh ? '与我联系' : 'Get In Touch'}</span>
              <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Section: Frequently Asked Questions (Accordion) */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10">
          <div className="text-center space-y-3 mb-12 md:mb-16 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              {isZh ? '常见问答' : 'Clear Clarifications'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-snug">
              {isZh ? '移民心理评估常见问题' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="divide-y divide-[#2e382b]/10 border-y border-[#2e382b]/10">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left gap-4 font-headline-md text-base sm:text-lg text-primary font-medium hover:text-[#a35e3e] transition-colors cursor-pointer group"
                  >
                    <span>{isZh ? item.qZh : item.qEn}</span>
                    <span className="w-7 h-7 rounded-full bg-[#f4f2ea] group-hover:bg-[#efebe2] flex items-center justify-center text-[#a35e3e] shrink-0 transition-transform duration-300">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-2 animate-fadeIn">
                      {isZh ? item.aZh : item.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 rounded-2xl bg-[#f5f3ec] border border-[#2e382b]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-label-md text-sm font-semibold text-primary">
                {isZh ? '还有其他问题或需紧急加急出件？' : 'Have urgent deadlines or other questions?'}
              </h4>
              <p className="text-xs text-on-surface-variant">
                {isZh
                  ? '欢迎直接联络或预约 15 分钟免费沟通电话。'
                  : 'Reach out directly or book a complimentary 15-minute phone consultation.'}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary-container text-xs font-label-md font-medium transition-all shrink-0 cursor-pointer shadow-xs"
            >
              <span>{isZh ? '直接咨询' : 'Contact Me'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
