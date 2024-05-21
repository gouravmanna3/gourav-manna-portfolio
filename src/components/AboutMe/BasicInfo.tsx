import hireMe from "../../assets/hire_me.gif";

const BasicInfo = () => {
  return (
    <div className="py-4 h-[430px] text-white">
      <div className="md:leading-6 text-[12px] md:text-base text-justify">
        I'm Gourav Manna, a graduate student in computer science, currently
        based in Denver, Colorado. Also, a frontend-focused software engineer
        with three years of experience and robust JavaScript skills. I have a
        proven track record of solving complex technical issues, optimizing
        website performance, and collaborating seamlessly with cross-functional
        teams. My passion lies in creating visually captivating and
        user-friendly interfaces that enhance engagement and drive conversions.
        I am dedicated to delivering high-quality frontend solutions while
        continuously expanding my knowledge of new technologies. <br /> <br />
        When I'm not at the computer, I'm usually working out, listening to
        podcast, cooking or hanging out with my family/friends.
      </div>
      <div className="mt-6 ">
        <button
          type="button"
          className="transition-colors duration-300 ease-in-out bg-[#3D9970] hover:bg-[#3a7a5d] md:font-semibold rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <a href="mailto:gouravmanna3@gmail.com">Hire Me</a>
        </button>
        <img
          src={hireMe}
          alt="hire_me"
          className="relative left-24 bottom-20 ml-14 h-auto w-28 md:w-32"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
