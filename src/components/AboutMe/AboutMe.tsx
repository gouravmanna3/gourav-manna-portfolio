import { motion } from "framer-motion";
import myPhoto from "../../assets/me.jpeg";
import { Tabs, Tab } from "../common/Tabs";

import BasicInfo from "./BasicInfo";
import Qualifications from "./Qualifications";
import { fadeIn } from "../../utils/variants";

const AboutMe = () => {
  return (
    <section className="p-6 bg-light font-notoSerif ">
      <div className="w-fit mx-auto mb-6 md:my-4">
        <h1 className=" text-4xl font-bold font-permanentMarker tracking-widest">
          About me
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="px-6">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-6"
          >
            <img
              src={myPhoto}
              alt="my_photo"
              className=" rounded-full h-auto w-72 shadow-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="md:p-6 md:w-[630px] md:ml-12"
        >
          <Tabs>
            <Tab label="Basic Info">
              <BasicInfo />
            </Tab>
            <Tab label="Qualifications">
              <Qualifications />
            </Tab>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
