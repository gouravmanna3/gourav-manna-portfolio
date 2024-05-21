import { IconType } from "react-icons";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import react from "../assets/react.svg";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import redux from "../assets/redux.svg";
import tailwindcss from "../assets/tailwind-css.svg";
import nodejs from "../assets/node-js.svg";
import mongodb from "../assets/mongodb.svg";
import python from "../assets/python.svg";
import sass from "../assets/sass.svg";
import firebase from "../assets/firebase.svg";
import git from "../assets/git.svg";
import jest from "../assets/jest.svg";
import { TestimonialProps } from "../components/Testimonials/Testimonials.types";

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

const sociaLinks = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/gourav-manna-6363a1160/",
  },
  {
    icon: FaGithub,
    url: "https://github.com/gouravmanna3",
  },
  {
    icon: FaFacebook,
    url: "https://www.facebook.com/gourav.manna.589/",
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
    image: nodejs,
    title: "Node.js",
  },
  {
    image: css,
    title: "Next.js",
  },
  {
    image: mongodb,
    title: "MongoDB",
  },
  {
    image: git,
    title: "Git",
  },
  {
    image: python,
    title: "Python",
  },
  {
    image: jest,
    title: "Jest",
  },
  {
    image: sass,
    title: "SASS",
  },
  {
    image: firebase,
    title: "Firebase",
  },
  {
    image: tailwindcss,
    title: "Tailwind",
  },
];

const testimonialData: TestimonialProps[] = [
  {
    name: "ABC",
    review:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application",
    role: "Lead Software Engineer",
    organization: "Intralinks",
  },
  {
    name: "DEF",
    review:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application",
    role: "Senior Software Engineer",
    organization: "Intralinks",
  },
  {
    name: "GHI",
    review:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application",
    role: "Software Engineer",
    organization: "Thoughtworks",
  },
  {
    name: "JKL",
    review:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application",
    role: "Software Engineer",
    organization: "Medpace",
  },
];

export { infoData, sociaLinks, educationData, skills, testimonialData };
