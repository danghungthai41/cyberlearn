import { Progress } from "antd";
import React from "react";
import { FaUserShield } from "react-icons/fa";
import { renderSvg } from "../../../Assets/svg";
import AvatarCircle from "../../../Components/Avatar/AvatarCircle";
import ButtonItem from "../../../Components/SwitchButton/ButtonItem/ButtonItem";
import SwitchButton from "../../../Components/SwitchButton/SwitchButton";
import UseLottie from "../../../HOC/Lottie";
import img from "../../../Theme";
import lottie from "../../../Utils";
import MyCourses from "./MyCouses/MyCourses";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

import ButtonDark from "../../../Components/SwitchButton/ButtonDark/ButtonDark.jsx";
const DashBoardLeft = () => {
  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        label: "Ngày",
        data: [0, 1, 2, 3, 1, 2, 3, 4, 8, 7, 6, 3, 2, 4, 6, 4],
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="flex">
        <div className="bg-theme rounded-xl p-6 h-64  border-[1px] border-white w-3/5">
          <div className="flex">
            <div className="bg-[#fffff83] flex flex-col justify-center items-center">
              <div className="translate-x-4 translate-y-10 scale-150">
                <AvatarCircle scale="scale-150" />
              </div>
              <p className="flex space-x-2 items-center -mt-[20px]">
                <span className="text-xl font-semibold">Beginner </span>
                <img className="w-6 h-6" src={img.corporal} alt="" />
              </p>
            </div>
            <div className="ml-12">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <img className="w-16 h-16" src={img.medal} alt="" />
                  <span className="text-xl font-semibold">Đặng Hùng Thái </span>
                </div>
                <div className="flex space-x-5 items-center ">
                  <span
                    className="text-lg font-medium"
                    style={{ color: "#4884ee" }}
                  >
                    Level: 1
                  </span>
                  <div className="flex items-center">
                    <UseLottie width={30} height={50} data={lottie.coinstar} />
                    <span className="font-semibold">2</span>
                  </div>
                </div>

                <div className="text-sm font-semibold">
                  Tích cực
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <img className="w-7" src={img.heart} alt="" />
                      <Progress
                        strokeWidth={16}
                        className="bg-[#4442a81a] rounded-full text-[8px] w-48"
                        percent={80}
                        stroke={10}
                        trailColor="#EBEBF6"
                        strokeColor={{
                          "0%": "#5b86e5",
                          "100%": "#36d1dc",
                        }}
                        showInfo={false}
                      />
                      <span className="whitespace-nowrap text-sm font-bold ">
                        {" "}
                        0/2000 HP
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  Kinh nghiệm
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      {renderSvg(7, 7)}
                      <Progress
                        strokeWidth={16}
                        className="bg-[#4442a81a] rounded-full text-[8px] w-48"
                        percent={50}
                        stroke={10}
                        trailColor="#EBEBF6"
                        strokeColor={{
                          "0%": "#5b86e5",
                          "100%": "#36d1dc",
                        }}
                        showInfo={false}
                      />
                      <span className="whitespace-nowrap text-sm font-bold ">
                        {" "}
                        8/400 MP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-theme ml-4 rounded-xl h-64 w-2/5"
          style={{ border: "1px solid #ffffff" }}
        >
          <div className="w-3/5 m-auto mt-3">
            <SwitchButton
              px="px-3"
              py="py-1"
              buttonArr={["Vật Phẩm", "Cửa Hàng"]}
            />
          </div>
          <div className="w-full h-36 p-5 text-base mt-10">
            Bạn chưa có vật phẩm nào, hãy học tập thật tốt & rèn luyện thật
            nhiều để đổi lấy các vật phẩm bạn nhé! Hoặc tham khảo các Vật Phẩm
            bên Cửa Hàng nè!
          </div>
        </div>
      </div>

      <div className="w-full h-96 flex space-x-4 overflow-hidden ">
        <div className="bg-theme border-[1px] border-white rounded-xl w-2/5 overflow-y-scroll clearScroll">
          <div className="p-3 flex flex-col space-y-2 ">
            <div>
              <p className="text-lg font-normal">Khóa đang học</p>
            </div>
            <div className="flex flex-col  bg-theme p-2 rounded-xl hover:bg-[#EAE5F4] hover:shadow-lg  duration-500 transition-all">
              <div className="flex flex-col space-y-3 text-sm">
                <p className="whitespace-nowrap text-ellipsis overflow-hidden ">
                  Combo Tư duy lập trình, thuật toán, hướng đối tượng
                </p>
                <p>Khóa 1: Tư duy lập trình & nền tảng</p>
                <div className="flex items-center space-x-4">
                  <Progress
                    type="circle"
                    percent={20}
                    width={70}
                    strokeColor="#08bd62d5"
                    strokeWidth={10}
                    trailColor="#beded0d5"
                  />
                  <div className="w-full overflow-hidden">
                    <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-lg font-medium">
                      Bài 19: Biểu thức ? : và bài tập tính tiền
                    </p>

                    <ButtonDark>Tiếp tục học</ButtonDark>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-theme p-2 rounded-xl hover:bg-[#EAE5F4] hover:shadow-lg  duration-500 transition-all">
              <div className="flex flex-col space-y-3 text-sm">
                <p className="whitespace-nowrap text-ellipsis overflow-hidden ">
                  Combo Lập trình Front End Master ReactJS
                </p>
                <p>Khóa 4 React Router & API</p>
                <div className="flex items-center space-x-4">
                  <Progress
                    type="circle"
                    percent={3}
                    width={70}
                    strokeColor="#08bd62d5"
                    strokeWidth={10}
                    trailColor="#beded0d5"
                  />
                  <div className="w-full overflow-hidden">
                    <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-lg font-medium">
                      fix lỗi cài đặt thư viện
                    </p>
                    <ButtonDark>Tiếp tục học</ButtonDark>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  bg-theme p-2 rounded-xl hover:bg-[#EAE5F4] hover:shadow-lg  duration-500 transition-all">
              <div className="flex flex-col space-y-3 text-sm">
                <p className="whitespace-nowrap text-ellipsis overflow-hidden ">
                  Combo Lập trình Front End Master ReactJS
                </p>
                <p>Khóa 4 React Router & API</p>
                <div className="flex items-center space-x-4">
                  <Progress
                    type="circle"
                    percent={3}
                    width={70}
                    strokeColor="#08bd62d5"
                    strokeWidth={10}
                    trailColor="#beded0d5"
                  />
                  <div className="w-full overflow-hidden">
                    <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-lg font-medium">
                      fix lỗi cài đặt thư viện
                    </p>
                    <ButtonDark>Tiếp tục học</ButtonDark>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#ffffff83] border-[1px] border-white rounded-xl w-3/5">
          <div className="flex flex-col space-y-2 p-3">
            <div>
              <p className="text-lg font-normal">Thống kê thời gian học</p>
            </div>
            <div className="flex justify-between w-full">
              <SwitchButton
                px="px-3"
                py="py-1"
                buttonArr={["Bạn", "Top 5"]}
                width={13}
              />
              <SwitchButton
                buttonArr={["1 Tuần", "1 Tháng", "3 Tháng"]}
                width={15}
                px="px-5"
                py="py-1"
              />
            </div>
            <div className="h-full w-full">
              <Line className="w-full h-full" data={data} options={options} />
            </div>
          </div>
        </div>
      </div>

      <MyCourses />
    </>
  );
};

export default DashBoardLeft;
