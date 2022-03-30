import React from "react";
import Lottie from "react-lottie";

const UseLottie = ({ data, width, height, className = "" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      className={className}
      options={defaultOptions}
      height={height}
      width={width}
    />
  );
};

export default UseLottie;
