import React from "react";
import SwitchButton from "../../Components/SwitchButton/SwitchButton";
import CoursesCarousel from "./CoursesCarousel/CoursesCarousel";
import AllCourse from "./AllCourses/AllCourse";
const Courses = () => {
  return (
    <div>
      <div className="mb-8">
        <CoursesCarousel />
      </div>

      <div className="">
        <div className="w-full bg-theme p-4 rounded-xl border-[1px] border-white">
          <div className="w-1/3">
            <SwitchButton
              px="px-5"
              width={80}
              py="py-3"
              buttonArr={["Lộ trình của bạn", "Tất cả lộ trình"]}
            />
          </div>
        </div>

        <div className="w-11/12 m-auto mt-5">
          <AllCourse />
        </div>
      </div>
    </div>
  );
};

export default Courses;
