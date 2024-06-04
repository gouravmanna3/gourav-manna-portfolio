import { ImUser } from "react-icons/im";
import { IconType } from "react-icons";
import { MdOutlineWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";

export interface LinkType {
  title: String;
  to: string;
  Icon: IconType;
}

export const navLinks: LinkType[] = [
  {
    title: "ABOUT",
    to: "about",
    Icon: ImUser,
  },
  {
    title: "EXPERIENCE",
    to: "experience",
    Icon: MdOutlineWork,
  },
  {
    title: "PROJECTS",
    to: "projects",
    Icon: FaLaptopCode,
  },
  {
    title: "CONTACT",
    to: "contact",
    Icon: BiSolidMessage,
  },
];
