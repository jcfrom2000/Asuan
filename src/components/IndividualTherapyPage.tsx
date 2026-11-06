import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Clock, CreditCard, Compass } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface IndividualTherapyPageProps {
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const IndividualTherapyPage: React.FC<IndividualTherapyPageProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
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
            Individual Therapy
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-3xl leading-relaxed mb-8 drop-shadow-sm">
            A culturally responsive, trauma-informed space for anxiety, depression, trauma, relationship patterns, identity questions, and cross-cultural stress.
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking('Book Individual Therapy')}
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-[#fbf7f0] text-[#1e251d] hover:bg-white transition-all font-label-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
          >
            <span>Book A Session</span>
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
                    alt="Jessica Cao, Licensed Clinical Therapist"
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
                CLINICAL BACKGROUND & LIVED STORY
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                My Experience
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                My understanding of family dynamics and intimacy began long before I became a clinical therapist. Growing up in a transient migrant / immigrant environment and navigating a non-traditional family structure, I have experienced the ruptures and restructurings of attachment, and these complex family dynamics have gifted me with emotional intuition and insights into understanding complex human emotions.
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Through my clinical work at the University of Michigan CAPS and non-profit organizations, I have provided individual psychotherapy to college students, international students, young professionals, 1st-2nd generation immigrants, and extensively supported survivors of gender-based violence. As a former international student and immigrant myself, I intimately understand the identity fragmentation and survival anxiety you may face. You will never have to 'translate' your cultural background in our sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Typical Session */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center reveal-on-scroll">
          <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold mb-3">
            COLLABORATIVE & TRAUMA-INFORMED
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mb-8">
            What does a typical therapy session look like?
          </h2>
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#2e382b]/10 shadow-xs text-left">
            <p className="font-body-md text-base sm:text-lg text-[#2f312e] leading-relaxed">
              Many people think therapy is just lying on a couch venting, or waiting for a therapist to dispense 'life advice.' At OverStream Therapy, this is not the case. Our 55-minute sessions are collaborative, egalitarian conversations. Utilizing a trauma-informed framework, we start by listening to your current distress. I don't lecture you; instead, I will act as your ally, exploring together how your past experiences influence your current beliefs. We will identify emotional blind spots, practice setting boundaries, and equip you with practical emotional regulation tools to use in your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Affirmation Banner */}
      <div className="bg-[#e8decb] py-7 text-center text-[#2e382b] tracking-[0.2em] uppercase text-xs sm:text-sm font-medium">
        You Are Welcome Here • You Are Welcome Here • You Are Welcome Here
      </div>

      {/* 5. 15min Free Consultation */}
      <section className="w-full py-20 bg-[#fafaf4] border-b border-[#2e382b]/8">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 text-center reveal-on-scroll">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#efebe2] text-[#a35e3e] mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mb-4">
            15min free consultation
          </h2>
          <p className="font-body-md text-base sm:text-lg text-[#2f312e] font-normal leading-relaxed max-w-2xl mx-auto">
            We will use the brief consultation to get to know each other and see if we might be a good fit for each other.
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
                INTAKE & ONGOING CARE
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                How therapy works
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Upon booking, we will begin with a 55-minute comprehensive intake session to safely unpack your lived experiences and outline your goals. We will then meet for 55-minute sessions on a weekly basis or based on your preference. Utilizing trauma-informed and person-centered approaches, I integrate evidence-based modalities to process your pain without retraumatization.
              </p>

              <div className="p-6 rounded-2xl bg-white/80 border border-[#2e382b]/10 shadow-2xs">
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Potential Risks of Therapy: Healing is rarely a linear or entirely comfortable process. As we explore your inner landscape, you may experience uncomfortable emotions such as sadness, guilt, anxiety, or anger, and recall unpleasant memories. Additionally, making changes in your behaviors or setting new, healthy boundaries may lead to temporary disruptions or friction in your current relationships. These are natural, expected parts of the therapeutic journey, and we will navigate them together in a secure environment.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenContact()}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1e251d] text-[#fafaf4] hover:bg-[#2d302c] transition-all font-label-md text-sm font-medium shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg')}
                  alt="Therapy process botanical still life"
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
              COVERAGE & CPT CODES
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mt-2">
              Insurance & Payment
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f3ec] border border-[#2e382b]/10 space-y-6 text-[#2f312e] text-base leading-relaxed reveal-on-scroll">
            <p>I am an in-network provider for BCBS PPO and USHIP. Your exact out-of-pocket costs (such as deductibles, copays, or coinsurance) will depend on your specific insurance policy.</p>
            <p>If you are using insurance, please do not schedule multiple therapy sessions on the same day (e.g., attending both an individual session and a couples/family/group session on the same date), as insurance companies will likely deny the claims.</p>
            <p>For clients with all other insurance plans, I am considered an Out-of-Network (OON) provider. This means you are responsible for paying the full session fee at the time of service. I will then provide you with a Superbill (an itemized medical receipt). You can submit this Superbill to your insurance company. If your plan includes out-of-network benefits, your insurance company will reimburse you directly for a portion of the cost based on your policy.</p>
            
            <div className="pt-4 border-t border-[#2e382b]/10">
              <p className="font-semibold text-[#2e382b] mb-3">I strongly recommend contacting your insurance provider prior to our first session to verify your out-of-network mental health benefits. You can ask them about your coverage and reimbursement rates for the following specific service codes (CPT Codes):</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <li className="p-4 rounded-xl bg-white/90 border border-[#2e382b]/10 font-medium text-sm flex items-center justify-between">
                  <span>90791: Psychiatric Diagnostic Evaluation</span>
                  <span className="text-[#a35e3e] font-semibold">$225</span>
                </li>
                <li className="p-4 rounded-xl bg-white/90 border border-[#2e382b]/10 font-medium text-sm flex items-center justify-between">
                  <span>90837: Individual Psychotherapy</span>
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
              AREAS OF CLINICAL FOCUS
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal">
              Here's what I can help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                  'Academic, Career & Personal Growth',
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
            ].map((section, idx) => (
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
            "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love."
          </blockquote>
          <cite className="font-label-md text-xs sm:text-sm uppercase tracking-[0.2em] font-medium not-italic" style={{ color: 'rgb(214, 163, 139)' }}>
            — Rainer Maria Rilke, Letters to a Young Poet
          </cite>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="w-full py-20 md:py-28 bg-[#fafaf4] text-center">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 flex flex-col items-center reveal-on-scroll">
          <p className="font-quote-lead text-xl sm:text-2xl text-[#1e251d] font-normal italic leading-relaxed max-w-2xl mb-8">
            "You are like a beanbag filled with water—soft, comfortable, safe, and adapts to my shape."
          </p>
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1e251d] text-[#fafaf4] hover:bg-[#2d302c] transition-all font-label-md text-sm font-medium shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
          </button>
        </div>
      </section>
    </article>
  );
};
