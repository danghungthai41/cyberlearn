import { Progress } from "antd";
import React from "react";
import img from "../../Theme";
import { FaAngleDown } from "react-icons/fa";
const AvatarCircle = ({ percent = 20, scale = "" }) => {
  // width circle width img transform img stroke-width
  return (
    <div className="relative">
      <div className="">
        <Progress
          type="circle"
          percent={percent}
          width={60} //120
          className={`absolute rotate-180 ${scale}`}
          strokeWidth={6}
          strokeColor={{
            "0%": "#5b86e5",
            "100%": "#36d1dc",
          }}
          trailColor="#EBEBF6"
          format={() => (
            <div className="rotate-180">
              <img
                src={img.avatartest}
                className={`rounded-full h-12 w-12 translate-x-[6px]`}
                alt=""
              />
            </div>
          )}
        ></Progress>
        <img
          className={`absolute h-[20px]
          top-10
          object-cover translate-x-[18px]`}
          src={img.medal}
          alt=""
        />
        <svg width={80} className="h-auto">
          <circle cx={30} cy={30} r={30} fill="#EBEBF6" />
        </svg>
      </div>
    </div>
  );
};

export default AvatarCircle;
