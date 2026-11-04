export type Language = 'en' | 'zh';

export interface NavSubItem {
  id: string;
  labelEn: string;
  labelZh: string;
  href: string;
}

export interface NavItem {
  id: string;
  labelEn: string;
  labelZh: string;
  href: string;
  children?: NavSubItem[];
}

export interface ServiceItem {
  id: string;
  categoryEn: string;
  categoryZh: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  imageSrc: string;
  imageAlt?: string;
  imageAltEn?: string;
  imageAltZh?: string;
  badge?: string;
  ctaTextEn: string;
  ctaTextZh: string;
}

export interface ConsultationItem {
  id: string;
  categoryEn: string;
  categoryZh: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  imageSrc: string;
  imageAlt?: string;
  imageAltEn?: string;
  imageAltZh?: string;
  ctaTextEn: string;
  ctaTextZh: string;
}

export interface FaqItem {
  id: string;
  categoryEn?: string;
  categoryZh?: string;
  questionEn: string;
  questionZh: string;
  answerEn: string;
  answerZh: string;
}

export interface MetricBadge {
  value: string;
  labelEn: string;
  labelZh: string;
}
