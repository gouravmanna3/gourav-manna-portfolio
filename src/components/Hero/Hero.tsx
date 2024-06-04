import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { downloadFile } from "../../utils/firebase/downloadFile";
import { sociaLinks } from "../../utils/utils";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col text-white font-notoSerif my-8 ml-8 mr-32 md:my-28 md:mr-64 md:ml-48 w-fit">
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <h3 className="text-[10px] md:text-2xl tracking-wider md:mb-4">
          Hi, I'm
        </h3>
        <h1 className="text-2xl md:text-6xl font-semibold tracking-wider md:mb-4 bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
          Gourav Manna
        </h1>
        <p className="text-[10px] md:text-2xl tracking-wider md:tracking-wide">
          A Software Developer with a passion for learning and creating
        </p>
      </motion.div>
      <motion.button
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="transition-colors duration-300 ease-in-out bg-[#3D9970] hover:bg-[#3a7a5d] flex gap-1 items-center text-[6px] py-1 px-2 mt-2 rounded-md w-fit md:gap-2 md:text-lg md:font-semibold md:py-3 md:px-4 md:mt-6 "
        // className="transition-colors duration-300 ease-in-out flex gap-1 items-center text-[6px] py-1 px-2 mt-2 rounded-md w-fit md:gap-2 md:text-lg md:font-semibold md:py-3 md:px-4 md:mt-6  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-[#3a7a5d] text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300"
        onClick={() =>
          downloadFile("/resume/Gourav_FullStack_Developer_Resume.pdf")
        }
      >
        Download CV
        <FiDownload className="h-2 w-2 md:h-4 md:w-4" />
      </motion.button>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex mt-2 gap-2 md:mt-6 md:gap-8 items-center"
      >
        {sociaLinks.map((socialLink) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href={socialLink.url}
          >
            <socialLink.icon className="h-3 w-3 md:h-7 md:w-7" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
