import React from 'react';
import { Language } from '../types';
import { getAssetUrl } from '../utils/assets';

interface SexIntimacyTherapyPageProps {
  language: Language;
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact?: () => void;
  onNavigateHome?: () => void;
  onNavigateToTab?: (tabId: string) => void;
}

export const SexIntimacyTherapyPage: React.FC<SexIntimacyTherapyPageProps> = ({
  language,
  onOpenBooking,
}) => {
  const isZh = language === 'zh';

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1a1c19]">
      {/* 1. Hero Section with Heart Bokeh Background */}
      <header className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#241c19]">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/sex-therapy-hero-hearts.jpg')}
            alt={isZh ? '心形光斑背景' : 'Heart bokeh lights background'}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          {/* Gentle vignette overlay for pristine text contrast */}
          <div className="absolute inset-0 bg-[#161210]/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1040px] mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
          <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            {isZh ? '性与亲密关系治疗' : 'Sex & Intimacy Therapy'}
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#f2efe9] font-normal max-w-3xl leading-relaxed mb-9 drop-shadow-sm">
            {isZh
              ? '由认证性治疗师提供去污名化、性积极的专业心理治疗，专注亲密障碍、性创伤疗愈、宗教性羞耻及 LGBTQ+ 身份探索。'
              : 'Specialized, sex-positive therapy addressing intimacy barriers, sexual trauma recovery, religious sexual shame, and LGBTQ+ identity exploration in a stigma-free environment.'}
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking(isZh ? '预约性与亲密关系治疗' : 'Book Sex & Intimacy Therapy')}
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3 rounded-full bg-[#fbf7f0] text-[#1a1c19] hover:bg-white transition-all font-label-md text-sm sm:text-base font-normal shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            {isZh ? '预约初访沟通' : 'Book A Session'}
          </button>
        </div>
      </header>

      {/* 2. Centered Editorial Paragraph */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4]">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 text-center reveal-on-scroll">
          <p className="font-body-md text-base sm:text-lg md:text-[19px] text-[#1a1c19] font-normal leading-relaxed md:leading-[1.85]">
            {isZh
              ? '性与身体是人类生命力不可或缺的核心部分，然而它们却常被羞耻感、文化禁忌或过往创伤所笼罩。依托在密歇根大学（University of Michigan）性治疗与性教育专业的系统训练，我致力于提供一个高度包容、性积极的治疗空间。无论你是经历关系风暴后渴望重建信任的伴侣，还是在传统框架中挣扎于性压抑的个体，这里都是一个可以安全着陆、去污名化探索真实自我的庇护所。'
              : 'Sexuality and our bodies are vital aspects of human vitality, yet they are often shrouded in shame, cultural taboos, or past trauma. Drawing from my specialized training in Sex Therapy and Sexuality Education at the University of Michigan, I provide a highly inclusive, sex-positive space. Whether you are a couple looking to rebuild trust after a relational storm, or an individual navigating sexual repression within a traditional framework, this is a safe space to land and explore your authentic self without stigma.'}
          </p>
        </div>
      </section>

      {/* 3. My Background */}
      <section className="w-full py-16 md:py-24 bg-[#fafaf4]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Circular Photo */}
            <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full overflow-hidden bg-[#e5e5dd] shadow-sm">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-michigan-ann-arbor-sexual-health-training-program.jpg')}
                  alt={isZh ? '曹翱璇在密歇根大学性健康培训证书项目' : 'Jessica Cao at University of Michigan Sexual Health Certificate Program'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 flex flex-col space-y-5 reveal-on-scroll reveal-delay-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c19] font-normal leading-tight">
                {isZh ? '专业背景' : 'My Background'}
              </h2>

              <p className="font-body-md text-sm sm:text-base text-[#2f312e] leading-relaxed">
                {isZh
                  ? '我对创伤知情和心理性健康照料的承诺远不止于临床理论。早在接受正式临床训练之前，我于2017年联合创立了一支专注于预防儿童性侵害的公益团队。从普及预防教育到如今为基于性别的暴力幸存者守护安全疗愈空间，这是我终生不渝的使命召唤。在密歇根大学系统专业训练的基础之上，我在资深临床专家的持续督导下精进性治疗临床实践，同时活跃于各大平台，面向亚裔群体与基督徒社群开展性心理健康教育。'
                  : 'My commitment to trauma-informed and psychosexual care extends far beyond clinical theory. Long before my formal clinical training, I co-founded a non-profit team focused on child sexual abuse prevention in 2017. From providing prevention education to currently holding space for survivors of gender-based violence, this is my lifelong calling. Building upon my specialized training at UMich, I am continuously deepening my clinical practice in sex therapy under the supervision of seasoned experts. I am also an active sexuality educator on different platforms for Asian and Christians.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Focus Areas & Talk Therapy (Two-Row Alternating Layout with New High-Res Unsplash Images) */}
      <section className="w-full bg-[#fafaf4]">
        {/* Row 1: Left Text, Right Grapefruit */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Text */}
          <div className="py-16 md:py-20 px-8 sm:px-12 lg:px-16 xl:px-24 flex flex-col space-y-6 reveal-on-scroll">
            <h2 className="font-headline-lg text-xl sm:text-2xl text-[#1a1c19] font-normal leading-snug">
              {isZh
                ? '我尤为专注且深耕以下领域：'
                : 'I am particularly passionate about and focused on the following areas:'}
            </h2>

            <ul className="space-y-4 font-body-md text-sm sm:text-[15px] text-[#2f312e] leading-relaxed list-disc list-outside pl-5">
              <li>
                <strong className="text-[#1a1c19] font-medium">
                  {isZh ? '性创伤与性侵害后复原：' : 'Sexual Trauma & Assault Recovery: '}
                </strong>
                {isZh
                  ? '为幸存者提供绝对安全的容纳环境，处理创伤记忆、释放躯体躯化疼痛，重构身体自主权。'
                  : 'Providing an absolutely safe holding environment for survivors to process trauma, release somatic pain, and reclaim bodily autonomy.'}
              </li>

              <li>
                <strong className="text-[#1a1c19] font-medium">
                  {isZh ? '出轨与亲密信任修复：' : 'Infidelity & Relationship Repair: '}
                </strong>
                {isZh
                  ? '陪伴伴侣梳理出轨事件后复杂且压倒性的情绪风暴，重建深层信任与真实亲密。'
                  : 'Helping couples navigate the complex and overwhelming emotions following an affair to rebuild trust and profound intimacy.'}
              </li>

              <li>
                <strong className="text-[#1a1c19] font-medium">
                  {isZh ? '化解宗教性压抑：' : 'Navigating Religious Sexual Repression: '}
                </strong>
                {isZh
                  ? '支持具有基督教或其他信仰背景的来访者，在尊重其信仰核心价值观的框架下，破除内化性羞耻，建立健康、愉悦与丰盛的亲密连接。'
                  : 'Supporting clients from Christian or other religious backgrounds to dismantle internalized sexual shame and cultivate healthy, pleasurable intimacy within the framework of their values.'}
              </li>

              <li>
                <strong className="text-[#1a1c19] font-medium">
                  {isZh ? 'LGBTQ+ 身份认同与出柜历程：' : 'LGBTQ+ Identity & Coming Out: '}
                </strong>
                {isZh
                  ? '为酷儿与多元性别群体在出柜历程、自我身份认同整合及亲密关系建立中提供坚定肯定的专业支持。'
                  : 'Offering affirming care for queer individuals navigating the coming-out process, identity formation, and relationship building.'}
              </li>
            </ul>
          </div>

          {/* Right Image: Grapefruit (High-res Unsplash) */}
          <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[600px] overflow-hidden reveal-on-scroll">
            <img
              src={getAssetUrl('assets/images/sex-therapy-grapefruit.jpg')}
              alt={isZh ? '双手握着红西柚' : 'Hands holding fresh red grapefruit'}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Row 2: Left Banana, Right Text */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Image: Banana (High-res Unsplash) */}
          <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[600px] overflow-hidden order-2 lg:order-1 reveal-on-scroll">
            <img
              src={getAssetUrl('assets/images/sex-therapy-banana.jpg')}
              alt={isZh ? '手握香蕉静物' : 'Hand holding yellow banana'}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Text */}
          <div className="py-16 md:py-20 px-8 sm:px-12 lg:px-16 xl:px-24 flex flex-col space-y-6 order-1 lg:order-2 reveal-on-scroll">
            <p className="font-body-md text-sm sm:text-[15px] text-[#2f312e] leading-relaxed">
              {isZh
                ? '请知悉本咨询为严格的纯谈话治疗。咨询室内绝无任何身体接触、医学身体检查或脱衣裸露。在严谨的专业框架内，我们共同营造安全的场域，坦诚探讨身体感受、性幻想、表现焦虑或唤起困扰。我们将一同卸下文化强加的羞耻负累，重建与身体之间充满喜悦与健康的联结。'
                : 'Please note that this is strictly talk therapy. There is absolutely no physical contact, medical examination, or nudity involved in the therapy room. Within a professionally structured framework, we create a secure environment to safely discuss somatic experiences, sexual fantasies, performance anxiety, or arousal difficulties. Together, we will unlearn culturally imposed shame and rebuild a joyful, healthy relationship with your body.'}
            </p>

            <div className="space-y-4 pt-1">
              <h3 className="font-headline-md text-lg sm:text-xl text-[#1a1c19] font-normal">
                {isZh ? '潜在风险与挑战' : 'Potential Risks & Challenges'}
              </h3>

              <ul className="space-y-3 font-body-md text-sm sm:text-[15px] text-[#2f312e] leading-relaxed list-disc list-outside pl-5">
                <li>
                  <strong className="text-[#1a1c19] font-medium">
                    {isZh ? '脆弱感与羞耻：' : 'Vulnerability and Shame: '}
                  </strong>
                  {isZh
                    ? '探讨性议题常常触及根深蒂固的文化耻感或未竟的创伤记忆。这项工作需要巨大的勇气，在此过程中感受到高度脆弱是完全正常的。'
                    : 'Discussing sex often triggers deeply ingrained cultural shame or memories of past trauma. This work requires immense courage, and it is normal to feel highly vulnerable during the process.'}
                </li>

                <li>
                  <strong className="text-[#1a1c19] font-medium">
                    {isZh ? '生理医学因素重叠：' : 'Medical Overlaps: '}
                  </strong>
                  {isZh
                    ? '部分性功能障碍具有器质性（医学）根因。性治疗能有效解决心理与关系层面的核心障碍，但在必要时，我可能会建议您转介至专科医生处，以排查或配合治疗生理层面的病理因素。'
                    : 'Some sexual dysfunctions have organic (medical) causes. While sex therapy effectively addresses the psychological components, I may refer you to a medical physician to rule out or treat physical factors when necessary.'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. My Approach to Sex & Intimacy Therapy (Cool Muted Grayish-Slate Background, 2x2 Grid) */}
      <section className="w-full py-20 md:py-28 bg-[#ced7db]">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 reveal-on-scroll">
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c19] font-normal leading-tight">
              {isZh ? '我的性与亲密治疗临床取向' : 'My Approach to Sex & Intimacy Therapy'}
            </h2>
          </div>

          {/* 4 Pillars Grid (No Horizontal Scrolling) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {/* Card 1: Trauma-Informed Approach */}
            <div className="reveal-on-scroll space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-normal">
                {isZh ? '创伤知情取向' : 'Trauma-Informed Approach'}
              </h3>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '对于经历过性侵害、关系暴力或早期情感忽视的幸存者，身体亲密往往会触发隐秘的生理警报，将神经系统推入“战、逃或冻结”的防御状态。在我们的咨询工作中，“安全”永远是首要指导原则。依托支持性别暴力幸存者的大量一线临床经验，我深切理解创伤如何深刻改变心智与身体。'
                  : 'For survivors of sexual assault, relationship abuse, or early emotional neglect, physical intimacy can often trigger hidden alarms, sending the nervous system into a \'fight, flight, or freeze\' defense state. In our work, \'safety\' is always the guiding principle. Drawing from my extensive frontline clinical experience supporting survivors of gender-based violence, I deeply understand how trauma alters the mind and the body.'}
              </p>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '请知悉我们的咨询是严格的纯谈话治疗。我绝不会强迫你过早撕开旧伤口去仓促推进愈合过程。相反，在让你感到完全安全的节奏下，我们将温和探索过往经历如何影响你当下的欲望与亲密。我的首要目标是协助你循序渐进地夺回对自身身体界限的绝对自主权，免受二次创伤的风险。'
                  : 'Please note that our sessions are strictly talk therapy. I will never force you to prematurely rip open old wounds to rush the healing process. Instead, at a pace that feels entirely safe to you, we will gently explore how past experiences impact your current desires and intimacy. My primary goal is to help you incrementally reclaim absolute autonomy over your bodily boundaries without the risk of retraumatization.'}
              </p>
            </div>

            {/* Card 2: Integrating Spirituality & Faith Values */}
            <div className="reveal-on-scroll reveal-delay-100 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-normal">
                {isZh ? '整合灵性与信仰价值观' : 'Integrating Spirituality & Faith Values'}
              </h3>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '在许多传统宗教信仰与刻板文化语境中，性常常与深切的内疚与羞耻紧密纠缠。对于许多具有信仰背景的来访者而言，渴望释放天性的亲密渴望与恪守教导之间，往往存在着令人窒息的张力。'
                  : 'In many traditional religious faiths and rigid cultural contexts, sex is often heavily intertwined with profound guilt and shame. For many clients with a faith background, there is a suffocating tension between the desire for liberating intimacy and the adherence to religious teachings.'}
              </p>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '结合我在哲学与宗教学领域的学术背景，我提供一个完全去病理化、非评判的空间。在这里，你的信仰绝不会被轻率视作“保守障碍”，而是被全然视作你生命中强大的坚实基石。我们将共同拆解内化的“性羞耻感”，探索如何在深层尊重你核心价值观的框架下，培养健康、愉悦且毫无恐惧的亲密关系。'
                  : 'Integrating my academic background in philosophy and religious studies, I offer an absolutely non-pathologizing and non-judgmental space. Here, your faith will not be dismissed as a \'conservative obstacle,\' but rather embraced as a powerful cornerstone of your life. Together, we will dismantle internalized \'sexual shame\' and explore how to cultivate a healthy, pleasurable, and fear-free intimate relationship within a framework that deeply respects your core values.'}
              </p>
            </div>

            {/* Card 3: Somatic Experiencing (Body-Mind Connection) */}
            <div className="reveal-on-scroll space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-normal">
                {isZh ? '躯体体验（身心连接）' : 'Somatic Experiencing (Body-Mind Connection)'}
              </h3>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '性与身体层面的挣扎很少仅仅存在于逻辑分析的大脑中；它们深嵌在我们的神经系统与肌肉记忆深处。单靠传统的谈话治疗，有时可能会让你陷入过度思虑和表现焦虑的死循环。'
                  : 'Struggles with sex and the body rarely exist solely in the logical, analytical brain; they are deeply stored in our nervous system and muscle memory. Traditional talk therapy alone might leave you stuck in a loop of overthinking and performance anxiety.'}
              </p>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '结合躯体体验（Somatic Experiencing, SE）的高级临床训练，我将引导你从“焦虑飞速旋转的大脑”安全着陆回到“真实的身体”。我们将学习识别神经系统失调的信号，并通过温和的引导，释放滞留在身体里的紧绷、麻木与恐惧。一旦你学会调节自主神经系统、不再把身体当成提防戒备的敌人，你才能真正在亲密关系中体验到深度的松弛与本真愉悦。'
                  : 'Incorporating my advanced training in Somatic Experiencing (SE), I will guide you to safely land from an \'anxious, racing mind\' back into your \'authentic body.\' We will learn to recognize signs of nervous system dysregulation and, through gentle guidance, release the tension, numbness, and fear stuck in your body. Once you learn to regulate your nervous system and stop viewing your body as an enemy to guard against, you can truly experience profound relaxation and authentic pleasure in your intimate relationships.'}
              </p>
            </div>

            {/* Card 4: Sexuality Education */}
            <div className="reveal-on-scroll reveal-delay-100 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-normal">
                {isZh ? '全面性教育' : 'Sexuality Education'}
              </h3>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '对许多来访者而言，性功能障碍、低欲望或自我怀疑的根源，在于成长过程中全面性教育的严重缺失，或是大众媒体传播的有害迷思（例如对“完美身材”的执念，或将单一性表现模式奉为圭臬）。'
                  : 'For many clients, the root of sexual dysfunction, low desire, or self-doubt lies in a severe lack of comprehensive sex education during their upbringing, or in harmful myths propagated by mass media (e.g., the obsession with the \'perfect body\' or the glorification of a single model of sexual performance).'}
              </p>
              <p className="font-body-md text-sm sm:text-[15px] text-[#222521] leading-relaxed">
                {isZh
                  ? '作为性治疗师与性健康教育工作者，我将科学、严谨的性心理教育深度融入我们的咨询环节。我们将打破关于“正常性生活”的刻板观念，探讨真实的生理反应机制、欲望差异的多样性（如自发性欲望与响应性欲望的区别），以及客观的生理解剖事实。通过填补这些至关重要的认知缺失并教授切实的沟通技巧，我将用知识赋予你力量——彻底驱散源于未知的恐慌与羞耻。'
                  : 'As a sex therapist and sexuality educator, I deeply integrate scientific, rigorous psychosexual education into our sessions. We will shatter stereotypes of a \'normal sex life\' and discuss realistic physiological response mechanisms, the diversity of desire discrepancies (such as spontaneous vs. responsive desire), and objective anatomical facts. By filling in these crucial cognitive missing pieces and teaching concrete communication skills, I will empower you with knowledge—completely dispelling the panic and shame born of the unknown.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Poetic / Scripture Quote Banner (Song of Solomon 4:7) */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden bg-[#e8decb] flex items-center justify-center">
        {/* Warm Botanical Ranunculus / Poppy Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/sex-therapy-song-of-solomon-banner.jpg')}
            alt={isZh ? '雅歌花卉背景' : 'Song of Solomon Floral Background'}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          <blockquote className="font-headline-lg font-normal text-2xl sm:text-3xl md:text-4xl text-[#1c221a] tracking-tight leading-relaxed sm:leading-relaxed mb-4">
            {isZh
              ? '“我的佳偶，你全然美丽，毫无瑕疵。”'
              : '“You are altogether beautiful, my love; there is no flaw in you.”'}
          </blockquote>
          <cite className="font-body-md text-xs sm:text-sm tracking-wide text-[#2f312e] font-normal not-italic">
            {isZh ? '雅歌 4:7' : 'Song of Solomon 4:7'}
          </cite>
        </div>
      </section>

      {/* Bottom section about Jessica Cao credentials/contact info is intentionally omitted as instructed */}
    </article>
  );
};
