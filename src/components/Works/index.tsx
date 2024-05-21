import { motion } from "framer-motion";
import project from "../../assets/pp.jpg";
import { fadeIn } from "../../utils/variants";

const Works = () => {
  return (
    <div className="p-6 md:p-10 text-white">
      <h1 className="text-3xl md:text-5xl font-bold font-notoSerif tracking-wider text-center">
        My Latest Works
      </h1>
      <section className="grid md:grid-cols-3 mt-10 gap-6">
        {/* Project 1 */}

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="group relative overflow-hidden border-2 border-black/50 rounded-xl text-white"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={project}
            alt="projects"
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
              Shrink Meet
            </span>
          </div>

          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="group relative overflow-hidden border-2 border-black/50 rounded-xl text-white"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={project}
            alt="projects"
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
              Gourav's Portfolio
            </span>
          </div>

          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="group relative overflow-hidden border-2 border-black/50 rounded-xl text-white"
        >
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={project}
            alt="projects"
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
              WeatherWise App
            </span>
          </div>

          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Works;
