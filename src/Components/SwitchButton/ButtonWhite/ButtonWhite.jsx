import React from "react";

const ButtonWhite = ({ children, className = "py-1 px-2" }) => {
  return (
    <button className={`${className} bg-white text-black rounded-lg shadow-xl`}>
      {children}
    </button>
  );
};

export default ButtonWhite;
