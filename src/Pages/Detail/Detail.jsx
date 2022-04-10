import React from "react";
import UseLottie from "../../HOC/Lottie";
import lottie from "../../Utils";
import img from "../../Theme";
const Detail = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ background: `url(${img.bgTheme}` }}
    >
      <p className="text-2xl font-bold text-[#222260]">
        RẤT TIẾC !!! BẠN KHÔNG CÓ QUYỀN TRUY CẬP
      </p>
      <UseLottie
        data={lottie.crying}
        width={400}
        height={500}
        style={{ mixBlendMode: "darken" }}
      />
    </div>
  );
};

export default Detail;
