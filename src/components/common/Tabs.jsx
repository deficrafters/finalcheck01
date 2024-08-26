import React, { useEffect, useState } from "react";

const Tabs = ({ children, handleTab, tab = 0 }) => {
  const [activeTab, setActiveTab] = useState(tab);
  const [animate, setAnimate] = useState(false);

  const handleTabClick = (index) => {
    setAnimate(true);
    handleTab && handleTab(index);
    setTimeout(() => {
      setActiveTab(index);
      setAnimate(false);
    }, 300); // duration of the animation
  };

  useEffect(() => {
    setActiveTab(+tab);
  }, [tab]);
  const childrenCount = React.Children.count(children);

  return (
    <div className=''>
      <div
        className={`w-fit rounded-lg border-[0.5px] border-cool-80 grid grid-cols-${childrenCount} w-auto p-1`}
      >
        {React.Children.map(children, (child, index) => (
          <button
            className={`transition-colors duration-300 rounded-md text-sm font-semibold px-4 py-2 ${
              index === activeTab
                ? "bg-cool-50 text-white"
                : "bg-transparent text-cool-80"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className='relative mt-2'>
        {React.Children.map(children, (child, index) =>
          index === activeTab ? (
            <div
              className={`transition-opacity duration-300 ${
                animate ? "opacity-0" : "opacity-100"
              }`}
            >
              {child}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
