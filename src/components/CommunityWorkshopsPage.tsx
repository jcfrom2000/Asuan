import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Users,
  Compass,
  Sparkles,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  BookOpen,
  ZoomIn,
  X,
  Mail,
  GraduationCap,
  MessageCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface CommunityWorkshopsPageProps {
  language: Language;
  onOpenBooking: (serviceName?: string, prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome?: () => void;
  onNavigateToTab?: (tabId: string) => void;
}

interface FlyerItem {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  tagEn: string;
  tagZh: string;
  imageSrc: string;
  altEn: string;
  altZh: string;
  badgeEn?: string;
  badgeZh?: string;
  detailsEn: string[];
  detailsZh: string[];
  bookingTitle: string;
}

export const CommunityWorkshopsPage: React.FC<CommunityWorkshopsPageProps> = ({
  language,
  onOpenBooking,
  onOpenContact,
  onNavigateHome,
  onNavigateToTab,
}) => {
  const isZh = language === 'zh';
  const t = translations[language];

  // State for interactive flyer modal
  const [activeFlyer, setActiveFlyer] = useState<FlyerItem | null>(null);

  // Active flyers dataset based on user uploaded flyers
  const flyers: FlyerItem[] = [
    {
      id: 'chinese-women-group',
      titleEn: "Chinese Women's Desire & Intimacy Group",
      titleZh: '华人女性情欲与亲密关系小组',
      subtitleEn: 'About desire, body, shame, intimacy, boundaries, and pleasure',
      subtitleZh: '关于欲望、身体、羞耻、亲密、界限与快乐',
      tagEn: 'Adult Chinese/Mandarin Women',
      tagZh: '成年华人 / 中文女性',
      badgeEn: 'Accepting Inquiries',
      badgeZh: '预报名登记中',
      imageSrc: 'assets/images/overstream-therapy-flyer-chinese-women-desire-intimacy.jpg',
      altEn: "Chinese Women's Desire & Intimacy Group Flyer by Jessica Cao, CST",
      altZh: '华人女性情欲与亲密关系小组招募海报 - 曹翱璇 Jessica Cao',
      detailsEn: [
        'A confidential, respectful, non-judgmental psychotherapy space for Chinese women to explore desire, body, relationships, and intimacy.',
        'Core Topics: Desire, Body, Shame & Permission, Boundaries & Consent, Pleasure, Intimacy & Relationships.',
        'Format: Small confidential psychotherapy group (6-8 members). Time & Location to be announced based on pre-registration.',
        'Insurance & Fees: Accepts select BCBS PPO & U-SHIP (or Self-Pay).',
      ],
      detailsZh: [
        '一个私密、尊重、不评判的华人女性心理治疗空间，重新探索属于自己的情欲、身体、关系与亲密体验。',
        '核心主题：欲望 (Desire) • 身体 (Body) • 羞耻与允许 (Shame & Permission) • 界限与同意 (Boundaries & Consent) • 愉悦 (Pleasure) • 亲密关系 (Intimacy & Relationships)',
        '形式：小型保密心理治疗小组 (6-8人)，根据预报名情况确定时间与地点。',
        '保险：接受部分 BCBS PPO & U-SHIP (或 Self-Pay)。',
      ],
      bookingTitle: "Chinese Women's Desire & Intimacy Group",
    },
    {
      id: 'uchicago-mandarin-group',
      titleEn: 'UChicago Mandarin-Speaking Student Support Group',
      titleZh: '芝加哥大学中文学生心理支持小组',
      subtitleEn: 'In a foreign land, some feelings are difficult to articulate in a second language',
      subtitleZh: '在异国学习和生活，有些压力很难用第二语言说清楚',
      tagEn: 'UChicago Students • 9-Week Winter Series',
      tagZh: '芝加哥大学在校生 • 连续9周',
      badgeEn: 'Winter Quarter',
      badgeZh: '冬季学期现正招募',
      imageSrc: 'assets/images/overstream-therapy-flyer-uchicago-mandarin-support.jpg',
      altEn: 'UChicago Mandarin-Speaking Student Support Group Flyer',
      altZh: '芝加哥大学中文学生心理支持小组海报',
      detailsEn: [
        'A warm, inclusive psychological support container tailored for Mandarin-speaking students at the University of Chicago.',
        'Schedule Options: Evening Cohort (Thursdays 8:00–9:30 PM CT) or Morning Cohort (Fridays 9:00–10:30 AM CT).',
        'Requirements: Group confidentiality agreement & a brief 1-on-1 intake screening prior to first session.',
        'Insurance: Accepts U-SHIP insurance (estimated $10 copay per session).',
      ],
      detailsZh: [
        '这是一个专为芝大中文学生开设的温暖、包容的心理支持空间，在母语中倾诉学业、关系与文化调适。',
        '时间选择：晚间组（每周四 8:00–9:30 PM CT）与晨间组（每周五 9:00–10:30 AM CT），连续9周。',
        '要求：成员需遵守小组保密约定，参加前安排一次简短的 1对1 沟通。',
        '保险：接受 U-SHIP 保险（预计 $10 copay / session）。',
      ],
      bookingTitle: 'UChicago Mandarin-Speaking Student Support Group',
    },
    {
      id: 'social-work-group',
      titleEn: 'Social Work Students Support Group',
      titleZh: '社会工作专业学生支持小组',
      subtitleEn: 'Learning to support others can bring up a lot in ourselves',
      subtitleZh: '在学习支持他人的过程中，内心也会涌现出很多自己的课题',
      tagEn: 'For All Social Work Students • Online via Zoom',
      tagZh: '面向所有社工专业学生 • 线上 Zoom',
      badgeEn: 'Open Enrollment',
      badgeZh: '全国线上开放',
      imageSrc: 'assets/images/overstream-therapy-flyer-social-work-students-support.jpg',
      altEn: 'Social Work Students Support Group Flyer by Jessica Cao, LCSW & LCPC',
      altZh: '社会工作专业学生支持小组海报 - 曹翱璇',
      detailsEn: [
        'A confidential space to connect, process stress, and receive peer support while navigating clinical internships and coursework.',
        'Schedule: Wednesdays 6:30–8:00 PM CT (9-week series, online via Zoom).',
        'Focus: Compassion fatigue, secondary trauma, navigating supervision, self-care, and professional identity.',
        'Insurance & Fees: BCBS PPO • USHIP • Self-Pay $20 per session.',
      ],
      detailsZh: [
        '一个保密的联结空间，在繁重的临床实习、督导与学术课程中梳理压力并获得同行支持。',
        '时间安排：每周三 6:30–8:00 PM CT（连续9周，线上 Zoom 举行）。',
        '探讨重点：同理心疲倦、次生创伤、督导关系处理、自我关照及专业身份认同。',
        '费用与保险：BCBS PPO • USHIP • 自费 $20 / 次。',
      ],
      bookingTitle: 'Social Work Students Support Group',
    },
  ];

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1a1c19] selection:bg-[#f3dfce] selection:text-[#231a0f]">
      {/* 1. HERO SECTION - Exactly matching the screenshot */}
      {/* 1. Hero Header Section */}
      <header className="relative w-full min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#24211a]">
        {/* Background Image: Yellow floral bouquet in green mug on white stool */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/overstream-therapy-community-workshops-hero-yellow-ranunculus.jpg')}
            alt={
              isZh
                ? '暖黄背景花瓶中盛开的毛茛与水仙花艺插花 - 社区工作坊与团体空间 | OverStream Therapy'
                : 'Luminous Yellow Ranunculus and Daffodils Floral Arrangement - Community Workshops & Groups Spaces | OverStream Therapy'
            }
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
          />
          {/* Responsive Editorial Warm Gradient Overlay: Ensures centered text is deeply readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#171a14]/80 via-[#171a14]/60 to-[#171a14]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#171a14]/40 to-[#171a14]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl text-center mx-auto flex flex-col items-center">
            {/* Headline */}
            <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.12] mb-4 sm:mb-6 drop-shadow-sm">
              {isZh ? '团体辅导与社区空间' : 'Community Workshops & Groups Spaces'}
            </h1>

            {/* Sub-quote */}
            <p className="font-headline-md italic text-xl sm:text-2xl md:text-3xl text-[#f3dfce] font-normal tracking-wide mb-8 sm:mb-10 leading-relaxed">
              {isZh ? '“疗愈发生于深层联结之中。”' : '“Healing happens in connection.”'}
            </p>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={() =>
                  onOpenBooking(
                    'Community Workshops & Groups',
                    isZh
                      ? '咨询/预约：社区工作坊与团体辅导空间'
                      : 'Inquiry: Community Workshops & Groups Spaces'
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#fbf7f0] text-[#192317] hover:bg-white hover:text-black transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
              >
                <span>{isZh ? '预约团体 / 初访咨询' : 'Book A Session'}</span>
                <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SECTION 1: "What it is & Who it's for" - Exact layout & text */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left: Arched / Pill Image (Hand holding green poppy pods in garden) */}
            <div className="md:col-span-5 flex justify-center reveal-on-scroll">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-[340px] aspect-[4/5] rounded-t-[140px] rounded-b-[140px] sm:rounded-t-[160px] sm:rounded-b-[160px] overflow-hidden p-2 bg-gradient-to-b from-[#e3e3de] via-[#eeeee9] to-[#fafaf4] shadow-lg">
                <div className="w-full h-full rounded-t-[132px] rounded-b-[132px] sm:rounded-t-[152px] sm:rounded-b-[152px] overflow-hidden relative shadow-inner">
                  <img
                    src={getAssetUrl('assets/images/overstream-therapy-community-poppy-pods-hand.jpg')}
                    alt={
                      isZh
                        ? '手持含苞待放浅绿罂粟花苞 - 团体滋养与心理教育 | OverStream Therapy'
                        : 'Hand gently holding botanical poppy seed pods in garden - Psychoeducational workshops | OverStream Therapy'
                    }
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right: Exact Copy */}
            <div className="md:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {isZh ? '核心定位与服务人群' : 'WHAT IT IS & WHO IT’S FOR'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                {isZh ? '什么是工作坊与团体空间 • 适合谁' : "What it is & Who it's for"}
              </h2>

              <div className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed space-y-4">
                <p>
                  {isZh
                    ? '量身定制的培训计划与心理教育工作坊，旨在为企事业单位团队与社区赋能，提供前沿的心理学理论与切实可行的实践技能。'
                    : 'Customized training programs and psychoeducational workshops are designed to equip organizational teams and communities with cutting-edge psychological theories and practical skills.'}
                </p>
                <p>
                  {isZh
                    ? '依托我带领过 20 多个心理治疗团体的丰富经验，我为特定需求提供结构化、安全保密的团体环境。在这里，你将发现自己无需独自承受生命的重量。'
                    : 'Drawing on my extensive experience facilitating over 20 psychotherapy groups, I offer structured, safe group environments tailored to specific needs. Here, you will discover that you do not have to carry your burdens alone.'}
                </p>
              </div>

              {/* Serene Trust Points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/5">
                  <ShieldCheck className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                  <span className="font-body-sm text-xs sm:text-sm text-on-surface">
                    {isZh ? '严格遵守保密规范与伦理' : 'Strict HIPAA Confidentiality & Safe Container'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/5">
                  <Users className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                  <span className="font-body-sm text-xs sm:text-sm text-on-surface">
                    {isZh ? '20+ 心理治疗团体带领资历' : 'Facilitated Over 20 Psychotherapy Groups'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: "Advocacy and psychoeducation are core to my mission." - Exact layout & text */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left: Exact Copy & "Work with Me" button */}
            <div className="md:col-span-7 flex flex-col space-y-6 order-2 md:order-1 reveal-on-scroll">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {isZh ? '社区倡导与跨文化赋能' : 'PUBLIC ADVOCACY & CLINICAL EDUCATION'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                {isZh
                  ? '倡导与心理教育是我不变的使命'
                  : 'Advocacy and psychoeducation are core to my mission.'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '作为心理健康播客的主理人与活跃的社区演讲者，我已完成数十场面向公众的宣讲。我近期为华人互助会 (CBCAC) 的青少年心理健康项目提供咨询，并在密歇根大学主导了针对进食障碍与身体意象 (EDBI) 以及多元文化意识的结构化工作坊。在小红书以“社工Jessica”及在TikTok以“JC & Sexuality”为名，我积极向广大公众普及心理健康素养与性教育。此外，我还定期为同行临床咨询师设计并讲授关于职业伦理、积极心理学及少数群体支持的继续教育课程。'
                  : "As the host of a mental health podcast and an active community speaker, I have delivered dozens of outreach presentations. I have recently consulted for CBCAC on youth mental health programs and led structured workshops on Eating Disorders and Body Image (EDBI) and multicultural awareness at the University of Michigan. Operating as 'Social Worker Jessica' on Red Note and 'JC & Sexuality' on TikTok, I actively promote mental health literacy and sexuality education to the broader public. Furthermore, I regularly design and deliver continuing education courses on professional ethics, positive psychology, and minority support for fellow clinicians."}
              </p>

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

            {/* Right: Chicago Chinatown Street Photo */}
            <div className="md:col-span-5 order-1 md:order-2 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#2e382b]/10 aspect-[4/5] sm:aspect-[3/4] bg-[#eeeee9]">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-community-chicago-chinatown-street.jpg')}
                  alt={
                    isZh
                      ? '芝加哥中国城 Wentworth 街景与威利斯大厦远景 - 扎根华人社区心理倡导 | OverStream Therapy'
                      : 'Chicago Chinatown street scene with Wentworth Avenue, dragon motifs, and Willis Tower in background | OverStream Therapy'
                  }
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-label-md text-white/90 drop-shadow-sm">
                  {isZh ? '芝加哥本土华人社区与多元文化宣导' : 'Chicago Chinatown & Immigrant Community Advocacy'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: Speaking engagements and workshops - Exact layout & text */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left: Roots & Resilience Watercolor Artwork */}
            <div className="md:col-span-5 reveal-on-scroll">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#2e382b]/10 aspect-[3/4] sm:aspect-[4/5] bg-white p-3 sm:p-4">
                <div className="w-full h-full rounded-xl overflow-hidden relative border border-[#2e382b]/5 bg-white flex items-center justify-center">
                  <img
                    src={getAssetUrl('assets/images/overstream-therapy-community-roots-resilience-tree.jpg')}
                    alt={
                      isZh
                        ? '手绘水彩画《Roots & Resilience 根基与抗逆力之树》 - 亚裔青年表达性艺术工作坊 | OverStream Therapy'
                        : "Original Watercolor Art 'Roots & Resilience Tree' with colorful root network - Expressive arts workshop | OverStream Therapy"
                    }
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-2 transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right: Exact Structured Copy */}
            <div className="md:col-span-7 flex flex-col space-y-6 reveal-on-scroll reveal-delay-100">
              <span
                className="font-label-md uppercase tracking-widest text-xs font-medium"
                style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
              >
                {isZh ? '机构合作与专题定制' : 'INSTITUTIONAL WORKSHOPS & KEYNOTES'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                {isZh
                  ? '我为大学高校、企事业单位与非营利机构提供定制讲座与工作坊'
                  : 'I am available for speaking engagements and workshops tailored for universities, corporations, and non-profit organizations.'}
              </h2>

              {/* 3 Structured Items: Problems Addressed, Process & Frequency, Investment */}
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '应对的问题与痛点 (Problems Addressed)：' : 'Problems Addressed: '}
                    </strong>
                    {isZh
                      ? '我们聚焦特定的组织挑战，包括多元文化团队内的跨文化沟通摩擦、构建创伤知情工作场所 (Trauma-Informed Workplaces)、将多元平等包容 (DEI) 框架融入心理健康支持体系，以及应对专业人士的同理心疲劳 (Compassion Fatigue)。'
                      : 'We target specific organizational challenges, including cross-cultural communication friction within diverse teams, building Trauma-Informed Workplaces, integrating DEI frameworks into mental health support, and combating compassion fatigue among professionals.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '流程与频次 (Process & Frequency)：' : 'Process & Frequency: '}
                    </strong>
                    {isZh
                      ? '合作始于一次深度咨询通话，以评估您机构的具体需求与痛点。随后，我将量身设计高度定制的单次讲座或系列互动工作坊，时长从 1.5 小时到全天沉浸式格式不等。'
                      : 'The process begins with a consultation call to assess your specific organizational needs and pain points. I will then design a highly customized single lecture or a series of interactive workshops, ranging from 1.5-hour sessions to full-day formats.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#eeeee9]/60 border border-[#2e382b]/6">
                  <p>
                    <strong className="text-primary font-semibold">
                      {isZh ? '收费与投资 (Investment)：' : 'Investment: '}
                    </strong>
                    {isZh
                      ? '基于项目的收费标准根据参与人数规模、时长和机构类型综合确定。针对非营利机构提供专项优惠费率。欢迎随时通过邮件垂询定制合作方案。'
                      : 'Project-based fees are determined by attendee size, duration, and organization type. Special rates are available for non-profit organizations. Please reach out via email to inquire about customized collaborations.'}
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenBooking(
                      'Institutional Workshop Inquiry',
                      isZh
                        ? '咨询意向：高校/企业定制工作坊与讲座'
                        : 'Institutional Workshop & Keynote Inquiry'
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-[#eeeee9] transition-all font-label-md text-sm font-medium cursor-pointer group"
                >
                  <span>{isZh ? '了解详情 / 发起咨询' : 'Learn more'}</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: "Past Group & Workshop Experience" - Exact 2x2 cards & text */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#eeeee9]/50 border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 sm:mb-16 reveal-on-scroll">
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {isZh ? '团体带领历程与实践' : 'CLINICAL FACILITATION & IMPACT'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              {isZh ? '既往团体辅导与工作坊经验' : 'Past Group & Workshop Experience'}
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {isZh
                ? '在多元文化与创伤知情视角下，跨越语言与文化的团体治疗与赋能实践。'
                : 'Over 20 facilitated group spaces spanning trauma recovery, body liberation, cultural navigation, and existential meaning.'}
            </p>
          </div>

          {/* 3-Device Responsive Grid: Mobile (1 col), Tablet (2 cols), Desktop (2x2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Trauma Healing & Safety Rebuilding */}
            <div className="reveal-on-scroll bg-[#fafaf4] p-7 sm:p-8 rounded-2xl border border-[#2e382b]/8 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#f3dfce] flex items-center justify-center text-[#a35e3e] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal mb-3">
                  {isZh
                    ? '创伤疗愈与安全感重建'
                    : 'Trauma Healing & Safety Rebuilding'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '共同带领“疗愈之旅”(A Journey Towards Healing)——专为性侵犯与亲密关系暴力幸存者设立的专项支持小组。该小组提供了一个稳固包容的安全容器，探索应对策略，并安全指引从性创伤中走向前方的旅途。'
                    : "Co-led 'A Journey Towards Healing,' a specialized support group for survivors of sexual assault and relationship violence. This group provided a secure holding space to explore coping strategies and safely navigate the path forward from sexual trauma."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2e382b]/6 flex items-center justify-between text-xs font-label-md text-on-surface-variant/70">
                <span>{isZh ? '创伤知情支持小组' : 'Specialized Survivor Support Group'}</span>
                <span className="text-[#a35e3e]">{isZh ? '安全保密' : 'Confidential'}</span>
              </div>
            </div>

            {/* Card 2: Eating Disorders & Body Image (EDBI) */}
            <div className="reveal-on-scroll reveal-delay-100 bg-[#fafaf4] p-7 sm:p-8 rounded-2xl border border-[#2e382b]/8 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#dbe6d3] flex items-center justify-center text-[#2e382b] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal mb-3">
                  {isZh
                    ? '进食障碍与身体意象 (EDBI)'
                    : 'Eating Disorders & Body Image (EDBI)'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '为处于进食障碍和身体意象困扰康复期的人群带领多期英语和普通话支持小组。此外，我还共同主导了循证研究支持的 EVERYbody Project 工作坊，直接挑战关于“完美身材”的有害文化信条，积极倡导激进的身体接纳与自我和解。'
                    : "Facilitated multiple English and Mandarin support groups for individuals recovering from disordered eating and body image distress. Additionally, I co-led the research-based EVERYbody Project workshop, directly challenging toxic cultural messages regarding the 'ideal body' and promoting radical body acceptance."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2e382b]/6 flex items-center justify-between text-xs font-label-md text-on-surface-variant/70">
                <span>{isZh ? '双语支持小组 • 循证工作坊' : 'Bilingual Support • EVERYbody Project'}</span>
                <span className="text-[#a35e3e]">{isZh ? '身体解放' : 'Body Positivity'}</span>
              </div>
            </div>

            {/* Card 3: Asian American Youth & Multicultural Navigation */}
            <div className="reveal-on-scroll bg-[#fafaf4] p-7 sm:p-8 rounded-2xl border border-[#2e382b]/8 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#f3dfce] flex items-center justify-center text-[#a35e3e] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal mb-3">
                  {isZh
                    ? '亚裔青少年与多元文化调适'
                    : 'Asian American Youth & Multicultural Navigation'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '主导为期8次的“根与韧性”(Roots & Resilience) 工作坊，运用艺术表达活动和心理教育帮助亚裔青年探索身份认同与家族史。同时，我还主持了“国际留学生午餐对话”，帮助学生平稳应对文化适应压力。'
                    : "Directed the 8-session 'Roots & Resilience' workshop, utilizing art-based activities and psychoeducation to help Asian American youth explore identity and family history. I also facilitated 'International Student Lunch Conversations' to help students navigate acculturative stress."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2e382b]/6 flex items-center justify-between text-xs font-label-md text-on-surface-variant/70">
                <span>{isZh ? '8次系列艺术工作坊 • 留学生沙龙' : '8-Session Series • Acculturative Stress'}</span>
                <span className="text-[#a35e3e]">{isZh ? '文化认同' : 'Identity'}</span>
              </div>
            </div>

            {/* Card 4: Existential & Spiritual Exploration */}
            <div className="reveal-on-scroll reveal-delay-100 bg-[#fafaf4] p-7 sm:p-8 rounded-2xl border border-[#2e382b]/8 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#dbe6d3] flex items-center justify-center text-[#2e382b] mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-normal mb-3">
                  {isZh
                    ? '存在主义与灵性探索'
                    : 'Existential & Spiritual Exploration'}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {isZh
                    ? '独立设计并主导“在灵性中与自我连接”(Connecting with Self in Spirituality) 小组。该空间让组员能够欣赏多元灵性信仰，并通过意义建构的灵性视角探讨应对人生重大转折。同时，我还在教会带领主日学以及“情绪健康灵性小组”。'
                    : "Independently designed and led the 'Connecting with Self in Spirituality' group. This space allowed members to appreciate diverse spiritual beliefs and discuss managing profound life transitions through a meaning-making, spiritual lens. Meanwhile, I led Sunday Schools at church and the Emotionally Healthy Spirituality Group."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2e382b]/6 flex items-center justify-between text-xs font-label-md text-on-surface-variant/70">
                <span>{isZh ? '灵性整合 • 生命转折意义建构' : 'Spiritual Meaning-Making • Life Transitions'}</span>
                <span className="text-[#a35e3e]">{isZh ? '深度共鸣' : 'Inner Peace'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: "Active & Upcoming Group Spaces" - Interactive Flyer Showcase */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 sm:mb-16 reveal-on-scroll">
            <span
              className="font-label-md uppercase tracking-widest text-xs font-medium"
              style={{ color: 'rgb(163, 94, 62)', display: 'inline-block' }}
            >
              {isZh ? '近期招募与进行中团体' : 'CURRENT & UPCOMING GROUPS'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              {isZh ? '近期招募与进行中团体小组' : 'Current & Upcoming Group Spaces'}
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {isZh
                ? '点击任意海报即可放大阅读海报详情、时间安排、费用与保险，并可直接登记报名意向。'
                : 'Click any flyer below to inspect dates, confidentiality standards, insurance options, and register interest.'}
            </p>
          </div>

          {/* 3-Device Responsive Grid for Flyers: Mobile (1 col), Tablet (2 cols), Desktop (3 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flyers.map((flyer, index) => (
              <div
                key={flyer.id}
                className={`reveal-on-scroll ${
                  index === 1 ? 'reveal-delay-100' : index === 2 ? 'reveal-delay-200' : ''
                } flex flex-col bg-[#eeeee9]/40 rounded-2xl overflow-hidden border border-[#2e382b]/10 shadow-xs hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Flyer Thumbnail with interactive zoom button */}
                <div
                  className="relative aspect-[3/4] bg-white overflow-hidden cursor-pointer"
                  onClick={() => setActiveFlyer(flyer)}
                >
                  <img
                    src={getAssetUrl(flyer.imageSrc)}
                    alt={isZh ? flyer.altZh : flyer.altEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-primary font-label-md text-xs font-medium shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#a35e3e]" />
                      {isZh ? '点击查看海报全文' : 'Click to View Full Poster'}
                    </span>
                  </div>

                  {flyer.badgeEn && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#a35e3e] text-white text-[11px] font-label-md shadow-xs font-medium">
                      {isZh ? flyer.badgeZh : flyer.badgeEn}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-label-md uppercase tracking-wider text-[#a35e3e] font-semibold block mb-1">
                      {isZh ? flyer.tagZh : flyer.tagEn}
                    </span>
                    <h3 className="font-headline-md text-lg sm:text-xl text-primary font-normal mb-2 leading-snug">
                      {isZh ? flyer.titleZh : flyer.titleEn}
                    </h3>
                    <p className="font-body-md text-xs sm:text-sm text-on-surface-variant line-clamp-2 mb-4">
                      {isZh ? flyer.subtitleZh : flyer.subtitleEn}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2e382b]/8 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveFlyer(flyer)}
                      className="text-xs font-label-md text-primary hover:text-[#a35e3e] transition-colors flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <span>{isZh ? '海报详情' : 'Flyer Details'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onOpenBooking(
                          flyer.bookingTitle,
                          isZh
                            ? `意向登记：${flyer.titleZh}`
                            : `Interest Registration: ${flyer.titleEn}`
                        )
                      }
                      className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-primary-container text-xs font-label-md font-medium transition-colors cursor-pointer"
                    >
                      {isZh ? '填写意向登记' : 'Express Interest'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Lightbox Modal for Full Flyer Inspection */}
      {activeFlyer && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveFlyer(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#fafaf4] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label={isZh ? '关闭海报' : 'Close poster'}
              onClick={() => setActiveFlyer(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Poster Image Container */}
            <div className="md:w-1/2 bg-[#1c1c1c] flex items-center justify-center p-2 sm:p-4 max-h-[50vh] md:max-h-[92vh] overflow-y-auto">
              <img
                src={getAssetUrl(activeFlyer.imageSrc)}
                alt={isZh ? activeFlyer.altZh : activeFlyer.altEn}
                className="max-h-full max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Poster Details & Action Container */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[92vh]">
              <div>
                <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold block mb-1">
                  {isZh ? activeFlyer.tagZh : activeFlyer.tagEn}
                </span>

                <h3 className="font-headline-lg text-2xl sm:text-3xl text-primary font-normal leading-tight mb-2">
                  {isZh ? activeFlyer.titleZh : activeFlyer.titleEn}
                </h3>

                <p className="font-body-md text-sm text-[#a35e3e] font-medium mb-6">
                  {isZh ? activeFlyer.subtitleZh : activeFlyer.subtitleEn}
                </p>

                <div className="space-y-3 mb-6">
                  {(isZh ? activeFlyer.detailsZh : activeFlyer.detailsEn).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body-md text-on-surface-variant">
                      <CheckCircle2 className="w-4 h-4 text-[#a35e3e] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#eeeee9]/80 border border-[#2e382b]/8 text-xs font-body-md text-on-surface-variant">
                  <p>
                    {isZh
                      ? '提示：填写意向登记表格不代表承诺参加，我们将根据报名情况与您安排简短的沟通，评估组员匹配度并确认最终时间。'
                      : 'Note: Submitting an interest form does not commit you to joining. We will reach out for a brief consultation to discuss fit and confirm logistics.'}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2e382b]/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const flyerRef = activeFlyer;
                    setActiveFlyer(null);
                    onOpenBooking(
                      flyerRef.bookingTitle,
                      isZh
                        ? `意向登记：${flyerRef.titleZh}`
                        : `Interest Registration: ${flyerRef.titleEn}`
                    );
                  }}
                  className="flex-1 py-3 px-5 rounded-full bg-primary text-on-primary hover:bg-primary-container text-sm font-label-md font-medium text-center transition-colors shadow-xs cursor-pointer"
                >
                  {isZh ? '在线填写意向登记' : 'Register Interest Online'}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFlyer(null)}
                  className="py-3 px-5 rounded-full bg-[#eeeee9] text-primary hover:bg-[#e3e3de] text-sm font-label-md font-medium text-center transition-colors cursor-pointer"
                >
                  {isZh ? '返回页面' : 'Close Preview'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. Closing Section */}
      <section className="w-full py-16 sm:py-20 bg-[#f4f2ea]/60 border-t border-[#2e382b]/8">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center reveal-on-scroll">
          <p className="font-headline-md italic text-xl sm:text-2xl text-primary font-normal leading-relaxed mb-6">
            {isZh
              ? '“在深层的联结与陪伴中，我们重新找回属于自己的声音与坚韧。”'
              : '“In genuine connection and compassionate holding, we rediscover our voice and collective resilience.”'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                onOpenBooking(
                  'Community Workshops & Groups Spaces',
                  isZh
                    ? '咨询/预约：社区工作坊与团体辅导空间'
                    : 'Inquiry: Community Workshops & Groups Spaces'
                )
              }
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm font-medium transition-all shadow-xs cursor-pointer"
            >
              {isZh ? '预约团体 / 初访咨询' : 'Book A Session'}
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-primary hover:bg-[#eeeee9] border border-primary/20 font-label-md text-sm font-medium transition-colors cursor-pointer"
            >
              {isZh ? '发送合作邮件' : 'Contact Directly'}
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
