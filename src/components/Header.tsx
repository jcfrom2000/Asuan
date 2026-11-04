import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Lock, ExternalLink } from 'lucide-react';
import { Language, NavItem, NavSubItem } from '../types';
import { navigationItems, getCleanPathForNav } from '../data/navigationData';
import { translations } from '../data/translations';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  activeTab,
  onSelectTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('community');
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = translations[language];

  // Close dropdown on outside click
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-nav-dropdown]')) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOpenDropdownId(null);
    onSelectTab(item.id);
  };

  const handleSubItemClick = (e: React.MouseEvent<HTMLAnchorElement>, subItem: NavSubItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOpenDropdownId(null);
    onSelectTab(subItem.id);
  };

  const handleMouseEnter = (itemId: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdownId(itemId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 200);
  };

  const homeHref = language === 'zh' ? '/zh' : '/';

  // Helper to determine if a nav item or any of its children is active
  const isItemActive = (item: NavItem) => {
    if (activeTab === item.id) return true;
    if (item.children?.some((child) => child.id === activeTab)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf4]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#2e382b]/10">
      <div className="h-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <a
            href={homeHref}
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('home');
            }}
            className="flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="font-headline-md text-[20px] sm:text-[22px] lg:text-[22px] xl:text-[25px] text-primary tracking-tight group-hover:text-secondary transition-colors whitespace-nowrap">
              {t.brandName}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6">
          {navigationItems.map((item) => {
            const isActive = isItemActive(item);
            const label = language === 'zh' ? item.labelZh : item.labelEn;
            const cleanHref = getCleanPathForNav(item.id, language);
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdownId === item.id;

            if (hasChildren) {
              return (
                <div
                  key={item.id}
                  data-nav-dropdown
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={cleanHref}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-current={isActive ? 'page' : undefined}
                    aria-expanded={isDropdownOpen}
                    className={`relative py-1 font-label-md text-sm xl:text-label-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                      isActive
                        ? 'text-[#a35e3e] font-medium'
                        : 'text-on-surface-variant hover:text-[#a35e3e]'
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-[#a35e3e]' : 'opacity-70'
                      }`}
                    />
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#a35e3e] transition-all" />
                    ) : (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-transparent group-hover:w-full transition-all" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 min-w-[270px] py-2 bg-[#2d372b] text-[#fbf7f0] rounded-2xl shadow-xl border border-white/10 backdrop-blur-xl animate-fadeIn z-50">
                      <div className="flex flex-col">
                        {item.children?.map((subItem) => {
                          const isSubActive = activeTab === subItem.id;
                          const subLabel = language === 'zh' ? subItem.labelZh : subItem.labelEn;
                          const subHref = getCleanPathForNav(subItem.id, language);

                          return (
                            <a
                              key={subItem.id}
                              href={subHref}
                              onClick={(e) => handleSubItemClick(e, subItem)}
                              className={`px-4 py-2.5 text-sm font-label-md transition-colors flex items-center justify-between ${
                                isSubActive
                                  ? 'bg-[#3b4739] text-[#e8b598] font-medium'
                                  : 'text-[#e5e8e2] hover:bg-[#3b4739]/80 hover:text-white'
                              }`}
                            >
                              <span>{subLabel}</span>
                              {isSubActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#e8b598]" />
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.id}
                href={cleanHref}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 font-label-md text-sm xl:text-label-md transition-colors flex flex-col items-center whitespace-nowrap ${
                  isActive
                    ? 'text-[#a35e3e] font-medium'
                    : 'text-on-surface-variant hover:text-[#a35e3e]'
                }`}
              >
                <span>{label}</span>
                {isActive ? (
                  <span className="w-full h-[2px] rounded-full mt-1 bg-[#a35e3e] transition-all" />
                ) : (
                  <span className="w-0 h-[2px] rounded-full mt-1 bg-transparent group-hover:w-full transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3 shrink-0">
          {/* Functional Language Switcher - Desktop: Low-key, subtle neutral styling */}
          <button
            type="button"
            aria-label={t.nav.switchLanguageAria}
            onClick={onToggleLanguage}
            className="hidden lg:inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition-all font-label-md text-xs xl:text-sm bg-[#f0f0ea]/70 hover:bg-[#e8e8e0] border border-[#2e382b]/10 text-on-surface-variant hover:text-on-surface shadow-2xs cursor-pointer whitespace-nowrap"
          >
            <span
              className={`transition-colors ${
                language === 'zh'
                  ? 'text-on-surface font-semibold'
                  : 'text-on-surface-variant/60 hover:text-on-surface font-normal'
              }`}
            >
              中文
            </span>
            <span className="text-[#2e382b]/20 select-none">/</span>
            <span
              className={`transition-colors ${
                language === 'en'
                  ? 'text-on-surface font-semibold'
                  : 'text-on-surface-variant/60 hover:text-on-surface font-normal'
              }`}
            >
              EN
            </span>
          </button>

          {/* Existing Clients Portal link */}
          <a
            href="https://overstreamtherapy.clientsecure.me/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            title="SimplePractice Client Portal"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all font-label-md text-xs bg-[#f0f0ea]/70 hover:bg-[#e8e8e0] border border-[#2e382b]/10 text-on-surface-variant hover:text-primary shadow-2xs whitespace-nowrap"
          >
            <Lock className="w-3.5 h-3.5 text-[#a35e3e]" />
            <span>{t.nav.clientPortal}</span>
          </a>

          {/* Book a Session CTA - Desktop Only (moved inside hamburger menu on mobile) */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden lg:inline-flex items-center justify-center px-4 xl:px-5 py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-xs xl:text-label-md font-medium shadow-xs active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            {t.nav.bookSession}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-[#eeeee9]/60 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fafaf4]/98 backdrop-blur-xl border-b border-[#2e382b]/10 px-6 py-5 shadow-lg animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1.5">
            {navigationItems.map((item) => {
              const isActive = isItemActive(item);
              const label = language === 'zh' ? item.labelZh : item.labelEn;
              const cleanHref = getCleanPathForNav(item.id, language);
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpandedId === item.id;

              if (hasChildren) {
                return (
                  <div key={item.id} className="flex flex-col">
                    <div
                      className={`flex items-center justify-between py-2 px-3.5 rounded-xl font-label-md text-base transition-colors ${
                        isActive
                          ? 'bg-[#f7f1eb] text-[#a35e3e] font-semibold'
                          : 'text-on-surface hover:bg-[#eeeee9]/70'
                      }`}
                    >
                      <a
                        href={cleanHref}
                        onClick={(e) => handleNavClick(e, item)}
                        className="grow"
                      >
                        {label}
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileExpandedId(isExpanded ? null : item.id)}
                        className="p-1 text-on-surface-variant hover:text-primary"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>

                    {/* Submenu Accordion */}
                    {isExpanded && (
                      <div className="pl-4 pr-1 py-1.5 ml-3 my-1 border-l-2 border-[#a35e3e]/30 flex flex-col space-y-1">
                        {item.children?.map((subItem) => {
                          const isSubActive = activeTab === subItem.id;
                          const subLabel = language === 'zh' ? subItem.labelZh : subItem.labelEn;
                          const subHref = getCleanPathForNav(subItem.id, language);

                          return (
                            <a
                              key={subItem.id}
                              href={subHref}
                              onClick={(e) => handleSubItemClick(e, subItem)}
                              className={`py-2 px-3 rounded-lg text-sm font-label-md transition-colors ${
                                isSubActive
                                  ? 'bg-[#efebe2] text-[#a35e3e] font-medium'
                                  : 'text-on-surface-variant hover:bg-[#eeeee9]/60 hover:text-on-surface'
                              }`}
                            >
                              {subLabel}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={cleanHref}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`py-2.5 px-3.5 rounded-xl font-label-md text-base transition-colors ${
                    isActive
                      ? 'bg-[#f7f1eb] text-[#a35e3e] font-semibold'
                      : 'text-on-surface hover:bg-[#eeeee9]/70'
                  }`}
                >
                  {label}
                </a>
              );
            })}

            {/* Mobile Actions Container: Language Switcher & Book a Session CTA */}
            <div className="pt-4 mt-2 border-t border-[#2e382b]/10 flex flex-col gap-3">
              {/* Language Switcher inside Mobile Drawer: Understated & low-key neutral */}
              <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#f0f0ea]/70 border border-[#2e382b]/10">
                <span className="text-xs font-label-md text-on-surface-variant">
                  {language === 'zh' ? '界面语言' : 'Language'}
                </span>
                <div className="inline-flex items-center bg-[#e4e4dd]/75 rounded-full p-0.5 border border-[#2e382b]/10 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => {
                      if (language !== 'zh') onToggleLanguage();
                    }}
                    className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                      language === 'zh'
                        ? 'bg-white text-on-surface font-semibold shadow-2xs'
                        : 'text-on-surface-variant/70 hover:text-on-surface font-normal'
                    }`}
                  >
                    中文
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (language !== 'en') onToggleLanguage();
                    }}
                    className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                      language === 'en'
                        ? 'bg-white text-on-surface font-semibold shadow-2xs'
                        : 'text-on-surface-variant/70 hover:text-on-surface font-normal'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Existing Clients Portal link */}
              <a
                href="https://overstreamtherapy.clientsecure.me/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#f0f0ea]/70 hover:bg-[#e8e8e0] border border-[#2e382b]/10 text-primary text-xs font-label-md transition-colors"
              >
                <span className="flex items-center gap-2 font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#a35e3e]" />
                  <span>{t.nav.clientPortal} (SimplePractice)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-on-surface-variant" />
              </a>

              {/* Book a Session CTA inside Mobile Drawer */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm font-medium text-center shadow-xs active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {t.nav.bookSession}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
