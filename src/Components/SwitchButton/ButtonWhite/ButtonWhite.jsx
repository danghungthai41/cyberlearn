import React from "react";

const ButtonWhite = ({
  children,
  className = "bg-white py-1 px-2 text-black rounded-lg shadow-xl",
}) => {
  return <button className={`${className}`}>{children}</button>;
};

export default ButtonWhite;
