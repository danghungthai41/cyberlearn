import { Table, Tag } from "antd";
import React from "react";
import { FaCommentDots } from "react-icons/fa";
import UseLottie from "../../../../HOC/Lottie";
import lottie from "../../../../Utils";
const CardItem = () => {
  const columns = [
    {
      title: "Tên Bài tập	",
      dataIndex: "tenBaiTap",
    },
    {
      title: "Trạng Thái",
      dataIndex: "trangThai",
      render: (trangThai) => <Tag color="volcano">{trangThai}</Tag>,
    },
    {
      title: "Loại Bài Tập",
      dataIndex: "loaiBaiTap",
    },
    {
      title: "Điểm",
      dataIndex: "diem",
    },
    {
      title: "Nhận xét",
      dataIndex: "nhanXet",
      render: (nhanXet)=> <FaCommentDots size={15} className="text-center"/>
    },
  ];
  const data = [
    {
      key: "1",
      tenBaiTap: "BÀI TẬP TỔNG KẾT KHÓA 1",
      trangThai: "Chưa làm",
      loaiBaiTap: "Nộp",
      diem: "",
      nhanXet: "",
    },
    {
      key: "2",
      tenBaiTap: "BÀI TẬP TỔNG KẾT KHÓA 2",
      trangThai: "Hết Hạn",
      loaiBaiTap: "Trắc nghiệm",
      diem: "",
      nhanXet: "",
    },
    {
      key: "3",
      tenBaiTap: "BÀI TẬP TỔNG KẾT KHÓA 3",
      trangThai: "Đã chấm",
      loaiBaiTap: "Nộp",
      diem: "9",
      nhanXet: "",
    },
   
  ];
  return (
    <div className="flex h-64">
      {/* Left */}
      <div className="w-1/3 p-3">
        {/* background: 
        linear-gradient(209.21deg, rgb(4, 55, 174) 13.57%,
         rgb(29, 81, 146) 98.38 */}
        <div className="flex justify-between items-center bg-gradient-to-tr from-[#022e94] to-[#1f5ba5] h-full rounded-xl">
          <div>
            <UseLottie
              data={lottie.cardItem_1}
              width={150}
              height={150}
              loop={false}
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white">
              Khóa 1: React nền tảng qua demo dự án
            </p>
          </div>
        </div>
      </div>

      {/* Right Table */}
      <div className="w-2/3 bg-transparent flex items-center">
        <div className="w-full rounded-xl shadow">
          <Table columns={columns} dataSource={data} size="small" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
