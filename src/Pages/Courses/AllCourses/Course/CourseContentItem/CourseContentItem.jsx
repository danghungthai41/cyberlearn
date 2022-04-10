import React from "react";
import { Progress } from "antd";
import { FaBookReader, FaClock, FaDumbbell, FaLeanpub } from "react-icons/fa";

const CourseContentItem = ({
  item: {
    tenKhoaHoc,
    hinhAnh,
    tongTracNghiem,
    tongBaiHoc,
    tongSoPhut,
    soBaiDaHoanThanh,
  },
  soPhutHoanThanh,
}) => {
  return (
    <div className="flex flex-col justify-around h-96 space-y-5 py-8 px-4 bg-gradient-to-tr from-[#0c2e7c] to-[#4c8cdb] rounded-3xl  w-full scale-95 group hover:scale-100 transition-all duration-500 ">
      <div className="flex justify-center">
        <img
          src={`https://backend.cyberlearn.vn/${hinhAnh}`}
          className="w-48 h-36 group-hover:scale-90 transition-all duration duration-500"
          alt=""
        />
      </div>
      <div>
        <p className="text-lg text-white font-semibold text-center">
          {" "}
          {tenKhoaHoc}
        </p>
      </div>
      <div className="px-2 text-gray-300 text-base flex flex-col space-y-3">
        {/* Trên */}

        <div className="flex justify-between ">
          <div className="flex flex-col">
            <p className="flex items-center space-x-3">
              <FaDumbbell />
              <span>{tongTracNghiem}</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaClock />
              <span>{tongBaiHoc}</span>
            </p>
          </div>

          <div>
            <p className="flex items-center space-x-3">
              <FaLeanpub />
              <span>{tongSoPhut}</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaBookReader />
              <span>{soBaiDaHoanThanh}</span>
            </p>
          </div>
        </div>

        {/* Dưới */}
        <div>
          <Progress
            type="line"
            width={100}
            percent={Math.round(soPhutHoanThanh / tongSoPhut)}
            strokeWidth={14}
            format={(percent) => (
              <span className="text-gray-300">{percent} %</span>
            )}
            trailColor="#9CA3AF"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContentItem;
