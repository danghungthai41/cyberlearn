import React, { useState } from "react";
import AvatarCircle from "../../Components/Avatar/AvatarCircle";
import Header from "../../Components/Header/Header";
import LayoutAdmin from "../../HOC/Layout/LayoutAdmin";
import UseLottie from "../../HOC/Lottie";
import img from "../../Theme";
import { Progress } from "antd";
import { renderSvg } from "../../Assets/svg";
import SwitchButton from "../../Components/SwitchButton/SwitchButton";
import { FaUserShield } from "react-icons/fa";
import DashBoardLeft from "./DashBoardLeft/DashBoardLeft";
import DashBoardRight from "./DashBoardRight/DashBoardRight";
const DashBoard = () => {
  return (
    <>
      <div className="flex space-x-4 w-full">
        <div className="flex flex-col space-y-4 w-full ">
          {/* Left */}
          <DashBoardLeft />
        </div>

        {/* Right */}
        <div className="h-full w-[470px]">
          <DashBoardRight />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
