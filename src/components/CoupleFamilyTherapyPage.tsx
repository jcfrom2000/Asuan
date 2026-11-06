import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Clock, Compass, Users } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface CoupleFamilyTherapyPageProps {
  onOpenBooking: (prefillNote?: string) => void;
  onOpenContact: () => void;
  onNavigateHome: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const CoupleFamilyTherapyPage: React.FC<CoupleFamilyTherapyPageProps> = ({
  onOpenBooking,
}) => {
  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1e251d]">
      {/* 1. Hero Section */}
      <header className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#1c241b]">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('assets/aistudio/imgi_14_natalia-blauth-Efn70fHvQpM-unsplash_309b2353.jpg')}
            alt="Couple in intimate embrace"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#182017]/75 via-[#182017]/55 to-[#182017]/85" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#182017]/30 to-[#182017]/80" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
          <h1 className="font-headline-lg font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf4] tracking-tight leading-[1.15] mb-5 max-w-3xl drop-shadow-sm">
            Couple & Family Therapy
          </h1>

          <p className="font-body-md text-base sm:text-lg md:text-xl text-[#e8eae4] font-normal max-w-3xl leading-relaxed mb-8 drop-shadow-sm">
            For couples and families who want to understand recurring interaction patterns, reduce blame, and build more workable ways of relating across culture, generations, trust, and intimacy.
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking('Book Couple & Family Therapy')}
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
            {/* Left Circular Photo of Jessica */}
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
                CLINICAL BACKGROUND & ATTACHMENT INSIGHTS
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                My Experience
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                My understanding of family dynamics and intimacy began long before I became a clinical therapist. Growing up in a transient migrant / immigrant environment and navigating a non-traditional family structure, I have experienced the ruptures and restructurings of attachment, and these complex family dynamics have gifted me with emotional intuition and insights into understanding complex human emotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Affirmation Ribbon */}
      <div className="bg-[#e8decb] py-7 text-center text-[#2e382b] tracking-[0.2em] uppercase text-xs sm:text-sm font-medium">
        You Are Welcome Here • You Are Welcome Here • You Are Welcome Here • You Are Welcome Here • You Are Welcome Here
      </div>

      {/* 4. 15min Free Consultation */}
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

      {/* 5. Song of Solomon Banner */}
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

      {/* 6. Couple & Family Therapy Details */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 reveal-on-scroll">
              <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
                RELATIONAL & GENERATIONAL FRAMEWORKS
              </span>

              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal leading-snug">
                Couple & Family Therapy
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Couples therapy focuses on the interactional pattern between partners rather than assigning one person the role of 'the problem.' We may work with communication breakdowns, pursue-withdraw cycles, cultural or family-of-origin differences, sexual dissatisfaction, boundary conflicts, and recovery after breaches of trust such as infidelity.
              </p>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Family therapy can be useful when distress is organized around generational conflict, parent-child communication, migration and acculturation, caregiving roles, blended or non-traditional family structures, or major transitions. I pay particular attention to hierarchy, boundaries, role expectations, and the cultural meanings attached to family responsibility.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Book Couple & Family Therapy')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1e251d] text-[#fafaf4] hover:bg-[#2d302c] transition-all font-label-md text-sm font-medium shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
                >
                  <span>Work with Me</span>
                  <ArrowRight className="w-4 h-4 text-[#a35e3e]" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-delay-100">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-900 group">
                <img
                  src={getAssetUrl('assets/aistudio/imgi_27_unsplash-image-2PODhmrvLik_33bbde7a.jpg')}
                  alt="Heart shape hands"
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
              CLINICAL STRUCTURE & FEES
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal mt-2">
              Process & Boundaries
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f3ec] border border-[#2e382b]/10 space-y-6 text-[#2f312e] text-base leading-relaxed reveal-on-scroll">
            <p>I draw from systemic and relational approaches, Gottman-informed interventions, trauma-informed care, and my training as an AASECT Certified Sex Therapist. The goal is not to decide who is right, but to understand what keeps the conflict going and to create new ways of responding.</p>
            <p>Treatment commonly begins with a joint 55-minute intake. Individual assessment meetings may be recommended when clinically useful, with clear expectations about confidentiality and information-sharing established in advance. Ongoing sessions are typically 55 minutes.</p>
            <p>Couples and family therapy can temporarily intensify emotion as previously avoided concerns are discussed. It may strengthen a relationship, clarify needed changes, or sometimes help people make difficult decisions about the future of the relationship. No specific outcome can be guaranteed.</p>
            
            <div className="pt-4 border-t border-[#2e382b]/10 p-5 rounded-2xl bg-white/90 border border-[#2e382b]/10 font-semibold text-[#2e382b] text-sm sm:text-base">
              Fee: $220 per 55-minute joint session. Insurance coverage for couples/family therapy depends on medical necessity and the specific plan; benefits should be verified before treatment.
            </div>
          </div>
        </div>
      </section>

      {/* 8. My Theoretic Approach */}
      <section className="w-full py-20 md:py-28 bg-[#f5f3ec] border-b border-[#2e382b]/8">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 md:mb-18 reveal-on-scroll">
            <span className="font-label-md text-xs uppercase tracking-widest text-[#a35e3e] font-semibold">
              EVIDENCE-BASED RELATIONAL MODALITIES
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#2e382b] font-normal">
              My Theoretic Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Approach 1 */}
            <div className="reveal-on-scroll p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4">
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                Integrative Systemic Family Therapy
              </h3>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                In couples and family therapy, I draw upon my rigorous clinical training under Dr. Afaf and Dr. Badwan from the Department of Psychiatry at the University of Chicago. I firmly believe that in any relationship, there is no single 'problem maker' or 'scapegoat.' Taking an integrative approach that weaves together Systemic, Structural, and Strategic modalities, I treat the 'relationship itself' as my primary client.
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Through a Systemic lens, we view the family or couple as an intricately interconnected emotional unit. One person's anxiety, anger, or withdrawal is rarely an individual failure; it is often a symptom of a dysregulated relational system. In our sessions, I will help you shift the focus from assigning blame ('who is right and who is wrong') to understanding how your interactional patterns co-create the current distress.
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Integrating a Structural perspective, I will help you observe the hierarchies, roles, and invisible boundaries within your family system. For many families influenced by East Asian authoritarian cultures or those navigating the survival modes of immigration, generational boundaries can easily blur—such as children carrying the emotional weight of their parents (parentification) or partners losing their individuality through enmeshment. I do not pathologize these structures using rigid Western individualistic standards; instead, we acknowledge how these patterns historically protected the family's survival. Building on this empathy, we gently restructure healthier boundaries so that love no longer feels like a suffocating weight.
              </p>
              <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                Concurrently, I incorporate action-oriented interventions from Strategic family therapy. When couples or families are trapped in exhausting cycles of defensiveness (such as the classic pursue-withdraw dynamic), simply excavating past trauma is not enough. Serving as a 'choreographer' of your relationship, I use direct interventions and reframing to interrupt these destructive communication loops. Together, we will identify practical, highly effective strategies to break the relational gridlock, helping you rebuild secure and profound emotional connections in the here and now.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="reveal-on-scroll reveal-delay-100 p-8 sm:p-9 rounded-3xl bg-white/95 border border-[#2e382b]/10 shadow-xs hover:shadow-md hover:border-[#a35e3e]/30 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                  The Gottman Method
                </h3>
                <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                  In addressing couples' conflicts, I am actively integrating the Gottman Method, a highly effective, evidence-based approach backed by over four decades of relationship research. I don't just teach you 'how to stop fighting'. Instead, through structured assessments, we work to build your 'Sound Relationship House.' In our sessions, we will accurately identify and dismantle the 'Four Horsemen' (Criticism, Contempt, Defensiveness, and Stonewalling) that predict relationship deterioration. Through practical, actionable communication exercises, I will assist you in rebuilding a profound friendship system amidst daily routines, learning to express needs gently, and executing effective repairs after conflicts. This ensures you not only resolve the immediate crisis but also cultivate long-lasting relationship resilience.
                </p>
              </div>

              {/* Approach 3 */}
              <div className="pt-6 border-t border-[#2e382b]/10 space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                  Micro-Communication & Narrative Mediation
                </h3>
                <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                  Tragedies within couples and families often stem from the reality that 'we speak the same language, yet we completely fail to understand each other.' Grounded in my Master's background in Health Communication from Indiana University and my experience as a Certified Healthcare Interpreter (CoreCHI) facilitating communication in highly vulnerable medical settings, I am acutely sensitive to the micro-dynamics of language and narratives. In the therapy room, I often serve as an 'emotional translator.' I am trained to catch the hidden irrational beliefs, distorted messages, and unspoken fears beneath your arguments. I will slow down the pace of your communication, interrupt destructive knee-jerk reactions, and help you 'translate' aggressive accusations into their true underlying form: a desperate plea for love and connection.
                </p>
              </div>

              {/* Approach 4 */}
              <div className="pt-6 border-t border-[#2e382b]/10 space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl text-[#2e382b] font-medium border-b border-[#2e382b]/10 pb-3">
                  Somatic Trauma & Attachment Lens
                </h3>
                <p className="text-sm sm:text-base text-[#2f312e] leading-relaxed">
                  In our most intimate relationships, we often manifest our deepest trauma responses. Sometimes, a partner's explosive anger or emotional withdrawal is not a sign of lacking love, but rather an indication that early attachment wounds have been triggered, sending the nervous system into a 'fight or flight' survival mode. Integrating my profound background in trauma-informed care, I will never pathologize your dysregulation. Instead, I will help you map out each other's trauma triggers, shifting your perspective so you no longer view your partner as a 'dangerous enemy,' but rather as a 'wounded companion in need of soothing,' thereby rebuilding relational safety at a physiological level.
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
            "You are like a beanbag filled with water—soft, comfortable, safe, and adapts to my shape."
          </p>
          <button
            type="button"
            onClick={() => onOpenBooking('Get In Touch')}
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
