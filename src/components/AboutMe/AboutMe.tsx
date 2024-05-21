import { motion } from "framer-motion";
import myPhoto from "../../assets/about_gourav.jpg";
import { Tabs, Tab } from "../common/Tabs";

import BasicInfo from "./BasicInfo";
import Qualifications from "./Qualifications";
import { fadeIn } from "../../utils/variants";

const AboutMe = () => {
  return (
    <section className="p-6 font-notoSerif text-white">
      <div className="w-fit mx-auto mb-6 md:my-4">
        <h1 className="text-3xl md:text-5xl font-bold font-notoSerif tracking-wider">
          About me
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 0.5,
            ease: "linear",
          }}
          className=" m-4 md:m-6 shadow-[0_4px_6px_rgba(0,0,0,.3)] px-4 py-4 h-fit bg-white "
        >
          <img
            src={myPhoto}
            alt="my_photo"
            className="h-auto w-40 md:w-72 shadow-2xl "
          />
        </motion.div>
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
