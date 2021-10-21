import { data } from "../../data";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Us",
    children: data.map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: `/about/${category.href}`,
    })),
  },
  {
    label: "Products & Services",
    href: "/pas",
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
