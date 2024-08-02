export interface Service {
  name: string;
  description: string;
  icon: string;
  alt: string;
  link?: {
    name: string;
    href: string;
  }
}

export interface Contact {
  name: string;
  value: string;
  href: string;
  target: string;
}