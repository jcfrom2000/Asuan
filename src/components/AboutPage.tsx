import React from 'react';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Brain,
  Heart,
  Scale,
  Languages,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getAssetUrl } from '../utils/assets';

interface AboutPageProps {
  language: Language;
  onOpenBooking: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  onOpenBooking,
}) => {
  const isZh = language === 'zh';
  const t = translations[language];

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 1. HERO SECTION: Editorial Bio & Portrait */}
      <section className="w-full max-w-[1240px] mx-auto px-margin md:px-margin-desktop py-space-xl lg:py-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-center">
          {/* Left Editorial Column */}
          <div className="reveal-on-scroll lg:col-span-6 flex flex-col space-y-space-md">
            <div className="space-y-space-xs">
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-[1.15]">
                {isZh ? 'Jessica Cao 曹翱璇' : 'Jessica Cao'}
              </h1>
              <div className="flex items-center gap-3">
                <span className="font-headline-md text-headline-md italic text-secondary font-serif">
                  (she / her / 她)
                </span>
                <span className="text-xs font-label-md px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container">
                  LCSW • LCPC • LMSW
                </span>
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed pt-space-xs">
              {isZh
                ? '我是一名使用英语、普通话和粤语工作的多语种执业心理治疗师，持有伊利诺伊州 (LCSW, LCPC) 与密歇根州 (LMSW) 临床执照。作为临床工作者，我的专业取向深深植根于文化谦逊、创伤知情和性积极框架。我致力于为留学生、第一代移民、创伤幸存者以及在复杂亲密关系中摸索的个体与伴侣，建立一个被全然接纳、无评判的安全空间。'
                : 'I am a multilingual (English, Mandarin, Cantonese) licensed psychotherapist holding dual-state clinical licensure in Illinois (LCSW, LCPC) and Michigan (LMSW). As a clinician, my approach is deeply rooted in cultural humility, trauma-informed care, and a sex-positive framework. I am dedicated to creating a radically safe and non-judgmental space for international students, immigrants, trauma survivors, and individuals navigating the complexities of modern intimacy.'}
            </p>

            {/* Minimalist Metric Matrix */}
            <div className="grid grid-cols-3 gap-space-md py-space-sm border-t border-b border-surface-variant/70">
              <div>
                <div className="font-label-md text-[11px] tracking-wider uppercase text-secondary">
                  {isZh ? '三语工作' : 'Trilingual'}
                </div>
                <div className="font-headline-md text-[20px] text-primary mt-1 font-serif">
                  EN / 普 / 粵
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {isZh ? '英语、普通话与粤语' : 'Mandarin & Cantonese'}
                </div>
              </div>
              <div>
                <div className="font-label-md text-[11px] tracking-wider uppercase text-secondary">
                  {isZh ? '执照资质' : 'Licensure'}
                </div>
                <div className="font-headline-md text-[20px] text-primary mt-1 font-serif">
                  {isZh ? '双州执业' : 'Dual-State'}
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {isZh ? '伊利诺伊与密歇根' : 'Illinois & Michigan'}
                </div>
              </div>
              <div>
                <div className="font-label-md text-[11px] tracking-wider uppercase text-secondary">
                  {isZh ? '名校受训' : 'Education'}
                </div>
                <div className="font-headline-md text-[20px] text-primary mt-1 font-serif">
                  UChicago
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {isZh ? '芝加哥大学社工硕士' : 'M.A. Clinical Social Work'}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-label-md shadow-sm active:scale-[0.98] cursor-pointer"
              >
                {isZh ? '预约 15 分钟初访' : 'Schedule a Consultation'}
              </button>
            </div>
          </div>

          {/* Right Column: Asymmetric Layered Framing */}
          <div className="reveal-on-scroll reveal-delay-200 lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[460px]">
              {/* Asymmetric Tactile Double-Layer Backdrop (立体双层卡片衬底) */}
              <div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-2xl -z-10 shadow-sm border border-[#d8c8ba] transition-transform duration-500"
                style={{ backgroundColor: '#ebded2' }}
              />

              {/* Foreground Image Vessel - Aspect-constrained for CLS = 0 */}
              <div className="relative overflow-hidden rounded-2xl bg-surface-container shadow-md border border-[#e5ded4] aspect-[4/5] sm:aspect-auto sm:h-[520px]">
                <img
                  className="w-full h-full object-cover object-[50%_15%]"
                  alt={t.imageAlts.therapistPortrait}
                  src={getAssetUrl('assets/images/overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg')}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Bottom Editorial Floating Caption */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-md border border-outline-variant/30 max-w-[280px]">
                <p className="font-label-md text-label-md font-semibold text-primary">
                  {isZh ? '曹翱璇 Jessica Cao' : 'Jessica Cao'}
                </p>
                <p className="font-body-sm text-body-sm text-secondary">
                  {isZh ? '创办人 • 整合取向心理治疗师' : 'Founder & Integrative Psychotherapist'}
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-tight">
                  {isZh
                    ? '提供芝加哥线下个案咨询与全州受保护远程视频服务。'
                    : 'Offering in-person sessions in Chicago & secure telehealth statewide.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE TO WORK WITH ME (Core Clinical Pillars) */}
      <section
        className="w-full max-w-[1240px] mx-auto px-margin md:px-margin-desktop py-space-xl lg:py-space-2xl"
        id="clinical-philosophy"
      >
        <div className="max-w-2xl mb-space-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            {isZh ? '为什么选择与我同行？' : 'Why Choose to Work with Me?'}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
            {isZh
              ? '心理咨询不是千篇一律的机械方案，而是一段神圣而专注的关系共创。以下是我日常临床实践中的三项核心基石：'
              : 'Therapy is not a one-size-fits-all protocol; it is a sacred relational collaboration. Here is what anchors my work with clients every day:'}
          </p>
        </div>

        {/* 3 Core Pillars Bento / Card Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Pillar 1 */}
          <div className="flex flex-col bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 hover:bg-surface-container transition-colors duration-300">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-headline-md text-headline-md font-serif text-secondary">
                01
              </span>
              <Languages className="text-secondary w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-[22px] text-primary mb-space-sm leading-snug">
              {isZh ? '无需繁琐的文化解释' : 'No Cultural Translation Needed'}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {isZh
                ? '熟练运用英语、普通话与粤语，我深刻理解代际愧疚、原生家庭纠葛、孝道压力以及身处异国时的系统性张力。在我们的会面中，你无需耗费宝贵精力解释成长背景，我们可以直接触达情绪内核。'
                : 'Fluent in English, Mandarin, and Cantonese, I intimately comprehend the unspoken nuances of intergenerational debt, family-of-origin dynamics, filial piety, and the invisible systemic friction that shapes your inner world. You won’t waste precious session time explaining your heritage.'}
            </p>
            <div className="mt-space-md pt-space-sm border-t border-outline-variant/30">
              <span className="font-body-sm text-[12px] uppercase tracking-wider text-secondary font-medium">
                {isZh ? '跨文化与移民身份认同' : 'Bicultural & Immigrant Identity'}
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 hover:bg-surface-container transition-colors duration-300">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-headline-md text-headline-md font-serif text-secondary">
                02
              </span>
              <Heart className="text-secondary w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-[22px] text-primary mb-space-sm leading-snug">
              {isZh ? '性与亲密关系深度专长' : 'Specialized Sex & Intimacy Expertise'}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {isZh
                ? '在密歇根大学接受系统的性治疗与性教育训练，作为该领域少数具有亚裔与少数族裔视角的执业者，我陪伴个人与伴侣在零羞耻、去评判的环境中拆解性欲差异、身体羞耻、性创伤与亲密脆弱。'
                : 'Formally trained in Sex Therapy and Sexuality Education at the University of Michigan, I am one of the few POC therapists in this space. I help individuals and couples unpack desire discrepancies, body shame, sexual trauma, and relational vulnerability without stigma or moralizing judgment.'}
            </p>
            <div className="mt-space-md pt-space-sm border-t border-outline-variant/30">
              <span className="font-body-sm text-[12px] uppercase tracking-wider text-secondary font-medium">
                {isZh ? '性积极与肯定性关怀' : 'Sex-Positive & Affirming Practice'}
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 hover:bg-surface-container transition-colors duration-300">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-headline-md text-headline-md font-serif text-secondary">
                03
              </span>
              <Scale className="text-secondary w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-[22px] text-primary mb-space-sm leading-snug">
              {isZh ? '兼具深度觉察与具身行动' : 'A Balance of Depth & Action'}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
              {isZh
                ? '立足于哲学思辨与依恋理论的深度反思，同时融合躯体体验（Somatic）调控与以解决为导向的实操方法。我不仅能稳稳承接你最沉重的存在主义虚无与哀伤，更能为你提供应对当下生活转折的清晰具身工具。'
                : 'Rooted in philosophical inquiry and attachment theory, yet equipped with somatic grounding and solution-focused interventions. I hold space for your deepest existential grief and existential longing, while providing practical behavioral tools for navigating acute transitions.'}
            </p>
            <div className="mt-space-md pt-space-sm border-t border-outline-variant/30">
              <span className="font-body-sm text-[12px] uppercase tracking-wider text-secondary font-medium">
                {isZh ? '心理动力学与躯体整合' : 'Psychodynamic & Somatic Integration'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEDITATIVE SCRIPTURAL REFLECTION BANNER */}
      <section className="w-full relative overflow-hidden my-space-md py-space-2xl bg-[#EFE9DF]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${getAssetUrl('assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg')}')`,
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-[#EFE9DF]/40 backdrop-blur-[1px]" />
        <div className="max-w-[920px] mx-auto px-margin md:px-margin-desktop text-center flex flex-col items-center relative z-10">
          <blockquote className="font-quote-lead text-quote-lead md:text-[30px] md:leading-[44px] text-primary font-serif italic max-w-2xl leading-relaxed">
            {isZh
              ? '“我的佳偶，你全然美丽，毫无瑕疵。”'
              : '“You are altogether beautiful, my love; there is no flaw in you.”'}
          </blockquote>
          <cite className="mt-space-sm font-label-md text-label-md uppercase tracking-widest text-secondary not-italic font-medium">
            {isZh ? '雅歌 4:7 • Song of Solomon 4:7' : 'Song of Solomon 4:7'}
          </cite>
        </div>
      </section>

      {/* 4. FROM DIASPORA TO HEALING SANCTUARY (Formerly My Story - Fully Expanded) */}
      <section
        className="w-full max-w-[1240px] mx-auto px-margin md:px-margin-desktop py-space-xl lg:py-space-2xl"
        id="my-story"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-start">
          {/* Left Column: Sticky-friendly Visual Vignette & Affirmation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-space-lg lg:sticky lg:top-28">
            <div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight leading-[1.2]">
                {isZh ? '从离散经验到疗愈庇护所' : 'From Diaspora to Healing Sanctuary'}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                {isZh
                  ? '通向临床治疗的道路从来不是书斋里的抽象推演，它由真实的迁徙、身份重组与社区陪伴的切身体验铸就。'
                  : 'The path toward clinical work was not abstract—it was forged in the lived realities of migration, displacement, and community care.'}
              </p>
            </div>

            {/* Circular Training Portrait (Zero CLS with aspect-square) */}
            <div className="relative py-space-sm">
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] aspect-square rounded-full overflow-hidden mx-auto shadow-md border-4 border-surface-container-lowest bg-surface-container">
                <img
                  className="w-full h-full object-cover object-[50%_25%]"
                  alt={t.imageAlts.sexualHealthTraining}
                  src={getAssetUrl('assets/images/overstream-therapy-michigan-ann-arbor-sexual-health-training-program.jpg')}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-center mt-space-sm">
                <p className="font-body-sm text-[12px] italic text-secondary">
                  {isZh
                    ? '密歇根大学性健康与性治疗证书项目 • 安娜堡，密歇根'
                    : 'Sexuality Education & Sexual Health Training, Ann Arbor, MI'}
                </p>
              </div>
            </div>

            {/* Pull Quote Vignette */}
            <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30">
              <p className="font-headline-md text-[18px] text-primary font-serif italic leading-relaxed">
                {isZh
                  ? '“真正的疗愈，始于你被深度看见、安全抱持，并且毫无保留地成为你自己。”'
                  : '“Healing happens when you are finally seen, safely held, and unceremoniously yourself.”'}
              </p>
              <p className="font-label-md text-[11px] text-secondary uppercase tracking-widest mt-2">
                — Jessica Cao
              </p>
            </div>
          </div>

          {/* Right Column: Fully Expanded Narrative Essay */}
          <div className="lg:col-span-7 flex flex-col space-y-space-md text-on-surface font-body-lg text-base sm:text-lg leading-relaxed">
            <p>
              {isZh
                ? '我走向心理治疗的道路，深植于早年关于迁徙、依恋与归属感的切身体验。我出生于中国一座远离父母故土的城市，童年时期始终生活在社区的边缘地带。'
                : 'My journey to becoming a psychotherapist is deeply rooted in my own early experiences of displacement, attachment, and the search for belonging. Born to immigrant parents in a Chinese city far from their roots, I spent my childhood navigating the margins of a community.'}
            </p>
            <p>
              {isZh
                ? '作为外来者不断适应新文化规范的历程，成为了我今日跨文化同理心的基石。成长于非传统的家庭结构与半寄养环境，我早早体会到：生物学血缘绝不是深层依恋与持久之爱的唯一前提。'
                : 'The experience of constantly adapting to new cultural norms as an outsider became the foundation of my cross-cultural empathy today. Growing up in a non-traditional family structure and a semi-foster care environment, I learned early on that biology is not the only prerequisite for deep attachment and enduring love.'}
            </p>
            <p>
              {isZh
                ? '这种复杂的家庭动力赋予了我一种直觉：敏锐读取情绪氛围、迅速适应文化转换，并深切体察他人未曾言说的需求。曾经的童年自保技能，如今蜕变为我核心的临床禀赋。在这些塑造性格的岁月与未知转折中，基督教信仰成为我坚韧的宁静基石——稳稳锚定我的生命，并最终指引我走入陪伴他人受苦的圣召。'
                : 'This complex family dynamic gifted me with an intuitive ability to read emotional landscapes, quickly adapt to shifting cultural norms, and deeply understand others’ unspoken needs. What were once childhood survival skills have now blossomed into my core clinical strengths. Through these formative years and life’s unpredictable transitions, my Christian faith became a quiet cornerstone of my resilience—anchoring me and ultimately guiding my calling to walk alongside others in their pain.'}
            </p>

            {/* Central Philosophical Callout Box */}
            <div className="my-space-xs p-space-md bg-surface-container-high/60 rounded-xl border-l-2 border-secondary">
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                {isZh
                  ? '“在步入临床社会工作之前，我在北京接受的哲学与宗教学术训练，赋予了我陪伴来访者直面生命终极命题与存在主义困惑的深厚定力。”'
                  : '“Before diving into clinical social work, my academic roots began with philosophical and religious studies in Beijing, which gifted me with a profound capacity to sit with life\'s existential questions.”'}
              </p>
            </div>

            <p>
              {isZh
                ? '后来，作为一名在美国学术与职业旷野中探索的跨国留学生，我在印第安纳大学攻读了应用健康传播学硕士。这段经历让我领悟到：语言和叙事对于形塑我们的心理福祉具有多么深刻的力量。'
                : 'Later, as an international student navigating the vast American academic and professional landscape, I pursued a Master of Arts in Health Communication in Indiana. This experience taught me how powerful language and narratives are in shaping our psychological well-being.'}
            </p>
            <p>
              {isZh
                ? '无论是在新闻工作中记录真实的人间悲欢、在文案创作中推敲词句，还是在急诊室和重症病房担任医疗口译员、跨越脆弱时刻的语言鸿沟，我都逐渐意识到自己的真正使命在于社会工作——从单纯观察痛苦，转为深层参与并促成真实的疗愈。'
                : 'Whether working as a journalist capturing human stories, a copywriter crafting messages, or a medical interpreter bridging language gaps in vulnerable moments, I realized my true calling was in social work—where I could move beyond observing pain to actively facilitating deep healing.'}
            </p>
            <p>
              {isZh
                ? '从一名留学生跨越为美国执业临床治疗师的旅程，镜像重现了我童年的迁徙经历。我切身体会过文化适应压力、身份撕裂，以及许多移民群体背负的无声生存焦虑。因此，在我的咨询室里，你永远不必费力为自己的成长经历作辩解。'
                : 'My transition from an international student to a licensed practitioner in the United States mirrors my childhood migration. I intimately understand acculturative stress, identity fragmentation, and the silent survival anxiety that many immigrants face. Because of this, my therapy room is a space where you never have to justify your lived experiences.'}
            </p>

            {/* Concluding Highlighted Principle */}
            <p className="font-medium text-primary bg-surface-container-low p-4 sm:p-5 rounded-xl border border-secondary/30">
              {isZh
                ? '我的执业理念很简单：真正的疗愈，始于你被完全看见、安全抱持，并且毫无保留地成为你自己。'
                : 'My philosophy is simple: healing happens when you are fully seen, safely held, and unapologetically yourself.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL CREDENTIALS & TRAINING (Rigorous Foundation) */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-space-2xl border-t border-outline-variant/30">
        <div className="max-w-[1240px] mx-auto px-margin md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                {isZh ? '临床资质与专业受训' : 'Professional Credentials & Training'}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {isZh
                ? '融合顶尖临床社会工作教育、专业执照认证以及持续循证进修的严谨体系。'
                : 'A balance of premier clinical social work education, specialized post-graduate certifications, and continuous evidence-based study.'}
            </p>
          </div>

          {/* 4 Structured Credential Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Column 1: Academic Degrees */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-space-sm">
                  <GraduationCap className="text-secondary w-5 h-5" />
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                    {isZh ? '学位背景' : 'Degrees'}
                  </h3>
                </div>
                <ul className="space-y-space-md font-body-sm text-body-sm text-on-surface">
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '社会工作硕士 (MSW)' : 'Master of Arts in Social Work'}
                    </span>
                    <span className="text-on-surface-variant block">
                      {isZh ? '芝加哥大学 (2021)' : 'University of Chicago (2021)'}
                    </span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '临床方向与创伤照护' : 'Clinical Concentration & Trauma Care'}
                    </span>
                  </li>
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '应用健康传播学硕士' : 'M.A. Applied Health Communication'}
                    </span>
                    <span className="text-on-surface-variant block">
                      {isZh ? '印第安纳大学 (2019)' : 'Indiana University (2019)'}
                    </span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '叙事与健康素养' : 'Narrative & Health Literacy'}
                    </span>
                  </li>
                  <li>
                    <span className="font-medium text-primary block">
                      {isZh ? '哲学学士 (BA)' : 'Bachelor of Arts in Philosophy'}
                    </span>
                    <span className="text-on-surface-variant block">
                      {isZh ? '中央民族大学 (2015)' : 'Minzu University of China (2015)'}
                    </span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '比较伦理学与辩证思辨' : 'Comparative Ethics & Dialectics'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Specialized Certifications */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-space-sm">
                  <Award className="text-secondary w-5 h-5" />
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                    {isZh ? '专项认证' : 'Certifications'}
                  </h3>
                </div>
                <ul className="space-y-space-md font-body-sm text-body-sm text-on-surface">
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '性治疗与性教育双证书' : 'Sex Therapy & Sexuality Education'}
                    </span>
                    <span className="text-on-surface-variant block">
                      {isZh ? '密歇根大学 (2024)' : 'University of Michigan (2024)'}
                    </span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? 'AASECT 认证对齐课程' : 'AASECT-Aligned Curriculum'}
                    </span>
                  </li>
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '40小时家庭暴力干预证书' : '40-Hour Domestic Violence Certificate'}
                    </span>
                    <span className="text-on-surface-variant block">
                      {isZh ? '伊利诺伊州政府 (2024)' : 'State of Illinois (2024)'}
                    </span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '危机干预与关系安全' : 'Crisis Response & Relational Safety'}
                    </span>
                  </li>
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '创伤知情照护证书' : 'Trauma-Informed Care Certificate'}
                    </span>
                    <span className="text-on-surface-variant block">
                      {isZh ? '芝加哥大学 (2021)' : 'University of Chicago (2021)'}
                    </span>
                  </li>
                  <li>
                    <span className="font-medium text-primary block">
                      {isZh ? '国家认证医疗口译员' : 'Certified Healthcare Interpreter'}
                    </span>
                    <span className="text-on-surface-variant block">CoreCHI™ (2019)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Advanced Clinical Modalities */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-space-sm">
                  <Brain className="text-secondary w-5 h-5" />
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                    {isZh ? '临床流派与方法' : 'Modalities'}
                  </h3>
                </div>
                <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <div>
                      <span className="font-medium text-primary block">
                        Gottman Method (Level 1 & 2)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        {isZh ? '伴侣冲突与亲密创伤修复' : 'Treating Affairs & Relational Trauma'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <div>
                      <span className="font-medium text-primary block">
                        Somatic Experiencing (SE®)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        {isZh ? '躯体体验与神经系统调节' : 'Body-based Nervous System Regulation'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <div>
                      <span className="font-medium text-primary block">
                        Dialectical Behavior Therapy (DBT)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        {isZh ? '情绪调节与痛苦耐受技能' : 'Affect Regulation & Distress Tolerance'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <div>
                      <span className="font-medium text-primary block">
                        Cognitive Behavioral Therapy (CBT)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        {isZh ? '重塑适应不良的认知图式' : 'Restructuring Maladaptive Beliefs'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✦</span>
                    <div>
                      <span className="font-medium text-primary block">
                        {isZh ? '复杂伦理与边界督导' : 'Complex Clinical Ethics & Boundaries'}
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        {isZh ? '持续接受专家督导探究' : 'Supervised Ongoing Inquiry'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Licensure & Practice Jurisdiction */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-space-sm">
                  <ShieldCheck className="text-secondary w-5 h-5" />
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                    {isZh ? '执照管辖与学会' : 'Jurisdiction'}
                  </h3>
                </div>
                <ul className="space-y-space-md font-body-sm text-body-sm text-on-surface">
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '伊利诺伊州临床执照' : 'Illinois State Licensure'}
                    </span>
                    <span className="text-on-surface-variant block">LCSW & LCPC</span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '芝加哥线下与全州远程' : 'In-Person (Chicago) & Telehealth'}
                    </span>
                  </li>
                  <li className="border-b border-surface-variant pb-space-sm">
                    <span className="font-medium text-primary block">
                      {isZh ? '密歇根州临床执照' : 'Michigan State Licensure'}
                    </span>
                    <span className="text-on-surface-variant block">LMSW (Clinical)</span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '全州远程视频咨询' : 'Telehealth Statewide'}
                    </span>
                  </li>
                  <li>
                    <span className="font-medium text-primary block">
                      {isZh ? '跨州执照与协会会员' : 'Interstate & Associations'}
                    </span>
                    <span className="text-on-surface-variant block">
                      NASW & AASECT
                    </span>
                    <span className="text-[11px] text-secondary">
                      {isZh ? '印第安纳与威斯康辛 LCSW' : 'Indiana & Wisconsin LCSW'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE MONOLITHIC CLIENT QUOTE (Deep Forest Pine Inverted Section) */}
      <section className="w-full bg-[#2E382B] text-inverse-on-surface py-space-2xl my-space-md relative overflow-hidden">
        {/* Delicate Radial Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[960px] mx-auto px-margin md:px-margin-desktop text-center relative z-10 flex flex-col items-center">
          <span className="font-headline-md text-6xl text-secondary-fixed-dim/60 font-serif leading-none select-none mb-space-sm">
            “
          </span>
          <blockquote className="font-headline-lg text-[26px] md:text-[36px] md:leading-[50px] font-serif font-normal text-inverse-on-surface max-w-3xl leading-snug">
            {isZh
              ? '你就像一个装满水的水囊沙发——柔软、舒适、安全，而且完全顺应我的形状。'
              : 'You are like a beanbag filled with water — soft, comfortable, safe, and adapts to my shape.'}
          </blockquote>
          <cite className="mt-space-md font-label-md text-label-md uppercase tracking-widest text-primary-fixed font-medium not-italic">
            {isZh
              ? '— 长期心理治疗来访者反馈与评价'
              : '— Words from a Long-Term Psychotherapy Client'}
          </cite>
          <div className="mt-space-lg flex items-center justify-center gap-space-md">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface text-primary hover:bg-surface-container transition-all font-label-md text-sm font-medium shadow-sm active:scale-[0.98] cursor-pointer"
            >
              {isZh ? '开启你的疗愈之旅' : 'Begin Your Process'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
