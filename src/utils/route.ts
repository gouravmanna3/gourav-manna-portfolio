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
    title: "ABOUT",
    href: "#",
    Icon: ImUser,
  },
  {
    title: "EXPERIENCE",
    href: "#",
    Icon: MdOutlineWork,
  },
  {
    title: "PROJECTS",
    href: "#",
    Icon: FaLaptopCode,
  },
  {
    title: "CONTACT",
    href: "#",
    Icon: BiSolidMessage,
  },
];
