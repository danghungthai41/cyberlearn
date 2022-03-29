import React from "react";
import { Calendar } from "antd";
import TopUsers from "./TopUsers/TopUsers";

const DashBoardRight = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
    <div className="fixed mr-5 h-full overflow-y-scroll">
      <div className="flex flex-col space-y-4">
        <div className="border-[1px] border-white rounded-xl bg-theme p-3 ">
          <div className="mb-4">
            <p className="text-lg font-semibold">Task và Deadline</p>
          </div>
          <div className="site-calendar-demo-card mb-2">
            <Calendar
              fullscreen={false}
              onPanelChange={onPanelChange}
              headerRender={() => ""}
            />
          </div>
          <div className="relative p-1 bg-[#fef2ea] h-20 rounded-lg">
            <div className="ml-4 ">
              <p>Khóa 1: Tư duy lập trình & nền tảng</p>
              <p>Bài tập chương 2</p>
              <p>Deadline 7/18/2021 5:08:17 PM</p>
            </div>
            <div className="absolute h-4/5 w-1  bg-[#e87e53] left-2 top-2 rounded-full"></div>
          </div>
        </div>
        <div className="h-full bg-theme">
          <TopUsers />
        </div>
      </div>
    </div>
  );
};

export default DashBoardRight;
