import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Clock, Compass, Users } from 'lucide-react';
import { Language } from '../types';
import { getAssetUrl } from '../utils/assets';

interface CoupleFamilyTherapyPageProps {
  language?: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const CoupleFamilyTherapyPage: React.FC<CoupleFamilyTherapyPageProps> = ({
  language = 'en',
  onOpenBooking,
}) => {
  const isZh = language === 'zh';

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1e251d]">
      {/* 1. Hero Section */}
      <header className="relative w-full min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#1c241b]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/aistudio/imgi_14_natalia-blauth-Efn70fHvQpM-unsplash_309b2353.jpg')}
            alt="Couple & Family Therapy - Couple Embrace"
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
            {isZh ? '伴侣与家庭治疗' : 'Couple & Family Therapy'}
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-3xl leading-relaxed mb-8 drop-shadow-sm">
            {isZh
              ? '适合希望理解反复出现的互动循环、减少彼此指责，并在文化、代际、信任与亲密议题上建立更可持续关系方式的伴侣与家庭'
              : 'For couples and families who want to understand recurring interaction patterns, reduce blame, and build more workable ways of relating across culture, generations, trust, and intimacy'}
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking(isZh ? '预约伴侣与家庭治疗' : 'Book Couple & Family Therapy')}
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
            {/* Left Circular Photo of Jessica */}
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
                {isZh ? '临床背景与依恋视角' : 'CLINICAL BACKGROUND & ATTACHMENT INSIGHTS'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                {isZh ? '我的临床背景' : 'My Experience'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '我对家庭动力与亲密关系的理解，早在成为临床心理治疗师之前就已经开始。成长于流动的新移民与跨文化环境，并亲身经历非传统家庭系统的重组，这些复杂的家庭动力赋予了我对人类深层情绪的深刻直觉与洞察。'
                  : 'My understanding of family dynamics and intimacy began long before I became a clinical therapist. Growing up in a transient migrant / immigrant environment and navigating a non-traditional family structure, I have experienced the ruptures and restructurings of attachment, and these complex family dynamics have gifted me with emotional intuition and insights into understanding complex human emotions.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Affirmation Ribbon */}
      <div className="bg-[#e8decb] py-7 text-center text-[#2e382b] tracking-[0.2em] uppercase text-xs sm:text-sm font-medium">
        {isZh
          ? '这里欢迎真实完整的你 • 这里欢迎真实完整的你 • 这里欢迎真实完整的你 • 这里欢迎真实完整的你'
          : 'You Are Welcome Here • You Are Welcome Here • You Are Welcome Here • You Are Welcome Here'}
      </div>

      {/* 4. 15min Free Consultation */}
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

      {/* 5. Song of Solomon Banner */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#2e382b] text-[#fbf7f0] flex items-center justify-center">
        <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          <blockquote className="font-quote-lead text-2xl sm:text-3xl md:text-4xl font-normal text-white/95 tracking-tight leading-relaxed mb-4">
            {isZh ? '“我的佳偶，你全然美丽，毫无瑕疵。”' : '"You are altogether beautiful, my love; there is no flaw in you."'}
          </blockquote>
          <cite className="font-label-md text-xs sm:text-sm uppercase tracking-widest font-medium not-italic" style={{ color: 'rgb(214, 163, 139)' }}>
            {isZh ? '雅歌 4:7' : 'Song of Solomon 4:7'}
          </cite>
        </div>
      </section>

      {/* 6. Couple & Family Therapy Details */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                {isZh ? '关系与代际系统框架' : 'RELATIONAL & GENERATIONAL FRAMEWORKS'}
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                {isZh ? '伴侣与家庭咨询' : 'Couple & Family Therapy'}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '伴侣咨询聚焦于伴侣之间的互动模式，而非指定某个人为‘问题源头’。我们共同应对沟通断裂、追-逃循环、文化或原生家庭差异、性满足感困扰、边界冲突以及出轨等信任破裂后的修复。'
                  : 'Couples therapy focuses on the interactional pattern between partners rather than assigning one person the role of \'the problem.\' We may work with communication breakdowns, pursue-withdraw cycles, cultural or family-of-origin differences, sexual dissatisfaction, boundary conflicts, and recovery after breaches of trust such as infidelity.'}
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {isZh
                  ? '家庭咨询有助于解决代际冲突、父母与子女沟通障碍、移民与文化适应、照顾者角色、重组或非传统家庭结构以及重大生活转折。我格外关注层级、边界、角色期待以及赋予家庭责任的文化含义。'
                  : 'Family therapy can be useful when distress is organized around generational conflict, parent-child communication, migration and acculturation, caregiving roles, blended or non-traditional family structures, or major transitions. I pay particular attention to hierarchy, boundaries, role expectations, and the cultural meanings attached to family responsibility.'}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(isZh ? '预约伴侣与家庭治疗' : 'Book Couple & Family Therapy')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1e251d] text-[#fafaf4] hover:bg-[#2d302c] transition-all font-label-md text-sm font-medium shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
                >
                  <span>{isZh ? '联系我 / 开始预约' : 'Work with Me'}</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/aistudio/imgi_27_unsplash-image-2PODhmrvLik_33bbde7a.jpg')}
                  alt={isZh ? '手比爱心' : 'Heart shape hands'}
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

      {/* 7. Process & Boundaries */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              {isZh ? '临床结构与收费标准' : 'CLINICAL STRUCTURE & FEES'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mt-2">
              {isZh ? '咨询流程与边界' : 'Process & Boundaries'}
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f3ec] border border-[#2e382b]/10 space-y-6 text-[#2f312e] text-base leading-relaxed reveal-on-scroll">
            {isZh ? (
              <>
                <p>我融合系统式与关系取向、哥特曼（Gottman）循证干预、创伤知情以及 AASECT 认证性治疗师训练。目标不是断定谁对谁错，而是理解是什么让冲突持续，并创造新的回应方式。</p>
                <p>治疗通常从一次 55 分钟的共同初访开始。在临床有需要时可能会推荐单独评估，并在事前确立明确的保密与信息共享规则。后续会谈通常为 55 分钟。</p>
                <p>伴侣与家庭咨询随着讨论过往回避的议题，可能带来暂时性的情绪波动。这能够巩固关系、厘清改变，或帮助双方面对未来的关键抉择。无任何特定结果可以获得绝对保证。</p>
              </>
            ) : (
              <>
                <p>I draw from systemic and relational approaches, Gottman-informed interventions, trauma-informed care, and my training as an AASECT Certified Sex Therapist. The goal is not to decide who is right, but to understand what keeps the conflict going and to create new ways of responding.</p>
                <p>Treatment commonly begins with a joint 55-minute intake. Individual assessment meetings may be recommended when clinically useful, with clear expectations about confidentiality and information-sharing established in advance. Ongoing sessions are typically 55 minutes.</p>
                <p>Couples and family therapy can temporarily intensify emotion as previously avoided concerns are discussed. It may strengthen a relationship, clarify needed changes, or sometimes help people make difficult decisions about the future of the relationship. No specific outcome can be guaranteed.</p>
              </>
            )}
            
            <div className="pt-4 border-t border-[#2e382b]/10 p-5 rounded-2xl bg-white/90 border border-[#2e382b]/10 font-semibold text-[#2e382b] text-sm sm:text-base">
              {isZh
                ? '收费：每 55 分钟联合会谈为 $220。伴侣/家庭咨询的保险报销取决于医疗必要性与具体保单；建议在治疗前确认福利。'
                : 'Fee: $220 per 55-minute joint session. Insurance coverage for couples/family therapy depends on medical necessity and the specific plan; benefits should be verified before treatment.'}
            </div>
          </div>
        </div>
      </section>

      {/* 8. My Theoretic Approach */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-18 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              {isZh ? '循证关系干预流派' : 'EVIDENCE-BASED RELATIONAL MODALITIES'}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal">
              {isZh ? '我的理论与干预流派' : 'My Theoretic Approach'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Approach 1 */}
            <div className="reveal-on-scroll p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                {isZh ? '整合系统式家庭治疗' : 'Integrative Systemic Family Therapy'}
              </h3>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                {isZh
                  ? '在伴侣与家庭咨询中，我源自芝加哥大学精神病学系的严谨临床训练。我坚信在任何关系中，都没有单一的‘造错者’。我将系统式、结构式与策略式流派结合，把‘关系本身’作为主要来访者。'
                  : 'In couples and family therapy, I draw upon my rigorous clinical training under Dr. Afaf and Dr. Badwan from the Department of Psychiatry at the University of Chicago. I firmly believe that in any relationship, there is no single \'problem maker\' or \'scapegoat.\' Taking an integrative approach that weaves together Systemic, Structural, and Strategic modalities, I treat the \'relationship itself\' as my primary client.'}
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                {isZh
                  ? '系统视角把家庭或伴侣视为紧密连接的情绪整体。一个人的焦虑或冷漠不是单方面的失败，而是系统失调的体现。在会谈中，我帮助双方从指责归咎转向理解互动模式。'
                  : 'Through a Systemic lens, we view the family or couple as an intricately interconnected emotional unit. One person\'s anxiety, anger, or withdrawal is rarely an individual failure; it is often a symptom of a dysregulated relational system. In our sessions, I will help you shift the focus from assigning blame (\'who is right and who is wrong\') to understanding how your interactional patterns co-create the current distress.'}
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                {isZh
                  ? '结构与策略视角协助观察层级、边界与角色期待。对于东亚家庭或新移民，代际边界容易模糊。我们不以西方个体主义去病理化，而是温和重塑健康边界，让爱不再沉重。'
                  : 'Integrating a Structural perspective, I will help you observe the hierarchies, roles, and invisible boundaries within your family system. For many families influenced by East Asian authoritarian cultures or those navigating the survival modes of immigration, generational boundaries can easily blur—such as children carrying the emotional weight of their parents (parentification) or partners losing their individuality through enmeshment. I do not pathologize these structures using rigid Western individualistic standards; instead, we acknowledge how these patterns historically protected the family\'s survival. Building on this empathy, we gently restructure healthier boundaries so that love no longer feels like a suffocating weight.'}
              </p>
            </div>

            {/* Approach 2 */}
            <div className="reveal-on-scroll reveal-delay-100 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                  {isZh ? '哥特曼伴侣干预 (The Gottman Method)' : 'The Gottman Method'}
                </h3>
                <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                  {isZh
                    ? '融合四十余年关系研究的哥特曼循证干预，帮助建立‘稳固的关系之屋’。识别并拆解批判、蔑视、防御与冷战等破坏性模式，重建日常友好与冲突后的有效修复。'
                    : 'In addressing couples\' conflicts, I am actively integrating the Gottman Method, a highly effective, evidence-based approach backed by over four decades of relationship research. I don\'t just teach you \'how to stop fighting\'. Instead, through structured assessments, we work to build your \'Sound Relationship House.\' In our sessions, we will accurately identify and dismantle the \'Four Horsemen\' (Criticism, Contempt, Defensiveness, and Stonewalling) that predict relationship deterioration. Through practical, actionable communication exercises, I will assist you in rebuilding a profound friendship system amidst daily routines, learning to express needs gently, and executing effective repairs after conflicts. This ensures you not only resolve the immediate crisis but also cultivate long-lasting relationship resilience.'}
                </p>
              </div>

              {/* Approach 3 */}
              <div className="pt-6 border-t border-[#2e382b]/10 space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                  {isZh ? '微观沟通与叙事调解' : 'Micro-Communication & Narrative Mediation'}
                </h3>
                <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                  {isZh
                    ? '基于健康传播学硕士及 CoreCHI 医疗口译经验，担任‘情绪翻译官’，帮助双方把攻击性表达‘翻译’为其底层对爱与安全联结的真实呼唤。'
                    : 'Grounded in my Master\'s background in Health Communication from Indiana University and my experience as a Certified Healthcare Interpreter (CoreCHI) facilitating communication in highly vulnerable medical settings, I am acutely sensitive to the micro-dynamics of language and narratives. In the therapy room, I often serve as an \'emotional translator.\' I am trained to catch the hidden irrational beliefs, distorted messages, and unspoken fears beneath your arguments. I will slow down the pace of your communication, interrupt destructive knee-jerk reactions, and help you \'translate\' aggressive accusations into their true underlying form: a desperate plea for love and connection.'}
                </p>
              </div>

              {/* Approach 4 */}
              <div className="pt-6 border-t border-[#2e382b]/10 space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                  {isZh ? '躯体创伤与依恋视角' : 'Somatic Trauma & Attachment Lens'}
                </h3>
                <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                  {isZh
                    ? '将情绪失调理解为神经系统的生存防御反应。帮助梳理双方的创伤引发点，停止将伴侣视为‘威胁’，而是在生理与情绪层面重建安全感。'
                    : 'In our most intimate relationships, we often manifest our deepest trauma responses. Sometimes, a partner\'s explosive anger or emotional withdrawal is not a sign of lacking love, but rather an indication that early attachment wounds have been triggered, sending the nervous system into a \'fight or flight\' survival mode. Integrating my profound background in trauma-informed care, I will never pathologize your dysregulation. Instead, I will help you map out each other\'s trauma triggers, shifting your perspective so you no longer view your partner as a \'dangerous enemy,\' but rather as a \'wounded companion in need of soothing,\' thereby rebuilding relational safety at a physiological level.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] text-center">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 flex flex-col items-center reveal-on-scroll">
          <p className="font-quote-lead text-xl sm:text-2xl text-[#1e251d] font-normal italic leading-relaxed max-w-2xl mb-8">
            {isZh
              ? '“你就像一个装满水的豆袋沙发——柔软、舒适、安全，适应我的形状。”'
              : '"You are like a beanbag filled with water—soft, comfortable, safe, and adapts to my shape."'}
          </p>
          <button
            type="button"
            onClick={() => onOpenBooking(isZh ? '联系我 / 预约咨询' : 'Get In Touch')}
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
