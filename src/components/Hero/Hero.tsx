import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { downloadResume } from "../../utils/firebase/downloadFile";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-white font-notoSerif my-28 mr-64 ml-20">
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-5xl font-semibold tracking-wider py-8"
      >
        Hi, I'm Gourav Manna
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-2xl font-bold tracking-wide"
      >
        A Software Developer with a passion for learning and creating
      </motion.p>
      <motion.button
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-[#3D9970] hover:bg-[#408566] hover:shadow-[2px_2px_20px_2px_#A0DAA9;] flex gap-1 items-center text-white text-xs font-bold py-2 px-4 mt-6 rounded-full w-fit"
        onClick={downloadResume}
      >
        Download CV
        <FiDownload size={20} />
      </motion.button>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex mt-6 gap-4 justify-center items-center"
      >
        <a href="#" className="bg-[#0077b5] p-1 rounded-[50%]">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="bg-[#333] p-1 rounded-[50%]">
          <FaGithub size={20} />
        </a>
        <a href="#" className="bg-[#1877f2] p-1 rounded-[50%]">
          <FaFacebook size={20} />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
