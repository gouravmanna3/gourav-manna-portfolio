import { motion } from "framer-motion";
const Test = () => {
  return (
    <div>
      <motion.div
        className="h-[200px] w-[200px] bg-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        // whileHover={{ opacity: 1, scale: 2 }}
      ></motion.div>
    </div>
  );
};

export default Test;
