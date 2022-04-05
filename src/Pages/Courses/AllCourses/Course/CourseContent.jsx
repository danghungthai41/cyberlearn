import { Collapse, Tabs } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import CourseContentItem from "./CourseContentItem/CourseContentItem";
import HTMLReactParser from "html-react-parser";
import dataQA from './Data/dataQA.json'
const { TabPane } = Tabs;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CourseContent = ({ course }) => {
  return (
    <div className="bg-theme border-[1px] border-white p-4 rounded-xl">
      <Tabs>
        <TabPane
          tab={
            <span className="px-2 text-black w-full">
              Khoá học trong lộ trình
            </span>
          }
          key="1"
        >
          <div className="grid grid-cols-3 gap-14 ">
            {course.danhSachKhoaHoc.map((item) => (
              <CourseContentItem
                item={item}
                key={item.id}
                soPhutHoanThanh={course.soPhutHoanThanh}
              />
            ))}
          </div>
        </TabPane>
        <TabPane
          tab={
            <span className="px-2 text-black w-full">Giới thiệu lộ trình</span>
          }
          key="2"
        >
          <div className="bg-theme w-full h-full rounded-xl p-4 ">
            
          {HTMLReactParser(course.moTa)}

          </div>
        </TabPane>
        <TabPane
          tab={<span className="px-2 text-black w-full">Q&A</span>}
          key="3"
        >
          <div className="flex flex-col space-y-5">
            <Search />
            <p>Tất cả câu hỏi (21)</p>
            <Collapse defaultActiveKey={["1"]}>


              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
            
          </div>
        </TabPane>
        <TabPane
          tab={<span className="px-2 text-black w-full">Bài tập và điểm</span>}
          key="4"
        >
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CourseContent;
