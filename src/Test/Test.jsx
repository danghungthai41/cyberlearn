import React from "react";
import Lottie from "react-lottie";
import data from "./1446-bikingiscool.json";
const Test = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-screen h-screen">
      <Lottie options={defaultOptions} height={400} width={400} />{" "}
    </div>
  );
};

export default Test;
