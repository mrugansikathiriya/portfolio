export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  subtitle: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  resumeUrl: string;
  avatarUrl: string;
  summary: string[];
  interests: string[];
  careerObjective: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  iconName: string;
  skills: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  contributions: string[];
  liveDemo?: string;
  github?: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  affiliation?: string;
  period: string;
  status: 'In Progress' | 'Completed';
  grade?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  fileUrl?: string;
}
