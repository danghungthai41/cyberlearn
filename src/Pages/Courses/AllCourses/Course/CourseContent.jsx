import { Cascader, Collapse, Input, Select, Table, Tabs } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import CourseContentItem from "./CourseContentItem/CourseContentItem";
import HTMLReactParser from "html-react-parser";
import dataQA from "./Data/dataQA.json";
import { NavLink } from "react-router-dom";
import { Tag } from "antd";
import { FaAngleRight, FaCommentDots } from "react-icons/fa";

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Option } = Select;
const columns = [
  {
    title: "Tên Bài tập	",
    dataIndex: "tenBaiTap",
  },
  {
    title: "Thời gian làm",
    dataIndex: "thoiGianLam",
    render: (thoiGianLam) => <Tag color="volcano">{thoiGianLam}</Tag>,
  },
  {
    title: "Loại Bài Tập",
    dataIndex: "loaiBaiTap",
  },
  {
    title: "Điểm",
    dataIndex: "diem",
  },
  {
    title: "Bài làm",
    dataIndex: "baiLam",
  },
  {
    title: "Nhận xét",
    dataIndex: "nhanXet",
    render: (nhanXet) =>
      nhanXet !== "" && <FaCommentDots size={15} className="text-center" />,
  },
];
const exerciseAndMark = [
  {
    tenBaiTap: "Bài tập chương 2",
    thoiGianLam: "Hết hạn nộp",
    loaiBaiTap: "Bài tập nộp",
    baiLam: "0",
    diem: "0",
    nhanXet: "",
    ngayNop: "",
    nguoiCham: "",
    ngayCham: "",
  },
  {
    tenBaiTap: "Trắc nghiệm chương 2",
    thoiGianLam: "Hoàn thành",
    loaiBaiTap: "Trắc nghiệm",
    baiLam: "",
    diem: "70",
    nhanXet: "",
    ngayNop: "",
    nguoiCham: "",
    ngayCham: "",
  },
  {
    tenBaiTap: "Trắc nghiệm bài 33 (khóa 1)",
    thoiGianLam: "Hoàn thành",
    loaiBaiTap: "Trắc nghiệm",
    baiLam: "",
    diem: "100",
    nhanXet: "",
    ngayNop: "",
    nguoiCham: "",
    ngayCham: "",
  },
];
const options = dataQA.map((item) => item.tieuDe);
const CourseContent = ({ course }) => {
  return (
    <div className="bg-theme border-[1px] border-white p-4 rounded-xl courseContent">
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
              <NavLink to="/detail-khoa-hoc">
                <CourseContentItem
                  item={item}
                  key={item.id}
                  soPhutHoanThanh={course.soPhutHoanThanh}
                />
              </NavLink>
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
            <Input.Group className="w-full">
              <Select className="w-full" placeholder="Tìm câu hỏi">
                {options.map((item, index) => (
                  <Option key={index} className="w-full">
                    {item}
                  </Option>
                ))}
              </Select>
            </Input.Group>
            <p>Tất cả câu hỏi {`(${dataQA.length})`}</p>
            <Collapse
              defaultActiveKey={["1"]}
              ghost={true}
              className="panel-header"
            >
              {dataQA.map((item) => (
                <Panel
                  header={
                    <div className="rounded-xl p-4 shadow-xl w-full">
                      <p className="mb-3">{item.tieuDe}</p>
                      <Tag color="magenta">{item.tags}</Tag>
                    </div>
                  }
                  key={item.id}
                >
                  <p>{HTMLReactParser(item.noiDung)}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </TabPane>
        <TabPane
          tab={<span className="px-2 text-black w-full">Bài tập và điểm</span>}
          key="4"
        >
          <div className="w-full rounded-3xl shadow ">
            <Table
              pagination={{
                position: "bottom",
                pageSize: 3,
              }}
              columns={columns}
              dataSource={exerciseAndMark}
              size="small"
              className="text-center"
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CourseContent;
