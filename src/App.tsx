import React, { useState, useEffect, useCallback } from 'react';
import { Language, ServiceItem, ConsultationItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuoteBanner } from './components/QuoteBanner';
import { AffirmationRibbon } from './components/AffirmationRibbon';
import { CollaborativeStance } from './components/CollaborativeStance';
import { TherapistSpotlight } from './components/TherapistSpotlight';
import { CoreOfferings } from './components/CoreOfferings';
import { TestimonialQuote } from './components/TestimonialQuote';
import { ConsultationServices } from './components/ConsultationServices';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { InfoModal, InfoModalContent } from './components/InfoModal';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { FaqPage } from './components/FaqPage';
import { SolutionFocusedCoachingPage } from './components/SolutionFocusedCoachingPage';
import { ImmigrationEvaluationPage } from './components/ImmigrationEvaluationPage';
import { updatePageSeo, PageRoute } from './utils/seo';
import { useScrollReveal } from './utils/useScrollReveal';

// Helper to parse clean URL path without hashes (Zero-Hash SEO compliance)
function parseRouteFromLocation(pathname: string): {
  page: PageRoute;
  language: Language;
} {
  const cleanPath = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  let language: Language = 'en';
  let page: PageRoute = 'home';

  let pathWithoutLang = cleanPath;
  if (cleanPath.startsWith('/zh')) {
    language = 'zh';
    pathWithoutLang = cleanPath.replace(/^\/zh/, '') || '/';
  }

  if (pathWithoutLang === '/contact') {
    page = 'contact';
  } else if (pathWithoutLang === '/about' || pathWithoutLang === '/about-jessica') {
    page = 'about';
  } else if (pathWithoutLang === '/faq' || pathWithoutLang === '/faqs') {
    page = 'faq';
  } else if (pathWithoutLang === '/services' || pathWithoutLang === '/therapy-services') {
    page = 'services';
  } else if (pathWithoutLang === '/community' || pathWithoutLang === '/community-services') {
    page = 'community';
  } else if (
    pathWithoutLang === '/solution-focused-coaching' ||
    pathWithoutLang === '/coaching' ||
    pathWithoutLang === '/work-with-me/coaching' ||
    pathWithoutLang === '/work-with-me/solution-focused-coaching'
  ) {
    page = 'solution-focused-coaching';
  } else if (
    pathWithoutLang === '/immigration-evaluation' ||
    pathWithoutLang === '/immigration-psychological-evaluation' ||
    pathWithoutLang === '/work-with-me/immigration-evaluation'
  ) {
    page = 'immigration-evaluation';
  } else if (pathWithoutLang === '/home') {
    page = 'home';
  } else {
    const saved = typeof window !== 'undefined' ? (sessionStorage.getItem('active_tab') as PageRoute) : null;
    page = saved || 'about';
  }

  return { page, language };
}

