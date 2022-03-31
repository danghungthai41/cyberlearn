import React from "react";
import Lottie from "react-lottie";

const UseLottie = ({ data, width, height, loop = true, style = {} }) => {
  const customStyle = style;
  const defaultOptions = {
    loop: loop,
    autoplay: loop,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      style={customStyle}
      options={defaultOptions}
      height={height}
      width={width}
    />
  );
};

export default UseLottie;
