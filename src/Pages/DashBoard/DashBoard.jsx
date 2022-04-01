import React from "react";

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
