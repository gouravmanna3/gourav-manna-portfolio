import { FaUser } from "react-icons/fa";
import { IconType } from "react-icons";

export interface NavlinkType {
  title: String;
  href: string;
  Icon: IconType;
}

export const navLinks: NavlinkType[] = [
  {
    title: "About",
    href: "#",
    Icon: FaUser,
  },
  {
    title: "Experience",
    href: "#",
    Icon: FaUser,
  },
  {
    title: "Projects",
    href: "#",
    Icon: FaUser,
  },

  {
    title: "Contact",
    href: "#",
    Icon: FaUser,
  },
];
