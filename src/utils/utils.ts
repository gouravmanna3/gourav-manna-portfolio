import { IconType } from "react-icons";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import react from "../assets/react.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import redux from "../assets/redux.svg";
import tailwindcss from "../assets/tailwind-css.svg";

export interface InfoType {
  icon: IconType;
  text: string;
}

export interface SkillsType {
  image: string;
  title: string;
}

const infoData: InfoType[] = [
  {
    icon: FaUserAlt,
    text: "Gourav Manna",
  },
  {
    icon: MdPhoneInTalk,
    text: "+1 (720)-813-3358",
  },
  {
    icon: MdEmail,
    text: "gouravmanna3@gmail.com",
  },
  {
    icon: FaHome,
    text: "3825 S Emporia Way, CO, USA",
  },
];

const educationData = [
  {
    university: "University of Central Missouri",
    degree: "MS Computer Science",
    startYear: "Jan  2023",
    endYear: "May 2024",
  },
  {
    university: "University of Colorado Denver",
    degree: "MS Computer Science",
    startYear: "Aug 2022",
    endYear: "Dec 2022",
  },
  {
    university: "Sreenidhi Institute of Science & Technology",
    degree: "B.Tech Information Technology",
    startYear: "Aug 2015 ",
    endYear: "May 2019",
  },
];

const skills: SkillsType[] = [
  {
    image: html,
    title: "HTML",
  },
  {
    image: css,
    title: "CSS",
  },
  {
    image: javascript,
    title: "JavaScript",
  },
  {
    image: typescript,
    title: "TypeScript",
  },
  {
    image: react,
    title: "React",
  },
  {
    image: redux,
    title: "Redux",
  },
  {
    image: html,
    title: "Node.js",
  },
  {
    image: css,
    title: "Next.js",
  },
  {
    image: javascript,
    title: "MongoDB",
  },
  {
    image: typescript,
    title: "Git",
  },
  {
    image: react,
    title: "Python",
  },
  {
    image: redux,
    title: "Jest",
  },
  {
    image: html,
    title: "SASS",
  },
  {
    image: html,
    title: "Firebase",
  },
];

export { infoData, educationData, skills };
