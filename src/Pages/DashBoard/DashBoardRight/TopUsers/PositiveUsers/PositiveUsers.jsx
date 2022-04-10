import React from "react";
import { renderSvg } from "../../../../../Assets/svg";
import AvatarCircle from "../../../../../Components/Avatar/AvatarCircle";
const PositiveUsers = ({ item, index }) => {
  return (
    <div className="">
      <div className="h-20 p-2  rounded-lg shadow">
        <div className="flex h-20 justify-between items-center translate-y-[-7px]">
          <div className="flex h-full items-center">
            <span className="mr-3">{index + 1}#</span>
            <div className="h-full overflow-hidden translate-x-1 translate-y-2">
              <AvatarCircle percent={100} avatar={item.avatar} />
            </div>
            <div className="flex flex-col text-sm">
              <p className=" whitespace-nowrap">{item.hoTen}</p>
              <p className="flex space-x-2 items-center">
                <span>{item.danhHieu} </span>
                <img
                  className="w-3 h-3"
                  src={`https://backend.cyberlearn.vn${item.danhHieuHinh}`}
                  alt=""
                />
              </p>
            </div>
          </div>

          <div className="">
            <p className="flex">
              {renderSvg(5, 5)}
              <span>{item.kinhNghiem}</span>
            </p>
            <p>Level: {item.capDo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositiveUsers;
