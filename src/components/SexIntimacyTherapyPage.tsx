import React from 'react';
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface SexIntimacyTherapyPageProps {
  onOpenBooking: (prefillNote?: string) => void;
}

export const SexIntimacyTherapyPage: React.FC<SexIntimacyTherapyPageProps> = ({
  onOpenBooking,
}) => {
  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1e251d]">
      {/* 1. Hero Section */}
      <header className="relative w-full min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#1c241b]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/images/sex-therapy-hero-hearts.jpg')}
            alt="Sex & Intimacy Therapy - Hearts"
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
            Sex & Intimacy Therapy
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-3xl leading-relaxed mb-8 drop-shadow-sm">
            Sex-positive, culturally responsive therapy for sexual concerns, intimacy barriers, sexual trauma, religious sexual shame, and LGBTQ+ identity —provided by an AASECT Certified Sex Therapist (CST).
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking('Book Sex & Intimacy Therapy')}
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-[#fbf7f0] text-[#1e251d] hover:bg-white transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
          >
            <span>Book A Session</span>
            <ArrowRight className="w-4 h-4 text-[#a35e3e] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* 2. Intro Statement */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10 text-center reveal-on-scroll">
          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#2f312e] font-normal leading-relaxed md:leading-[1.85]">
            Sexuality and the body are important parts of human life, yet they are often surrounded by shame, silence, cultural taboos, medical concerns, trauma, or conflicting values. I am an AASECT Certified Sex Therapist (CST) and have completed specialized training in Sex Therapy & Sexuality Education at the University of Michigan. My role is not to tell you what your sexuality should look like. We work toward greater understanding, consent, choice, pleasure, communication, and alignment with your own values.
          </p>
        </div>
      </section>

      {/* 3. My Background */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2.5 bg-gradient-to-br from-[#e8d5c4] via-[#fafaf4] to-[#c7d3c0] shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                  <img
                    src={getAssetUrl('assets/images/overstream-therapy-michigan-ann-arbor-sexual-health-training-program.jpg')}
                    alt="Jessica Cao at University of Michigan Sexual Health Certificate Program"
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
                SPECIALIZED CERTIFICATION & CALLING
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                My Background
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                My commitment to trauma-informed and psychosexual care extends far beyond clinical theory. Long before my formal clinical training, I co-founded a non-profit team focused on child sexual abuse prevention in 2017. From providing prevention education to currently holding space for survivors of gender-based violence, this is my lifelong calling. As a Chinese-speaking AASECT Certified Sex Therapist, I appear to be the only currently listed CST offering Mandarin and Cantonese sex therapy across my licensed states of Illinois, Indiana, Wisconsin, and Michigan, based on the current AASECT Referral Directory (2026).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Focus Areas & Image Highlights */}
      <section className="w-full bg-[#fafaf4] border-b border-[#2e382b]/8">
        {/* Row 1: Focus List + Grapefruit Photo */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center border-b border-[#2e382b]/8">
          <div className="py-16 md:py-24 px-8 sm:px-12 lg:px-16 xl:px-20 flex flex-col space-y-6 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              AREAS OF CLINICAL EXPERTISE
            </span>

            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#2e382b] font-normal leading-snug">
              I am particularly passionate about and focused on the following areas:
            </h2>

            <ul className="space-y-3.5 font-body-md text-base text-[#2f312e] leading-relaxed">
              {[
                'Desire discrepancies and low or changing desire',
                'Arousal, orgasm, sexual pain, performance anxiety, and other sexual functioning concerns',
                'Sexual trauma and reclaiming bodily autonomy',
                'Infidelity, trust, and rebuilding erotic connection',
                'Religious sexual shame and integrating sexuality with faith or personal values',
                'LGBTQ+ identity, coming out, relationships, and minority stress',
                'Body image, sexual self-concept, and communication about sex',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a35e3e] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[400px] sm:h-[500px] lg:h-full min-h-[460px] overflow-hidden reveal-on-scroll relative group">
            <img
              src={getAssetUrl('assets/images/sex-therapy-grapefruit.jpg')}
              alt="Hands holding fresh red grapefruit"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Row 2: Banana Photo + What Sex Therapy Is and Is Not */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="w-full h-[400px] sm:h-[500px] lg:h-full min-h-[460px] overflow-hidden order-2 lg:order-1 reveal-on-scroll relative group">
            <img
              src={getAssetUrl('assets/images/sex-therapy-banana.jpg')}
              alt="Hand holding yellow banana"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="py-16 md:py-24 px-8 sm:px-12 lg:px-16 xl:px-20 flex flex-col space-y-6 order-1 lg:order-2 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              PRACTICE SCOPE & CLARITY
            </span>

            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#2e382b] font-normal leading-snug">
              What Sex Therapy Is - and Is Not
            </h2>

            <p className="font-body-md text-base text-[#2f312e] leading-relaxed">
              Sex therapy is psychotherapy. Sessions involve conversation, assessment, psychoeducation, and therapeutic exercises or homework when appropriate. There is no nudity, sexual contact, physical examination, or sexual touching between therapist and client. When symptoms may have a medical component, I may recommend evaluation by an appropriate medical professional and coordinate care with your permission.
            </p>

            <p className="font-body-md text-base text-[#2f312e] leading-relaxed">
              For clients from religious or conservative cultural backgrounds, therapy does not require abandoning your faith or values. We can examine where your values genuinely belong to you, where shame or fear may have been imposed, and how to build a sexual life that is consensual, healthy, and congruent with what matters to you.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Approach Section */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-18 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              CLINICAL PILLARS
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal">
              My Approach to Sex & Intimacy Therapy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Approach 1 */}
            <div className="reveal-on-scroll p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                Trauma-Informed Approach
              </h3>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                For survivors of sexual assault, relationship abuse, or early emotional neglect, physical intimacy can often trigger hidden alarms, sending the nervous system into a 'fight, flight, or freeze' defense state. In our work, 'safety' is always the guiding principle. Drawing from my extensive frontline clinical experience supporting survivors of gender-based violence, I deeply understand how trauma alters the mind and the body.
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Please note that our sessions are strictly talk therapy. I will never force you to prematurely rip open old wounds to rush the healing process. Instead, at a pace that feels entirely safe to you, we will gently explore how past experiences impact your current desires and intimacy. My primary goal is to help you incrementally reclaim absolute autonomy over your bodily boundaries without the risk of retraumatization.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="reveal-on-scroll reveal-delay-100 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                Integrating Spirituality & Faith Values
              </h3>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                In many traditional religious faiths and rigid cultural contexts, sex is often heavily intertwined with profound guilt and shame. For many clients with a faith background, there is a suffocating tension between the desire for liberating intimacy and the adherence to religious teachings.
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Integrating my academic background in philosophy and religious studies, I offer an absolutely non-pathologizing and non-judgmental space. Here, your faith will not be dismissed as a 'conservative obstacle,' but rather embraced as a powerful cornerstone of your life. Together, we will dismantle internalized 'sexual shame' and explore how to cultivate a healthy, pleasurable, and fear-free intimate relationship within a framework that deeply respects your core values.
              </p>
            </div>

            {/* Approach 3 */}
            <div className="reveal-on-scroll p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                Somatic Experiencing (Body-Mind Connection)
              </h3>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Struggles with sex and the body rarely exist solely in the logical, analytical brain; they are deeply stored in our nervous system and muscle memory. Traditional talk therapy alone might leave you stuck in a loop of overthinking and performance anxiety.
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Incorporating my advanced training in Somatic Experiencing (SE), I will guide you to safely land from an 'anxious, racing mind' back into your 'authentic body.' We will learn to recognize signs of nervous system dysregulation and, through gentle guidance, release the tension, numbness, and fear stuck in your body. Once you learn to regulate your nervous system and stop viewing your body as an enemy to guard against, you can truly experience profound relaxation and authentic pleasure in your intimate relationships.
              </p>
            </div>

            {/* Approach 4 */}
            <div className="reveal-on-scroll reveal-delay-100 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                Sexuality Education
              </h3>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                For many clients, the root of sexual dysfunction, low desire, or self-doubt lies in a severe lack of comprehensive sex education during their upbringing, or in harmful myths propagated by mass media (e.g., the obsession with the 'perfect body' or the glorification of a single model of sexual performance).
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                As a sex therapist and sexuality educator, I deeply integrate scientific, rigorous psychosexual education into our sessions. We will shatter stereotypes of a 'normal sex life' and discuss realistic physiological response mechanisms, the diversity of desire discrepancies (such as spontaneous vs. responsive desire), and objective anatomical facts. By filling in these crucial cognitive missing pieces and teaching concrete communication skills, I will empower you with knowledge—completely dispelling the panic and shame born of the unknown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Song of Solomon Banner */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#2e382b] text-[#fbf7f0] flex items-center justify-center">
        <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          <blockquote className="font-quote-lead text-2xl sm:text-3xl md:text-4xl font-normal text-white/95 tracking-tight leading-relaxed mb-4">
            "You are altogether beautiful, my love; there is no flaw in you."
          </blockquote>
          <cite className="font-label-md text-xs sm:text-sm uppercase tracking-widest font-medium not-italic" style={{ color: 'rgb(214, 163, 139)' }}>
            Song of Solomon 4:7
          </cite>
        </div>
      </section>
    </article>
  );
};
