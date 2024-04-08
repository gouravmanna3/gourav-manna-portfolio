import { ImUser } from "react-icons/im";
import { IconType } from "react-icons";
import { MdOutlineWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export interface LinkType {
  title: String;
  href: string;
  Icon: IconType;
}

export const navLinks: LinkType[] = [
  {
    title: "About",
    href: "#",
    Icon: ImUser,
  },
  {
    title: "Experience",
    href: "#",
    Icon: MdOutlineWork,
  },
  {
    title: "Projects",
    href: "#",
    Icon: FaLaptopCode,
  },
  {
    title: "Contact",
    href: "#",
    Icon: BiSolidMessage,
  },
];
