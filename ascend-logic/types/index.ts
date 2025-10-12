export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  image?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  company: string;
  industry?: string;
  solution?: string;
  results?: string[];
  imagePath: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  url: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  profile: string;
  imagePath: string;
}

export interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
}

export interface FormState {
  company: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  interests: string[];
  message: string;
  consent: boolean;
}
