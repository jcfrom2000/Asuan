import { NavItem, Language } from '../types';

export const navigationItems: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelZh: '首页', href: '/' },
  {
    id: 'services',
    labelEn: 'Therapy',
    labelZh: '心理咨询',
    children: [
      {
        id: 'individual-therapy',
        labelEn: 'Individual Therapy',
        labelZh: '个体心理咨询',
        href: '/individual-therapy',
      },
      {
        id: 'couple-family-therapy',
        labelEn: 'Couple & Family Therapy',
        labelZh: '伴侣与家庭咨询',
        href: '/couple-family-therapy',
      },
      {
        id: 'sex-therapy',
        labelEn: 'Sex & Intimacy Therapy',
        labelZh: '性与亲密关系治疗',
        href: '/sex-therapy',
      },
    ],
  },
  {
    id: 'community',
    labelEn: 'Work With Me',
    labelZh: '合作服务',
    children: [
      {
        id: 'solution-focused-coaching',
        labelEn: 'Solution-Focused Coaching',
        labelZh: '短期焦点辅导',
        href: '/solution-focused-coaching',
      },
      {
        id: 'immigration-evaluation',
        labelEn: 'Immigration Evaluation',
        labelZh: '移民心理评估',
        href: '/immigration-evaluation',
      },
      {
        id: 'community-workshops',
        labelEn: 'Community Workshops & Groups',
        labelZh: '团体辅导与社区讲座',
        href: '/community-workshops',
      },
      {
        id: 'consultation-supervision',
        labelEn: 'Consultation & Supervision',
        labelZh: '个案督导与同行咨询',
        href: '/consultation-supervision',
      },
    ],
  },
  { id: 'about', labelEn: 'About Jessica', labelZh: '关于咨询师', href: '/about' },
  { id: 'faq', labelEn: 'FAQs', labelZh: '常见问题', href: '/faq' },
  { id: 'contact', labelEn: 'Contact', labelZh: '联系方式', href: '/contact' },
];

export function getCleanPathForNav(itemId: string, language: Language): string {
  const langPrefix = language === 'zh' ? '/zh' : '';
  if (itemId === 'home') {
    return language === 'zh' ? '/zh' : '/';
  }
  return `${langPrefix}/${itemId}`;
}

export const affirmationMantras = {
  en: [
    'You are enough',
    'You are welcome here',
    'Healing happens in connection',
    'Culturally Affirming',
    'Honoring your lived story',
    'Softness as strength',
  ],
  zh: [
    '你本自具足',
    '这里欢迎真实的你',
    '疗愈发生于深层联结之中',
    '根植文化认同与包容',
    '尊重并倾听你的生命故事',
    '柔软蕴含坚韧之力',
  ],
};

export const practiceTags = [
  { en: 'Univ. of Chicago MSW', zh: '芝加哥大学社会工作硕士 (MSW)' },
  { en: 'Indiana Univ. MS', zh: '印第安纳大学健康传播硕士 (MS)' },
  { en: 'AASECT Certified Sex Therapist (CST)', zh: 'AASECT 认证性治疗师 (CST)' },
  { en: 'IL LCSW & LCPC, IN LCSW, WI LCSW, MI LMSW-C', zh: '美中四州执业临床执照' },
];

export const footerCompassLinks = [
  { id: 'home', labelEn: 'Home', labelZh: '首页', href: '/' },
  { id: 'about', labelEn: 'About Jessica', labelZh: '关于咨询师', href: '/about' },
  { id: 'individual-therapy', labelEn: 'Individual Therapy', labelZh: '个体心理咨询', href: '/individual-therapy' },
  { id: 'couple-family-therapy', labelEn: 'Couple & Family Therapy', labelZh: '伴侣与家庭咨询', href: '/couple-family-therapy' },
  { id: 'sex-therapy', labelEn: 'Sex & Intimacy Therapy', labelZh: '性与亲密关系治疗', href: '/sex-therapy' },
  { id: 'solution-focused-coaching', labelEn: 'Solution-Focused Coaching', labelZh: '短期焦点辅导', href: '/solution-focused-coaching' },
  { id: 'immigration-evaluation', labelEn: 'Immigration Evaluation', labelZh: '移民心理评估', href: '/immigration-evaluation' },
  { id: 'community', labelEn: 'Community & Workshops', labelZh: '团体辅导与社区讲座', href: '/community' },
  { id: 'consultation-supervision', labelEn: 'Consultation & Supervision', labelZh: '个案督导与同行咨询', href: '/consultation-supervision' },
  { id: 'faq', labelEn: 'Client FAQs', labelZh: '常见咨询须知', href: '/faq' },
  { id: 'contact', labelEn: 'Contact & Location', labelZh: '预约咨询与联络', href: '/contact' },
];
