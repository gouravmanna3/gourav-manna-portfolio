import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { downloadResume } from "../../utils/firebase/downloadFile";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:items-center text-white font-notoSerif my-8 ml-8 mr-32 md:my-28 md:mr-64 md:ml-20">
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-lg md:text-5xl font-semibold tracking-wider md:py-6"
      >
        Hi, I'm Gourav Manna
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-[6px] md:text-2xl md:font-bold tracking-wider md:tracking-wide"
      >
        A Software Developer with a passion for learning and creating
      </motion.p>
      <motion.button
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex gap-1 items-center text-white text-[6px] py-1 px-2 mt-2 rounded-md w-fit md:gap-2 md:text-sm md:font-medium md:py-2 md:px-4 md:mt-6  bg-[#3D9970] hover:bg-[#408566] hover:shadow-[2px_2px_20px_2px_#A0DAA9;]"
        onClick={downloadResume}
      >
        Download CV
        <FiDownload className="h-2 w-2 md:h-4 md:w-4" />
      </motion.button>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex mt-2 gap-2 md:mt-6 md:gap-4 items-center"
      >
        <a href="#" className="">
          <FaLinkedin className="h-2 w-2 md:h-6 md:w-6" />
        </a>
        <a href="#" className="">
          <FaGithub className="h-2 w-2 md:h-6 md:w-6" />
        </a>
        <a href="#" className="">
          <FaFacebook className="h-2 w-2 md:h-6 md:w-6" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
