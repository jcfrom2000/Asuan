import React from 'react';
import { Mail, Cookie, PieChart, Globe, Lock, MailCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PrivacyPolicyPageProps {
  language: Language;
  onNavigateHome?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  language,
}) => {
  const isZh = language === 'zh';
  const t = translations[language];

  return (
    <article className="w-full flex flex-col bg-[#fafaf4] text-[#1a1c19] min-h-screen selection:bg-[#f3dfce] selection:text-[#231a0f]">
      {/* 1. Header Banner */}
      <header className="relative w-full py-16 sm:py-20 bg-[#1f2924] text-[#f7f7f2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="font-headline-md text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white mb-4">
              {isZh ? '隐私权政策' : 'Privacy Policy'}
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#d2d6cf] leading-relaxed">
              {isZh
                ? '我们高度重视您的隐私与个人信息安全。本政策阐明了本网站在为您提供服务时如何收集、使用与保护您的个人数据。'
                : 'We prioritize your privacy and personal data security. This policy outlines how personal data is collected, used, and protected when you visit our website.'}
            </p>
          </div>
        </div>
      </header>

      {/* 2. Main Content Body */}
      <main className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        <div className="max-w-4xl space-y-10 mx-auto">
          {/* Section: Contact Us */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2e382b]/10 shadow-[0_2px_12px_rgba(46,56,43,0.04)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f5efe6] text-[#a35e3e]">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-serif">
                {isZh ? '联系我们' : 'Contact Us'}
              </h2>
            </div>
            {isZh ? (
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                如果您对我们的隐私政策有任何疑问或顾虑，请通过邮件联系我们：{' '}
                <a
                  href="mailto:info@overstreamtherapy.com"
                  className="text-[#a35e3e] hover:underline font-medium"
                >
                  info@overstreamtherapy.com
                </a>
              </p>
            ) : (
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                If you have any questions or concerns about our privacy policy, please contact us at{' '}
                <a
                  href="mailto:info@overstreamtherapy.com"
                  className="text-[#a35e3e] hover:underline font-medium"
                >
                  info@overstreamtherapy.com
                </a>
                .
              </p>
            )}
          </section>

          {/* Section: For Website Visitors */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2e382b]/10 shadow-[0_2px_12px_rgba(46,56,43,0.04)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f5efe6] text-[#a35e3e]">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-serif">
                {isZh ? '网站访客数据' : 'For Website Visitors'}
              </h2>
            </div>
            {isZh ? (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>本网站由 OverStream Therapy 自主托管运行。当您访问本网站时，系统会收集必要的个人数据，包括：</p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-on-surface">
                  <li>有关您的浏览器、网络和设备的信息</li>
                  <li>访问本网站前浏览的网页</li>
                  <li>您的 IP 地址</li>
                </ul>
                <p>我们需要这些数据来运行本网站，并保护与改进我们的平台及服务。系统会以去身份化的形式分析这些数据。</p>
              </div>
            ) : (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  This website is self-hosted by OverStream Therapy. We collect personal data when you visit this website, including:
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-on-surface">
                  <li>Information about your browser, network and device</li>
                  <li>Web pages you visited prior to coming to this website</li>
                  <li>Your IP address</li>
                </ul>
                <p>
                  We need the data to run this website, and to protect and improve our platform and services. We analyze the data in a de-personalized form.
                </p>
              </div>
            )}
          </section>

          {/* Section: Analytics */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2e382b]/10 shadow-[0_2px_12px_rgba(46,56,43,0.04)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f5efe6] text-[#a35e3e]">
                <PieChart className="w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-serif">
                {isZh ? '网站数据统计与分析' : 'Analytics'}
              </h2>
            </div>
            {isZh ? (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>本网站收集个人数据以支持我们的网站统计分析，包括：</p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-on-surface">
                  <li>有关您的浏览器、网络和设备的信息</li>
                  <li>访问本网站前浏览的网页</li>
                  <li>您的 IP 地址</li>
                </ul>
                <p>这些信息还可能包含有关您使用本网站的详细信息，包括：</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-[#fafaf4] p-4 rounded-xl border border-[#eeeee9] text-xs sm:text-sm font-label-md text-on-surface">
                  <div className="flex items-center gap-1.5">• 页面点击 (Clicks)</div>
                  <div className="flex items-center gap-1.5">• 站内链接 (Internal links)</div>
                  <div className="flex items-center gap-1.5">• 浏览页面 (Pages visited)</div>
                  <div className="flex items-center gap-1.5">• 页面滚动 (Scrolling)</div>
                  <div className="flex items-center gap-1.5">• 站内搜索 (Searches)</div>
                  <div className="flex items-center gap-1.5">• 时间戳 (Timestamps)</div>
                </div>
                <p>我们分析此类信息以了解网站流量和访客活动。</p>
              </div>
            ) : (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>This website collects personal data to power our site analytics, including:</p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-on-surface">
                  <li>Information about your browser, network, and device</li>
                  <li>Web pages you visited prior to coming to this website</li>
                  <li>Your IP address</li>
                </ul>
                <p>This information may also include details about your use of this website, including:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-[#fafaf4] p-4 rounded-xl border border-[#eeeee9] text-xs sm:text-sm font-label-md text-on-surface">
                  <div className="flex items-center gap-1.5">• Clicks</div>
                  <div className="flex items-center gap-1.5">• Internal links</div>
                  <div className="flex items-center gap-1.5">• Pages visited</div>
                  <div className="flex items-center gap-1.5">• Scrolling</div>
                  <div className="flex items-center gap-1.5">• Searches</div>
                  <div className="flex items-center gap-1.5">• Timestamps</div>
                </div>
                <p>We analyze this information to learn about site traffic and activity.</p>
              </div>
            )}
          </section>

          {/* Section: Cookies */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2e382b]/10 shadow-[0_2px_12px_rgba(46,56,43,0.04)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f5efe6] text-[#a35e3e]">
                <Cookie className="w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-serif">
                {isZh ? 'Cookie 政策与技术' : 'Cookies'}
              </h2>
            </div>
            {isZh ? (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>本网站使用 Cookie 及类似技术。Cookie 是指当访客访问网站或应用时下载到设备上的小文件或文本片段。</p>
                <div className="space-y-3 bg-[#fafaf4] p-4 sm:p-5 rounded-xl border border-[#eeeee9]">
                  <div>
                    <h3 className="font-semibold text-on-surface text-sm sm:text-base mb-1">
                      必要功能性 Cookie (Functional & Required Cookies)
                    </h3>
                    <p className="text-xs sm:text-sm">
                      系统始终会使用这些功能性和必要 Cookie，以确保我们的托管基础设施为您安全地提供本网站服务。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-surface text-sm sm:text-base mb-1">
                      统计与性能 Cookie (Analytics & Performance Cookies)
                    </h3>
                    <p className="text-xs sm:text-sm">
                      仅当您确认我们的 Cookie 提示横幅时，本网站才会使用下述统计和性能 Cookie。我们使用统计 Cookie 来查看网站流量、活动及其他数据。
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  This website uses cookies and similar technologies, which are small files or pieces of text that download to a device when a visitor accesses a website or app.
                </p>
                <div className="space-y-3 bg-[#fafaf4] p-4 sm:p-5 rounded-xl border border-[#eeeee9]">
                  <div>
                    <h3 className="font-semibold text-on-surface text-sm sm:text-base mb-1">
                      Functional & Required Cookies
                    </h3>
                    <p className="text-xs sm:text-sm">
                      These functional and required cookies are always used, which allow our hosting infrastructure to securely serve this website to you.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-surface text-sm sm:text-base mb-1">
                      Analytics & Performance Cookies
                    </h3>
                    <p className="text-xs sm:text-sm">
                      These analytics and performance cookies are used on this site, as described below, only when you acknowledge our cookie banner. We use analytics cookies to view site traffic, activity, and other data.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section: Fonts */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2e382b]/10 shadow-[0_2px_12px_rgba(46,56,43,0.04)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f5efe6] text-[#a35e3e]">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-serif">
                {isZh ? '字体服务' : 'Fonts'}
              </h2>
            </div>
            {isZh ? (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>本网站使用来自 Google Fonts 和 Adobe Fonts 的字体文件。为了向您正确显示本网站，存储字体文件的服务器可能会接收有关您的个人信息，包括：</p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-on-surface">
                  <li>有关您的浏览器、网络或设备的信息</li>
                  <li>您的 IP 地址</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  This website uses font files from Google Fonts and Adobe Fonts. To properly display this site to you, servers where the font files are stored may receive personal information about you, including:
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-on-surface">
                  <li>Information about your browser, network, or device</li>
                  <li>Your IP address</li>
                </ul>
              </div>
            )}
          </section>

          {/* Section: Marketing Emails */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2e382b]/10 shadow-[0_2px_12px_rgba(46,56,43,0.04)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f5efe6] text-[#a35e3e]">
                <MailCheck className="w-5 h-5" />
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#1a1c19] font-serif">
                {isZh ? '营销与通讯邮件' : 'Marketing Emails'}
              </h2>
            </div>
            {isZh ? (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  如果您使用电子邮箱地址选择接收我们的通讯，我们可能会向您发送营销与资讯邮件。您可以点击邮件底部的链接随时退订。我们会与电子邮箱营销提供商（如 Mailchimp）共享您的联系信息，以便他们代表我们发送这些邮件。
                </p>
              </div>
            ) : (
              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  If you opt-in to our newsletter using your email address we may send you marketing emails, which you can unsubscribe from by clicking the link at the bottom of the email. We share your contact information with our email marketing provider (such as Mailchimp), so they can send these emails on our behalf.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </article>
  );
};
