import { Progress } from "antd";
import React, { useState } from "react";
import ButtonWhite from "../../../../Components/SwitchButton/ButtonWhite/ButtonWhite";
import img from "../../../../Theme";
import data from "./Data/data.json";
import CourseItem from "../../../DashBoard/DashBoardLeft/MyCouses/CourseItem/CourseItem";
import moment from "moment";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "animate.css";
const {
  html,
  css3,
  git,
  github,
  reactjs,
  bootstrap,
  js,
  sass,
  css,
  course_1,
  course_2,
  course_3,
  course_4,
  course_5,
} = img;
const imgArr = [html, css3, git, github, reactjs, bootstrap, js, sass, css];

const CourseHeader = ({
  course: {
    tenLoTrinh,
    iconNgonNgu,
    tongPhut,
    soPhutHoanThanh,
    ngayBatDau,
    ngayKetThuc,
    daDangKy,
    tracNghiemHoanThanh,
    tongTracNghiem,
    tongBaiTapNop,
    baiTapNopHoanThanh,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    daDangKy && (
      <div className="relative w-full mb-10" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex h-80 w-full space-x-7">
          <div className="w-1/4 border-[1px] border-white rounded-3xl rounded-tl-none h-80 relative group">
            <div className=" rounded-3xl rounded-tl-none w-full h-full absolute left-0 top-0 z-10 bg-theme backdrop-blur-2xl">
              <div className="flex flex-col justify-between p-4 h-full items-center">
                <div>
                  {imgArr?.map((image, index) => (
                    <img
                      className="w-8 inline mr-3 mb-3"
                      key={index}
                      src={`${image}`}
                      alt=""
                    />
                  ))}
                </div>

                <div>
                  <p className="font-extrabold text-lg">{tenLoTrinh}</p>
                </div>

                <div>
                  <ButtonWhite className="px-8 py-4">Tiếp tục học</ButtonWhite>
                </div>
              </div>
            </div>
            <div
              className="bg-gradient-to-t from-[#408DD5] to-[#630B8C] rounded-3xl rounded-l-[40px] w-56
           h-[320px] absolute left-1 top-5 rotate-[186deg] skew-x-6 skew-y-3 group-hover:skew-y-6 transition-all duration-500"
            ></div>
          </div>
          <div className="w-3/4 border-[1px] border-white rounded-xl h-full bg-theme relative">
            <div className="w-12 h-12 rounded-full absolute left-1/2 -bottom-5 z-50 inline-block bg-white border-4 border-[#EEE7F5]">
              {isOpen ? (
                <FaAngleUp className="absolute top-4 left-[13px] animate-bounce" />
              ) : (
                <FaAngleDown className="absolute top-4 left-[13px] animate-bounce" />
              )}
            </div>
            <div className="p-4 h-full">
              <div className="flex justify-around items-center h-full">
                <div className="flex flex-col items-center w-1/4">
                  <Progress
                    type="circle"
                    width={130}
                    percent={Math.round((soPhutHoanThanh / tongPhut) * 100)}
                    format={(percent) => (
                      <span
                        style={{ color: "#755FD3" }}
                        className="text-2xl font-semibold"
                      >
                        {percent}%
                      </span>
                    )}
                    strokeColor="#755FD3"
                    strokeWidth={10}
                    trailColor="#D0C9F0"
                  />
                  <div className="text-center mt-3 text-base">
                    <p className="font-semibold">
                      {soPhutHoanThanh}/{tongPhut}
                    </p>
                    <p>Phút video</p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-1/4">
                  <Progress
                    type="circle"
                    width={130}
                    percent={Math.round(
                      (tracNghiemHoanThanh / tongTracNghiem) * 100
                    )}
                    format={(percent) => (
                      <span
                        style={{ color: "#47DCD8" }}
                        className="text-2xl font-semibold"
                      >
                        {percent}%
                      </span>
                    )}
                    strokeColor="#47DCD8"
                    strokeWidth={10}
                    trailColor="#C5EFF1"
                  />
                  <div className="text-center mt-3 text-base">
                    <p className="font-semibold">
                      {tracNghiemHoanThanh}/{tongTracNghiem}
                    </p>
                    <p>Trắc nghiệm</p>
                  </div>
                </div>

                <div className="flex flex-col items-center w-1/4">
                  <Progress
                    type="circle"
                    width={130}
                    percent={Math.round(
                      (baiTapNopHoanThanh / tongBaiTapNop) * 100
                    )}
                    format={(percent) => (
                      <span
                        style={{ color: "#EA53AC" }}
                        className="text-2xl font-semibold"
                      >
                        {percent}%
                      </span>
                    )}
                    strokeColor="#EA53AC"
                    strokeWidth={10}
                    trailColor="#F5C6E3"
                  />
                  <div className="text-center mt-3 text-base">
                    <p className="font-semibold">
                      {baiTapNopHoanThanh}/{tongBaiTapNop}
                    </p>
                    <p>Bài tập nộp</p>
                  </div>
                </div>

                <div className="flex flex-col items-center w-1/4">
                  <Progress
                    type="circle"
                    width={130}
                    percent={Math.round(
                      (1 -
                        (Date.parse(moment(ngayKetThuc).format("MM/DD/YYYY")) -
                          Date.now()) /
                          (Date.parse(
                            moment(ngayKetThuc).format("MM/DD/YYYY")
                          ) -
                            Date.parse(
                              moment(ngayBatDau).format("MM/DD/YYYY")
                            ))) *
                        100
                    )}
                    format={(percent) => (
                      <span
                        style={{ color: "#FDCE00" }}
                        className="text-lg font-semibold"
                      >
                        {percent === 100
                          ? "Hết hạn"
                          : `${Math.round(
                              Math.abs(
                                (new Date() -
                                  new Date(
                                    moment(ngayKetThuc).format("MM/DD/YYYY")
                                  )) /
                                  (24 * 60 * 60 * 1000)
                              )
                            )} ngày`}
                      </span>
                    )}
                    strokeColor="#FDCE00"
                    strokeWidth={10}
                    trailColor="#FAE9BA"
                  />
                  <div className="text-center mt-3 text-base">
                    <p className="text-sm whitespace-nowrap font-semibold">
                      Ngày bắt đầu: {moment(ngayBatDau).format("DD/MM/YYYY")}
                    </p>
                    <p className="text-sm whitespace-nowrap font-semibold">
                      Ngày kết thúc: {moment(ngayKetThuc).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CourseHeader;
