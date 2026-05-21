export interface SessionItem {
  id?: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

export interface SessionProps {
  id?: string;
  title: string;
  description: string;
  complements?: string;
  buttonText: string;
  buttonHref: string;
  items: SessionItem[];
  bgColor?: string;
}

export interface HeaderProps {
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
}

export interface FooterProps {
  companyName?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  socialLinks?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
}
