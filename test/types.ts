
// Types and interfaces for the portfolio
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  keyFeatures: string[];
  image: string;
  tech: string[];
  liveLink: string;
  year: string;
}

export interface Skill {
  name: string;
  level: string;
  yearsOfExp: string;
  status: 'Daily' | 'Active' | 'Occasional';
  percentage: number;
}

export interface Experience {
  period: string;
  periodLabel?: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}
