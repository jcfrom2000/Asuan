import { Language } from '../types';

export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'community'
  | 'faq'
  | 'contact'
  | 'solution-focused-coaching'
  | 'immigration-evaluation'
  | 'consultation-supervision'
  | 'sex-therapy';

export interface SeoConfig {
  page: PageRoute;
  language: Language;
}

const SEO_DATA: Record<PageRoute, Record<Language, { title: string; description: string; canonicalPath: string; keywords: string }>> = {
  'sex-therapy': {
    en: {
      title: 'Sex & Intimacy Therapy | Certified Sex Therapist Chicago | OverStream Therapy',
      description:
        'Specialized, sex-positive therapy addressing intimacy barriers, sexual trauma recovery, religious sexual shame, and LGBTQ+ identity exploration in a stigma-free environment by Jessica Cao, CST.',
      canonicalPath: '/sex-therapy',
      keywords:
        'Sex therapy Chicago, AASECT certified sex therapist, intimacy counseling, sexual trauma recovery, religious sex guilt Christian, LGBTQ affirming sex therapist, somatic intimacy therapy',
    },
    zh: {
      title: '性与亲密关系治疗 (Sex & Intimacy Therapy) | AASECT 认证性治疗师 | OverStream Therapy 在溪心理',
      description:
        '由 AASECT 认证性治疗师（CST）曹翱璇提供性积极、创伤知情的纯谈话治疗。专注亲密障碍、性创伤疗愈、宗教性羞耻及 LGBTQ+ 身份探索。',
      canonicalPath: '/zh/sex-therapy',
      keywords:
        '芝加哥性治疗师, AASECT性治疗, 华人性心理咨询, 性创伤疗愈, 宗教性羞耻, 伴侣亲密障碍, LGBTQ亲密关系, 纯谈话性治疗',
    },
  },
  home: {
    en: {
      title: 'OverStream Therapy | Serene Integrative Psychotherapy & Counseling in Chicago',
      description:
        'A culturally humble sanctuary in Chicago & Telehealth for immigrants, international students, creative professionals, and couples by Jessica Cao, LCSW, LCPC, CST.',
      canonicalPath: '/',
      keywords:
        'Chicago therapy, multilingual psychotherapy, sex therapy Chicago, Jessica Cao LCSW, immigrant mental health, Gottman couples counseling, Loop therapist',
    },
    zh: {
      title: 'OverStream Therapy 在溪心理 | 芝加哥中文心理咨询与性治疗 • 曹翱璇 (Jessica Cao)',
      description:
        '为第一代移民、国际留学生、创作者与跨文化伴侣量身构筑的宁静心境绿洲。提供英语、普通话与粤语的多语种心理咨询、性治疗与移民心理评估。',
      canonicalPath: '/zh',
      keywords:
        '芝加哥心理咨询, 芝加哥华人心理医生, 曹翱璇心理治疗师, 在溪心理, 留学生心理健康, AASECT性治疗师, 跨文化伴侣咨询, 芝加哥移民心理评估',
    },
  },
  'solution-focused-coaching': {
    en: {
      title: 'Solution-Focused Coaching | Short-Term Action-Oriented Intervention | OverStream Therapy',
      description:
        'Highly targeted, 1-6 session solution-focused coaching for international students, job seekers, early-career clinicians, and private practice owners by Jessica Cao.',
      canonicalPath: '/solution-focused-coaching',
      keywords:
        'solution focused coaching Chicago, international student coaching OPT H1B, mental health grad school MSW MHC, private practice business consultation therapist',
    },
    zh: {
      title: '短期焦点辅导 (Solution-Focused Coaching) | 高度聚焦、以行动为导向 | OverStream Therapy 在溪心理',
      description:
        '1-6次高密度短期焦点辅导，专为面临生活适应、OPT/H1B身份焦虑、职业转型及私人诊所创办的留学生与双语专业人士设计。',
      canonicalPath: '/zh/solution-focused-coaching',
      keywords:
        '短期焦点辅导, 留学生职业辅导, OPT求职焦虑, 心理咨询研究生选校, 私人诊所创办商业咨询, 在溪心理',
    },
  },
  'immigration-evaluation': {
    en: {
      title: 'Immigration Psychological Evaluation | Hardship, Asylum, VAWA, U/T Visa | OverStream Therapy',
      description:
        'Comprehensive, culturally sensitive, and legally grounded psychological evaluations in English, Mandarin, and Cantonese for immigration proceedings by Jessica Cao, LCSW.',
      canonicalPath: '/immigration-evaluation',
      keywords:
        'Immigration psychological evaluation Chicago, Hardship waiver I-601 I-601A evaluation, asylum mental health evaluation, VAWA evaluation Chinese Cantonese, U visa psychologist',
    },
    zh: {
      title: '移民心理评估报告 (Immigration Psychological Evaluation) | OverStream Therapy 在溪心理',
      description:
        '为美国移民法庭及各类程序提供严谨、具有文化敏锐度且符合法庭证据标准的心理评估。英语、普通话与粤语直接面谈，涵盖 I-601/I-601A 极度困难豁免、庇护、VAWA 及 U/T 签证。',
      canonicalPath: '/zh/immigration-evaluation',
      keywords:
        '芝加哥移民心理评估, 极度困难豁免心理报告, 政治庇护心理评估, VAWA家庭暴力评估, 华人移民评估心理医生, 普通话粤语心理评估',
    },
  },
  about: {
    en: {
      title: 'About Jessica Cao | Psychotherapist & Certified Sex Therapist | OverStream Therapy',
      description:
        'Learn about Jessica Cao, LCSW, LCPC, CST. Psychotherapy grounded in cultural humility, trauma-informed care, sex positivity, and existential exploration.',
      canonicalPath: '/about',
      keywords:
        'About Jessica Cao, Chicago therapist bio, AASECT sex therapist, Univ of Chicago MSW, cultural humility, somatic trauma therapy',
    },
    zh: {
      title: '关于咨询师 曹翱璇 Jessica | 执业背景与理念 | OverStream Therapy 在溪心理',
      description:
        '了解曹翱璇 Jessica（she/her/她）的成长故事、美中四州临床资质、擅长方向与6大咨询流派哲学（优势导向、以人为中心、人际历程、交叉性、创伤知情、灵性整合）。',
      canonicalPath: '/zh/about',
      keywords:
        '曹翱璇背景, 芝加哥在溪心理, 心理治疗师故事, 芝加哥精神分析学院, 密歇根大学性治疗, 创伤知情照料, 优势导向治疗',
    },
  },
  services: {
    en: {
      title: 'Therapy Services | Individual, Couples & Sex Therapy | OverStream Therapy',
      description:
        'Multilingual therapy services by Jessica Cao, CST: Culturally responsive individual therapy, couples & family therapy, and certified sex & intimacy therapy.',
      canonicalPath: '/services',
      keywords:
        'Individual therapy Chicago, couples therapy, sex therapy CST, Chinese speaking therapist, attachment trauma, relationship counseling',
    },
    zh: {
      title: '心理咨询服务 | 个体、伴侣与性治疗 | OverStream Therapy 在溪心理',
      description:
        '在溪心理核心服务：个体心理咨询、伴侣与家庭咨询、AASECT认证性与亲密关系治疗。提供文化回应性与创伤知情的专业支持。',
      canonicalPath: '/zh/services',
      keywords:
        '个体心理咨询, 伴侣与家庭咨询, 性与亲密关系治疗, 芝加哥心理医生, AASECT性治疗师, 留学生心理健康',
    },
  },
  community: {
    en: {
      title: 'Community Workshops & Groups Spaces | “Healing happens in connection” | OverStream Therapy',
      description:
        '“Healing happens in connection.” Customized psychoeducational workshops, speaking engagements, and supportive therapy groups in Chicago & Telehealth by Jessica Cao, LCSW, CST.',
      canonicalPath: '/community',
      keywords:
        'Community Workshops Chicago, Chinese Women Desire Intimacy Group, UChicago Mandarin support group, Social Work Students support group, EDBI body acceptance workshop, Roots and Resilience therapy',
    },
    zh: {
      title: '团体辅导与社区工作坊空间 (Community Workshops & Groups Spaces) | OverStream Therapy 在溪心理',
      description:
        '“疗愈发生于深层联结之中。”为高校、机构与多元文化社群量身定制的心理教育工作坊、华人女性情欲与亲密关系小组、芝大留学生支持小组及企事业单位定制演讲。',
      canonicalPath: '/zh/community',
      keywords:
        '社区工作坊, 团体心理咨询芝加哥, 华人女性亲密关系小组, 芝加哥大学中文心理支持, 社工留学生支持小组, 创伤疗愈工作坊, 身体意象支持, 在溪心理',
    },
  },
  'consultation-supervision': {
    en: {
      title: 'Clinical Supervision & Consultation | MSW & Clinician Mentorship | OverStream Therapy',
      description:
        'Clinical supervision and case consultation for MSW interns, early-career social workers, therapists, and counselors by Jessica Cao (IL LCSW/LCPC, MI LMSW). Specialty in multicultural competence and sex therapy.',
      canonicalPath: '/consultation-supervision',
      keywords:
        'Clinical supervision Chicago, MSW intern supervision, therapist peer consultation, UChicago MSW supervisor, sex therapy supervision, multicultural clinician consultation',
    },
    zh: {
      title: '临床个案督导与同行咨询 (Clinical Supervision & Consultation) | OverStream Therapy 在溪心理',
      description:
        '为社工实习生、早期咨询师与心理治疗师提供量身定制的临床个案督导、疑难个案同行研讨与继续教育支持。曹翱璇 Jessica（美中四州执业临床执照）主理。',
      canonicalPath: '/zh/consultation-supervision',
      keywords:
        '临床个案督导, 芝加哥MSW实习督导, 华人心理咨询师督导, 性治疗专业督导, 同行咨询, 基督教咨询师团契, 在溪心理',
    },
  },
  faq: {
    en: {
      title: 'Frequently Asked Questions | OverStream Therapy Chicago',
      description:
        'Transparent answers regarding clinical psychotherapy (IL & MI), nationwide coaching, BCBS/USHIP insurance, superbills, sex therapy ethics, and immigration evaluations with Jessica Cao.',
      canonicalPath: '/faq',
      keywords:
        'Therapy FAQ Chicago, insurance superbill therapist, BCBS USHIP therapy, sex therapy talk only, immigration evaluation FAQ, Illinois Michigan therapist',
    },
    zh: {
      title: '常见问题解答 (FAQs) | OverStream Therapy 在溪心理',
      description:
        '关于伊州与密歇根州临床执照、全美与全球焦点辅导、BCBS/USHIP网络内与网络外Superbill保险报销、性治疗纯谈话伦理、以及移民法庭心理评估的详尽解答。',
      canonicalPath: '/zh/faq',
      keywords:
        '心理咨询常见问题, 在溪心理费用, BCBS网络内心理咨询, 性治疗是否脱衣, 芝加哥心理咨询执照, 移民心理评估流程与费用',
    },
  },
  contact: {
    en: {
      title: 'Contact & 15-Minute Consultation | OverStream Therapy – Chicago Office',
      description:
        'Schedule a complimentary 15-minute consultation with Jessica Cao, LCSW, CST. In-person sanctuary at 53 W Jackson Blvd, Chicago Loop, and secure telehealth across IL, IN, WI, MI.',
      canonicalPath: '/contact',
      keywords:
        'Contact therapist Chicago, 15 min free consultation, Monadnock building therapy, OverStream contact, Jessica Cao appointment, telehealth Illinois',
    },
    zh: {
      title: '联系方式与初访预约 | OverStream Therapy 在溪心理 – 芝加哥实体咨询室',
      description:
        '预约 15 分钟免费线上初访沟通。芝加哥实体咨询室位于市中心环区历史地标莫纳德诺克大厦（53 W Jackson Blvd, Suite 820），同时提供跨州远程视频咨询。',
      canonicalPath: '/zh/contact',
      keywords:
        '预约初访, 芝加哥心理咨询室地址, 曹翱璇联系方式, 在溪心理电话, 免费15分钟咨询, 莫纳德诺克大厦心理诊所',
    },
  },
};

