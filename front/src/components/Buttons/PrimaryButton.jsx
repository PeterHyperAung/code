import React from "react";

const PrimaryButton = ({ className, children }) => {
  return (
    <button
      className={`py-1.5 px-3 text-white rounded-full bg-primary text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
