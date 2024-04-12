import { useState } from "react";

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
    <div className="max-w-md mx-auto">
      <div className="flex border-b border-gray-300">
        {children.map((child: React.ReactElement<TabProps>) => (
          <button
            key={child.props.label}
            onClick={(e) => handleClick(e, child.props.label)}
            className={`${
              activeTab === child.props.label
                ? "border-b-2 border-purple-500"
                : ""
            } flex-1 text-gray-700 font-medium py-2`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      {children.map((child: React.ReactElement<TabProps>) => {
        if (child.props.label === activeTab) {
          return <div key={child.props.label}>{child.props.children}</div>;
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
