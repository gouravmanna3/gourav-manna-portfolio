import { InfoType, infoData } from "../../utils/utils";
import jsLogo from "../../assets/JS.png";
import reactLogo from "../../assets/react.png";
import typescriptLogo from "../../assets/typescript.png";
import reduxLogo from "../../assets/redux.png";

const BasicInfo = () => {
  return (
    <div className="py-4 h-[430px]">
      <div className="leading-6 text-lg">
        With three years of experience, I specialize in frontend development,
        consistently delivering top-notch work in web technologies
      </div>
      <div className="grid xl:grid-cols-2 gap-y-4 mt-8 mb-8 text-base">
        {infoData.map((info: InfoType) => {
          return (
            <div className="flex items-center gap-x-2">
              <info.icon className="h-4 w-4" />
              <div>{info.text}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3">
        <img src={jsLogo} alt="javascript-logo" className="h-14 w-14" />
        <img src={reactLogo} alt="reactt-logo" className="h-14 w-16" />
        <img src={typescriptLogo} alt="reactt-logo" className="h-14 w-18" />
        <img src={reduxLogo} alt="reactt-logo" className="h-14 w-18" />
      </div>
    </div>
  );
};

export default BasicInfo;
