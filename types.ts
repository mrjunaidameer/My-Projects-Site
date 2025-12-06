export interface Project {
  id: number;
  title: string;
  category: 'CyberSecurity' | 'Web Dev' | 'Education' | 'Commercial';
  description: string;
  link?: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type ContactMode = 'whatsapp' | 'email';

export interface NavLink {
  name: string;
  href: string;
}
