import React from "react";
import img from "../../Theme";
import { FaFacebookF } from "react-icons/fa";
import UseLottie from "../../HOC/Lottie";
import lottie from "../../Utils"
const SignIn = () => {
  return (
    <div
      className="h-screen bg-fixed"
      style={{ backgroundImage: `url(${img.bgTheme})` }}
    >
      <div className="h-full p-10">
        <div className="h-full bg-[#ffffff8c] p-7 rounded-xl overflow-hidden border-[1px] border-white	">
          <div className="flex h-full">
            <div className="absolute bottom-12 left-1/3 ml-40">
              <a
                className="mr-3 underline"
                href="https://cyberlearn.vn"
                target="_blank"
                rel="noreferrer"
              >
                CyberLearn
              </a>
              <a
                className="underline"
                href="https://cybersoft.edu.vn"
                target="_blank"
                rel="noreferrer"
              >
                CyberSoft
              </a>
            </div>
            <div className="w-3/5 ">
              <img className="w-[170px]" src={img.logo} alt="" />

              <div className="flex flex-col justify-start mt-[115px] w-full h-full space-y-12 px-7">
                <h1
                  className="text-5xl font-semibold mb-3"
                  style={{ color: "#313e5b" }}
                >
                  Hệ thống học tập CyberLearn
                </h1>
                <p>Vui lòng đăng nhập bằng Facebook để học tập</p>
                <button className="p-6 bg-[#4C69BA] rounded-lg w-80 text-white flex items-center">
                  <FaFacebookF className="mr-1 text-2xl" />
                  ĐĂNG NHẬP VỚI FACEBOOK
                </button>
              </div>
            </div>

            <div
              className="h-full w-2/5 relative left-5"
              style={{ backgroundImage: `url(${img.whiteCirle})` }}
            >
              <UseLottie data={lottie.computer} width={600} height={600}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
