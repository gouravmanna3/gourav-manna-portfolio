import { IconType } from "react-icons";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";

export interface InfoType {
  icon: IconType;
  text: string;
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

export { infoData, educationData };
