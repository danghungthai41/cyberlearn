import React from "react";
import {
  FaBars,
  FaBell,
  FaRegMoon,
  FaQuestion,
  FaAngleDown,
} from "react-icons/fa";
import img from "../../Theme";
import { Tooltip, Button, Progress } from "antd";

import UseLottie from "../../HOC/Lottie";
import lottie from "../../Utils";
import AvatarCircle from "../Avatar/AvatarCircle";
import { useHistory } from "react-router-dom";
const Header = ({ collapse, setCollapse }) => {
  const history = useHistory();
  const onSetCollapse = () => {
    setCollapse(!collapse);
  };
  const handleClickLogo = () => {
    history.push("/dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="bg-theme fixed w-full h-20 border-[1px] border-white backdrop-blur z-50">
      <div className="flex h-full justify-between items-center px-11">
        <div className="flex items-center h-full">
          <FaBars
            size={20}
            className="mr-3 cursor-pointer"
            onClick={onSetCollapse}
          />
          <img
            src={img.logo}
            alt=""
            className="w-40 cursor-pointer"
            onClick={handleClickLogo}
          />
        </div>

        <div className="flex h-full space-x-4 py-2">
          <div className="flex flex-col w-72">
            <Tooltip
              title="Đây là khu vực hiển thị điểm tích cực của bạn

              Bạn sẽ nhận được điểm kinh nghiệm sau khi hoàn thành lộ trình, khoá học, bài học, bài tập,...
              
              Bạn sẽ bị trừ điểm tích cực sau khi không học trong 1 khoảng thời gian, nộp bài quá hạn, làm sai trắc nghiệm,.."
              placement="bottom"
              className="cursor-pointer"
            >
              <div className="flex items-center  h-1/2 space-x-2">
                <img className="w-7" src={img.heart} alt="" />
                <Progress
                  width={140}
                  strokeWidth={16}
                  className="bg-[#4442a81a] rounded-full text-[8px]"
                  percent={20}
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
            </Tooltip>
            <Tooltip
              title="Đây là khu vực hiển thị điểm kinh nghiệm của bạn
Bạn sẽ nhận được điểm kinh nghiệm sau khi hoàn thành lộ trình, khoá học, bài học, bài tập,..."
              placement="bottom"
              className="cursor-pointer"
            >
              <div className="flex items-center  h-1/2 space-x-2">
                <svg
                  className="w-12 h-12 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24  24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#2995CD" d="M22 15l-10 9-10-9L12 0z"></path>
                      <path fill="#50B5E9" d="M4.6 14.7l7.4-3v9.6z"></path>
                      <path
                        fill="#1F709A"
                        d="M12 11.7l7.4 3-7.4 6.6z"
                        opacity=".25"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 11.7V3.6l7.4 11.1z"
                        opacity=".25"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M4.6 14.7L12 3.6v8.1z"
                        opacity=".5"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M7.2 14.3L12 7.2l4.8 7.1-4.8 4.3z"
                        opacity=".5"
                      ></path>
                    </g>
                  </g>
                </svg>
                <Progress
                  width={140}
                  strokeWidth={16}
                  className="bg-[#4442a81a] rounded-full text-[8px]"
                  percent={20}
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
                  0/2000 XP
                </span>
              </div>
            </Tooltip>
          </div>
          <div className="w-12 h-full flex items-center justify-center">
            <FaBell size={20} />
          </div>
          <div className="flex justify-between items-center space-x-10">
            <Tooltip
              className="cursor-pointer"
              title="Đây là level hiện tại của bạn, học càng nhiều, level càng cao, nếu bạn học giỏi sẽ được ghi danh vào TOP USER"
            >
              <span
                className="text-lg font-medium"
                style={{ color: "#4884ee" }}
              >
                Level: 1
              </span>
            </Tooltip>
            <Tooltip
              className="cursor-pointer"
              title="Công dụng: Bạn có thể dùng coin để mua vật phẩm để đổi voucher hoặc tăng điểm tích cực và điểm kinh nghiệm. Bạn sẽ nhận được coin sau khi học bài, hoàn thành bài tập , hoàn hành trắc nghiệm,... và ngày tích lũy.

- Lưu ý: Số coin của bạn sẽ được làm mới khi quá hạn tích lũy coin.
- Ngày làm mới coin: 31/05/2022"
            >
              <div className="flex items-center">
                <UseLottie width={50} height={50} data={lottie.coinstar} />
              </div>
            </Tooltip>
          </div>
          <div className="h-full flex items-center justify-between">
            <div className="h-full">
              <AvatarCircle />
            </div>

            <span className="text-lg font-semibold mr-2">Đặng Hùng Thái</span>
            <span>
              <FaAngleDown size={20} />
            </span>
          </div>
          <div className="h-full flex items-center w-10">
            <div
              className="w-10 h-10 rounded-full shadow-lg flex justify-center items-center
              bg-[#F7F7F7]"
            >
              <FaRegMoon size={20} className="leading-8" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#212260] rounded-full w-5 h-5 flex items-center justify-center">
              <FaQuestion size={12} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
