import { Progress } from "antd";
import React from "react";
import UseLottie from "../../../../HOC/Lottie";
import CourseItem from "./CourseItem/CourseItem";
import lottie from "../../../../Utils";
import { myCousesList } from "./dataCourses";
import ButtonDark from "../../../../Components/SwitchButton/ButtonDark/ButtonDark";
const MyCourses = () => {
  return (
    <div className="relative">
      <div className="w-full h-96 flex space-x-4 overflow-hidden">
        <div className="bg-theme border-[1px] border-white rounded-xl w-3/5 overflow-y-scroll clearScroll">
          <div className="p-3 flex flex-col space-y-2 ">
            <div className="">
              <p className="text-lg">Lộ trình của bạn</p>
            </div>
            {myCousesList.map((course, index) => (
              <CourseItem course={course} key={index} />
            ))}
          </div>
        </div>
        <div className="bg-theme border-[1px] border-white rounded-xl w-2/5 ">
          <div className="p-3 flex flex-col space-y-2">
            <div>
              <p className="text-lg">Lộ trình phù hợp với bạn</p>
            </div>
            <div className="bg-theme py-3 px-6 rounded-xl space-y-7">
              <div className="flex items-center space-x-4 mix-blend-darken">
                <UseLottie
                  data={lottie.workingOnComputer}
                  width={70}
                  height={70}
                />
                <p className="text-base">Combo Lập trình Front End VueJS</p>
              </div>
              <div className="w-full  flex justify-end">
                <ButtonDark> Đi đến lộ trình</ButtonDark>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
