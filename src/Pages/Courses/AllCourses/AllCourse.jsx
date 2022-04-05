import React from "react";
import CourseHeader from "./Course/CourseHeader";
import CourseContent from "./Course/CourseContent";
import data from "./Course/Data/data.json";
import { Collapse } from "antd";
const { Panel } = Collapse;

const AllCourse = () => {
  return (
    <Collapse defaultActiveKey={["1"]} ghost={true} expandIcon={() => ""}>
      {data.map((course) => (
        <Panel
          className="bg-transparent"
          header={<CourseHeader course={course} />}
          key={course.id}
        >
          <CourseContent course={course} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default AllCourse;
