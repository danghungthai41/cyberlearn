import { Progress } from "antd";
import React from "react";
import ButtonGoTo from "../../../../../Components/SwitchButton/ButtonGoTo/ButtonGoTo";

const CourseItem = ({ course: { titleCourse, lstCircle } }) => {
  return (
    <div className="bg-theme flex p-3 rounded-xl justify-between">
      <div className="w-1/3 ">
        <p className="text-lg mb-3">{titleCourse}</p>
        <ButtonGoTo> Đi đến lộ trình</ButtonGoTo>
      </div>
      <div className="flex w-2/3 space-x-4 justify-around">
        {lstCircle.map((item) => (
          <div key={item.titleCourse}>
            <Progress
              type="circle"
              width={90}
              percent={item.percent}
              format={(percent) => (
                <span
                  style={{ color: `${item.colorPercentText}` }}
                  className="text-2xl font-semibold"
                >
                  {percent}%
                </span>
              )}
              strokeColor={`${item.colorPercentText}`}
              strokeWidth={10}
              trailColor={`${item.colorStroke}`}
            />
            <div className="text-center mt-3 text-base">
              <p className="font-semibold">{item.decimal}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseItem;