export function updatePageSeo({ page, language }: SeoConfig) {
  if (typeof document === 'undefined') return;

  const origin = window.location.origin;
  const pageKey = SEO_DATA[page] ? page : 'home';
  const data = SEO_DATA[pageKey][language];

  // 1. Update Document Title
  document.title = data.title;

  // 2. Update HTML Language Attribute
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  // Helper to set or create meta tag
  const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
    let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attributeName, attributeValue);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Helper to set or create link tag
  const setLinkTag = (rel: string, href: string, extraAttributes: Record<string, string> = {}) => {
    let selector = `link[rel="${rel}"]`;
    if (extraAttributes.hreflang) {
      selector += `[hreflang="${extraAttributes.hreflang}"]`;
    }
    let link = document.querySelector(selector) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
    Object.entries(extraAttributes).forEach(([key, val]) => {
      link?.setAttribute(key, val);
    });
  };

  // 3. Update Standard Meta Description & Keywords
  setMetaTag('name', 'description', data.description);
  setMetaTag('name', 'keywords', data.keywords);

  // 4. Update OpenGraph Tags
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const canonicalOgImage = `${origin}${cleanBase}assets/images/overstream-therapy-chicago-jessica-cao-licensed-therapist-portrait.jpg`;
  const canonicalLogoImage = `${origin}${cleanBase}assets/images/overstream-therapy-office-white-poppies-botanical-still-life.jpg`;
  const imageAltText =
    language === 'zh'
      ? '曹翱璇 (Jessica Cao) 临床心理治疗师 - 执业团队与背景 | OverStream Therapy 在溪心理'
      : 'Jessica Cao, LCSW, LCPC, CST - Clinical Psychotherapist & Founder | OverStream Therapy';

  setMetaTag('property', 'og:title', data.title);
  setMetaTag('property', 'og:description', data.description);
  setMetaTag('property', 'og:url', `${origin}${data.canonicalPath}`);
  setMetaTag('property', 'og:locale', language === 'zh' ? 'zh_CN' : 'en_US');
  setMetaTag('property', 'og:site_name', language === 'zh' ? 'OverStream Therapy 在溪心理' : 'OverStream Therapy');
  setMetaTag('property', 'og:image', canonicalOgImage);
  setMetaTag('property', 'og:image:alt', imageAltText);

  // 5. Update Twitter Cards
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', data.title);
  setMetaTag('name', 'twitter:description', data.description);
  setMetaTag('name', 'twitter:image', canonicalOgImage);
  setMetaTag('name', 'twitter:image:alt', imageAltText);

  // 6. Update Canonical URL
  setLinkTag('canonical', `${origin}${data.canonicalPath}`);

  // 7. Configure Multilingual hreflang Alternates (Zero-hash SEO URLs)
  const enPath = page === 'home' ? '/' : `/${page}`;
  const zhPath = page === 'home' ? '/zh' : `/zh/${page}`;
  const enUrl = `${origin}${enPath}`;
  const zhUrl = `${origin}${zhPath}`;

  setLinkTag('alternate', enUrl, { hreflang: 'en' });
  setLinkTag('alternate', zhUrl, { hreflang: 'zh' });
  setLinkTag('alternate', enUrl, { hreflang: 'x-default' });

  // 8. Structured Data: Schema.org (LocalBusiness & MedicalBusiness)
  let schemaScript = document.getElementById('seo-structured-data') as HTMLScriptElement | null;
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'seo-structured-data';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness', 'Psychiatric'],
    name: language === 'zh' ? 'OverStream Therapy 在溪心理' : 'OverStream Therapy',
    alternateName: 'Jessica Cao Psychotherapy PLLC',
    url: `${origin}${data.canonicalPath}`,
    logo: canonicalLogoImage,
    image: canonicalOgImage,
    description: data.description,
    telephone: '+1-312-967-0117',
    email: 'info@overstreamtherapy.com',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Superbill for Insurance Reimbursement',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '53 W Jackson Blvd, Suite 820',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60604',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.8781',
      longitude: '-87.6298',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Aoxuan Jessica Cao',
      jobTitle: 'Licensed Clinical Social Worker & Certified Sex Therapist',
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'University of Chicago',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Indiana University',
        },
      ],
    },
    areaServed: [
      { '@type': 'State', name: 'Illinois' },
      { '@type': 'State', name: 'Indiana' },
      { '@type': 'State', name: 'Wisconsin' },
      { '@type': 'State', name: 'Michigan' },
    ],
    availableLanguage: ['English', 'Mandarin Chinese', 'Cantonese'],
  };

  schemaScript.textContent = JSON.stringify(structuredData, null, 2);
}
