import React from "react";
const NotiRightComponent = () => {
  return (
    <div className="w-full shadow rounded-xl bg-[#FEF2EA] px-3 py-6">
      <div className="flex space-x-4 p-1 justify-between items-center flex-wrap w-full">
        <div className="relative">
          <p className="translate-x-3 ">Trắc nghiệm chương 2</p>
          <div className="h-5 w-1 bg-[#E87E53] absolute rounded-lg left-0 top-0"></div>
        </div>

        <div>
          <p className="font-medium mb-2">70 điểm</p>
        </div>
      </div>
    </div>
  );
};

export default NotiRightComponent;
