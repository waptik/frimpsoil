export interface Category {
  name: string;
  subLabel: string;
  href: string;
}

export interface SubCategory {
  name: string;
  id: string;
  description?: string;
  children?: Template[];
}

export interface Template {
  name: string;
  filename: string;
  tags?: string[];
}
