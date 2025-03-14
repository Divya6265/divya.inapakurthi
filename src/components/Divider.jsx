import React from "react";

const HorizontalRule = () => {
  return (
    <div className="horizontal-rule flex items-center mx-auto" style={{ maxWidth: "512px" }}>
      <div className="flex-1 -mr-0.5 h-0.5 bg-gradient-to-l from-gray-300 dark:from-gray-600 to-transparent"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-code2 text-gray-300 dark:text-gray-600"
      >
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
      <div className="flex-1 -ml-0.5 h-0.5 bg-gradient-to-r from-gray-300 dark:from-gray-600 to-transparent"></div>
    </div>
  );
};

export default HorizontalRule;