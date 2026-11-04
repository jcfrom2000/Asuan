import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { footerCompassLinks, getCleanPathForNav } from '../data/navigationData';

interface FooterProps {
  language: Language;
  onSelectTab: (tabId: string) => void;
  onOpenPrivacy: () => void;
  onOpenNoSurprise: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onSelectTab,
  onOpenPrivacy,
  onOpenNoSurprise,
}) => {
  const t = translations[language];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string) => {
    e.preventDefault();
    onSelectTab(linkId);
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-[#2e382b]/5">
      <div className="max-w-[1240px] mx-auto px-5 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand & Clinician Overview */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-headline-md text-2xl text-primary tracking-tight">
              {t.brandName}
            </div>
            <p className="font-body-md text-sm text-secondary font-medium max-w-sm">
              {t.therapistTitle}
            </p>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm whitespace-pre-line">
              {t.footer.description}
            </p>
          </div>

          {/* Direct Contact Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-label-md text-xs uppercase tracking-wider text-secondary font-semibold">
              {t.footer.inquiriesTitle}
            </div>
            <div className="space-y-2">
              <p className="font-body-md text-sm text-on-surface flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a35e3e]" />
                <a
                  className="hover:text-[#a35e3e] transition-colors"
                  href="mailto:info@overstreamtherapy.com"
                >
                  info@overstreamtherapy.com
                </a>
              </p>
              <p className="font-body-md text-sm text-on-surface flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a35e3e]" />
                <a
                  className="hover:text-[#a35e3e] transition-colors"
                  href="tel:3129670117"
                >
                  (312) 967-0117
                </a>
              </p>
              <p className="font-body-md text-sm text-on-surface flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#a35e3e]" />
                <button
                  type="button"
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-[#a35e3e] transition-colors text-left cursor-pointer"
                >
                  <span>53 W Jackson Blvd, Suite 820, Chicago & Telehealth</span>
                </button>
              </p>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant pt-2 leading-relaxed">
              {t.footer.licensedNote}
            </p>
          </div>

          {/* Practice Compass Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-label-md text-xs uppercase tracking-wider text-secondary font-semibold">
              {t.footer.compassTitle}
            </div>
            <ul className="space-y-2">
              {footerCompassLinks.map((link) => {
                const cleanHref = getCleanPathForNav(link.id, language);
                return (
                  <li key={link.id} className="font-body-sm text-xs sm:text-sm">
                    <a
                      className="text-on-surface-variant hover:text-[#a35e3e] transition-colors"
                      href={cleanHref}
                      onClick={(e) => handleLinkClick(e, link.id)}
                    >
                      {language === 'zh' ? link.labelZh : link.labelEn}
                    </a>
                  </li>
                );
              })}
              <li className="font-body-sm text-xs sm:text-sm pt-1">
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-on-surface-variant hover:text-[#a35e3e] transition-colors text-left cursor-pointer"
                >
                  {t.footer.privacyPolicy}
                </button>
              </li>
              <li className="font-body-sm text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={onOpenNoSurprise}
                  className="text-on-surface-variant hover:text-[#a35e3e] transition-colors text-left cursor-pointer"
                >
                  {t.footer.noSurprise}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#eeeee9] flex flex-col md:flex-row items-center justify-between gap-3 font-body-sm text-xs text-on-surface-variant/80">
          <p>{t.footer.copyright}</p>
          <p className="text-right italic">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
