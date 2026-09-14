export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  impact: string;
  badge: string;
}

export interface SolutionFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefit: string;
  highlight: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  details: {
    label: string;
    value: string;
  }[];
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  companyName: string;
  businessType: string;
  dailyBottles: string;
  message: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
  change: string;
  description: string;
}
