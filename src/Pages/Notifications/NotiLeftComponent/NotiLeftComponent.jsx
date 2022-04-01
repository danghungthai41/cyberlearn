import React from "react";
import img from "../../../Theme";
const NotiLeftComponent = () => {
  return (
    <div className="w-full shadow rounded-xl">
      <div className="flex space-x-4 p-1 items-center">
        <div className="px-4">
          <img className="w-12" src={img.heart} alt="" />
        </div>

        <div>
          <p className="font-medium mb-2">
            Điểm tích cực của bạn bằng 0 (bạn sẽ bị hạn chế một số chức năng),
            hãy online hoặc mua item để tăng điểm tích cực
          </p>
          <p className="text-sm ">01/04/2022 10:19 AM</p>
        </div>
      </div>
    </div>
  );
};

export default NotiLeftComponent;
