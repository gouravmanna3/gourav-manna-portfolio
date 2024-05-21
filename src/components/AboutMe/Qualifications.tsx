import { educationData } from "../../utils/utils";
import { motion } from "framer-motion";

const Qualifications = () => {
  return (
    <div className="py-3 md:py-4 text-xs">
      <p className="text-xl md:text-2xl font-bold text-white">
        My Awesome Journey
      </p>
      <div className="flex flex-col gap-y-4 mt-4">
        {educationData.map((education) => {
          const { university, degree, startYear, endYear } = education;
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              key={university}
              className="flex gap-x-4 group bg-[#DEF5E5] rounded-[5px]"
            >
              <div className="h-inherit w-[1px] text-black border-[1px] border-[#77B0AA] relative ml-2">
                {/* <div className="w-[11px] h-[11px] rounded-full  bg-[#9FE2BF] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div> */}
              </div>
              <div>
                <div className="text-xs font-medium relative -left-3 pt-1">
                  {endYear}
                </div>
                <div className="font-semibold text-sm leading-none mb-2 mt-4">
                  {university}
                </div>
                <div className="text-xs leading-none mb-4">{degree}</div>
                <div className="text-xs font-medium relative -left-3 pb-1">
                  {startYear}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Qualifications;
