import React from "react";
import UseLottie from "../../HOC/Lottie";
import lotie from "../../Utils";
import { Collapse } from "antd";
import { FaCaretRight } from "react-icons/fa";
import CourseComplete from "./CourseComplete/CourseComplete";
import style from "./style.module.css";
import CardItem from "./CourseComplete/CardItem/CardItem";
import coursesList from "./Data/dataCertPage.json";
import dataTable from "./Data/dataTable.json";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Certificate = () => {
  const { Panel } = Collapse;

  return (
    <div className="certificate bg-theme w-full h-full p-4 rounded-xl border-[1px] border-white">
      <div className="flex flex-col space-y-14   ">
        <div className="h-72 flex bg-theme border-[1px] border-white rounded-xl">
          <div className="flex w-1/3 h-full items-center p-4">
            <div className="flex flex-col space-y-3 text-base ">
              <p className="font-medium">
                Điều kiện in chứng nhận và bảng điểm:
              </p>
              <p>- Hãy hoàn thành tất cả các bài tập của lộ trình.</p>
              <p>- Điểm trung bình lộ trình trên 7 (đối với chứng nhận).</p>
              <p>- Hãy hoàn thành tất cả các bài tập của lộ trình.</p>
            </div>
          </div>

          <div className="w-2/3">
            <div className=" scale-110  -translate-y-7">
              <UseLottie
                data={lotie.learningConcept}
                width={400}
                height={320}
                style={{ margin: 0 }}
                loop={1}
              />
            </div>
          </div>
        </div>
        <div>
          <Collapse
            expandIcon={() => (
              <FaCaretRight className="translate-y-8" size={16} />
            )}
            bordered={false}
            collapsible
            ghost={true}
          >
            {coursesList.map((course) => (
              <Panel
                className={`rounded-xl shadow-lg mb-5 `}
                header={<CourseComplete course={course} />}
                key={course.id}
              >
                <div className="flex flex-col space-y-5">
                  {/* {course.danhSachKhoaHoc.map((item) => (
                    <div key={item.id}>
                      <CardItem item={item} />
                    </div>
                  ))} */}

                  {course.danhSachKhoaHoc.map((item) => {
                    return dataTable.map((course1) => {
                      return course1.danhSachKhoaHoc.map((item1) => {
                        return (
                          item.id === item1.maKhoaHoc && (
                            <NavLink to={`detail-khoa-hoc/${item.id}`}>
                              <CardItem
                                item={item}
                                data={item1.danhSachBaiTap}
                              />
                            </NavLink>
                          )
                        );
                      });
                    });
                  })}
                </div>
              </Panel>
            ))}
            {/* 
            <Panel
              className={`rounded-xl p-2 ${style.a} shadow-lg mb-5`}
              header={
                <CourseComplete
                  title={"Combo Lập trình Front End Foundation"}
                  percent={93}
                  quantity={"14/15"}
                />
              }
              key="2"
            >
              <div className="flex flex-col space-y-5">
                <div>
                  <CardItem />
                </div>

                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
              </div>
            </Panel>
            <Panel
              className={`rounded-xl p-2 ${style.a} shadow-lg mb-5`}
              header={
                <CourseComplete
                  title={"Combo Tư duy lập trình, thuật toán, hướng đối tượng"}
                  percent={8}
                  quantity={"1/15"}
                />
              }
              key="3"
            >
              <div className="flex flex-col space-y-5">
                <div>
                  <CardItem />
                </div>

                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
              </div>
            </Panel>
            <Panel
              className={`rounded-xl p-2 ${style.a} shadow-lg mb-5`}
              header={
                <CourseComplete
                  title={
                    "Combo Backend - NodeJS Foundation. Viết API cho dự án thực tế"
                  }
                  percent={0}
                  quantity={"0/21"}
                />
              }
              key="4"
            >
              <div className="flex flex-col space-y-5">
                <div>
                  <CardItem />
                </div>

                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
                <div>
                  <CardItem />
                </div>
              </div>
            </Panel> */}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
