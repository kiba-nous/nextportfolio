import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Nur Syazwani Naqibah",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/nur-syazwani-naqibah",
  },
  {
    name: "Website",
    username: "snaqibah.my",
    icon: Icons.globe,
    link: "https://snaqibah.my",
  },
  {
    name: "Phone",
    username: "+6018-2130655",
    icon: Icons.phone,
    link: "tel:+60182130655",
  },
  {
    name: "Gmail",
    username: "syazwaninaqibah",
    icon: Icons.gmail,
    link: "mailto:syazwaninaqibah@gmail.com",
  },
];
