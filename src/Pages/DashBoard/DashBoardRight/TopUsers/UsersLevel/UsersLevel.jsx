import React from "react";
import { renderSvg } from "../../../../../Assets/svg";
import AvatarCircle from "../../../../../Components/Avatar/AvatarCircle";
import img from "../../../../../Theme";
const UsersLevel = () => {
  return (
    <>
      <div className="px-0 py-0">
        <div className="h-20 p-2  rounded-lg shadow">
          <div className="flex h-20 justify-between items-center translate-y-[-7px]">
            <div className="flex space-x-1 h-full items-center">
              <span className="mr-3">1#</span>
              <div className="h-full overflow-hidden translate-x-1 translate-y-2">
                <AvatarCircle percent={100} />
              </div>
              <p className="flex justify-center items-center space-x-2">
                <span className="text-sm font-semibold">Beginner </span>
                <img className="w-3 h-3" src={img.corporal} alt="" />
              </p>
            </div>

            <div className="">
              <p className="flex">
                {renderSvg(5, 5)}
                <span>270</span>
              </p>
              <p>Level: 80</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 py-0">
        <div className="h-20 p-2  rounded-lg shadow">
          <div className="flex h-20 justify-between items-center translate-y-[-7px]">
            <div className="flex space-x-1 h-full items-center">
              <span className="mr-3">2#</span>
              <div className="h-full overflow-hidden translate-x-1 translate-y-2">
                <AvatarCircle percent={100} />
              </div>
              <p className="flex justify-center items-center space-x-2">
                <span className="text-sm font-semibold">Beginner </span>
                <img className="w-3 h-3" src={img.corporal} alt="" />
              </p>
            </div>

            <div className="">
              <p className="flex">
                {renderSvg(5, 5)}
                <span>270</span>
              </p>
              <p>Level: 70</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 py-0">
        <div className="h-20 p-2  rounded-lg shadow">
          <div className="flex h-20 justify-between items-center translate-y-[-7px]">
            <div className="flex space-x-1 h-full items-center">
              <span className="mr-3">3#</span>
              <div className="h-full overflow-hidden translate-x-1 translate-y-2">
                <AvatarCircle percent={100} />
              </div>
              <p className="flex justify-center items-center space-x-2">
                <span className="text-sm font-semibold">Beginner </span>
                <img className="w-3 h-3" src={img.corporal} alt="" />
              </p>
            </div>

            <div className="">
              <p className="flex">
                {renderSvg(5, 5)}
                <span>270</span>
              </p>
              <p>Level: 60</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 py-0">
        <div className="h-20 p-2  rounded-lg shadow">
          <div className="flex h-20 justify-between items-center translate-y-[-7px]">
            <div className="flex space-x-1 h-full items-center">
              <span className="mr-3">4#</span>
              <div className="h-full overflow-hidden translate-x-1 translate-y-2">
                <AvatarCircle percent={100} />
              </div>
              <p className="flex justify-center items-center space-x-2">
                <span className="text-sm font-semibold">Beginner </span>
                <img className="w-3 h-3" src={img.corporal} alt="" />
              </p>
            </div>

            <div className="">
              <p className="flex">
                {renderSvg(5, 5)}
                <span>270</span>
              </p>
              <p>Level: 7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 py-0">
        <div className="h-20 p-2  rounded-lg shadow">
          <div className="flex h-20 justify-between items-center translate-y-[-7px]">
            <div className="flex space-x-1 h-full items-center">
              <span className="mr-3">5#</span>
              <div className="h-full overflow-hidden translate-x-1 translate-y-2">
                <AvatarCircle percent={100} />
              </div>
              <p className="flex justify-center items-center space-x-2">
                <span className="text-sm font-semibold">Beginner </span>
                <img className="w-3 h-3" src={img.corporal} alt="" />
              </p>
            </div>

            <div className="">
              <p className="flex">
                {renderSvg(5, 5)}
                <span>270</span>
              </p>
              <p>Level: 50</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersLevel;
