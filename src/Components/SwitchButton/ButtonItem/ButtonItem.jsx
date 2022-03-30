import React from 'react'

const ButtonItem = ({children}) => {
  return (
    <button
    // className={`${
    //   state === item ? "bg-white text-[#222260] " : ""
    // } border-none text-white px-3 py-1 rounded-lg w-${width}  text-sm font-semibold flex items-center justify-center space-x-1 text-white duration-500`}
    // key={item}
    // style={{ color: `${state === item && "#222260"}` }}
    // onClick={() => setState(item)}
  >
    {/* {Icon && <Icon
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
    </span> */}
    {children}
  </button>
  )
}

export default ButtonItem