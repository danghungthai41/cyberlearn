import React from "react";
import UseLottie from "../../HOC/Lottie";
import lottie from "../../Utils";
import img from "../../Theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Courses = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className="w-full">
            <div className="flex bg-gradient-to-t from-[#82b2e7] to-[#e7f0fd] rounded-xl h-96 px-3">
              {/* background: linear-gradient(to top,  0%,  100%); */}

              <div className="w-1/2 p-8">
                <h1 className="text-2xl font-medium mb-7">
                  E-learning Gaminification
                </h1>
                <p className="text-base tracking-wider">
                  Tính năng độc đáo nhất E-learning Gaminification tại
                  CyberLearn đầu tiên trên thế giới dành cho mảng lập trình sử
                  dụng các yếu tố chơi trò chơi trong trải nghiệm học tập, đây
                  là công cụ mạnh mẽ để truyền cảm hứng cho người học, thử thách
                  bản thân. Bạn sẽ có rất nhiều Động lực bởi vì bạn được tặng
                  Huy Chương, Huy hiệu, Level, Giải thưởng với rất nhiều thách
                  thức để bạn tiếp tục tiến lên, bạn có động lực để cải thiện
                  đánh bại đối thủ cạnh tranh trong bảng xếp hạng học tập. Hệ
                  thống kích thích não bộ của bạn để bạn học tập tập trung và
                  phát triển tốt nhất.
                </p>
              </div>

              <div className="w-1/2 h-full">
                <UseLottie
                  data={lottie.gamefi}
                  width={400}
                  height={400}
                  loop={false}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className="flex bg-gradient-to-t from-[#c2daf3] to-[#ffffff] rounded-xl h-96 px-3">
              {/* background: linear-gradient(to top,  0%,  100%); */}

              <div className="w-1/2 p-8">
                <h1 className="text-2xl font-medium mb-7">
                  Tương tác thảo luận cùng Mentor và Giảng viên
                </h1>
                <p className="text-base tracking-wider">
                  Tương tác học tập qua phần thảo luận cùng Mentor và giảng
                  viên. Hệ thống sẽ chấm điểm tương tác để giúp các học viên
                  tăng cường kỹ năng hỗ trợ lẫn nhau.
                </p>
              </div>

              <div className="w-1/2 h-full">
                <img src={img.support} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full">
            <div className="flex bg-gradient-to-t from-[#f1f4f7] to-[#ebf8ff] rounded-xl h-96 px-3">
              {/* background: linear-gradient(to top,  0%,  100%); */}

              <div className="w-1/2 p-8">
                <h1 className="text-2xl font-medium mb-7">
                  Cung cấp chứng nhận và bảng điểm{" "}
                </h1>
                <p className="text-base tracking-wider">
                  Đối với các lộ trình nghề chuyên sâu, sau khi bạn hoàn thành
                  tất cả bài tập và dự án, chúng tôi sẽ chấm bài và có thể vấn
                  đáp trực tuyến để review các phần bạn đã thực hiện, nếu đạt
                  các tiêu chí chúng tôi đưa ra, bạn sẽ được cấp chứng nhận trực
                  tuyến.
                </p>
              </div>

              <div className="w-1/2 h-full">
                <img src={img.graduation} alt="" className="h-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Courses;
