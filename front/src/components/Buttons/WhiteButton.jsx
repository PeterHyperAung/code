import React from "react";

const WhiteButton = ({ children, className }) => {
  return (
    <button
      className={`py-1.5 px-3 text-primary rounded-full bg-white text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
