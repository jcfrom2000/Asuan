import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Clock, CreditCard, Compass } from 'lucide-react';
import { Language } from '../types';
import { getAssetUrl } from '../utils/assets';

interface IndividualTherapyPageProps {
  language?: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const IndividualTherapyPage: React.FC<IndividualTherapyPageProps> = ({
  language = 'en',
  onOpenBooking,
  onOpenContact,
}) => {
  const isZh = language === 'zh';

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1e251d]">
      {/* 1. Hero Section */}
      <header className="relative w-full min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#1c241b]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/aistudio/image_1726e4e2.png')}
            alt="Individual Therapy - White Poppies Bloom"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03] scale-105"
          />
          {/* Ambient Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#182017]/80 via-[#182017]/60 to-[#182017]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#182017]/30 to-[#182017]/80" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
          <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.15] mb-5 max-w-3xl drop-shadow-sm">
            {isZh ? '个体心理咨询' : 'Individual Therapy'}
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-3xl leading-relaxed mb-8 drop-shadow-sm">
            {isZh
              ? '创伤知情、具有文化回应性的个体心理咨询空间，支持焦虑、抑郁、创伤、关系模式、身份探索与跨文化压力。'
              : 'A culturally responsive, trauma-informed space for anxiety, depression, trauma, relationship patterns, identity questions, and cross-cultural stress.'}
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking(isZh ? '预约个体心理咨询' : 'Book Individual Therapy')}
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-[#fbf7f0] text-[#1e251d] hover:bg-white transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
          >
            <span>{isZh ? '预约咨询' : 'Book A Session'}</span>
            <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* 2. My Experience */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Circular Photo */}
            <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-full p-2.5 bg-gradient-to-br from-[#e8d5c4] via-[#fafaf4] to-[#c7d3c0] shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                  <img
                    src={getAssetUrl('assets/images/overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg')}
                    alt={isZh ? '曹翱璇 Jessica, 执业心理咨询师' : 'Jessica Cao, Licensed Clinical Therapist'}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '临床背景与生命故事' : 'CLINICAL BACKGROUND & LIVED STORY'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                {isZh ? '我的临床背景与故事' : 'My Experience'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '我对家庭动力与亲密关系的理解，早在成为临床心理治疗师之前就已经开始。成长于流动的新移民与跨文化环境，并亲身经历非传统家庭系统的重组，这些复杂的家庭动力赋予了我对人类深层情绪的深刻直觉与洞察。'
                  : 'My understanding of family dynamics and intimacy began long before I became a clinical therapist. Growing up in a transient migrant / immigrant environment and navigating a non-traditional family structure, I have experienced the ruptures and restructurings of attachment, and these complex family dynamics have gifted me with emotional intuition and insights into understanding complex human emotions.'}
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '通过在密歇根大学 CAPS 心理中心以及非营利机构的临床工作，我为大学生、留学生、职场青年、一/二代移民提供个体心理治疗，并深度支持性别暴力的幸存者。作为前留学生与新移民，我深刻理解你所面临的身份撕裂与生存焦虑。在我们的咨询中，你永远不需要费力去‘翻译’你的文化背景。'
                  : 'Through my clinical work at the University of Michigan CAPS and non-profit organizations, I have provided individual psychotherapy to college students, international students, young professionals, 1st-2nd generation immigrants, and extensively supported survivors of gender-based violence. As a former international student and immigrant myself, I intimately understand the identity fragmentation and survival anxiety you may face. You will never have to \'translate\' your cultural background in our sessions.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Typical Session */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center reveal-on-scroll">
          <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold mb-3">
            {isZh ? '合作平等与创伤知情' : 'COLLABORATIVE & TRAUMA-INFORMED'}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mb-8">
            {isZh
              ? '典型的心理咨询过程是怎样的？我只需要躺在沙发上聊天吗？'
              : 'What does a typical therapy session look like?'}
          </h2>
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#2e382b]/10 shadow-xs text-left">
            <p className="font-body-md text-base sm:text-lg text-[#2f312e] leading-relaxed">
              {isZh
                ? '许多人以为心理咨询只是躺在沙发上倾诉，或者等待咨询师给人生出招。在在溪心理（OverStream Therapy），并非如此。我们 55 分钟的会谈是合作且平等的对话。在创伤知情的框架下，我们首先倾听你当下的痛苦。我不会对你进行居高临下的讲座；相反，我将作为你的盟友，共同探索过去的经历如何影响你现在的信念。我们将识别情绪盲点，练习设立健康边界，并为你提供可在日常生活中实用的情绪调节工具。'
                : 'Many people think therapy is just lying on a couch venting, or waiting for a therapist to dispense \'life advice.\' At OverStream Therapy, this is not the case. Our 55-minute sessions are collaborative, egalitarian conversations. Utilizing a trauma-informed framework, we start by listening to your current distress. I don\'t lecture you; instead, I will act as your ally, exploring together how your past experiences influence your current beliefs. We will identify emotional blind spots, practice setting boundaries, and equip you with practical emotional regulation tools to use in your daily life.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Affirmation Banner */}
      <div className="bg-[#e8decb] py-7 text-center text-[#2e382b] tracking-[0.2em] uppercase text-xs sm:text-sm font-medium">
        {isZh
          ? '这里欢迎真实完整的你 • 这里欢迎真实完整的你 • 这里欢迎真实完整的你'
          : 'You Are Welcome Here • You Are Welcome Here • You Are Welcome Here'}
      </div>

      {/* 5. 15min Free Consultation */}
      <section className="w-full py-20 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 text-center reveal-on-scroll">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#efebe2] text-[#a35e3e] mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mb-4">
            {isZh ? '15分钟免费初访沟通' : '15min free consultation'}
          </h2>
          <p className="font-body-md text-base sm:text-lg text-[#2f312e] font-normal leading-relaxed max-w-2xl mx-auto">
            {isZh
              ? '我们将利用这段简短的初访沟通互相了解，看看我们是否彼此合适。'
              : 'We will use the brief consultation to get to know each other and see if we might be a good fit for each other.'}
          </p>
        </div>
      </section>

      {/* 6. How Therapy Works */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '初访评估与后续咨询' : 'INTAKE & ONGOING CARE'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                {isZh ? '心理咨询的开展流程' : 'How therapy works'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '在正式预约后，我们将从一次 55 分钟的全面初访评估开始，安全地梳理你的生命经历并制定咨询目标。之后，我们将根据你的需求进行每周一次或定期 55 分钟的会谈。运用创伤知情与以人为中心的方法，我整合循证流派来疗愈痛苦，避免二次创伤。'
                  : 'Upon booking, we will begin with a 55-minute comprehensive intake session to safely unpack your lived experiences and outline your goals. We will then meet for 55-minute sessions on a weekly basis or based on your preference. Utilizing trauma-informed and person-centered approaches, I integrate evidence-based modalities to process your pain without retraumatization.'}
              </p>

              <div className="p-6 rounded-2xl bg-white/80 border border-[#2e382b]/10 shadow-2xs">
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '心理咨询的潜在风险：疗愈很少是线性或完全舒适的过程。随着我们探索内心情感，你可能会体验到不舒适的情绪（如悲伤、疚责、焦虑或愤怒），并回忆起不愉快的记忆。此外，改变行为模式或设立新的健康边界可能会在短期内对当前关系带来暂时性适应或磨合。这些都是疗愈旅程中自然、预期的一部分，我们将在安全的环境中共同陪伴应对。'
                    : 'Potential Risks of Therapy: Healing is rarely a linear or entirely comfortable process. As we explore your inner landscape, you may experience uncomfortable emotions such as sadness, guilt, anxiety, or anger, and recall unpleasant memories. Additionally, making changes in your behaviors or setting new, healthy boundaries may lead to temporary disruptions or friction in your current relationships. These are natural, expected parts of the therapeutic journey, and we will navigate them together in a secure environment.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenContact()}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1e251d] text-[#fafaf4] hover:bg-[#2d302c] transition-all font-label-md text-sm font-medium shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
                >
                  <span>{isZh ? '联系我' : 'Get In Touch'}</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg')}
                  alt={isZh ? '心理咨询植物静物' : 'Therapy process botanical still life'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Insurance & Payment */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              {isZh ? '保险涵盖与服务代码' : 'COVERAGE & CPT CODES'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mt-2">
              {isZh ? '医疗保险与付费须知' : 'Insurance & Payment'}
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f3ec] border border-[#2e382b]/10 space-y-6 text-[#2f312e] text-base leading-relaxed reveal-on-scroll">
            {isZh ? (
              <>
                <p>我是 BCBS PPO 和 USHIP 的网络内（In-network）合作咨询师。你的具体自费金额（如免赔额 Deductible、Copay 或 Coinsurance）取决于你的具体保单条款。</p>
                <p>如果你使用保险报销，请勿在同一天预约多次心理咨询（例如同一天参加个体咨询和伴侣/家庭/团体咨询），保险公司通常会拒绝此类重复报销申请。</p>
                <p>对于其他所有保险计划，我被视为网络外（Out-of-Network, OON）提供者。这意味着你需要在服务时支付完整费用，我将为你提供 Superbill（细化医疗收据）。你可以将 Superbill 提交给你的保险公司申请网络外报销。</p>
              </>
            ) : (
              <>
                <p>I am an in-network provider for BCBS PPO and USHIP. Your exact out-of-pocket costs (such as deductibles, copays, or coinsurance) will depend on your specific insurance policy.</p>
                <p>If you are using insurance, please do not schedule multiple therapy sessions on the same day (e.g., attending both an individual session and a couples/family/group session on the same date), as insurance companies will likely deny the claims.</p>
                <p>For clients with all other insurance plans, I am considered an Out-of-Network (OON) provider. This means you are responsible for paying the full session fee at the time of service. I will then provide you with a Superbill (an itemized medical receipt). You can submit this Superbill to your insurance company. If your plan includes out-of-network benefits, your insurance company will reimburse you directly for a portion of the cost based on your policy.</p>
              </>
            )}
            
            <div className="pt-4 border-t border-[#2e382b]/10">
              <p className="font-semibold text-[#2e382b] mb-3">
                {isZh
                  ? '强力建议在首次咨询前联系你的保险公司确认网络外心理健康福利，可询问以下 CPT 服务代码：'
                  : 'I strongly recommend contacting your insurance provider prior to our first session to verify your out-of-network mental health benefits. You can ask them about your coverage and reimbursement rates for the following specific service codes (CPT Codes):'}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <li className="p-4 rounded-xl bg-white/90 border border-[#2e382b]/10 font-medium text-sm flex items-center justify-between">
                  <span>{isZh ? '90791: 精神科初访评估' : '90791: Psychiatric Diagnostic Evaluation'}</span>
                  <span className="text-[#a35e3e] font-semibold">$225</span>
                </li>
                <li className="p-4 rounded-xl bg-white/90 border border-[#2e382b]/10 font-medium text-sm flex items-center justify-between">
                  <span>{isZh ? '90837: 个体心理治疗' : '90837: Individual Psychotherapy'}</span>
                  <span className="text-[#a35e3e] font-semibold">$200</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 8. Here's what I can help */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-18 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              {isZh ? '临床擅长方向' : 'AREAS OF CLINICAL FOCUS'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal">
              {isZh ? '我能为你提供帮助的议题' : "Here's what I can help"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isZh
              ? [
                  {
                    title: '情绪、神经系统与压力',
                    items: [
                      '广泛性焦虑与恐慌发作',
                      '抑郁与动力丧失',
                      '慢性压力与神经系统失调',
                      '情绪失调与易怒',
                      '过度反思与心理内耗',
                    ],
                  },
                  {
                    title: '亲密关系与人际边界',
                    items: [
                      '讨好倾向与边界设立',
                      '沟通断裂与频繁冲突',
                      '出轨与信任重塑',
                      '依恋创伤：焦虑型与回避型模式',
                      '有毒关系与毒性情感伤害恢复',
                      '孤独感与建立亲密关系的困难',
                    ],
                  },
                  {
                    title: '性、身体与身份探索',
                    items: [
                      '性欲差异与无性婚姻困扰',
                      '性功能障碍与唤起/高潮困难',
                      'LGBTQIA+ 身份探索与肯定性咨询',
                      '进食障碍与暴食/限制循环',
                      '身体形象困扰',
                      '性羞耻与躯体解离',
                    ],
                  },
                  {
                    title: '创伤与原生家庭',
                    items: [
                      '童年创伤与情感忽视',
                      '原生家庭与代际创伤',
                      '复杂性创伤后应激障碍 (C-PTSD)',
                      '性侵害与性别暴力幸存者支持',
                      '宗教创伤与信仰解构',
                    ],
                  },
                  {
                    title: '跨文化与存在主义危机',
                    items: [
                      '跨文化适应压力与文化冲击',
                      '一/二代移民身份冲突',
                      '存在主义危机与寻找生命意义',
                      '哀伤失丧与人生转折',
                      '冒牌者综合征 / 虚假感',
                    ],
                  },
                  {
                    title: '学业、职场与个人成长',
                    items: [
                      '冒牌者综合征 / 虚假感',
                      '学业与职场职业倦怠',
                      '完美主义与拖延症',
                      '签证焦虑 / OPT 与 H1B 身份压力',
                      '人生转折期的决策瘫痪',
                    ],
                  },
                ]
              : [
                  {
                    title: 'Mood & Nervous System',
                    items: [
                      'Generalized Anxiety & Panic Attacks',
                      'Depression & Loss of Motivation',
                      'Chronic Stress & Nervous System Dysregulation',
                      'Emotional Dysregulation & Anger',
                      'Overthinking & Mental Exhaustion',
                    ],
                  },
                  {
                    title: 'Relationships & Boundaries',
                    items: [
                      'People-Pleasing & Boundary Setting',
                      'Communication Breakdown & Constant Conflict',
                      'Infidelity & Rebuilding Trust',
                      'Attachment Wounds: Anxious & Avoidant Patterns',
                      'Toxic Relationships & Emotional Abuse Recovery',
                      'Loneliness & Difficulty Building Intimacy',
                    ],
                  },
                  {
                    title: 'Sex, Body & Identity',
                    items: [
                      'Desire Discrepancies & Sexless Marriages',
                      'Sexual Dysfunction & Arousal/Orgasm Difficulties',
                      'LGBTQIA+ Identity Exploration & Affirming Care',
                      'Eating Disorders & Binge/Restrict Cycles',
                      'Body Dysmorphia & Body Image Struggles',
                      'Sexual Shame & Somatic Dissociation',
                    ],
                  },
                  {
                    title: 'Trauma & The Past',
                    items: [
                      'Childhood Trauma & Emotional Neglect',
                      'Family of Origin & Intergenerational Trauma',
                      'Complex PTSD / C-PTSD',
                      'Sexual Assault & Gender-Based Violence Survivor Support',
                      'Religious Trauma & Faith Deconstruction',
                    ],
                  },
                  {
                    title: 'Multicultural & Existential Crises',
                    items: [
                      'Acculturative Stress & Culture Shock',
                      '1st/2nd Gen Immigrant Identity Conflict',
                      'Existential Crisis & Searching for Meaning',
                      'Grief, Loss & Life Transitions',
                      'Imposter Syndrome / Feeling like a fraud',
                    ],
                  },
                  {
                    title: 'Academic, Career & Personal Growth',
                    items: [
                      'Imposter Syndrome / Feeling like a fraud',
                      'Academic & Workplace Burnout',
                      'Perfectionism & Procrastination',
                      'Visa Anxiety / OPT & H1B Stress',
                      'Decision Paralysis during Life Transitions',
                    ],
                  },
                ]
            ).map((section, idx) => (
              <div
                key={idx}
                className="reveal-on-scroll p-8 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-headline-md text-xl font-medium mb-5 text-[#2e382b] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#a35e3e] shrink-0" />
                    <span>{section.title}</span>
                  </h3>
                  <ul className="space-y-2.5 text-[#2f312e] text-sm leading-relaxed">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#a35e3e] font-bold select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Rilke Quote Banner */}
      <section className="relative w-full py-20 md:py-28 bg-[#2e382b] text-[#fbf7f0] overflow-hidden">
        <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center flex flex-col items-center">
          <blockquote className="font-quote-lead text-xl sm:text-2xl md:text-[26px] font-normal text-white/95 italic leading-relaxed max-w-3xl mx-auto mb-4">
            {isZh
              ? '“也许我们生活中一切的恶龙都是公主们，她们只是等候着，美丽而勇敢地看一看我们。也许一切恐怖的事物在最深处是无助的，向我们要求救助。”'
              : '"Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love."'}
          </blockquote>
          <cite className="font-label-md text-xs sm:text-sm uppercase tracking-[0.2em] font-medium not-italic" style={{ color: 'rgb(214, 163, 139)' }}>
            {isZh ? '—— 里尔克《给青年诗人的信》' : '— Rainer Maria Rilke, Letters to a Young Poet'}
          </cite>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] text-center">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 flex flex-col items-center reveal-on-scroll">
          <p className="font-quote-lead text-xl sm:text-2xl text-[#1e251d] font-normal italic leading-relaxed max-w-2xl mb-8">
            {isZh
              ? '“你就像一个装满水的豆袋沙发——柔软、舒适、安全，适应我的形状。”'
              : '"You are like a beanbag filled with water—soft, comfortable, safe, and adapts to my shape."'}
          </p>
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1e251d] text-[#fafaf4] hover:bg-[#2d302c] transition-all font-label-md text-sm font-medium shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            <span>{isZh ? '联系我' : 'Get In Touch'}</span>
            <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
          </button>
        </div>
      </section>
    </article>
  );
};
