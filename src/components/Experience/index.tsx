import { downloadFile } from "../../utils/firebase/downloadFile";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineWork } from "react-icons/md";
import thoughtworks_logo from "../../assets/thoughtworks.jpg";
import intralinks from "../../assets/intralinks.png";
import cognizant from "../../assets/cognizant_logo.png";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="p-6 text-white font-notoSerif" id="experience">
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-center">
        Experience
      </h1>
      <div className="flex flex-col gap-12 md:flex-row justify-center mt-10">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3D9970", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #3D9970" }}
            date="Dec 2021 - July 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <img
              className="md:h-12 md:w-64 mb-4 mx-auto"
              src={thoughtworks_logo}
              alt="thoughtworks_logo"
            />
            <h3 className="vertical-timeline-element-title text-lg md:text-xl">
              Application Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hyderabad, India
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3D9970", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #3D9970" }}
            date="Jan 2020 - Nov 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <img
              className="md:h-12 w-40 md:w-48 mb-4 mx-auto"
              src={intralinks}
              alt="intralinks_logo"
            />
            <h3 className="vertical-timeline-element-title text-[17px] md:text-xl">
              Associate Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hyderabad, India
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3D9970", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #3D9970" }}
            date="Jan 2019 - May 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <img
              className="md:h-12 md:w-40 mb-4 mx-auto"
              src={cognizant}
              alt="cognizant_logo"
            />
            <h3 className="vertical-timeline-element-title text-lg md:text-xl">
              Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hyderabad, India
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded overflow-hidden"
        >
          <div className="flex gap-5 md:gap-9 items-center justify-center p-6">
            <img
              className="w-32 md:w-28 h-8"
              src={thoughtworks_logo}
              alt="thoughtworks_logo"
            />
            <div>
              <h2 className="text-base font-bold">
                Application Developer Consultant
              </h2>
              <div className="text-sm">Thoughtworks</div>
              <div className="text-sm">Dec 2021 - July 2022</div>
            </div>
          </div>
          <div className="p-1">
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-justify">
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Worked on an internal application for McKinsey & Company,
                  employing Agile and Scrum methodologies to ensure robust
                  delivery. Adopted a Test-Driven Development (TDD) approach to
                  build React-based UI components
                </p>
              </li>
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Played an active role in design reviews, contributing valuable
                  insights to design recommendations
                </p>
              </li>
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Implemented Cypress automated testing alongside unit tests,
                  delivering a 30% decrease in bug-related delays.
                </p>
              </li>
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Engaged in pair programming alongside senior developers and
                  clients, contributing valuable perspectives, and assisting in
                  the detection and resolution of critical bugs.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded overflow-hidden"
        >
          <div className="flex gap-5 md:gap-9 items-center justify-center p-6">
            <img
              className="w-32 md:w-28 h-8"
              src={intralinks}
              alt="intralinks_logo"
            />
            <div>
              <h2 className="text-base font-bold">
                Associate Software Engineer
              </h2>
              <div className="text-sm">SS&C Intralinks</div>
              <div className="text-sm">Jan 2020 - Nov 2021</div>
            </div>
          </div>
          <div className="p-1">
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-justify">
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Significantly contributed to the development of new UI
                  components for a SaaS-based fintech product using React,
                  Redux, and TypeScript within an Agile framework
                </p>
              </li>
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Led the modernization of a user management app, which involved
                  designing and developing the micro frontends and was
                  recognized as the{" "}
                  <a
                    className="text-blue-400 hover:cursor-pointer"
                    onClick={() => downloadFile("/docs/invaluableAward.png")}
                  >
                    Most Valuable Team
                  </a>{" "}
                  for that quarter.
                </p>
              </li>
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Worked closely with the backend team to develop and integrate
                  RESTful APIs in Node.js within a microservice architecture
                </p>
              </li>
              <li className="flex py-1">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-[5px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  Collaborated with product designers to develop UI mockups and
                  wireframes using Figma and InVision
                </p>
              </li>
            </ul>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Experience;
