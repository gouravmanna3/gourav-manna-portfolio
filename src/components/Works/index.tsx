import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import shrink from "../../assets/shrink-meet.png";
import portfolio from "../../assets/portfolio.png";
import expenseTracker from "../../assets/expenseTracker.png";
import { fadeIn } from "../../utils/variants";

const Works = () => {
  return (
    <div className="p-6 md:p-10 text-white" id="projects">
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
            src={expenseTracker}
            alt="projects"
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-3xl bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
              Dollar Tracker
            </span>
          </div>

          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <a
              href="https://github.com/gouravmanna3/my-dollars-tracker"
              className="text-xl text-white hover:cursor-pointer"
              target="_blank"
            >
              <FaCode />
            </a>
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
            src={portfolio}
            alt="projects"
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-3xl bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
              Gourav's Portfolio
            </span>
          </div>

          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <a
              href="https://github.com/gouravmanna3/gourav-manna-portfolio"
              className="text-xl text-white hover:cursor-pointer"
              target="_blank"
            >
              <FaCode />
            </a>
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
            src={shrink}
            alt="projects"
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-3xl bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
              Shrink Meet
            </span>
          </div>

          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <a
              href="https://github.com/gouravmanna3/shrink-meet-app"
              className="text-xl text-white hover:cursor-pointer"
              target="_blank"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>
      </section>
      <h1 className="text-center m-4 md:m-8 font-notoSerif text-xs">
        more projects coming soon...
      </h1>
    </div>
  );
};

export default Works;
