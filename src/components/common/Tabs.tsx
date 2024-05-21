import { useState } from "react";
import { motion } from "framer-motion";

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="">
      <div className="flex text-slate-300">
        {children.map((child: React.ReactElement<TabProps>) => (
          <button
            key={child.props.label}
            onClick={(e) => handleClick(e, child.props.label)}
            className={`${
              activeTab === child.props.label
                ? "rounded-lg bg-[#3D9970] text-white shadow-xl"
                : ""
            } flex-1 text-md font-medium py-2 m-1 cursor-pointer`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      {children.map((child: React.ReactElement<TabProps>) => {
        if (child.props.label === activeTab) {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              key={child.props.label}
              className="shadow-lg mt-2 px-2 text-gray-700 rounded-lg"
            >
              {child.props.children}
            </motion.div>
          );
        }
        return null;
      })}
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export { Tabs, Tab };
