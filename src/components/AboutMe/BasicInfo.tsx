import { InfoType, infoData } from "../../utils/utils";

const BasicInfo = () => {
  return (
    <div className="py-4">
      <div className="leading-6 text-lg">
        With three years of experience, I specialize in frontend development,
        consistently delivering top-notch work in web technologies
      </div>
      <div className="grid xl:grid-cols-2 gap-y-4 mt-8 mb-12 text-base">
        {infoData.map((info: InfoType) => {
          return (
            <div className="flex items-center gap-x-2">
              <info.icon className="h-4 w-4" />
              <div>{info.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BasicInfo;
