import React from "react";
import img from "../../../Theme";
const NotiLeftComponent = ({ item: { noiDung, ngayThang } }) => {
  return (
    <div className="w-full shadow rounded-xl">
      <div className="flex space-x-4 p-1 items-center">
        <div className="px-4 w-2/12 flex justify-center">
          <img className="w-8 " src={img.heart} alt="" />
        </div>

        <div className="w-10/12">
          <p className="font-medium mb-2">{noiDung}</p>
          <p className="text-sm ">{ngayThang}</p>
        </div>
      </div>
    </div>
  );
};

export default NotiLeftComponent;
