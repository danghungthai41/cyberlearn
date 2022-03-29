import { Button } from "antd";
import React, { useState } from "react";

const SwitchButton = ({ buttonArr = ["1", "2"], width = 40, Icon = false }) => {
  const [state, setState] = useState(buttonArr[0]);
  return (
    <div>
      <div className="flex w-auto rounded-xl bg-[#222260]">
        <div className="p-1 flex items-center w-full relative">
          {buttonArr.map((item) => (
            <>
              <button
                className={`${
                  state === item ? "bg-white text-[#222260] " : ""
                } border-none text-white px-3 py-1 rounded-lg w-${width}  text-sm font-semibold flex items-center justify-center space-x-1 text-white duration-500`}
                key={item}
                style={{ color: `${state === item && "#222260"}` }}
                onClick={() => setState(item)}
              >
                {Icon && <Icon
                  className={`${
                    state === item ? "text-[#222260]" : "text-white"
                  }`}
                />}
                <span
                  className={`${
                    state === item ? "text-[#222260]" : "text-white"
                  } duration-500 whitespace-nowrap`}
                >
                  {" "}
                  {item}
                </span>
              </button>
              {/* <span className={`bg-white py-4 px-14 rounded-lg absolute translate-x-28 duration-500`}></span> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
