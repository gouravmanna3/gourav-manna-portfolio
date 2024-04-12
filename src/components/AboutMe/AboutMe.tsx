import myPhoto from "../../assets/me.jpeg";
import { Tabs, Tab } from "../common/Tabs";

const AboutMe = () => {
  return (
    <section className="p-4 mt-2 font-notoSerif">
      <div className="w-fit m-auto">
        <h4 className="text-xs">&lt;h1&gt;</h4>
        <h1 className=" text-3xl font-bold">About me</h1>
        <h4 className="text-xs">&lt;/h1&gt;</h4>
      </div>
      <div className="flex flex-col xl:flex-row justify-evenly">
        <div className="p-6 relative">
          <div className="m-6">
            <img
              src={myPhoto}
              alt="my_photo"
              className="object-scale-down rounded-full h-auto w-52"
            />
          </div>
        </div>
        <div className="p-4">
          <Tabs>
            <Tab label="Basic Info">
              <div className="py-4">
                <p>
                  With three years of experience, I specialize in frontend
                  development, consistently delivering top-notch work in web
                  technologies
                </p>
              </div>
            </Tab>
            <Tab label="Qualifications">
              <div className="py-4">
                <p>
                  With five years of experience, I specialize in frontend
                  development, consistently delivering top-notch work in web
                  technologies
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