export default function App() {
  // Initialize route from window.location
  const initialRoute = parseRouteFromLocation(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  // 1. Language State Management (EN / 中文)
  const [language, setLanguage] = useState<Language>(initialRoute.language);

  // 2. Page & Navigation Active Tab State Management
  const [currentPage, setCurrentPage] = useState<PageRoute>(initialRoute.page);
  const [activeTab, setActiveTab] = useState<string>(initialRoute.page);

  // 3. Modals & Dialog State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Individual Therapy');
  const [selectedBookingNote, setSelectedBookingNote] = useState<string>('');
  const [infoModalContent, setInfoModalContent] = useState<InfoModalContent | null>(null);

  // Dynamic SEO Engine (Title, Description, Canonical, Hreflang & Schema.org)
  useEffect(() => {
    updatePageSeo({ page: currentPage, language });
  }, [currentPage, language]);

  // Activate serene scroll reveal effect across text & sections
  useScrollReveal([currentPage, language]);

  // Clean Path Navigation: Push history state without any #
  const navigateTo = useCallback((newPage: PageRoute, newLang: Language) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('active_tab', newPage);
    }
    const langPrefix = newLang === 'zh' ? '/zh' : '';
    let cleanUrl = '/';
    if (newPage === 'home') {
      cleanUrl = langPrefix || '/';
    } else {
      cleanUrl = `${langPrefix}/${newPage}`;
    }

    if (window.location.pathname !== cleanUrl || window.location.hash) {
      window.history.pushState(null, '', cleanUrl);
    }
    setCurrentPage(newPage);
    setLanguage(newLang);
    setActiveTab(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Toggle Language Handler with clean SEO URL transition
  const toggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'zh' : 'en';
    navigateTo(currentPage, nextLang);
  };

  // Browser Navigation (Back / Forward buttons) listener via popstate
  useEffect(() => {
    // If incoming with a legacy hash, strip it and replace with clean path
    if (window.location.hash) {
      const cleanPath = window.location.pathname;
      window.history.replaceState(null, '', cleanPath);
    }

    const handlePopState = () => {
      const route = parseRouteFromLocation(window.location.pathname);
      setCurrentPage(route.page);
      setLanguage(route.language);
      setActiveTab(route.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Tab & Page Navigation Handler (No hashes in URL)
  const handleSelectTab = (tabId: string = 'home') => {
    let targetPage: PageRoute = 'home';
    if (tabId === 'contact' || tabId === 'contact-and-location') targetPage = 'contact';
    else if (tabId === 'about' || tabId === 'about-jessica') targetPage = 'about';
    else if (tabId === 'faq' || tabId === 'faqs') targetPage = 'faq';
    else if (tabId === 'services' || tabId === 'therapy-services') targetPage = 'services';
    else if (tabId === 'community' || tabId === 'community-services') targetPage = 'community';
    else if (
      tabId === 'solution-focused-coaching' ||
      tabId === 'coaching' ||
      tabId === 'work-with-me/coaching'
    )
      targetPage = 'solution-focused-coaching';
    else if (
      tabId === 'immigration-evaluation' ||
      tabId === 'immigration-psychological-evaluation' ||
      tabId === 'work-with-me/immigration-evaluation'
    )
      targetPage = 'immigration-evaluation';
    else targetPage = 'home';

    navigateTo(targetPage, language);
  };

  // Handlers for booking triggers
  const handleOpenBooking = (serviceTitle?: string, prefillNote?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    setSelectedBookingNote(prefillNote || '');
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithSlot = (slotDetails?: string) => {
    setSelectedServiceForBooking('Individual Therapy');
    setSelectedBookingNote(
      slotDetails
        ? language === 'zh'
          ? `预约初访时间窗口：${slotDetails}`
          : `Requested Consultation Slot: ${slotDetails}`
        : ''
    );
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenBooking(service.titleEn);
  };

  const handleSelectConsultation = (item: ConsultationItem) => {
    if (item.id === 'solution-focused-coaching') {
      handleSelectTab('solution-focused-coaching');
    } else if (item.id === 'immigration-evaluation') {
      handleSelectTab('immigration-evaluation');
    } else {
      handleOpenBooking(item.titleEn);
    }
  };

  // Privacy Policy Info Modal Content
  const handleOpenPrivacy = () => {
    setInfoModalContent({
      titleEn: 'Notice of Privacy Practices (HIPAA)',
      titleZh: '医疗隐私权与保密实践须知 (HIPAA)',
      bodyEn: (
        <div className="space-y-3">
          <p>
            This notice describes how medical and mental health information about you may be used and disclosed and how you can get access to this information.
          </p>
          <p className="font-semibold text-primary">Confidentiality & Electronic Records:</p>
          <p>
            All clinical communications, intake records, session notes, and diagnostic materials are encrypted and maintained in compliance with the Health Insurance Portability and Accountability Act (HIPAA). Telehealth sessions occur through secure, encrypted peer-to-peer portals.
          </p>
          <p>
            Information will only be released with your explicit written authorization, except in circumstances mandated by state law (such as imminent risk of serious physical harm to self or others, or suspected child or elder abuse).
          </p>
        </div>
      ),
      bodyZh: (
        <div className="space-y-3">
          <p>
            本通知阐明了您的心理健康与临床记录将如何受到保护、规范使用以及您查阅此类信息的法定权利。
          </p>
          <p className="font-semibold text-primary">严格保密与电子健康档案：</p>
          <p>
            所有临床沟通、初访评估档案、个案记录均严格遵守美国《健康保险携带与责任法案》(HIPAA) 标准进行端到端加密存储。远程视频咨询均在受保护的合规医疗平台上进行。
          </p>
          <p>
            除非获得您的明确书面授权，任何信息绝不对外披露（法律明确规定的法定免除保密义务情形除外，例如对自身或他人存在迫在眉睫的生命安全风险、或涉及虐待儿童/长者之通报义务）。
          </p>
        </div>
      ),
    });
  };

  // No Surprise Act Info Modal Content
  const handleOpenNoSurprise = () => {
    setInfoModalContent({
      titleEn: 'Good Faith Estimate Notice (No Surprises Act)',
      titleZh: '诚实医疗费用估算告知书 (No Surprises Act)',
      bodyEn: (
        <div className="space-y-3">
          <p>
            Under Section 2799B-6 of the Public Health Service Act, healthcare providers are required to inform individuals who are not enrolled in an insurance plan or who are not using insurance a “Good Faith Estimate” of expected charges.
          </p>
          <p className="font-semibold text-primary">Your Rights:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency healthcare services.</li>
            <li>You can request a Good Faith Estimate in writing before your scheduled appointment.</li>
            <li>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
          </ul>
        </div>
      ),
      bodyZh: (
        <div className="space-y-3">
          <p>
            根据美国《公共卫生服务法》第2799B-6条及诚实医疗费用透明法案（No Surprises Act），对于自费或未通过保险报销的来访者，执业机构须提前提供明确透明的“诚信费用估算”（Good Faith Estimate）。
          </p>
          <p className="font-semibold text-primary">您的合法权益：</p>
          <ul className="list-disc list-inside space-y-1">
            <li>您有权在正式预约前，获悉非急诊心理咨询服务的完整预期费用估算。</li>
            <li>所有咨询收费、评估费率均公开透明，绝无任何隐性附加费用。</li>
            <li>若实际账单金额超出估算金额达 $400 以上，您享有联邦法定的争议申诉权利。</li>
          </ul>
        </div>
      ),
    });
  };

  // Render view depending on clean path
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'contact':
        return (
          <ContactPage
            language={language}
            onOpenBooking={handleOpenBookingWithSlot}
            onNavigateHome={() => handleSelectTab('home')}
          />
        );
      case 'about':
        return (
          <AboutPage
            language={language}
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={() => handleSelectTab('home')}
          />
        );
      case 'faq':
        return (
          <FaqPage
            language={language}
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={() => handleSelectTab('home')}
          />
        );
      case 'services':
        return (
          <div className="flex flex-col w-full">
            <CoreOfferings
              language={language}
              onSelectService={handleSelectService}
            />
            <ClosingCta
              language={language}
              onOpenBooking={() => handleOpenBooking()}
              onOpenContact={() => handleSelectTab('contact')}
            />
          </div>
        );
      case 'community':
        return (
          <div className="flex flex-col w-full">
            <ConsultationServices
              language={language}
              onSelectConsultation={handleSelectConsultation}
            />
            <ClosingCta
              language={language}
              onOpenBooking={() => handleOpenBooking()}
              onOpenContact={() => handleSelectTab('contact')}
            />
          </div>
        );
      case 'solution-focused-coaching':
        return (
          <SolutionFocusedCoachingPage
            language={language}
            onOpenBooking={(note) => handleOpenBooking('Solution-Focused Coaching', note)}
            onOpenContact={() => handleSelectTab('contact')}
            onNavigateHome={() => handleSelectTab('home')}
            onNavigateToTab={(tabId) => handleSelectTab(tabId)}
          />
        );
      case 'immigration-evaluation':
        return (
          <ImmigrationEvaluationPage
            language={language}
            onOpenBooking={(note) => handleOpenBooking('Immigration Evaluation', note)}
            onOpenContact={() => handleSelectTab('contact')}
            onNavigateHome={() => handleSelectTab('home')}
            onNavigateToTab={(tabId) => handleSelectTab(tabId)}
          />
        );
      case 'home':
      default:
        return (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section (Headline: 每早晨都是新的) */}
            <Hero
              language={language}
              onOpenBooking={() => handleOpenBooking()}
              onExploreCarePaths={() => handleSelectTab('services')}
            />

            {/* 2. Scripture Banner (Psalm 1:3) */}
            <QuoteBanner language={language} />

            {/* 3. Warm Affirmation Ribbon */}
            <AffirmationRibbon language={language} />

            {/* 4. Collaborative Stance */}
            <CollaborativeStance language={language} />

            {/* 5. Therapist Spotlight (Jessica Cao - Button links to About Page) */}
            <TherapistSpotlight
              language={language}
              onOpenBooking={() => handleOpenBooking()}
              onNavigateToAbout={() => handleSelectTab('about')}
            />

            {/* 6. Core Therapeutic Offerings */}
            <CoreOfferings
              language={language}
              onSelectService={handleSelectService}
            />

            {/* 7. Client Testimonial Quote */}
            <TestimonialQuote language={language} />

            {/* 8. Community & Consultation Services */}
            <ConsultationServices
              language={language}
              onSelectConsultation={handleSelectConsultation}
            />

            {/* 9. FAQs Section (Pre-viewing core questions with link to dedicated FAQ page) */}
            <FaqSection
              language={language}
              onNavigateToFaq={() => handleSelectTab('faq')}
            />

            {/* 10. Closing CTA with Rilke Quote */}
            <ClosingCta
              language={language}
              onOpenBooking={() => handleOpenBooking()}
              onOpenContact={() => handleSelectTab('contact')}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-fixed">
      {/* 1. Header with Active Tab Highlighting & Zero-Hash Clean Navigation */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        activeTab={currentPage}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="w-full pt-20 bg-surface">
        {renderCurrentView()}
      </main>

      {/* 2. Footer */}
      <Footer
        language={language}
        onSelectTab={handleSelectTab}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenNoSurprise={handleOpenNoSurprise}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
        initialService={selectedServiceForBooking}
        initialNote={selectedBookingNote}
      />

      {/* Info / Policy Modal */}
      <InfoModal
        isOpen={infoModalContent !== null}
        onClose={() => setInfoModalContent(null)}
        language={language}
        content={infoModalContent}
      />
    </div>
  );
}
