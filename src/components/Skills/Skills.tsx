import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { SkillsType, skills } from "../../utils/utils";

const Skills = () => {
  return (
    <div className="p-6 md:p-10 text-white bg-fixed skillsSection">
      <h1 className="text-3xl md:text-5xl font-bold font-notoSerif tracking-wider text-center">
        Skills
      </h1>
      <section className="flex flex-col justify-evenly md:flex-row gap-4 mt-8 text-white items-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="p-4 md:p-4 text-left"
        >
          <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold font-notoSerif">
            I got the experience. <br />
            Here is my toolbelt for success.
          </h2>
        </motion.div>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-y-6 gap-x-12 md:gap-x-16 md:gap-y-8 items-center my-12 md:my-12">
          {skills.map((skill: SkillsType, index) => (
            <motion.div
              variants={fadeIn("", 0.3 + index / 10)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col mx-auto justify-center items-center w-10 md:w-12"
            >
              <img src={skill.image} alt={skill.title} height={50} width={50} />
              <p className="text-xs mt-3 font-bold opacity-60">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
