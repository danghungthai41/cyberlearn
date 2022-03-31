import React from "react";

const ButtonDark = ({ children }) => {
  return (
    <button className="bg-[#222260] py-1 px-2 text-white rounded-lg">
      {children}
    </button>
  );
};

export default ButtonDark;
