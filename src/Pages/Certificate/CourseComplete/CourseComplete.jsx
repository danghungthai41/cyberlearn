import { Progress } from "antd";
import React from "react";
import ButtonDark from "../../../Components/SwitchButton/ButtonDark/ButtonDark";
import ButtonItem from "../../../Components/SwitchButton/ButtonItem/ButtonItem";
import ButtonWhite from "../../../Components/SwitchButton/ButtonWhite/ButtonWhite";
const CourseComplete = ({title, percent,quantity}) => {
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <div className="">
          <div className="flex items-center flex-wrap">
            <Progress
              type="circle"
              width={90}
              percent={percent}
              format={(percent) => (
                <span className="text-2xl font-semibold text-[#755FD3]">
                  {percent}%
                </span>
              )}
              strokeColor="#755FD3"
              strokeWidth={10}
              trailColor="#D0C9F0"
            />
            <div className="ml-4 text-xl">
              <p>{title}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 justify-center items-center">
          <div>
            <p className="text-base font-medium">Bạn đã hoàn thành {quantity} bài tập</p>
          </div>
          <div className="flex space-x-3">
            <ButtonDark>Xem chứng nhận</ButtonDark>
            <ButtonWhite>Xem bảng điểm</ButtonWhite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComplete;
